<!-- translation of Chinese source; CAP/GATE/ENV ids duplicate by design. Do not pass this directory to doccheck together with ../. Field names are English (Status/Evidence/As of), so the Chinese-field checker will not validate them. -->

# Where things live, where the edges are (environment facts)

Answers layout, naming, hot reload, preset (session assembly) syntax, deploy, presentation cost, service names and event names. Does not answer "can I still use this"; that is `./capabilities.md`.
As of 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2.

First mention: preset (预设). After this, `preset`.

## Index

| ID | One sentence |
|---|---|
| ENV-001 | What the directories under ~/.dsh each do |
| ENV-002 | Why sessions/ names start with --, and why ls blows up |
| ENV-003 | What the session log file is actually called |
| ENV-020 | Which edits take effect without a restart, which need one |
| ENV-090 | Can a preset row name be !!js |
| ENV-091 | Do tool rows need isolate; do service rows |
| ENV-092 | Where user presets and shipped presets live |
| ENV-093 | What profile plugins/ is resolved against |
| ENV-021 | Where PTC puts the tool surface, where native puts it, what it costs |
| ENV-010 | How to take a service name, common misspellings |
| ENV-080 | Which event names exist, when they fire |

# Sessions and persistence

## ENV-001 · What the directories under ~/.dsh each do

- **What it is**: this machine's DSH home layout. `DSH_HOME=$DSH_HOME` (measured on this process env).
- **Status**: available (measured with `ls` on this machine).
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

| Path | What it is for |
|---|---|
| `sessions/` | Session logs bucketed by encoded workspace |
| `.agent-presets/` | User-writable preset root (ENV-092) |
| `profiles/web/` | This machine's web profile: `cordis.yml` + `cordis.patch.yml` + `plugins/` |
| `dynplugins/` | Dynamic plugin sources (<hot-reload-plugin> watches here) |
| `auto-plugins.json` | <dyn-boot-plugin> restore manifest |
| `storages/` | json storage backend root (workspace.json etc.) |
| `project-memory/` | A community-plugin convention for project notes |
| `docs/` | Build sheets, this doc set |
| `tmp/` | In-session intermediates (`/tmp` is wiped after each bash; do not put them there) |
| `exports/` | `<cross-session-tool>` plaintext export |
| `backups/` | A deploy convention for pre-migration log backups |
| `archive/` | Sweep archive |
| `injector/` | Runtime injected-package registry |
| `state/` | Includes `tool-manifest.md` |
| `settings.yaml` | User settings |
| `projects.json` | Project/team org source of truth |
| `console-inbox/` | Console pending queue (cross-team / cross-project messages) |
| `profiles/web/cordis.patch.yml` | Host plugin rows (A counted 23; not re-counted at merge) |

## ENV-002 · Why sessions/ names start with --, and why ls blows up

- **What it is**: a workspace path encoded into a single-level directory name.
- **Implementation**: `dsh-session-persistence-jsonl/lib/index.js:874-892` `projectKey(cwd)`: `/` `\\` `:` become `-`, other unsafe code points `~XXXX`, then wrapped `--<key>--`.
- **Status**: available.
- **Evidence** (measured here):

```text
$DSH_HOME/sessions/--home-<user>-.dsh--
$DSH_HOME/sessions/--home-<user>-<workspace>--
```

`ls --home-<user>-.dsh--` (under `sessions/`, no `--`) prints:

```text
ls: unrecognized option '--home-<user>-.dsh--'
Try 'ls --help' for more information.
```

`ls -- --home-<user>-.dsh--` lists uuid children normally.
- **Bypass**: always `ls -- <dir>` or write an absolute path.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

## ENV-003 · What the session log file is actually called

- **What it is**: the physical log name inside each session directory.
- **Implementation**: `dsh-session-format/lib/index.js:472-474`: version 0 = `session.jsonl`; after that = `session.vN.jsonl`. Compression suffix `dsh-session-persistence-jsonl/lib/index.js:746-750`: zstd adds `.zstd`.
- **Status**: available (two generations coexist on this machine).
- **Evidence** (this machine `os.walk` counts):

