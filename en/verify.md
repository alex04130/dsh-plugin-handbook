<!-- doccheck:no-entries -->
# How to verify this yourself (outlasts any single conclusion)

As of 2026-09-13 · DSH 0.1.5-rc.2.

Most capability docs only list APIs. This one teaches how to falsify your own conclusions.

## Four rules

| # | Rule | Counter-example |
|---|---|---|
| 1 | **Positive control before a zero-hit:** first prove the probe catches a known sample, then announce "none in the tree" | A session with no v2 descriptor cannot prove "reading v2 throws" |
| 2 | **Test both sides of the boundary:** one legal value, one illegal | Only testing `open(id,'read')` succeeds, and skipping `'append'`, misses GATE-001 |
| 3 | **Sealed requires exhausting entries:** the same capability may have a tool surface, a service surface, and a panel surface | Official subagent tool is off by default (GATE-031); service-layer `startContinuable({agentOptions})` still works (CAP-030) |
| 4 | **Value on disk vs runtime reread:** editing a static `.rN.mjs` does not mean the process changed (ENV-020) | Skill description file renamed, `skill_list` still shows the old name = no hot reload |

## How to run a positive control

1. Find a sample that **definitely has** the feature under test (version, access value, preset line).
2. Run the probe. It must print the verbatim error or return shape you expect.
3. Only then sweep unknown samples with it.
4. A zero-hit may be written as "none". If the probe never went green, stop and write unverified.

## Suggested paired commands

### Session handles

```bash
# In a plugin or node REPL (needs ctx.sessionPersistence)
# Inside: open(id, 'read') then handle.read(0, N)
# Outside: open(id, 'append'). The type has no such value; jsonl treats non-read as write; later append may SessionReadOnlyError
```

Seeing `persistence.inspect is not a function` means you are still on the 0.1.4 surface (GATE-002).

### Descriptor version

```bash
# Positive control: a session whose subagent/descriptor has data.version === 2
# Read path (persistence/query) may throw:
#   failed to read session: subagent/descriptor 0 uses unsupported descriptor version 2
# foldSubagentDescriptor path: version !== 3 → undefined (dsh-subagent/lib/index.js:1359)
# Without a v2 sample, do not announce "what the read path does"
```

### restrict

```js
// Outside: global ctx
ctx.tools.restrict({ deny: ['bash'] })
// Expected: tools.restrict() requires a scoped context (agent.ctx): ...

// Outside: naming the transport
agent.ctx.tools.restrict({ deny: ['run_code'] })
// Expected: tools.restrict() cannot name reserved PTC mode presentation transport "run_code"...
```

### PTC direct call

On a `mode: ptc` preset, call `bash` on the model-visible surface (do not wrap it in `run_code`). Expected: `unknown tool "bash": only `run_code` is callable directly — ...`.

Control: the same tool inside a `run_code` program via `await tools.bash({...})` should succeed.

### Hot reload (static .rN.mjs)

1. Read a string in some `.rN.mjs` on disk that should appear at runtime.
2. Reread that string through the matching tool/skill list.
3. Edit the file, wait a few seconds, reread. Still old = no hot reload; restart.

Sample (replayed on this machine): skill `cross-session-mailbox` description, new name on disk vs old name from `skill_list`.

### Official subagent model change

Measure all three entries. Missing one does not count as sealed:

| Entry | Expected (0.1.5-rc.2 factory) |
|---|---|
| Official `subagent` tool with provider/model | Those fields absent from the schema, or `child model selection is disabled for this tool instance` |
| Same, but preset `modelSelectionSettings: true` and Host mounts the settings module | Fields appear (recipe in GATE-031) |
| `ctx.subagents.startContinuable({ agentOptions: { model } })` with in-process spawn | Can change (CAP-030) |

## Minimum set after an upgrade

Aligns with the five live runs "read / write / list / boot / name clash":

1. `stat` + `open('read')` + `read` on a real log.
2. `open('write')` + `append` (confirm access is not `'append'`).
3. `list()` unpacks `.header.id`.
4. Start a new session; confirm preset line syntax (`name` is a string).
5. Two presets must not register the same inspect provider on process-global.

Format gates / renamed fields that A-group can automate: source grep is enough. One A-group failure stops the run; do not write "passed overall".
