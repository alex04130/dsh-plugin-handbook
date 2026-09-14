# dsh-session

> Event-sourced session store for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './types.ts';` | 15 |
| re-export | { SessionPreparation } | `export { SessionPreparation } from './preparation.ts';` | 16 |
| re-export | { interruptedTurnClosers, TOOL_NOT_START | `export { interruptedTurnClosers, TOOL_NOT_STARTED, TOOL_OUTCOME_UNKNOWN } from './repair.ts';` | 19 |
| re-export | { deriveEventMessage, foldSurface, isApp | `export { deriveEventMessage, foldSurface, isAppendSurfaceEvent, isReplacementSurfaceEvent, isSurfaceEvent, isSurfaceEligibleType } from './surface.ts';` | 21 |
| re-export | { canonicalHeader, foldRequestHeader, he | `export { canonicalHeader, foldRequestHeader, headerEquals } from './request-header.ts';` | 22 |
| re-export | { KNOWN_SESSION_EVENT_TYPES } | `export { KNOWN_SESSION_EVENT_TYPES } from './known-event-types.ts';` | 23 |
| function | adoptSessionEvent | `export declare function adoptSessionEvent<T extends SessionEvent>(event: T): T` | 88 |
| function | snapshotSessionEvent | `export declare function snapshotSessionEvent<T extends SessionEvent>(event: T): T` | 94 |
| class | Session | `export declare class Session` | 103 |
| type | SessionForkSource | `export type SessionForkSource` | 295 |
| type | SessionForkErrorCode | `export type SessionForkErrorCode` | 304 |
| class | SessionForkError | `export declare class SessionForkError extends Error` | 306 |
| method | SessionForkError.constructor | `constructor(message: string, code: SessionForkErrorCode);` | 308 |
| class | SessionStore | `export declare class SessionStore extends Service` | 317 |
| method | SessionStore.constructor | `constructor(ctx: Context);` | 320 |
| re-export | { decodeSeqRanges, encodeSeqRanges } | `export { decodeSeqRanges, encodeSeqRanges } from './seq-ranges.ts';` | 443 |
| default | SessionStore | `export default SessionStore;` | 444 |

## dsh-session/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "session-invariant"` | 9 |
| const | inject | `export declare const inject: string[]` | 11 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 17 |

## dsh-session/lib/types/known-event-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | KNOWN_SESSION_EVENT_TYPES | `export declare const KNOWN_SESSION_EVENT_TYPES: ReadonlySet<string>` | 21 |

## dsh-session/lib/types/preparation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionPreparationOptions | `export interface SessionPreparationOptions` | 7 |
| class | SessionPreparation | `export declare class SessionPreparation implements Disposable` | 17 |

## dsh-session/lib/types/repair.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TOOL_NOT_STARTED | `export declare const TOOL_NOT_STARTED = "TOOL_NOT_STARTED"` | 9 |
| const | TOOL_OUTCOME_UNKNOWN | `export declare const TOOL_OUTCOME_UNKNOWN = "TOOL_OUTCOME_UNKNOWN"` | 11 |
| function | interruptedTurnClosers | `export declare function interruptedTurnClosers(events: readonly SessionEvent[]): SessionEvent[]` | 21 |

## dsh-session/lib/types/request-header.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | canonicalHeader | `export declare function canonicalHeader(header: EpochHeader): EpochHeader` | 17 |
| function | headerEquals | `export declare function headerEquals(a: EpochHeader, b: EpochHeader): boolean` | 24 |
| function | foldRequestHeader | `export declare function foldRequestHeader(events: readonly SessionEvent[], from?: EpochHeader): EpochHeader \| undefined` | 34 |

## dsh-session/lib/types/seq-ranges.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | EncodedSeq | `export type EncodedSeq` | 4 |
| function | encodeSeqRanges | `export declare function encodeSeqRanges(values: readonly SessionSeqType[]): EncodedSeq[]` | 10 |
| function | decodeSeqRanges | `export declare function decodeSeqRanges(value: unknown, maxEntries?: number): SessionSeqType[]` | 17 |

