# dsh-session-query-sqlite

> Concrete ctx.sessionQuery backend with SQLite FTS5 search
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-query-sqlite/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SESSION_QUERY_SQLITE_APPLICATION_ID, S | `export { SESSION_QUERY_SQLITE_APPLICATION_ID, SESSION_QUERY_SQLITE_SCHEMA_VERSION, type JournalMode, } from './schema.ts';` | 11 |
| const | SESSION_QUERY_SQLITE_PATH_KEY | `export declare const SESSION_QUERY_SQLITE_PATH_KEY = "launcherSessionQueryPath"` | 13 |
| const | SESSION_QUERY_SQLITE_DEFAULT_LIMIT | `export declare const SESSION_QUERY_SQLITE_DEFAULT_LIMIT = 20` | 21 |
| const | SESSION_QUERY_SQLITE_MAX_LIMIT | `export declare const SESSION_QUERY_SQLITE_MAX_LIMIT = 100` | 23 |
| const | SESSION_QUERY_SQLITE_SNIPPET_CHARS | `export declare const SESSION_QUERY_SQLITE_SNIPPET_CHARS = 240` | 25 |
| type | OpenAt | `export type OpenAt` | 27 |
| interface | Config | `export interface Config extends SessionQueryConfig` | 29 |
| interface | ResolvedConfig | `interface ResolvedConfig` | 57 |
| class | SqliteSessionQueryEngine | `export declare class SqliteSessionQueryEngine extends SessionQueryEngine` | 69 |
| method | SqliteSessionQueryEngine.constructor | `constructor(ctx: Context, config: Config);` | 86 |
| default | SqliteSessionQueryEngine | `export default SqliteSessionQueryEngine;` | 117 |

## dsh-session-query-sqlite/lib/types/query.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FTS_HIGHLIGHT_START | `export declare const FTS_HIGHLIGHT_START = "\uFDD0"` | 4 |
| const | FTS_HIGHLIGHT_END | `export declare const FTS_HIGHLIGHT_END = "\uFDD1"` | 6 |
| const | SQLITE_MAX_PAGE_LIMIT | `export declare const SQLITE_MAX_PAGE_LIMIT: number` | 8 |
| const | SQLITE_PORTABLE_VARIABLE_LIMIT | `export declare const SQLITE_PORTABLE_VARIABLE_LIMIT = 32766` | 10 |
| const | SQLITE_FTS5_OUTER_PREDICATE_LIMIT | `export declare const SQLITE_FTS5_OUTER_PREDICATE_LIMIT = 14` | 12 |
| function | assertPortableBindingCount | `export declare function assertPortableBindingCount(count: number): void` | 17 |
| function | assertFts5OuterPredicateCount | `export declare function assertFts5OuterPredicateCount(count: number): void` | 22 |
| interface | QueryLimits | `export interface QueryLimits` | 24 |
| interface | NormalizedSessionRequest | `export interface NormalizedSessionRequest` | 31 |
| interface | NormalizedEventRequest | `export interface NormalizedEventRequest` | 39 |
| interface | SqlWhere | `export interface SqlWhere` | 47 |
| function | normalizeSessionRequest | `export declare function normalizeSessionRequest(request: SessionSearchRequest, limits: QueryLimits): NormalizedSessionRequest` | 61 |
| function | normalizeEventRequest | `export declare function normalizeEventRequest(request: SessionEventSearchRequest, limits: QueryLimits): NormalizedEventRequest` | 68 |
| function | buildSessionWhere | `export declare function buildSessionWhere(filters: readonly SessionResultFilter[]): SqlWhere` | 74 |
| function | buildEventWhere | `export declare function buildEventWhere(filters: readonly SessionEventMetadataFilter[]): SqlWhere` | 80 |
| function | quoteFtsData | `export declare function quoteFtsData(query: string): string` | 86 |
| function | sanitizeFtsText | `export declare function sanitizeFtsText(text: string): string` | 92 |
| function | requestFingerprint | `export declare function requestFingerprint(request: NormalizedSessionRequest \| NormalizedEventRequest): string` | 98 |
| function | makeSnippet | `export declare function makeSnippet(markedText: string, maxChars: number): string` | 105 |

## dsh-session-query-sqlite/lib/types/schema.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SESSION_QUERY_SQLITE_SCHEMA_VERSION | `export declare const SESSION_QUERY_SQLITE_SCHEMA_VERSION = 8` | 4 |
| const | SESSION_QUERY_SQLITE_APPLICATION_ID | `export declare const SESSION_QUERY_SQLITE_APPLICATION_ID = 1146308689` | 6 |
| type | JournalMode | `export type JournalMode` | 8 |
| function | openSearchDatabase | `export declare function openSearchDatabase(path: string, journalMode: JournalMode): Promise<DatabaseSync>` | 15 |

