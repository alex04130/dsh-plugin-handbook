# L2 host 面全量

截至 2026-09-13 · DSH 0.1.5-rc.2。

两面都要，差不是噪声——「声明有、运行时没挂」就是 `sessionPersistence.inspect` 那类坑。**只有运行面（逐个 ctx.get）能回答「我能不能拿到它」。** `Service.listService` 是检视目录：本版本允许哪些接口，**不保证**已经挂上。

| 面 | 怎么查 | 本观察的数 |
|---|---|---|
| **声明面（安装树）** | `.d.ts` 的 Context / Events 扩展 | 键 **108**、事件 **94**（本表主体 HSV/HEV） |
| **声明面（检视目录）** | 活进程 `Service.listService` / `Event.listEvents` / `Builtin.listBuiltins` | service **71**、event **62**、builtin **7** |
| **运行面** | 宿主层动态插件逐个 `ctx.get(name)` | service **60** 挂 / **11** 未挂。探针作用域 = 宿主层插件 ctx；只在别的 isolate 可见的，对插件作者等于拿不到。事件与 builtin 没有「挂没挂」，不标运行面 |

本会话（PTC 会话）**没有** `cordis_inspect_query`，运行面数字不在这里复测。工具面 `Tool.listTools` **跟 preset 走**，某次观察 115，别写死。

已有判断层（CAP/GATE/ENV）不重写。waterfall 必须调用 `next()`。

<!-- doccheck:no-entries -->

## HSV · Context 服务

