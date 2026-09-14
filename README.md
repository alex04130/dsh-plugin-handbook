> English: [en/README.md](en/README.md)
> 中文在根目录，英文在 `en/`。
> 社区观察，非官方文档。

# 社区观察：DSH 能力与闸（非官方）

这是**社区观察**，不是 DeepSeek Harness 官方文档，不代表 DSH 项目。内容来自对已安装包（约 0.1.5-rc.2）与运行时行为的实测。你的版本可能不同——先看版本戳，再跑 `verify.md` 里的命令。

适用：写 DSH 插件的人。判据：读完能否说出「这是什么、能拿它干什么」。

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
