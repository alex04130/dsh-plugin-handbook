# 这些词指什么？（术语表）

正文里第一次见到闸、封死、声明面，来这里对一句。一句一条，挂机制。截至 2026-09-13 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2。

| 词 | 一句话 | 挂哪个机制 |
|---|---|---|
| DSH_HOME | 本机家目录，这里是 `$DSH_HOME` | ENV-001 |
| standing mount | 每个 preset 在进程里只挂一份组合，会话 join 而不是复制 | CAP-090 |
| isolate realm | preset 服务必须待的私人空间，否则漏到进程全局 | ENV-091、GATE-091 |
| inject | 插件声明自己要用的服务；不声明就点属性会抛 | GATE-052、CAP-055 |
| PTC | 呈现模式：模型只能直接调 run_code，其它进 SDK | ENV-021、GATE-022 |
| native | 呈现模式：每个工具一条 function-call | ENV-021 |
| run_code | PTC 运输层保留名，不能注册也不能 restrict | GATE-020、GATE-022、CAP-025 |
| tool_router | 元工具：list/describe/call 其它工具 | 一次工具面收窄实测；本会话只有 run_code 能直调 |
| SessionAccess | open() 的第二参，只有 read / write | GATE-001 |
| inspect() | 0.1.4 一次拿 meta+events 的方法，0.1.5 没了 | GATE-002、CAP-010 |
| stat() | 0.1.5 只看 header/revision，不带 events | CAP-001 |
| descriptor v3 | 子代理身份事件的现行版本；v2 本运行时当不存在 | GATE-010、CAP-042 |
| modelSelectionSettings | 官方 subagent 工具要不要把换模型字段暴露给模型，默认 false | GATE-031、CAP-040 |
| startContinuable | 服务层派可续子代理，能带 agentOptions | CAP-030 |
| <spawn-tool> | 我们绕过官方工具、走 startContinuable 的包装 | CAP-033 |
| approval never | 派生子代理被钉死的审批策略，内部扩权全拒 | GATE-032 |
| fail-closed | 没 answerer 不当默许，outcome 是 unavailable | CAP-061 |
| projectKey | 把 cwd 编成 `--home-<user>-.dsh--` 这种目录名 | ENV-002 |
| generation 0 / v3 日志 | `session.jsonl.zstd` vs `session.v3.jsonl.zstd` | ENV-003 |
| <dyn-boot-plugin> | 按 auto-plugins.json 在 session-start 恢复动态插件 | ENV-020 |
| <hot-reload-plugin> | 盯 dynplugins 和少数不带 .rN 的静态 mjs，尝试热载 | ENV-020 |
| fingerprint | <dyn-boot-plugin> 用来判断清单有没有变；变了才跑，同 prefix 已在场就跳过 | ENV-020 |
| patchReload live | web profile 允许 include 在进程内重建 patch | ENV-093 |
| shipped preset | 包内 presets/（cordis/minimal/ptc/standard），别改 | ENV-092 |
| user preset | `~/.dsh/.agent-presets/`，能改 | ENV-092 |
| 五值状态 | 可用 / 部分可用（默认关，附配方）/ 已被封死（附闸号）/ 从未可用 / 未核实 | 能力档头 |
| 闸 | 运行时对某个操作的校验：拒绝（有原文报错）或静默改变行为（没有报错，如 GATE-003） | gates.md |
| 封死 / 已被封死 | 所有入口都失败、没有合法打开开关；必须附 GATE 号。默认关+配方不是封死 | 能力档头 |
| 能力面 | 某个 agent 直接可见的工具集合；提权时看子集关系 | CAP-033 |
| 预设 / preset | 会话装配单元。第一次写「预设（preset）」，后文只写 `preset` | ENV-092、CAP-090 |
| 槽 / slot | client UI 插槽路径；数 `kind` 不是数 `name` | l2-client |
| 声明面 | 安装树 `.d.ts`，或检视目录 listService/listEvents/listBuiltins。目录有 ≠ 已经挂上 | l2-host / l2-client |
| 运行面 | 宿主层插件逐个 `ctx.get(name)`（服务）；slot 用 listSubTree，token 用 listTokens。listService **不是**运行面 | l2-host / plugin-surface |
| 挂 / 未挂 | 宿主层插件 ctx.get 这次装配拿不拿得到。未挂可以是目录有、本次没装 | plugin-surface |
| 水位 | **不用。** 不写这个词。不译。计数写「采到 N」或 observed count | 术语对照 |
| replaceRisk | 替换该槽的风险：`shadows-shipped-ui` 盖发行版 UI；`none` 不盖根节点 | l2-client |
| tool_router | 元工具 list/describe/call，审批按内层 | CAP-021 |
| cross-session layer | 同进程跨会话消息 + 离线队列 + 审批分级 | CAP-051 |
| 仅主会话守卫 | 子代理调某些工具被拒 | GATE-060 |
| 正控 | 用具备被测特征的样本验证结论 | verify.md |