| Filename | Count | Meaning |
|---|---|---|
| `session.jsonl.zstd` | 158 | format generation 0 |
| `session.v3.jsonl.zstd` | 28 | format generation 3 |
| `session.lock` | 28 | write lock |
| `meta.json` | 24 | sidecar metadata (not the event log) |

"They are all called session.v3.jsonl.zstd" is false. Do not read logs by filename. Under mixed v3 migration an old name silently reads empty. Use the session-read API / `export`.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

## ENV-010 · How to take a service name, common misspellings

- **What it is**: keys like `ctx.get('agentPresets')`.
- **How to take it**: each package `lib/types/index.d.ts` `interface Context { <name>: … }`, or `super(ctx, "<name>")`.
- **Status**: available.
- **Evidence**: `dsh-agent-presets/lib/index.js:1294` `super(ctx, "agentPresets")`. **Not** `presets`. This turn pulled 68 Context keys from types. Common misses:

| Wrong | Right | Package |
|---|---|---|
| `presets` | `agentPresets` | dsh-agent-presets |
| `persist` / `persistence` | `sessionPersistence` | dsh-session-persistence |
| `workspaces` (host) | `workspaceRegistry` | dsh-workspace (client-side apiproxy is the one named workspaces) |
| `sandbox` (policy) | `sandboxPolicy` is the mode overlay; `sandbox` is the executor | two packages |

Full key list (this machine types scan, not a runtime dump):

```text
agentDefaultModel agentLoop agentPresets agents appExit appReady approval attachments authorization clientModules cmdlineArgs codeRuntime commands compaction credentials deepseekLlmApiExtensions directoryPicker dshHomePath dynamicCordisRunner fileReferences fileUploads fs goals hmr invariants jobs launchEnvironment launcherSessionQueryPath llm loader messageFeedback permissionPresets planMode sandbox sandboxPolicy sessionController sessionFeedback sessionPersistence sessionProjectionCache sessionProjections sessionQuery sessionReferenceResolver sessionTelemetry sessionTitle sessions settings settingsController shell shellEnv skills spillStore storage storageDomain subagents subprocess systemPrompt terminals tokenMeter toolResultPruner tools userQuestions web webServer webhookRuntime workflowEngine workspaceController workspaceFiles workspaceRegistry
```

Third-party services registered onto Context are not in this official types list.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

# Tool registration and presentation

## ENV-020 · Which edits take effect without a restart, which need one

- **What it is**: hot-reload boundary.
- **Status**: **available** (criterion nailed; the static `.rN.mjs` path has live evidence).
- **Conclusion**: **every static plugin we actually edit (all `.rN.mjs`) will not hot-reload; restart always.** Only creating/editing an unversioned `.mjs` is versioned-reloaded by <hot-reload-plugin>.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

**Evidence (three legs, all required)**:

| # | Kind | Content |
|---|---|---|
| ① | Source | `<hot-reload-plugin>.mjs:177`: `if (!/\.mjs$/.test(fn) \|\| fn === SELF_FILE \|\| /\.r\\d+\.mjs$/.test(fn)) return`. A change whose name already has `.rN` returns immediately and does not schedule a rename-reload |
| ② | This machine file face | `profiles/web/plugins/` 21 `.mjs`: 16 `.rN.mjs` (including <host-plugin> / a skill-manager plugin.r1 / <host-plugin> and all business plugins); **no** basename like `cross-session layer.mjs` / `a skill-manager plugin.mjs`. Plus 5 unversioned: `<dyn-boot-plugin>.mjs` `<bridge-plugin>.mjs` `<extra-unversioned>.mjs` `web-search-kimi.mjs` `web-search-select.mjs` (only these five pass :177) |
| ③ | Live evidence (replayable) | value on disk ≠ value reread from the runtime face, table below |

Live evidence ③ replay and the two values (measured on this session 2026-09-13):

