<!-- translation of Chinese source; CAP/GATE/ENV ids duplicate by design. Do not pass this directory to doccheck together with ../. Field names are English (Status/Evidence/As of), so the Chinese-field checker will not validate them. -->

# Plugin surface, full

As of 2026-09-14 · DSH 0.1.5-rc.2.

You want to mount a service, listen to an event, or occupy a slot, but cannot tell what the catalog has from what `ctx.get` returns on this assembly: use this list.

> This is the list of what a plugin can mount, not a second draft of [l2-host.md](l2-host.md) / [l2-client.md](l2-client.md). l2-host owns the install-tree declaration ids 108/94 (HSV/HEV/HBI); this file owns **the list a plugin author can actually mount**: host service catalog 71 (runtime face: 60 mounted / 11 not) + host event catalog 62 + host builtin catalog 7 + client service catalog 8 + client slots 61 + theme tokens 13.
> How to query: `cordis_inspect_query` gives the catalogs (Service.listService / Event.listEvents / Builtin.listBuiltins / Slots.listSubTree / Theme.listTokens). Whether a service is mounted is a separate walk: host-layer dynamic plugin `ctx.get(name)` one by one — **listService by itself does not guarantee mounting**.
> The ids here do not compete with HSV/CSL: no CAP/GATE/HSV numbers in this file. Slot / token paths share a source with [l2-client.md](l2-client.md).

<!-- doccheck:no-entries -->

## Completeness (one row per block)

| Block | Expected rows | Rows in this table | Aggregated? |
|---|---|---|---|
| host services | 71 | 71 | no |
| host events | 62 | 62 | no |
| host builtins | 7 | 7 | no |
| client services | 8 | 8 | no |
| client slots | 61 | 61 | no |
| theme tokens | 13 | 13 | no |

Table body total **222**.

71 = the `Service.listService` inspection catalog (declaration face). 60/11 = the same catalog walked with `ctx.get` one by one (runtime face, host-layer plugin ctx). Consistent with the current [l2-host.md](l2-host.md) numbers — not two different 71s.

## host services (71)

