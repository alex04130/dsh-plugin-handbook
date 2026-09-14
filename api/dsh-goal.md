# dsh-goal

> Event-sourced same-session goal state and lifecycle service for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-goal/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-goal/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 42 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 43 |

## dsh-goal/lib/types/domain.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | GoalOperation | `export type GoalOperation` | 12 |
| interface | GoalSnapshotChangeMeta | `export interface GoalSnapshotChangeMeta` | 14 |
| interface | GoalClearChangeMeta | `export interface GoalClearChangeMeta` | 24 |
| type | GoalChangeMeta | `export type GoalChangeMeta` | 32 |
| interface | GoalMessageSource | `export interface GoalMessageSource` | 34 |
| interface | FoldedGoal | `export interface FoldedGoal` | 55 |
| interface | GoalChanged | `export interface GoalChanged` | 68 |
| type | GoalErrorCode | `export type GoalErrorCode` | 75 |

## dsh-goal/lib/types/fold.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GoalFoldState | `export interface GoalFoldState` | 6 |
| function | emptyGoalFoldState | `export declare function emptyGoalFoldState(): GoalFoldState` | 18 |
| function | decodeGoalChange | `export declare function decodeGoalChange(value: unknown): GoalChangeMeta \| undefined` | 25 |
| function | goalChangeRef | `export declare function goalChangeRef(change: GoalChangeMeta): GoalRef` | 31 |
| function | applyGoalChange | `export declare function applyGoalChange(state: GoalFoldState, change: GoalChangeMeta): void` | 37 |
| function | applyGoalEvent | `export declare function applyGoalEvent(state: GoalFoldState, event: SessionEvent): void` | 43 |
| function | foldGoal | `export declare function foldGoal(events: readonly SessionEvent[]): FoldedGoal` | 49 |

## dsh-goal/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { GOAL_CHANGE_VERSION, GoalError, GoalId | `export { GOAL_CHANGE_VERSION, GoalError, GoalId } from './runtime.ts';` | 15 |
| re-export | { decodeGoalChange, foldGoal, goalChange | `export { decodeGoalChange, foldGoal, goalChangeRef } from './fold.ts';` | 16 |
| function | applyGoalProjection | `export declare function applyGoalProjection(state: GoalProjectionState, event: SessionEvent): GoalProjectionState` | 31 |
| const | goalProjectionDefinition | `export declare const goalProjectionDefinition: {` | 33 |
| interface | Config | `export interface Config` | 45 |
| interface | ResolvedConfig | `export interface ResolvedConfig` | 50 |
| class | GoalService | `export declare class GoalService extends TypertRemoteService` | 55 |
| method | GoalService.constructor | `constructor(ctx: Context, config?: Config);` | 60 |
| default | GoalService | `export default GoalService;` | 165 |

## dsh-goal/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "goal-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-goal/lib/types/runtime.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | GOAL_CHANGE_VERSION | `export declare const GOAL_CHANGE_VERSION = 1` | 6 |
| function | GoalId | `export declare function GoalId(id: string): GoalIdType` | 12 |
| class | GoalError | `export declare class GoalError extends HarnessError` | 14 |
| method | GoalError.constructor | `constructor(message: string, code: GoalErrorCode);` | 19 |

## dsh-goal/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | GoalId | `export type GoalId` | 15 |
| interface | GoalRef | `export interface GoalRef` | 17 |
| interface | CreateGoalRequest | `export interface CreateGoalRequest` | 24 |
| interface | CreateGoalResult | `export interface CreateGoalResult` | 29 |
| interface | EditGoalRequest | `export interface EditGoalRequest` | 33 |
| type | GoalPhase | `export type GoalPhase` | 38 |
| interface | GoalBlockReason | `export interface GoalBlockReason` | 40 |
| interface | GoalSnapshot | `export interface GoalSnapshot extends GoalRef` | 47 |
| type | GoalActivation | `export type GoalActivation` | 58 |
| interface | GoalActivationChanged | `export interface GoalActivationChanged` | 60 |
| interface | GoalView | `export interface GoalView extends GoalSnapshot` | 74 |
| interface | GoalProjection | `export interface GoalProjection` | 90 |
| interface | GoalProjectionState | `export interface GoalProjectionState` | 101 |

