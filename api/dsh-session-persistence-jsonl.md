# dsh-session-persistence-jsonl

> JSONL durable session persistence backend for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-persistence-jsonl/lib/types/format.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | JsonlCompression | `export type JsonlCompression` | 13 |
| function | logSuffix | `export declare function logSuffix(compression: JsonlCompression): '.jsonl.zstd' \| '.jsonl'` | 19 |
| function | generationLogFilename | `export declare function generationLogFilename(version: number, compression: JsonlCompression): string` | 28 |
| function | parseGenerationLogFilename | `export declare function parseGenerationLogFilename(filename: string, compression: JsonlCompression): number \| undefined` | 37 |
| interface | HeaderLine | `interface HeaderLine` | 42 |
| function | assertNoRetiredHeaderFields | `export declare function assertNoRetiredHeaderFields(value: unknown): void` | 59 |
| function | toHeaderLine | `export declare function toHeaderLine(header: SessionHeader, inheritedEventCount?: SessionLogOffsetType): HeaderLine` | 67 |
| function | encodeSegment | `export declare function encodeSegment(raw: string): string` | 79 |
| function | projectKey | `export declare function projectKey(cwd: string): string` | 89 |
| function | projectDir | `export declare function projectDir(root: string, cwd: string \| undefined): string` | 97 |
| function | sessionDir | `export declare function sessionDir(root: string, cwd: string \| undefined, id: SessionId): string` | 106 |
| function | generationLogPath | `export declare function generationLogPath(root: string, cwd: string \| undefined, id: SessionId, version: number, compression: JsonlCompression): string` | 116 |
| function | logPath | `export declare function logPath(root: string, cwd: string \| undefined, id: SessionId, compression: JsonlCompression): string` | 125 |
| function | eventLines | `export declare function eventLines(events: readonly SessionEvent[]): string` | 132 |
| function | eventLine | `export declare function eventLine(event: SessionEvent): string` | 138 |
| interface | SessionLogScan | `interface SessionLogScan` | 139 |
| class | SessionLogScanner | `export declare class SessionLogScanner` | 151 |
| method | SessionLogScanner.constructor | `constructor(headerRecord: Buffer, recovery?: SessionFormatRecovery);` | 167 |
| function | scanLog | `export declare function scanLog(buffer: Buffer): SessionLogScan` | 198 |
| export-list |  | `export {};` | 199 |

## dsh-session-persistence-jsonl/lib/types/generation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | JsonlGenerationFormatAdapter | `export interface JsonlGenerationFormatAdapter` | 14 |
| interface | PrepareJsonlMigrationOptions | `export interface PrepareJsonlMigrationOptions` | 26 |
| interface | JsonlVerifiedGeneration | `export interface JsonlVerifiedGeneration` | 42 |
| interface | JsonlExpectedPrefix | `export interface JsonlExpectedPrefix` | 48 |
| class | JsonlGenerationSourceChangedError | `export declare class JsonlGenerationSourceChangedError extends Error` | 53 |
| method | JsonlGenerationSourceChangedError.constructor | `constructor(path: string);` | 57 |
| interface | PreparedJsonlMigration | `export interface PreparedJsonlMigration` | 60 |
| class | JsonlGenerationUnsupportedMigrationError | `export declare class JsonlGenerationUnsupportedMigrationError extends Error` | 67 |
| method | JsonlGenerationUnsupportedMigrationError.constructor | `constructor(fromVersion: number, reason: Error);` | 75 |
| class | JsonlGenerationTargetConflictError | `export declare class JsonlGenerationTargetConflictError extends Error` | 78 |
| method | JsonlGenerationTargetConflictError.constructor | `constructor(path: string, reason: Error);` | 86 |
| interface | JsonlPhysicalIdentity | `export interface JsonlPhysicalIdentity` | 89 |
| interface | StablePhysicalFile | `export interface StablePhysicalFile` | 97 |
| interface | GenerationFileSystem | `interface GenerationFileSystem` | 101 |
| type | GenerationBarrierPhase | `type GenerationBarrierPhase` | 113 |
| interface | JsonlGenerationInternals | `interface JsonlGenerationInternals` | 114 |
| type | JsonlGenerationRuntimeOverrides | `export type JsonlGenerationRuntimeOverrides` | 122 |
| interface | JsonlGenerationRuntime | `export interface JsonlGenerationRuntime` | 126 |
| function | readStableJsonlFile | `export declare function readStableJsonlFile(path: string, signal?: AbortSignal): Promise<StablePhysicalFile>` | 139 |
| function | verifyJsonlCurrentGeneration | `export declare function verifyJsonlCurrentGeneration(path: string, compression: JsonlCompression, expectedId: string, expectedEventCount: number, expectedPrefix` | 149 |
| function | prepareJsonlMigration | `export declare function prepareJsonlMigration(options: PrepareJsonlMigrationOptions): Promise<PreparedJsonlMigration>` | 155 |
| function | createJsonlGenerationRuntime | `export declare function createJsonlGenerationRuntime(overrides?: JsonlGenerationRuntimeOverrides): JsonlGenerationRuntime` | 161 |
| export-list |  | `export {};` | 162 |

