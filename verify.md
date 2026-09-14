<!-- doccheck:no-entries -->
# 怎么自己验证（比单条结论耐用）

截至 2026-09-13 · DSH 0.1.5-rc.2。

别家能力文档通常只列 API。这里教怎么证伪自己的结论。

## 四条纪律

| # | 纪律 | 反例 |
|---|---|---|
| 1 | **正控先于零命中**：先用已知样本证明探针能抓住目标，再宣布「全库没有」 | 没有 v2 描述符的会话，不能证「读 v2 会 throw」 |
| 2 | **边界内外成对测**：合法值一条、非法值一条 | 只测 `open(id,'read')` 通，不测 `'append'` 会漏 GATE-001 |
| 3 | **封死要穷举入口**：同一能力可能有工具面、服务面、面板面三条路 | 官方 subagent 工具默认关（GATE-031），服务层 `startContinuable({agentOptions})` 仍可用（CAP-030） |
| 4 | **文件里的值 vs 运行时回读**：静态 `.rN.mjs` 改完不等于进程里变了（ENV-020） | 技能描述文件已改名、`skill_list` 仍旧名 = 没热载 |

## 正控怎么做

1. 找一个**确定具备被测特征**的样本（版本号、access 值、preset 行）。
2. 跑探针，必须打出你预期的原文报错或返回形状。
3. 探针绿了，再拿它扫未知样本。
4. 零命中才能写「没有」。探针没绿就停，写未核实。

## 建议成对的命令

### 会话句柄

```bash
# 在插件或 node REPL 里（需要 ctx.sessionPersistence）
# 内：open(id, 'read') 然后 handle.read(0, N)
# 外：open(id, 'append') —— 类型没有这个值；jsonl 非 read 当写，随后 append 可能 SessionReadOnlyError
```

看到 `persistence.inspect is not a function` = 仍走 0.1.4 旧面（GATE-002）。

### 描述符版本

```bash
# 正控：一条 data.version === 2 的 subagent/descriptor 会话
# 读路径（持久化/查询）可能 throw：
#   failed to read session: subagent/descriptor 0 uses unsupported descriptor version 2
# foldSubagentDescriptor 路径：version !== 3 → undefined（dsh-subagent/lib/index.js:1359）
# 没有 v2 样本就不要宣布「读路径的行为」
```

### restrict

```js
// 外：全局 ctx
ctx.tools.restrict({ deny: ['bash'] })
// 期望：tools.restrict() requires a scoped context (agent.ctx): ...

// 外：点名运输层
agent.ctx.tools.restrict({ deny: ['run_code'] })
// 期望：tools.restrict() cannot name reserved PTC mode presentation transport "run_code"...
```

### PTC 直调

在 `mode: ptc` 的 preset 下对模型可见面直调 `bash`（不要包在 run_code 里）。期望 `unknown tool "bash": only `run_code` is callable directly — ...`。

对照：同一工具在 `run_code` 程序里 `await tools.bash({...})` 应通。

### 热载（静态 .rN.mjs）

1. 读磁盘上某 `.rN.mjs` 里一段会进运行时的字符串。
2. 用对应工具/技能 list 回读运行时字符串。
3. 改文件、等几秒、再回读。若仍旧 = 没热载，要重启。

样本（本机曾复跑）：技能 `cross-session-mailbox` 的 description，文件新名 vs `skill_list` 旧名。

### 官方子代理换模型

三入口都要测，缺一不算封死：

| 入口 | 期望（0.1.5-rc.2 出厂） |
|---|---|
| 官方 `subagent` 工具带 provider/model | schema 里没有这些字段，或 `child model selection is disabled for this tool instance` |
| 同上但 preset `modelSelectionSettings: true` 且 Host 挂了 settings 模块 | 字段出现（配方见 GATE-031） |
| `ctx.subagents.startContinuable({ agentOptions: { model } })` 且 in-process spawn | 能换（CAP-030） |

## 升级后最小集

和「读 / 写 / 列 / 启动 / 撞名」五条实跑对齐：

1. `stat` + `open('read')` + `read` 一条真日志。
2. `open('write')` + `append`（确认 access 不是 `'append'`）。
3. `list()` 解包 `.header.id`。
4. 起一个新会话，确认 preset 行语法（`name` 是字符串）。
5. 两个 preset 不要往进程全局注册同名 inspect provider。

A 组可自动的格式闸/字段改名，用源码 grep 即可；A 组一失败就停，不要写「整体通过」。