| ID | ctx 键 | 包 | 坐标 | 怎么拿 | 状态 |
|---|---|---|---|---|---|
| HSV-001 | `agentDefaultModel` | dsh-agent-default-model | dsh-agent-default-model/lib/types/index.d.ts:12 | `ctx.get('agentDefaultModel')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-002 | `agentLoop` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:28 | `ctx.get('agentLoop')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-003 | `agentPresets` | dsh-agent-presets | dsh-agent-presets/lib/types/index.d.ts:50 | `ctx.get('agentPresets')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-004 | `agents` | dsh-agent | dsh-agent/lib/types/index.d.ts:20 | `ctx.get('agents')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-005 | `appExit` | dsh-cmdline | dsh-cmdline/lib/types/index.d.ts:55 | `ctx.get('appExit')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-006 | `appReady` | dsh-cmdline | dsh-cmdline/lib/types/index.d.ts:57 | `ctx.get('appReady')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-007 | `approval` | dsh-user-approval | dsh-user-approval/lib/types/index.d.ts:13 | `ctx.get('approval')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-008 | `attachments` | dsh-attachment | dsh-attachment/lib/types/index.d.ts:13 | `ctx.get('attachments')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-009 | `authorization` | dsh-authorization | dsh-authorization/lib/types/index.d.ts:35 | `ctx.get('authorization')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-010 | `baseUrl` | cordis | cordis/lib/types/context.d.ts:23 | `ctx.get('baseUrl')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-011 | `chatFileMentions` | dsh-client-ui-chat | dsh-client-ui-chat/lib/types/client/contract/slots.d.ts:48 | `ctx.get('chatFileMentions')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-012 | `clientModules` | dsh-client-modules | dsh-client-modules/lib/types/index.d.ts:34 | `ctx.get('clientModules')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-013 | `cmdlineArgs` | dsh-cmdline | dsh-cmdline/lib/types/index.d.ts:53 | `ctx.get('cmdlineArgs')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-014 | `codeRuntime` | dsh-code-runtime | dsh-code-runtime/lib/types/index.d.ts:58 | `ctx.get('codeRuntime')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-015 | `commands` | dsh-commands | dsh-commands/lib/types/index.d.ts:62 | `ctx.get('commands')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-016 | `commandUi` | dsh-client-ui-commands | dsh-client-ui-commands/lib/types/client/index.d.ts:21 | `ctx.get('commandUi')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-017 | `compaction` | dsh-compaction | dsh-compaction/lib/types/index.d.ts:63 | `ctx.get('compaction')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-018 | `configuredAgentIdentities` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:37 | `ctx.get('configuredAgentIdentities')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-019 | `connection` | dsh-client-connection | dsh-client-connection/lib/types/rpc-host.d.ts:8 | `ctx.get('connection')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-020 | `cordisInspect` | dsh-cordis-client-runner | dsh-cordis-client-runner/lib/types/client/inspect-registry.d.ts:58 | `ctx.get('cordisInspect')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-021 | `credentials` | dsh-credentials | dsh-credentials/lib/types/index.d.ts:100 | `ctx.get('credentials')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-022 | `credentialsController` | dsh-api-settings-controller | dsh-api-settings-controller/lib/types/credentials.d.ts:13 | `ctx.get('credentialsController')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-023 | `deepseekLlmApiExtensions` | dsh-deepseek-llm-api-extensions | dsh-deepseek-llm-api-extensions/lib/types/index.d.ts:11 | `ctx.get('deepseekLlmApiExtensions')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-024 | `directoryPicker` | dsh-host-directory-picker | dsh-host-directory-picker/lib/types/index.d.ts:82 | `ctx.get('directoryPicker')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-025 | `directoryPickerController` | dsh-api-workspace-controller | dsh-api-workspace-controller/lib/types/directory-picker.d.ts:11 | `ctx.get('directoryPickerController')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-026 | `documentPreviews` | dsh-client-ui-sidebar-documentpreview | dsh-client-ui-sidebar-documentpreview/lib/types/client/index.d.ts:26 | `ctx.get('documentPreviews')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-027 | `dshHomePath` | dsh-app-boot | dsh-app-boot/lib/types/index.d.ts:16 | `ctx.get('dshHomePath')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-028 | `dynamicCordisRunner` | dsh-cordis-client-runner | dsh-cordis-client-runner/lib/types/client/index.d.ts:96 | `ctx.get('dynamicCordisRunner')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-029 | `entry` | cordis-plugin-loader | cordis-plugin-loader/lib/types/index.d.ts:33 | `ctx.get('entry')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-030 | `error` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:51 | `ctx.get('error')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-031 | `events` | cordis | cordis/lib/types/context.d.ts:25 | `ctx.get('events')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-032 | `fileReferences` | dsh-file-reference | dsh-file-reference/lib/types/index.d.ts:16 | `ctx.get('fileReferences')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-033 | `fileUpload` | dsh-client-file-upload | dsh-client-file-upload/lib/types/client/index.d.ts:9 | `ctx.get('fileUpload')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-034 | `fileUploads` | dsh-client-file-upload | dsh-client-file-upload/lib/types/index.d.ts:12 | `ctx.get('fileUploads')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-035 | `fs` | dsh-fs | dsh-fs/lib/types/index.d.ts:17 | `ctx.get('fs')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-036 | `goals` | dsh-goal | dsh-goal/lib/types/index.d.ts:19 | `ctx.get('goals')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-037 | `hmr` | cordis-plugin-hmr | cordis-plugin-hmr/lib/types/index.d.ts:6 | `ctx.get('hmr')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-038 | `invariants` | dsh-invariants | dsh-invariants/lib/types/index.d.ts:53 | `ctx.get('invariants')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-039 | `jobs` | dsh-jobs | dsh-jobs/lib/types/index.d.ts:15 | `ctx.get('jobs')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-040 | `launchEnvironment` | dsh-launch-environment | dsh-launch-environment/lib/types/index.d.ts:78 | `ctx.get('launchEnvironment')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-041 | `launcherSessionQueryPath` | dsh-session-query-sqlite | dsh-session-query-sqlite/lib/types/index.d.ts:17 | `ctx.get('launcherSessionQueryPath')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-042 | `llm` | dsh-llm | dsh-llm/lib/types/index.d.ts:30 | `ctx.get('llm')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-043 | `loader` | cordis-plugin-loader | cordis-plugin-loader/lib/types/index.d.ts:27 | `ctx.get('loader')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-044 | `locale` | dsh-client-locale | dsh-client-locale/lib/types/client/index.d.ts:57 | `ctx.get('locale')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-045 | `logger` | cordis | cordis/lib/types/context.d.ts:27 | `ctx.get('logger')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-046 | `messageFeedback` | dsh-message-feedback | dsh-message-feedback/lib/types/index.d.ts:18 | `ctx.get('messageFeedback')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-047 | `modelDirectories` | dsh-client-ui-model-selection | dsh-client-ui-model-selection/lib/types/client/service.d.ts:21 | `ctx.get('modelDirectories')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-048 | `modules` | dsh-client-modules | dsh-client-modules/lib/types/client/manifest.d.ts:35 | `ctx.get('modules')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-049 | `permissionPresets` | dsh-permission-presets | dsh-permission-presets/lib/types/index.d.ts:21 | `ctx.get('permissionPresets')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-050 | `planMode` | dsh-plan-mode | dsh-plan-mode/lib/types/index.d.ts:43 | `ctx.get('planMode')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-051 | `reflect` | cordis | cordis/lib/types/context.d.ts:29 | `ctx.get('reflect')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-052 | `registry` | cordis | cordis/lib/types/context.d.ts:31 | `ctx.get('registry')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-053 | `remote` | dsh-api-gateway | dsh-api-gateway/lib/types/client/index.d.ts:42 | `ctx.get('remote')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-054 | `resources` | dsh-client-resources | dsh-client-resources/lib/types/client/contract.d.ts:29 | `ctx.get('resources')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-055 | `root` | cordis | cordis/lib/types/context.d.ts:21 | `ctx.get('root')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-056 | `sandbox` | dsh-sandbox | dsh-sandbox/lib/types/index.d.ts:118 | `ctx.get('sandbox')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-057 | `sandboxPolicy` | dsh-sandbox-policy | dsh-sandbox-policy/lib/types/index.d.ts:30 | `ctx.get('sandboxPolicy')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-058 | `sessionController` | dsh-api-session-controller | dsh-api-session-controller/lib/types/index.d.ts:17 | `ctx.get('sessionController')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-059 | `sessionFeedback` | dsh-command-feedback | dsh-command-feedback/lib/types/index.d.ts:24 | `ctx.get('sessionFeedback')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-060 | `sessionFileReferences` | dsh-api-session-controller | dsh-api-session-controller/lib/types/file-references.d.ts:9 | `ctx.get('sessionFileReferences')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-061 | `sessionId` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:50 | `ctx.get('sessionId')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-062 | `sessionLogDownload` | dsh-session-log-export | dsh-session-log-export/lib/types/client/index.d.ts:7 | `ctx.get('sessionLogDownload')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-063 | `sessionPersistence` | dsh-session-persistence | dsh-session-persistence/lib/types/index.d.ts:76 | `ctx.get('sessionPersistence')`；属性访问需 inject（GATE-052） | 部分可用（inspect 面封死，见 CAP-010 / GATE-002） |
| HSV-064 | `sessionProjectionCache` | dsh-session-projection-cache | dsh-session-projection-cache/lib/types/index.d.ts:27 | `ctx.get('sessionProjectionCache')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-065 | `sessionProjections` | dsh-session-projection | dsh-session-projection/lib/types/index.d.ts:25 | `ctx.get('sessionProjections')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-066 | `sessionQuery` | dsh-session-query | dsh-session-query/lib/types/index.d.ts:25 | `ctx.get('sessionQuery')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-067 | `sessionReferenceResolver` | dsh-session-reference | dsh-session-reference/lib/types/index.d.ts:20 | `ctx.get('sessionReferenceResolver')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-068 | `sessions` | dsh-session | dsh-session/lib/types/index.d.ts:26 | `ctx.get('sessions')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-069 | `sessionSkillCatalog` | dsh-api-session-controller | dsh-api-session-controller/lib/types/skill-catalog.d.ts:8 | `ctx.get('sessionSkillCatalog')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-070 | `sessionTelemetry` | dsh-session-telemetry | dsh-session-telemetry/lib/types/index.d.ts:19 | `ctx.get('sessionTelemetry')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-071 | `sessionTitle` | dsh-session-title | dsh-session-title/lib/types/index.d.ts:33 | `ctx.get('sessionTitle')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-072 | `settings` | dsh-settings | dsh-settings/lib/types/index.d.ts:113 | `ctx.get('settings')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-073 | `settingsController` | dsh-api-settings-controller | dsh-api-settings-controller/lib/types/index.d.ts:31 | `ctx.get('settingsController')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-074 | `settingsSchema` | dsh-client-ui-settings | dsh-client-ui-settings/lib/types/client/schema.d.ts:69 | `ctx.get('settingsSchema')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-075 | `settingsScope` | dsh-client-ui-settings | dsh-client-ui-settings/lib/types/client/settings-scope.d.ts:90 | `ctx.get('settingsScope')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-076 | `shell` | dsh-shell | dsh-shell/lib/types/index.d.ts:26 | `ctx.get('shell')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-077 | `shellEnv` | dsh-shell-env | dsh-shell-env/lib/types/index.d.ts:16 | `ctx.get('shellEnv')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-078 | `sidebarRight` | dsh-client-ui-sidebar-right | dsh-client-ui-sidebar-right/lib/types/client/index.d.ts:43 | `ctx.get('sidebarRight')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-079 | `sidebarRightTabs` | dsh-client-ui-sidebar-right | dsh-client-ui-sidebar-right/lib/types/client/index.d.ts:45 | `ctx.get('sidebarRightTabs')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-080 | `skills` | dsh-skill | dsh-skill/lib/types/index.d.ts:203 | `ctx.get('skills')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-081 | `slots` | dsh-client-ui-renderer | dsh-client-ui-renderer/lib/types/client/index.d.ts:26 | `ctx.get('slots')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-082 | `spillStore` | dsh-spill | dsh-spill/lib/types/index.d.ts:22 | `ctx.get('spillStore')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-083 | `startTime` | cordis-plugin-loader | cordis-plugin-loader/lib/types/index.d.ts:30 | `ctx.get('startTime')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-084 | `storage` | dsh-storage | dsh-storage/lib/types/index.d.ts:25 | `ctx.get('storage')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-085 | `storageDomain` | dsh-storage-domain | dsh-storage-domain/lib/types/index.d.ts:27 | `ctx.get('storageDomain')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-086 | `subagentModelSelection` | dsh-tool-subagent | dsh-tool-subagent/lib/types/model-selection-settings.d.ts:8 | `ctx.get('subagentModelSelection')`；属性访问需 inject（GATE-052） | 部分可用（默认关，见 GATE-031） |
| HSV-087 | `subagents` | dsh-subagent | dsh-subagent/lib/types/index.d.ts:60 | `ctx.get('subagents')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-088 | `subprocess` | dsh-subprocess | dsh-subprocess/lib/types/index.d.ts:43 | `ctx.get('subprocess')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-089 | `systemPrompt` | dsh-system-prompt | dsh-system-prompt/lib/types/index.d.ts:12 | `ctx.get('systemPrompt')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-090 | `terminals` | dsh-terminal | dsh-terminal/lib/types/index.d.ts:15 | `ctx.get('terminals')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-091 | `theme` | dsh-client-ui-theme | dsh-client-ui-theme/lib/types/client/index.d.ts:86 | `ctx.get('theme')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-092 | `tokenMeter` | dsh-token-meter | dsh-token-meter/lib/types/index.d.ts:16 | `ctx.get('tokenMeter')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-093 | `toolResultPruner` | dsh-compaction-tool-result-pruner | dsh-compaction-tool-result-pruner/lib/types/index.d.ts:15 | `ctx.get('toolResultPruner')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-094 | `tools` | dsh-tools | dsh-tools/lib/types/index.d.ts:26 | `ctx.get('tools')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-095 | `typert` | dsh-typert-protocol | dsh-typert-protocol/lib/types/types.d.ts:453 | `ctx.get('typert')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-096 | `typertGateway` | dsh-api-gateway | dsh-api-gateway/lib/types/types.d.ts:118 | `ctx.get('typertGateway')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-097 | `uiRenderer` | dsh-client-ui-renderer | dsh-client-ui-renderer/lib/types/client/index.d.ts:28 | `ctx.get('uiRenderer')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-098 | `uiSession` | dsh-client-ui-session | dsh-client-ui-session/lib/types/client/index.d.ts:61 | `ctx.get('uiSession')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-099 | `uiWorkspace` | dsh-client-ui-workspace | dsh-client-ui-workspace/lib/types/client/navigation.d.ts:66 | `ctx.get('uiWorkspace')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-100 | `userQuestions` | dsh-user-questions | dsh-user-questions/lib/types/index.d.ts:13 | `ctx.get('userQuestions')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-101 | `version` | dsh-fs | dsh-fs/lib/types/index.d.ts:37 | `ctx.get('version')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-102 | `web` | dsh-web | dsh-web/lib/types/index.d.ts:15 | `ctx.get('web')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-103 | `webhookRuntime` | dsh-webhook | dsh-webhook/lib/types/index.d.ts:8 | `ctx.get('webhookRuntime')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-104 | `webServer` | dsh-host-webserver | dsh-host-webserver/lib/types/index.d.ts:17 | `ctx.get('webServer')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-105 | `workflowEngine` | dsh-workflow | dsh-workflow/lib/types/index.d.ts:15 | `ctx.get('workflowEngine')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |
| HSV-106 | `workspaceController` | dsh-api-workspace-controller | dsh-api-workspace-controller/lib/types/index.d.ts:10 | `ctx.get('workspaceController')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-107 | `workspaceFiles` | dsh-api-workspace-files | dsh-api-workspace-files/lib/types/index.d.ts:30 | `ctx.get('workspaceFiles')`；属性访问需 inject（GATE-052） | 未核实 |
| HSV-108 | `workspaceRegistry` | dsh-workspace | dsh-workspace/lib/types/index.d.ts:44 | `ctx.get('workspaceRegistry')`；属性访问需 inject（GATE-052） | 可用（判断层有专条则以其为准） |

