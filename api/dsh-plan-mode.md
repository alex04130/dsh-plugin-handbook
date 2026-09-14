# dsh-plan-mode

> Logged per-agent plan mode with deployment guidance, a direct slash command, and a user-reviewed exit
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-plan-mode/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | EXIT_PLAN_MODE | `export declare const EXIT_PLAN_MODE = "exit_plan_mode"` | 50 |
| interface | PlanModeConfig | `export interface PlanModeConfig` | 52 |
| function | resolveConfig | `export declare function resolveConfig(config: PlanModeConfig): PlanModeConfig` | 63 |
| const | planProjectionDefinition | `export declare const planProjectionDefinition: {` | 65 |
| class | PlanModeController | `export declare class PlanModeController extends Service` | 89 |
| method | PlanModeController.constructor | `constructor(ctx: Context, config?: PlanModeConfig);` | 99 |
| default | PlanModeController | `export default PlanModeController;` | 138 |

## dsh-plan-mode/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "plan-mode-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-plan-mode/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PlanProjection | `export interface PlanProjection` | 19 |
| interface | PlanUnitState | `export interface PlanUnitState` | 24 |

