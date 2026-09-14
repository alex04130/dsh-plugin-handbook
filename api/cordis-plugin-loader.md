# cordis-plugin-loader

> Plugin loader for cordis
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## cordis-plugin-loader/lib/types/config/entry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | EntryOptions | `export interface EntryOptions` | 6 |
| class | Entry | `export declare class Entry` | 21 |
| method | Entry.constructor | `constructor(loader: Loader);` | 32 |

## cordis-plugin-loader/lib/types/config/group.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | EntryGroup | `export declare class EntryGroup` | 5 |
| method | EntryGroup.constructor | `constructor(ctx: Context, tree: EntryTree);` | 10 |
| class | Group | `export declare class Group extends EntryGroup` | 19 |
| method | Group.constructor | `constructor(ctx: Context, config: EntryOptions[]);` | 24 |

## cordis-plugin-loader/lib/types/config/isolate.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | Realm | `export declare abstract class Realm` | 14 |
| class | LocalRealm | `export declare class LocalRealm extends Realm` | 22 |
| method | LocalRealm.constructor | `constructor(entry: Entry);` | 24 |
| class | GlobalRealm | `export declare class GlobalRealm extends Realm` | 28 |
| method | GlobalRealm.constructor | `constructor(label: string);` | 30 |
| default | function | `export default function isolate(ctx: Context): void;` | 34 |

## cordis-plugin-loader/lib/types/config/tree.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | EntryTree | `export declare abstract class EntryTree` | 6 |
| method | EntryTree.constructor | `constructor(ctx: Context);` | 12 |

## cordis-plugin-loader/lib/types/config/utils.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | evaluate | `export declare const evaluate: ((ctx: object, expr: string) => any)` | 2 |
| function | interpolate | `export declare function interpolate(ctx: object, value: any): any` | 4 |
| function | isJsExpr | `export declare function isJsExpr(value: any): value is JsExpr` | 6 |
| interface | JsExpr | `export interface JsExpr` | 8 |

## cordis-plugin-loader/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './config/entry.ts';` | 7 |
| re-export | * | `export * from './config/group.ts';` | 9 |
| re-export | * | `export * from './config/isolate.ts';` | 11 |
| re-export | * | `export * from './config/tree.ts';` | 13 |
| re-export | * | `export * from './config/utils.ts';` | 15 |
| re-export | * | `export * from './internal.ts';` | 17 |
| class | Loader | `export declare class Loader extends EntryTree` | 54 |
| method | Loader.constructor | `constructor(ctx: Context, config?: Loader.Config);` | 61 |
| default | Loader | `export default Loader;` | 72 |

## cordis-plugin-loader/lib/types/internal.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ModuleFormat | `export type ModuleFormat` | 4 |
| type | ModuleSource | `export type ModuleSource` | 6 |
| interface | ResolveResult | `export interface ResolveResult` | 8 |
| interface | LoadResult | `export interface LoadResult` | 13 |
| type | LoadCacheData | `type LoadCacheData` | 17 |
| interface | LoadCache | `interface LoadCache extends Omit<Map<string, Dict<LoadCacheData>>, 'get' \| 'set' \| 'has'>` | 19 |
| interface | ModuleWrap | `export interface ModuleWrap` | 25 |
| interface | ModuleJob | `export interface ModuleJob` | 30 |
| interface | ModuleLoaderV1 | `export interface ModuleLoaderV1` | 49 |
| interface | ModuleRequest | `export interface ModuleRequest` | 60 |
| const | enum | `export declare const enum ModulePhase {` | 66 |
| type | ModuleRequestType | `export type ModuleRequestType` | 71 |
| interface | ModuleLoaderV2 | `export interface ModuleLoaderV2` | 81 |
| type | ModuleLoader | `export type ModuleLoader` | 91 |
| export-list |  | `export {};` | 107 |

