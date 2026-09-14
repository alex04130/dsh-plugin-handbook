# 还能不能用？（能力档）

闸的全文在 `./gates.md`。
截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2。状态五值：`可用` / `部分可用（默认关，附配方）` / `已被封死（附闸号）` / `从未可用` / `未核实`。
跨引用用 CAP-xxx / GATE-xxx / ENV-xxx / OP-xxx，或 `./<file>.md`。
行号对 `/usr/lib/node_modules/@deepseek-ai/dsh/node_modules/@deepseek-ai/<包>/lib/...`。

## 索引

| ID | 一句话 | 状态 |
|---|---|---|
| CAP-010 | 还能一次 inspect 拿到元数据+全文吗 | 已被封死（GATE-002） |
| CAP-001 | 离线会话怎么读正文 | 可用 |
| CAP-002 | 离线会话怎么追加事件 | 可用 |
| CAP-003 | list() 现在返回什么形状 | 可用 |
| CAP-011 | open(id, 'append') 会怎样 | 从未可用 |
| CAP-023 | 能在全局 ctx 上 restrict 工具吗 | 已被封死（GATE-021） |
| CAP-024 | 能 restrict 掉 run_code 吗 | 已被封死（GATE-020） |
| CAP-020 | restrict 会摘掉子代理自己注册的工具吗 | 可用 |
| CAP-022 | PTC 下模型能直接调 bash 吗 | 部分可用（默认关，附配方） |
| CAP-025 | 能注册一个名叫 run_code 的工具吗 | 已被封死（GATE-022） |
| CAP-040 | 官方 subagent 工具能让模型给子代理换模型吗 | 部分可用（默认关，附配方） |
| CAP-030 | startContinuable 传 agentOptions 还能换模型吗 | 可用 |
| CAP-041 | 子代理自己能弹出审批对话框吗 | 已被封死（GATE-032） |
| CAP-042 | 描述符还是 v2 的子代理，面板上看得到吗 | 已被封死（GATE-010） |
| CAP-031 | spawn 和 fork 差在哪 | 可用 |
| CAP-043 | 进程外 provider 能给子代理指定模型吗 | 已被封死（GATE-030） |
| CAP-032 | 子代理能套多深 | 可用 |
| CAP-033 | 我们的 <spawn-tool> 能换模型吗 | 可用 |
| CAP-056 | persona 还能写 text: 吗 | 已被封死（GATE-050） |
| CAP-057 | 全局挂 persona 行行吗 | 已被封死（GATE-051） |
| CAP-055 | 没 inject 能拿到 systemPrompt 吗 | 部分可用（默认关，附配方） |
| CAP-050 | 官方 skill 工具和我们的技能管理器抢名吗 | 可用 |
| CAP-060 | 子代理的审批策略是什么 | 可用（父）/ 已被封死（GATE-032，子） |
| CAP-065 | 子代理内部能把沙箱调宽吗 | 已被封死（GATE-032） |
| CAP-061 | 审批服务没 answerer 会怎样 | 可用 |
| CAP-034 | 子代理默认用谁的模型 | 可用 |
| CAP-070 | 换了路由但不传 thinking 强度会怎样 | 可用 |
| CAP-080 | agent/session-start 我们拿来干什么 | 可用 |
| CAP-081 | 工具执行前能不能拦一刀 | 可用 |
| CAP-090 | 一个 preset 在进程里挂几次 | 可用 |
| CAP-091 | 两个插件能同时当 cordisInspect provider 吗 | 已被封死（GATE-091） |
| CAP-092 | kv.open('agent_teams') 能开两次吗 | 已被封死（GATE-090） |
| CAP-044 | <team-preset> 挂了官方 subagent 工具吗 | 从未可用 |
| CAP-021 | 一个会话能调另一个会话的工具吗（经 tool_router） | 可用 |
| CAP-051 | 会话之间怎么通信（cross-session layer） | 可用 |

# 会话与持久化

# 会话与持久化

## CAP-001 · 离线会话怎么读正文

- **是什么**：打开已落盘会话，读事件，不抢写锁。
- **实现位置**：`open(id,'read')` + `handle.read(offset, length)` + `handle.close()`。类型 `handle.d.ts:75`；cross-session layer 用法 `<host-plugin>.mjs:164-174`。
- **当前状态**：**可用**。
- **证据**：

```js
const snapshot = await sessionPersistence.stat(id)
const handle = await sessionPersistence.open(id, 'read')
try {
  const result = await handle.read(0, Number.MAX_SAFE_INTEGER)
  // result.events
} finally {
  await handle.close()
}
```

`stat` 只给 `{ header, revision, eventCount?, sizeBytes? }`，**没有 events**（`index.d.ts:22-31, 149`）。
- **我们依赖**：cross-session layer list/read/export、a mode-switch plugin inspectCompat、team-org.r2 persistenceRead、dynplugins <compat-plugin>/<compat-plugin>。
- **关联**：GATE-002、CAP-010。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：能读，但必须 stat + open(read) + read + close，不能再 inspect。

## CAP-002 · 离线会话怎么追加事件

