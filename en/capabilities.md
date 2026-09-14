<!-- translation of Chinese source; CAP/GATE/ENV ids duplicate by design. Do not pass this directory to doccheck together with ../. Field names are English (Status/Evidence/As of), so the Chinese-field checker will not validate them. -->

# Can I still use this? (capability file)

Full gate text is in `./gates.md`. How to read the five values: available = it runs; partially available = factory-off, recipe turns it on; sealed = every entry fails and there is no on-switch; never available = never existed; unverified = this observation did not run it.
As of 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2. Five-value status: `available` / `partially available (off by default; recipe attached)` / `sealed (gate id attached)` / `never available` / `unverified`.
Cross-refs use CAP-xxx / GATE-xxx / ENV-xxx / OP-xxx, or `./<file>.md`.
Line numbers point at `/usr/lib/node_modules/@deepseek-ai/dsh/node_modules/@deepseek-ai/<pkg>/lib/...`.

First mention: preset (预设). After this, `preset`.

## Index

| ID | One sentence | Status |
|---|---|---|
| CAP-010 | Can I still inspect once and get metadata + full text | sealed (GATE-002) |
| CAP-001 | How to read an offline session body | available |
| CAP-002 | How to append events to an offline session | available |
| CAP-003 | What shape does list() return now | available |
| CAP-011 | What happens on open(id, 'append') | available (GATE-003 attached: silent write) |
| CAP-023 | Can I restrict tools on global ctx | sealed (GATE-021) |
| CAP-024 | Can I restrict run_code away | sealed (GATE-020) |
| CAP-020 | Does restrict strip tools the subagent registered itself | available |
| CAP-022 | Can the model call bash directly under PTC | partially available (off by default; recipe attached) |
| CAP-025 | Can I register a tool named run_code | sealed (GATE-022) |
| CAP-040 | Can the official subagent tool let the model change the child's model | partially available (off by default; recipe attached) |
| CAP-030 | Does startContinuable still change model when given agentOptions | available |
| CAP-041 | Can a subagent pop its own approval dialog | sealed (GATE-032) |
| CAP-042 | Is a still-v2 subagent visible on the panel | sealed (GATE-010) |
| CAP-031 | spawn vs fork | available |
| CAP-043 | Can an out-of-process provider set a child model | sealed (GATE-030) |
| CAP-032 | How deep can subagents nest | available |
| CAP-033 | Can our <spawn-tool> change model | available |
| CAP-056 | Can persona still write text: | sealed (GATE-050) |
| CAP-057 | Can I hang a persona line globally | sealed (GATE-051) |
| CAP-055 | Can I get systemPrompt without inject | partially available (off by default; recipe attached) |
| CAP-050 | Do the official skill tool and our skill manager collide on the name | available |
| CAP-060 | What is a subagent's approval policy | available (parent) / sealed (GATE-032, child) |
| CAP-065 | Can a subagent widen its sandbox from inside | sealed (GATE-032) |
| CAP-061 | What if approval has no answerer | available |
| CAP-034 | Whose model does a subagent use by default | available |
| CAP-070 | Change route but omit thinking effort — what happens | available |
| CAP-080 | What we use agent/session-start for | available |
| CAP-081 | Can I stop a tool call before it runs | available |
| CAP-090 | How many times does one preset hang in the process | available |
| CAP-091 | Can two plugins be cordisInspect providers at once | sealed (GATE-091) |
| CAP-092 | Can kv.open('agent_teams') open twice | sealed (GATE-090) |
| CAP-044 | Does <team-preset> mount the official subagent tool | never available |
| CAP-021 | Can one session call another session's tools (via tool_router) | available |
| CAP-051 | How sessions talk (cross-session layer) | available |

# Sessions and persistence

## CAP-001 · How to read an offline session body

- **What it is**: open a session already on disk, read events, do not take the write lock.
- **Implementation**: `open(id,'read')` + `handle.read(offset, length)` + `handle.close()`. Types `handle.d.ts:75`; cross-session layer usage `<host-plugin>.mjs:164-174`.
- **Status**: **available**.
- **Evidence**:

```js
const snapshot = await sessionPersistence.stat(id)
const handle = await sessionPersistence.open(id, 'read')
try {
  const result = await handle.read(0, Number.MAX_SAFE_INTEGER)
  // result.events
} finally {
  await handle.close()
}
```

`stat` only gives `{ header, revision, eventCount?, sizeBytes? }`, **no events** (`index.d.ts:22-31, 149`).
- **We depend on this**: cross-session layer list/read/export, a mode-switch plugin inspectCompat, team-org.r2 persistenceRead, dynplugins <compat-plugin>/<compat-plugin>.
- **Related**: GATE-002, CAP-010.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: readable, but you must stat + open(read) + read + close; inspect is gone.

## CAP-002 · How to append events to an offline session