## HEV · 事件

| ID | 事件 | dispatch | 坐标 | 注意 | 状态 |
|---|---|---|---|---|---|
| HEV-001 | `agent-loop/config-start-failed` | emit | dsh-agent-loop:49 |  | 未核实 |
| HEV-002 | `agent-preset/selected` | emit | dsh-agent-presets:85 |  | 未核实 |
| HEV-003 | `agent/assistant-stream` | emit | dsh-agent:375 |  | 未核实 |
| HEV-004 | `agent/created` | emit | dsh-agent:224 |  | 可用（判断层有交叉） |
| HEV-005 | `agent/disposed` | emit | dsh-agent:235 |  | 可用（判断层有交叉） |
| HEV-006 | `agent/error` | emit | dsh-agent:411 |  | 未核实 |
| HEV-007 | `agent/inbox/claimed` | emit | dsh-agent:272 |  | 未核实 |
| HEV-008 | `agent/inbox/discarded` | emit | dsh-agent:284 |  | 未核实 |
| HEV-009 | `agent/inbox/inserted` | emit | dsh-agent:258 |  | 未核实 |
| HEV-010 | `agent/pre-step` | waterfall | dsh-agent:313 | 必须调 next() | 可用（判断层有交叉） |
| HEV-011 | `agent/request` | waterfall | dsh-agent:336 | 必须调 next() | 可用（判断层有交叉） |
| HEV-012 | `agent/request-error` | waterfall | dsh-agent:357 | 必须调 next() | 未核实 |
| HEV-013 | `agent/session-start` | emit | dsh-agent:298 |  | 可用（判断层有交叉） |
| HEV-014 | `agent/status` | emit | dsh-agent:247 |  | 未核实 |
| HEV-015 | `agent/turn-stopping` | unspecified | dsh-agent:396 |  | 未核实 |
| HEV-016 | `api-session/activity` | emit | dsh-api-session-controller:564 |  | 未核实 |
| HEV-017 | `api-session/added` | emit | dsh-api-session-controller:544 |  | 未核实 |
| HEV-018 | `api-session/error` | emit | dsh-api-session-controller:571 |  | 未核实 |
| HEV-019 | `api-session/removed` | emit | dsh-api-session-controller:550 |  | 未核实 |
| HEV-020 | `api-session/status` | emit | dsh-api-session-controller:557 |  | 未核实 |
| HEV-021 | `approval/request` | waterfall | dsh-user-approval:76 | 必须调 next() | 可用（判断层有交叉） |
| HEV-022 | `authorization/settled` | emit | dsh-authorization:46 |  | 未核实 |
| HEV-023 | `command/executed` | emit | dsh-client-ui-commands:30 |  | 未核实 |
| HEV-024 | `commands/change` | emit | dsh-commands:84 |  | 未核实 |
| HEV-025 | `connection/reset` | emit | dsh-client-connection:13 |  | 未核实 |
| HEV-026 | `cordis/dynamic-package` | emit | dsh-cordis-host-runner:339 |  | 未核实 |
| HEV-027 | `cordis/dynamic-retract` | emit | dsh-cordis-host-runner:345 |  | 未核实 |
| HEV-028 | `cordis/inspect-query` | emit | dsh-cordis-host-runner:351 |  | 未核实 |
| HEV-029 | `cordis/inspect-query-resolved` | emit | dsh-cordis-host-runner:357 |  | 未核实 |
| HEV-030 | `cordis/request-run` | emit | dsh-cordis-host-runner:327 |  | 未核实 |
| HEV-031 | `cordis/request-run-resolved` | emit | dsh-cordis-host-runner:333 |  | 未核实 |
| HEV-032 | `credentials/record-updated` | emit | dsh-credentials:93 |  | 未核实 |
| HEV-033 | `credentials/reference-updated` | emit | dsh-credentials:82 |  | 未核实 |
| HEV-034 | `domain/changed` | emit | dsh-storage-domain:41 |  | 未核实 |
| HEV-035 | `exit` | unspecified | cordis-plugin-loader:20 |  | 未核实 |
| HEV-036 | `feedback/committed` | parallel | dsh-message-feedback:29 |  | 未核实 |
| HEV-037 | `fs/edit-intent` | waterfall | dsh-fs:36 | 必须调 next() | 未核实 |
| HEV-038 | `fs/observed` | emit | dsh-fs:52 |  | 未核实 |
| HEV-039 | `fs/write-intent` | waterfall | dsh-fs:28 | 必须调 next() | 未核实 |
| HEV-040 | `goal/activation-changed` | emit | dsh-goal:130 |  | 未核实 |
| HEV-041 | `goal/changed` | emit | dsh-goal:86 |  | 未核实 |
| HEV-042 | `hmr/change` | unspecified | cordis-plugin-hmr:9 |  | 可用（判断层有交叉） |
| HEV-043 | `hmr/config-update-failed` | parallel | cordis-plugin-hmr:17 |  | 未核实 |
| HEV-044 | `hmr/reload` | unspecified | cordis-plugin-hmr:10 |  | 可用（判断层有交叉） |
| HEV-045 | `internal/config` | waterfall | cordis:226 | 必须调 next() | 未核实 |
| HEV-046 | `internal/dispatch` | unspecified | cordis:238 |  | 未核实 |
| HEV-047 | `internal/get` | waterfall | cordis:232 | 必须调 next() | 未核实 |
| HEV-048 | `internal/listener` | unspecified | cordis:236 |  | 未核实 |
| HEV-049 | `internal/plugin` | unspecified | cordis:218 |  | 未核实 |
| HEV-050 | `internal/service` | waterfall | cordis:228 | 必须调 next() | 未核实 |
| HEV-051 | `internal/set` | waterfall（签名含 next，@mode 未标） | cordis:234 | 必须调 next() | 未核实 |
| HEV-052 | `internal/status` | unspecified | cordis:220 |  | 未核实 |
| HEV-053 | `internal/update` | waterfall | cordis:230 | 必须调 next() | 未核实 |
| HEV-054 | `llm/adapters-updated` | emit | dsh-llm:21 |  | 未核实 |
| HEV-055 | `llm/stream` | waterfall | dsh-llm:45 | 必须调 next() | 未核实 |
| HEV-056 | `loader/config-update` | unspecified | cordis-plugin-loader:21 |  | 可用（判断层有交叉） |
| HEV-057 | `loader/entry-init` | unspecified | cordis-plugin-loader:22 |  | 未核实 |
| HEV-058 | `loader/partial-dispose` | unspecified | cordis-plugin-loader:23 |  | 未核实 |
| HEV-059 | `loader/patch-context` | waterfall（签名含 next，@mode 未标） | cordis-plugin-loader:24 | 必须调 next() | 未核实 |
| HEV-060 | `locale/change` | emit | dsh-client-locale:68 |  | 未核实 |
| HEV-061 | `session-telemetry/record` | waterfall | dsh-session-telemetry:40 | 必须调 next() | 未核实 |
| HEV-062 | `session/created` | emit | dsh-session:40 |  | 可用（判断层有交叉） |
| HEV-063 | `session/disposed` | emit | dsh-session:50 |  | 可用（判断层有交叉） |
| HEV-064 | `session/event` | emit | dsh-session:62 |  | 可用（判断层有交叉） |
| HEV-065 | `session/flush` | waterfall | dsh-session:71 | 必须调 next() | 可用（判断层有交叉） |
| HEV-066 | `settings/document-updated` | emit | dsh-settings:101 |  | 未核实 |
| HEV-067 | `settings/updated` | emit | dsh-settings:89 |  | 未核实 |
| HEV-068 | `skills/change` | emit | dsh-skill:213 |  | 可用（判断层有交叉） |
| HEV-069 | `slash/input-begin-command` | unspecified | dsh-client-ui-conversation:137 |  | 未核实 |
| HEV-070 | `slash/input-consume-token` | unspecified | dsh-client-ui-conversation:149 |  | 未核实 |
| HEV-071 | `slash/input-insert-reference` | unspecified | dsh-client-ui-conversation:143 |  | 未核实 |
| HEV-072 | `slash/input-insert-text` | unspecified | dsh-client-ui-conversation:155 |  | 未核实 |
| HEV-073 | `slots/changed` | emit | dsh-client-ui-renderer:22 |  | 未核实 |
| HEV-074 | `subagent/end` | emit | dsh-subagent:94 |  | 可用（判断层有交叉） |
| HEV-075 | `subagent/provider-added` | emit | dsh-subagent:68 |  | 可用（判断层有交叉） |
| HEV-076 | `subagent/provider-removed` | emit | dsh-subagent:74 |  | 可用（判断层有交叉） |
| HEV-077 | `subagent/start` | emit | dsh-subagent:85 |  | 可用（判断层有交叉） |
| HEV-078 | `system-prompt/assemble` | waterfall | dsh-system-prompt:27 | 必须调 next() | 可用（判断层有交叉） |
| HEV-079 | `system-prompt/change` | waterfall | dsh-system-prompt:33 | 必须调 next() | 可用（判断层有交叉） |
| HEV-080 | `theme/change` | emit | dsh-client-ui-theme:95 |  | 未核实 |
| HEV-081 | `tools/change` | emit | dsh-tools:93 |  | 可用（判断层有交叉） |
| HEV-082 | `tools/execute` | waterfall | dsh-tools:49 | 必须调 next() | 可用（判断层有交叉） |
| HEV-083 | `tools/post-execute` | waterfall | dsh-tools:61 | 必须调 next() | 可用（判断层有交叉） |
| HEV-084 | `tools/pre-execute` | waterfall | dsh-tools:38 | 必须调 next() | 可用（判断层有交叉） |
| HEV-085 | `tools/ptc-dispatch-log` | waterfall | dsh-tools:75 | 必须调 next() | 可用（判断层有交叉） |
| HEV-086 | `tools/result` | emit | dsh-tools:83 |  | 可用（判断层有交叉） |
| HEV-087 | `user-questions/request` | waterfall | dsh-user-questions:77 | 必须调 next() | 未核实 |
| HEV-088 | `webserver/index-inject` | emit | dsh-host-webserver:27 |  | 未核实 |
| HEV-089 | `workflow/agent-end` | emit | dsh-workflow:60 |  | 未核实 |
| HEV-090 | `workflow/agent-start` | emit | dsh-workflow:49 |  | 未核实 |
| HEV-091 | `workflow/end` | emit | dsh-workflow:70 |  | 未核实 |
| HEV-092 | `workflow/log` | emit | dsh-workflow:39 |  | 未核实 |
| HEV-093 | `workflow/phase` | emit | dsh-workflow:32 |  | 未核实 |
| HEV-094 | `workflow/start` | emit | dsh-workflow:24 |  | 未核实 |

## HBI · builtin / 装配原语

检视目录 `Builtin.listBuiltins` = 7（不是挂载探针）。d.ts 没有同名静态表。下面 7 条按插件作者会碰到的装配原语对齐，**不是 dump**。

| ID | 名字 | 是什么 | 出处 | 状态 |
|---|---|---|---|---|
| HBI-001 | cordis group 行 | `group: true` 递归 config | cordis-plugin-include | 未核实 |
| HBI-002 | isolate realm | preset 服务必须进 isolate | ENV-091 | 可用 |
| HBI-003 | Loader include/patch | profile 组合与热补丁 | ENV-020 | 可用 |
| HBI-004 | timer | `ctx.get('timer')` | cordis-plugin-timer | 未核实 |
| HBI-005 | hmr | HMR | cordis-plugin-hmr | 可用 |
| HBI-006 | logger | `ctx.logger` | cordis | 未核实 |
| HBI-007 | reflect / registry | 服务解析与插件表 | GATE-052 | 可用 |
