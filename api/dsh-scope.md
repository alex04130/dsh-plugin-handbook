# dsh-scope

> Scoped-context registration primitive (scope tags, scope-filtered event dispatch) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-scope/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { AnonymousEntries, NamedEntries, Scoped | `export { AnonymousEntries, NamedEntries, ScopedLayers } from './store.ts';` | 8 |
| type | ScopeKey | `export type ScopeKey` | 11 |
| const | ScopedBrand | `declare const ScopedBrand: unique symbol` | 12 |
| type | Scoped | `export type Scoped<T extends object>` | 18 |
| interface | ScopeParentBinding | `export interface ScopeParentBinding` | 22 |
| function | bindScopeParent | `export declare function bindScopeParent(key: ScopeKey, parent: ScopeKey): ScopeParentBinding` | 43 |
| function | scopeParentOf | `export declare function scopeParentOf(key: ScopeKey): ScopeKey \| undefined` | 49 |
| function | scopeChainOf | `export declare function scopeChainOf(key: ScopeKey \| undefined): ScopeKey[]` | 55 |
| interface | Scope | `export interface Scope` | 57 |
| interface | CreateScopeOptions | `export interface CreateScopeOptions` | 66 |
| function | createScope | `export declare function createScope(ctx: Context, key: ScopeKey, options?: CreateScopeOptions): Scope` | 78 |
| function | scopeOf | `export declare function scopeOf(ctx: Context): ScopeKey \| undefined` | 84 |
| function | scopeTarget | `export declare function scopeTarget<T extends object>(base: T, key: ScopeKey \| undefined): Scoped<T>` | 97 |
| function | isScopeCarrier | `export declare function isScopeCarrier(value: unknown): value is Scoped<object>` | 103 |
| function | carrierKeyOf | `export declare function carrierKeyOf(value: unknown): ScopeKey \| undefined` | 109 |

## dsh-scope/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "scope-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-scope/lib/types/scoped-events.generated.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ScopedSubjectResolver | `type ScopedSubjectResolver` | 7 |
| function | scopedSubjectResolverFor | `export declare function scopedSubjectResolverFor(event: string): ScopedSubjectResolver \| null \| undefined` | 16 |
| export-list |  | `export {};` | 17 |

## dsh-scope/lib/types/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ScopeLayer | `export interface ScopeLayer` | 9 |
| interface | EntryValues | `interface EntryValues<V>` | 14 |
| class | NamedEntries | `export declare class NamedEntries<V> implements EntryValues<V>` | 25 |
| method | NamedEntries.constructor | `constructor(duplicateError: (name: string) => Error);` | 28 |
| class | AnonymousEntries | `export declare class AnonymousEntries<V> implements EntryValues<V>` | 76 |
| class | ScopedLayers | `export declare class ScopedLayers<L extends ScopeLayer>` | 102 |
| method | ScopedLayers.constructor | `constructor(createLayer: (scope: ScopeKey \| undefined) => L, onChange: () => void);` | 108 |
| export-list |  | `export {};` | 146 |

