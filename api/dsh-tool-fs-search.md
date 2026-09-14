# dsh-tool-fs-search

> Model-facing filesystem discovery tools (glob, grep) backed by the packaged ripgrep binary (@vscode/ripgrep)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-fs-search/lib/types/direct-call.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | acceptedDirectCallValue | `export declare function acceptedDirectCallValue(ctx: Context, tool: ToolDefinition, exec: ToolExecution, result: ToolExecutionResult, decision: PostToolDecision` | 15 |

## dsh-tool-fs-search/lib/types/glob.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | GLOB_MAX_RESULTS | `export declare const GLOB_MAX_RESULTS = 100` | 18 |
| const | GLOB_VCS_EXCLUDES | `export declare const GLOB_VCS_EXCLUDES: readonly string[]` | 29 |
| interface | GlobToolCaps | `export interface GlobToolCaps` | 31 |
| interface | GlobInput | `export interface GlobInput` | 48 |
| function | parseGlobArgs | `export declare function parseGlobArgs(args: {` | 60 |
| function | buildGlobCommand | `export declare function buildGlobCommand(input: GlobInput): string[]` | 76 |
| interface | GlobSample | `export interface GlobSample` | 81 |
| function | sampleAcrossTopLevel | `export declare function sampleAcrossTopLevel(paths: readonly string[], maxItems: number, root?: string): GlobSample` | 102 |
| function | formatGlobOutput | `export declare function formatGlobOutput(sample: GlobSample, seen: number, spillRef: SpillRef \| undefined): string` | 112 |
| function | presentGlobCall | `export declare function presentGlobCall(args: {` | 119 |
| function | presentGlobResult | `export declare function presentGlobResult(_args: {` | 134 |
| function | applyGlobTool | `export declare function applyGlobTool(ctx: Context, caps: GlobToolCaps): void` | 145 |

## dsh-tool-fs-search/lib/types/grep.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | GREP_MAX_MATCHES | `export declare const GREP_MAX_MATCHES = 250` | 23 |
| const | GREP_MAX_LINE_BYTES | `export declare const GREP_MAX_LINE_BYTES = 2000` | 28 |
| interface | GrepToolCaps | `export interface GrepToolCaps` | 30 |
| interface | GrepInput | `export interface GrepInput` | 47 |
| function | parseGrepArgs | `export declare function parseGrepArgs(args: {` | 61 |
| function | buildGrepCommand | `export declare function buildGrepCommand(input: GrepInput): string[]` | 77 |
| function | parseGrepMatches | `export declare function parseGrepMatches(stdout: string): GrepMatch[]` | 85 |
| function | formatGrepMatches | `export declare function formatGrepMatches(matches: GrepMatch[]): string` | 93 |
| function | formatGrepOutput | `export declare function formatGrepOutput(retained: RetainedItems<GrepMatch>, spillRef: SpillRef \| undefined): string` | 104 |
| function | presentGrepCall | `export declare function presentGrepCall(args: {` | 112 |
| function | presentGrepResult | `export declare function presentGrepResult(_args: {` | 128 |
| function | applyGrepTool | `export declare function applyGrepTool(ctx: Context, caps: GrepToolCaps): void` | 140 |

