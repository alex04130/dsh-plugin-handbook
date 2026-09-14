# 东西在哪、边界在哪？（环境事实）

答布局、命名、热载、preset（会话装配）语法、部署、呈现代价、服务名和事件名。不答「能不能用」——那是 `./capabilities.md`。
截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2。

## 索引

| ID | 一句话 |
|---|---|
| ENV-001 | ~/.dsh 下面这些目录各干什么 |
| ENV-002 | sessions/ 目录名为何以 -- 开头，ls 为啥炸 |
| ENV-003 | 会话日志文件到底叫什么 |
| ENV-020 | 哪些改动不重启生效、哪些必须重启 |
| ENV-090 | preset 行的 name 能写成 !!js 吗 |
| ENV-091 | 工具行要不要 isolate，服务行要不要 |
| ENV-092 | 用户 preset 和发行版 preset 各在哪 |
| ENV-093 | profile 的 plugins/ 相对谁解析 |
| ENV-021 | PTC 把工具面放哪，native 放哪，代价多少 |
| ENV-010 | 服务名怎么取，常见写错 |
| ENV-080 | 事件名有哪些、何时触发 |

# 会话与持久化

## ENV-001 · ~/.dsh 下面这些目录各干什么

- **是什么**：本机 DSH 家目录布局。`DSH_HOME=$DSH_HOME`（本进程环境变量实测）。
- **当前状态**：可用（本机实测 `ls`）。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

| 路径 | 干什么 |
|---|---|
| `sessions/` | 按工作区编码分桶的会话日志 |
| `.agent-presets/` | 用户可写 preset 根（ENV-092） |
| `profiles/web/` | 本机 web profile：`cordis.yml` + `cordis.patch.yml` + `plugins/` |
| `dynplugins/` | 动态插件源文件（<hot-reload-plugin> 盯这里） |
| `auto-plugins.json` | <dyn-boot-plugin> 恢复清单 |
| `storages/` | json storage 后端根（含 workspace.json 等） |
| `project-memory/` | **不是 DSH 自带。** 某一类社区插件把项目笔记放这里的惯例；没有官方保证 |
| `docs/` | 施工单、本套文档 |
| `tmp/` | 会话中间产物（`/tmp` 每条 bash 后清空，别放那儿） |
| `exports/` | `<cross-session-tool>` 明文导出 |
| `backups/` | **不是 DSH 自带。** 某一类部署把迁移前日志备份放这里的惯例；没有官方保证 |
| `archive/` | 清扫归档 |
| `injector/` | 运行时注入包注册表 |
| `state/` | 含 `tool-manifest.md` |
| `settings.yaml` | 用户设置 |
| `projects.json` | 项目/队组织真值 |
| `console-inbox/` | 控制台待批队列（跨队/跨项目消息） |
| `console-inbox/` | 控制台待批队列（跨队/跨项目消息） |
| `profiles/web/cordis.patch.yml` | 宿主插件行（A 数过 23 条，未在合并时重数） |

## ENV-002 · sessions/ 目录名为何以 -- 开头，ls 为啥炸