- **是什么**：给一个当前没在跑的会话写事件（例如改 preset、改 request header）。
- **实现位置**：`open(id,'write')` → `handle.append(events)` → `handle.flush()?` → `handle.close()`。`handle.d.ts:88-99`。
- **当前状态**：**可用**（拿到写租约的前提下）。
- **证据**：抽象类注释写明服务级 `append` 已不存在（`index.d.ts:86-87` 说 append 在 **handle** 上，best-effort；flush 才是耐久屏障）。旧 `persistence.append(id, events)` 会 `is not a function`。
- **限制**：已有活的 write owner 会 `SessionAlreadyOwnedError`。
- **并入备注（A CAP-001）**：A 把读/追加合成「部分可用」，是因为旧 service 级 append/inspect 没了。读走 CAP-001（可用），追加走本条——仍要写租约与 `SessionAccess='write'` 守卫，这两条限定留在这里，不把整条改回部分可用。
- **我们依赖**：<compat-plugin> 写 `agent-preset/selected`、<compat-plugin> 写 `request/header`，都走 `appendCompat()`。
- **关联**：GATE-001、GATE-002。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：能写，必须 open('write') 拿到句柄；服务上没有 append。

## CAP-003 · list() 现在返回什么形状

- **是什么**：列出本进程看得到的全部落盘会话。
- **实现位置**：`SessionPersistence.list()` → `readonly SessionPersistenceSnapshot[]`（`index.d.ts:155`）。每条是 `{ header, revision, ... }`，不是裸 `SessionHeader`。
- **当前状态**：**可用**（形状和 0.1.4 不兼容）。
- **证据**：类型如上。cross-session layer 解包 `snapshot.header`。
- **我们依赖**：cross-session layer list。不解包会丢掉 `id`。
- **关联**：GATE-002。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：能列，但每条外面多包一层 snapshot，要用 `.header`。

## CAP-010 · 还能一次 inspect 拿到元数据+全文吗

- **是什么**：旧核 `sessionPersistence.inspect(id)` 一次返回元数据+全文。
- **实现位置**：该方法已不在 `SessionPersistence` 抽象类上。GATE-002。另有 `sessionController` / 生成面 `ctx.remote.session.inspect(sessionId)`（`dsh-tool-cordis/lib/index.js:2288-2301`）→ `SessionInspection`（含 events）。
- **当前状态**：**已被封死（GATE-002）**——仅 `sessionPersistence.inspect`。`sessionController.inspect` 走同一道格式闸（v2 描述符同样炸）；本观察未在本进程复测调用。
- **证据**：persistence 包无 `inspect`。cordis 工具面仍声明 remote.session.inspect。
- **绕法**：读正文用 stat+open+read（CAP-001）。
- **关联**：GATE-002、CAP-001。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：persistence 上的 inspect 没了；sessionController 上的 inspect 声明还在，且过同一格式闸。

## CAP-011 · open(id, 'append') 会怎样

- **是什么**：有人按字面猜 access 叫 `append`。
- **实现位置**：GATE-001。
- **当前状态**：**从未可用**（类型里就没有这个值；运行时非 `read` 当写，随后 append 再拒）。
- **证据**：`SessionAccess` 只有两值；jsonl `:2350` 非 read 走写；`:222` 非 write 抛 `SessionReadOnlyError(this.id, "append")`。
- **若已封死**：不是「曾经能用被关掉」，是取值域从来没有 `append`。我们 2026-09-12 之前兼容层传错过，整条「给离线会话写模式」静默死。
- **关联**：GATE-001。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不要传 append。传了会先占写锁再被拒。

---

# 工具注册与呈现

## CAP-020 · restrict 会摘掉子代理自己注册的工具吗

- **是什么**：给子代理一个 allow/deny 表，会不会把它自己层注册的工具（例如结构化输出）也滤掉。
- **实现位置**：`dsh-tools/lib/index.js:2832-2873`。restrict 只过滤 **继承面**（global + 祖先）；**本层** `own.tools` 无条件进 visible。
- **当前状态**：**可用**（这是修过的行为；注释 `:2846-2850` 说以前把「豁免集」理解成「全局层」，preset 把工具迁到 agent 平面后过滤失效，后来改成「不是我自己的才滤」）。
- **证据**：`:2870-2872` `if (own !== void 0) for ... visible.set(name, definition)`。
- **关联**：CAP-023。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不会摘自己层的工具；只滤从父级继承来的。
- **restrict 家族总注记（A CAP-003）**：拿 `tools.restrict` 当「渐进披露原语」（摘掉的工具还经 `tool_router` 调得到）**已证伪**——被摘的名字在该 agent 上直接消失，router 转发也 `unknown tool`（一次工具面收窄实测，`<internal-notes>`）。正确路线是注册期收窄：预设行，或 `agent.ctx.tools.register` 的 scoped 注册（A CAP-032 / 本条 CAP-020 的本层豁免）。restrict 本身没全废：GATE-021 卡全局、GATE-020 卡点名 run_code、本条说本层工具不被滤。

## CAP-021 · 一个会话能调另一个会话的工具吗

