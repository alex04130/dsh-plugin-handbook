# dsh-file-reference-local

> Local-filesystem ctx.fileReferences provider with bounded fuzzy indexes
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-file-reference-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DEFAULT_FILE_SEARCH_EXCLUDED_DIRECTORI | `export { DEFAULT_FILE_SEARCH_EXCLUDED_DIRECTORIES, DEFAULT_FILE_SEARCH_MAX_ENTRIES, DEFAULT_FILE_SEARCH_MAX_RESULTS, WorkspaceFileSearch, } from './search.ts';` | 10 |
| re-export | { FILE_REFERENCE_PROMPT } | `export { FILE_REFERENCE_PROMPT } from '@deepseek-ai/dsh-file-reference';` | 12 |
| re-export | { activeAtToken, formatFileMention } | `export { activeAtToken, formatFileMention } from '@deepseek-ai/dsh-file-reference/grammar';` | 13 |
| interface | Config | `export interface Config` | 15 |
| class | LocalFileReferenceService | `export declare class LocalFileReferenceService extends FileReferenceService` | 24 |
| method | LocalFileReferenceService.constructor | `constructor(ctx: Context, config?: Config);` | 31 |
| default | LocalFileReferenceService | `export default LocalFileReferenceService;` | 34 |

## dsh-file-reference-local/lib/types/search.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { activeAtToken, formatFileMention } | `export { activeAtToken, formatFileMention } from '@deepseek-ai/dsh-file-reference/grammar';` | 9 |
| const | DEFAULT_FILE_SEARCH_MAX_RESULTS | `export declare const DEFAULT_FILE_SEARCH_MAX_RESULTS = 20` | 11 |
| const | DEFAULT_FILE_SEARCH_MAX_ENTRIES | `export declare const DEFAULT_FILE_SEARCH_MAX_ENTRIES = 50000` | 13 |
| const | DEFAULT_FILE_SEARCH_EXCLUDED_DIRECTORIES | `export declare const DEFAULT_FILE_SEARCH_EXCLUDED_DIRECTORIES: readonly [".git", "node_modules", "dist", "build", "out", "coverage", "target", ".next", ".nuxt",` | 26 |
| interface | FileSearchConfig | `export interface FileSearchConfig` | 28 |
| class | WorkspaceFileSearch | `export declare class WorkspaceFileSearch` | 43 |
| method | WorkspaceFileSearch.constructor | `constructor(root: string, config: FileSearchConfig);` | 52 |

