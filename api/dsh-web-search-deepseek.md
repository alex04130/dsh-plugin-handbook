# dsh-web-search-deepseek

> DeepSeek-backed search provider (native web_search via the Anthropic-compatible API) for the DeepSeek Harness web capability seam (ctx.web)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-web-search-deepseek/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DeepSeekSearchProvider, DEEPSEEK_DEFAU | `export { DeepSeekSearchProvider, DEEPSEEK_DEFAULT_API_VERSION, DEEPSEEK_DEFAULT_BASE_URL, DEEPSEEK_DEFAULT_MAX_TOKENS, DEEPSEEK_DEFAULT_MAX_USES, DEEPSEEK_DEFAU` | 9 |
| const | name | `export declare const name = "web-search-deepseek"` | 12 |
| const | inject | `export declare const inject: string[]` | 14 |
| interface | Config | `export interface Config` | 16 |
| const | Config | `export declare const Config: z<Config>` | 32 |
| const | WEB_SEARCH_DEEPSEEK_SETTINGS_NAMESPACE | `export declare const WEB_SEARCH_DEEPSEEK_SETTINGS_NAMESPACE = "web-search-deepseek"` | 34 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 36 |

## dsh-web-search-deepseek/lib/types/provider.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEEPSEEK_PROVIDER_ID | `export declare const DEEPSEEK_PROVIDER_ID = "deepseek-official"` | 12 |
| const | DEEPSEEK_DEFAULT_BASE_URL | `export declare const DEEPSEEK_DEFAULT_BASE_URL = "https://api.deepseek.com/anthropic/v1"` | 19 |
| const | DEEPSEEK_DEFAULT_MODEL | `export declare const DEEPSEEK_DEFAULT_MODEL = "deepseek-v4-flash"` | 21 |
| const | DEEPSEEK_DEFAULT_API_VERSION | `export declare const DEEPSEEK_DEFAULT_API_VERSION = "2023-06-01"` | 23 |
| const | DEEPSEEK_DEFAULT_MAX_TOKENS | `export declare const DEEPSEEK_DEFAULT_MAX_TOKENS = 4096` | 25 |
| const | DEEPSEEK_DEFAULT_MAX_USES | `export declare const DEEPSEEK_DEFAULT_MAX_USES = 5` | 27 |
| interface | DeepSeekSearchLlmRequest | `export interface DeepSeekSearchLlmRequest` | 32 |
| interface | DeepSeekSearchProviderOptions | `export interface DeepSeekSearchProviderOptions` | 68 |
| function | citationSnippets | `export declare function citationSnippets(blocks: readonly ContentBlock[]): Map<string, string>` | 100 |
| function | mapAnthropicResponse | `export declare function mapAnthropicResponse(response: AnthropicResponse): WebSearchResult` | 112 |
| class | DeepSeekSearchProvider | `export declare class DeepSeekSearchProvider implements WebSearchProvider` | 117 |
| method | DeepSeekSearchProvider.constructor | `constructor(resolveOptions: () => DeepSeekSearchProviderOptions);` | 127 |

## dsh-web-search-deepseek/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WebSearchResultItem | `export interface WebSearchResultItem` | 8 |
| interface | WebSearchToolResultBlock | `export interface WebSearchToolResultBlock` | 16 |
| interface | CitationLocation | `export interface CitationLocation` | 21 |
| interface | TextBlock | `export interface TextBlock` | 27 |
| type | ContentBlock | `export type ContentBlock` | 33 |
| interface | AnthropicResponse | `export interface AnthropicResponse` | 37 |
| interface | AnthropicError | `export interface AnthropicError` | 41 |

