# dsh-fs-local

> Local-filesystem implementation of the DeepSeek Harness filesystem seam (ctx.fs)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-fs-local/lib/types/fsio.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FsIoInternals | `export interface FsIoInternals` | 13 |
| interface | LocalTarget | `export interface LocalTarget` | 39 |
| interface | PathInfo | `export interface PathInfo` | 46 |
| interface | PathLinkInfo | `export interface PathLinkInfo` | 53 |
| interface | LocalDirEntry | `export interface LocalDirEntry` | 60 |
| function | resolveLocalTarget | `export declare function resolveLocalTarget(cwd: string, path: string): Promise<LocalTarget>` | 75 |
| function | probe | `export declare function probe(absolutePath: string): Promise<PathInfo \| null>` | 81 |
| function | probeNoFollow | `export declare function probeNoFollow(absolutePath: string): Promise<PathLinkInfo \| null>` | 87 |
| function | listDirectory | `export declare function listDirectory(target: LocalTarget, signal?: AbortSignal): Promise<LocalDirEntry[]>` | 96 |
| function | readWholeText | `export declare function readWholeText(target: LocalTarget, signal?: AbortSignal): Promise<string>` | 104 |
| function | readWholeBytes | `export declare function readWholeBytes(target: LocalTarget, signal: AbortSignal \| undefined, maxBytes: number, internals?: FsIoInternals): Promise<Uint8Array>` | 116 |
| function | readByteWindow | `export declare function readByteWindow(target: LocalTarget, range: {` | 127 |
| function | streamWholeText | `export declare function streamWholeText(target: LocalTarget, signal?: AbortSignal): AsyncIterable<string>` | 139 |
| function | writeFileAtomic | `export declare function writeFileAtomic(absolutePath: string, content: string, mode: number \| undefined, signal: AbortSignal \| undefined, internals?: FsIoInte` | 155 |
| type | LineEndings | `export type LineEndings` | 159 |
| function | normalizeLineEndings | `declare function normalizeLineEndings(content: string): string` | 166 |
| function | restoreLineEndings | `declare function restoreLineEndings(content: string, lineEndings: LineEndings): string` | 175 |
| function | readForEdit | `export declare function readForEdit(absolutePath: string, displayPath: string, signal?: AbortSignal): Promise<{` | 184 |
| function | readTextForDiff | `export declare function readTextForDiff(absolutePath: string, maxBytes: number, signal?: AbortSignal): Promise<string \| null>` | 200 |
| function | applyLiteralEdit | `export declare function applyLiteralEdit(content: string, oldString: string, newString: string, replaceAll: boolean, displayPath: string): {` | 212 |
| export-list | normalizeLineEndings, restoreLineEndings | `export { normalizeLineEndings, restoreLineEndings };` | 216 |

## dsh-fs-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 12 |
| type | ResolvedConfig | `type ResolvedConfig` | 21 |
| class | LocalFileSystem | `export declare class LocalFileSystem extends FileSystem` | 28 |
| method | LocalFileSystem.constructor | `constructor(ctx: Context, config: Config);` | 38 |
| default | LocalFileSystem | `export default LocalFileSystem;` | 67 |

## dsh-fs-local/lib/types/win32.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | readFileDaclWin32 | `export declare function readFileDaclWin32(path: string): Promise<Buffer>` | 11 |
| function | copyFileDaclWin32 | `export declare function copyFileDaclWin32(source: string, destination: string): Promise<void>` | 18 |
| function | replaceFileWin32 | `export declare function replaceFileWin32(replaced: string, replacement: string): Promise<void>` | 24 |

