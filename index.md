# 索引（脚本生成，勿手改）

<!-- doccheck:no-entries -->

| ID | 一句话 | 状态 | 位置 |
|---|---|---|---|
| CAP-001 | 离线会话怎么读正文 | 可用 | capabilities.md:52 |
| CAP-002 | 离线会话怎么追加事件 | 可用 | capabilities.md:76 |
| CAP-003 | list() 现在返回什么形状 | 可用 | capabilities.md:89 |
| CAP-004 | 新会话的 header.version 是几 | 可用 | capabilities.md:511 |
| CAP-005 | ctx.remote.session.inspect 还在吗 | 未核实 | capabilities.md:527 |
| CAP-010 | 还能一次 inspect 拿到元数据+全文吗 | 已被封死 | capabilities.md:100 |
| CAP-011 | open(id, 'append') 会怎样 | 可用 | capabilities.md:114 |
| CAP-020 | restrict 会摘掉子代理自己注册的工具吗 | 可用 | capabilities.md:129 |
| CAP-021 | 一个会话能调另一个会话的工具吗 | 可用 | capabilities.md:140 |
| CAP-022 | PTC 下模型能直接调 bash 吗 | 部分可用 | capabilities.md:152 |
| CAP-023 | 能在全局 ctx 上 restrict 工具吗 | 已被封死 | capabilities.md:164 |
| CAP-024 | 能 restrict 掉 run_code 吗 | 已被封死 | capabilities.md:175 |
| CAP-025 | 能注册一个名叫 run_code 的工具吗 | 已被封死 | capabilities.md:185 |
| CAP-030 | startContinuable 传 agentOptions 还能换模型吗 | 可用 | capabilities.md:204 |
| CAP-031 | spawn 和 fork 差在哪 | 可用 | capabilities.md:216 |
| CAP-032 | 子代理能套多深 | 可用 | capabilities.md:229 |
| CAP-033 | 我们的 <spawn-tool> 能换模型吗 | 可用 | capabilities.md:239 |
| CAP-034 | 子代理默认用谁的模型 | 可用 | capabilities.md:256 |
| CAP-035 | AgentRegistry.create/resume 还在吗 | 可用 | capabilities.md:537 |
| CAP-040 | 官方 subagent 工具能让模型给子代理换模型吗 | 部分可用 | capabilities.md:267 |
| CAP-041 | 子代理自己能弹出审批对话框吗 | 已被封死 | capabilities.md:286 |
| CAP-042 | 描述符还是 v2 的子代理，面板上看得到吗 | 已被封死 | capabilities.md:298 |
| CAP-043 | 进程外 provider 能给子代理指定模型吗 | 已被封死 | capabilities.md:310 |
| CAP-044 | <team-preset> 挂了官方 subagent 工具吗 | 从未可用 | capabilities.md:321 |
| CAP-050 | 官方 skill 工具和我们的技能管理器抢名吗 | 可用 | capabilities.md:333 |
| CAP-051 | 会话之间怎么通信 | 可用 | capabilities.md:345 |
| CAP-055 | 没 inject 能拿到 systemPrompt 吗 | 部分可用 | capabilities.md:369 |
| CAP-056 | persona 还能写 text: 吗 | 已被封死 | capabilities.md:379 |
| CAP-057 | 全局挂 persona 行行吗 | 已被封死 | capabilities.md:390 |
| CAP-058 | persona 前后缀怎么挂 | 可用 | capabilities.md:547 |
| CAP-060 | 子代理的审批策略是什么 | 可用 | capabilities.md:402 |
| CAP-061 | 审批服务没 answerer 会怎样 | 可用 | capabilities.md:412 |
| CAP-062 | ApprovalService.request 怎么用 | 可用 | capabilities.md:559 |
| CAP-065 | 子代理内部能把沙箱调宽吗 | 已被封死 | capabilities.md:425 |
| CAP-070 | 换了路由但不传 thinking 强度会怎样 | 可用 | capabilities.md:438 |
| CAP-080 | agent/session-start 我们拿来干什么 | 可用 | capabilities.md:452 |
| CAP-081 | 工具执行前能不能拦一刀 | 可用 | capabilities.md:463 |
| CAP-082 | compaction 怎么压缩会话历史 | 可用 | capabilities.md:569 |
| CAP-090 | 一个 preset 在进程里挂几次 | 可用 | capabilities.md:478 |
| CAP-091 | 两个插件能同时当 cordisInspect provider 吗 | 已被封死 | capabilities.md:488 |
| CAP-092 | kv.open('agent_teams') 能开两次吗 | 已被封死 | capabilities.md:498 |
| CAP-093 | AgentPresetComposition 是什么 | 可用 | capabilities.md:581 |
| ENV-001 | ~/.dsh 下面这些目录各干什么 | 可用 | environment.md:24 |
| ENV-002 | sessions/ 目录名为何以 -- 开头，ls 为啥炸 | 可用 | environment.md:52 |
| ENV-003 | 会话日志文件到底叫什么 | 可用 | environment.md:75 |
| ENV-010 | 服务名怎么取，常见写错 | 可用 | environment.md:92 |
| ENV-020 | 哪些改动不重启生效、哪些必须重启 | 可用 | environment.md:117 |
| ENV-021 | PTC 把工具面放哪，native 放哪，代价多少 | 可用 | environment.md:157 |
| ENV-080 | 事件名有哪些、何时触发 | 可用 | environment.md:174 |
| ENV-090 | preset 行的 name 能写成 !!js 吗 | 从未可用 | environment.md:210 |
| ENV-091 | 工具行要不要 isolate，服务行要不要 | 可用 | environment.md:233 |
| ENV-092 | 用户 preset 和发行版 preset 各在哪 | 可用 | environment.md:246 |
| ENV-093 | profile 的 plugins/ 相对谁解析 | 可用 | environment.md:261 |
| GATE-001 | 读句柄不能 append / flush | — | gates.md:31 |
| GATE-002 | sessionPersistence.inspect 已消失（sessionController.inspect 另说） | — | gates.md:58 |
| GATE-003 | open() 对非法 access 不校验，静默当 write | — | gates.md:47 |
| GATE-010 | 子代理描述符不是 3，运行时当它不存在 | — | gates.md:120 |
| GATE-020 | restrict 不能点名 run_code | — | gates.md:76 |
| GATE-021 | restrict 必须在 agent.ctx 上调 | — | gates.md:90 |
| GATE-022 | PTC 下模型只能直接点 run_code | — | gates.md:104 |
| GATE-030 | 进程外子代理后端拒绝 start 能力 | — | gates.md:138 |
| GATE-031 | 官方委托工具默认不暴露换模型字段 | 部分可用 | gates.md:153 |
| GATE-032 | 派生子代理的审批被钉死为 never | — | gates.md:182 |
| GATE-050 | persona 配置从 text: 改成 prefix: | — | gates.md:199 |
| GATE-051 | persona 行是 scope-only | — | gates.md:207 |
| GATE-052 | 没 inject 就取不到服务 | — | gates.md:215 |
| GATE-060 | 仅主会话工具守卫 | — | gates.md:232 |
| GATE-090 | json storage unit 同时只能开一个句柄 | — | gates.md:244 |
| GATE-091 | cordisInspect 同 id 不能注册两次 | — | gates.md:259 |
