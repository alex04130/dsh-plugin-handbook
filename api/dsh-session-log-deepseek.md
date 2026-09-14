# dsh-session-log-deepseek

> Incremental lossless session-log request extension for the official DeepSeek LLM API
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-log-deepseek/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "session-log-deepseek"` | 12 |
| const | inject | `export declare const inject: string[]` | 14 |
| interface | Config | `export interface Config` | 16 |
| const | Config | `export declare const Config: z<Config>` | 21 |
| function | acceptedThrough | `export declare function acceptedThrough(session: Session): SessionSeqCursor` | 27 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 33 |

## dsh-session-log-deepseek/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "session-log-deepseek-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-session-log-deepseek/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DeepSeekSessionLogWireHeader | `export interface DeepSeekSessionLogWireHeader` | 5 |
| type | DeepSeekSessionLogWireSurfaceOp | `export type DeepSeekSessionLogWireSurfaceOp` | 18 |
| type | DeepSeekSessionLogWireEvent | `export type DeepSeekSessionLogWireEvent` | 28 |
| interface | DeepSeekSessionLogExtension | `export interface DeepSeekSessionLogExtension` | 56 |

