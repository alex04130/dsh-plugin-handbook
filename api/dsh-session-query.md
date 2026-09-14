# dsh-session-query

> Combined session query service contract with concrete reads, traces, and filters
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-query/lib/types/cold-read.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ColdSessionLog | `export interface ColdSessionLog` | 5 |
| function | readColdSessionLog | `export declare function readColdSessionLog(persistence: SessionPersistence, sessionId: SessionId, signal?: AbortSignal): Promise<ColdSessionLog>` | 26 |

## dsh-session-query/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SESSION_QUERY_READ_WINDOW_MAX | `export declare const SESSION_QUERY_READ_WINDOW_MAX = 50` | 4 |
| const | SESSION_QUERY_DEFAULT_PERSISTED_INSPECT_CONCURRENCY | `export declare const SESSION_QUERY_DEFAULT_PERSISTED_INSPECT_CONCURRENCY = 4` | 6 |
| const | SESSION_QUERY_DEFAULT_PREPARED_SESSION_CACHE_SIZE | `export declare const SESSION_QUERY_DEFAULT_PREPARED_SESSION_CACHE_SIZE = 5` | 8 |
| interface | Config | `export interface Config` | 10 |
| type | SessionQueryErrorCode | `export type SessionQueryErrorCode` | 23 |
| class | SessionQueryError | `export declare class SessionQueryError extends HarnessError` | 25 |
| method | SessionQueryError.constructor | `constructor(message: string, code: SessionQueryErrorCode, options?: ErrorOptions);` | 27 |

## dsh-session-query/lib/types/corpus.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LogicalSession | `export interface LogicalSession` | 6 |
| interface | LogicalSessionSource | `export interface LogicalSessionSource` | 15 |
| type | LogicalProjectionResult | `export type LogicalProjectionResult<Value>` | 22 |
| class | SessionCorpus | `export declare class SessionCorpus` | 32 |
| method | SessionCorpus.constructor | `constructor(_ctx: Context, _persistedReadConcurrency: number);` | 37 |

## dsh-session-query/lib/types/cursor.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionSearchCursor | `export type SessionSearchCursor` | 4 |
| function | SessionSearchCursor | `export declare function SessionSearchCursor(value: string): SessionSearchCursor` | 10 |

## dsh-session-query/lib/types/documents.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | buildSessionEventRecords | `export declare function buildSessionEventRecords(sessionId: SessionId, events: readonly SessionEvent[]): SessionEventRecord[]` | 10 |
| function | buildSessionEventSearchDocuments | `export declare function buildSessionEventSearchDocuments(sessionId: SessionId, events: readonly SessionEvent[]): SessionEventSearchDocument[]` | 17 |

## dsh-session-query/lib/types/extraction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | extractSessionEventText | `export declare function extractSessionEventText(event: SessionEvent): string` | 11 |

## dsh-session-query/lib/types/filters.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | filterSessionResults | `export declare function filterSessionResults<T extends SessionRecord>(records: readonly T[], filters?: readonly SessionResultFilter[]): T[]` | 9 |
| function | filterSessionEventDocuments | `export declare function filterSessionEventDocuments<T extends SessionEventSearchDocument>(documents: readonly T[], filters?: readonly SessionEventResultFilter[]` | 16 |
| function | materializeSessionResultFilters | `export declare function materializeSessionResultFilters(filters: readonly SessionResultFilter[]): SessionResultFilter[]` | 22 |
| function | materializeSessionEventResultFilters | `export declare function materializeSessionEventResultFilters(filters: readonly SessionEventResultFilter[]): SessionEventResultFilter[]` | 28 |
| function | compileSessionTextFilter | `export declare function compileSessionTextFilter(text: string): RegExp` | 34 |