- **是什么**：`tool_router` 元工具，`action=call` 转发到内层工具，审批按内层算。
- **实现位置**：本会话工具面的 `tool_router`（list / describe / call）。A 记为 community-plugin / dynplugins/trouter 或静态；**注册包路径未在合并时重核**。
- **当前状态**：**可用**。
- **证据**：独立观察实测 `tool_router({action:'call', tool:'probe_agent_id'})` 返回 routed 结果。只有 `run_code` 能直调的会话（PTC 会话）里，其它工具（含 tool_router）从 run_code 里 `await tools.tool_router(...)`。
- **限制**：被 `tools.restrict` 摘掉的名字经 router 也 `unknown tool`（CAP-020 总注记 / 一次工具面收窄实测）。
- **我们依赖**：隐藏工具经 router 访问；本会话 PTC 下几乎所有宿主工具都经 run_code → tools.*。
- **关联**：CAP-020、GATE-022。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：能转发；被 restrict 摘掉的不行。

## CAP-022 · PTC 下模型能直接调 bash 吗

- **是什么**：<team-preset> 的可见面是 PTC，模型发一条 native function call 叫 bash。
- **实现位置**：GATE-022。
- **当前状态**：**部分可用（默认关，附配方）**。对本 <team-preset> 会话现在不能直接调；换 preset 的 presentation 就能。不是运行时删了 bash。
- **证据**：<team-preset> `agent.cordis.yml:213-216` `mode: ptc`；`collapses()` 对非 run_code 的顶层调用为真。实测本会话直调 bash 得到 `unknown tool "bash"`。
- **解锁配方**：把该 preset 的 `@deepseek-ai/dsh-agent-tool-presentation` 的 `config.mode` 从 `ptc` 改成 `native`（要重启 preset 才生效）。不改 preset 的绕法：`run_code` 里 `await tools.bash(...)`。
- **我们依赖**：整个 <team-preset> / creative 工具面。
- **关联**：GATE-022。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：这个 preset 不能直接调；改成 native 就能。bash 工具本身没被删。

## CAP-023 · 能在全局 ctx 上 restrict 工具吗

- **是什么**：想一次性对所有 agent 掩掉某工具。
- **实现位置**：GATE-021，`dsh-tools/lib/index.js:2790-2792`。
- **当前状态**：**已被封死（GATE-021）**。设计如此：全局 restrict 会掩掉每个 agent。没有「打开全局 restrict」的合法开关。
- **证据**：无 scope 即抛。原文在 GATE-021（`./gates.md`）。
- **我们依赖**：子代理 per-child `toolFilter` 走 `childCtx.tools.restrict`（`child-agent.js:171-172`），这是 scoped，合法。
- **关联**：GATE-021、CAP-020。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不能全局 restrict；只能对某个 agent.ctx。

## CAP-024 · 能 restrict 掉 run_code 吗

- **是什么**：想让 PTC 会话连运输层都没有。
- **实现位置**：GATE-020。
- **当前状态**：**已被封死（GATE-020）**。没有配置项能让 restrict 点名 run_code。
- **证据**：`dsh-tools/lib/index.js:2800`。
- **关联**：GATE-020、GATE-022。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不能。点名 run_code 直接抛。

## CAP-025 · 能注册一个名叫 run_code 的工具吗

- **是什么**：自己的插件想占用这个名字。
- **实现位置**：`dsh-tools/lib/index.js:2780`。
- **当前状态**：**已被封死（GATE-022）**。保留名，没有合法打开开关。
- **证据**：

```text
tool name "run_code" is reserved for the PTC mode presentation transport and cannot be registered or shadowed
```

- **关联**：GATE-022。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不能。这个名字留给运输层。

---

# 子代理与派生

## CAP-030 · startContinuable 传 agentOptions 还能换模型吗

- **是什么**：插件直接调 `ctx.subagents.startContinuable({ request: { parent, agentOptions: { provider, model } } })`。
- **实现位置**：`resolveChildAgentOptions` `dsh-subagent/lib/types/child-agent.js:75-92`：父路由打底，`...requested` 覆盖。spawn provider `capabilities.agentOptions: true`（`dsh-subagent-spawn-in-process/lib/index.js:23-24`）。服务在 start 前 `assertCapabilities`（`dsh-subagent/lib/index.js:3202-3226`）。
- **当前状态**：**可用**（in-process spawn/fork）。
- **证据**：`resolved = { ...parent..., ...requested, subagentDepth }`。换路由且 requested 没带 effort 会删掉父的 effort（`:89-91`），让新模型走自己的默认。
- **限制**：进程外 provider 走 GATE-030。官方模型可见工具走 GATE-031，跟这条不是同一扇门。
- **我们依赖**：`lib/spawn-model-subagent.mjs:96-105`、a team plugin 拉队员。
- **关联**：CAP-040、CAP-033、CAP-034、CAP-070、GATE-030。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：服务层能换。官方模型工具默认不给你按这个按钮。

## CAP-031 · spawn 和 fork 差在哪

- **是什么**：两种 in-process 后端。
- **实现位置**：
  - spawn：`dsh-subagent-spawn-in-process/lib/index.js:30` `inheritsParentContext = false`，全新会话，零父上下文。
  - fork：`dsh-subagent-fork-in-process/lib/index.js:44` `true`，把父已完成回合当 seed。