- **是什么**：工作区路径编成单层目录名。
- **实现**：`dsh-session-persistence-jsonl/lib/index.js:874-892` `projectKey(cwd)`：`/` `\` `:` 换成 `-`，其它不安全码元 `~XXXX`，再包成 `--<key>--`。
- **当前状态**：可用。
- **证据（本机实测）**：

```text
$DSH_HOME/sessions/--home-<user>-.dsh--
$DSH_HOME/sessions/--home-<user>-<workspace>--
```

`ls --home-<user>-.dsh--`（在 `sessions/` 下、无 `--`）输出：

```text
ls: unrecognized option '--home-<user>-.dsh--'
Try 'ls --help' for more information.
```

`ls -- --home-<user>-.dsh--` 正常列出 uuid 子目录。
- **绕法**：路径一律 `ls -- <dir>` 或写绝对路径。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

## ENV-003 · 会话日志文件到底叫什么

- **是什么**：每个会话目录里的物理日志名。
- **实现**：`dsh-session-format/lib/index.js:472-474`：version 0 = `session.jsonl`；之后 = `session.vN.jsonl`。压缩后缀 `dsh-session-persistence-jsonl/lib/index.js:746-750`：zstd 再加 `.zstd`。
- **当前状态**：可用（本机两代并存）。
- **证据（本机 `os.walk` 计数）**：

| 文件名 | 份数 | 含义 |
|---|---|---|
| `session.jsonl.zstd` | 158 | 格式 generation 0 |
| `session.v3.jsonl.zstd` | 28 | 格式 generation 3 |
| `session.lock` | 28 | 写锁 |
| `meta.json` | 24 | 侧车元数据（不是事件日志） |

有人以为「都叫 session.v3.jsonl.zstd」不成立。读日志不要按文件名直读——v3 混合迁移下旧名会静默读空。走会话读取 API / `export`。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

## ENV-010 · 服务名怎么取，常见写错

- **是什么**：`ctx.get('agentPresets')` 这种键。
- **怎么取**：各包 `lib/types/index.d.ts` 的 `interface Context { <name>: … }`，或 `super(ctx, "<name>")`。
- **当前状态**：可用。
- **证据**：`dsh-agent-presets/lib/index.js:1294` `super(ctx, "agentPresets")`。**不是** `presets`。本回合从 types 抽出 68 个 Context 键，常用错的：

| 错 | 对 | 包 |
|---|---|---|
| `presets` | `agentPresets` | dsh-agent-presets |
| `persist` / `persistence` | `sessionPersistence` | dsh-session-persistence |
| `workspaces`（host） | `workspaceRegistry` | dsh-workspace（client 侧 apiproxy 才叫 workspaces） |
| `sandbox`（政策） | `sandboxPolicy` 才是模式覆盖；`sandbox` 是执行器 | 两个包 |

完整键表（本机 types 扫描，不是运行时 dump）：

```text
agentDefaultModel agentLoop agentPresets agents appExit appReady approval attachments authorization clientModules cmdlineArgs codeRuntime commands compaction credentials deepseekLlmApiExtensions directoryPicker dshHomePath dynamicCordisRunner fileReferences fileUploads fs goals hmr invariants jobs launchEnvironment launcherSessionQueryPath llm loader messageFeedback permissionPresets planMode sandbox sandboxPolicy sessionController sessionFeedback sessionPersistence sessionProjectionCache sessionProjections sessionQuery sessionReferenceResolver sessionTelemetry sessionTitle sessions settings settingsController shell shellEnv skills spillStore storage storageDomain subagents subprocess systemPrompt terminals tokenMeter toolResultPruner tools userQuestions web webServer webhookRuntime workflowEngine workspaceController workspaceFiles workspaceRegistry
```

第三方在 Context 上另注册的服务不在这份官方 types 里。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

# 工具注册与呈现

## ENV-020 · 哪些改动不重启生效、哪些必须重启

- **是什么**：热载边界。
- **当前状态**：**可用**（判据已钉；静态 `.rN.mjs` 这条有活证据）。
- **结论**：**我们现在实际在改的静态插件（全部是 `.rN.mjs`）改动都不会热载，一律要重启。** 只有改/新建一个未版本化的 `.mjs` 才会被 <hot-reload-plugin> 版本化重载。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

**证据（三条，缺一不可）**：

| # | 类型 | 内容 |
|---|---|---|
| ① | 源码 | `<hot-reload-plugin>.mjs:177`：`if (!/\.mjs$/.test(fn) \|\| fn === SELF_FILE \|\| /\.r\\d+\.mjs$/.test(fn)) return` —— 文件名已带 `.rN` 的改动直接 return，不 schedule 换名重载 |
| ② | 本机文件面 | `profiles/web/plugins/` 21 个 `.mjs`：16 个 `.rN.mjs`（含 <host-plugin> / a skill-manager plugin.r1 / <host-plugin> 等全部业务插件）；**没有** `cross-session layer.mjs` / `a skill-manager plugin.mjs` 这种基名。另有 5 个未版本化：`<dyn-boot-plugin>.mjs` `<bridge-plugin>.mjs` `<extra-unversioned>.mjs` `web-search-kimi.mjs` `web-search-select.mjs`（这五个才会被 :177 放行） |
| ③ | 活证据（可复跑） | 文件里的值 ≠ 运行时面回读的值，见下表 |

活证据 ③ 复跑命令与两个值（2026-09-13 本会话实测）：

```bash
```

| 面 | `cross-session-mailbox` 的 description |
|---|---|
| 文件 `<host-plugin>.mjs:38` | `<cross-session-tool> / <cross-session-tool> / <cross-session-tool> / <cross-session-tool>` |
| 运行时 `skill_list` 回读 | `session_list / session_read / session_send / mailbox_check` |

两者不一致 = 编辑 `.rN.mjs` 没有热载。再跑一遍：读 `:38`，再 `skill_list` 找同名技能的 description，对不上就是还没重启。

其它路径（不是这条活证据，源码+配置）：

| 改什么 | 要不要重启 | 依据 |
|---|---|---|
| `dynplugins/*.host.js` / `*.client.js` | 不重启 | <hot-reload-plugin> `watch(DYN_DIR)` → `reloadPrefix`（`<hot-reload-plugin>.mjs:165-168, 57-80`） |
| 那 5 个未版本化 `.mjs` | 不重启（<hot-reload-plugin> 复制成 `.rN.mjs` 并改 patch name） | `:175-178, 118-133`；profile `patchReload: live` |
| `auto-plugins.json` 指纹变了 | 不整进程重启；下一 turn / session-start <dyn-boot-plugin> 增量 define | `<dyn-boot-plugin>.mjs:47-48, 70-72`。**已在场的同 prefix 跳过**。要换代码：`dev_stop_dyn_plugin <prefix>` |
| `cordis.patch.yml` **新增一行** | 必须重启 | include 启动时读 patch；<hot-reload-plugin> 不插新 id |
| preset `agent.cordis.yml` | 发现层不重启能看见新目录（`discovery.d.ts:5-6`）；**已 standing mount 的组合不会因改文件自动换** | 新会话按文件组；活会话仍旧 mount |
| 发行版包 `node_modules/@deepseek-ai/*` | 必须重启 | 进程已加载 |

旁证（**不作证据**）：有人改 `<host-plugin>.mjs` 后 `<cross-session-tool>({query})` 通了。按 ①②③ 本不该通。可能中间发生过重启，会话日志里没查到这次进程启动时刻，**观察存在、因无法排除重启而不用作证据**。

## ENV-021 · PTC 把工具面放哪，native 放哪，代价多少

- **是什么**：`dsh-agent-tool-presentation` 的 `mode`。
- **当前状态**：可用（配置项）；本会话是 ptc。
- **证据**：

| 模式 | 模型看见什么 | 代价 |
|---|---|---|
| native | 每个工具一条 function-call schema | 工具定义本身进提示词。一次工具面收窄实测 记可见面 113 个时约 12.3K tokens |
| ptc | 只直接暴露 `run_code`，其余进 SDK 文档 | 一次工具面收窄实测 实测：同一面折进系统提示词约 **19.2K**（`<internal-notes>:857`） |

<team-preset> `agent.cordis.yml:213-216` `mode: ptc`。直调 bash 被 GATE-022 折叠。数字 19.2K 是 2026-09-12 那次测量，**本回合未重测 token**。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：GATE-022、CAP-022。

# 事件与钩子

## ENV-080 · 事件名有哪些、何时触发

- **是什么**：`ctx.on('agent/session-start', …)`。
- **当前状态**：可用（类型已核实；触发时机摘自 .d.ts 注释，**没有在本回合对每个事件打探针**）。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

| 事件 | 包 | 何时（类型注释） |
|---|---|---|
| `agent/created` | dsh-agent | agent 注册进表 |
| `agent/session-start` | dsh-agent | setup 之后、循环之前；第一个驱动启动的扩展点。来源 `startup \| resume \| clear \| compact`（`runtime-types.d.ts:105,298`） |
| `agent/pre-step` | dsh-agent | 可拒步/改消息（`runtime-types.d.ts:303`，行为未实测） |
| `agent/request` | dsh-agent | 一次模型请求（waterfall） |
| `agent/request-error` | dsh-agent | 请求失败 |
| `agent/disposed` | dsh-agent | 注销 |
| `session/created` | dsh-session | 会话对象创建 |
| `session/event` | dsh-session | 追加事件 |
| `session/flush` | dsh-session | 刷盘 |
| `session/disposed` | dsh-session | 会话释放 |
| `tools/pre-execute` | dsh-tools | 执行前 |
| `tools/execute` | dsh-tools | 执行 |
| `tools/post-execute` | dsh-tools | 执行后 |
| `tools/result` | dsh-tools | 结果 |
| `tools/change` | dsh-tools | 注册表变化 |
| `tools/ptc-dispatch-log` | dsh-tools | PTC 子调度落日志 |
| `subagent/start` `subagent/end` | dsh-subagent | 一次 run |
| `subagent/provider-added` `subagent/provider-removed` | dsh-subagent | provider 注册变化 |
| `system-prompt/assemble` | dsh-system-prompt | 拼提示词（waterfall） |
| `system-prompt/change` | dsh-system-prompt | 提供者变化 |
| `skills/change` | dsh-skill | 技能表变化 |
| `loader/config-update` | cordis-plugin-loader | include/patch 更新（<hot-reload-plugin> 静态换名靠这个） |
| `hmr/reload` `hmr/change` | cordis-plugin-hmr | HMR |

常见消费点是 `agent/session-start`（cross-session layer / a team plugin / <dyn-boot-plugin> / a skill-manager plugin）。

# 装配与 preset

## ENV-090 · preset 行的 name 能写成 !!js 吗

- **是什么**：`name: !!js process.platform === 'win32' ? '…'` 这种。
- **当前状态**：从未可用。`name` 的类型检查要求普通字符串，`!!js` 从来不是合法 name（`dsh-agent-presets/lib/index.js:224-225`）。不是运行时开关，所以不挂 GATE 号。
- **证据**：`dsh-agent-presets/lib/index.js:224-225`：

```text
row N names no plugin (a "name" string is required)
```

`!!js` 可以用在 `disabled:`（同文件 `:297` 注释），不能用在 `name`。
- **name 取值域**（`specifier.js:30-39`）：

| kind | name 长什么样 |
|---|---|
| builtin | `cordis:…` |
| preset | 以 `.` 开头的相对路径 |
| file | 绝对路径或 `file:` URL |
| package | 其它（从安装好的 harness 解析） |

绝对路径可用：`isAbsolute(name)` → `pathToFileURL`。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

## ENV-091 · 工具行要不要 isolate，服务行要不要

- **是什么**：preset 行把服务发到哪个 realm。
- **当前状态**：可用（挂载时硬检查）。
- **证据**：`dsh-agent-presets/lib/index.js:920-921`：

```text
row(s) published process-global service(s) […]; a preset service must sit behind an `isolate` realm or move to the host composition
```

<team-preset> 文件头（`~/.dsh/.agent-presets/<team-preset>/agent.cordis.yml:11-18`）：服务行必须在带 `isolate` 的 group 里；工具行只 `register` 进 host `tools`、不 provide，所以不需要 isolate。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2

## ENV-092 · 用户 preset 和发行版 preset 各在哪

- **是什么**：两份根，信任级别不同。
- **实现**：`USER_PRESET_DIR = ".agent-presets"`（相对 dshHome）；`SHIPPED_PRESET_ROOT` = 包内 `../presets/`（`dsh-agent-presets/lib/types/discovery.js:48-56`）。roster `:1300-1309`：shipped `trust: "system"`，user `trust: "user"`。
- **当前状态**：可用。
- **证据（本机 `ls`）**：

| 根 | 路径 | 本机内容 | 能不能改 |
|---|---|---|---|
| 用户 | `$DSH_HOME/.agent-presets/` | <lab-preset> / <team-preset> / <creative-preset> / <distill-preset> | 能。这是 writable root |
| 发行版 | `…/dsh-agent-presets/presets/` | cordis / minimal / ptc / standard | 不该改。跟包走，升级覆盖 |

CLI package.json 的 `dsh.configTrees` 写的是源码树 `../../packages/preset/agent-presets/presets`，安装后实际是包内 `presets/`。
- **截至**：2026-09-13 · DSH 0.1.5-rc.2

## ENV-093 · profile 的 plugins/ 相对谁解析

- **是什么**：`cordis.patch.yml` 里 `name: ./plugins/<host-plugin>.mjs`。
- **当前状态**：可用。
- **证据**：profile 目录 `~/.dsh/profiles/web/`，其 `package.json` name=`dsh-profile-web`，`dsh.profile.patchReload = "live"`。相对路径相对 **这个 profile 目录**，不是 `~/.dsh`。绝对路径按 ENV-090 的 file kind。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
