# dsh-session-title

> Log-backed session title service and provider registry for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-title/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionTitleProviderId | `export type SessionTitleProviderId` | 14 |
| function | SessionTitleProviderId | `export declare function SessionTitleProviderId(id: string): SessionTitleProviderId` | 20 |
| re-export | { fallbackSessionTitle, normalizeSession | `export { fallbackSessionTitle, normalizeSessionTitle, truncateTitleUtf8 } from './normalize.ts';` | 21 |
| interface | Config | `export interface Config` | 23 |
| class | SessionTitleInvalidError | `export declare class SessionTitleInvalidError extends Error` | 51 |
| type | SessionTitleAutomaticMode | `export type SessionTitleAutomaticMode` | 55 |
| interface | SessionTitleProviderRequest | `export interface SessionTitleProviderRequest` | 57 |
| interface | SessionTitleProviderResult | `export interface SessionTitleProviderResult` | 68 |
| interface | SessionTitleProvider | `export interface SessionTitleProvider` | 77 |
| const | titleProjectionDefinition | `export declare const titleProjectionDefinition: {` | 90 |
| function | foldSessionTitle | `export declare function foldSessionTitle(events: readonly SessionEvent[]): SessionTitleSnapshot \| undefined` | 106 |
| class | SessionTitleService | `export declare class SessionTitleService extends Service` | 108 |
| method | SessionTitleService.constructor | `constructor(ctx: Context, config: Config);` | 117 |
| default | SessionTitleService | `export default SessionTitleService;` | 197 |

## dsh-session-title/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "session-title-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-session-title/lib/types/normalize.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | truncateTitleUtf8 | `export declare function truncateTitleUtf8(input: string, maxBytes: number): string` | 8 |
| function | normalizeSessionTitle | `export declare function normalizeSessionTitle(input: string, maxBytes: number): string` | 15 |
| function | fallbackSessionTitle | `export declare function fallbackSessionTitle(input: string, maxWords: number, maxBytes: number): string` | 23 |

## dsh-session-title/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 10 |
| type | SessionTitleProviderId | `export type SessionTitleProviderId` | 14 |
| interface | SessionTitleModelProvenance | `export interface SessionTitleModelProvenance` | 16 |
| type | SessionTitleSource | `export type SessionTitleSource` | 23 |
| interface | SessionTitleEventData | `export interface SessionTitleEventData` | 34 |
| interface | SessionTitleSnapshot | `export interface SessionTitleSnapshot extends SessionTitleEventData` | 43 |
| type | TitleProjection | `export type TitleProjection` | 50 |
| interface | SessionTitleUserMessage | `export interface SessionTitleUserMessage` | 52 |
| interface | TitleInputState | `export interface TitleInputState` | 59 |

