# dsh-time-context

> Opt-in durable per-step context with the current time and elapsed time
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-time-context/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "time-context"` | 11 |
| const | timeContextStateSchema | `declare const timeContextStateSchema: zod.ZodObject<{` | 18 |
| type | TimeContextProjection | `type TimeContextProjection` | 24 |
| const | inject | `export declare const inject: string[]` | 26 |
| interface | Config | `export interface Config` | 28 |
| const | Config | `export declare const Config: z<Config>` | 35 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 42 |
| export-list |  | `export {};` | 43 |

## dsh-time-context/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "time-context-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-time-context/lib/types/request-zone.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | BrowserTimeZoneContext | `export type BrowserTimeZoneContext` | 4 |
| function | deriveBrowserTimeZoneContext | `export declare function deriveBrowserTimeZoneContext(messages: readonly UserMessage[]): BrowserTimeZoneContext` | 19 |
| function | renderBrowserTimeZoneContext | `export declare function renderBrowserTimeZoneContext(context: BrowserTimeZoneContext): string` | 25 |

## dsh-time-context/lib/types/timestamp.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createTimestampFormatter | `export declare function createTimestampFormatter(timeZone?: string): Intl.DateTimeFormat` | 7 |
| function | formatTimestamp | `export declare function formatTimestamp(now: number, formatter: Intl.DateTimeFormat, timeZone: string): string` | 15 |