## dsh-session-query/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SessionSearchCursor } | `export { SessionSearchCursor } from './cursor.ts';` | 13 |
| re-export | { SESSION_QUERY_DEFAULT_PERSISTED_INSPEC | `export { SESSION_QUERY_DEFAULT_PERSISTED_INSPECT_CONCURRENCY, SESSION_QUERY_DEFAULT_PREPARED_SESSION_CACHE_SIZE, SESSION_QUERY_READ_WINDOW_MAX, SessionQueryErro` | 15 |
| re-export | { readColdSessionLog } | `export { readColdSessionLog } from './cold-read.ts';` | 16 |
| re-export | { extractSessionEventText } | `export { extractSessionEventText } from './extraction.ts';` | 18 |
| re-export | { buildSessionEventRecords, buildSession | `export { buildSessionEventRecords, buildSessionEventSearchDocuments } from './documents.ts';` | 19 |
| re-export | { compileSessionTextFilter, filterSessio | `export { compileSessionTextFilter, filterSessionEventDocuments, filterSessionResults, materializeSessionEventResultFilters, materializeSessionResultFilters, } f` | 20 |
| re-export | { assertSessionHeadersCompatible } | `export { assertSessionHeadersCompatible } from './sources.ts';` | 21 |
| class | SessionQueryEngine | `export declare abstract class SessionQueryEngine extends Service` | 35 |
| method | SessionQueryEngine.constructor | `constructor(ctx: Context, config?: Config);` | 40 |
| default | SessionQueryEngine | `export default SessionQueryEngine;` | 154 |

## dsh-session-query/lib/types/observation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionObservation | `export interface SessionObservation extends Disposable` | 7 |
| interface | SessionObservationOptions | `export interface SessionObservationOptions` | 33 |
| class | SessionObservationReader | `export declare class SessionObservationReader` | 49 |
| method | SessionObservationReader.constructor | `constructor(ctx: Context, cacheCapacity?: number);` | 57 |

## dsh-session-query/lib/types/sources.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertSessionHeadersCompatible | `export declare function assertSessionHeadersCompatible(a: SessionHeader, b: SessionHeader): void` | 8 |

## dsh-session-query/lib/types/tracing.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | eventRecords | `export declare function eventRecords(sessionId: SessionId, events: readonly SessionEvent[]): SessionEventRecord[]` | 10 |
| function | currentSurfaceEvents | `export declare function currentSurfaceEvents(sessionId: SessionId, events: readonly SessionEvent[]): SurfaceEvent[]` | 17 |
| function | traceEvent | `export declare function traceEvent(sessionId: SessionId, events: readonly SessionEvent[], seq: SessionSeq): SessionEventTrace` | 25 |
| function | traceSession | `export declare function traceSession(records: readonly SessionRecord[], sessionId: SessionId): SessionLineageTrace` | 32 |

## dsh-session-query/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionEventSurface | `export type SessionEventSurface` | 12 |
| interface | SessionRecord | `export interface SessionRecord` | 14 |
| interface | SessionSurfaceSnapshot | `export interface SessionSurfaceSnapshot` | 23 |
| interface | SessionLogSnapshot | `export interface SessionLogSnapshot` | 34 |
| interface | SessionEventRecord | `export interface SessionEventRecord` | 43 |
| interface | SessionLineageNode | `export interface SessionLineageNode` | 56 |
| type | SessionLineageTrace | `export type SessionLineageTrace` | 63 |
| interface | SessionEventTraceRequest | `export interface SessionEventTraceRequest` | 82 |
| interface | SessionEventTrace | `export interface SessionEventTrace` | 89 |
| interface | SessionEventTraceObservation | `export interface SessionEventTraceObservation extends SessionEventTrace` | 104 |
| interface | SessionEventReadRequest | `export interface SessionEventReadRequest` | 109 |
| interface | SessionEventWindow | `export interface SessionEventWindow` | 120 |
| interface | SessionTitleObservation | `export interface SessionTitleObservation` | 135 |
| type | SessionTitleObservationResult | `export type SessionTitleObservationResult` | 142 |
| interface | SessionResultRange | `export interface SessionResultRange` | 158 |
| type | SessionAvailability | `export type SessionAvailability` | 165 |
| type | SessionResultFilter | `export type SessionResultFilter` | 170 |
| type | SessionEventResultFilter | `export type SessionEventResultFilter` | 189 |
| type | SessionEventMetadataFilter | `export type SessionEventMetadataFilter` | 204 |
| interface | SessionEventSearchDocument | `export interface SessionEventSearchDocument extends SessionEventRecord` | 208 |
| interface | SessionSearchPage | `export interface SessionSearchPage<T>` | 213 |
| interface | SessionEventSearchPage | `export interface SessionEventSearchPage extends SessionSearchPage<SessionEventSearchHit>` | 220 |
| interface | SessionSearchExecContext | `export interface SessionSearchExecContext` | 225 |
| interface | SessionSearchRequest | `export interface SessionSearchRequest` | 230 |
| interface | SessionEventSearchRequest | `export interface SessionEventSearchRequest` | 243 |
| interface | SessionEventSearchHit | `export interface SessionEventSearchHit extends SessionEventRecord` | 256 |
| interface | SessionSearchHit | `export interface SessionSearchHit extends SessionRecord` | 261 |