- **当前状态**：**可用**（两项 capabilities 都是全 true）。
- **证据**：capability 对象两边相同；差别只在是否 seed 父日志。
- **我们依赖**：`<spawn-tool>` 固定 `provider: 'spawn'`（`spawn-model-subagent.mjs:97`）。a team plugin 同样走 spawn。fork 工具面我们没挂。
- **关联**：CAP-030。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：都能跑；spawn 看不到父对话，fork 看得到已完成的回合。

## CAP-032 · 子代理能套多深

- **是什么**：孩子再派孩子。
- **实现位置**：`resolveChildDepth` `child-agent.js:32-40`；超了抛 `SubagentDepthError`，消息 `subagent depth ${attemptedDepth} exceeds maxDepth ${maxDepth}`。官方工具默认 `maxDepth: 3`（`dsh-tool-subagent/lib/index.js:269`）。
- **当前状态**：**可用**。深度账是活的。官方工具默认 `maxDepth: 3` 是配置默认值，不是「关着的能力」。我们 `<spawn-tool>` **没传 maxDepth**，服务层此时有没有默认上限 **未核实**。
- **证据**：depth 从父 header 的 `delegationDepth` + 1，恢复的父不能装成顶层再派。
- **关联**：CAP-033。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：有深度账；官方工具默认最多 3 层。我们 spawn 包装传没传上限，没核过。

## CAP-033 · 我们的 <spawn-tool> 能换模型吗

- **是什么**：<team-preset> 上的 `<spawn-tool>`（`<host-plugin>.mjs` → `lib/spawn-model-subagent.mjs`）。
- **实现位置**：包装器自己把 `provider`/`model` 放进 `agentOptions`，再 `subagents.startContinuable`。提权（更高档、跨系列、preset 能力面不是子集、沙箱更宽）走**父会话** `approval.request`。
- **当前状态**：**可用**（服务层 CAP-030 活着；这是我们绕过 GATE-031 的路）。
- **证据**：包装器把 `provider`/`model` 放进 `agentOptions` 再 `startContinuable`。具体文件名因部署而异。
- **限制**：
  - 提权没 approval 服务 → 返回错误，不派（`:69-70`）
  - 人点拒绝 → `cancelled: true`（`:78-79`）
  - 子代理一旦跑起来，内部仍受 GATE-032
  - 单独传 `model` 不传 `provider` 时注释说保留父 provider（`:17`），实现 `:84-85` 也是分字段写
- **关联**：CAP-040、CAP-030、CAP-041、GATE-031。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：能换，但这是我们自己的工具，不是官方 subagent 工具；换贵的要人批。

---

## CAP-034 · 子代理默认用谁的模型

- **是什么**：不传 agentOptions 时孩子跑哪条路由。
- **实现位置**：`parentAgentOptionsForDelegation` `child-agent.js:50-62`：有 `requestHeader().config` 就用那次请求的 provider/model/effort，否则退回 `parent.options`。
- **当前状态**：**可用**。
- **证据**：函数注释「latest request header owns provider, model, and reasoning effort after request-time selection」。
- **我们依赖**：`<spawn-tool>` 省略字段时走这条继承。
- **关联**：CAP-030、CAP-070。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：默认跟父当前这条请求的模型，不是创建时写死的那个。

## CAP-040 · 官方 subagent 工具能让模型给子代理换模型吗

- **是什么**：模型调官方 `subagent` 工具时带 `provider`/`model`/`reasoning_effort`。
- **实现位置**：`dsh-tool-subagent/lib/index.js`。类型上这些字段存在（`model-selection.d.ts:32-35`）；运行时默认不把它们放进 schema。
- **当前状态**：**部分可用（默认关，附配方）**。不是封死。.d.ts 字段还在，出厂关着；按 GATE-031 配方打开后模型就能选。
- **证据**：
  - 默认 `modelSelectionSettings: false`（`:255`）
  - false 时 schema 不含那三个字段（`:412-425` 的展开条件）
  - 即便硬传，`:64` 抛 `child model selection is disabled for this tool instance`
  - 开了但 Host 没挂设置模块，`:587` 抛 `tool-subagent: \`modelSelectionSettings\` requires @deepseek-ai/dsh-tool-subagent/model-selection-settings in the Host scope`
  - 那个模块在包里：`dsh-tool-subagent/package.json` 导出 `./model-selection-settings` → `lib/model-selection-settings.js`
  - <team-preset> preset 没有 tool-subagent 行（CAP-044）——配方的第零步是先把工具行装上
- **解锁配方**：GATE-031 的三列表（工具实例 `modelSelectionSettings: true` + Host 挂 `@deepseek-ai/dsh-tool-subagent/model-selection-settings` + 用户设置 enabled 且 allowedModels 非空）。现役 preset 没走这条，用户设置当前值 **未核实**。
- **另一条活路**：服务层没关（CAP-030）。我们 `<spawn-tool>`（CAP-033）走那条，不靠官方工具。
- **我们依赖**：战略上「子代理换便宜模型做苦力」——官方工具能开；现在我们实际用的是自己的 spawn。
- **关联**：GATE-031、CAP-030、CAP-033、CAP-044。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：默认不能换；配方三件套打开就能换。API 文档只写了字段在，没写默认关。

