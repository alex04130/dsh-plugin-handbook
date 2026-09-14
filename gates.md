# 闸在哪拦？（闸清单）

闸 = 运行时对某个操作的校验（拒绝会报错，或静默改行为；后一种也要写「原文报错」栏，内容可以是「没有报错」）。判据 / 触发 / 原文报错 / 绕法。能力条目在 `./capabilities.md`。
截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2。状态五值：`可用` / `部分可用（默认关，附配方）` / `已被封死（附闸号）` / `从未可用` / `未核实`。
跨引用用 CAP-xxx / GATE-xxx / ENV-xxx / OP-xxx，或 `./<file>.md`。
行号对 `/usr/lib/node_modules/@deepseek-ai/dsh/node_modules/@deepseek-ai/<包>/lib/...`。

## 索引

| ID | 一句话 |
|---|---|
| GATE-010 | 子代理描述符不是版本 3 就当没这个子代理 |
| GATE-001 | 读句柄不能 append / flush |
| GATE-003 | open() 对非法 access 不校验，静默当 write |
| GATE-020 | tools.restrict() 点名 run_code 直接抛 |
| GATE-021 | tools.restrict() 必须在 agent 作用域，全局调会抛 |
| GATE-031 | 官方委托工具默认不给模型改子代理模型的字段（能开） |
| GATE-032 | 派出去的子代理审批被钉成 never |
| GATE-051 | persona 行只能挂在 preset 作用域 |
| GATE-052 | 没声明 inject 就取服务会抛 |
| GATE-090 | 同一个 json storage unit 同时只能有一个活句柄 |
| GATE-091 | cordisInspect 同 id 注册第二次抛 |
| GATE-022 | PTC 模式下模型只能直接调 run_code |
| GATE-002 | sessionPersistence.inspect() 已经不存在 |
| GATE-030 | 进程外子代理后端不接受 agentOptions 等 start 能力 |
| GATE-050 | persona 配置字段 text: 已改名 prefix: |
| GATE-060 | 仅主会话工具守卫（子代理不能调某些工具） |

# 会话与持久化

## GATE-001 · 读句柄不能 append / flush

- **判据**：`SessionAccess = 'read' | 'write'`（`dsh-session-persistence/lib/types/handle.d.ts:12`）。`append`/`flush` 要求 `this.access === "write"`。
- **触发**：`open(id, 'read')` 拿到的句柄上调 `append` 或 `flush`。
- **实现**：jsonl `dsh-session-persistence-jsonl/lib/index.js:222`（append）、`:131`（flush）。
- **原文报错**：

```text
session "<id>": append is not available on a read handle
```

（`SessionReadOnlyError`；操作名 `append` 或 `flush`。）
- **绕法**：写路径 `open(id, 'write')`。非法 access 值（`'append'` 等）**不会**走这条闸，见 GATE-003。
- **状态戳**：截至 2026-09-14 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-002、GATE-003。

## GATE-003 · open() 对非法 access 不校验，静默当 write

- **判据**：jsonl `open()` 只判断 `access === "read"`，其余一律 `claimWrite`（`dsh-session-persistence-jsonl/lib/index.js:2350`）。没有枚举校验。
- **触发**：`sessionPersistence.open(id, access)`，`access` 不是 `'read'`（例如 `'append'`、`foo`）。
- **原文报错**：（没有报错。这就是这条闸。）
- **实测（2026-09-14，隔离 jsonl root）**：`open(id, 'append')` → `openError: null`，`handleAccess: "write"`，随后 `append` 成功（`appendError: null`）。
- **后果**：调用方传了一个类型里没有的值，运行时当写权限给。TS 能拦 `'append'`，JS 拦不住。
- **绕法**：只传 `'read'` 或 `'write'`。不要靠运行时报错来发现拼错。
- **状态戳**：截至 2026-09-14 · DSH 0.1.5-rc.2
- **关联**：CAP-011、GATE-001。

## GATE-002 · sessionPersistence.inspect 已消失（sessionController.inspect 另说）

- **判据**：抽象类只剩 `create / open / flush / stat / list`（`dsh-session-persistence/lib/types/index.d.ts:99-155`）。全包 grep `inspect(` 零命中。
- **触发**：任何还在调 `persistence.inspect(id)` 或服务级 `append(id, events)` 的插件。
- **原文报错**：

```text
persistence.inspect is not a function
persistence.append is not a function
```

