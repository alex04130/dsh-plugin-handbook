# What these words mean (glossary)

One line each, hooked to a mechanism. As of 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2.

First mention of 预设 is **preset (预设)**; after that, `preset` only.

| Term | One sentence | Hooks to |
|---|---|---|
| DSH_HOME | This machine's home directory, written `$DSH_HOME` | ENV-001 |
| standing mount | Each preset hangs one composition in the process; sessions join it instead of copying | CAP-090 |
| isolate realm | The private space preset services must live in, or they leak to process-global | ENV-091, GATE-091 |
| inject | A plugin declares which services it needs; property access without that throws | GATE-052, CAP-055 |
| PTC | Presentation mode: the model may call `run_code` directly; everything else goes through the SDK | ENV-021, GATE-022 |
| native | Presentation mode: one function-call per tool | ENV-021 |
| run_code | Reserved PTC transport name; cannot register, cannot restrict | GATE-020, GATE-022, CAP-025 |
| tool_router | Meta-tool: list/describe/call other tools | One measured tool-surface narrowing; this session can only call `run_code` directly |
| SessionAccess | Second argument of `open()`; only `read` / `write` | GATE-001 |
| inspect() | 0.1.4 method that returned meta+events in one shot; gone in 0.1.5 | GATE-002, CAP-010 |
| stat() | 0.1.5 looks at header/revision only; no events | CAP-001 |
| descriptor v3 | Current version of subagent identity events; v2 is treated as absent on this runtime | GATE-010, CAP-042 |
| modelSelectionSettings | Whether the official subagent tool exposes model-change fields to the model; default false | GATE-031, CAP-040 |
| startContinuable | Service-layer spawn of a continuable subagent; may carry `agentOptions` | CAP-030 |
| <spawn-tool> | A wrapper that skips the official tool and calls `startContinuable` | CAP-033 |
| approval never | Approval policy pinned on spawned children; internal privilege expansion is refused | GATE-032 |
| fail-closed | No answerer is not tacit consent; outcome is `unavailable` | CAP-061 |
| projectKey | Encodes cwd into a directory name like `--home-<user>-.dsh--` | ENV-002 |
| generation 0 / v3 log | `session.jsonl.zstd` vs `session.v3.jsonl.zstd` | ENV-003 |
| <dyn-boot-plugin> | Restores dynamic plugins from `auto-plugins.json` on session-start | ENV-020 |
| <hot-reload-plugin> | Watches dynplugins and a few unversioned static mjs files and tries to hot-load | ENV-020 |
| fingerprint | Used by <dyn-boot-plugin> to see if the manifest changed; runs only then; skips if the same prefix is already present | ENV-020 |
| patchReload live | web profile allows include to rebuild the patch in-process | ENV-093 |
| shipped preset | In-package `presets/` (cordis/minimal/ptc/standard); do not edit | ENV-092 |
| user preset | `~/.dsh/.agent-presets/`; editable | ENV-092 |
| five-value status | available / partially available (off by default; recipe attached) / sealed (gate id attached) / never available / unverified | capability-file headers |
| gate (闸) | A runtime check on an operation: refuse (verbatim error) or silently change behaviour (no error, e.g. GATE-003) | gates.md |
| sealed (封死) | Every entry failed and there is no legal on-switch; must attach a GATE id. Off-by-default + recipe is not sealed | capability-file headers |
| capability surface (能力面) | The tool set an agent can see directly; privilege checks look at subset relation | CAP-033 |
| preset (预设) | Session assembly unit. First mention: preset (预设); after that, `preset` | ENV-092, CAP-090 |
| slot (槽) | Client UI slot path; count `kind`, not `name` | l2-client |
| declaration surface (声明面) | Install-tree `.d.ts`, or inspect catalog `listService`/`listEvents`/`listBuiltins`. In the catalog ≠ mounted | l2-host / l2-client |
| runtime surface (运行面) | Host-layer plugin `ctx.get(name)` one by one (services); slots via `listSubTree`; tokens via `listTokens`. `listService` is **not** the runtime surface | l2-host / plugin-surface |
| mounted / not mounted (挂 / 未挂) | Whether host-layer plugin `ctx.get` gets it on this assembly. Not mounted can mean cataloged but not loaded this time | plugin-surface |
| （水位） | **Do not use.** Do not translate. Write "observed N" or observed count | freeze table |
| replaceRisk | Risk of replacing that slot: `shadows-shipped-ui` covers shipped UI; `none` does not cover the root node | l2-client |
| tool_router | Meta-tool list/describe/call; approval follows the inner tool | CAP-021 |
| cross-session layer | Same-process cross-session messages + offline queue + approval tiers | CAP-051 |
| primary-session-only guard (仅主会话守卫) | Subagents are refused some tools | GATE-060 |
| positive control (正控) | Verify a conclusion with a sample that actually has the feature under test | verify.md |
