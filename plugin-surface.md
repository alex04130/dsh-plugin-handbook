# 插件面全量

截至 2026-09-14 · DSH 0.1.5-rc.2。

要挂服务、听事件、占槽，却分不清目录上有和这次 `ctx.get` 拿得到：用这份清单。

> 查法：`cordis_inspect_query` 给目录（Service.listService / Event.listEvents / Builtin.listBuiltins / Slots.listSubTree / Theme.listTokens）。服务「挂没挂」另走宿主层动态插件逐个 `ctx.get(name)`，**listService 本身不保证已挂**。安装树声明面编号在 [l2-host.md](l2-host.md)；槽路径在 [l2-client.md](l2-client.md)。本表无 CAP/GATE/HSV 号。

<!-- doccheck:no-entries -->

## 完整度（一行一项）

| 块 | 应有行 | 本表行 | 聚合？ |
|---|---|---|---|
| host service | 71 | 71 | 否 |
| host event | 62 | 62 | 否 |
| host builtin | 7 | 7 | 否 |
| client service | 8 | 8 | 否 |
| client slot | 61 | 61 | 否 |
| theme token | 13 | 13 | 否 |

表体合计 **222**。

71 = `Service.listService` 检视目录（声明面）。60/11 = 同一份目录上逐个 `ctx.get`（运行面，宿主层插件 ctx）。

## host service（71）

