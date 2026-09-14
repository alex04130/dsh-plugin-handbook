> English: [en/README.md](en/README.md)
> 中文在根目录，英文在 `en/`。
> 社区观察，非官方文档。

# DSH 全量解析

中文 · [English](en/README.md)

DeepSeek Harness 插件开发参考资料。238 个包的导出、host 与 client 插件面、会话与审批这类机制在 **0.1.5-rc.2** 上的实际行为，都收在这里。

我做这个的原因：写插件时要查的东西散在几十个包里。查 API 只查得到「这个方法存在」，查不到它整条调用链怎么走，于是动手前总要重新拉代码、重新试。

## 找什么在哪里

| 你想知道 | 去哪 |
|---|---|
| 某个方法或服务还能不能用 | [capabilities.md](capabilities.md)，搜名字看状态 |
| 撞了个报错，不知道是哪儿拦的 | [gates.md](gates.md)，搜报错原文 |
| 插件能挂什么（服务 / 事件 / 槽 / builtin） | [plugin-surface.md](plugin-surface.md) |
| 某个包导出了什么 | [api/](api/README.md)，238 个包一包一页 |
| 某个改动什么时候生效、preset 怎么写 | [environment.md](environment.md) |
| 不信上面任何一条 | [verify.md](verify.md)，自己跑一遍 |
| 某个词看不懂 | [glossary.md](glossary.md) |

英文在 [en/](en/README.md)，L2 那几张全量表没翻。

## 覆盖到哪一步

| | 覆盖 | 到位程度 |
|---|---|---|
| [api/](api/README.md) | 全部 238 个包的导出 | 只解析 `.d.ts`，纯 JS 导出的看不到 |
| [plugin-surface.md](plugin-surface.md) | 71 服务 · 62 事件 · 61 槽 · 13 token | 扫描为主，多数服务只记了名字和拿法 |
| [capabilities.md](capabilities.md) · [gates.md](gates.md) | 会话持久化、`restrict`、PTC、子代理换模型这几块 | 逐条跑过，带原文报错；没跑到的标「未核实」 |

标**未核实**的条目是**这次没跑到**，不是「不能用」。

## 名字

本稿写的是运行时里的名字（`forge_*`）。`@dsh-forge/bundle@0.2.0-preview.1` 随包带的还是更早的一套（`session_*` / `model_*` / `dev_*` / `teams`）。查你机器上的真名：有 cordis 工具面就 `cordis_inspect_query({ platform:'host', provider:'Tool', method:'listTools' })`；PTC 会话用 `tool_router({ action:'list' })`。

## 找错

带上你的 DSH 版本和原文报错开 issue。`$DSH_HOME` 指本机 DSH 家目录。
