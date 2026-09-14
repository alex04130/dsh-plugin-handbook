> English: [en/README.md](en/README.md)
> 中文在根目录，英文在 `en/`。
> 社区观察，非官方文档。

# DSH 全量解析

对 DeepSeek Harness 做包级别的代码解析，写成这套全量文档，供插件开发和机制参考。截至约 0.1.5-rc.2。

起因：agent 写 DSH 插件时常常只查到某个 API 存在，不去看整条调用链，于是动手前反复做非必要的代码拉取和机制验证。这套把调用链、边界、以及这个版本封死了什么一次写清。

## 从哪看起

| 文件 | 你要干的事 |
|---|---|
| [capabilities.md](capabilities.md) | 我想用的能力还能不能用（状态读法见该篇篇头） |
| [gates.md](gates.md) | 我撞了个报错，这是哪道闸 |
| [verify.md](verify.md) | 我不信这条结论，自己跑一遍 |
| [environment.md](environment.md) | 目录、热载、preset 语法这些环境事实 |

其余（host/client 全表、包索引、术语）在目录里。词看 [glossary.md](glossary.md)。英文在 [en/](en/README.md)。

## 按哪个名字敲

本稿写的是一台跑 DSH 0.1.5-rc.2、插件装在 `$DSH_HOME` 里的**运行时**。`@dsh-forge/bundle@0.2.0-preview.1` 随包带的工具名是更早的一套（`session_*` / `model_*` / `dev_*` / `teams`）。你若只装了那个包，按包里的名字调，别照这里的 `forge_*` 敲。查你机器上的真名：有 cordis 工具面就 `cordis_inspect_query({ platform:'host', provider:'Tool', method:'listTools' })`；PTC 会话用 `tool_router({ action:'list' })`。以那份清单为准。

`$DSH_HOME` = 本机 DSH 家目录。