- **What it is**: write events onto a session that is not running (e.g. change preset, change request header).
- **Implementation**: `open(id,'write')` → `handle.append(events)` → `handle.flush()?` → `handle.close()`. `handle.d.ts:88-99`.
- **Status**: **available** (given you got the write lease).
- **Evidence**: abstract-class comments say service-level `append` is gone (`index.d.ts:86-87` says append lives on the **handle**, best-effort; flush is the durability barrier). Old `persistence.append(id, events)` is `is not a function`.
- **Limits**: a live write owner yields `SessionAlreadyOwnedError`.
- **Merge note (A CAP-001)**: A folded read/append into "partially available" because old service-level append/inspect vanished. Read is CAP-001 (available); append is this entry — still gated by the write lease and `SessionAccess='write'`. Those limits stay here; the whole entry is not walked back to partially available.
- **We depend on this**: <compat-plugin> writes `agent-preset/selected`, <compat-plugin> writes `request/header`, both via `appendCompat()`.
- **Related**: GATE-001, GATE-002.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: writable, but you must open('write') and get a handle; there is no append on the service.

## CAP-003 · What shape does list() return now

- **What it is**: list every on-disk session this process can see.
- **Implementation**: `SessionPersistence.list()` → `readonly SessionPersistenceSnapshot[]` (`index.d.ts:155`). Each item is `{ header, revision, ... }`, not a bare `SessionHeader`.
- **Status**: **available** (shape is incompatible with 0.1.4).
- **Evidence**: types as above. Cross-session layer unpacks `snapshot.header`.
- **We depend on this**: cross-session layer list. Skipping the unpack drops `id`.
- **Related**: GATE-002.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: listable, but each row is wrapped in a snapshot; use `.header`.

## CAP-010 · Can I still inspect once and get metadata + full text

- **What it is**: old core `sessionPersistence.inspect(id)` returned metadata + full text in one shot.
- **Implementation**: that method is no longer on the `SessionPersistence` abstract class. GATE-002. Separately, `sessionController` / generated face `ctx.remote.session.inspect(sessionId)` (`dsh-tool-cordis/lib/index.js:2288-2301`) → `SessionInspection` (includes events).
- **Status**: **sealed (GATE-002)** — the `sessionPersistence.inspect` entry. `sessionController.inspect` is still there and walks the same format gate (a v2 descriptor blows up the same way).
- **Evidence**: persistence package has no `inspect`. Cordis tool surface still declares remote.session.inspect.
- **Entry enumeration**:
  1. Service face `sessionPersistence.inspect`: not a function (2026-09-14 isolation script).
  2. Remote face `sessionController.inspect`: rerun 2026-09-14 on a session with the cordis tool surface. Positive control v3 `ok: true, eventCount: 11614`. Negative v2 bare uuid → `failed to **observe** session "...": subagent/descriptor 0 uses unsupported descriptor version 2`. The other entry on the same gate (cross-session read) says **read**, not observe — two entries, not one function in a different shell.
- **Bypass**: read the body with stat+open+read (CAP-001).
- **Related**: GATE-002, CAP-001.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: inspect on persistence is gone; inspect on sessionController is still declared, and it walks the same format gate.

## CAP-011 · What happens on open(id, 'append')

- **What it is**: someone guesses the access name is `append`, or JS passes a value the type does not have.
- **Implementation**: GATE-003 (illegal access silently treated as write). Refusal of append on a **read** handle is GATE-001, not this entry.
- **Status**: **available** (GATE-003 attached). Runtime does not refuse `'append'`: treats it as `'write'`, append succeeds. The type domain never had that value, so TS can catch it and JS cannot.
- **Evidence (2026-09-14 isolated jsonl)**: `open(id, 'append')` → `handleAccess: "write"`, `appendError: null`. jsonl `:2350` only tests `access === "read"`.
- **Not**: later refused. What is refused is append on a **read handle** (CAP-002 negative, `SessionReadOnlyError`).
- **Related**: GATE-003, GATE-001, CAP-002.
- **As of 2026-09-14 · DSH 0.1.5-rc.2**
- **In one sentence**: in JS, passing append is getting write permission, with no error.

---

# Tool registration and presentation

## CAP-020 · Does restrict strip tools the subagent registered itself

