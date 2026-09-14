# dsh-fs

> Abstract filesystem capability seam (ctx.fs) for the DeepSeek Harness — vocabulary types, the FileSystem service (text IO + optional version-guarded atomic mutations), and the fs/* policy event vocabulary
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-fs/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { FsError, FsTargetKey, FsVersion, } | `export { FsError, FsTargetKey, FsVersion, } from './types.ts';` | 13 |
| class | FileSystem | `export declare abstract class FileSystem extends Service` | 61 |
| method | FileSystem.constructor | `constructor(ctx: Context);` | 62 |
| default | FileSystem | `export default FileSystem;` | 230 |

## dsh-fs/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "fs-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-fs/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FsTargetKey | `export type FsTargetKey` | 14 |
| function | FsTargetKey | `export declare function FsTargetKey(key: string): FsTargetKey` | 21 |
| type | FsVersion | `export type FsVersion` | 29 |
| function | FsVersion | `export declare function FsVersion(v: string): FsVersion` | 36 |
| type | FsObservation | `export type FsObservation` | 42 |
| interface | FsTarget | `export interface FsTarget` | 52 |
| interface | FsInfo | `export interface FsInfo` | 67 |
| interface | FsPathInfo | `export interface FsPathInfo` | 81 |
| interface | FsDirEntry | `export interface FsDirEntry` | 93 |
| type | FsWriteIntent | `export type FsWriteIntent` | 111 |
| interface | FsWriteOutcome | `export interface FsWriteOutcome` | 118 |
| interface | FsEditRequest | `export interface FsEditRequest` | 136 |
| interface | FsEditOutcome | `export interface FsEditOutcome` | 145 |
| type | FsErrorCode | `export type FsErrorCode` | 162 |
| class | FsError | `export declare class FsError extends HarnessError` | 169 |
| method | FsError.constructor | `constructor(message: string, code: FsErrorCode, options?: ErrorOptions);` | 171 |

