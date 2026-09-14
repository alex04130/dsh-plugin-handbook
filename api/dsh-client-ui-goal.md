# dsh-client-ui-goal

> Session goal surface: GoalBar docked above the composer, read from the goal session projection
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-goal/lib/types/client/GoalBar.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GoalBarProps | `export interface GoalBarProps extends GoalBarActions` | 13 |
| function | GoalBar | `export declare function GoalBar({ goal, activation, onEdit, onPause, onResume, onClear, t }: GoalBarProps & PropsLocale<'goal'>): import("react").JSX.Element \|` | 19 |
| type | GoalDockProps | `export type GoalDockProps` | 21 |
| function | GoalDock | `export declare function GoalDock({ useProjection, useGoalActivation, onEdit, onPause, onResume, onClear, t, }: GoalDockProps): import("react").JSX.Element` | 23 |

## dsh-client-ui-goal/lib/types/client/GoalCommandInputView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | GoalCommandInputViewProps | `type GoalCommandInputViewProps` | 2 |
| const | GoalCommandInputView | `export declare const GoalCommandInputView: import("react").MemoExoticComponent<({ node, t, }: GoalCommandInputViewProps) => import("react").JSX.Element>` | 9 |
| export-list |  | `export {};` | 10 |

## dsh-client-ui-goal/lib/types/client/activation-source.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GoalActivationDeps | `export interface GoalActivationDeps` | 7 |
| function | createGoalActivationSource | `export declare function createGoalActivationSource(deps: GoalActivationDeps): HostObservable<GoalActivationSnapshot>` | 28 |

## dsh-client-ui-goal/lib/types/client/goal-command-input.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | GOAL_COMMAND | `export declare const GOAL_COMMAND = "goal"` | 5 |
| interface | GoalCommandInputData | `export interface GoalCommandInputData` | 7 |
| interface | GoalCommandInputState | `interface GoalCommandInputState extends GoalCommandInputData` | 18 |
| function | goalCommandText | `export declare function goalCommandText(event: SessionEvent<'command/run'>): string` | 26 |
| const | goalCommandInputDefinition | `export declare const goalCommandInputDefinition: ConversationNodeDefinition<GoalCommandInputState>` | 28 |
| export-list |  | `export {};` | 29 |

## dsh-client-ui-goal/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { GoalBar, GoalDock } | `export { GoalBar, GoalDock } from './GoalBar.tsx';` | 11 |
| const | inject | `export declare const inject: string[]` | 21 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 26 |

## dsh-client-ui-goal/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | GoalKey | `export type GoalKey` | 18 |
| const | en | `export declare const en: {` | 20 |

## dsh-client-ui-goal/lib/types/client/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GoalLocalFailure | `export interface GoalLocalFailure` | 16 |
| type | GoalActionResult | `export type GoalActionResult` | 28 |
| interface | GoalActivationSnapshot | `export interface GoalActivationSnapshot` | 30 |
| interface | GoalActivationInjected | `export interface GoalActivationInjected` | 39 |
| interface | GoalBarActions | `export interface GoalBarActions` | 45 |
| type | GoalBarInjected | `export type GoalBarInjected` | 59 |

## dsh-client-ui-goal/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

