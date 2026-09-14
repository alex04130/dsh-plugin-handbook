# 全量函数/方法清单 · 一包一页（脚本生成，勿手改）

> 来源：安装树 `node_modules/@deepseek-ai/*` 下全部 .d.ts（含嵌套 node_modules）。
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

| 包 | 一句话 | 导出数 | 页 |
|---|---|---|---|
| cordis | Meta-Framework for Modern JavaScript Applications | 82 | [cordis](./cordis.md) |
| cordis-plugin-group | Nested plugin group for cordis | 1 | [cordis-plugin-group](./cordis-plugin-group.md) |
| cordis-plugin-hmr | Hot Module Replacement Plugin for Cordis | 5 | [cordis-plugin-hmr](./cordis-plugin-hmr.md) |
| cordis-plugin-include | Include files in cordis configurations | 6 | [cordis-plugin-include](./cordis-plugin-include.md) |
| cordis-plugin-loader | Plugin loader for cordis | 43 | [cordis-plugin-loader](./cordis-plugin-loader.md) |
| cordis-plugin-timer | Timer service for cordis | 4 | [cordis-plugin-timer](./cordis-plugin-timer.md) |
| cosmokit | A collection of common utilities | 56 | [cosmokit](./cosmokit.md) |
| dsh-acp | Automation-only Agent Client Protocol server for driving DeepSeek Harness agents | 27 | [dsh-acp](./dsh-acp.md) |
| dsh-acp-app | The dsh ACP profile bundle: automation-only JSON-RPC stdio and process lifecycle | 4 | [dsh-acp-app](./dsh-acp-app.md) |
| dsh-agent | Agent interface, registry, initiator scope, and event vocabulary for the DeepSee | 48 | [dsh-agent](./dsh-agent.md) |
| dsh-agent-default-model | Default model selection shared by Agent entry points | 7 | [dsh-agent-default-model](./dsh-agent-default-model.md) |
| dsh-agent-instructions | Workspace context loader for AGENTS.md/CLAUDE.md instruction files | 56 | [dsh-agent-instructions](./dsh-agent-instructions.md) |
| dsh-agent-loop | The concrete agent loop plugin for the DeepSeek Harness | 32 | [dsh-agent-loop](./dsh-agent-loop.md) |
| dsh-agent-presets | Per-session agent composition from preset cordis.yml files for the DeepSeek Harn | 62 | [dsh-agent-presets](./dsh-agent-presets.md) |
| dsh-agent-tool-presentation | Agent-plane presentation selector: composes one agent's tools as PTC mode, nativ | 5 | [dsh-agent-tool-presentation](./dsh-agent-tool-presentation.md) |
| dsh-anonymous-user-id | Shared anonymous user identity for DeepSeek Harness telemetry and feedback corre | 4 | [dsh-anonymous-user-id](./dsh-anonymous-user-id.md) |
| dsh-api-gateway | Typert Remote Host dispatcher and Client API endpoint | 80 | [dsh-api-gateway](./dsh-api-gateway.md) |
| dsh-api-remotes | Remote BFF assembly for application-selected Host capabilities | 7 | [dsh-api-remotes](./dsh-api-remotes.md) |
| dsh-api-session-controller | Session Remote commands, cold reads, and live control transport | 207 | [dsh-api-session-controller](./dsh-api-session-controller.md) |
| dsh-api-settings-controller | Remote owner for the configuration surfaces over the settings-domain seams | 14 | [dsh-api-settings-controller](./dsh-api-settings-controller.md) |
| dsh-api-workspace-controller | Workspace Remote commands and reconnect-safe state transport | 49 | [dsh-api-workspace-controller](./dsh-api-workspace-controller.md) |
| dsh-api-workspace-files | Workspace file service and Client resource provider: bounded reads, directory li | 35 | [dsh-api-workspace-files](./dsh-api-workspace-files.md) |
| dsh-app-boot | Shared boot glue for the app bins: .env loading, fail-loud Loader guards, snapsh | 38 | [dsh-app-boot](./dsh-app-boot.md) |
| dsh-atomic-write | Zero-dependency atomic file replacement: exclusive-create random-suffix temp + r | 4 | [dsh-atomic-write](./dsh-atomic-write.md) |
| dsh-attachment | Durable immutable attachment storage seam for the DeepSeek Harness | 38 | [dsh-attachment](./dsh-attachment.md) |
| dsh-attachment-local | Private content-addressed DSH_HOME attachment storage | 56 | [dsh-attachment-local](./dsh-attachment-local.md) |
| dsh-authorization | Authorization seam (ctx.authorization): plugin-owned flows that obtain a credent | 22 | [dsh-authorization](./dsh-authorization.md) |
| dsh-base | The shared dsh core as a profile bundle: the first patch layer of base-backed pr | 1 | [dsh-base](./dsh-base.md) |
| dsh-bash-local | Local-subprocess implementation of the DeepSeek Harness bash executor seam | 7 | [dsh-bash-local](./dsh-bash-local.md) |
| dsh-bash-sandbox | Sandbox-consuming implementation of the DeepSeek Harness bash executor seam (con | 10 | [dsh-bash-sandbox](./dsh-bash-sandbox.md) |
| dsh-brand | Stateless branded primitive types for the DeepSeek Harness | 4 | [dsh-brand](./dsh-brand.md) |
| dsh-chunked-list | Persistent append-only chunked lists with bounded copying and JSON checkpoint va | 4 | [dsh-chunked-list](./dsh-chunked-list.md) |
| dsh-client-connection | Authenticated RPC transport, generation lifecycle, and browser fixture | 78 | [dsh-client-connection](./dsh-client-connection.md) |
| dsh-client-file-upload | Agent-scoped browser file upload, streaming intake, and staged receipt service | 31 | [dsh-client-file-upload](./dsh-client-file-upload.md) |
| dsh-client-hmr | Dev-only hot-reload driver for script-loaded client entries: SSE rebuilt frames  | 17 | [dsh-client-hmr](./dsh-client-hmr.md) |
| dsh-client-locale | Locale plugin: Host-backed preference, extensible language catalog, browser fall | 37 | [dsh-client-locale](./dsh-client-locale.md) |
| dsh-client-modules | Client module system, dual-face: node half composes the __DSH_BOOT__ entry graph | 34 | [dsh-client-modules](./dsh-client-modules.md) |
| dsh-client-resources | Unified client resource model: protocol-registered providers turn URL addresses  | 14 | [dsh-client-resources](./dsh-client-resources.md) |
| dsh-client-ui-agent-preset | Agent-preset surfaces: the default for later sessions, this session's seat, and  | 38 | [dsh-client-ui-agent-preset](./dsh-client-ui-agent-preset.md) |
| dsh-client-ui-approval | Approval composer takeover over the scoped Remote Event waterfall | 13 | [dsh-client-ui-approval](./dsh-client-ui-approval.md) |
| dsh-client-ui-attachment | Dynamic attachment presentation plugin for conversation input, message-image, an | 25 | [dsh-client-ui-attachment](./dsh-client-ui-attachment.md) |
| dsh-client-ui-brand-official | Official DeepSeek Harness brand occupants for the Web client's sidebar slots | 5 | [dsh-client-ui-brand-official](./dsh-client-ui-brand-official.md) |
| dsh-client-ui-chat | Chat Conversation target, node definitions, renderers, and details surface | 271 | [dsh-client-ui-chat](./dsh-client-ui-chat.md) |
| dsh-client-ui-commands | Client command surface: global directory cache, '/' source, three command UI kin | 33 | [dsh-client-ui-commands](./dsh-client-ui-commands.md) |
| dsh-client-ui-conversation | Target-neutral Conversation assembly, shell, composer, queue, and view navigatio | 283 | [dsh-client-ui-conversation](./dsh-client-ui-conversation.md) |
| dsh-client-ui-cordis | Cordis dynamic-plugin definition card: the keyed cordis_define tool row with its | 42 | [dsh-client-ui-cordis](./dsh-client-ui-cordis.md) |
| dsh-client-ui-deliverables | Produced-files turn tail and clickable final-response file references for Web | 43 | [dsh-client-ui-deliverables](./dsh-client-ui-deliverables.md) |
| dsh-client-ui-directory-picker-browse | In-app directory browsing surface: the workspace directory-flow owner rendering  | 7 | [dsh-client-ui-directory-picker-browse](./dsh-client-ui-directory-picker-browse.md) |
| dsh-client-ui-directory-picker-native | Native directory-picker surface: the renderless workspace directory-flow occupan | 5 | [dsh-client-ui-directory-picker-native](./dsh-client-ui-directory-picker-native.md) |
| dsh-client-ui-goal | Session goal surface: GoalBar docked above the composer, read from the goal sess | 28 | [dsh-client-ui-goal](./dsh-client-ui-goal.md) |
| dsh-client-ui-input-trigger | Input trigger pipeline: '/' and '@' detection, candidate menu, pick routing to r | 44 | [dsh-client-ui-input-trigger](./dsh-client-ui-input-trigger.md) |
| dsh-client-ui-jobs | Session-header background-job list: live registry state mirrored from session/jo | 9 | [dsh-client-ui-jobs](./dsh-client-ui-jobs.md) |
| dsh-client-ui-layout | Shell plugin: three-column AppFrame with drag handles, ctx.layout viewing-state  | 38 | [dsh-client-ui-layout](./dsh-client-ui-layout.md) |
| dsh-client-ui-message-feedback | The Web feedback surface: per-message Like/Dislike in the assistant-message acti | 26 | [dsh-client-ui-message-feedback](./dsh-client-ui-message-feedback.md) |
| dsh-client-ui-model-selection | Model selection over the shared model catalog, Session projection, and session.s | 18 | [dsh-client-ui-model-selection](./dsh-client-ui-model-selection.md) |
| dsh-client-ui-open-in-app | Web Session-header "Open In..." split button opening the session workspace direc | 14 | [dsh-client-ui-open-in-app](./dsh-client-ui-open-in-app.md) |
| dsh-client-ui-permission-presets | Permission surfaces: a new-session default in General settings and a current-ses | 22 | [dsh-client-ui-permission-presets](./dsh-client-ui-permission-presets.md) |
| dsh-client-ui-plan | Plan-mode composer control: the conversation.input.plan seat over the plan proje | 9 | [dsh-client-ui-plan](./dsh-client-ui-plan.md) |
| dsh-client-ui-reference | Unified Web @file and @session reference source | 7 | [dsh-client-ui-reference](./dsh-client-ui-reference.md) |
| dsh-client-ui-renderer | Browser UI renderer: React slot bindings, ctx.uiRenderer, and the assembled appl | 28 | [dsh-client-ui-renderer](./dsh-client-ui-renderer.md) |
| dsh-client-ui-schedule | Read-only active Schedule catalog in the Web Session header | 13 | [dsh-client-ui-schedule](./dsh-client-ui-schedule.md) |
| dsh-client-ui-session | Session Controller adapter for React and session-scoped slots | 20 | [dsh-client-ui-session](./dsh-client-ui-session.md) |
| dsh-client-ui-settings | Settings domain base plugin: the settings-namespace scope service and the canoni | 24 | [dsh-client-ui-settings](./dsh-client-ui-settings.md) |
| dsh-client-ui-settings-general | Settings ownerless-copy and product onboarding plugin: the General section, shel | 26 | [dsh-client-ui-settings-general](./dsh-client-ui-settings-general.md) |
| dsh-client-ui-settings-models | Models settings and shared product-onboarding dialogs over existing settings and | 72 | [dsh-client-ui-settings-models](./dsh-client-ui-settings-models.md) |
| dsh-client-ui-settings-plugin-inventory | Read-only Cordis Loader inventory tab in Web Plugins settings | 12 | [dsh-client-ui-settings-plugin-inventory](./dsh-client-ui-settings-plugin-inventory.md) |
| dsh-client-ui-settings-plugins | Plugins settings section with feature-owned tabs and configurable host-plane plu | 68 | [dsh-client-ui-settings-plugins](./dsh-client-ui-settings-plugins.md) |
| dsh-client-ui-sidebar | Sidebar plugin: session multi-level tree, search, grouping, state dots | 16 | [dsh-client-ui-sidebar](./dsh-client-ui-sidebar.md) |
| dsh-client-ui-sidebar-documentpreview | Extensible document previews for Sidebar files: Markdown, highlighted code, imag | 127 | [dsh-client-ui-sidebar-documentpreview](./dsh-client-ui-sidebar-documentpreview.md) |
| dsh-client-ui-sidebar-files | Workspace file tree tab type for the right Sidebar: lazy directory listing over  | 27 | [dsh-client-ui-sidebar-files](./dsh-client-ui-sidebar-files.md) |
| dsh-client-ui-sidebar-right | Right Sidebar: the docking surface's session-bound state, its panel and header e | 82 | [dsh-client-ui-sidebar-right](./dsh-client-ui-sidebar-right.md) |
| dsh-client-ui-skill | Web skill references and the dedicated skill tool row | 10 | [dsh-client-ui-skill](./dsh-client-ui-skill.md) |
| dsh-client-ui-subagent | Subagent conversation catalog, continuation routing UI, and '@' reference source | 17 | [dsh-client-ui-subagent](./dsh-client-ui-subagent.md) |
| dsh-client-ui-theme | Theme plugin: Host bootstrap for the pre-plugin palette; DOM-free ThemeRuntime f | 43 | [dsh-client-ui-theme](./dsh-client-ui-theme.md) |
| dsh-client-ui-tool | Client Tool call-tree renderer and keyed per-tool presentation slot | 105 | [dsh-client-ui-tool](./dsh-client-ui-tool.md) |
| dsh-client-ui-trajectory | Trajectory event ledger with an interactive timing overview: pure-consumer plugi | 81 | [dsh-client-ui-trajectory](./dsh-client-ui-trajectory.md) |
| dsh-client-ui-user-questions | Web ask_user_question composer takeover and plan-review presentation UI | 26 | [dsh-client-ui-user-questions](./dsh-client-ui-user-questions.md) |
| dsh-client-ui-workflow-run | Durable workflow-run Conversation Node and nested member disclosure for dsh web | 19 | [dsh-client-ui-workflow-run](./dsh-client-ui-workflow-run.md) |
| dsh-client-ui-workspace | Workspace picker plugin: one WorkspacePicker registered into the sidebar and emp | 57 | [dsh-client-ui-workspace](./dsh-client-ui-workspace.md) |
| dsh-cmdline | Immutable command-line handoff from a dsh launcher to any app plugin that inject | 9 | [dsh-cmdline](./dsh-cmdline.md) |
| dsh-code-runtime | Abstract code-execution seam (ctx.codeRuntime) for the DeepSeek Harness | 14 | [dsh-code-runtime](./dsh-code-runtime.md) |
| dsh-code-runtime-worker-thread | Worker-thread implementation of the DeepSeek Harness code-execution seam | 40 | [dsh-code-runtime-worker-thread](./dsh-code-runtime-worker-thread.md) |
| dsh-command-compact | Human-facing slash command for explicit session compaction | 3 | [dsh-command-compact](./dsh-command-compact.md) |
| dsh-command-feedback | Log-only session feedback: the record event, the sessionFeedback Host Remote, an | 16 | [dsh-command-feedback](./dsh-command-feedback.md) |
| dsh-command-goal | Human-facing slash command for persisted same-session goals | 3 | [dsh-command-goal](./dsh-command-goal.md) |
| dsh-commands | Plugin-owned human command registry for DeepSeek Harness UIs | 25 | [dsh-commands](./dsh-commands.md) |
| dsh-compaction | Abstract compaction service seam (ctx.compaction) for the DeepSeek Harness | 25 | [dsh-compaction](./dsh-compaction.md) |
| dsh-compaction-basic | Token-meter-driven compaction policy and LLM summarization backend for the DeepS | 29 | [dsh-compaction-basic](./dsh-compaction-basic.md) |
| dsh-compaction-tool-result-pruner | Replay-safe model-free head/middle/tail pruning for tool-result surface nodes | 12 | [dsh-compaction-tool-result-pruner](./dsh-compaction-tool-result-pruner.md) |
| dsh-cordis-client-runner | Browser half of dynamic dual-half plugin packages: event subscription, closure e | 69 | [dsh-cordis-client-runner](./dsh-cordis-client-runner.md) |
| dsh-cordis-host-runner | Dynamic package definition registry, host-half sandbox lifecycle, and invoke han | 78 | [dsh-cordis-host-runner](./dsh-cordis-host-runner.md) |
| dsh-credentials | Abstract credential seam (ctx.credentials): settings carry references to secrets | 22 | [dsh-credentials](./dsh-credentials.md) |
| dsh-credentials-local | File-backed credentials provider ($DSH_HOME/.env under the live process environm | 11 | [dsh-credentials-local](./dsh-credentials-local.md) |
| dsh-deepseek-llm-api-extensions | Additive request-field registry for the official DeepSeek LLM API adapter | 9 | [dsh-deepseek-llm-api-extensions](./dsh-deepseek-llm-api-extensions.md) |
| dsh-deque | Zero-dependency circular deque with amortized constant-time end operations and b | 1 | [dsh-deque](./dsh-deque.md) |
| dsh-file-reference | File-reference discovery contract and shared @file grammar | 9 | [dsh-file-reference](./dsh-file-reference.md) |
| dsh-file-reference-local | Local-filesystem ctx.fileReferences provider with bounded fuzzy indexes | 14 | [dsh-file-reference-local](./dsh-file-reference-local.md) |
| dsh-fs | Abstract filesystem capability seam (ctx.fs) for the DeepSeek Harness — vocabula | 23 | [dsh-fs](./dsh-fs.md) |
| dsh-fs-local | Local-filesystem implementation of the DeepSeek Harness filesystem seam (ctx.fs) | 29 | [dsh-fs-local](./dsh-fs-local.md) |
| dsh-fs-observation-policy | File-context policy plugin for the DeepSeek Harness — observed-state, read-befor | 3 | [dsh-fs-observation-policy](./dsh-fs-observation-policy.md) |
| dsh-fs-sandbox | Sandbox-enforcing implementation of the DeepSeek Harness filesystem seam: fences | 5 | [dsh-fs-sandbox](./dsh-fs-sandbox.md) |
| dsh-goal | Event-sourced same-session goal state and lifecycle service for the DeepSeek Har | 47 | [dsh-goal](./dsh-goal.md) |
| dsh-goal-round-driver | Race-fenced same-session goal-round driver | 8 | [dsh-goal-round-driver](./dsh-goal-round-driver.md) |
| dsh-headless | The dsh one-shot bundle: a direct core Agent/Session runner over dsh-base with n | 13 | [dsh-headless](./dsh-headless.md) |
| dsh-home-paths | Shared filesystem path helpers for the DeepSeek Harness | 9 | [dsh-home-paths](./dsh-home-paths.md) |
| dsh-hook-protocol | Shared Claude Code / Codex hook wire protocol: matcher engine, stdin/exit-code/s | 32 | [dsh-hook-protocol](./dsh-hook-protocol.md) |
| dsh-hooks-claude-code | Bridge plugin: run a Claude Code hooks.json / settings hook config on the DeepSe | 11 | [dsh-hooks-claude-code](./dsh-hooks-claude-code.md) |
| dsh-hooks-codex | Bridge plugin: run a Codex hooks.json hook config on the DeepSeek Harness interc | 10 | [dsh-hooks-codex](./dsh-hooks-codex.md) |
| dsh-host-directory-picker | Abstract workspace-directory picking seam (ctx.directoryPicker) for the DeepSeek | 12 | [dsh-host-directory-picker](./dsh-host-directory-picker.md) |
| dsh-host-directory-picker-auto | Adaptive chooser of the directory-picker seam: resolves the host situation at bo | 13 | [dsh-host-directory-picker-auto](./dsh-host-directory-picker-auto.md) |
| dsh-host-directory-picker-browse | In-app browsing backend of the directory-picker seam (listing/creation primitive | 6 | [dsh-host-directory-picker-browse](./dsh-host-directory-picker-browse.md) |
| dsh-host-directory-picker-native | Native-OS-chooser backend of the directory-picker seam for the DeepSeek Harness  | 22 | [dsh-host-directory-picker-native](./dsh-host-directory-picker-native.md) |
| dsh-host-frontend-static | SPA dist server for the Web shell: owns the webserver fallback seat, serving exp | 6 | [dsh-host-frontend-static](./dsh-host-frontend-static.md) |
| dsh-host-open-in-app | Host half of open-in-app: resolved application catalog, icons, and the launch en | 46 | [dsh-host-open-in-app](./dsh-host-open-in-app.md) |
| dsh-host-plugin-inventory | Read-only Remote projection of current Cordis Loader plugin state | 13 | [dsh-host-plugin-inventory](./dsh-host-plugin-inventory.md) |
| dsh-host-webserver | Web route-registration plugin: HTTP and upgrade routes, index transform taps, an | 11 | [dsh-host-webserver](./dsh-host-webserver.md) |
| dsh-http-proxy | Process-wide outbound HTTP proxy policy for DeepSeek Harness: resolve it from th | 19 | [dsh-http-proxy](./dsh-http-proxy.md) |
| dsh-invariants | Registry service for package-owned DeepSeek Harness runtime invariants | 8 | [dsh-invariants](./dsh-invariants.md) |
| dsh-jobs | Background job registry (ctx.jobs) for the DeepSeek Harness — shared ids, owner  | 20 | [dsh-jobs](./dsh-jobs.md) |
| dsh-jobs-local | Process-local implementation of the DeepSeek Harness background job registry sea | 5 | [dsh-jobs-local](./dsh-jobs-local.md) |
| dsh-launch-environment | Immutable DeepSeek Harness launch environment that records which layer supplied  | 8 | [dsh-launch-environment](./dsh-launch-environment.md) |
| dsh-llm | Provider-neutral LLM service interface for the DeepSeek Harness | 163 | [dsh-llm](./dsh-llm.md) |
| dsh-llm-deepseek | DeepSeek chat-completions adapter for the DeepSeek Harness LLM seam | 103 | [dsh-llm-deepseek](./dsh-llm-deepseek.md) |
| dsh-llm-pi-ai | pi-ai-backed DeepSeek adapter for the DeepSeek Harness LLM seam (design-verifica | 81 | [dsh-llm-pi-ai](./dsh-llm-pi-ai.md) |
| dsh-llm-retry | Provider-routed LLM request retry policy for the DeepSeek Harness | 17 | [dsh-llm-retry](./dsh-llm-retry.md) |
| dsh-mcp-client | MCP client bridge: connects to MCP servers and registers their tools on ctx.tool | 23 | [dsh-mcp-client](./dsh-mcp-client.md) |
| dsh-message-feedback | Canonical Session-log ratings and notes for finalized assistant messages | 28 | [dsh-message-feedback](./dsh-message-feedback.md) |
| dsh-native-command | Host-native command and path-opening utilities with shell-free execution, cancel | 12 | [dsh-native-command](./dsh-native-command.md) |
| dsh-output-retention | Zero-dependency bounded-retention primitive: ItemRetainer/TextRetainer + neutral | 13 | [dsh-output-retention](./dsh-output-retention.md) |
| dsh-package-manifest | Shared type declarations for package.json.dsh configuration fields | 8 | [dsh-package-manifest](./dsh-package-manifest.md) |
| dsh-permission-presets | User-facing permission presets (ctx.permissionPresets) for the DeepSeek Harness: | 15 | [dsh-permission-presets](./dsh-permission-presets.md) |
| dsh-persona | Composition-authored deployment persona section for the DeepSeek Harness | 6 | [dsh-persona](./dsh-persona.md) |
| dsh-plan-mode | Logged per-agent plan mode with deployment guidance, a direct slash command, and | 12 | [dsh-plan-mode](./dsh-plan-mode.md) |
| dsh-plugin-package-inventory-deepseek | Active Loader-backed plugin package inventory for official DeepSeek LLM API requ | 7 | [dsh-plugin-package-inventory-deepseek](./dsh-plugin-package-inventory-deepseek.md) |
| dsh-pwsh-local | Local PowerShell implementation of the DeepSeek Harness bash executor seam | 11 | [dsh-pwsh-local](./dsh-pwsh-local.md) |
| dsh-pwsh-sandbox | Sandbox-consuming implementation of the DeepSeek Harness PowerShell executor sea | 10 | [dsh-pwsh-sandbox](./dsh-pwsh-sandbox.md) |
| dsh-repeat-tool-reminder | Repeat-tool-call guard plugin: advisory reminders when an agent loops on identic | 4 | [dsh-repeat-tool-reminder](./dsh-repeat-tool-reminder.md) |
| dsh-sandbox | Abstract process-sandbox seam (ctx.sandbox) for the DeepSeek Harness: same-world | 27 | [dsh-sandbox](./dsh-sandbox.md) |
| dsh-sandbox-local | Local process-sandbox backends for the DeepSeek Harness sandbox seam: bwrap, the | 9 | [dsh-sandbox-local](./dsh-sandbox-local.md) |
| dsh-sandbox-policy | Per-call sandbox policy resolver and current model context: deployment fallbacks | 13 | [dsh-sandbox-policy](./dsh-sandbox-policy.md) |
| dsh-sandbox-windows-acl | Windows ACL write-restriction sandbox backend (restricted-token spawn with capab | 93 | [dsh-sandbox-windows-acl](./dsh-sandbox-windows-acl.md) |
| dsh-schedule | Agent-scoped durable after, at, and fixed-rate reminders over the session event  | 72 | [dsh-schedule](./dsh-schedule.md) |
| dsh-scope | Scoped-context registration primitive (scope tags, scope-filtered event dispatch | 29 | [dsh-scope](./dsh-scope.md) |
| dsh-sdk-app | The dsh SDK profile bundle: stdio JSON-RPC serving and process lifecycle over ds | 6 | [dsh-sdk-app](./dsh-sdk-app.md) |
| dsh-sdk-jsonrpc-server | Stdio JSON-RPC server plugin for out-of-process DeepSeek Harness SDK clients | 9 | [dsh-sdk-jsonrpc-server](./dsh-sdk-jsonrpc-server.md) |
| dsh-sdk-minimal | The standalone minimal SDK profile bundle: JSON-RPC, one DeepSeek adapter, persi | 1 | [dsh-sdk-minimal](./dsh-sdk-minimal.md) |
| dsh-sdk-protocol | Shared wire protocol for the DeepSeek Harness SDK runtime: the newline-delimited | 22 | [dsh-sdk-protocol](./dsh-sdk-protocol.md) |
| dsh-session | Event-sourced session store for the DeepSeek Harness | 73 | [dsh-session](./dsh-session.md) |
| dsh-session-checkpoint-policy | Semantic session durability checkpoints before model requests and tool side effe | 3 | [dsh-session-checkpoint-policy](./dsh-session-checkpoint-policy.md) |
| dsh-session-format | Streaming adjacent Session format migration machinery | 45 | [dsh-session-format](./dsh-session-format.md) |
| dsh-session-format-catalog | Build-static first-party Session format codec and migration catalog | 5 | [dsh-session-format-catalog](./dsh-session-format-catalog.md) |
| dsh-session-format-v0-to-v1 | Frozen released-v0 Session codec and identity migration to v1 | 33 | [dsh-session-format-v0-to-v1](./dsh-session-format-v0-to-v1.md) |
| dsh-session-format-v1-to-v2 | Frozen released-v1 Session codec and assistant-stream migration to v2 | 16 | [dsh-session-format-v1-to-v2](./dsh-session-format-v1-to-v2.md) |
| dsh-session-format-v2-to-v3 | Streaming system-prompt, canonical-envelope and PTC migration into V3 | 19 | [dsh-session-format-v2-to-v3](./dsh-session-format-v2-to-v3.md) |
| dsh-session-log-deepseek | Incremental lossless session-log request extension for the official DeepSeek LLM | 13 | [dsh-session-log-deepseek](./dsh-session-log-deepseek.md) |
| dsh-session-log-export | Web Session-log export command and shared download dialog | 40 | [dsh-session-log-export](./dsh-session-log-export.md) |
| dsh-session-persistence | Abstract durable session persistence seam (ctx.sessionPersistence) for the DeepS | 45 | [dsh-session-persistence](./dsh-session-persistence.md) |
| dsh-session-persistence-jsonl | JSONL durable session persistence backend for the DeepSeek Harness | 78 | [dsh-session-persistence-jsonl](./dsh-session-persistence-jsonl.md) |
| dsh-session-projection | Session-projection seam: the merge-extensible projection type table, the provide | 10 | [dsh-session-projection](./dsh-session-projection.md) |
| dsh-session-projection-cache | Persisted projection cache (ctx.sessionProjectionCache): durable per-session che | 12 | [dsh-session-projection-cache](./dsh-session-projection-cache.md) |
| dsh-session-query | Combined session query service contract with concrete reads, traces, and filters | 70 | [dsh-session-query](./dsh-session-query.md) |
| dsh-session-query-sqlite | Concrete ctx.sessionQuery backend with SQLite FTS5 search | 34 | [dsh-session-query-sqlite](./dsh-session-query-sqlite.md) |
| dsh-session-reference | Cross-session snapshot references and durable untrusted model context (ctx.sessi | 36 | [dsh-session-reference](./dsh-session-reference.md) |
| dsh-session-stats | Whole-log conversation counts and wall times projection (sessionStats) for the D | 9 | [dsh-session-stats](./dsh-session-stats.md) |
| dsh-session-telemetry | SessionTelemetryBackend seam for the DeepSeek Harness: session-event capture, pr | 11 | [dsh-session-telemetry](./dsh-session-telemetry.md) |
| dsh-session-telemetry-otel | OpenTelemetry backend for the DeepSeek Harness telemetry seam: hands captured se | 7 | [dsh-session-telemetry-otel](./dsh-session-telemetry-otel.md) |
| dsh-session-title | Log-backed session title service and provider registry for the DeepSeek Harness | 29 | [dsh-session-title](./dsh-session-title.md) |
| dsh-session-title-first-prompt-llm | First-message LLM provider plugin for DeepSeek Harness session titles | 5 | [dsh-session-title-first-prompt-llm](./dsh-session-title-first-prompt-llm.md) |
| dsh-session-title-llm | Shared LLM generation policy for DeepSeek Harness session-title providers | 10 | [dsh-session-title-llm](./dsh-session-title-llm.md) |
| dsh-session-turn-outline | Whole-log turn outline projection (turnOutline) for the DeepSeek Harness | 7 | [dsh-session-turn-outline](./dsh-session-turn-outline.md) |
| dsh-settings | Abstract user-settings seam (ctx.settings) for the DeepSeek Harness | 30 | [dsh-settings](./dsh-settings.md) |
| dsh-settings-file | File-backed settings provider (settings.yaml) for the DeepSeek Harness | 7 | [dsh-settings-file](./dsh-settings-file.md) |
| dsh-shell | Abstract bash executor seam (ctx.shell) for the DeepSeek Harness | 16 | [dsh-shell](./dsh-shell.md) |
| dsh-shell-env | Tool-independent managed DSH_* shell environment registry | 10 | [dsh-shell-env](./dsh-shell-env.md) |
| dsh-skill | Agent skill provider registry for the DeepSeek Harness | 24 | [dsh-skill](./dsh-skill.md) |
| dsh-skill-badge | Bundled dsh badge skill provider for DeepSeek Harness | 3 | [dsh-skill-badge](./dsh-skill-badge.md) |
| dsh-skill-filesystem | Local filesystem skill provider for the DeepSeek Harness | 61 | [dsh-skill-filesystem](./dsh-skill-filesystem.md) |
| dsh-spill | Abstract spill storage seam (ctx.spillStore) for the DeepSeek Harness — save ove | 10 | [dsh-spill](./dsh-spill.md) |
| dsh-spill-local | Local-filesystem implementation of the DeepSeek Harness spill storage seam (priv | 21 | [dsh-spill-local](./dsh-spill-local.md) |
| dsh-spill-policy | Tool-result spill policy for the DeepSeek Harness — replaces oversized plain-tex | 8 | [dsh-spill-policy](./dsh-spill-policy.md) |
| dsh-storage | Storage hub (ctx.storage): named backend registry plus mounted data-form facilit | 17 | [dsh-storage](./dsh-storage.md) |
| dsh-storage-domain | Domain data form (ctx.storage.domain): schema-validated, event-emitting KV domai | 36 | [dsh-storage-domain](./dsh-storage-domain.md) |
| dsh-storage-json | JSON file KV storage backend for the DeepSeek Harness storage hub | 17 | [dsh-storage-json](./dsh-storage-json.md) |
| dsh-subagent | Abstract subagent seam (ctx.subagents): named-provider registry for delegating t | 138 | [dsh-subagent](./dsh-subagent.md) |
| dsh-subagent-fork-in-process | In-process fork subagent backend: runs a child agent seeded with a prefix of the | 5 | [dsh-subagent-fork-in-process](./dsh-subagent-fork-in-process.md) |
| dsh-subagent-in-process-driver | Shared in-process subagent run driver: drives a child agent on ctx.agents (used  | 7 | [dsh-subagent-in-process-driver](./dsh-subagent-in-process-driver.md) |
| dsh-subagent-spawn-in-process | In-process spawn subagent backend: runs a fresh child agent on ctx.agents | 5 | [dsh-subagent-spawn-in-process](./dsh-subagent-spawn-in-process.md) |
| dsh-subprocess | Subprocess seam (ctx.subprocess) for the DeepSeek Harness — managed process grou | 24 | [dsh-subprocess](./dsh-subprocess.md) |
| dsh-subprocess-local | Local-subprocess implementation of the DeepSeek Harness subprocess seam | 93 | [dsh-subprocess-local](./dsh-subprocess-local.md) |
| dsh-system-prompt | System prompt assembly registry for the DeepSeek Harness | 25 | [dsh-system-prompt](./dsh-system-prompt.md) |
| dsh-terminal | Persistent PTY session seam for the DeepSeek Harness — owner-scoped ids, backend | 28 | [dsh-terminal](./dsh-terminal.md) |
| dsh-terminal-bash | Persistent shell PTY backend over the DeepSeek Harness subprocess terminal primi | 24 | [dsh-terminal-bash](./dsh-terminal-bash.md) |
| dsh-time-context | Opt-in durable per-step context with the current time and elapsed time | 16 | [dsh-time-context](./dsh-time-context.md) |
| dsh-timeout | Zero-dependency timeout/deadline primitive: clampTimeout, deadline, timeoutOf, T | 9 | [dsh-timeout](./dsh-timeout.md) |
| dsh-tmux-context | Opt-in durable per-step context with this agent's tmux pane and window location | 8 | [dsh-tmux-context](./dsh-tmux-context.md) |
| dsh-token-meter | Replay-aware token measurement service (ctx.tokenMeter) for the DeepSeek Harness | 44 | [dsh-token-meter](./dsh-token-meter.md) |
| dsh-tool-ask-user | Model-facing ask_user_question tool over the ctx.userQuestions seam | 3 | [dsh-tool-ask-user](./dsh-tool-ask-user.md) |
| dsh-tool-bash | Model-facing bash tool with optional generic background-job and sandbox-escalati | 9 | [dsh-tool-bash](./dsh-tool-bash.md) |
| dsh-tool-bash-persistent | Model-facing owner-scoped persistent Bash tool backed by the Harness PTY service | 5 | [dsh-tool-bash-persistent](./dsh-tool-bash-persistent.md) |
| dsh-tool-call-timeout-policy | Tool-call timeout policy: a tools/execute wrapper that arms a per-tool deadline  | 4 | [dsh-tool-call-timeout-policy](./dsh-tool-call-timeout-policy.md) |
| dsh-tool-cordis | Self-referential cordis toolset: inspect the live runtime, mount and dispose mod | 38 | [dsh-tool-cordis](./dsh-tool-cordis.md) |
| dsh-tool-fs | Model-facing filesystem tools (read, write, edit) over the DeepSeek Harness file | 50 | [dsh-tool-fs](./dsh-tool-fs.md) |
| dsh-tool-fs-search | Model-facing filesystem discovery tools (glob, grep) backed by the packaged ripg | 59 | [dsh-tool-fs-search](./dsh-tool-fs-search.md) |
| dsh-tool-goal | Model-facing same-session goal tools with execution-time authority checks | 11 | [dsh-tool-goal](./dsh-tool-goal.md) |
| dsh-tool-jobs | Model-facing background job control tools (job_output, job_list, job_kill) over  | 8 | [dsh-tool-jobs](./dsh-tool-jobs.md) |
| dsh-tool-present | Explicit workspace file delivery declarations for the DeepSeek Harness | 6 | [dsh-tool-present](./dsh-tool-present.md) |
| dsh-tool-pwsh | Model-facing pwsh tool over the bash executor seam | 9 | [dsh-tool-pwsh](./dsh-tool-pwsh.md) |
| dsh-tool-pwsh-persistent | Model-facing owner-scoped persistent PowerShell tool backed by the Harness PTY s | 5 | [dsh-tool-pwsh-persistent](./dsh-tool-pwsh-persistent.md) |
| dsh-tool-ralph | Model-facing fresh-agent Ralph loop over the workflow and subagent seams | 5 | [dsh-tool-ralph](./dsh-tool-ralph.md) |
| dsh-tool-skill | Model-facing skill loading tool for the DeepSeek Harness | 6 | [dsh-tool-skill](./dsh-tool-skill.md) |
| dsh-tool-str-replace-editor | Model-facing view, create, literal replace, and line insert tool over the Harnes | 5 | [dsh-tool-str-replace-editor](./dsh-tool-str-replace-editor.md) |
| dsh-tool-subagent | Model-facing subagent delegation tool over the ctx.subagents seam | 31 | [dsh-tool-subagent](./dsh-tool-subagent.md) |
| dsh-tool-subagent-control | Globally named send_message, interrupt_agent, and list_agents tools over ctx.sub | 6 | [dsh-tool-subagent-control](./dsh-tool-subagent-control.md) |
| dsh-tool-todo | Model-facing todo_write tool over the DeepSeek Harness event-sourced session log | 9 | [dsh-tool-todo](./dsh-tool-todo.md) |
| dsh-tool-web | Model-facing web tools (web_search, web_fetch) over the DeepSeek Harness web cap | 30 | [dsh-tool-web](./dsh-tool-web.md) |
| dsh-tool-workflow | Model-facing workflow tool: run a JavaScript orchestration script over ctx.workf | 12 | [dsh-tool-workflow](./dsh-tool-workflow.md) |
| dsh-tools | Tool registry and execution pipeline for the DeepSeek Harness | 128 | [dsh-tools](./dsh-tools.md) |
| dsh-typert-loader | Loader integration for generated Typert package contributions | 7 | [dsh-typert-loader](./dsh-typert-loader.md) |
| dsh-typert-protocol | Compiler-independent Remote metadata and Typert provider protocols | 76 | [dsh-typert-protocol](./dsh-typert-protocol.md) |
| dsh-typert-registry | Runtime registry for generated package reflection and Zod schemas | 24 | [dsh-typert-registry](./dsh-typert-registry.md) |
| dsh-user-approval | User-approval seam (ctx.approval) for the DeepSeek Harness: one-shot permission  | 16 | [dsh-user-approval](./dsh-user-approval.md) |
| dsh-user-questions | Abstract user-questions seam (ctx.userQuestions) for asking the human during age | 12 | [dsh-user-questions](./dsh-user-questions.md) |
| dsh-util-crypto | Zero-dependency browser-safe UUID and byte-encoding helpers | 3 | [dsh-util-crypto](./dsh-util-crypto.md) |
| dsh-util-time | Zero-dependency time vocabulary shared by wire boundaries: canonicalClientTimeZo | 1 | [dsh-util-time](./dsh-util-time.md) |
| dsh-util-values | Duplicate-install-safe value primitives for the DeepSeek Harness | 6 | [dsh-util-values](./dsh-util-values.md) |
| dsh-util-workspace-path | Browser-safe Workspace path and display helpers | 12 | [dsh-util-workspace-path](./dsh-util-workspace-path.md) |
| dsh-web | Abstract web access capability seam (ctx.web) for the DeepSeek Harness — search/ | 14 | [dsh-web](./dsh-web.md) |
| dsh-web-app | The dsh browser-surface bundle: the web patch layer over dsh-base plus the runti | 13 | [dsh-web-app](./dsh-web-app.md) |
| dsh-web-fetch-http | Anonymous public HTTP(S) fetch provider for the DeepSeek Harness web capability  | 32 | [dsh-web-fetch-http](./dsh-web-fetch-http.md) |
| dsh-web-search-deepseek | DeepSeek-backed search provider (native web_search via the Anthropic-compatible  | 26 | [dsh-web-search-deepseek](./dsh-web-search-deepseek.md) |
| dsh-webhook | Fire-and-forget webhook rule runtime that creates Workspace-backed DeepSeek Harn | 20 | [dsh-webhook](./dsh-webhook.md) |
| dsh-webhook-github | Signed GitHub HTTP webhook adapter for the DeepSeek Harness webhook runtime | 12 | [dsh-webhook-github](./dsh-webhook-github.md) |
| dsh-win32-process | Shared low-level Win32 process, stdio, and Job Object primitives | 73 | [dsh-win32-process](./dsh-win32-process.md) |
| dsh-workflow | Workflow capability seam: ctx.workflowEngine service, run vocabulary, and workfl | 25 | [dsh-workflow](./dsh-workflow.md) |
| dsh-workflow-worker-thread | worker-thread workflow engine: executes model-written orchestration scripts off  | 30 | [dsh-workflow-worker-thread](./dsh-workflow-worker-thread.md) |
| dsh-workspace | Workspace entity registry (ctx.workspaceRegistry): durable workspace records wit | 30 | [dsh-workspace](./dsh-workspace.md) |
| node-addon-system | Prebuilt system primitives: a Linux Landlock launcher and asynchronous POSIX flo | 8 | [node-addon-system](./node-addon-system.md) |
| schemastery | Type driven schema validator | 6 | [schemastery](./schemastery.md) |

统计：类 366 · 方法 316 · 函数 1713 · 常量 1088 · 类型 2793 · re-export 549 · 包 238 · 文件 1339