## dsh-session-persistence-jsonl/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | JsonlCompressionSchema | `export declare const JsonlCompressionSchema: z<JsonlCompression>` | 17 |
| interface | Config | `export interface Config` | 19 |
| interface | FrozenStoredEvents | `interface FrozenStoredEvents extends SessionHandleReadResult` | 32 |
| interface | StoredLogBase | `interface StoredLogBase extends FrozenStoredEvents` | 36 |
| interface | CurrentStoredLog | `interface CurrentStoredLog extends StoredLogBase` | 46 |
| class | JsonlSessionPersistence | `declare class JsonlSessionPersistence extends SessionPersistence` | 55 |
| method | JsonlSessionPersistence.constructor | `constructor(ctx: Context, config: Config);` | 75 |
| default | JsonlSessionPersistence | `export default JsonlSessionPersistence;` | 274 |

## dsh-session-persistence-jsonl/lib/types/lease.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | LEASE_FILENAME | `export declare const LEASE_FILENAME = "session.lock"` | 32 |
| class | SessionWriteLease | `export declare class SessionWriteLease` | 37 |

## dsh-session-persistence-jsonl/lib/types/migration-verifier.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | verifyCurrentGenerationInWorker | `export declare function verifyCurrentGenerationInWorker(path: string, compression: JsonlCompression, expectedId: string, expectedEventCount: number, expectedPre` | 14 |

## dsh-session-persistence-jsonl/lib/types/storage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | LIVE_WRITE_BATCH_MAX_DELAY_MS | `export declare const LIVE_WRITE_BATCH_MAX_DELAY_MS = 200` | 17 |
| interface | JsonlHandleStorage | `export interface JsonlHandleStorage` | 19 |
| interface | StorageHandleState | `export interface StorageHandleState` | 38 |
| class | JsonlSessionHandle | `export declare class JsonlSessionHandle implements SessionHandle` | 58 |
| method | JsonlSessionHandle.constructor | `constructor(storage: JsonlHandleStorage, id: SessionId, header: SessionHeader, access: SessionAccess, state: StorageHandleState,` | 75 |
| interface | PendingSession | `export interface PendingSession` | 148 |
| class | JsonlBackendTracker | `export declare class JsonlBackendTracker` | 160 |
| method | JsonlBackendTracker.constructor | `constructor(name: string);` | 169 |

## dsh-session-persistence-jsonl/lib/types/testing/generation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createJsonlGenerationTestRuntime | `export declare function createJsonlGenerationTestRuntime(overrides?: JsonlGenerationRuntimeOverrides): JsonlGenerationRuntime` | 7 |

## dsh-session-persistence-jsonl/lib/types/win32.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | publishNewFileWin32 | `export declare function publishNewFileWin32(existing: string, replacement: string): Promise<void>` | 20 |
| function | acquireLockHandleWin32 | `export declare function acquireLockHandleWin32(path: string): Promise<number>` | 32 |
| function | releaseLockHandleWin32 | `export declare function releaseLockHandleWin32(handle: number): Promise<void>` | 38 |
| function | ensureDurableDirectoryWin32 | `export declare function ensureDurableDirectoryWin32(target: string): Promise<void>` | 47 |

## dsh-session-persistence-jsonl/lib/types/worker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 2 |

## dsh-session-persistence-jsonl/lib/types/zstd-private-decoder.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | NodePrivateZstdFrameDecoder | `export declare class NodePrivateZstdFrameDecoder implements ZstdFrameDecoder` | 12 |

## dsh-session-persistence-jsonl/lib/types/zstd-public-decoder.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | PublicZstdFrameDecoder | `export declare class PublicZstdFrameDecoder implements ZstdFrameDecoder` | 7 |

## dsh-session-persistence-jsonl/lib/types/zstd.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ZstdFrameRange | `export interface ZstdFrameRange` | 8 |
| interface | ZstdFrameScan | `export interface ZstdFrameScan` | 15 |
| function | scanZstdFrames | `export declare function scanZstdFrames(buffer: Buffer, maxFrames?: number): ZstdFrameScan` | 28 |
| function | compressZstdFrame | `export declare function compressZstdFrame(input: Buffer \| string): Promise<Buffer>` | 34 |
| function | decompressZstdFrame | `export declare function decompressZstdFrame(input: Buffer): Promise<Buffer>` | 40 |
| interface | ZstdFrameDecoder | `export interface ZstdFrameDecoder` | 42 |
| function | createZstdFrameDecoder | `export declare function createZstdFrameDecoder(): ZstdFrameDecoder` | 59 |
| function | decompressZstdPrefix | `export declare function decompressZstdPrefix(input: Buffer): Promise<Buffer>` | 67 |

