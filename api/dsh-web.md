# dsh-web

> Abstract web access capability seam (ctx.web) for the DeepSeek Harness — search/fetch provider registry, registration-order-independent selection, request/result vocabulary, and the WebError taxonomy
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-web/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { WebError, } | `export { WebError, } from './types.ts';` | 11 |
| interface | WebRuntimeConfig | `export interface WebRuntimeConfig` | 24 |
| class | WebRuntime | `export declare class WebRuntime extends Service` | 42 |
| method | WebRuntime.constructor | `constructor(ctx: Context, config?: WebRuntimeConfig);` | 53 |
| default | WebRuntime | `export default WebRuntime;` | 91 |

## dsh-web/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WebSearchRequest | `export interface WebSearchRequest` | 14 |
| interface | WebSearchResult | `export interface WebSearchResult` | 32 |
| interface | WebSearchSource | `export interface WebSearchSource` | 46 |
| interface | WebFetchRequest | `export interface WebFetchRequest` | 59 |
| interface | WebFetchResult | `export interface WebFetchResult` | 68 |
| type | WebFetchBody | `export type WebFetchBody` | 87 |
| interface | WebSearchProvider | `export interface WebSearchProvider` | 98 |
| interface | WebFetchProvider | `export interface WebFetchProvider` | 109 |
| class | WebError | `export declare class WebError extends HarnessError` | 124 |