## CAP-041 · 子代理自己能弹出审批对话框吗

- **是什么**：子代理跑到需要人点头的操作。
- **实现位置**：GATE-032。
- **当前状态**：**已被封死（GATE-032）**。委派时写入 `never`，没有「让孩子自己问人」的开关。
- **证据**：`captureDelegatedPolicyOverrides` 在父挂了 approval 时返回 `'never'`，写入子日志。政策类型只有 `'ask' | 'never'`（`dsh-user-approval/lib/types/index.d.ts:46`），`never` = 每个 ask 立即 `'rejected'`（`:42-43`）。
- **绕法**：没有从子会话内部扩权的路。父来做，或人改父策略再派。
- **我们依赖**：spawn-model-subagent 的提权审批发生在**父**会话（`approval.request({ agent })`，agent 是调用方），这不受 GATE-032 影响。
- **关联**：GATE-032、CAP-060、CAP-033。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不能。派出去的孩子 ask 一律拒。

## CAP-042 · 描述符还是 v2 的子代理，面板上看得到吗

- **是什么**：0.1.4 写下的 `subagent/descriptor` version=2。
- **实现位置**：GATE-010。
- **当前状态**：**已被封死（GATE-010）**。对本运行时无法归类。不是默认关——version 必须是 3，没有「接受 v2」的开关。
- **证据**：parse 非 3 返回 `undefined`；面板 observe 失败给 diagnostic `"unavailable"`。
- **`session_read` / cross-session layer_read 是否 throw**：另一份独立观察实测读 v2 会话 `<v2-subagent-session>...` → `failed to read session: subagent/descriptor 0 uses unsupported descriptor version 2; source v0 artifact remains unchanged`。fold 路径仍是 `version !== 3 → undefined`（`dsh-subagent/lib/index.js:1359`）。读路径 throw、折叠路径静默——两条都留。
- **我们依赖**：一次描述符迁移 已把活树 120 条 2→3。新产生的描述符是 3。
- **关联**：GATE-010。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：v2 描述符这个运行时当它不是子代理。

## CAP-043 · 进程外 provider 能给子代理指定模型吗

- **是什么**：ACP 一类另一进程里的孩子。
- **实现位置**：GATE-030。
- **当前状态**：**已被封死（GATE-030）**。`agentOptions: false`，请求带了就拒，不会默默忽略。换 in-process spawn/fork 是另一条路，不是给进程外后端开这个能力。
- **证据**：`NO_START_CAPABILITIES`；`assertCapabilities` 在 start 之前抛 `UNSUPPORTED_CAPABILITY`。
- **本进程有没有挂进程外 provider**：未核实（没扫 host composition 的 acp 行）。
- **关联**：GATE-030。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：进程外孩子不能用 agentOptions；本机常用的 spawn/fork 不是这条。

## CAP-044 · <team-preset> 挂了官方 subagent 工具吗

- **是什么**：模型能不能看到名叫 `subagent` 的官方委托工具。
- **实现位置**：`~/.dsh/.agent-presets/<team-preset>/agent.cordis.yml`。delegation 段（`:183-193`）只注释「host 上有 registry」，**没有** `- id: tool-subagent` 行。distill preset 有这一行但 `disabled: true`（`<distill-preset>/agent.cordis.yml:73-75`）。
- **当前状态**：**从未可用**（对本 preset：没装官方 tool-subagent，不是封死）。换模型的官方 UI（GATE-031）因此在本会话无从谈起，除非先加那一行再走配方。
- **证据**：对 <team-preset> 目录 grep `tool-subagent` 只打到注释。本会话工具清单没有 `subagent` / `list_subagent_models`，有 `<spawn-tool>`。
- **关联**：CAP-040、CAP-033、GATE-031。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：没挂。本会话换子代理模型只走我们自己的 spawn 工具。

# 提示词与技能

## CAP-050 · 官方 skill 工具和我们的技能管理器抢名吗

- **是什么**：官方 `dsh-tool-skill` 注册的工具名是 `skill`（加载技能正文）。我们 a skill-manager plugin 曾计划把 `skill_list/show/add/...` 合成一个也叫 `skill` 的工具。
- **实现位置**：官方工具包 `dsh-tool-skill`（本会话工具清单里已有 `skill`，description 是「Load the full instructions for an available skill」）。我们六件套是 `skill_list` 等，现仍分名。
- **当前状态**：**可用**（两套名字现在不撞）；**若把六件套并进 `skill` 会把官方工具顶掉**——那是我们自己的事故，不是宿主封死。
- **证据**：运行时工具清单里同时有官方 `skill`（加载技能正文）和 `skill_list` / `skill_show` 等管理工具。把管理面并进 `skill` 这个名字会顶掉官方工具。
- **关联**：无 GATE。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：现在不抢。合并时不能用 `skill` 这个名字。

---

## CAP-051 · 会话之间怎么通信

