# cosmokit

> A collection of common utilities
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## cosmokit/lib/types/array.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | contain | `export declare function contain(array1: readonly any[], array2: readonly any[]): boolean` | 2 |
| function | intersection | `export declare function intersection<T>(array1: readonly T[], array2: readonly T[]): T[]` | 4 |
| function | difference | `export declare function difference<S>(array1: readonly S[], array2: readonly any[]): S[]` | 6 |
| function | union | `export declare function union<T>(array1: readonly T[], array2: readonly T[]): T[]` | 8 |
| function | deduplicate | `export declare function deduplicate<T>(array: readonly T[]): T[]` | 10 |
| function | remove | `export declare function remove<T>(list: T[], item: T): boolean` | 12 |
| function | makeArray | `export declare function makeArray<T>(source: null \| undefined \| T \| T[]): T[]` | 14 |

## cosmokit/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './array.ts';` | 2 |
| re-export | * | `export * from './types.ts';` | 4 |
| re-export | * | `export * from './misc.ts';` | 6 |
| re-export | * | `export * from './string.ts';` | 8 |
| re-export | * | `export * from './time.ts';` | 10 |

## cosmokit/lib/types/misc.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Dict | `export type Dict<T` | 2 |
| type | Get | `export type Get<T extends {}, K>` | 6 |
| type | Extract | `export type Extract<S, T, U` | 8 |
| type | MaybeArray | `export type MaybeArray<T>` | 10 |
| type | Promisify | `export type Promisify<T>` | 12 |
| type | Awaitable | `export type Awaitable<T>` | 14 |
| type | Intersect | `export type Intersect<U>` | 16 |
| function | noop | `export declare function noop(): any` | 18 |
| function | isNullable | `export declare function isNullable(value: any): value is null \| undefined \| void` | 20 |
| function | isNonNullable | `export declare function isNonNullable<T>(value: T): value is NonNullable<T>` | 22 |
| function | isPlainObject | `export declare function isPlainObject(data: any): any` | 24 |
| function | filterKeys | `export declare function filterKeys<T, K extends string, U extends K>(object: Dict<T, K>, filter: (key: K, value: T) => key is U): Dict<T, U>` | 26 |
| function | filterKeys | `export declare function filterKeys<T, K extends string>(object: Dict<T, K>, filter: (key: K, value: T) => boolean): Dict<T, K>` | 28 |
| function | mapValues | `export declare function mapValues<U, T, K extends string>(object: Dict<T, K>, transform: (value: T, key: K) => U): Dict<U, K>` | 30 |
| export-list | mapValues as valueMap | `export { mapValues as valueMap };` | 32 |
| function | pick | `export declare function pick<T extends object, K extends keyof T>(source: T, keys?: Iterable<K>, forced?: boolean): Pick<T, K>` | 34 |
| function | omit | `export declare function omit<T, K extends keyof T>(source: T, keys?: Iterable<K>): Omit<T, K>` | 36 |
| function | defineProperty | `export declare function defineProperty<T, K extends keyof T>(object: T, key: K, value: T[K]): T` | 38 |
| function | defineProperty | `export declare function defineProperty<T, K extends keyof any>(object: T, key: K, value: any): T` | 40 |

## cosmokit/lib/types/string.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | capitalize | `export declare function capitalize(source: string): string` | 2 |
| function | uncapitalize | `export declare function uncapitalize(source: string): string` | 4 |
| function | camelCase | `export declare function camelCase(source: string): string` | 6 |
| function | paramCase | `export declare function paramCase(source: string): string` | 8 |
| function | snakeCase | `export declare function snakeCase(source: string): string` | 10 |
| const | camelize | `export declare const camelize: typeof camelCase` | 12 |
| const | hyphenate | `export declare const hyphenate: typeof paramCase` | 14 |
| type | camelize | `export type camelize<S extends string>` | 79 |
| type | hyphenate | `export type hyphenate<S extends string>` | 81 |
| function | formatProperty | `export declare function formatProperty(key: keyof any): string` | 83 |
| function | trimSlash | `export declare function trimSlash(source: string): string` | 85 |
| function | sanitize | `export declare function sanitize(source: string): string` | 87 |
| export-list |  | `export {};` | 88 |

## cosmokit/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | GlobalConstructorNames | `type GlobalConstructorNames` | 1 |
| function | is | `export declare function is<K extends GlobalConstructorNames>(type: K): (value: any) => value is InstanceType<typeof globalThis[K]>` | 5 |
| function | is | `export declare function is<K extends GlobalConstructorNames>(type: K, value: any): value is InstanceType<typeof globalThis[K]>` | 7 |
| function | isArrayBufferLike | `declare function isArrayBufferLike(value: any): value is ArrayBufferLike` | 8 |
| function | isArrayBufferSource | `declare function isArrayBufferSource(value: any): value is Binary.Source` | 9 |
| const | base64ToArrayBuffer | `export declare const base64ToArrayBuffer: typeof Binary.fromBase64` | 22 |
| const | arrayBufferToBase64 | `export declare const arrayBufferToBase64: typeof Binary.toBase64` | 24 |
| const | hexToArrayBuffer | `export declare const hexToArrayBuffer: typeof Binary.fromHex` | 26 |
| const | arrayBufferToHex | `export declare const arrayBufferToHex: typeof Binary.toHex` | 28 |
| function | clone | `export declare function clone<T>(source: T): T` | 30 |
| function | deepEqual | `export declare function deepEqual(a: any, b: any, strict?: boolean): boolean` | 32 |
| export-list |  | `export {};` | 33 |

