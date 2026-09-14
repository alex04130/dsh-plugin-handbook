# dsh-schedule

> Agent-scoped durable after, at, and fixed-rate reminders over the session event log
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-schedule/lib/types/domain.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SCHEDULE_CHANGE_VERSION | `export declare const SCHEDULE_CHANGE_VERSION: 1` | 8 |
| const | MIN_EVERY_INTERVAL_SECONDS | `export declare const MIN_EVERY_INTERVAL_SECONDS = 300` | 10 |
| class | ScheduleLogError | `export declare class ScheduleLogError extends Error` | 12 |
| method | ScheduleLogError.constructor | `constructor(message: string);` | 19 |
| class | ScheduleInputError | `export declare class ScheduleInputError extends Error` | 22 |
| method | ScheduleInputError.constructor | `constructor(code: 'invalid_prompt' \| 'invalid_rule' \| 'invalid_time_zone' \| 'not_future' \| 'time_out_of_range' \| 'frequency_too_high', message: string, opt` | 31 |
| interface | FoldedSchedules | `export interface FoldedSchedules` | 34 |
| interface | EveryOccurrence | `export interface EveryOccurrence` | 41 |
| function | ScheduleId | `export declare function ScheduleId(value: string): ScheduleIdType` | 52 |
| function | canonicalizeTimeZone | `export declare function canonicalizeTimeZone(value: string): string` | 58 |
| function | decodeScheduleChange | `export declare function decodeScheduleChange(value: unknown): ScheduleChange` | 64 |
| function | resolveEveryOccurrence | `export declare function resolveEveryOccurrence(record: EveryScheduleRecord, acceptedAt: number): EveryOccurrence` | 71 |
| function | applyScheduleChanges | `export declare function applyScheduleChanges(folded: FoldedSchedules, changes: Iterable<ScheduleChange>): FoldedSchedules` | 82 |
| function | foldScheduleEvents | `export declare function foldScheduleEvents(events: readonly SessionEvent[], inheritedEventCount?: SessionLogOffsetType): FoldedSchedules` | 89 |
| function | allocateScheduleId | `export declare function allocateScheduleId(folded: FoldedSchedules): ScheduleIdType` | 95 |
| function | createAfterScheduleRecord | `export declare function createAfterScheduleRecord(id: ScheduleIdType, prompt: string, afterSeconds: number, now: number): AfterScheduleRecord` | 104 |
| function | createAtScheduleRecord | `export declare function createAtScheduleRecord(id: ScheduleIdType, prompt: string, at: AtInput, now: number): AtScheduleRecord` | 113 |
| function | createEveryScheduleRecord | `export declare function createEveryScheduleRecord(id: ScheduleIdType, prompt: string, everySeconds: number, now: number): EveryScheduleRecord` | 122 |
| function | scheduleView | `export declare function scheduleView(record: ScheduleRecord, now: number): ScheduleView` | 129 |
| function | renderReminderFraming | `export declare function renderReminderFraming(record: OneShotScheduleRecord): string` | 135 |
| function | renderEveryReminderBatchFraming | `export declare function renderEveryReminderBatchFraming(reminders: readonly {` | 141 |

## dsh-schedule/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SCHEDULE_CHANGE_VERSION, MIN_EVERY_INT | `export { SCHEDULE_CHANGE_VERSION, MIN_EVERY_INTERVAL_SECONDS, ScheduleId, ScheduleInputError, ScheduleLogError, allocateScheduleId, createAfterScheduleRecord, c` | 7 |
| re-export | { registerScheduleTools } | `export { registerScheduleTools } from './tools.ts';` | 8 |
| const | name | `export declare const name = "schedule"` | 10 |
| const | inject | `export declare const inject: string[]` | 12 |
| function | apply | `export declare function apply(ctx: Context): void` | 14 |

## dsh-schedule/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-schedule-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-schedule/lib/types/persistence.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SchedulePersistenceError | `export declare class SchedulePersistenceError extends Error` | 5 |
| method | SchedulePersistenceError.constructor | `constructor(cause?: unknown);` | 10 |
| function | flushSchedulePersistence | `export declare function flushSchedulePersistence(ctx: Context, session: Session): Promise<void>` | 18 |