| Face | `cross-session-mailbox` description |
|---|---|
| File `<host-plugin>.mjs:38` | `<cross-session-tool> / <cross-session-tool> / <cross-session-tool> / <cross-session-tool>` |
| Runtime `skill_list` reread | `session_list / session_read / session_send / mailbox_check` |

They disagree = editing `.rN.mjs` did not hot-reload. Replay: read `:38`, then `skill_list` for that skill's description; mismatch means you have not restarted.

Other paths (not this live evidence; source + config):

| What you change | Restart? | Ground |
|---|---|---|
| `dynplugins/*.host.js` / `*.client.js` | no | <hot-reload-plugin> `watch(DYN_DIR)` → `reloadPrefix` (`<hot-reload-plugin>.mjs:165-168, 57-80`) |
| Those 5 unversioned `.mjs` | no (<hot-reload-plugin> copies to `.rN.mjs` and rewrites the patch name) | `:175-178, 118-133`; profile `patchReload: live` |
| `auto-plugins.json` fingerprint changed | no whole-process restart; next turn / session-start <dyn-boot-plugin> incremental define | `<dyn-boot-plugin>.mjs:47-48, 70-72`. **Same prefix already present is skipped.** To swap code: `dev_stop_dyn_plugin <prefix>` |
| `cordis.patch.yml` **adds a row** | must restart | include reads the patch at boot; <hot-reload-plugin> does not insert a new id |
| preset `agent.cordis.yml` | discovery layer can see a new directory without restart (`discovery.d.ts:5-6`); **an already standing-mounted composition does not swap because the file changed** | new sessions follow the file; live sessions keep the old mount |
| Shipped package `node_modules/@deepseek-ai/*` | must restart | already loaded in the process |

Side observation (**not evidence**): after someone edited `<host-plugin>.mjs`, `<cross-session-tool>({query})` worked. By ①②③ it should not have. A restart may have happened in between; session log did not show that process-start time, **the observation exists, unused as evidence because restart cannot be ruled out**.

## ENV-021 · Where PTC puts the tool surface, where native puts it, what it costs

- **What it is**: `dsh-agent-tool-presentation` `mode`.
- **Status**: available (config item); this session is ptc.
- **Evidence**:

| Mode | What the model sees | Cost |
|---|---|---|
| native | one function-call schema per tool | tool definitions themselves enter the prompt. One measured tool-surface narrowing: about 12.3K tokens at observed 113 visible |
| ptc | only `run_code` exposed directly; the rest goes into SDK docs | one measured tool-surface narrowing: the same face folded into the system prompt about **19.2K** (`<internal-notes>:857`) |

<team-preset> `agent.cordis.yml:213-216` `mode: ptc`. Direct bash is folded by GATE-022. 19.2K is a 2026-09-12 measurement; **this turn did not re-measure tokens**.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
- **Related**: GATE-022, CAP-022.

# Events and hooks

## ENV-080 · Which event names exist, when they fire

- **What it is**: `ctx.on('agent/session-start', …)`.
- **Status**: available (types verified; fire timing taken from .d.ts comments; **this turn did not probe every event**).
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

| Event | Package | When (type comments) |
|---|---|---|
| `agent/created` | dsh-agent | agent entered the registry |
| `agent/session-start` | dsh-agent | after setup, before the loop; extension point of the first driver start. Source `startup \| resume \| clear \| compact` (`runtime-types.d.ts:105,298`) |
| `agent/pre-step` | dsh-agent | may refuse a step / rewrite messages (`runtime-types.d.ts:303`, behaviour not measured) |
| `agent/request` | dsh-agent | one model request (waterfall) |
| `agent/request-error` | dsh-agent | request failed |
| `agent/disposed` | dsh-agent | unregistered |
| `session/created` | dsh-session | session object created |
| `session/event` | dsh-session | event appended |
| `session/flush` | dsh-session | flushed |
| `session/disposed` | dsh-session | session released |
| `tools/pre-execute` | dsh-tools | before execute |
| `tools/execute` | dsh-tools | execute |
| `tools/post-execute` | dsh-tools | after execute |
| `tools/result` | dsh-tools | result |
| `tools/change` | dsh-tools | registry changed |
| `tools/ptc-dispatch-log` | dsh-tools | PTC sub-dispatch lands in the log |
| `subagent/start` `subagent/end` | dsh-subagent | one run |
| `subagent/provider-added` `subagent/provider-removed` | dsh-subagent | provider registry changed |
| `system-prompt/assemble` | dsh-system-prompt | assemble the prompt (waterfall) |
| `system-prompt/change` | dsh-system-prompt | provider changed |
| `skills/change` | dsh-skill | skill table changed |
| `loader/config-update` | cordis-plugin-loader | include/patch updated (<hot-reload-plugin> static rename relies on this) |
| `hmr/reload` `hmr/change` | cordis-plugin-hmr | HMR |

