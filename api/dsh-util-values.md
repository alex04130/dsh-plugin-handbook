# dsh-util-values

> Duplicate-install-safe value primitives for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-util-values/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | JsonValue | `export type JsonValue` | 3 |
| function | assertNever | `export declare function assertNever(value: never, context?: string): never` | 12 |
| function | snapshotJsonValue | `export declare function snapshotJsonValue<T>(value: T): T \| undefined` | 18 |
| function | isJsonValue | `export declare function isJsonValue(value: unknown): boolean` | 24 |
| function | deepEqualJson | `export declare function deepEqualJson(a: unknown, b: unknown): boolean` | 31 |
| function | deepFreeze | `export declare function deepFreeze<T>(value: T): T` | 37 |

