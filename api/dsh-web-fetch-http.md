# dsh-web-fetch-http

> Anonymous public HTTP(S) fetch provider for the DeepSeek Harness web capability seam (ctx.web)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-web-fetch-http/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { LOCAL_FETCH_PROVIDER_ID, HttpFetchProv | `export { LOCAL_FETCH_PROVIDER_ID, HttpFetchProvider, } from './provider.ts';` | 9 |
| const | DEFAULT_USER_AGENT | `export declare const DEFAULT_USER_AGENT = "deepseek-harness/0.0.1 (+https://github.com/deepseek-ai)"` | 12 |
| const | name | `export declare const name = "web-fetch-http"` | 14 |
| const | inject | `export declare const inject: string[]` | 16 |
| interface | Config | `export interface Config` | 18 |
| const | Config | `export declare const Config: z<Config>` | 30 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 32 |

## dsh-web-fetch-http/lib/types/network.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PublicAddress | `export interface PublicAddress` | 11 |
| interface | PinnedResponse | `export interface PinnedResponse` | 18 |
| type | AddressResolver | `export type AddressResolver` | 25 |
| function | isPublicIpAddress | `export declare function isPublicIpAddress(input: string): boolean` | 37 |
| function | resolvePublicAddresses | `export declare function resolvePublicAddresses(hostname: string, signal: AbortSignal, resolver?: AddressResolver): Promise<PublicAddress[]>` | 47 |
| function | isNonPublicIpLiteral | `export declare function isNonPublicIpLiteral(hostname: string): boolean` | 58 |
| function | requestPinned | `export declare function requestPinned(url: URL, addresses: readonly PublicAddress[], headers: Record<string, string>, signal: AbortSignal): Promise<PinnedRespon` | 74 |
| function | requestVia | `export declare function requestVia(dispatcher: Dispatcher, url: URL, headers: Record<string, string>, signal: AbortSignal): Promise<PinnedResponse>` | 90 |
| const | publicHttpNetwork | `export declare const publicHttpNetwork: {` | 92 |
| type | LookupCallback | `type LookupCallback` | 97 |
| function | createPinnedLookup | `export declare function createPinnedLookup(addresses: readonly PublicAddress[]): (hostname: string, options: LookupOptions, callback: LookupCallback) => void` | 104 |
| export-list |  | `export {};` | 105 |

## dsh-web-fetch-http/lib/types/policy.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | WEB_FETCH_MAX_URL_LENGTH | `export declare const WEB_FETCH_MAX_URL_LENGTH = 2048` | 9 |
| type | FetchableKind | `export type FetchableKind` | 11 |
| function | parseFetchUrl | `export declare function parseFetchUrl(input: string): URL` | 20 |
| function | validateFetchUrl | `export declare function validateFetchUrl(input: string): URL` | 29 |
| function | isSameOrigin | `export declare function isSameOrigin(a: URL, b: URL): boolean` | 39 |
| function | classifyContentType | `export declare function classifyContentType(contentType: string \| null): FetchableKind \| undefined` | 49 |
| function | parseCharset | `export declare function parseCharset(contentType: string \| null): string \| undefined` | 60 |
| function | decoderForCharset | `export declare function decoderForCharset(charset: string \| undefined): TextDecoder` | 71 |

## dsh-web-fetch-http/lib/types/provider.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | HttpFetchLimits | `export interface HttpFetchLimits` | 11 |
| type | HttpFetchResolver | `export type HttpFetchResolver` | 24 |
| const | LOCAL_FETCH_PROVIDER_ID | `export declare const LOCAL_FETCH_PROVIDER_ID = "http"` | 26 |
| class | HttpFetchProvider | `export declare class HttpFetchProvider implements WebFetchProvider` | 28 |
| method | HttpFetchProvider.constructor | `constructor(limits: HttpFetchLimits, resolveAddresses?: HttpFetchResolver);` | 36 |

