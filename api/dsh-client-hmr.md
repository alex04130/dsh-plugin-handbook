# dsh-client-hmr

> Dev-only hot-reload driver for script-loaded client entries: SSE rebuilt frames → invalidate/prefetch → fiber swap through the vendored Loader entry
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-hmr/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { EVENTS_ENDPOINT } | `export { EVENTS_ENDPOINT } from '../events.ts';` | 66 |
| const | name | `export declare const name = "client-hmr"` | 68 |
| const | inject | `export declare const inject: string[]` | 70 |
| function | apply | `export declare function apply(ctx: Context): void` | 76 |

## dsh-client-hmr/lib/types/events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PluginsEventFrame | `export type PluginsEventFrame` | 9 |
| type | PluginsEventParseResult | `export type PluginsEventParseResult` | 18 |
| function | parsePluginsEventFrame | `export declare function parsePluginsEventFrame(value: unknown): PluginsEventParseResult` | 31 |
| const | EVENTS_ENDPOINT | `export declare const EVENTS_ENDPOINT = "/plugins/events"` | 33 |

## dsh-client-hmr/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { EVENTS_ENDPOINT } | `export { EVENTS_ENDPOINT } from './events.ts';` | 4 |
| const | name | `export declare const name = "client-hmr"` | 6 |
| const | inject | `export declare const inject: string[]` | 8 |
| interface | Config | `export interface Config` | 10 |
| const | Config | `export declare const Config: z<Config>` | 14 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 20 |

## dsh-client-hmr/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "client-hmr-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