- **What it is**: given an allow/deny table for a subagent, does it also filter tools registered at its own layer (e.g. structured output).
- **Implementation**: `dsh-tools/lib/index.js:2832-2873`. restrict only filters the **inherited face** (global + ancestors); **this layer** `own.tools` always enters visible.
- **Status**: **available** (this is the repaired behaviour; comments `:2846-2850` say the old reading treated the "exempt set" as "global layer", so after presets moved tools onto the agent plane the filter went dead, then it became "filter what is not mine").
- **Evidence**: `:2870-2872` `if (own !== void 0) for ... visible.set(name, definition)`.
- **Related**: CAP-023.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: it does not strip own-layer tools; it only filters what was inherited from a parent.
- **restrict family note (A CAP-003)**: using `tools.restrict` as a "progressive disclosure primitive" (stripped tools still reachable via `tool_router`) is **falsified** — stripped names vanish on that agent, and router forward is also `unknown tool` (one measured tool-surface narrowing, `<internal-notes>`). The right path is narrow-at-register: preset lines, or scoped `agent.ctx.tools.register` (A CAP-032 / this entry's own-layer exemption). restrict itself is not fully dead: GATE-021 blocks global, GATE-020 blocks naming run_code, this entry says own-layer tools are not filtered.

## CAP-021 · Can one session call another session's tools

- **What it is**: `tool_router` meta-tool; `action=call` forwards to the inner tool; approval follows the inner tool.
- **Implementation**: `tool_router` on this session's tool surface (list / describe / call). A recorded it as community-plugin / dynplugins/trouter or static; **registering package path was not re-checked at merge**.
- **Status**: **available**.
- **Evidence**: independent observation: `tool_router({action:'call', tool:'probe_agent_id'})` returned a routed result. On a session where only `run_code` is directly callable (PTC session), other tools (including tool_router) go through `await tools.tool_router(...)` inside run_code.
- **Limits**: names stripped by `tools.restrict` are also `unknown tool` via the router (CAP-020 family note / one measured tool-surface narrowing).
- **We depend on this**: hidden tools reached via router; almost all host tools on this PTC session go run_code → tools.*.
- **Related**: CAP-020, GATE-022.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: it can forward; names restrict stripped cannot.

## CAP-022 · Can the model call bash directly under PTC

- **What it is**: <team-preset> visible surface is PTC; the model issues a native function call named bash.
- **Implementation**: GATE-022.
- **Status**: **partially available (off by default; recipe attached)**. On this <team-preset> session you cannot call it directly; change the preset presentation and you can. bash was not deleted from the runtime.
- **Evidence**: <team-preset> `agent.cordis.yml:213-216` `mode: ptc`; `collapses()` is true for top-level calls other than run_code. Measured: direct bash on this session yielded `unknown tool "bash"`.
- **Unlock recipe**: change that preset's `@deepseek-ai/dsh-agent-tool-presentation` `config.mode` from `ptc` to `native` (preset restart required). Bypass without changing preset: `await tools.bash(...)` inside `run_code`.
- **We depend on this**: the whole <team-preset> / creative tool surface.
- **Related**: GATE-022.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: this preset cannot call it directly; native can. The bash tool itself was not deleted.

## CAP-023 · Can I restrict tools on global ctx

- **What it is**: mask a tool for every agent in one shot.
- **Implementation**: GATE-021, `dsh-tools/lib/index.js:2790-2792`.
- **Status**: **sealed (GATE-021)**. By design: a global restrict would mask every agent. There is no legal switch that "turns global restrict on".
- **Evidence**: no scope → throw. Verbatim in GATE-021 (`./gates.md`).
- **We depend on this**: per-child `toolFilter` on subagents uses `childCtx.tools.restrict` (`child-agent.js:171-172`), which is scoped and legal.
- **Related**: GATE-021, CAP-020.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no global restrict; only on some agent.ctx.

## CAP-024 · Can I restrict run_code away

- **What it is**: strip even the transport from a PTC session.
- **Implementation**: GATE-020.
- **Status**: **sealed (GATE-020)**. No config lets restrict name run_code.
- **Evidence**: `dsh-tools/lib/index.js:2800`.
- **Related**: GATE-020, GATE-022.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no. Naming run_code throws immediately.

## CAP-025 · Can I register a tool named run_code

- **What it is**: a plugin of yours wants that name.
- **Implementation**: `dsh-tools/lib/index.js:2780`.
- **Status**: **sealed (GATE-022)**. Reserved name; no legal on-switch.
- **Evidence**:

```text
tool name "run_code" is reserved for the PTC mode presentation transport and cannot be registered or shadowed
```

- **Related**: GATE-022.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no. That name is reserved for the transport.

---

# Subagents and spawn

## CAP-030 · Does startContinuable still change model when given agentOptions

- **What it is**: a plugin calls `ctx.subagents.startContinuable({ request: { parent, agentOptions: { provider, model } } })` directly.
- **Implementation**: `resolveChildAgentOptions` `dsh-subagent/lib/types/child-agent.js:75-92`: parent route as base, `...requested` overlays. spawn provider `capabilities.agentOptions: true` (`dsh-subagent-spawn-in-process/lib/index.js:23-24`). Service `assertCapabilities` before start (`dsh-subagent/lib/index.js:3202-3226`).
- **Status**: **available** (in-process spawn/fork).
- **Evidence**: `resolved = { ...parent..., ...requested, subagentDepth }`. Changing route without requested effort deletes the parent's effort (`:89-91`) so the new model uses its own default.
- **Limits**: out-of-process providers go GATE-030. The official model-visible tool goes GATE-031; that is a different door.
- **We depend on this**: `lib/spawn-model-subagent.mjs:96-105`, a team plugin pulling members.
- **Related**: CAP-040, CAP-033, CAP-034, CAP-070, GATE-030.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: the service layer can change it. The official model tool does not give you that button by default.

## CAP-031 · spawn vs fork

- **What it is**: two in-process backends.
- **Implementation**:
  - spawn: `dsh-subagent-spawn-in-process/lib/index.js:30` `inheritsParentContext = false`, brand-new session, zero parent context.
  - fork: `dsh-subagent-fork-in-process/lib/index.js:44` `true`, seeds with the parent's completed turns.
- **Status**: **available** (both capability objects are all-true).
- **Evidence**: capability objects match; the only difference is whether the parent log is seeded.
- **We depend on this**: `<spawn-tool>` hard-codes `provider: 'spawn'` (`spawn-model-subagent.mjs:97`). A team plugin also uses spawn. We did not mount a fork tool surface.
- **Related**: CAP-030.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: both run; spawn cannot see the parent conversation; fork can see completed turns.

## CAP-032 · How deep can subagents nest

- **What it is**: a child spawning another child.
- **Implementation**: `resolveChildDepth` `child-agent.js:32-40`; overflow throws `SubagentDepthError`, message `subagent depth ${attemptedDepth} exceeds maxDepth ${maxDepth}`. Official tool default `maxDepth: 3` (`dsh-tool-subagent/lib/index.js:269`).
- **Status**: **available**. The depth ledger is live. Official-tool default `maxDepth: 3` is a config default, not an "off" capability. Our `<spawn-tool>` **did not pass maxDepth**; whether the service layer then has a default cap is **unverified**.
- **Evidence**: depth is parent header `delegationDepth` + 1; a restored parent cannot pretend to be top-level and spawn again.
- **Related**: CAP-033.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: there is a depth ledger; official tool default is 3 layers. Whether our spawn wrapper passed a cap was not checked.

## CAP-033 · Can our <spawn-tool> change model

- **What it is**: `<spawn-tool>` on <team-preset> (`<host-plugin>.mjs` → `lib/spawn-model-subagent.mjs`).
- **Implementation**: the wrapper puts `provider`/`model` into `agentOptions` itself, then `subagents.startContinuable`. Privilege expansion (higher tier, cross-series, preset capability surface not a subset, wider sandbox) goes through **parent-session** `approval.request`.
- **Status**: **available** (service-layer CAP-030 is live; this is our path around GATE-031).
- **Evidence**: wrapper puts `provider`/`model` into `agentOptions` then `startContinuable`. Exact filenames vary by deploy.
- **Limits**:
  - privilege expansion with no approval service → returns error, does not spawn (`:69-70`)
  - human refuses → `cancelled: true` (`:78-79`)
  - once the child is running it is still under GATE-032
  - passing `model` alone without `provider` is documented as keeping the parent provider (`:17`); implementation `:84-85` also writes fields separately
- **Related**: CAP-040, CAP-030, CAP-041, GATE-031.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: it can change, but this is our tool, not the official subagent tool; a more expensive change needs a human.

## CAP-034 · Whose model does a subagent use by default

- **What it is**: which route the child runs when agentOptions is omitted.
- **Implementation**: `parentAgentOptionsForDelegation` `child-agent.js:50-62`: if `requestHeader().config` exists, use that request's provider/model/effort, else fall back to `parent.options`.
- **Status**: **available**.
- **Evidence**: function comment "latest request header owns provider, model, and reasoning effort after request-time selection".
- **We depend on this**: `<spawn-tool>` inherits on omitted fields.
- **Related**: CAP-030, CAP-070.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: default follows the parent's current request model, not the one frozen at create.

## CAP-040 · Can the official subagent tool let the model change the child's model

- **What it is**: the model calls the official `subagent` tool with `provider`/`model`/`reasoning_effort`.
- **Implementation**: `dsh-tool-subagent/lib/index.js`. Those fields exist on the types (`model-selection.d.ts:32-35`); runtime does not put them in the schema by default.
- **Status**: **partially available (off by default; recipe attached)**. Not sealed. The .d.ts fields are still there, factory-off; after the GATE-031 recipe the model can choose.
- **Evidence**:
  - default `modelSelectionSettings: false` (`:255`)
  - when false the schema omits those three fields (unfold condition `:412-425`)
  - even a hard pass throws at `:64` `child model selection is disabled for this tool instance`
  - on but Host missing the settings module, `:587` throws `tool-subagent: \`modelSelectionSettings\` requires @deepseek-ai/dsh-tool-subagent/model-selection-settings in the Host scope`
  - that module is in the package: `dsh-tool-subagent/package.json` export `./model-selection-settings` → `lib/model-selection-settings.js`
  - <team-preset> has no tool-subagent line (CAP-044) — recipe step zero is installing that tool line
- **Unlock recipe**: GATE-031's three-row table (tool instance `modelSelectionSettings: true` + Host mounts `@deepseek-ai/dsh-tool-subagent/model-selection-settings` + user setting enabled and allowedModels non-empty). Live presets did not take this path; current user-setting value **unverified**.
- **The other live path**: service layer is not off (CAP-030). Our `<spawn-tool>` (CAP-033) takes that path, not the official tool.
- **We depend on this**: strategy "subagent on a cheaper model for grunt work" — official tool can be turned on; what we actually use now is our own spawn.
- **Related**: GATE-031, CAP-030, CAP-033, CAP-044.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: cannot change by default; the three-piece recipe turns it on. The API docs only say the fields exist, not that they are off by default.

## CAP-041 · Can a subagent pop its own approval dialog

- **What it is**: the child hits an operation that needs a human.
- **Implementation**: GATE-032.
- **Status**: **sealed (GATE-032)**. Delegation writes `never`; there is no switch that "lets the child ask a human".
- **Evidence**: `captureDelegatedPolicyOverrides` returns `'never'` when the parent has approval, written into the child log. Policy type is only `'ask' | 'never'` (`dsh-user-approval/lib/types/index.d.ts:46`); `never` = every ask is immediately `'rejected'` (`:42-43`).
- **Bypass**: no path that widens privilege from inside the child. The parent does it, or a human changes the parent policy and respawns.
- **We depend on this**: spawn-model-subagent privilege-expansion approval happens on the **parent** session (`approval.request({ agent })`, agent is the caller); GATE-032 does not apply there.
- **Related**: GATE-032, CAP-060, CAP-033.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no. A dispatched child's ask is always refused.

## CAP-042 · Is a still-v2 subagent visible on the panel

- **What it is**: a 0.1.4-written `subagent/descriptor` with version=2.
- **Implementation**: GATE-010.
- **Status**: **sealed (GATE-010)**. Unclassifiable on this runtime. Not off-by-default — version must be 3; there is no "accept v2" switch.
- **Evidence**: parse of non-3 returns `undefined`; panel observe failure gives diagnostic `"unavailable"`.
- **Whether `session_read` / cross-session layer_read throw**: another independent observation reading a v2 session `<v2-subagent-session>...` → `failed to read session: subagent/descriptor 0 uses unsupported descriptor version 2; source v0 artifact remains unchanged`. Fold path is still `version !== 3 → undefined` (`dsh-subagent/lib/index.js:1359`). Read path throws, fold path is silent — both stay.
- **We depend on this**: one descriptor migration already moved 120 live-tree rows 2→3. Newly produced descriptors are 3.
- **Related**: GATE-010.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: this runtime does not treat a v2 descriptor as a subagent.

## CAP-043 · Can an out-of-process provider set a child model

- **What it is**: ACP-class children in another process.
- **Implementation**: GATE-030.
- **Status**: **sealed (GATE-030)**. `agentOptions: false`; a request that carries them is refused, not silently ignored. Switching to in-process spawn/fork is another path, not turning this on for an out-of-process backend.
- **Evidence**: `NO_START_CAPABILITIES`; `assertCapabilities` throws `UNSUPPORTED_CAPABILITY` before start.
- **Whether this process mounts an out-of-process provider**: unverified (host composition acp lines not scanned).
- **Related**: GATE-030.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: out-of-process children cannot use agentOptions; the spawn/fork this machine usually uses is not that path.

## CAP-044 · Does <team-preset> mount the official subagent tool

- **What it is**: whether the model can see an official delegated tool named `subagent`.
- **Implementation**: `$DSH_HOME/.agent-presets/<team-preset>/agent.cordis.yml`. The delegation block (`:183-193`) only comments "host has a registry", **no** `- id: tool-subagent` line. Distill preset has the line but `disabled: true` (`<distill-preset>/agent.cordis.yml:73-75`).
- **Status**: **never available** (for this preset: official tool-subagent is not installed; that is not sealed). The official model-change UI (GATE-031) therefore does not even arise on this session unless that line is added and then the recipe is followed.
- **Evidence**: grep `tool-subagent` on the <team-preset> directory only hits comments. This session's tool list has no `subagent` / `list_subagent_models`; it has `<spawn-tool>`.
- **Related**: CAP-040, CAP-033, GATE-031.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: not mounted. Changing a child model on this session only goes through our own spawn tool.

# Prompts and skills

## CAP-050 · Do the official skill tool and our skill manager collide on the name

- **What it is**: official `dsh-tool-skill` registers a tool named `skill` (load a skill body). A skill-manager plugin of ours once planned to fold `skill_list/show/add/...` into one tool also named `skill`.
- **Implementation**: official tool package `dsh-tool-skill` (this session's tool list already has `skill`, description "Load the full instructions for an available skill"). Our six-pack is `skill_list` etc., still separate names.
- **Status**: **available** (the two name sets do not collide now); **folding the six-pack into `skill` would shadow the official tool** — that would be our accident, not a host seal.
- **Evidence**: runtime tool list has both official `skill` (load skill body) and management tools `skill_list` / `skill_show`. Merging the management face onto the name `skill` would shadow the official tool.
- **Related**: no GATE.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no collision now. Do not use the name `skill` when merging.

## CAP-051 · How sessions talk

- **What it is**: cross-session layer: same-process cross-session messages + offline queue + `[cross-session message from …]` marker + relation tiers (same team no approval / cross-team cross-project into console pending).
- **Implementation**: `profiles/web/plugins/<host-plugin>.mjs`; ownership `lib/projects.mjs:255` (`memberIdOf(m) === id` exact string, no normalize).
- **Status**: **available**.
- **Evidence**: independent observation send: same-team live delivery; missing `session-` prefix is judged cross-project pending. Console pending goes through <console-plugin> / enqueueInbox.
- **We depend on this**: whole-team collaboration, this dispatch chain.
- **Related**: CAP-060, GATE-060.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: same team can send; cross-project goes pending; id must have the session- prefix.

| Question | Why it is not nailed |
|---|---|
| Does `<cross-session-tool>` throw that `unsupported descriptor version 2` sentence when reading a v2 descriptor | Source only throws that in the v0→v1 migration package; fold path returns undefined |
| Current value of settings page `subagent-model-selection.enabled` | Settings store not read |
| Whether host composition mounts ACP / out-of-process subagent provider | `web.cordis.yml` / base not read |
| Whether `<spawn-tool>` passes maxDepth to start | Wrapper source does not pass that field |
| Exact Error.message on global persona name clash | Only saw "fails loud" |
| Whether `tools.guard` is actually registered by a local plugin | Call sites not fully grepped |
| Field table of `agent/session-start` payload | Types file not fully walked |

## CAP-055 · Can I get systemPrompt without inject

- **What it is**: a plugin wants `ctx.systemPrompt.section(...)` or `ctx.get('systemPrompt')`.
- **Implementation**: GATE-052.
- **Status**: **partially available (off by default; recipe attached)**. Default (no inject) cannot get it. Recipe: plugin `inject: ['systemPrompt']`, or `ctx.inject(['systemPrompt'], cb)`. Property access without inject throws GATE-052; `ctx.get` may give undefined.
- **Evidence**: `cannot get property "systemPrompt" without inject`. A skill-manager plugin inject includes `systemPrompt` (`<host-plugin>.mjs:147`). A prompt-inject plugin once read systemPrompt without inject and skipped the pointer section.
- **Related**: GATE-052.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: inject first. Property access throws; do not rely on luck.

## CAP-056 · Can persona still write text:

- **What it is**: 0.1.4 persona schema required `text:`.
- **Implementation**: GATE-050.
- **Status**: **sealed (GATE-050)**. Field renamed; no alias for the old key.
- **Evidence**: new Config requires `prefix`. Old field name is not in the types.
- **We depend on this**: three live presets already changed.
- **Related**: GATE-050, GATE-051.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no. Write prefix.

## CAP-057 · Can I hang a persona line globally

- **What it is**: hang `dsh-persona` in host composition instead of a preset.
- **Implementation**: GATE-051.
- **Status**: **sealed (GATE-051)**. Collides with the registry's own persona. No switch that "allows a global persona line".
- **Evidence**: module comment "mounted globally it collides … and fails loud". Exact throw string unverified.
- **Related**: GATE-051.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no. A persona line may only hang on agent/preset scope.

# Approval and sandbox

## CAP-060 · What is a subagent's approval policy

- **What it is**: whether the child asks a human.
- **Implementation**: GATE-032; policy type `dsh-user-approval/lib/types/index.d.ts:37-46`.
- **Status**: **available** (parent); **child pinned to never**.
- **Evidence**: `ask` is default, no answerer → `'unavailable'` fail-closed; `never` all `'rejected'`.
- **Related**: GATE-032, CAP-041, CAP-061.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: the parent can ask a human; a dispatched child's ask is still refused.

## CAP-061 · What if approval has no answerer

- **What it is**: `approval.request()` goes out and nobody answers.
- **Implementation**: `dsh-user-approval/lib/types/index.d.ts:2-3, 40-41`: "Missing answerers fail closed"; `ask` with no answerer → `'unavailable'`.
- **Status**: **available** (fail-closed, not hang).
- **Evidence**: module header. This session did not fire an empty-answerer probe; the outcome string follows the types.
- **We depend on this**: spawn privilege expansion cancels if `outcome !== 'allowed-once'`.
- **Related**: CAP-033.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: nobody answering closes it; that is not tacit consent.

## CAP-065 · Can a subagent widen its sandbox from inside

- **What it is**: the child wants to go from read-only to workspace-write / danger-full-access.
- **Implementation**: on delegation only the parent's **explicit** sandbox override is written into the child log (`child-agent.js:184-201`), "never deployment defaults or one-shot grants". Widening needs approval; child policy is never → refuse. Sandbox-mode vocabulary `dsh-sandbox/lib/types/index.d.ts:19`.
- **Status**: **sealed (GATE-032)**. Cannot rise from inside the child session. Approving at spawn on the parent is another path, not turning on internal widening for the child.
- **Evidence**: GATE-032 + capture comments. Our wrapper's sandbox escalation is `collectSandboxEscalations` on the **parent**; a human approve writes it into child create; the child does not raise itself.
- **Merge note (A CAP-031)**: sandbox granularity (read-only / workspace-write / danger-full-access plus approval) **source coordinates not walked one by one**. This entry only nails "widen from inside the child = sealed", not the whole sandbox picture.
- **Related**: GATE-032, CAP-033.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: the child cannot raise itself. Want wider: approve on the parent at spawn.

# Model routing and delegation

## CAP-070 · Change route but omit thinking effort — what happens

- **What it is**: `agentOptions` only changes model, no reasoningEffort.
- **Implementation**: `child-agent.js:89-91`.
- **Status**: **available** (drops the parent's effort so the new model uses its own default).
- **Evidence**: `if (routeChanged && requested?.reasoningEffort === undefined) delete resolved.reasoningEffort`. Official-tool copy when model-change is on is the same sentence (`dsh-tool-subagent/lib/index.js:395`).
- **Related**: CAP-030.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: the parent's thinking effort does not follow the new model unless you pass it again.

# Events and hooks

## CAP-080 · What we use agent/session-start for

- **What it is**: hook when a new session comes up.
- **Implementation**: cordis event. Ours: <host-plugin> `:1287`, <host-plugin> `:1040`, injector `:330`, a skill-manager plugin `:368`, a probe plugin `:59`.
- **Status**: **available**.
- **Evidence**: these plugins all `ctx.on('agent/session-start', ...)`. Payload shape was not walked field-by-field against official .d.ts this time; **payload fields unverified**.
- **Merge (A CAP-010)**: type `dsh-agent/lib/types/runtime-types.d.ts:298`, `this: Scoped<Agent>`. Source `SessionStartSource = 'startup' | 'resume' | 'clear' | 'compact'` (`:105`); all four fire.
- **Related**: CAP-021.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: the hook is there; we use it for delivery/policy/skills; payload fine fields were not checked against types this time.

## CAP-081 · Can I stop a tool call before it runs

- **What it is**: `tools.guard(fn)`; returning a string refuses this call.
- **Implementation**: `dsh-tools/lib/index.js:2806-2820`. Global guard or scoped guard on `agent.ctx`. Any matching guard may refuse; no guard can force-allow what another already refused.
- **Status**: **available**.
- **Evidence**: comments as above. We did not find a `tools.guard(` call in our plugins this time; **whether we use it unverified** (grep range can be widened).
- **Merge note (A CAP-041)**: full hook set unverified. A also listed `agent/pre-step` (`runtime-types.d.ts:303`, can refuse a step / rewrite messages); signature is in the types file, behaviour not measured. This entry only proves the `tools.guard` cut.
- **Related**: CAP-023, CAP-080.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: can stop; a stop cannot be flipped to allow by another guard.

# Assembly and preset

## CAP-090 · How many times does one preset hang in the process

- **What it is**: ten sessions all pick <team-preset> — is tool registration 1 copy or 10.
- **Implementation**: `dsh-agent-presets/lib/types/index.d.ts:1-20`: each preset `cordis.yml` is a **standing mount once**; sessions join via scope parentage. `composeFrom` (`:231`) lets a subagent join **the standing composition the parent is using**, so the child does not see an empty tool table (`child-agent.js:157-158`).
- **Status**: **available**.
- **Evidence**: module header. Also background for GATE-091: standing mount is one per preset, but some services are process-global, so two presets each hanging once collide.
- **Related**: GATE-091, CAP-091.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: each preset hangs once in the process; sessions join, they do not copy.

## CAP-091 · Can two plugins be cordisInspect providers at once

- **What it is**: register the same inspect-provider id twice.
- **Implementation**: GATE-091.
- **Status**: **sealed (GATE-091)**. Same id. Whether different ids can coexist is unverified. No switch that "allows the same id twice".
- **Evidence**: `:732` throw. Our `<inspect-shim>.mjs` injects `cordisInspect`.
- **Related**: GATE-091, CAP-090.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: same id no. This is a process-singleton registry.

## CAP-092 · Can kv.open('agent_teams') open twice

- **What it is**: two plugins each open the same-named json unit once.
- **Implementation**: GATE-090.
- **Status**: **sealed (GATE-090)**. Handle exclusive; no "allow multiple opens" switch.
- **Evidence**: `unit 'agent_teams' is already open; a unit has exactly one live handle`. <host-plugin>.mjs:62 comments that this is why it moved to the file face.
- **Bypass**: share the handle, or skip kv and write `projects.json`.
- **Related**: GATE-090.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: no. The second open throws already open.

# Gaps filled (official surface)

## CAP-004 · What is header.version on a new session

- **What it is**: logical session format version on the header; a different ledger from the on-disk filename `session.vN.jsonl`.
- **Implementation**: `dsh-session/lib/index.js:56` `const SESSION_FORMAT_VERSION = 3`; header check `lib/types/index.js:31-32` throws if not 3.
- **Status**: **available**.
- **Evidence**:

```text
session header version must be 3, got <n>
```

Disk generation 0 is still named `session.jsonl.zstd` (ENV-003); that is the physical filename, not this constant.
- **Related**: ENV-003, GATE-010.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: a new header must be 3; an old filename may still omit vN.

## CAP-005 · Is ctx.remote.session.inspect still there

- **What it is**: look at a session by id without going through `sessionPersistence` and without activating an Agent.
- **Implementation**: `dsh-tool-cordis/lib/index.js:2288-2301` generated `ctx.remote.session.inspect(sessionId, signal?)` → `Promise<SessionInspection>`. `SessionInspection` includes `events` (:7391).
- **Status**: **unverified** (this observation did not call it). Real service name **`sessionController`** (`ctx.get('sessionController')` / generated `ctx.remote.session`). Independent observation: same format gate (a v2 descriptor blows up the same way).
- **Evidence**: in-package declaration as above. Feedback channel `dsh-message-feedback` `'feedback/committed'(inspection: SessionInspection)` also cites this type.
- **Related**: CAP-010, GATE-002, CAP-001.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: still in the docs; whether a plugin can call it is pending. Do not treat it as the deleted `sessionPersistence.inspect`.

## CAP-035 · Are AgentRegistry.create/resume still there

- **What it is**: create a new agent in-process, or resume an agent from an on-disk session. Subagent spawn eventually walks this, not only `subagents.startContinuable`.
- **Implementation**: `dsh-agent/lib/types/index.d.ts:279` `create(options): Promise<AgentHandle>`; `:287` `resume(options): Promise<AgentHandle>`. create builds a session; resume requires persistence configured.
- **Status**: **available** (types + spawn path depends on it; this turn did not probe `agents.create` alone).
- **Evidence**: comments "Rejects if no factory is registered"; resume "factory rejects if session persistence is not configured".
- **Related**: CAP-030, CAP-031, CAP-080.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: official create/resume entry is still there; the subagent wrapper sits on it.

## CAP-058 · How persona prefix/suffix hang

- **What it is**: `dsh-persona` registers a prefix (front) and optional suffix (back) on the system prompt; it is not a whole-document replace (unless `complete: true`).
- **Implementation**: `dsh-persona/lib/types/index.d.ts:24-40` required `prefix`, `suffix?`, `complete?`, `includeRuntimeContext?`.
- **Status**: **available**.
- **Evidence**: after the config rename you must write `prefix:` (GATE-050). Empty prefix drops that section at render.
- **Related**: GATE-050, GATE-051, CAP-056.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: write prefix, optional suffix; do not use text: any more.

## CAP-062 · How to use ApprovalService.request

- **What it is**: ask a human once. The only allow value is `'allowed-once'`. No answerer or a junk return → `'unavailable'` (fail-closed). Needs an open turn; audit events must land in pairs.
- **Implementation**: `dsh-user-approval/lib/types/index.d.ts:97-127` `request(req): Promise<ApprovalOutcome>`; `setPolicy` at `:108`.
- **Status**: **available**.
- **Evidence**: comments "an aborted signal yields `'cancelled'`" "missing or throwing answerer yields `'unavailable'`".
- **Related**: CAP-060, CAP-061, GATE-032.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: call `ctx.approval.request`; only allowed-once counts.

## CAP-082 · How compaction compresses session history

- **What it is**: `ctx.compaction` folds a history range into one summary node. Auto triggers `pressure` | `context-overflow`; manual compact has an error-code set.
- **Implementation**: `dsh-compaction/lib/types/index.d.ts:1-37`. `ManualCompactionErrorCode = 'busy' | 'cancelled' | 'changed' | 'summary' | 'commit' | 'persistence'`.
- **Status**: **available** (the service is there; the preset must hang compaction-related lines for `/compact` — missing lines means the command is absent, an assembly issue not a deleted service).
- **Evidence**: module header "providers decide when to compact and replace a history range with one summary node". Manual failure is `ManualCompactionError`.
- **Related**: CAP-080, ENV-080.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: compact is an official service; if the preset did not hang the line there is no command, the service is still there.

## CAP-093 · What is AgentPresetComposition

- **What it is**: a preset's roster identity + row list, for surfaces like "plugin inventory" that should not parse yml themselves.
- **Implementation**: `dsh-agent-presets/lib/types/composition-inventory.d.ts:44-56`; `agentPresets.compositionInventory(): Promise<AgentPresetComposition[]>` (`index.d.ts:149`).
- **Status**: **available**.
- **Evidence**: fields `id`, `trust` (system/user), `isDefault`, `broken?`, `rows`. A broken preset uses the `broken` string instead of dropping the row.
- **Related**: CAP-090, ENV-092.
- **As of 2026-09-13 · DSH 0.1.5-rc.2**
- **In one sentence**: ask the roster via compositionInventory; do not parse by hand.


