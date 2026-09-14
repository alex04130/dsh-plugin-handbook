<!-- translation of Chinese source; CAP/GATE/ENV ids duplicate by design. Do not pass this directory to doccheck together with ../. Field names are English (Status/Evidence/As of), so the Chinese-field checker will not validate them. -->

# L2 host surface, full

As of 2026-09-13 · DSH 0.1.5-rc.2.

Reading only `.d.ts` you would think `inspect` still exists: this file separates the declaration face from what is actually mounted on this assembly. You want both faces; the gap is not noise. "Declared but not mounted" is exactly the `sessionPersistence.inspect` class of trap. **Only the runtime face (`ctx.get` one by one) answers "can I get it".** `Service.listService` is an inspection catalog: which interfaces this version permits, **not** a guarantee that any of them is mounted.

| Face | How to observe | This observation's numbers |
|---|---|---|
| **Declaration face (install tree)** | Context / Events extensions in `.d.ts` | keys **108**, events **94** (the HSV/HEV body of this file) |
| **Declaration face (inspection catalog)** | live process `Service.listService` / `Event.listEvents` / `Builtin.listBuiltins` | service **71**, event **62**, builtin **7** |
| **Runtime face** | host-layer dynamic plugin `ctx.get(name)` one by one | service **60** mounted / **11** not. Probe scope = host-layer plugin ctx; anything visible only inside another isolate is, for a plugin author, out of reach. Events and builtins have no "mounted or not"; they carry no runtime face |

This session (a PTC session) has no `cordis_inspect_query`, so the runtime-face numbers were not re-measured here. The tool face `Tool.listTools` **follows the preset**; one observation saw 115 — do not hard-code it.

The judgement layer (CAP/GATE/ENV) is not rewritten here. Waterfall listeners must call `next()`.

<!-- doccheck:no-entries -->

## HSV · Context services

