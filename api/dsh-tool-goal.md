# dsh-tool-goal

> Model-facing same-session goal tools with execution-time authority checks
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-goal/lib/types/authority.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GoalToolExecution | `export interface GoalToolExecution` | 8 |
| type | GoalToolAuthority | `export type GoalToolAuthority` | 14 |
| function | goalToolExecution | `export declare function goalToolExecution(ctx: Context, exec: ToolRunContext): GoalToolExecution` | 26 |
| function | requireDirectHuman | `export declare function requireDirectHuman(ctx: Context, execution: GoalToolExecution): void` | 32 |
| function | completionAuthority | `export declare function completionAuthority(ctx: Context, execution: GoalToolExecution): GoalToolAuthority` | 39 |

## dsh-tool-goal/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-goal"` | 8 |
| const | inject | `export declare const inject: string[]` | 9 |
| interface | Config | `export interface Config` | 11 |
| const | Config | `export declare const Config: z<Config>` | 16 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 18 |

## dsh-tool-goal/lib/types/wrapup.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | renderWrapupContext | `export declare function renderWrapupContext(objective: string, blockedReason?: string): ContentBlock[]` | 11 |

