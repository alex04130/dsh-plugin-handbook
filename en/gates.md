<!-- translation of Chinese source; CAP/GATE/ENV ids duplicate by design. Do not pass this directory to doccheck together with ../. Field names are English (Status/Evidence/As of), so the Chinese-field checker will not validate them. -->

# Where do the gates stop you? (gate list)

A gate is a runtime check on an operation (refuse with an error, or silently change behaviour — the second kind still fills "verbatim error", which may say "there is no error"). Criterion / trigger / verbatim error / bypass. Capability entries live in `./capabilities.md`.
As of 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2. Five-value status: `available` / `partially available (off by default; recipe attached)` / `sealed (gate id attached)` / `never available` / `unverified`.
Cross-refs use CAP-xxx / GATE-xxx / ENV-xxx / OP-xxx, or `./<file>.md`.
Line numbers point at `/usr/lib/node_modules/@deepseek-ai/dsh/node_modules/@deepseek-ai/<pkg>/lib/...`.

## Index

| ID | One sentence |
|---|---|
| GATE-010 | A subagent descriptor that is not version 3 is treated as absent |
| GATE-001 | A read handle cannot append / flush |
| GATE-003 | open() does not validate illegal access; silently treats it as write |
| GATE-020 | `tools.restrict()` naming `run_code` throws immediately |
| GATE-021 | `tools.restrict()` must be on agent scope; a global call throws |
| GATE-031 | Official delegated tool does not expose child-model fields to the model by default (can be turned on) |
| GATE-032 | Spawned subagent approval is pinned to `never` |
| GATE-051 | A persona line may only hang on preset scope |
| GATE-052 | Reading a service without declaring inject throws |
| GATE-090 | One json storage unit may have only one live handle at a time |
| GATE-091 | Registering `cordisInspect` a second time with the same id throws |
| GATE-022 | In PTC mode the model may call only `run_code` directly |
| GATE-002 | `sessionPersistence.inspect()` no longer exists |
| GATE-030 | Out-of-process subagent backends refuse start capabilities such as `agentOptions` |
| GATE-050 | Persona config field `text:` was renamed `prefix:` |
| GATE-060 | Primary-session-only guard (subagents cannot call some tools) |

# Sessions and persistence

## GATE-001 · A read handle cannot append / flush

- **Criterion**: `SessionAccess = 'read' | 'write'` (`dsh-session-persistence/lib/types/handle.d.ts:12`). `append`/`flush` require `this.access === "write"`.
- **Trigger**: `append` or `flush` on a handle from `open(id, 'read')`.
- **Implementation**: jsonl `dsh-session-persistence-jsonl/lib/index.js:222` (append), `:131` (flush).
- **Verbatim error**:

```text
session "<id>": append is not available on a read handle
```

(`SessionReadOnlyError`; operation name `append` or `flush`.)
- **Bypass**: write path `open(id, 'write')`. Illegal access values (`'append'` etc.) do **not** hit this gate; see GATE-003.
- **As of**: 2026-09-14 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-002, GATE-003.

## GATE-003 · open() does not validate illegal access; silently treats it as write

- **Criterion**: jsonl `open()` only tests `access === "read"`; everything else `claimWrite` (`dsh-session-persistence-jsonl/lib/index.js:2350`). No enum check.
- **Trigger**: `sessionPersistence.open(id, access)` where `access` is not `'read'` (e.g. `'append'`, `foo`).
- **Verbatim error**: (there is no error. that is the gate.)
- **Measured (2026-09-14, isolated jsonl root)**: `open(id, 'append')` → `openError: null`, `handleAccess: "write"`, then `append` succeeds (`appendError: null`).
- **Effect**: the caller passed a value the type does not have; the runtime hands over write permission. TS can catch `'append'`; JS cannot.
- **Bypass**: pass only `'read'` or `'write'`. Do not rely on a runtime error to catch a typo.
- **As of**: 2026-09-14 · DSH 0.1.5-rc.2
- **Related**: CAP-011, GATE-001.

## GATE-002 · sessionPersistence.inspect is gone (sessionController.inspect is a different face)

- **Criterion**: the abstract class keeps only `create / open / flush / stat / list` (`dsh-session-persistence/lib/types/index.d.ts:99-155`). Package-wide grep for `inspect(` is zero hits.
- **Trigger**: any plugin still calling `persistence.inspect(id)` or service-level `append(id, events)`.
- **Verbatim error**:

```text
persistence.inspect is not a function
persistence.append is not a function
```