- **是什么**：cross-session layer：同进程跨会话消息 + 离线队列 + `[cross-session message from …]` 标记 + 关系分级（同队免批 / 跨队跨项目进控制台待批）。
- **实现位置**：`profiles/web/plugins/<host-plugin>.mjs`；归属判定 `lib/projects.mjs:255`（`memberIdOf(m) === id` 精确字符串，无归一化）。
- **当前状态**：**可用**。
- **证据**：独立观察实测 send：同队 live 直达；缺 `session-` 前缀会被判跨项目待批。控制台待批走 <console-plugin> / enqueueInbox。
- **我们依赖**：全团队协作、本派工链。
- **关联**：CAP-060、GATE-060。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：同队能发；跨项目进待批；id 必须带 session- 前缀。

---

| 题 | 为什么没写死 |
|---|---|
| `<cross-session-tool>` 读 v2 描述符是否 throw 那句 `unsupported descriptor version 2` | 源码只在 v0→v1 迁移包看到这句 throw；fold 路径是 return undefined |
| 用户设置页 `subagent-model-selection.enabled` 此刻的值 | 没读 settings 存储 |
| host composition 有没有挂 ACP / 进程外 subagent provider | 没读 `web.cordis.yml` / base |
| `<spawn-tool>` 是否把 maxDepth 传给 start | 包装器源码没传这个字段 |
| persona 全局撞名的 Exact Error.message | 只看到「fails loud」 |
| `tools.guard` 本机插件有没有实际注册 | 没扫全库调用点 |
| `agent/session-start` payload 的字段表 | 没用类型文件对完 |


## CAP-055 · 没 inject 能拿到 systemPrompt 吗

- **是什么**：插件想 `ctx.systemPrompt.section(...)` 或 `ctx.get('systemPrompt')`。
- **实现位置**：GATE-052。
- **当前状态**：**部分可用（默认关，附配方）**。默认（没 inject）拿不到。配方：插件 `inject: ['systemPrompt']`，或 `ctx.inject(['systemPrompt'], cb)`。属性访问没 inject 会抛 GATE-052；`ctx.get` 可能给 undefined。
- **证据**：`cannot get property "systemPrompt" without inject`。a skill-manager plugin 的 inject 含 `systemPrompt`（`<host-plugin>.mjs:147`）。a prompt-inject plugin 曾经没 inject 读 systemPrompt，指针段被跳过。
- **关联**：GATE-052。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：要先 inject。属性点出来会抛；别靠碰运气。

## CAP-056 · persona 还能写 text: 吗

- **是什么**：0.1.4 的 persona schema 必填 `text:`。
- **实现位置**：GATE-050。
- **当前状态**：**已被封死（GATE-050）**。字段改名，旧键没有兼容别名。
- **证据**：新 Config 必填 `prefix`。旧字段名不在类型里。
- **我们依赖**：三个现役 preset 已改。
- **关联**：GATE-050、GATE-051。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不能。写 prefix。

## CAP-057 · 全局挂 persona 行行吗

- **是什么**：在 host composition 而不是 preset 里挂 `dsh-persona`。
- **实现位置**：GATE-051。
- **当前状态**：**已被封死（GATE-051）**。会跟 registry 自己的 persona 撞。没有「允许全局 persona 行」的开关。
- **证据**：模块注释「mounted globally it collides … and fails loud」。具体 throw 字符串未核实。
- **关联**：GATE-051。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不行。persona 行只能挂在 agent/preset 作用域。

# 审批与沙箱

## CAP-060 · 子代理的审批策略是什么

- **是什么**：孩子要不要问人。
- **实现位置**：GATE-032；政策类型 `dsh-user-approval/lib/types/index.d.ts:37-46`。
- **当前状态**：**可用**（对父）；**子被钉死为 never**。
- **证据**：`ask` 默认、没 answerer 则 `'unavailable'` fail-closed；`never` 全部 `'rejected'`。
- **关联**：GATE-032、CAP-041、CAP-061。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：父可以问人；派出去的孩子问了也是拒。

## CAP-061 · 审批服务没 answerer 会怎样

- **是什么**：`approval.request()` 发出去，没人接。
- **实现位置**：`dsh-user-approval/lib/types/index.d.ts:2-3, 40-41`：「Missing answerers fail closed」；`ask` 且无 answerer → `'unavailable'`。
- **当前状态**：**可用**（fail-closed，不是挂起）。
- **证据**：模块头。本会话没专门打一次空 answerer 探针，outcome 字符串以类型为准。
- **我们依赖**：spawn 提权 `outcome !== 'allowed-once'` 就取消。
- **关联**：CAP-033。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：没人接就关，不会当默许。

---

## CAP-065 · 子代理内部能把沙箱调宽吗

- **是什么**：孩子想从 read-only 升到 workspace-write / danger-full-access。
- **实现位置**：委派时只把父**显式** sandbox override 写入子日志（`child-agent.js:184-201`），「never deployment defaults or one-shot grants」。扩权要审批，子策略是 never → 拒。沙箱模式词汇 `dsh-sandbox/lib/types/index.d.ts:19`。
- **当前状态**：**已被封死（GATE-032）**。从子会话内部升不了。派的时候在父侧批是另一条路，不是给孩子开内部扩权。
- **证据**：GATE-032 + capture 注释。我们包装器的沙箱提权在**父**侧 `collectSandboxEscalations`，人批了才写进 child create，不是孩子自己升。
- **并入备注（A CAP-031）**：沙箱粒度（read-only / workspace-write / danger-full-access 叠加审批）**源码坐标未逐条核实**。本条只钉「子会话内部调宽=封死」这一闸，不是沙箱机制全图。
- **关联**：GATE-032、CAP-033。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：孩子自己升不了。要更宽，派的时候在父那边批。