| ID | ctx key | Package | Coordinate | How to get it | Status |
|---|---|---|---|---|---|
| HSV-001 | `agentDefaultModel` | dsh-agent-default-model | dsh-agent-default-model/lib/types/index.d.ts:12 | `ctx.get('agentDefaultModel')`; property access requires inject (GATE-052) | unverified |
| HSV-002 | `agentLoop` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:28 | `ctx.get('agentLoop')`; property access requires inject (GATE-052) | unverified |
| HSV-003 | `agentPresets` | dsh-agent-presets | dsh-agent-presets/lib/types/index.d.ts:50 | `ctx.get('agentPresets')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-004 | `agents` | dsh-agent | dsh-agent/lib/types/index.d.ts:20 | `ctx.get('agents')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-005 | `appExit` | dsh-cmdline | dsh-cmdline/lib/types/index.d.ts:55 | `ctx.get('appExit')`; property access requires inject (GATE-052) | unverified |
| HSV-006 | `appReady` | dsh-cmdline | dsh-cmdline/lib/types/index.d.ts:57 | `ctx.get('appReady')`; property access requires inject (GATE-052) | unverified |
| HSV-007 | `approval` | dsh-user-approval | dsh-user-approval/lib/types/index.d.ts:13 | `ctx.get('approval')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-008 | `attachments` | dsh-attachment | dsh-attachment/lib/types/index.d.ts:13 | `ctx.get('attachments')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-009 | `authorization` | dsh-authorization | dsh-authorization/lib/types/index.d.ts:35 | `ctx.get('authorization')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-010 | `baseUrl` | cordis | cordis/lib/types/context.d.ts:23 | `ctx.get('baseUrl')`; property access requires inject (GATE-052) | unverified |
| HSV-011 | `chatFileMentions` | dsh-client-ui-chat | dsh-client-ui-chat/lib/types/client/contract/slots.d.ts:48 | `ctx.get('chatFileMentions')`; property access requires inject (GATE-052) | unverified |
| HSV-012 | `clientModules` | dsh-client-modules | dsh-client-modules/lib/types/index.d.ts:34 | `ctx.get('clientModules')`; property access requires inject (GATE-052) | unverified |
| HSV-013 | `cmdlineArgs` | dsh-cmdline | dsh-cmdline/lib/types/index.d.ts:53 | `ctx.get('cmdlineArgs')`; property access requires inject (GATE-052) | unverified |
| HSV-014 | `codeRuntime` | dsh-code-runtime | dsh-code-runtime/lib/types/index.d.ts:58 | `ctx.get('codeRuntime')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-015 | `commands` | dsh-commands | dsh-commands/lib/types/index.d.ts:62 | `ctx.get('commands')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-016 | `commandUi` | dsh-client-ui-commands | dsh-client-ui-commands/lib/types/client/index.d.ts:21 | `ctx.get('commandUi')`; property access requires inject (GATE-052) | unverified |
| HSV-017 | `compaction` | dsh-compaction | dsh-compaction/lib/types/index.d.ts:63 | `ctx.get('compaction')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-018 | `configuredAgentIdentities` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:37 | `ctx.get('configuredAgentIdentities')`; property access requires inject (GATE-052) | unverified |
| HSV-019 | `connection` | dsh-client-connection | dsh-client-connection/lib/types/rpc-host.d.ts:8 | `ctx.get('connection')`; property access requires inject (GATE-052) | unverified |
| HSV-020 | `cordisInspect` | dsh-cordis-client-runner | dsh-cordis-client-runner/lib/types/client/inspect-registry.d.ts:58 | `ctx.get('cordisInspect')`; property access requires inject (GATE-052) | unverified |
| HSV-021 | `credentials` | dsh-credentials | dsh-credentials/lib/types/index.d.ts:100 | `ctx.get('credentials')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-022 | `credentialsController` | dsh-api-settings-controller | dsh-api-settings-controller/lib/types/credentials.d.ts:13 | `ctx.get('credentialsController')`; property access requires inject (GATE-052) | unverified |
| HSV-023 | `deepseekLlmApiExtensions` | dsh-deepseek-llm-api-extensions | dsh-deepseek-llm-api-extensions/lib/types/index.d.ts:11 | `ctx.get('deepseekLlmApiExtensions')`; property access requires inject (GATE-052) | unverified |
| HSV-024 | `directoryPicker` | dsh-host-directory-picker | dsh-host-directory-picker/lib/types/index.d.ts:82 | `ctx.get('directoryPicker')`; property access requires inject (GATE-052) | unverified |
| HSV-025 | `directoryPickerController` | dsh-api-workspace-controller | dsh-api-workspace-controller/lib/types/directory-picker.d.ts:11 | `ctx.get('directoryPickerController')`; property access requires inject (GATE-052) | unverified |
| HSV-026 | `documentPreviews` | dsh-client-ui-sidebar-documentpreview | dsh-client-ui-sidebar-documentpreview/lib/types/client/index.d.ts:26 | `ctx.get('documentPreviews')`; property access requires inject (GATE-052) | unverified |
| HSV-027 | `dshHomePath` | dsh-app-boot | dsh-app-boot/lib/types/index.d.ts:16 | `ctx.get('dshHomePath')`; property access requires inject (GATE-052) | unverified |
| HSV-028 | `dynamicCordisRunner` | dsh-cordis-client-runner | dsh-cordis-client-runner/lib/types/client/index.d.ts:96 | `ctx.get('dynamicCordisRunner')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-029 | `entry` | cordis-plugin-loader | cordis-plugin-loader/lib/types/index.d.ts:33 | `ctx.get('entry')`; property access requires inject (GATE-052) | unverified |
| HSV-030 | `error` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:51 | `ctx.get('error')`; property access requires inject (GATE-052) | unverified |
| HSV-031 | `events` | cordis | cordis/lib/types/context.d.ts:25 | `ctx.get('events')`; property access requires inject (GATE-052) | unverified |
| HSV-032 | `fileReferences` | dsh-file-reference | dsh-file-reference/lib/types/index.d.ts:16 | `ctx.get('fileReferences')`; property access requires inject (GATE-052) | unverified |
| HSV-033 | `fileUpload` | dsh-client-file-upload | dsh-client-file-upload/lib/types/client/index.d.ts:9 | `ctx.get('fileUpload')`; property access requires inject (GATE-052) | unverified |
| HSV-034 | `fileUploads` | dsh-client-file-upload | dsh-client-file-upload/lib/types/index.d.ts:12 | `ctx.get('fileUploads')`; property access requires inject (GATE-052) | unverified |
| HSV-035 | `fs` | dsh-fs | dsh-fs/lib/types/index.d.ts:17 | `ctx.get('fs')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-036 | `goals` | dsh-goal | dsh-goal/lib/types/index.d.ts:19 | `ctx.get('goals')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-037 | `hmr` | cordis-plugin-hmr | cordis-plugin-hmr/lib/types/index.d.ts:6 | `ctx.get('hmr')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-038 | `invariants` | dsh-invariants | dsh-invariants/lib/types/index.d.ts:53 | `ctx.get('invariants')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-039 | `jobs` | dsh-jobs | dsh-jobs/lib/types/index.d.ts:15 | `ctx.get('jobs')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-040 | `launchEnvironment` | dsh-launch-environment | dsh-launch-environment/lib/types/index.d.ts:78 | `ctx.get('launchEnvironment')`; property access requires inject (GATE-052) | unverified |
| HSV-041 | `launcherSessionQueryPath` | dsh-session-query-sqlite | dsh-session-query-sqlite/lib/types/index.d.ts:17 | `ctx.get('launcherSessionQueryPath')`; property access requires inject (GATE-052) | unverified |
| HSV-042 | `llm` | dsh-llm | dsh-llm/lib/types/index.d.ts:30 | `ctx.get('llm')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-043 | `loader` | cordis-plugin-loader | cordis-plugin-loader/lib/types/index.d.ts:27 | `ctx.get('loader')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-044 | `locale` | dsh-client-locale | dsh-client-locale/lib/types/client/index.d.ts:57 | `ctx.get('locale')`; property access requires inject (GATE-052) | unverified |
| HSV-045 | `logger` | cordis | cordis/lib/types/context.d.ts:27 | `ctx.get('logger')`; property access requires inject (GATE-052) | unverified |
| HSV-046 | `messageFeedback` | dsh-message-feedback | dsh-message-feedback/lib/types/index.d.ts:18 | `ctx.get('messageFeedback')`; property access requires inject (GATE-052) | unverified |
| HSV-047 | `modelDirectories` | dsh-client-ui-model-selection | dsh-client-ui-model-selection/lib/types/client/service.d.ts:21 | `ctx.get('modelDirectories')`; property access requires inject (GATE-052) | unverified |
| HSV-048 | `modules` | dsh-client-modules | dsh-client-modules/lib/types/client/manifest.d.ts:35 | `ctx.get('modules')`; property access requires inject (GATE-052) | unverified |
| HSV-049 | `permissionPresets` | dsh-permission-presets | dsh-permission-presets/lib/types/index.d.ts:21 | `ctx.get('permissionPresets')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-050 | `planMode` | dsh-plan-mode | dsh-plan-mode/lib/types/index.d.ts:43 | `ctx.get('planMode')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-051 | `reflect` | cordis | cordis/lib/types/context.d.ts:29 | `ctx.get('reflect')`; property access requires inject (GATE-052) | unverified |
| HSV-052 | `registry` | cordis | cordis/lib/types/context.d.ts:31 | `ctx.get('registry')`; property access requires inject (GATE-052) | unverified |
| HSV-053 | `remote` | dsh-api-gateway | dsh-api-gateway/lib/types/client/index.d.ts:42 | `ctx.get('remote')`; property access requires inject (GATE-052) | unverified |
| HSV-054 | `resources` | dsh-client-resources | dsh-client-resources/lib/types/client/contract.d.ts:29 | `ctx.get('resources')`; property access requires inject (GATE-052) | unverified |
| HSV-055 | `root` | cordis | cordis/lib/types/context.d.ts:21 | `ctx.get('root')`; property access requires inject (GATE-052) | unverified |
| HSV-056 | `sandbox` | dsh-sandbox | dsh-sandbox/lib/types/index.d.ts:118 | `ctx.get('sandbox')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-057 | `sandboxPolicy` | dsh-sandbox-policy | dsh-sandbox-policy/lib/types/index.d.ts:30 | `ctx.get('sandboxPolicy')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-058 | `sessionController` | dsh-api-session-controller | dsh-api-session-controller/lib/types/index.d.ts:17 | `ctx.get('sessionController')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-059 | `sessionFeedback` | dsh-command-feedback | dsh-command-feedback/lib/types/index.d.ts:24 | `ctx.get('sessionFeedback')`; property access requires inject (GATE-052) | unverified |
| HSV-060 | `sessionFileReferences` | dsh-api-session-controller | dsh-api-session-controller/lib/types/file-references.d.ts:9 | `ctx.get('sessionFileReferences')`; property access requires inject (GATE-052) | unverified |
| HSV-061 | `sessionId` | dsh-agent-loop | dsh-agent-loop/lib/types/index.d.ts:50 | `ctx.get('sessionId')`; property access requires inject (GATE-052) | unverified |
| HSV-062 | `sessionLogDownload` | dsh-session-log-export | dsh-session-log-export/lib/types/client/index.d.ts:7 | `ctx.get('sessionLogDownload')`; property access requires inject (GATE-052) | unverified |
| HSV-063 | `sessionPersistence` | dsh-session-persistence | dsh-session-persistence/lib/types/index.d.ts:76 | `ctx.get('sessionPersistence')`; property access requires inject (GATE-052) | partially available (inspect face sealed; see CAP-010 / GATE-002) |
| HSV-064 | `sessionProjectionCache` | dsh-session-projection-cache | dsh-session-projection-cache/lib/types/index.d.ts:27 | `ctx.get('sessionProjectionCache')`; property access requires inject (GATE-052) | unverified |
| HSV-065 | `sessionProjections` | dsh-session-projection | dsh-session-projection/lib/types/index.d.ts:25 | `ctx.get('sessionProjections')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-066 | `sessionQuery` | dsh-session-query | dsh-session-query/lib/types/index.d.ts:25 | `ctx.get('sessionQuery')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-067 | `sessionReferenceResolver` | dsh-session-reference | dsh-session-reference/lib/types/index.d.ts:20 | `ctx.get('sessionReferenceResolver')`; property access requires inject (GATE-052) | unverified |
| HSV-068 | `sessions` | dsh-session | dsh-session/lib/types/index.d.ts:26 | `ctx.get('sessions')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-069 | `sessionSkillCatalog` | dsh-api-session-controller | dsh-api-session-controller/lib/types/skill-catalog.d.ts:8 | `ctx.get('sessionSkillCatalog')`; property access requires inject (GATE-052) | unverified |
| HSV-070 | `sessionTelemetry` | dsh-session-telemetry | dsh-session-telemetry/lib/types/index.d.ts:19 | `ctx.get('sessionTelemetry')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-071 | `sessionTitle` | dsh-session-title | dsh-session-title/lib/types/index.d.ts:33 | `ctx.get('sessionTitle')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-072 | `settings` | dsh-settings | dsh-settings/lib/types/index.d.ts:113 | `ctx.get('settings')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-073 | `settingsController` | dsh-api-settings-controller | dsh-api-settings-controller/lib/types/index.d.ts:31 | `ctx.get('settingsController')`; property access requires inject (GATE-052) | unverified |
| HSV-074 | `settingsSchema` | dsh-client-ui-settings | dsh-client-ui-settings/lib/types/client/schema.d.ts:69 | `ctx.get('settingsSchema')`; property access requires inject (GATE-052) | unverified |
| HSV-075 | `settingsScope` | dsh-client-ui-settings | dsh-client-ui-settings/lib/types/client/settings-scope.d.ts:90 | `ctx.get('settingsScope')`; property access requires inject (GATE-052) | unverified |
| HSV-076 | `shell` | dsh-shell | dsh-shell/lib/types/index.d.ts:26 | `ctx.get('shell')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-077 | `shellEnv` | dsh-shell-env | dsh-shell-env/lib/types/index.d.ts:16 | `ctx.get('shellEnv')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-078 | `sidebarRight` | dsh-client-ui-sidebar-right | dsh-client-ui-sidebar-right/lib/types/client/index.d.ts:43 | `ctx.get('sidebarRight')`; property access requires inject (GATE-052) | unverified |
| HSV-079 | `sidebarRightTabs` | dsh-client-ui-sidebar-right | dsh-client-ui-sidebar-right/lib/types/client/index.d.ts:45 | `ctx.get('sidebarRightTabs')`; property access requires inject (GATE-052) | unverified |
| HSV-080 | `skills` | dsh-skill | dsh-skill/lib/types/index.d.ts:203 | `ctx.get('skills')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-081 | `slots` | dsh-client-ui-renderer | dsh-client-ui-renderer/lib/types/client/index.d.ts:26 | `ctx.get('slots')`; property access requires inject (GATE-052) | unverified |
| HSV-082 | `spillStore` | dsh-spill | dsh-spill/lib/types/index.d.ts:22 | `ctx.get('spillStore')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-083 | `startTime` | cordis-plugin-loader | cordis-plugin-loader/lib/types/index.d.ts:30 | `ctx.get('startTime')`; property access requires inject (GATE-052) | unverified |
| HSV-084 | `storage` | dsh-storage | dsh-storage/lib/types/index.d.ts:25 | `ctx.get('storage')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-085 | `storageDomain` | dsh-storage-domain | dsh-storage-domain/lib/types/index.d.ts:27 | `ctx.get('storageDomain')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-086 | `subagentModelSelection` | dsh-tool-subagent | dsh-tool-subagent/lib/types/model-selection-settings.d.ts:8 | `ctx.get('subagentModelSelection')`; property access requires inject (GATE-052) | partially available (off by default; see GATE-031) |
| HSV-087 | `subagents` | dsh-subagent | dsh-subagent/lib/types/index.d.ts:60 | `ctx.get('subagents')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-088 | `subprocess` | dsh-subprocess | dsh-subprocess/lib/types/index.d.ts:43 | `ctx.get('subprocess')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-089 | `systemPrompt` | dsh-system-prompt | dsh-system-prompt/lib/types/index.d.ts:12 | `ctx.get('systemPrompt')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-090 | `terminals` | dsh-terminal | dsh-terminal/lib/types/index.d.ts:15 | `ctx.get('terminals')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-091 | `theme` | dsh-client-ui-theme | dsh-client-ui-theme/lib/types/client/index.d.ts:86 | `ctx.get('theme')`; property access requires inject (GATE-052) | unverified |
| HSV-092 | `tokenMeter` | dsh-token-meter | dsh-token-meter/lib/types/index.d.ts:16 | `ctx.get('tokenMeter')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-093 | `toolResultPruner` | dsh-compaction-tool-result-pruner | dsh-compaction-tool-result-pruner/lib/types/index.d.ts:15 | `ctx.get('toolResultPruner')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-094 | `tools` | dsh-tools | dsh-tools/lib/types/index.d.ts:26 | `ctx.get('tools')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-095 | `typert` | dsh-typert-protocol | dsh-typert-protocol/lib/types/types.d.ts:453 | `ctx.get('typert')`; property access requires inject (GATE-052) | unverified |
| HSV-096 | `typertGateway` | dsh-api-gateway | dsh-api-gateway/lib/types/types.d.ts:118 | `ctx.get('typertGateway')`; property access requires inject (GATE-052) | unverified |
| HSV-097 | `uiRenderer` | dsh-client-ui-renderer | dsh-client-ui-renderer/lib/types/client/index.d.ts:28 | `ctx.get('uiRenderer')`; property access requires inject (GATE-052) | unverified |
| HSV-098 | `uiSession` | dsh-client-ui-session | dsh-client-ui-session/lib/types/client/index.d.ts:61 | `ctx.get('uiSession')`; property access requires inject (GATE-052) | unverified |
| HSV-099 | `uiWorkspace` | dsh-client-ui-workspace | dsh-client-ui-workspace/lib/types/client/navigation.d.ts:66 | `ctx.get('uiWorkspace')`; property access requires inject (GATE-052) | unverified |
| HSV-100 | `userQuestions` | dsh-user-questions | dsh-user-questions/lib/types/index.d.ts:13 | `ctx.get('userQuestions')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-101 | `version` | dsh-fs | dsh-fs/lib/types/index.d.ts:37 | `ctx.get('version')`; property access requires inject (GATE-052) | unverified |
| HSV-102 | `web` | dsh-web | dsh-web/lib/types/index.d.ts:15 | `ctx.get('web')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-103 | `webhookRuntime` | dsh-webhook | dsh-webhook/lib/types/index.d.ts:8 | `ctx.get('webhookRuntime')`; property access requires inject (GATE-052) | unverified |
| HSV-104 | `webServer` | dsh-host-webserver | dsh-host-webserver/lib/types/index.d.ts:17 | `ctx.get('webServer')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-105 | `workflowEngine` | dsh-workflow | dsh-workflow/lib/types/index.d.ts:15 | `ctx.get('workflowEngine')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |
| HSV-106 | `workspaceController` | dsh-api-workspace-controller | dsh-api-workspace-controller/lib/types/index.d.ts:10 | `ctx.get('workspaceController')`; property access requires inject (GATE-052) | unverified |
| HSV-107 | `workspaceFiles` | dsh-api-workspace-files | dsh-api-workspace-files/lib/types/index.d.ts:30 | `ctx.get('workspaceFiles')`; property access requires inject (GATE-052) | unverified |
| HSV-108 | `workspaceRegistry` | dsh-workspace | dsh-workspace/lib/types/index.d.ts:44 | `ctx.get('workspaceRegistry')`; property access requires inject (GATE-052) | available (if the judgement layer has a dedicated entry, that one governs) |

## HEV · Events

| ID | Event | dispatch | Coordinate | Note | Status |
|---|---|---|---|---|---|
| HEV-001 | `agent-loop/config-start-failed` | emit | dsh-agent-loop:49 |  | unverified |
| HEV-002 | `agent-preset/selected` | emit | dsh-agent-presets:85 |  | unverified |
| HEV-003 | `agent/assistant-stream` | emit | dsh-agent:375 |  | unverified |
| HEV-004 | `agent/created` | emit | dsh-agent:224 |  | available (judgement layer has cross-refs) |
| HEV-005 | `agent/disposed` | emit | dsh-agent:235 |  | available (judgement layer has cross-refs) |
| HEV-006 | `agent/error` | emit | dsh-agent:411 |  | unverified |
| HEV-007 | `agent/inbox/claimed` | emit | dsh-agent:272 |  | unverified |
| HEV-008 | `agent/inbox/discarded` | emit | dsh-agent:284 |  | unverified |
| HEV-009 | `agent/inbox/inserted` | emit | dsh-agent:258 |  | unverified |
| HEV-010 | `agent/pre-step` | waterfall | dsh-agent:313 | must call next() | available (judgement layer has cross-refs) |
| HEV-011 | `agent/request` | waterfall | dsh-agent:336 | must call next() | available (judgement layer has cross-refs) |
| HEV-012 | `agent/request-error` | waterfall | dsh-agent:357 | must call next() | unverified |
| HEV-013 | `agent/session-start` | emit | dsh-agent:298 |  | available (judgement layer has cross-refs) |
| HEV-014 | `agent/status` | emit | dsh-agent:247 |  | unverified |
| HEV-015 | `agent/turn-stopping` | unspecified | dsh-agent:396 |  | unverified |
| HEV-016 | `api-session/activity` | emit | dsh-api-session-controller:564 |  | unverified |
| HEV-017 | `api-session/added` | emit | dsh-api-session-controller:544 |  | unverified |
| HEV-018 | `api-session/error` | emit | dsh-api-session-controller:571 |  | unverified |
| HEV-019 | `api-session/removed` | emit | dsh-api-session-controller:550 |  | unverified |
| HEV-020 | `api-session/status` | emit | dsh-api-session-controller:557 |  | unverified |
| HEV-021 | `approval/request` | waterfall | dsh-user-approval:76 | must call next() | available (judgement layer has cross-refs) |
| HEV-022 | `authorization/settled` | emit | dsh-authorization:46 |  | unverified |
| HEV-023 | `command/executed` | emit | dsh-client-ui-commands:30 |  | unverified |
| HEV-024 | `commands/change` | emit | dsh-commands:84 |  | unverified |
| HEV-025 | `connection/reset` | emit | dsh-client-connection:13 |  | unverified |
| HEV-026 | `cordis/dynamic-package` | emit | dsh-cordis-host-runner:339 |  | unverified |
| HEV-027 | `cordis/dynamic-retract` | emit | dsh-cordis-host-runner:345 |  | unverified |
| HEV-028 | `cordis/inspect-query` | emit | dsh-cordis-host-runner:351 |  | unverified |
| HEV-029 | `cordis/inspect-query-resolved` | emit | dsh-cordis-host-runner:357 |  | unverified |
| HEV-030 | `cordis/request-run` | emit | dsh-cordis-host-runner:327 |  | unverified |
| HEV-031 | `cordis/request-run-resolved` | emit | dsh-cordis-host-runner:333 |  | unverified |
| HEV-032 | `credentials/record-updated` | emit | dsh-credentials:93 |  | unverified |
| HEV-033 | `credentials/reference-updated` | emit | dsh-credentials:82 |  | unverified |
| HEV-034 | `domain/changed` | emit | dsh-storage-domain:41 |  | unverified |
| HEV-035 | `exit` | unspecified | cordis-plugin-loader:20 |  | unverified |
| HEV-036 | `feedback/committed` | parallel | dsh-message-feedback:29 |  | unverified |
| HEV-037 | `fs/edit-intent` | waterfall | dsh-fs:36 | must call next() | unverified |
| HEV-038 | `fs/observed` | emit | dsh-fs:52 |  | unverified |
| HEV-039 | `fs/write-intent` | waterfall | dsh-fs:28 | must call next() | unverified |
| HEV-040 | `goal/activation-changed` | emit | dsh-goal:130 |  | unverified |
| HEV-041 | `goal/changed` | emit | dsh-goal:86 |  | unverified |
| HEV-042 | `hmr/change` | unspecified | cordis-plugin-hmr:9 |  | available (judgement layer has cross-refs) |
| HEV-043 | `hmr/config-update-failed` | parallel | cordis-plugin-hmr:17 |  | unverified |
| HEV-044 | `hmr/reload` | unspecified | cordis-plugin-hmr:10 |  | available (judgement layer has cross-refs) |
| HEV-045 | `internal/config` | waterfall | cordis:226 | must call next() | unverified |
| HEV-046 | `internal/dispatch` | unspecified | cordis:238 |  | unverified |
| HEV-047 | `internal/get` | waterfall | cordis:232 | must call next() | unverified |
| HEV-048 | `internal/listener` | unspecified | cordis:236 |  | unverified |
| HEV-049 | `internal/plugin` | unspecified | cordis:218 |  | unverified |
| HEV-050 | `internal/service` | waterfall | cordis:228 | must call next() | unverified |
| HEV-051 | `internal/set` | waterfall (signature has next; @mode not annotated) | cordis:234 | must call next() | unverified |
| HEV-052 | `internal/status` | unspecified | cordis:220 |  | unverified |
| HEV-053 | `internal/update` | waterfall | cordis:230 | must call next() | unverified |
| HEV-054 | `llm/adapters-updated` | emit | dsh-llm:21 |  | unverified |
| HEV-055 | `llm/stream` | waterfall | dsh-llm:45 | must call next() | unverified |
| HEV-056 | `loader/config-update` | unspecified | cordis-plugin-loader:21 |  | available (judgement layer has cross-refs) |
| HEV-057 | `loader/entry-init` | unspecified | cordis-plugin-loader:22 |  | unverified |
| HEV-058 | `loader/partial-dispose` | unspecified | cordis-plugin-loader:23 |  | unverified |
| HEV-059 | `loader/patch-context` | waterfall (signature has next; @mode not annotated) | cordis-plugin-loader:24 | must call next() | unverified |
| HEV-060 | `locale/change` | emit | dsh-client-locale:68 |  | unverified |
| HEV-061 | `session-telemetry/record` | waterfall | dsh-session-telemetry:40 | must call next() | unverified |
| HEV-062 | `session/created` | emit | dsh-session:40 |  | available (judgement layer has cross-refs) |
| HEV-063 | `session/disposed` | emit | dsh-session:50 |  | available (judgement layer has cross-refs) |
| HEV-064 | `session/event` | emit | dsh-session:62 |  | available (judgement layer has cross-refs) |
| HEV-065 | `session/flush` | waterfall | dsh-session:71 | must call next() | available (judgement layer has cross-refs) |
| HEV-066 | `settings/document-updated` | emit | dsh-settings:101 |  | unverified |
| HEV-067 | `settings/updated` | emit | dsh-settings:89 |  | unverified |
| HEV-068 | `skills/change` | emit | dsh-skill:213 |  | available (judgement layer has cross-refs) |
| HEV-069 | `slash/input-begin-command` | unspecified | dsh-client-ui-conversation:137 |  | unverified |
| HEV-070 | `slash/input-consume-token` | unspecified | dsh-client-ui-conversation:149 |  | unverified |
| HEV-071 | `slash/input-insert-reference` | unspecified | dsh-client-ui-conversation:143 |  | unverified |
| HEV-072 | `slash/input-insert-text` | unspecified | dsh-client-ui-conversation:155 |  | unverified |
| HEV-073 | `slots/changed` | emit | dsh-client-ui-renderer:22 |  | unverified |
| HEV-074 | `subagent/end` | emit | dsh-subagent:94 |  | available (judgement layer has cross-refs) |
| HEV-075 | `subagent/provider-added` | emit | dsh-subagent:68 |  | available (judgement layer has cross-refs) |
| HEV-076 | `subagent/provider-removed` | emit | dsh-subagent:74 |  | available (judgement layer has cross-refs) |
| HEV-077 | `subagent/start` | emit | dsh-subagent:85 |  | available (judgement layer has cross-refs) |
| HEV-078 | `system-prompt/assemble` | waterfall | dsh-system-prompt:27 | must call next() | available (judgement layer has cross-refs) |
| HEV-079 | `system-prompt/change` | waterfall | dsh-system-prompt:33 | must call next() | available (judgement layer has cross-refs) |
| HEV-080 | `theme/change` | emit | dsh-client-ui-theme:95 |  | unverified |
| HEV-081 | `tools/change` | emit | dsh-tools:93 |  | available (judgement layer has cross-refs) |
| HEV-082 | `tools/execute` | waterfall | dsh-tools:49 | must call next() | available (judgement layer has cross-refs) |
| HEV-083 | `tools/post-execute` | waterfall | dsh-tools:61 | must call next() | available (judgement layer has cross-refs) |
| HEV-084 | `tools/pre-execute` | waterfall | dsh-tools:38 | must call next() | available (judgement layer has cross-refs) |
| HEV-085 | `tools/ptc-dispatch-log` | waterfall | dsh-tools:75 | must call next() | available (judgement layer has cross-refs) |
| HEV-086 | `tools/result` | emit | dsh-tools:83 |  | available (judgement layer has cross-refs) |
| HEV-087 | `user-questions/request` | waterfall | dsh-user-questions:77 | must call next() | unverified |
| HEV-088 | `webserver/index-inject` | emit | dsh-host-webserver:27 |  | unverified |
| HEV-089 | `workflow/agent-end` | emit | dsh-workflow:60 |  | unverified |
| HEV-090 | `workflow/agent-start` | emit | dsh-workflow:49 |  | unverified |
| HEV-091 | `workflow/end` | emit | dsh-workflow:70 |  | unverified |
| HEV-092 | `workflow/log` | emit | dsh-workflow:39 |  | unverified |
| HEV-093 | `workflow/phase` | emit | dsh-workflow:32 |  | unverified |
| HEV-094 | `workflow/start` | emit | dsh-workflow:24 |  | unverified |

## HBI · builtins / assembly primitives

The inspection catalog `Builtin.listBuiltins` = 7 (not a mounting probe). The .d.ts has no static table of the same name. The 7 rows below align with the assembly primitives a plugin author actually touches, **not a dump**.

| ID | Name | What it is | Source | Status |
|---|---|---|---|---|
| HBI-001 | cordis group rows | `group: true` recursive config | cordis-plugin-include | unverified |
| HBI-002 | isolate realm | preset services must sit behind an isolate | ENV-091 | available |
| HBI-003 | Loader include/patch | profile composition and hot patching | ENV-020 | available |
| HBI-004 | timer | `ctx.get('timer')` | cordis-plugin-timer | unverified |
| HBI-005 | hmr | HMR | cordis-plugin-hmr | available |
| HBI-006 | logger | `ctx.logger` | cordis | unverified |
| HBI-007 | reflect / registry | service resolution and the plugin table | GATE-052 | available |
