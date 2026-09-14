# dsh-session-stats

> Whole-log conversation counts and wall times projection (sessionStats) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-stats/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "session-stats"` | 14 |
| const | inject | `export declare const inject: string[]` | 16 |
| function | apply | `export declare function apply(ctx: Context): void` | 22 |

## dsh-session-stats/lib/types/projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionStatsTotals | `interface SessionStatsTotals` | 27 |
| interface | SessionStatsState | `interface SessionStatsState extends SessionStatsTotals` | 51 |
| const | sessionStatsProjectionDefinition | `export declare const sessionStatsProjectionDefinition: {` | 70 |
| export-list |  | `export {};` | 128 |

## dsh-session-stats/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 10 |
| interface | SessionStatsProjection | `export interface SessionStatsProjection` | 18 |

