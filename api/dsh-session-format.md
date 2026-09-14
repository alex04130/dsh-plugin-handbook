# dsh-session-format

> Streaming adjacent Session format migration machinery
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-format/lib/types/catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createSessionFormatCatalog | `export declare function createSessionFormatCatalog(options: SessionFormatCatalogOptions): SessionFormatCatalog` | 7 |

## dsh-session-format/lib/types/chain.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | defineSessionFormatMigration | `export declare function defineSessionFormatMigration(migration: SessionFormatMigration): SessionFormatMigration` | 7 |
| function | createSessionFormatChain | `export declare function createSessionFormatChain(options: SessionFormatChainOptions): SessionFormatChain` | 13 |

## dsh-session-format/lib/types/context.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionFormatEventCollector | `export declare class SessionFormatEventCollector implements SessionFormatMigrationContext` | 3 |

## dsh-session-format/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionFormatError | `export declare class SessionFormatError extends Error` | 2 |
| class | SessionFormatUnsupportedMigrationError | `export declare class SessionFormatUnsupportedMigrationError extends SessionFormatError` | 6 |

## dsh-session-format/lib/types/filename.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | sessionFormatLogFilename | `export declare function sessionFormatLogFilename(version: number): string` | 9 |
| function | parseSessionFormatLogFilename | `export declare function parseSessionFormatLogFilename(filename: string): number \| undefined` | 17 |

## dsh-session-format/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './chain.ts';` | 2 |
| re-export | * | `export * from './catalog.ts';` | 3 |
| re-export | * | `export * from './context.ts';` | 4 |
| re-export | * | `export * from './error.ts';` | 5 |
| re-export | * | `export * from './filename.ts';` | 6 |
| re-export | * | `export * from './json.ts';` | 7 |
| re-export | * | `export * from './types.ts';` | 8 |

## dsh-session-format/lib/types/json.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isSessionFormatJsonObject | `export declare function isSessionFormatJsonObject(value: unknown): value is Record<string, unknown>` | 7 |
| function | sessionFormatCount | `export declare function sessionFormatCount(value: unknown, label: string): number` | 14 |
| function | sessionFormatSafeInteger | `export declare function sessionFormatSafeInteger(value: unknown, label: string): number` | 21 |
| function | sessionFormatVersion | `export declare function sessionFormatVersion(value: unknown, label?: string): number` | 28 |
| function | inspectSessionFormatVersion | `export declare function inspectSessionFormatVersion(headerValue: unknown): number` | 34 |
| function | snapshotSessionFormatJson | `export declare function snapshotSessionFormatJson(value: unknown, label?: string): SessionFormatJsonValue` | 41 |
| function | snapshotSessionFormatHeader | `export declare function snapshotSessionFormatHeader(header: SessionFormatHeader, label?: string): SessionFormatHeader` | 48 |

## dsh-session-format/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionFormatJsonPrimitive | `export type SessionFormatJsonPrimitive` | 2 |
| type | SessionFormatJsonValue | `export type SessionFormatJsonValue` | 4 |
| interface | SessionFormatJsonObject | `export interface SessionFormatJsonObject` | 6 |
| interface | SessionFormatHeader | `export interface SessionFormatHeader extends SessionFormatJsonObject` | 10 |
| interface | SessionFormatEvent | `export interface SessionFormatEvent extends SessionFormatJsonObject` | 22 |
| interface | SessionFormatArtifact | `export interface SessionFormatArtifact` | 29 |
| interface | SessionFormatMigration | `export interface SessionFormatMigration` | 36 |
| interface | SessionFormatMigrationStageInput | `export interface SessionFormatMigrationStageInput` | 48 |
| interface | SessionFormatChainOptions | `export interface SessionFormatChainOptions` | 59 |
| interface | SessionFormatChain | `export interface SessionFormatChain` | 66 |
| type | SessionFormatRecovery | `export type SessionFormatRecovery` | 74 |
| interface | SessionFormatCodec | `export interface SessionFormatCodec` | 76 |
| interface | SessionFormatArtifactDecoder | `export interface SessionFormatArtifactDecoder` | 84 |
| interface | SessionFormatCurrentEncoder | `export interface SessionFormatCurrentEncoder` | 94 |
| interface | SessionFormatEventRun | `export interface SessionFormatEventRun` | 101 |
| interface | SessionFormatMigrationContext | `export interface SessionFormatMigrationContext` | 109 |
| interface | SessionFormatMigrationStage | `export interface SessionFormatMigrationStage` | 116 |
| interface | SessionFormatMigrationStream | `export interface SessionFormatMigrationStream extends SessionFormatMigrationContext` | 127 |
| type | SessionFormatHeaderReadResult | `export type SessionFormatHeaderReadResult` | 133 |
| interface | SessionFormatCatalogOptions | `export interface SessionFormatCatalogOptions extends SessionFormatChainOptions` | 151 |
| interface | SessionFormatRestoreOptions | `export interface SessionFormatRestoreOptions` | 161 |
| interface | SessionFormatCatalog | `export interface SessionFormatCatalog` | 170 |
| interface | SessionFormatRestore | `export interface SessionFormatRestore` | 182 |