## dsh-session/lib/types/surface.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isSurfaceEligibleType | `export declare function isSurfaceEligibleType(type: string): boolean` | 18 |
| function | isSurfaceEvent | `export declare function isSurfaceEvent(event: SessionEvent): event is SurfaceEvent` | 24 |
| function | isAppendSurfaceEvent | `export declare function isAppendSurfaceEvent(event: SessionEvent): event is SurfaceEvent & {` | 36 |
| function | isReplacementSurfaceEvent | `export declare function isReplacementSurfaceEvent(event: SessionEvent): event is SurfaceEvent & {` | 46 |
| function | deriveEventMessage | `export declare function deriveEventMessage(event: SessionEvent): Message \| null` | 64 |
| function | validateSessionEventData | `export declare function validateSessionEventData(event: Pick<SessionEvent, 'type' \| 'data'>, subject: string): void` | 72 |
| interface | SurfaceFoldReplacement | `export interface SurfaceFoldReplacement` | 74 |
| interface | SurfaceFoldResult | `export interface SurfaceFoldResult` | 85 |
| interface | SessionSurface | `export interface SessionSurface` | 92 |
| function | validateSurfaceMetadata | `export declare function validateSurfaceMetadata(event: SessionEvent): SurfaceOp \| undefined` | 105 |
| function | foldSurface | `export declare function foldSurface(events: readonly SessionEvent[]): SurfaceFoldResult` | 112 |
| class | SurfaceManager | `export declare class SurfaceManager implements SessionSurface` | 114 |
| method | SurfaceManager.constructor | `constructor(log: readonly SessionEvent[], baseSeq?: SessionLogOffset);` | 127 |

## dsh-session/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionId | `export type SessionId` | 5 |
| function | SessionId | `export declare function SessionId(id: string): SessionId` | 11 |
| type | SessionSeq | `export type SessionSeq` | 13 |
| function | SessionSeq | `export declare function SessionSeq(value: number): SessionSeq` | 19 |
| type | SessionLogOffset | `export type SessionLogOffset` | 21 |
| function | SessionLogOffset | `export declare function SessionLogOffset(value: number): SessionLogOffset` | 27 |
| type | SessionSeqCursor | `export type SessionSeqCursor` | 29 |
| type | OptionalSessionSeq | `export type OptionalSessionSeq` | 31 |
| const | SESSION_FORMAT_VERSION | `export declare const SESSION_FORMAT_VERSION = 3` | 54 |
| interface | SessionHeader | `export interface SessionHeader` | 58 |
| interface | CreateSessionOptions | `export interface CreateSessionOptions` | 101 |
| type | SessionSeedEventState | `export type SessionSeedEventState` | 128 |
| interface | RestoredSessionOptions | `export interface RestoredSessionOptions` | 133 |
| type | PrepareSessionOptions | `export type PrepareSessionOptions` | 144 |
| type | AgentCancelCause | `export type AgentCancelCause` | 148 |
| type | TurnEndCancelCause | `export type TurnEndCancelCause` | 159 |
| interface | TurnEndReasonMap | `export interface TurnEndReasonMap` | 165 |
| type | TurnEndReason | `export type TurnEndReason` | 201 |
| interface | EpochHeader | `export interface EpochHeader` | 208 |
| interface | RequestContext | `export interface RequestContext` | 217 |
| type | RequestHeaderReason | `export type RequestHeaderReason` | 235 |
| interface | SessionEventMap | `export interface SessionEventMap` | 242 |
| type | SessionEventType | `export type SessionEventType` | 406 |
| type | SurfaceEventType | `export type SurfaceEventType` | 413 |
| type | SurfaceEvent | `export type SurfaceEvent` | 415 |
| type | SurfaceOp | `export type SurfaceOp` | 429 |
| type | SurfaceIntent | `export type SurfaceIntent<T extends SurfaceEventType` | 438 |
| type | SessionEvent | `export type SessionEvent<T extends SessionEventType` | 460 |

