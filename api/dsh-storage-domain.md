# dsh-storage-domain

> Domain data form (ctx.storage.domain): schema-validated, event-emitting KV domains over storage backends for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-storage-domain/lib/types/domain.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DomainGlobal | `export interface DomainGlobal<G>` | 15 |
| interface | KvTable | `export interface KvTable<K extends string, V>` | 36 |
| type | DomainGlobalHandleOf | `export type DomainGlobalHandleOf<S extends DomainSpec>` | 80 |
| interface | Domain | `export interface Domain<S extends DomainSpec>` | 84 |
| class | DomainImpl | `export declare class DomainImpl` | 111 |
| method | DomainImpl.constructor | `constructor(ctx: Context, spec: DomainSpec, unit: KvUnit, records: Map<string, Map<string, unknown>>, globalValue: unknown, onClosed: () => void);` | 139 |

## dsh-storage-domain/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DomainErrorCode | `export type DomainErrorCode` | 6 |
| interface | InvalidRecordDetail | `export interface InvalidRecordDetail` | 8 |
| interface | DomainErrorOptions | `export interface DomainErrorOptions extends ErrorOptions` | 15 |
| class | DomainError | `export declare class DomainError extends Error` | 25 |
| method | DomainError.constructor | `constructor(code: DomainErrorCode, message: string, options?: DomainErrorOptions);` | 35 |

## dsh-storage-domain/lib/types/events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DomainChangedBase | `export interface DomainChangedBase` | 10 |
| interface | DomainChangedPut | `export interface DomainChangedPut extends DomainChangedBase` | 19 |
| interface | DomainChangedDeleted | `export interface DomainChangedDeleted extends DomainChangedBase` | 25 |
| type | DomainChanged | `export type DomainChanged` | 30 |

## dsh-storage-domain/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DomainError } | `export { DomainError } from './error.ts';` | 14 |
| re-export | { defineDomain, domainTable, descriptorO | `export { defineDomain, domainTable, descriptorOf } from './spec.ts';` | 16 |
| const | name | `export declare const name = "storage-domain"` | 31 |
| const | inject | `export declare const inject: string[]` | 33 |
| interface | Config | `export interface Config` | 40 |
| const | Config | `export declare const Config: z<Config>` | 46 |
| class | DomainFacility | `export declare class DomainFacility` | 52 |
| method | DomainFacility.constructor | `constructor(ctx: Context, config: Config);` | 63 |
| function | apply | `export declare function apply(ctx: Context, config: Config): Promise<void>` | 106 |

## dsh-storage-domain/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "storage-domain-invariant"` | 13 |
| const | inject | `export declare const inject: string[]` | 15 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 21 |

## dsh-storage-domain/lib/types/spec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DomainGlobalSpec | `export interface DomainGlobalSpec<G>` | 13 |
| interface | DomainTableSpec | `export interface DomainTableSpec<K extends string` | 24 |
| interface | DomainSpec | `export interface DomainSpec` | 31 |
| type | TableKeyOf | `export type TableKeyOf<S extends DomainSpec, N extends keyof S['tables']>` | 70 |
| type | TableValueOf | `export type TableValueOf<S extends DomainSpec, N extends keyof S['tables']>` | 72 |
| type | GlobalValueOf | `export type GlobalValueOf<S extends DomainSpec>` | 74 |
| function | domainTable | `export declare function domainTable<K extends string, V>(schema: ZodType<V>): DomainTableSpec<K, V>` | 80 |
| function | defineDomain | `export declare function defineDomain<S extends DomainSpec>(spec: S): S` | 93 |
| function | descriptorOf | `export declare function descriptorOf(spec: DomainSpec): KvUnitDescriptor` | 99 |