Common consumer is `agent/session-start` (cross-session layer / a team plugin / <dyn-boot-plugin> / a skill-manager plugin).

# Assembly and preset

## ENV-090 · Can a preset row name be !!js

- **What it is**: `name: !!js process.platform === 'win32' ? '…'` and the like.
- **Status**: never available. `name` type-check requires an ordinary string; `!!js` was never a legal name (`dsh-agent-presets/lib/index.js:224-225`). Not a runtime switch, so no GATE id.
- **Evidence**: `dsh-agent-presets/lib/index.js:224-225`:

```text
row N names no plugin (a "name" string is required)
```

`!!js` may be used on `disabled:` (same file `:297` comment), not on `name`.
- **name domain** (`specifier.js:30-39`):

| kind | What name looks like |
|---|---|
| builtin | `cordis:…` |
| preset | relative path starting with `.` |
| file | absolute path or `file:` URL |
| package | other (resolved from the installed harness) |

Absolute paths work: `isAbsolute(name)` → `pathToFileURL`.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

## ENV-091 · Do tool rows need isolate; do service rows

- **What it is**: which realm a preset row publishes services into.
- **Status**: available (hard check at mount).
- **Evidence**: `dsh-agent-presets/lib/index.js:920-921`:

```text
row(s) published process-global service(s) […]; a preset service must sit behind an `isolate` realm or move to the host composition
```

<team-preset> file header (`$DSH_HOME/.agent-presets/<team-preset>/agent.cordis.yml:11-18`): service rows must sit in a group with `isolate`; tool rows only `register` into host `tools` and do not provide, so they do not need isolate.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2

## ENV-092 · Where user presets and shipped presets live

- **What it is**: two roots, different trust.
- **Implementation**: `USER_PRESET_DIR = ".agent-presets"` (relative to dshHome); `SHIPPED_PRESET_ROOT` = in-package `../presets/` (`dsh-agent-presets/lib/types/discovery.js:48-56`). roster `:1300-1309`: shipped `trust: "system"`, user `trust: "user"`.
- **Status**: available.
- **Evidence** (this machine `ls`):

| Root | Path | This machine | Editable? |
|---|---|---|---|
| User | `$DSH_HOME/.agent-presets/` | <lab-preset> / <team-preset> / <creative-preset> / <distill-preset> | yes. This is the writable root |
| Shipped | `…/dsh-agent-presets/presets/` | cordis / minimal / ptc / standard | should not edit. Follows the package; upgrades overwrite |

CLI package.json `dsh.configTrees` writes the source tree `../../packages/preset/agent-presets/presets`; after install it is in-package `presets/`.
- **As of**: 2026-09-13 · DSH 0.1.5-rc.2

## ENV-093 · What profile plugins/ is resolved against

- **What it is**: `cordis.patch.yml` `name: ./plugins/<host-plugin>.mjs`.
- **Status**: available.
- **Evidence**: profile directory `$DSH_HOME/profiles/web/`, its `package.json` name=`dsh-profile-web`, `dsh.profile.patchReload = "live"`. Relative paths are relative to **this profile directory**, not `$DSH_HOME`. Absolute paths follow ENV-090 file kind.
- **As of**: 2026-09-13 · DSH CLI 0.1.5-rc.1 · key packages 0.1.5-rc.2