## dsh-schedule/lib/types/projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ScheduleProjectionState | `export interface ScheduleProjectionState extends FoldedSchedules` | 11 |
| const | scheduleProjectionDefinition | `export declare const scheduleProjectionDefinition: {` | 15 |

## dsh-schedule/lib/types/runtime.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MAX_TIMER_DELAY_MS | `export declare const MAX_TIMER_DELAY_MS = 2147483647` | 8 |
| class | ScheduleRuntime | `export declare class ScheduleRuntime` | 10 |
| method | ScheduleRuntime.constructor | `constructor(ctx: Context, agent: Agent);` | 26 |

## dsh-schedule/lib/types/tools.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerScheduleTools | `export declare function registerScheduleTools(rootCtx: Context, toolCtx: Context, agent: Agent, onDurableChange: () => void): () => void` | 15 |

## dsh-schedule/lib/types/transaction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | runScheduleTransaction | `export declare function runScheduleTransaction<T>(agent: Agent, operation: () => Promise<T>): Promise<T>` | 9 |

## dsh-schedule/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ScheduleId | `export type ScheduleId` | 7 |
| interface | AfterScheduleRecord | `export interface AfterScheduleRecord` | 9 |
| interface | AtScheduleRecord | `export interface AtScheduleRecord` | 22 |
| interface | EveryScheduleRecord | `export interface EveryScheduleRecord` | 33 |
| interface | LocalAtInput | `export interface LocalAtInput` | 46 |
| type | AtInput | `export type AtInput` | 55 |
| type | OneShotScheduleRecord | `export type OneShotScheduleRecord` | 57 |
| type | ScheduleRecord | `export type ScheduleRecord` | 59 |
| interface | ScheduleCreateChange | `export interface ScheduleCreateChange` | 61 |
| interface | ScheduleDeleteChange | `export interface ScheduleDeleteChange` | 67 |
| interface | OneShotScheduleDispatchChange | `export interface OneShotScheduleDispatchChange` | 73 |
| interface | EveryScheduleDispatchChange | `export interface EveryScheduleDispatchChange` | 79 |
| type | ScheduleDispatchChange | `export type ScheduleDispatchChange` | 87 |
| type | ScheduleChange | `export type ScheduleChange` | 89 |
| type | ScheduleState | `export type ScheduleState` | 91 |
| type | ScheduleDeliveryMode | `export type ScheduleDeliveryMode` | 93 |
| type | ScheduleView | `export type ScheduleView` | 95 |
| type | SchedulePersistenceOperation | `export type SchedulePersistenceOperation` | 102 |
| interface | InvalidPromptError | `export interface InvalidPromptError` | 104 |
| interface | InvalidSelectorError | `export interface InvalidSelectorError` | 109 |
| interface | InvalidRuleError | `export interface InvalidRuleError` | 114 |
| interface | InvalidTimeZoneError | `export interface InvalidTimeZoneError` | 119 |
| interface | NotFutureError | `export interface NotFutureError` | 124 |
| interface | TimeOutOfRangeError | `export interface TimeOutOfRangeError` | 129 |
| interface | FrequencyTooHighError | `export interface FrequencyTooHighError` | 134 |
| interface | CorruptScheduleLogError | `export interface CorruptScheduleLogError` | 139 |
| interface | PersistenceUncertainError | `export interface PersistenceUncertainError` | 144 |
| interface | InternalScheduleError | `export interface InternalScheduleError` | 151 |
| type | ScheduleToolError | `export type ScheduleToolError` | 156 |
| type | ScheduleCreateValue | `export type ScheduleCreateValue` | 158 |
| type | ScheduleListValue | `export type ScheduleListValue` | 160 |
| type | ScheduleDeleteResult | `export type ScheduleDeleteResult` | 162 |
| type | ScheduleDeleteValue | `export type ScheduleDeleteValue` | 171 |

