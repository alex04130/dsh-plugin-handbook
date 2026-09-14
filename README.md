> English: [en/README.md](en/README.md)
> 中文在根目录，英文在 `en/`。
> 社区观察，非官方文档。

# 社区观察：DSH 能力与闸（非官方）

这是**社区观察**，不是 DeepSeek Harness 官方文档，不代表 DSH 项目。内容来自对已安装包（约 0.1.5-rc.2）与运行时行为的实测。你的版本可能不同——先看版本戳，再跑 `verify.md` 里的命令。

适用：写 DSH 插件的人。判据：读完能否说出「这是什么、能拿它干什么」。

**按哪个名字敲。** 本稿写的是一台跑 DSH 0.1.5-rc.2、插件装在 `$DSH_HOME` 里的**运行时**，不是某一个 npm 包的文件清单。`@dsh-forge/bundle@0.2.0-preview.1` 随包带的工具名是更早的一套（`session_*` / `model_*` / `dev_*` / `teams`）。你若只装了那个包，按包里的名字调，别照这里的 `forge_*` 敲。查你机器上的真名：有 cordis 工具面就 `cordis_inspect_query({ platform:'host', provider:'Tool', method:'listTools' })`；PTC 会话用 `tool_router({ action:'list' })`。以那份清单为准。

**这几页里的词（第一次见）：**

- **闸** —— 运行时对某个操作的校验。两种挡法：**拒绝**（给你原文报错，如 `append is not available on a read handle`），或**静默改变行为**（没有报错——更坑：你以为拿了只读句柄，实际拿到写权限）。每条闸都写「原文报错」栏，哪怕内容是「没有报错」。
- **封死** —— 所有能碰到这个能力的入口都失败，并且没有合法打开开关。默认关、附配方能打开的，不叫封死。
- **声明面** —— 类型或检视目录上写着有。**运行面** —— 这次装配 `ctx.get` 真拿得到。目录有 ≠ 已经挂上。
- **检视目录** —— `listService` / `listEvents` 列出本版本允许哪些接口，**不保证**已挂。
- **能力面** —— 某个 agent 直接看得见的那组工具。
- **preset** —— 一个会话的装配（工具、persona、呈现模式）。第一次写「预设（preset）」，后文只写 `preset`。
- **槽 / slot** —— 客户端 UI 插槽路径。

**五值**（能力条目上的状态，不是形容词）：

| 值 | 白话 |
|---|---|
| 可用 | 能跑通；边界外应当失败 |
| 部分可用（默认关，附配方） | 出厂关着，按配方打开就能用 |
| 已被封死（附闸号） | 所有入口都过不去，且没有打开开关 |
| 从未可用 | 取值域里从来没有过，不是被关掉的 |
| 未核实 | 这台观察没跑到，别当结论 |

| 文件 | 干什么 |
|---|---|
| [capabilities.md](capabilities.md) | 还能不能用（五值状态 + 证据 + 配方） |
| [gates.md](gates.md) | 闸：判据 / 触发 / 原文报错 / 绕法 |
| [environment.md](environment.md) | 目录、热载、preset 语法、呈现模式、服务名与事件名 |
| [glossary.md](glossary.md) | 术语 |
| [verify.md](verify.md) | 怎么自己证伪一条结论 |
| [index.md](index.md) | 脚本生成的条目索引（可选） |
| [l2-host.md](l2-host.md) | 全量 host 声明面（Context 键 / 事件 / builtin） |
| [l2-client.md](l2-client.md) | 全量 client：运行面 slot 61 + 检视目录 service 8 + token 13；安装树 Context 键 12 |
| [plugin-surface.md](plugin-surface.md) | 插件可挂清单（host 目录 71 含运行面 60/11 + event 62 + builtin 7 + client 8/61/13） |
| [l2-packages.md](l2-packages.md) | 238 包索引 |
| [en/](en/README.md) | English cut（术语按冻结表；L2 全量表未翻，用中文源） |

许可证 / 语言 / 发布渠道未定。密钥与凭据不进本稿。

路径占位：`$DSH_HOME` = 本机 DSH 家目录；发行版包在 `node_modules/@deepseek-ai/<包>/`。

`project-memory/` 若出现在环境档，那是某一类社区插件的目录惯例，**不是 DSH 自带**。`tool_router` 是运行时元工具（list/describe/call），本观察里它在 PTC 会话的可见面上；是否随发行版默认挂载，以你的安装为准。