# 模型路由与委派

## CAP-070 · 换了路由但不传 thinking 强度会怎样

- **是什么**：`agentOptions` 只改 model，不带 reasoningEffort。
- **实现位置**：`child-agent.js:89-91`。
- **当前状态**：**可用**（会丢掉父的 effort，让新模型用自己的默认）。
- **证据**：`if (routeChanged && requested?.reasoningEffort === undefined) delete resolved.reasoningEffort`。官方工具打开换模型时文案也是这句（`dsh-tool-subagent/lib/index.js:395`）。
- **关联**：CAP-030。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：父的 thinking 强度不会跟着新模型走，除非你显式再传一次。

---

# 事件与钩子

## CAP-080 · agent/session-start 我们拿来干什么

- **是什么**：新会话起来时的钩子。
- **实现位置**：cordis 事件。我们：<host-plugin> `:1287`、<host-plugin> `:1040`、injector `:330`、a skill-manager plugin `:368`、a probe plugin `:59`。
- **当前状态**：**可用**。
- **证据**：这些插件都在 `ctx.on('agent/session-start', ...)`。payload 形状未在本次把官方 .d.ts 逐字段核完，**payload 字段级未核实**。
- **并入（A CAP-010）**：类型 `dsh-agent/lib/types/runtime-types.d.ts:298`，`this: Scoped<Agent>`。来源 `SessionStartSource = 'startup' | 'resume' | 'clear' | 'compact'`（`:105`），四种都触发。
- **关联**：CAP-021。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：钩子在，我们用来装投递/策略/技能；payload 细字段这次没对类型。

## CAP-081 · 工具执行前能不能拦一刀

- **是什么**：`tools.guard(fn)`，返回字符串就拒绝这次调用。
- **实现位置**：`dsh-tools/lib/index.js:2806-2820`。全局 guard 或 `agent.ctx` 上的 scoped guard。任何匹配的 guard 可拒绝；没有 guard 能强制放行别人已经拒绝的。
- **当前状态**：**可用**。
- **证据**：注释原文如上。我们这次没在插件里搜到 `tools.guard(` 调用，**我们是否使用未核实**（grep 范围可再扫）。
- **并入备注（A CAP-041）**：钩子全集未核实。A 另列 `agent/pre-step`（`runtime-types.d.ts:303`，可拒步/改消息），签名在类型文件，行为未实测。本条只证了 `tools.guard` 这一刀。
- **关联**：CAP-023、CAP-080。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：能拦；拦了不能被另一个 guard 改成放行。

---

# 装配与 preset

## CAP-090 · 一个 preset 在进程里挂几次

- **是什么**：10 个会话都选 <team-preset>，工具注册是 1 份还是 10 份。
- **实现位置**：`dsh-agent-presets/lib/types/index.d.ts:1-20`：每个 preset `cordis.yml` **standing mount 一次**，会话用 scope parentage join。`composeFrom`（`:231`）让子代理加入**父正在用的那份** standing 组合，避免孩子看到空工具表（`child-agent.js:157-158`）。
- **当前状态**：**可用**。
- **证据**：模块头。这也是 GATE-091 的背景：standing mount 按 preset 一份，但某些服务是进程全局，两份 preset 各挂一次就会撞。
- **关联**：GATE-091、CAP-091。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：每个 preset 进程内只挂一份，会话是加入，不是复制。

## CAP-091 · 两个插件能同时当 cordisInspect provider 吗

- **是什么**：id 相同的 inspect provider 注册两次。
- **实现位置**：GATE-091。
- **当前状态**：**已被封死（GATE-091）**。同 id。不同 id 未核实能否并存。没有「允许多次注册同 id」的开关。
- **证据**：`:732` throw。我们 `<inspect-shim>.mjs` inject `cordisInspect`。
- **关联**：GATE-091、CAP-090。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：同 id 不行。这是进程单例登记表。

## CAP-092 · kv.open('agent_teams') 能开两次吗

- **是什么**：两个插件各 open 一次同名 json unit。
- **实现位置**：GATE-090。
- **当前状态**：**已被封死（GATE-090）**。句柄独占，没有「允许多开」的开关。
- **证据**：`unit 'agent_teams' is already open; a unit has exactly one live handle`。<host-plugin>.mjs:62 注释写明因此改文件面。
- **绕法**：共用句柄，或不要 kv，写 `projects.json`。
- **关联**：GATE-090。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：不能。第二个 open 抛 already open。

# 补漏（官方表面）

## CAP-004 · 新会话的 header.version 是几

- **是什么**：逻辑会话格式版本，打在 header 上，和磁盘文件名 `session.vN.jsonl` 是两套账。
- **实现位置**：`dsh-session/lib/index.js:56` `const SESSION_FORMAT_VERSION = 3`；header 校验 `lib/types/index.js:31-32` 非 3 即 throw。
- **当前状态**：**可用**。
- **证据**：

