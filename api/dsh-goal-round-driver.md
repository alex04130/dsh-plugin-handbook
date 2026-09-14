# dsh-goal-round-driver

> Race-fenced same-session goal-round driver
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-goal-round-driver/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { renderGoalRoundPrompt } | `export { renderGoalRoundPrompt } from './prompt.ts';` | 6 |
| const | name | `export declare const name = "goal-round-driver"` | 7 |
| const | inject | `export declare const inject: string[]` | 8 |
| function | apply | `export declare function apply(ctx: Context): void` | 10 |

## dsh-goal-round-driver/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "goal-round-driver-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-goal-round-driver/lib/types/prompt.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | renderGoalRoundPrompt | `export declare function renderGoalRoundPrompt(goal: GoalView, round: number): ContentBlock[]` | 10 |

