# dsh-session-persistence

> Abstract durable session persistence seam (ctx.sessionPersistence) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-persistence/lib/types/errors.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionPersistenceNotFoundError | `export declare class SessionPersistenceNotFoundError extends Error` | 10 |
| method | SessionPersistenceNotFoundError.constructor | `constructor(sessionId: SessionId);` | 13 |
| class | SessionAlreadyExistsError | `export declare class SessionAlreadyExistsError extends Error` | 16 |
| method | SessionAlreadyExistsError.constructor | `constructor(sessionId: SessionId);` | 19 |
| class | SessionAlreadyOwnedError | `export declare class SessionAlreadyOwnedError extends Error` | 22 |
| method | SessionAlreadyOwnedError.constructor | `constructor(sessionId: SessionId);` | 25 |
| class | SessionReadOnlyError | `export declare class SessionReadOnlyError extends Error` | 28 |
| method | SessionReadOnlyError.constructor | `constructor(sessionId: SessionId, operation: string);` | 34 |
| class | SessionOwnershipLostError | `export declare class SessionOwnershipLostError extends Error` | 44 |
| method | SessionOwnershipLostError.constructor | `constructor(sessionId: SessionId);` | 47 |
| class | SessionHandleClosedError | `export declare class SessionHandleClosedError extends Error` | 50 |
| method | SessionHandleClosedError.constructor | `constructor(sessionId: SessionId, operation: string);` | 56 |
| interface | SessionLocation | `export interface SessionLocation` | 64 |
| class | SessionPersistenceCorruptionError | `export declare class SessionPersistenceCorruptionError extends Error` | 71 |
| method | SessionPersistenceCorruptionError.constructor | `constructor(message: string, options: ErrorOptions);` | 76 |
| class | SessionFormatUnsupportedError | `export declare class SessionFormatUnsupportedError extends Error` | 85 |
| method | SessionFormatUnsupportedError.constructor | `constructor(message: string, location?: SessionLocation \| undefined);` | 92 |
| function | sessionFormatVersionRefusal | `export declare function sessionFormatVersionRefusal(id: string, version: number): string` | 104 |

## dsh-session-persistence/lib/types/handle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionAccess | `export type SessionAccess` | 12 |
| interface | SessionHandleReadOptions | `export interface SessionHandleReadOptions` | 14 |
| interface | SessionHandleReadResult | `export interface SessionHandleReadResult` | 19 |
| interface | SessionHandleAppendOptions | `export interface SessionHandleAppendOptions` | 29 |
| interface | SessionHandleFlushOptions | `export interface SessionHandleFlushOptions` | 34 |
| interface | SessionHandle | `export interface SessionHandle extends AsyncDisposable` | 52 |

## dsh-session-persistence/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SessionPersistenceRevision } | `export { SessionPersistenceRevision } from './revision.ts';` | 13 |
| re-export | { SessionAlreadyExistsError, SessionAlre | `export { SessionAlreadyExistsError, SessionAlreadyOwnedError, SessionFormatUnsupportedError, SessionHandleClosedError, SessionOwnershipLostError, SessionPersist` | 15 |
| re-export | { assertContiguous, assertStoredId, asse | `export { assertContiguous, assertStoredId, assertVersion, materializeAppendBatch, materializeCreateHeader, validateStoredEvents, } from './storage-contract.ts';` | 17 |
| interface | SessionPersistenceSnapshot | `export interface SessionPersistenceSnapshot` | 22 |
| interface | SessionPersistenceCreateOptions | `export interface SessionPersistenceCreateOptions` | 33 |
| interface | SessionStorageMetadata | `export interface SessionStorageMetadata` | 48 |
| interface | SessionInspection | `export interface SessionInspection extends SessionStorageMetadata` | 55 |
| interface | SessionPersistenceOpenOptions | `export interface SessionPersistenceOpenOptions` | 60 |
| interface | SessionPersistenceStatOptions | `export interface SessionPersistenceStatOptions` | 65 |
| interface | SessionPersistenceListOptions | `export interface SessionPersistenceListOptions` | 70 |
| class | SessionPersistence | `export declare abstract class SessionPersistence extends Service` | 99 |
| method | SessionPersistence.constructor | `constructor(ctx: Context);` | 100 |
| default | SessionPersistence | `export default SessionPersistence;` | 157 |

## dsh-session-persistence/lib/types/revision.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionPersistenceRevision | `export type SessionPersistenceRevision` | 7 |
| function | SessionPersistenceRevision | `export declare function SessionPersistenceRevision(value: string): SessionPersistenceRevision` | 13 |

## dsh-session-persistence/lib/types/storage-contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertStoredId | `export declare function assertStoredId(id: SessionId, meta: SessionHeader): void` | 14 |
| function | assertVersion | `export declare function assertVersion(meta: {` | 20 |
| function | validateStoredEvents | `export declare function validateStoredEvents(meta: SessionHeader, events: SessionEvent[], location?: SessionLocation): SessionEvent[]` | 38 |
| function | materializeCreateHeader | `export declare function materializeCreateHeader(header: SessionHeader): SessionHeader` | 45 |
| function | materializeAppendBatch | `export declare function materializeAppendBatch(events: readonly SessionEvent[]): readonly SessionEvent[]` | 54 |
| function | assertContiguous | `export declare function assertContiguous(id: SessionId, events: readonly SessionEvent[], cursor: number): void` | 61 |