- **仍在的另一面**：服务真名 `sessionController`。生成面 `ctx.remote.session.inspect`（`dsh-tool-cordis/lib/index.js:2288-2301`）→ `SessionInspection`（含 events）。走同一道格式闸（v2 描述符同样炸）。
- **绕法**（persistence 面）：读 `stat`+`open('read')`+`handle.read`；写 `open('write')`+`handle.append`。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-010、CAP-001、CAP-002。

# 工具注册与呈现

## GATE-020 · restrict 不能点名 run_code

- **判据**：`allow`/`deny` 数组含 `"run_code"` 即抛。
- **实现**：`dsh-tools/lib/index.js:2800`。
- **原文报错**：

```text
tools.restrict() cannot name reserved PTC mode presentation transport "run_code"; restrict end-capability tools instead
```

- **绕法**：restrict 具体能力工具，不要碰运输层名字。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-024、GATE-022。

## GATE-021 · restrict 必须在 agent.ctx 上调

- **判据**：`scopeOf(this.ctx) === undefined` 即抛。
- **实现**：`dsh-tools/lib/index.js:2791-2792`。
- **原文报错**：

```text
tools.restrict() requires a scoped context (agent.ctx): a context-global restriction would mask every agent — deny the tool for the intended agent instead
```

- **绕法**：在 `agent.ctx.tools.restrict(...)` 调。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-023。

## GATE-022 · PTC 下模型只能直接点 run_code

- **判据**：`modeFor(scope) === "ptc" && !nested && name !== "run_code"`。
- **实现**：`dsh-tools/lib/index.js:2993-2994`；直调被拒 `:3076`。
- **原文报错**：

```text
unknown tool "<name>": only `run_code` is callable directly — call `<name>` from inside a `run_code` program instead
```

- **绕法**：preset `tool-presentation.config.mode` 改 `native`（CAP-022）。或不改，从 `run_code` 里调。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-022、CAP-025。

# 子代理与派生

## GATE-010 · 子代理描述符不是 3，运行时当它不存在

- **判据**：`subagent/descriptor.data.version` 必须全等于 `3`。
- **触发**：读旧会话、投影子代理行、冷恢复 continuable 子代理。
- **实现**：`dsh-subagent/lib/index.js:1300` `SUBAGENT_DESCRIPTOR_VERSION = 3`；同文件 `:1359` `if (version !== 3) return void 0`。`foldSubagentDescriptor`（`lib/types/descriptor.js:187-191`）版本不对返回 `undefined`。
- **原文报错（格式迁移路径，已核实）**：

```text
subagent/descriptor <seq> uses unsupported descriptor version <n>
```

出处：`dsh-session-format-v0-to-v1/lib/index.js:1584-1586`，且只在 `version === 0` 的迁移断言里 `throw`。
- **面板路径（已核实）**：`dsh-subagent/lib/index.js:2241-2247` observe 失败时行状态是 `"unavailable"` 或 `"corrupt"`。
- **`<cross-session-tool>` 是否抛同一句**：独立观察实测读 v2 会话 <v2-subagent-session> → `failed to read session: subagent/descriptor 0 uses unsupported descriptor version 2; source v0 artifact remains unchanged`。fold 路径仍静默 undefined。
- **绕法**：把描述符 version 字段 2→3（字段集落在 v3 允许键内时）。迁移前自行备份原始日志。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-042。

## GATE-030 · 进程外子代理后端拒绝 start 能力

- **判据**：`NO_START_CAPABILITIES` 五项全 false。
- **实现**：`dsh-subagent/lib/index.js:2498-2510`；检查 `:3202-3226`。
- **原文报错**：

```text
subagent provider "<name>" does not support the "<cap>" capability
```

code：`UNSUPPORTED_CAPABILITY`。
- **绕法**：换 in-process spawn/fork（CAP-031）。不是给进程外后端开这个能力。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-043。

## GATE-031 · 官方委托工具默认不暴露换模型字段

- **判据**：`modelSelectionSettings` 默认 `false`（`dsh-tool-subagent/lib/index.js:255`）。false 时 schema 没有 `provider`/`model`/`reasoning_effort`。硬传抛。
- **原文报错**：

```text
child model selection is disabled for this tool instance
```

出处：`:64`。缺 Host 模块时 `:587`：

```text
tool-subagent: `modelSelectionSettings` requires @deepseek-ai/dsh-tool-subagent/model-selection-settings in the Host scope
```

- **状态**：部分可用（默认关，附配方）。
- **解锁配方**：

