# dsh-deepseek-llm-api-extensions

> Additive request-field registry for the official DeepSeek LLM API adapter
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-deepseek-llm-api-extensions/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | DeepSeekLlmApiExtensionRegistry | `export declare class DeepSeekLlmApiExtensionRegistry extends Service` | 15 |
| method | DeepSeekLlmApiExtensionRegistry.constructor | `constructor(ctx: Context);` | 17 |
| default | DeepSeekLlmApiExtensionRegistry | `export default DeepSeekLlmApiExtensionRegistry;` | 34 |

## dsh-deepseek-llm-api-extensions/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DeepSeekLlmApiJson | `export type DeepSeekLlmApiJson` | 3 |
| interface | DeepSeekLlmApiExtensionMap | `export interface DeepSeekLlmApiExtensionMap` | 10 |
| interface | DeepSeekLlmApiExtensionRequest | `export interface DeepSeekLlmApiExtensionRequest` | 13 |
| interface | PreparedDeepSeekLlmApiExtension | `export interface PreparedDeepSeekLlmApiExtension<T extends DeepSeekLlmApiJson>` | 24 |
| interface | DeepSeekLlmApiExtensionProvider | `export interface DeepSeekLlmApiExtensionProvider<T extends DeepSeekLlmApiJson>` | 31 |
| interface | PreparedDeepSeekLlmApiExtensions | `export interface PreparedDeepSeekLlmApiExtensions` | 40 |