| Service | One line | Mounted at runtime | How to get it |
|---|---|---|---|
| `agentDefaultModel` | (purpose unverified) | mounted | `ctx.get('agentDefaultModel')` then check for undefined; use inject for a hard dependency |
| `agentLoop` | the agent main loop | mounted | `ctx.get('agentLoop')` then check for undefined; use inject for a hard dependency |
| `agentPresets` | preset assembly | mounted | `ctx.get('agentPresets')` then check for undefined; use inject for a hard dependency |
| `agents` | the agent registry | mounted | `ctx.get('agents')` then check for undefined; use inject for a hard dependency |
| `agentTeams` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('agentTeams')` then check for undefined; use inject for a hard dependency |
| `approval` | approval | mounted | `ctx.get('approval')` then check for undefined; use inject for a hard dependency |
| `attachments` | (purpose unverified) | mounted | `ctx.get('attachments')` then check for undefined; use inject for a hard dependency |
| `authorization` | authorization | mounted | `ctx.get('authorization')` then check for undefined; use inject for a hard dependency |
| `clientModules` | (purpose unverified) | mounted | `ctx.get('clientModules')` then check for undefined; use inject for a hard dependency |
| `codeRuntime` | (purpose unverified) | mounted | `ctx.get('codeRuntime')` then check for undefined; use inject for a hard dependency |
| `commands` | commands | mounted | `ctx.get('commands')` then check for undefined; use inject for a hard dependency |
| `compaction` | compaction | **not mounted** (declared, not mounted on this assembly) | `ctx.get('compaction')` then check for undefined; use inject for a hard dependency |
| `credentials` | (purpose unverified) | mounted | `ctx.get('credentials')` then check for undefined; use inject for a hard dependency |
| `credentialsController` | (purpose unverified) | mounted | `ctx.get('credentialsController')` then check for undefined; use inject for a hard dependency |
| `deepseekLlmApiExtensions` | (purpose unverified) | mounted | `ctx.get('deepseekLlmApiExtensions')` then check for undefined; use inject for a hard dependency |
| `directoryPicker` | (purpose unverified) | mounted | `ctx.get('directoryPicker')` then check for undefined; use inject for a hard dependency |
| `directoryPickerController` | (purpose unverified) | mounted | `ctx.get('directoryPickerController')` then check for undefined; use inject for a hard dependency |
| `e2b` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('e2b')` then check for undefined; use inject for a hard dependency |
| `fileReferences` | (purpose unverified) | mounted | `ctx.get('fileReferences')` then check for undefined; use inject for a hard dependency |
| `fileUploads` | (purpose unverified) | mounted | `ctx.get('fileUploads')` then check for undefined; use inject for a hard dependency |
| `fs` | filesystem | mounted | `ctx.get('fs')` then check for undefined; use inject for a hard dependency |
| `goals` | goals | mounted | `ctx.get('goals')` then check for undefined; use inject for a hard dependency |
| `inspector` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('inspector')` then check for undefined; use inject for a hard dependency |
| `invariants` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('invariants')` then check for undefined; use inject for a hard dependency |
| `jobs` | jobs | mounted | `ctx.get('jobs')` then check for undefined; use inject for a hard dependency |
| `llm` | LLM routing | mounted | `ctx.get('llm')` then check for undefined; use inject for a hard dependency |
| `lsp` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('lsp')` then check for undefined; use inject for a hard dependency |
| `messageFeedback` | (purpose unverified) | mounted | `ctx.get('messageFeedback')` then check for undefined; use inject for a hard dependency |
| `permissionPresets` | (purpose unverified) | mounted | `ctx.get('permissionPresets')` then check for undefined; use inject for a hard dependency |
| `planMode` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('planMode')` then check for undefined; use inject for a hard dependency |
| `sandbox` | sandbox | mounted | `ctx.get('sandbox')` then check for undefined; use inject for a hard dependency |
| `sandboxPolicy` | (purpose unverified) | mounted | `ctx.get('sandboxPolicy')` then check for undefined; use inject for a hard dependency |
| `sessionController` | remote.session backing (inspect) | mounted | `ctx.get('sessionController')` then check for undefined; use inject for a hard dependency |
| `sessionFeedback` | (purpose unverified) | mounted | `ctx.get('sessionFeedback')` then check for undefined; use inject for a hard dependency |
| `sessionFileReferences` | (purpose unverified) | mounted | `ctx.get('sessionFileReferences')` then check for undefined; use inject for a hard dependency |
| `sessionPersistence` | session persistence read/write | mounted | `ctx.get('sessionPersistence')` then check for undefined; use inject for a hard dependency |
| `sessionProjectionCache` | (purpose unverified) | mounted | `ctx.get('sessionProjectionCache')` then check for undefined; use inject for a hard dependency |
| `sessionProjections` | (purpose unverified) | mounted | `ctx.get('sessionProjections')` then check for undefined; use inject for a hard dependency |
| `sessionQuery` | (purpose unverified) | mounted | `ctx.get('sessionQuery')` then check for undefined; use inject for a hard dependency |
| `sessionReferenceResolver` | (purpose unverified) | mounted | `ctx.get('sessionReferenceResolver')` then check for undefined; use inject for a hard dependency |
| `sessions` | the session registry | mounted | `ctx.get('sessions')` then check for undefined; use inject for a hard dependency |
| `sessionSkillCatalog` | (purpose unverified) | mounted | `ctx.get('sessionSkillCatalog')` then check for undefined; use inject for a hard dependency |
| `sessionTelemetry` | (purpose unverified) | mounted | `ctx.get('sessionTelemetry')` then check for undefined; use inject for a hard dependency |
| `sessionTitle` | (purpose unverified) | mounted | `ctx.get('sessionTitle')` then check for undefined; use inject for a hard dependency |
| `settings` | settings | mounted | `ctx.get('settings')` then check for undefined; use inject for a hard dependency |
| `settingsController` | (purpose unverified) | mounted | `ctx.get('settingsController')` then check for undefined; use inject for a hard dependency |
| `shell` | shell | mounted | `ctx.get('shell')` then check for undefined; use inject for a hard dependency |
| `shellEnv` | (purpose unverified) | mounted | `ctx.get('shellEnv')` then check for undefined; use inject for a hard dependency |
| `skills` | skills | mounted | `ctx.get('skills')` then check for undefined; use inject for a hard dependency |
| `spillStore` | (purpose unverified) | mounted | `ctx.get('spillStore')` then check for undefined; use inject for a hard dependency |
| `storage` | storage | mounted | `ctx.get('storage')` then check for undefined; use inject for a hard dependency |
| `storageDomain` | (purpose unverified) | mounted | `ctx.get('storageDomain')` then check for undefined; use inject for a hard dependency |
| `subagentModelSelection` | (purpose unverified) | mounted | `ctx.get('subagentModelSelection')` then check for undefined; use inject for a hard dependency |
| `subagents` | the subagent registry | mounted | `ctx.get('subagents')` then check for undefined; use inject for a hard dependency |
| `subprocess` | (purpose unverified) | mounted | `ctx.get('subprocess')` then check for undefined; use inject for a hard dependency |
| `systemPrompt` | system-prompt assembly | mounted | `ctx.get('systemPrompt')` then check for undefined; use inject for a hard dependency |
| `terminals` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('terminals')` then check for undefined; use inject for a hard dependency |
| `timer` | timer | mounted | `ctx.get('timer')` then check for undefined; use inject for a hard dependency |
| `tokenMeter` | token metering | mounted | `ctx.get('tokenMeter')` then check for undefined; use inject for a hard dependency |
| `toolResultPruner` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('toolResultPruner')` then check for undefined; use inject for a hard dependency |
| `tools` | tool registry / execution / restrict / guard | mounted | `ctx.get('tools')` then check for undefined; use inject for a hard dependency |
| `typert` | typert RPC | mounted | `ctx.get('typert')` then check for undefined; use inject for a hard dependency |
| `typertGateway` | (purpose unverified) | mounted | `ctx.get('typertGateway')` then check for undefined; use inject for a hard dependency |
| `userQuestions` | (purpose unverified) | mounted | `ctx.get('userQuestions')` then check for undefined; use inject for a hard dependency |
| `web` | (purpose unverified) | mounted | `ctx.get('web')` then check for undefined; use inject for a hard dependency |
| `webhookRuntime` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('webhookRuntime')` then check for undefined; use inject for a hard dependency |
| `webServer` | web server | mounted | `ctx.get('webServer')` then check for undefined; use inject for a hard dependency |
| `workflowEngine` | (purpose unverified) | **not mounted** (declared, not mounted on this assembly) | `ctx.get('workflowEngine')` then check for undefined; use inject for a hard dependency |
| `workspaceController` | (purpose unverified) | mounted | `ctx.get('workspaceController')` then check for undefined; use inject for a hard dependency |
| `workspaceFiles` | (purpose unverified) | mounted | `ctx.get('workspaceFiles')` then check for undefined; use inject for a hard dependency |
| `workspaceRegistry` | the workspace registry | mounted | `ctx.get('workspaceRegistry')` then check for undefined; use inject for a hard dependency |

## host events (62)

> **A waterfall listener must call and return `next()`, or everything downstream is blocked.** In one observation a listener held `user-questions/request` without calling next; the question box / approval dialog never appeared.

One-line descriptions come from the first paragraph of the install-tree `.d.ts` (a few entries in the earlier collection table were truncated; restored from the source text here).

| Event | Mode | One line |
|---|---|---|
| `agent-loop/config-start-failed` | emit | A declarative agent entry failed before it could publish a live agent. |
| `agent-preset/selected` | emit | One session committed a different agent preset to its durable log. |
| `agent/assistant-stream` | emit | Process-local assistant-stream publication. |
| `agent/created` | emit | A fully configured agent and live session were published. |
| `agent/disposed` | emit | An agent left the registry; AgentLoop emits this after driver quiescence and scoped-registration unwind, but before session detachment. |
| `agent/error` | emit | A step or turn errored. |
| `agent/inbox/claimed` | emit | One message left the inbox inside its open turn. |
| `agent/inbox/discarded` | emit | One message was discarded from the live inbox. |
| `agent/inbox/inserted` | emit | One message entered the live inbox. |
| `agent/pre-step` | waterfall | Reject a proposed step or replace the messages that enter it. |
| `agent/request` | waterfall | Replace the frozen call configuration. |
| `agent/request-error` | waterfall | Handle one failed model-request attempt before the loop retries or closes its step. |
| `agent/session-start` | emit | The session lifecycle began, once before the first turn. |
| `agent/status` | emit | Agent status changed (`idle` ⇄ `running`). |
| `agent/turn-stopping` | serial | The turn is about to close: the model owes no response (no live tool calls, no fresh steering). |
| `api-session/activity` | emit | One user-authored durable message advanced Session list activity. |
| `api-session/added` | emit | A Session became visible to Session list consumers. |
| `api-session/error` | emit | One Agent failed outside a durable turn position. |
| `api-session/removed` | emit | A Session left the live Host registry. |
| `api-session/status` | emit | One Agent changed running state. |
| `approval/request` | waterfall | Ask composed answerers for one decision. |
| `authorization/settled` | emit | One authorization attempt has finished and released its key. |
| `commands/change` | emit | A command was registered or unregistered. |
| `credentials/record-updated` | emit | Committed change to a stored credential record: a `modifyRecord` that wrote, a `deleteRecord` that removed, or an external edit observed in storage. |
| `credentials/reference-updated` | emit | Committed change to a provider-managed credential source: a `set`, an `unset`, or an external edit observed in storage. |
| `domain/changed` | emit | A domain record or the global singleton changed, emitted once per write strictly after the backend acknowledged durability. |
| `feedback/committed` | parallel | Observe a durable cold feedback mutation without publishing a live Session. |
| `fs/edit-intent` | waterfall | Single-slot decision for the next FileSystem.editText. |
| `fs/observed` | emit | Record an authoritative positive or negative observation. |
| `fs/write-intent` | waterfall | Single-slot decision for the next FileSystem.writeText. |
| `goal/activation-changed` | emit | Process-local goal activation changed for one session. |
| `goal/changed` | emit | Goal mutation accepted by one live agent. |
| `llm/adapters-updated` | emit | The provider topology changed: an adapter registered or unregistered routes, or the configurable-provider directory gained or lost entries. |
| `llm/stream` | waterfall | Waterfall around every streaming model call (retry, replay, routing). |
| `session-telemetry/record` | waterfall | Transform one outbound record before it reaches the backend. |
| `session/created` | emit | Creation announcement during session publication. |
| `session/disposed` | emit | Emitted once when an announced session leaves the store, including publication rollback, but never for an entry whose creation announcement did not begin. |
| `session/event` | emit | Post-commit, fire-and-forget append feed. |
| `session/flush` | parallel | Awaited parallel durability checkpoint: every listener runs and the caller awaits all of them, with no waterfall veto. |
| `settings/document-updated` | emit | One registered namespace's RAW user section changed, whether or not the resolved value did. |
| `settings/updated` | emit | Committed change to one registered namespace's resolved value. |
| `skills/change` | emit | A skill provider, runtime contribution, or provider-backed catalog may have changed. |
| `subagent/end` | emit | A published child settled. |
| `subagent/provider-added` | emit | A provider became resolvable in the registry. |
| `subagent/provider-removed` | emit | A provider left the registry. |
| `subagent/start` | emit | A provider established a published child. |
| `system-prompt/assemble` | waterfall | Expert waterfall over the assembled sections, contexts, tools, and variables. |
| `system-prompt/change` | emit | Emitted when any prompt provider changes. |
| `tools/change` | emit | A tool was registered or unregistered, or a scoped restriction changed (the available tool set changed — possibly for one scope only). |
| `tools/execute` | waterfall | Around-dispatch waterfall for timeout, retry, or metrics. |
| `tools/post-execute` | waterfall | Accept, replace, enrich, or block a normalized dispatch result. |
| `tools/pre-execute` | waterfall | Allow, deny, or ask before dispatch. |
| `tools/ptc-dispatch-log` | waterfall | Allow a listener to replace content in the DURABLE LOG COPY of one `run_code` sub-dispatch outcome before the bridge appends its `tool/ptc-dispatch` event. |
| `tools/result` | emit | Observe the frozen, lossless-JSON final outcome. |
| `user-questions/request` | waterfall | Ask composed answerers for structured user input. |
| `webserver/index-inject` | emit | Collect the structured index injection table. |
| `workflow/agent-end` | emit | One `agent()` call settled (clean result, child failure, or run cancellation). |
| `workflow/agent-start` | emit | One `agent()` call established a published child run. |
| `workflow/end` | emit | A workflow run settled (any stop reason). |
| `workflow/log` | emit | The script emitted a narration line (a `log(message)` call). |
| `workflow/phase` | emit | The script entered a phase (a `phase(title)` call) — progress grouping for observers; no execution semantics. |
| `workflow/start` | emit | A workflow run started — the script's meta block validated, the body about to execute. |

## host builtins (7)

| Builtin | One line | How to get it |
|---|---|---|
| `ctx` | a restricted Cordis Context | local to the host half |
| `harness` | host helper (handle / defineTool / registerTool) | local to the host half |
| `console` | labeled logging | local to the host half |
| `btoa` | Base64 encode | local to the host half |
| `atob` | Base64 decode | local to the host half |
| `TextEncoder` | UTF-8 encode | local to the host half |
| `TextDecoder` | UTF-8 decode | local to the host half |

## client services (8)

| Service | One line | How to get it |
|---|---|---|
| `layout` | layout | client plugin `ctx.get('layout')` |
| `locale` | localization | client plugin `ctx.get('locale')` |
| `sessions` | session list / registration | client plugin `ctx.get('sessions')` |
| `slots` | slots | client plugin `ctx.get('slots')` |
| `theme` | theme | client plugin `ctx.get('theme')` |
| `timer` | timing | client plugin `ctx.get('timer')` |
| `uiWorkspace` | workspace UI | client plugin `ctx.get('uiWorkspace')` |
| `workspaces` | workspaces | client plugin `ctx.get('workspaces')` |

## client slots (61)

> kind = registration protocol (single/list/keyed/chain). scope = scope. replaceRisk = risk of replacing that slot. The id table is CSL in [l2-client.md](l2-client.md).

| Slot path | kind | scope | replaceRisk |
|---|---|---|---|
| `root` | single | root | shadows-shipped-ui |
| `sidebar` | single | root | shadows-shipped-ui |
| `sidebar.brand.mark` | single | root | shadows-shipped-ui |
| `sidebar.settings` | single | root | shadows-shipped-ui |
| `settings.trigger` | single | root | shadows-shipped-ui |
| `settings.header` | single | root | shadows-shipped-ui |
| `settings.action` | list | root | none |
| `settings.close` | single | root | shadows-shipped-ui |
| `settings.section` | list | root | none |
| `settings.general.item` | list | root | none |
| `settings.plugins.tab` | list | root | none |
| `settings.plugin.item` | keyed | root | none |
| `settings.models.provider-card` | keyed | root | none |
| `settings.models.footer` | list | root | none |
| `settings.onboarding` | list | root | none |
| `sidebar.footer.action` | list | root | none |
| `sidebar.workspaces` | single | root | shadows-shipped-ui |
| `sidebar.workspaces.directoryFlow` | single | root | shadows-shipped-ui |
| `sidebar.panellist` | list | root | none |
| `sidebar.brand.name` | single | root | shadows-shipped-ui |
| `main` | keyed | root | shadows-shipped-ui |
| `main.conversation` | single | session-maybe | shadows-shipped-ui |
| `conversation.composer` | chain | session | none |
| `conversation.approval.detail` | single | session | shadows-shipped-ui |
| `conversation.hero.workspace` | single | root | shadows-shipped-ui |
| `conversation.hero.workspace.directoryFlow` | single | root | shadows-shipped-ui |
| `conversation.session` | single | session | shadows-shipped-ui |
| `conversation.view` | list | session | none |
| `conversation.chat.node` | keyed | session | shadows-shipped-ui |
| `tool.call.toolview` | keyed | session | shadows-shipped-ui |
| `tool.call.images` | single | session | shadows-shipped-ui |
| `tool.view.cordis` | keyed | session | none |
| `conversation.chat.assistant-actions` | list | session | none |
| `conversation.chat.commandview` | keyed | session | none |
| `conversation.chat.turnTail` | chain | session | none |
| `conversation.message.images` | single | session | shadows-shipped-ui |
| `conversation.trajectory.images` | single | session | shadows-shipped-ui |
| `conversation.session.header` | single | session | shadows-shipped-ui |
| `conversation.session.header.corner` | single | session | shadows-shipped-ui |
| `conversation.session.header.utilities` | list | session | none |
| `conversation.session.header.actions` | list | session | none |
| `conversation.session.header.lineage` | single | session | shadows-shipped-ui |
| `conversation.composer.bar` | single | session-maybe | shadows-shipped-ui |
| `conversation.input.plan` | single | session | shadows-shipped-ui |
| `conversation.input.attachments` | single | session-maybe | shadows-shipped-ui |
| `conversation.input.overlay` | list | session | none |
| `conversation.input.model` | single | session | shadows-shipped-ui |
| `conversation.input.left` | list | session | none |
| `conversation.input.right` | list | session | none |
| `conversation.composer.dock` | list | session | none |
| `conversation.input.dock` | list | session | none |
| `conversation.hero.brand.mark` | single | root | none |
| `conversation.hero.agentPreset` | single | root | shadows-shipped-ui |
| `rightbar` | single | root | shadows-shipped-ui |
| `rightbar.session` | single | session | shadows-shipped-ui |
| `sidebar.right.pane.tab` | keyed | session | none |
| `sidebar.right.tab.guide` | chain | session | none |
| `sidebar.right.tab.document` | keyed | session | none |
| `sidebar.right.pane.tab.title` | keyed | session | none |
| `sidebar.right.tab.menu.item` | list | session | none |
| `shell.overlay` | list | root | none |

## client theme tokens (13)

Names are full CSS variable names. All 13 have `requiresLightAndDark: true`, `valueType` = CSS color. The id table is CTK in [l2-client.md](l2-client.md).

| Token | One line | How to get it |
|---|---|---|
| `--dsw-alias-bg-base` | Application base background. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-bg-layer-1` | Primary raised surface background. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-bg-layer-2` | Secondary nested surface background. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-bg-overlay` | Overlay and popover background. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-border-l1` | Primary subtle border. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-border-l2` | Secondary stronger border. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-brand-primary` | Primary brand accent. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-label-primary` | Primary text color. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-label-secondary` | Secondary text color. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-state-error-primary` | Primary error state color. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-state-success-primary` | Primary success state color. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-alias-state-warn-primary` | Primary warning state color. | client plugin via the theme service / `Theme.listTokens` |
| `--dsw-specific-sidebar-fill` | Sidebar column and title-row background. | client plugin via the theme service / `Theme.listTokens` |

## Notes

- Services whose purpose is unverified are marked "(purpose unverified)". Check the shipped package's `.d.ts`, or target the api directory pages from this observation.
- The event / slot tables come from runtime-face collection (Event.listEvents / Slots.listSubTree). Token full names align with a `Theme.listTokens` dump.
- The 11 not mounted: `agentTeams` `compaction` `e2b` `inspector` `invariants` `lsp` `planMode` `terminals` `toolResultPruner` `webhookRuntime` `workflowEngine`.