| 层 | 做什么 | 坐标 |
|---|---|---|
| 工具实例 | `config.modelSelectionSettings: true` | `:255` 默认 false；`:582` 为 true 才走设置分支 |
| Host scope | 挂 `@deepseek-ai/dsh-tool-subagent/model-selection-settings` | 包导出 `./model-selection-settings` → `lib/model-selection-settings.js`（`package.json:21-23`） |
| 用户设置 | `subagent-model-selection.enabled: true` 且 `allowedModels` 非空 | settings d.ts 写 shipped 默认关 |

<team-preset> 还要先把 `dsh-tool-subagent` 行装上（CAP-044）。
- **另一条活路**：CAP-030 / CAP-033，不靠官方工具。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-040、CAP-030、CAP-033、CAP-044。

## GATE-032 · 派生子代理的审批被钉死为 never

- **判据**：父进程挂了 `approval` 服务，子会话写入 `approval/policy = never`，`source: 'delegation'`。
- **触发**：`startContinuable` / in-process spawn 在创建窗口里 `captureDelegatedPolicyOverrides`。
- **实现**：`dsh-subagent/lib/types/child-agent.js:184-187`、`:203-204`。
- **原文报错**（注入给子代理看的，不是 throw）：

```text
You are a delegated subagent: your permission scope was fixed when you were started and cannot be widened from inside this session — operations that require approval are rejected automatically.
```

- **绕法**：没有从子会话内部扩权的路。父来做，或人改父策略再派。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-041、CAP-060、CAP-065。

# 提示词与技能

## GATE-050 · persona 配置从 text: 改成 prefix:

- **判据**：Config 必填 `prefix: string`（`dsh-persona/lib/types/index.d.ts:24-40`）。
- **触发**：preset 还写 `text:` → schema 校验失败。
- **绕法**：改 `prefix:`。没有旧键别名。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-056、GATE-051。

## GATE-051 · persona 行是 scope-only

- **判据**：`dsh-persona/lib/types/index.d.ts:4-8` 声明全局挂会跟 registry 自己的 persona 撞名，fail loud。
- **原文报错**：未核实具体 Error.message。
- **绕法**：只在 preset / agent 作用域挂。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-056、CAP-057、GATE-050。

## GATE-052 · 没 inject 就取不到服务

- **判据**：cordis 上下文代理读未 inject 的属性抛。
- **实现**：`cordis/lib/index.js:675`。
- **原文报错**：

```text
cannot get property "<prop>" without inject
```

同路径 `:687`：`cannot get required service "<prop>" in inactive context`。
- **绕法**：插件 `inject: [...]`，或 `ctx.inject([...], cb)`。`ctx.get(name)` 可能给 undefined 而不抛。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-055。

# 审批与沙箱

## GATE-060 · 仅主会话工具守卫

- **判据**：部分工具只允许主会话调用，子代理调用被拒。
- **触发**：子代理调用带「仅主会话可用（子代理拒绝）」标记的工具（dev 系、skill 管理、cross-session layer 归档等）。
- **原文报错**：未核实（工具描述声明拒绝，具体 Error.message 未抓）。
- **绕法**：请主会话调。没有「让子代理也能调」的配置开关。这是各插件 register 里的守卫，不是 GATE-032 那条委派 never。
- **实现位置**：各插件工具描述标记（`<cross-session-tool>` / `dev_stop_dyn_plugin` / skill_*）；**具体守卫代码未核实**（GATE-032）。
- **截至**：2026-09-13 · DSH 0.1.5-rc.2
- **关联**：CAP-051、CAP-060。

# 装配与 preset

## GATE-090 · json storage unit 同时只能开一个句柄

- **判据**：`open.has(name) || opening.has(name)` 即抛。
- **实现**：`dsh-storage-json/lib/index.js:564`。
- **原文报错**：

```text
unit '<name>' is already open; a unit has exactly one live handle
```

domain 层：`dsh-storage-domain/lib/index.js:356` `domain '<name>' is already open`。
- **绕法**：共用句柄，或改走文件面。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-092。

## GATE-091 · cordisInspect 同 id 不能注册两次

- **判据**：`this.providers.has(manifest.id)` 即抛。
- **实现**：`dsh-cordis-host-runner/lib/index.js:723` 服务名 `"cordisInspect"`；`:732`。
- **原文报错**：

```text
Host Cordis inspect provider "<id>" is already registered
```

- **绕法**：不同 id，或 shim。没有「允许多次同 id」开关。
- **状态戳**：截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2
- **关联**：CAP-091、CAP-090。

