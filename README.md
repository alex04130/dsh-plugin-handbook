> English: [en/README.md](en/README.md)
> 中文在根目录，英文在 `en/`。
> 社区观察，非官方文档。

# DSH 全量解析

对 DeepSeek Harness 做包级别的代码解析，写成这套全量文档，给写 DSH 插件的人看。截至约 0.1.5-rc.2。

起因：agent 写 DSH 插件时常常只查到某个 API 存在，不去看整条调用链，于是动手前反复做非必要的代码拉取和机制验证。

规模：**238** 个包的全部导出；**71** 个 host 服务，其中 **60** 个这次真的挂了（**11** 个没挂）；事件 **62** · builtin **7**；client 槽 **61** · client 服务 **8** · 主题 token **13**。

## 三十秒上手

想知道 `sessionPersistence.inspect` 还能不能用：

1. 在 [capabilities.md](capabilities.md) 里搜 `inspect`
2. 看到状态是 **已被封死（GATE-002）**：`sessionPersistence.inspect` 这个方法已经没了；`sessionController.inspect` 还在，过同一道格式闸（同一篇里）
3. 不信这个结论，照 [verify.md](verify.md) 里的命令自己跑一遍

这套文档就这三步。其余篇目是这三步的展开。

## 从哪看起

想知道某个方法还能不能用，按层看：

| 层 | 能信到什么程度 | 去哪 |
|---|---|---|
| 包级 API 表 | 覆盖全部 238 个包；看不到纯 JS 导出（只解析 `.d.ts`） | [l2-packages.md](l2-packages.md) · `docs/harness/api-surface.md` |
| 能力面全量 | 含「声明有但没挂上」 | [plugin-surface.md](plugin-surface.md) · [l2-host.md](l2-host.md) · [l2-client.md](l2-client.md) |
| 判断层 | 带原文报错与触发；最可能只对某个版本成立 | [capabilities.md](capabilities.md) · [gates.md](gates.md) |

另外：[environment.md](environment.md)（目录 / 热载 / preset 语法）· [glossary.md](glossary.md)（词）。索引在 [index.md](index.md)。英文在 [en/](en/README.md)。五值读法见 capabilities 篇头。「未核实」= 这台观察没跑到，不是不能用。

## 按哪个名字敲

本稿写的是一台跑 DSH 0.1.5-rc.2、插件装在 `$DSH_HOME` 里的**运行时**。`@dsh-forge/bundle@0.2.0-preview.1` 随包带的工具名是更早的一套（`session_*` / `model_*` / `dev_*` / `teams`）。你若只装了那个包，按包里的名字调，别照这里的 `forge_*` 敲。查你机器上的真名：有 cordis 工具面就 `cordis_inspect_query({ platform:'host', provider:'Tool', method:'listTools' })`；PTC 会话用 `tool_router({ action:'list' })`。以那份清单为准。

发现和你的机器不符：带上你的 DSH 版本和原文报错开 issue。

`$DSH_HOME` = 本机 DSH 家目录。