```text
session header version must be 3, got <n>
```

磁盘 generation 0 仍叫 `session.jsonl.zstd`（ENV-003），那是物理文件名，不是这个常量。
- **关联**：ENV-003、GATE-010。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：新 header 必须是 3；旧文件名可能仍是不带 vN 的。

## CAP-005 · ctx.remote.session.inspect 还在吗

- **是什么**：不经过 `sessionPersistence`、不激活 Agent，按 id 看一条会话。
- **实现位置**：`dsh-tool-cordis/lib/index.js:2288-2301` 生成的 `ctx.remote.session.inspect(sessionId, signal?)` → `Promise<SessionInspection>`。`SessionInspection` 含 `events`（:7391）。
- **当前状态**：**未核实**（本观察未调）。服务真名 **`sessionController`**（`ctx.get('sessionController')` / `ctx.remote.session` 生成面）。独立观察实测：走同一道格式闸（v2 描述符同样炸）。
- **证据**：包内声明原文如上。反馈通道 `dsh-message-feedback` 的 `'feedback/committed'(inspection: SessionInspection)` 也引用这个类型。
- **关联**：CAP-010、GATE-002、CAP-001。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：文档上还在，插件里能不能调待核。别把它和已经删除的 `sessionPersistence.inspect` 当成同一个方法。

## CAP-035 · AgentRegistry.create/resume 还在吗

- **是什么**：进程内创建新 agent、或从落盘会话恢复 agent。子代理 spawn 最终走这条，不是只调 `subagents.startContinuable`。
- **实现位置**：`dsh-agent/lib/types/index.d.ts:279` `create(options): Promise<AgentHandle>`；`:287` `resume(options): Promise<AgentHandle>`。create 会建 session；resume 要求 persistence 已配置。
- **当前状态**：**可用**（类型 + spawn 路径依赖；本回合未对 `agents.create` 单独打探针）。
- **证据**：注释「Rejects if no factory is registered」；resume「factory rejects if session persistence is not configured」。
- **关联**：CAP-030、CAP-031、CAP-080。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：创建/恢复 agent 的官方入口还在；子代理封装在它上面。

## CAP-058 · persona 前后缀怎么挂

- **是什么**：`dsh-persona` 往 system prompt 注册 prefix（靠前）和可选 suffix（靠后），不是整份替换（除非 `complete: true`）。
- **实现位置**：`dsh-persona/lib/types/index.d.ts:24-40` `prefix` 必填、`suffix?`、`complete?`、`includeRuntimeContext?`。
- **当前状态**：**可用**。
- **证据**：配置改名后必须写 `prefix:`（GATE-050）。空 prefix 在渲染时丢掉该 section。
- **关联**：GATE-050、GATE-051、CAP-056。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：写 prefix，可选 suffix；别再用 text:。

# 审批与沙箱

## CAP-062 · ApprovalService.request 怎么用

- **是什么**：问人一枪。唯一放行值是 `'allowed-once'`。没 answerer 或乱返回 → `'unavailable'`（fail-closed）。要有开着的 turn，审计事件必须成对落盘。
- **实现位置**：`dsh-user-approval/lib/types/index.d.ts:97-127` `request(req): Promise<ApprovalOutcome>`；`setPolicy` 在 `:108`。
- **当前状态**：**可用**。
- **证据**：注释「an aborted signal yields `'cancelled'`」「missing or throwing answerer yields `'unavailable'`」。
- **关联**：CAP-060、CAP-061、GATE-032。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：调 `ctx.approval.request`；只有 allowed-once 算准。

## CAP-082 · compaction 怎么压缩会话历史

- **是什么**：`ctx.compaction` 把一段历史收成一条摘要节点。自动触发 `pressure` | `context-overflow`；手动压缩有一套错误码。
- **实现位置**：`dsh-compaction/lib/types/index.d.ts:1-37`。`ManualCompactionErrorCode = 'busy' | 'cancelled' | 'changed' | 'summary' | 'commit' | 'persistence'`。
- **当前状态**：**可用**（服务在；preset 要挂 compaction 相关行才会有 `/compact`——缺行则命令不存在，那是装配问题不是服务删除）。
- **证据**：模块头「providers decide when to compact and replace a history range with one summary node」。手动失败走 `ManualCompactionError`。
- **关联**：CAP-080、ENV-080。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：压缩是官方服务；preset 没挂行就没有命令，服务仍在。

# 装配与 preset

## CAP-093 · AgentPresetComposition 是什么

- **是什么**：一份 preset 的花名册身份 + 行列表，给「插件清单」这类表面用，不必自己解析 yml。
- **实现位置**：`dsh-agent-presets/lib/types/composition-inventory.d.ts:44-56`；`agentPresets.compositionInventory(): Promise<AgentPresetComposition[]>`（`index.d.ts:149`）。
- **当前状态**：**可用**。
- **证据**：字段 `id`、`trust`（system/user）、`isDefault`、`broken?`、`rows`。坏掉的 preset 用 `broken` 字符串而不是丢行。
- **关联**：CAP-090、ENV-092。
- **截至 2026-09-13 · DSH 0.1.5-rc.2**
- **一句话**：问花名册用 compositionInventory，别手解析。