- **The other face that remains**: real service name `sessionController`. Generated face `ctx.remote.session.inspect` (`dsh-tool-cordis/lib/index.js:2288-2301`) → `SessionInspection` (includes events). Same format gate (a v2 descriptor blows up the same way).
- **Bypass** (persistence face): read `stat`+`open('read')`+`handle.read`; write `open('write')`+`handle.append`.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-010, CAP-001, CAP-002, GATE-001.

# Tool registration and presentation

## GATE-020 · restrict cannot name run_code

- **Criterion**: an `allow`/`deny` array that contains `"run_code"` throws.
- **Implementation**: `dsh-tools/lib/index.js:2800`.
- **Verbatim error**:

```text
tools.restrict() cannot name reserved PTC mode presentation transport "run_code"; restrict end-capability tools instead
```

- **Bypass**: restrict the end-capability tools; do not touch the transport name.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-024, GATE-022.

## GATE-021 · restrict must be called on agent.ctx

- **Criterion**: `scopeOf(this.ctx) === undefined` throws.
- **Implementation**: `dsh-tools/lib/index.js:2791-2792`.
- **Verbatim error**:

```text
tools.restrict() requires a scoped context (agent.ctx): a context-global restriction would mask every agent — deny the tool for the intended agent instead
```

- **Bypass**: call `agent.ctx.tools.restrict(...)`.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-023.

## GATE-022 · In PTC the model may only point at run_code directly

- **Criterion**: `modeFor(scope) === "ptc" && !nested && name !== "run_code"`.
- **Implementation**: `dsh-tools/lib/index.js:2993-2994`; direct call refused at `:3076`.
- **Verbatim error**:

```text
unknown tool "<name>": only `run_code` is callable directly — call `<name>` from inside a `run_code` program instead
```

- **Bypass**: set preset `tool-presentation.config.mode` to `native` (CAP-022). Or leave it and call from inside `run_code`.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-022, CAP-025.

# Subagents and spawn

## GATE-010 · A subagent descriptor that is not 3 is treated as absent at runtime

- **Criterion**: `subagent/descriptor.data.version` must be exactly `3`.
- **Trigger**: reading an old session, projecting subagent rows, cold-restoring a continuable subagent.
- **Implementation**: `dsh-subagent/lib/index.js:1300` `SUBAGENT_DESCRIPTOR_VERSION = 3`; same file `:1359` `if (version !== 3) return void 0`. `foldSubagentDescriptor` (`lib/types/descriptor.js:187-191`) returns `undefined` on a wrong version.
- **Verbatim error (format-migration path, verified)**:

```text
subagent/descriptor <seq> uses unsupported descriptor version <n>
```

Source: `dsh-session-format-v0-to-v1/lib/index.js:1584-1586`, and only `throw`s in the migration assertion when `version === 0`.
- **Panel path (verified)**: `dsh-subagent/lib/index.js:2241-2247` — on observe failure the row status is `"unavailable"` or `"corrupt"`.
- **Whether `<cross-session-tool>` throws the same sentence**: independent observation reading a v2 session → `failed to read session: subagent/descriptor 0 uses unsupported descriptor version 2; source v0 artifact remains unchanged`. The fold path is still silent `undefined`.
- **Bypass**: change the descriptor version field 2→3 (when the field set falls inside v3 allowed keys). Back up the original log yourself before migrating.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-042.

## GATE-030 · Out-of-process subagent backends refuse start capabilities

- **Criterion**: all five `NO_START_CAPABILITIES` are false.
- **Implementation**: `dsh-subagent/lib/index.js:2498-2510`; check `:3202-3226`.
- **Verbatim error**:

```text
subagent provider "<name>" does not support the "<cap>" capability
```

code: `UNSUPPORTED_CAPABILITY`.
- **Bypass**: switch to in-process spawn/fork (CAP-031). That is not turning this capability on for an out-of-process backend.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-043.

## GATE-031 · Official delegated tool does not expose model-change fields by default

- **Criterion**: `modelSelectionSettings` defaults to `false` (`dsh-tool-subagent/lib/index.js:255`). When false, the schema has no `provider`/`model`/`reasoning_effort`. Passing them hard throws.
- **Verbatim error**:

```text
child model selection is disabled for this tool instance
```

Source: `:64`. Missing Host module at `:587`:

```text
tool-subagent: `modelSelectionSettings` requires @deepseek-ai/dsh-tool-subagent/model-selection-settings in the Host scope
```

- **Status**: partially available (off by default; recipe attached).
- **Unlock recipe**:

| Layer | What to do | Coordinate |
|---|---|---|
| Tool instance | `config.modelSelectionSettings: true` | `:255` defaults false; `:582` takes the settings branch only when true |
| Host scope | Mount `@deepseek-ai/dsh-tool-subagent/model-selection-settings` | package export `./model-selection-settings` → `lib/model-selection-settings.js` (`package.json:21-23`) |
| User settings | `subagent-model-selection.enabled: true` and non-empty `allowedModels` | settings d.ts writes shipped default off |

A <team-preset> must also install the `dsh-tool-subagent` line first (CAP-044).
- **The other live path**: CAP-030 / CAP-033, not via the official tool.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-040, CAP-030, CAP-033, CAP-044.

## GATE-032 · Spawned-subagent approval is pinned to never

- **Criterion**: if the parent process has an `approval` service, the child session is written `approval/policy = never`, `source: 'delegation'`.
- **Trigger**: `startContinuable` / in-process spawn runs `captureDelegatedPolicyOverrides` in the create window.
- **Implementation**: `dsh-subagent/lib/types/child-agent.js:184-187`, `:203-204`.
- **Verbatim error** (injected for the subagent to read, not a throw):

```text
You are a delegated subagent: your permission scope was fixed when you were started and cannot be widened from inside this session — operations that require approval are rejected automatically.
```

- **Bypass**: there is no path that widens privilege from inside the child session. The parent does it, or a human changes the parent policy and respawns.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-041, CAP-060, CAP-065.

# Prompts and skills

## GATE-050 · Persona config changed from text: to prefix:

- **Criterion**: Config requires `prefix: string` (`dsh-persona/lib/types/index.d.ts:24-40`).
- **Trigger**: a preset still writing `text:` → schema validation fails.
- **Bypass**: change to `prefix:`. No alias for the old key.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-056, GATE-051.

## GATE-051 · Persona lines are scope-only

- **Criterion**: `dsh-persona/lib/types/index.d.ts:4-8` declares that hanging it globally collides with the registry's own persona and fails loud.
- **Verbatim error**: specific `Error.message` unverified.
- **Bypass**: hang only on preset / agent scope.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-056, CAP-057, GATE-050.

## GATE-052 · Without inject you cannot get a service

- **Criterion**: the cordis context proxy throws on reading a property that was not injected.
- **Implementation**: `cordis/lib/index.js:675`.
- **Verbatim error**:

```text
cannot get property "<prop>" without inject
```

Same path `:687`: `cannot get required service "<prop>" in inactive context`.
- **Bypass**: plugin `inject: [...]`, or `ctx.inject([...], cb)`. `ctx.get(name)` may return undefined without throwing.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-055.

# Approval and sandbox

## GATE-060 · Primary-session-only tool guard

- **Criterion**: some tools may only be called from the primary session; a subagent call is refused.
- **Trigger**: a subagent calls a tool marked "primary session only (subagents refused)" (dev family, skill management, cross-session layer archive, etc.).
- **Verbatim error**: unverified (tool description declares the refusal; specific `Error.message` not captured).
- **Bypass**: ask the primary session to call it. There is no config switch that "lets subagents call it too" — this is a guard inside each plugin's register, not GATE-032's delegated `never`.
- **Implementation**: tool-description marks on each plugin (`<cross-session-tool>` / `dev_stop_dyn_plugin` / skill_*); **guard code itself unverified** (GATE-032).
- **As of**: 2026-09-13 · DSH 0.1.5-rc.2
- **Related**: CAP-051, CAP-060.

# Assembly and preset

## GATE-090 · A json storage unit may open only one handle at a time

- **Criterion**: `open.has(name) || opening.has(name)` throws.
- **Implementation**: `dsh-storage-json/lib/index.js:564`.
- **Verbatim error**:

```text
unit '<name>' is already open; a unit has exactly one live handle
```

domain layer: `dsh-storage-domain/lib/index.js:356` `domain '<name>' is already open`.
- **Bypass**: share the handle, or go through the file face.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-092.

## GATE-091 · cordisInspect cannot register the same id twice

- **Criterion**: `this.providers.has(manifest.id)` throws.
- **Implementation**: `dsh-cordis-host-runner/lib/index.js:723` service name `"cordisInspect"`; `:732`.
- **Verbatim error**:

```text
Host Cordis inspect provider "<id>" is already registered
```

- **Bypass**: a different id, or a shim. No switch that "allows the same id twice".
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: CAP-091, CAP-090.
