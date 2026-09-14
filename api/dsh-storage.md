# dsh-storage

> Storage hub (ctx.storage): named backend registry plus mounted data-form facilities for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-storage/lib/types/backend.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | UNIT_NAME_RE | `export declare const UNIT_NAME_RE: RegExp` | 9 |
| interface | StorageBackend | `export interface StorageBackend` | 15 |
| interface | KvFacet | `export interface KvFacet` | 26 |
| interface | KvUnitDescriptor | `export interface KvUnitDescriptor` | 41 |
| interface | KvUnit | `export interface KvUnit` | 79 |

## dsh-storage/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | StorageErrorCode | `export type StorageErrorCode` | 6 |
| class | StorageError | `export declare class StorageError extends Error` | 11 |
| method | StorageError.constructor | `constructor(code: StorageErrorCode, message: string, options?: ErrorOptions);` | 19 |

## dsh-storage/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { BackendRegistry } | `export { BackendRegistry } from './registry.ts';` | 9 |
| re-export | { StorageError } | `export { StorageError } from './error.ts';` | 10 |
| re-export | { UNIT_NAME_RE } | `export { UNIT_NAME_RE } from './backend.ts';` | 12 |
| function | storageBackendServiceKey | `export declare function storageBackendServiceKey(name: string): string` | 22 |
| interface | StorageForms | `export interface StorageForms` | 33 |
| class | Storage | `export declare class Storage extends Service` | 39 |
| method | Storage.constructor | `constructor(ctx: Context);` | 43 |
| default | Storage | `export default Storage;` | 63 |

## dsh-storage/lib/types/registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | BackendRegistry | `export declare class BackendRegistry` | 11 |

