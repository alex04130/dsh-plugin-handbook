# dsh-session-log-export

> Web Session-log export command and shared download dialog
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-log-export/lib/types/archive.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionLogCompressionLevel | `export type SessionLogCompressionLevel` | 29 |
| const | DEFAULT_SESSION_LOG_COMPRESSION_LEVEL | `export declare const DEFAULT_SESSION_LOG_COMPRESSION_LEVEL: SessionLogCompressionLevel` | 31 |
| interface | SessionLogExportDeps | `export interface SessionLogExportDeps` | 33 |
| interface | SessionLogExportReady | `export interface SessionLogExportReady` | 40 |
| function | sessionLogExportDeps | `export declare function sessionLogExportDeps(ctx: Context): SessionLogExportDeps` | 51 |
| function | flushLiveSessionLog | `export declare function flushLiveSessionLog(deps: Pick<SessionLogExportDeps, 'sessions'>, id: SessionId, signal?: AbortSignal): Promise<void>` | 60 |
| type | SessionLogZipEntry | `export type SessionLogZipEntry` | 62 |
| const | SESSION_LOG_FILENAME | `export declare const SESSION_LOG_FILENAME: string` | 73 |
| function | serializeSessionLog | `export declare function serializeSessionLog(header: SessionHeader, events: readonly SessionEvent[]): string` | 81 |
| function | readSessionLogText | `export declare function readSessionLogText(persistence: SessionPersistence, id: SessionId, signal?: AbortSignal): Promise<string \| undefined>` | 92 |
| function | sessionLogZipFilename | `export declare function sessionLogZipFilename(sessionId: string): string` | 98 |
| function | sessionLogZipEntries | `export declare function sessionLogZipEntries(deps: SessionLogExportReady, rootContent: string, sessionId: SessionId, includeDescendants: boolean, signal?: Abort` | 115 |
| function | streamSessionLogZip | `export declare function streamSessionLogZip(deps: SessionLogExportReady, rootContent: string, sessionId: SessionId, includeDescendants: boolean, compressionLeve` | 131 |

## dsh-session-log-export/lib/types/client/Dialog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionLogDownloadDialogInjected | `export interface SessionLogDownloadDialogInjected` | 7 |
| type | SessionLogDownloadDialogProps | `export type SessionLogDownloadDialogProps` | 14 |
| function | SessionLogDownloadDialog | `export declare function SessionLogDownloadDialog({ sessionId, useSessionLogDownload, dismiss, t, }: SessionLogDownloadDialogProps): import("react").JSX.Element` | 20 |

## dsh-session-log-export/lib/types/client/HeaderAction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | SessionLogDownloadHeaderAction | `export declare function SessionLogDownloadHeaderAction(props: SessionLogDownloadDialogProps): ReactNode` | 8 |

## dsh-session-log-export/lib/types/client/controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionLogDownloadStatus | `export type SessionLogDownloadStatus` | 5 |
| interface | SessionLogDownloadEntry | `export interface SessionLogDownloadEntry` | 7 |
| interface | SessionLogDownloadState | `export interface SessionLogDownloadState` | 13 |
| type | Fetch | `type Fetch` | 16 |
| type | Save | `type Save` | 17 |
| function | sessionLogZipFilename | `export declare function sessionLogZipFilename(sessionId: SessionId): string` | 23 |
| function | downloadUrl | `export declare function downloadUrl(url: string, filename: string): void` | 29 |
| class | SessionLogDownloadController | `export declare class SessionLogDownloadController` | 31 |
| method | SessionLogDownloadController.constructor | `constructor(fetcher?: Fetch, save?: Save);` | 42 |
| export-list |  | `export {};` | 62 |

## dsh-session-log-export/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 16 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 21 |

## dsh-session-log-export/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "session-log-download"` | 2 |
| const | zh | `export declare const zh: {` | 4 |
| const | en | `export declare const en: Record<keyof typeof zh, string>` | 16 |
| type | SessionLogDownloadKey | `export type SessionLogDownloadKey` | 18 |

## dsh-session-log-export/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DEFAULT_SESSION_LOG_COMPRESSION_LEVEL, | `export { DEFAULT_SESSION_LOG_COMPRESSION_LEVEL, flushLiveSessionLog, readSessionLogText, serializeSessionLog, SESSION_LOG_FILENAME, sessionLogExportDeps, sessio` | 5 |
| const | name | `export declare const name = "session-log-download"` | 7 |
| const | inject | `export declare const inject: string[]` | 8 |
| const | SESSION_LOG_EXPORT_PATH | `export declare const SESSION_LOG_EXPORT_PATH = "/api/session.export"` | 10 |
| interface | Config | `export interface Config` | 12 |
| const | Config | `export declare const Config: Schema<Config>` | 17 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 23 |

