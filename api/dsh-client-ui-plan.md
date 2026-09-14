# dsh-client-ui-plan

> Plan-mode composer control: the conversation.input.plan seat over the plan projection and the /plan command channel
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-plan/lib/types/client/PlanModeControl.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PlanChipProps | `export type PlanChipProps` | 4 |
| function | PlanChip | `export declare function PlanChip({ useProjection, locked, exitPlanMode, t }: PlanChipProps): import("react").JSX.Element \| null` | 10 |

## dsh-client-ui-plan/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PlanChipInjected | `export interface PlanChipInjected` | 11 |
| const | inject | `export declare const inject: string[]` | 19 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 24 |

## dsh-client-ui-plan/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | PlanKey | `export type PlanKey` | 12 |
| const | en | `export declare const en: {` | 14 |

## dsh-client-ui-plan/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 10 |

