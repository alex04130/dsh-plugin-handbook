# dsh-terminal

> Persistent PTY session seam for the DeepSeek Harness — owner-scoped ids, backend registry, interactive sends, reads, signals, and awaited cleanup
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-terminal/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { TerminalBackendCleanupError } | `export { TerminalBackendCleanupError } from './types.ts';` | 10 |
| type | TerminalSessionId | `export type TerminalSessionId` | 12 |
| type | TerminalErrorCode | `export type TerminalErrorCode` | 19 |
| class | TerminalError | `export declare class TerminalError extends Error` | 21 |
| method | TerminalError.constructor | `constructor(message: string, code: TerminalErrorCode);` | 23 |
| function | TerminalSessionId | `export declare function TerminalSessionId(value: string): TerminalSessionId` | 30 |
| class | TerminalSessionService | `export declare class TerminalSessionService extends Service` | 32 |
| method | TerminalSessionService.constructor | `constructor(ctx: Context);` | 41 |
| default | TerminalSessionService | `export default TerminalSessionService;` | 119 |

## dsh-terminal/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TerminalSessionIdValue | `export type TerminalSessionIdValue` | 9 |
| class | TerminalBackendCleanupError | `export declare class TerminalBackendCleanupError extends AggregateError` | 15 |
| method | TerminalBackendCleanupError.constructor | `constructor(spawnError: unknown, cleanupError: unknown);` | 18 |
| type | TerminalWaitReason | `export type TerminalWaitReason` | 21 |
| type | TerminalSignal | `export type TerminalSignal` | 27 |
| type | TerminalSessionStatus | `export type TerminalSessionStatus` | 29 |
| interface | TerminalSpawnRequest | `export interface TerminalSpawnRequest` | 37 |
| interface | TerminalBackendSpawnSpec | `export interface TerminalBackendSpawnSpec extends TerminalSpawnRequest` | 46 |
| interface | TerminalSendRequest | `export interface TerminalSendRequest` | 55 |
| interface | TerminalSendRead | `export interface TerminalSendRead` | 64 |
| interface | TerminalSendResult | `export interface TerminalSendResult` | 71 |
| interface | TerminalSendOperation | `export interface TerminalSendOperation` | 82 |
| interface | TerminalReadRequest | `export interface TerminalReadRequest` | 91 |
| interface | TerminalReadResult | `export interface TerminalReadResult` | 98 |
| interface | TerminalSignalResult | `export interface TerminalSignalResult` | 111 |
| interface | TerminalSessionSnapshot | `export interface TerminalSessionSnapshot` | 118 |
| interface | TerminalBackendSession | `export interface TerminalBackendSession` | 131 |
| interface | TerminalBackend | `export interface TerminalBackend` | 148 |
| interface | TerminalSpawnResult | `export interface TerminalSpawnResult extends TerminalSessionSnapshot` | 155 |

