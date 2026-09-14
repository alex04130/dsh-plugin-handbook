# dsh-chunked-list

> Persistent append-only chunked lists with bounded copying and JSON checkpoint validation
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-chunked-list/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ChunkedList | `export interface ChunkedList<T>` | 11 |
| function | appendChunkedList | `export declare function appendChunkedList<T>(head: ChunkedList<T> \| undefined, value: T): ChunkedList<T>` | 21 |
| function | iterateChunkedList | `export declare function iterateChunkedList<T>(head: ChunkedList<T> \| undefined): Generator<T>` | 27 |
| function | chunkedListSchema | `export declare function chunkedListSchema<T>(valueSchema: z.ZodType<T>): z.ZodType<ChunkedList<T>>` | 33 |