## dsh-tool-fs-search/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { GLOB_MAX_RESULTS, GLOB_VCS_EXCLUDES, a | `export { GLOB_MAX_RESULTS, GLOB_VCS_EXCLUDES, applyGlobTool, buildGlobCommand, formatGlobOutput, parseGlobArgs, presentGlobCall, presentGlobResult, sampleAcross` | 30 |
| re-export | { GREP_MAX_LINE_BYTES, GREP_MAX_MATCHES, | `export { GREP_MAX_LINE_BYTES, GREP_MAX_MATCHES, applyGrepTool, buildGrepCommand, formatGrepMatches, formatGrepOutput, parseGrepArgs, parseGrepMatches, presentGr` | 32 |
| re-export | { RAW_OUTPUT_MAX_BYTES, SEARCH_GRACE_MS, | `export { RAW_OUTPUT_MAX_BYTES, SEARCH_GRACE_MS, SEARCH_META_MAX_BYTES, SEARCH_STDERR_MAX_BYTES, SEARCH_TIMEOUT_MS, SearchError, previewLine, resolveRgPath, runR` | 34 |
| const | name | `export declare const name = "tool-fs-search"` | 37 |
| const | inject | `export declare const inject: string[]` | 39 |
| interface | Config | `export interface Config` | 41 |
| const | Config | `export declare const Config: z<Config>` | 64 |
| function | apply | `export declare function apply(ctx: Context, config: Config): Promise<void>` | 73 |

## dsh-tool-fs-search/lib/types/presentation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RetainedPage | `type RetainedPage<T>` | 38 |
| type | SearchMeta | `export type SearchMeta` | 53 |
| type | MetaLineMatch | `type MetaLineMatch` | 65 |
| type | MetaFileMatches | `type MetaFileMatches` | 70 |
| function | groupMatchesByFile | `export declare function groupMatchesByFile(matches: GrepMatch[]): MetaFileMatches[]` | 84 |
| function | grepSearchMeta | `export declare function grepSearchMeta(retained: RetainedPage<GrepMatch>, maxMetaBytes: number): SearchMeta` | 96 |
| function | globSearchMeta | `export declare function globSearchMeta(retained: RetainedPage<string>, maxMetaBytes: number): SearchMeta` | 107 |
| function | searchViewFromMeta | `export declare function searchViewFromMeta(meta: unknown): SearchResultView \| undefined` | 123 |
| export-list |  | `export {};` | 124 |

## dsh-tool-fs-search/lib/types/search-core.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | RAW_OUTPUT_MAX_BYTES | `export declare const RAW_OUTPUT_MAX_BYTES = 20000000` | 30 |
| const | SEARCH_TIMEOUT_MS | `export declare const SEARCH_TIMEOUT_MS = 30000` | 36 |
| const | SEARCH_STDERR_MAX_BYTES | `export declare const SEARCH_STDERR_MAX_BYTES: number` | 42 |
| const | SEARCH_GRACE_MS | `export declare const SEARCH_GRACE_MS = 3000` | 44 |
| const | SEARCH_META_MAX_BYTES | `export declare const SEARCH_META_MAX_BYTES = 65536` | 55 |
| type | SearchErrorCode | `export type SearchErrorCode` | 67 |
| class | SearchError | `export declare class SearchError extends HarnessError` | 74 |
| method | SearchError.constructor | `constructor(message: string, code: SearchErrorCode, options?: ErrorOptions);` | 76 |
| interface | RipgrepRun | `export interface RipgrepRun` | 79 |
| function | resolveRgPath | `export declare function resolveRgPath(): Promise<string>` | 99 |
| function | runRipgrep | `export declare function runRipgrep(ctx: Context, exec: ToolExecution, toolName: string, argv: readonly string[], rawOutputMaxBytes: number, graceMs: number, std` | 136 |
| function | toWorkdirRelative | `export declare function toWorkdirRelative(path: string, workdir: string): string` | 149 |
| interface | GrepMatch | `export interface GrepMatch` | 151 |
| function | previewLine | `export declare function previewLine(line: string, maxBytes: number): string` | 165 |
| function | retainGrepMatches | `export declare function retainGrepMatches(matches: GrepMatch[], maxMatches: number, maxLineBytes: number): RetainedItems<GrepMatch>` | 179 |
| function | retainGlobPaths | `export declare function retainGlobPaths(paths: string[], maxResults: number): RetainedItems<string>` | 189 |
| function | trySaveFormattedResult | `export declare function trySaveFormattedResult(ctx: Context, exec: ToolExecution, suggestedName: string, content: string): Promise<SpillRef \| undefined>` | 207 |

