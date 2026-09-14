# dsh-storage-json

> JSON file KV storage backend for the DeepSeek Harness storage hub
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-storage-json/lib/types/atomic.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | writeAtomic | `export declare function writeAtomic(path: string, data: string): Promise<void>` | 19 |

## dsh-storage-json/lib/types/format.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | UnitState | `export interface UnitState` | 13 |
| function | serialize | `export declare function serialize(name: string, state: UnitState): string` | 24 |
| function | parse | `export declare function parse(text: string, descriptor: KvUnitDescriptor): UnitState` | 31 |
| function | serializeRecord | `export declare function serializeRecord(version: number, value: unknown): string` | 39 |
| function | parseRecord | `export declare function parseRecord(text: string, versions: readonly number[]): unknown` | 53 |

## dsh-storage-json/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "storage-json"` | 12 |
| const | inject | `export declare const inject: string[]` | 14 |
| interface | Config | `export interface Config` | 21 |
| const | Config | `export declare const Config: z<Config>` | 26 |
| class | JsonStorageBackend | `export declare class JsonStorageBackend implements StorageBackend` | 28 |
| method | JsonStorageBackend.constructor | `constructor(root: string);` | 33 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 43 |

## dsh-storage-json/lib/types/per-record-unit.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | openPerRecordUnit | `export declare function openPerRecordUnit(descriptor: KvUnitDescriptor, root: string, onClose: () => void): Promise<KvUnit>` | 38 |
| class | PerRecordJsonUnit | `export declare class PerRecordJsonUnit implements KvUnit` | 45 |
| method | PerRecordJsonUnit.constructor | `constructor(descriptor: KvUnitDescriptor, dir: string, onClose: () => void);` | 52 |

## dsh-storage-json/lib/types/single-unit.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | openSingleUnit | `export declare function openSingleUnit(descriptor: KvUnitDescriptor, root: string, onClose: () => void): Promise<KvUnit>` | 20 |