| 服务 | 一句 | 运行面挂了吗 | 怎么拿 |
|---|---|---|---|
| `agentDefaultModel` | （用途未核实） | 挂 | `ctx.get('agentDefaultModel')` 判 undefined；hard dep 用 inject |
| `agentLoop` | agent 主循环 | 挂 | `ctx.get('agentLoop')` 判 undefined；hard dep 用 inject |
| `agentPresets` | preset 装配 | 挂 | `ctx.get('agentPresets')` 判 undefined；hard dep 用 inject |
| `agents` | agent 注册表 | 挂 | `ctx.get('agents')` 判 undefined；hard dep 用 inject |
| `agentTeams` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('agentTeams')` 判 undefined；hard dep 用 inject |
| `approval` | 审批 | 挂 | `ctx.get('approval')` 判 undefined；hard dep 用 inject |
| `attachments` | （用途未核实） | 挂 | `ctx.get('attachments')` 判 undefined；hard dep 用 inject |
| `authorization` | 授权 | 挂 | `ctx.get('authorization')` 判 undefined；hard dep 用 inject |
| `clientModules` | （用途未核实） | 挂 | `ctx.get('clientModules')` 判 undefined；hard dep 用 inject |
| `codeRuntime` | （用途未核实） | 挂 | `ctx.get('codeRuntime')` 判 undefined；hard dep 用 inject |
| `commands` | 命令 | 挂 | `ctx.get('commands')` 判 undefined；hard dep 用 inject |
| `compaction` | 压缩 | **未挂**（声明有，本次装配未挂载） | `ctx.get('compaction')` 判 undefined；hard dep 用 inject |
| `credentials` | （用途未核实） | 挂 | `ctx.get('credentials')` 判 undefined；hard dep 用 inject |
| `credentialsController` | （用途未核实） | 挂 | `ctx.get('credentialsController')` 判 undefined；hard dep 用 inject |
| `deepseekLlmApiExtensions` | （用途未核实） | 挂 | `ctx.get('deepseekLlmApiExtensions')` 判 undefined；hard dep 用 inject |
| `directoryPicker` | （用途未核实） | 挂 | `ctx.get('directoryPicker')` 判 undefined；hard dep 用 inject |
| `directoryPickerController` | （用途未核实） | 挂 | `ctx.get('directoryPickerController')` 判 undefined；hard dep 用 inject |
| `e2b` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('e2b')` 判 undefined；hard dep 用 inject |
| `fileReferences` | （用途未核实） | 挂 | `ctx.get('fileReferences')` 判 undefined；hard dep 用 inject |
| `fileUploads` | （用途未核实） | 挂 | `ctx.get('fileUploads')` 判 undefined；hard dep 用 inject |
| `fs` | 文件系统 | 挂 | `ctx.get('fs')` 判 undefined；hard dep 用 inject |
| `goals` | 目标 | 挂 | `ctx.get('goals')` 判 undefined；hard dep 用 inject |
| `inspector` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('inspector')` 判 undefined；hard dep 用 inject |
| `invariants` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('invariants')` 判 undefined；hard dep 用 inject |
| `jobs` | 任务 | 挂 | `ctx.get('jobs')` 判 undefined；hard dep 用 inject |
| `llm` | LLM 路由 | 挂 | `ctx.get('llm')` 判 undefined；hard dep 用 inject |
| `lsp` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('lsp')` 判 undefined；hard dep 用 inject |
| `messageFeedback` | （用途未核实） | 挂 | `ctx.get('messageFeedback')` 判 undefined；hard dep 用 inject |
| `permissionPresets` | （用途未核实） | 挂 | `ctx.get('permissionPresets')` 判 undefined；hard dep 用 inject |
| `planMode` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('planMode')` 判 undefined；hard dep 用 inject |
| `sandbox` | 沙箱 | 挂 | `ctx.get('sandbox')` 判 undefined；hard dep 用 inject |
| `sandboxPolicy` | （用途未核实） | 挂 | `ctx.get('sandboxPolicy')` 判 undefined；hard dep 用 inject |
| `sessionController` | remote.session backing（inspect） | 挂 | `ctx.get('sessionController')` 判 undefined；hard dep 用 inject |
| `sessionFeedback` | （用途未核实） | 挂 | `ctx.get('sessionFeedback')` 判 undefined；hard dep 用 inject |
| `sessionFileReferences` | （用途未核实） | 挂 | `ctx.get('sessionFileReferences')` 判 undefined；hard dep 用 inject |
| `sessionPersistence` | 会话持久化 read/write | 挂 | `ctx.get('sessionPersistence')` 判 undefined；hard dep 用 inject |
| `sessionProjectionCache` | （用途未核实） | 挂 | `ctx.get('sessionProjectionCache')` 判 undefined；hard dep 用 inject |
| `sessionProjections` | （用途未核实） | 挂 | `ctx.get('sessionProjections')` 判 undefined；hard dep 用 inject |
| `sessionQuery` | （用途未核实） | 挂 | `ctx.get('sessionQuery')` 判 undefined；hard dep 用 inject |
| `sessionReferenceResolver` | （用途未核实） | 挂 | `ctx.get('sessionReferenceResolver')` 判 undefined；hard dep 用 inject |
| `sessions` | 会话注册表 | 挂 | `ctx.get('sessions')` 判 undefined；hard dep 用 inject |
| `sessionSkillCatalog` | （用途未核实） | 挂 | `ctx.get('sessionSkillCatalog')` 判 undefined；hard dep 用 inject |
| `sessionTelemetry` | （用途未核实） | 挂 | `ctx.get('sessionTelemetry')` 判 undefined；hard dep 用 inject |
| `sessionTitle` | （用途未核实） | 挂 | `ctx.get('sessionTitle')` 判 undefined；hard dep 用 inject |
| `settings` | 设置 | 挂 | `ctx.get('settings')` 判 undefined；hard dep 用 inject |
| `settingsController` | （用途未核实） | 挂 | `ctx.get('settingsController')` 判 undefined；hard dep 用 inject |
| `shell` | shell | 挂 | `ctx.get('shell')` 判 undefined；hard dep 用 inject |
| `shellEnv` | （用途未核实） | 挂 | `ctx.get('shellEnv')` 判 undefined；hard dep 用 inject |
| `skills` | 技能 | 挂 | `ctx.get('skills')` 判 undefined；hard dep 用 inject |
| `spillStore` | （用途未核实） | 挂 | `ctx.get('spillStore')` 判 undefined；hard dep 用 inject |
| `storage` | 存储 | 挂 | `ctx.get('storage')` 判 undefined；hard dep 用 inject |
| `storageDomain` | （用途未核实） | 挂 | `ctx.get('storageDomain')` 判 undefined；hard dep 用 inject |
| `subagentModelSelection` | （用途未核实） | 挂 | `ctx.get('subagentModelSelection')` 判 undefined；hard dep 用 inject |
| `subagents` | 子代理注册表 | 挂 | `ctx.get('subagents')` 判 undefined；hard dep 用 inject |
| `subprocess` | （用途未核实） | 挂 | `ctx.get('subprocess')` 判 undefined；hard dep 用 inject |
| `systemPrompt` | 提示词组装 | 挂 | `ctx.get('systemPrompt')` 判 undefined；hard dep 用 inject |
| `terminals` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('terminals')` 判 undefined；hard dep 用 inject |
| `timer` | 定时器 | 挂 | `ctx.get('timer')` 判 undefined；hard dep 用 inject |
| `tokenMeter` | token 计量 | 挂 | `ctx.get('tokenMeter')` 判 undefined；hard dep 用 inject |
| `toolResultPruner` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('toolResultPruner')` 判 undefined；hard dep 用 inject |
| `tools` | 工具注册/执行/restrict/guard | 挂 | `ctx.get('tools')` 判 undefined；hard dep 用 inject |
| `typert` | typert RPC | 挂 | `ctx.get('typert')` 判 undefined；hard dep 用 inject |
| `typertGateway` | （用途未核实） | 挂 | `ctx.get('typertGateway')` 判 undefined；hard dep 用 inject |
| `userQuestions` | （用途未核实） | 挂 | `ctx.get('userQuestions')` 判 undefined；hard dep 用 inject |
| `web` | （用途未核实） | 挂 | `ctx.get('web')` 判 undefined；hard dep 用 inject |
| `webhookRuntime` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('webhookRuntime')` 判 undefined；hard dep 用 inject |
| `webServer` | web 服务 | 挂 | `ctx.get('webServer')` 判 undefined；hard dep 用 inject |
| `workflowEngine` | （用途未核实） | **未挂**（声明有，本次装配未挂载） | `ctx.get('workflowEngine')` 判 undefined；hard dep 用 inject |
| `workspaceController` | （用途未核实） | 挂 | `ctx.get('workspaceController')` 判 undefined；hard dep 用 inject |
| `workspaceFiles` | （用途未核实） | 挂 | `ctx.get('workspaceFiles')` 判 undefined；hard dep 用 inject |
| `workspaceRegistry` | 工作区注册表 | 挂 | `ctx.get('workspaceRegistry')` 判 undefined；hard dep 用 inject |

## host event（62）

> **waterfall 的监听器必须调用并返回 `next()`，否则下游全被挡住。** 某次观察里一个监听器扣住 `user-questions/request` 不调 next，提问框/审批弹窗出不来。

一句取自安装树 `.d.ts` 首段。

| event | mode | 一句 |
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

## host builtin（7）

| builtin | 一句 | 怎么拿 |
|---|---|---|
| `ctx` | 受限 Cordis Context | host 半部局部 |
| `harness` | host 助手（handle / defineTool / registerTool） | host 半部局部 |
| `console` | 带标签日志 | host 半部局部 |
| `btoa` | Base64 编码 | host 半部局部 |
| `atob` | Base64 解码 | host 半部局部 |
| `TextEncoder` | UTF-8 编码 | host 半部局部 |
| `TextDecoder` | UTF-8 解码 | host 半部局部 |

## client service（8）

| 服务 | 一句 | 怎么拿 |
|---|---|---|
| `layout` | 布局 | client 插件 `ctx.get('layout')` |
| `locale` | 本地化 | client 插件 `ctx.get('locale')` |
| `sessions` | 会话列表/注册 | client 插件 `ctx.get('sessions')` |
| `slots` | 插槽 | client 插件 `ctx.get('slots')` |
| `theme` | 主题 | client 插件 `ctx.get('theme')` |
| `timer` | 定时 | client 插件 `ctx.get('timer')` |
| `uiWorkspace` | 工作区 UI | client 插件 `ctx.get('uiWorkspace')` |
| `workspaces` | 工作区 | client 插件 `ctx.get('workspaces')` |

## client slot（61）

> kind=注册协议（single/list/keyed/chain）。scope=作用域。replaceRisk=替换该槽位风险。编号表见 [l2-client.md](l2-client.md) CSL。

| slot 路径 | kind | scope | replaceRisk |
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

## client theme token（13）

名是 CSS 变量全称。13 条都 `requiresLightAndDark: true`，`valueType` = CSS color。编号表见 [l2-client.md](l2-client.md) CTK。

| token | 一句 | 怎么拿 |
|---|---|---|
| `--dsw-alias-bg-base` | Application base background. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-bg-layer-1` | Primary raised surface background. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-bg-layer-2` | Secondary nested surface background. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-bg-overlay` | Overlay and popover background. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-border-l1` | Primary subtle border. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-border-l2` | Secondary stronger border. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-brand-primary` | Primary brand accent. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-label-primary` | Primary text color. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-label-secondary` | Secondary text color. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-state-error-primary` | Primary error state color. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-state-success-primary` | Primary success state color. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-alias-state-warn-primary` | Primary warning state color. | client 插件经 theme 服务 / `Theme.listTokens` |
| `--dsw-specific-sidebar-fill` | Sidebar column and title-row background. | client 插件经 theme 服务 / `Theme.listTokens` |

## 说明

- 服务用途未核实的标「未核实」，查发行版包的 `.d.ts` 或本观察的 api 目录定向。
- 事件/slot 全表来自运行面采集（Event.listEvents / Slots.listSubTree）。token 全称对齐 `Theme.listTokens` dump。
- 未挂 11：`agentTeams` `compaction` `e2b` `inspector` `invariants` `lsp` `planMode` `terminals` `toolResultPruner` `webhookRuntime` `workflowEngine`。
