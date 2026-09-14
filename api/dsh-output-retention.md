# dsh-output-retention

> Zero-dependency bounded-retention primitive: ItemRetainer/TextRetainer + neutral notice helpers (what did we keep, what did we omit)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-output-retention/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Omitted | `export type Omitted` | 39 |
| interface | PushDecision | `export interface PushDecision` | 50 |
| interface | RetainedItems | `export interface RetainedItems<T>` | 63 |
| interface | RetainedText | `export interface RetainedText` | 80 |
| type | ItemRetentionStrategy | `export type ItemRetentionStrategy` | 86 |
| type | TextRetentionStrategy | `export type TextRetentionStrategy` | 92 |
| interface | RetentionNotice | `export interface RetentionNotice` | 113 |
| class | ItemRetainer | `export declare class ItemRetainer<T>` | 135 |
| method | ItemRetainer.constructor | `constructor(strategy: ItemRetentionStrategy);` | 141 |
| class | TextRetainer | `export declare class TextRetainer` | 170 |
| method | TextRetainer.constructor | `constructor(strategy: TextRetentionStrategy);` | 179 |
| function | describeOmitted | `export declare function describeOmitted(omitted: Omitted, unit: RetentionNotice['unit']): string` | 210 |
| function | formatRetentionNotice | `export declare function formatRetentionNotice(notice: RetentionNotice, recovery: (notice: RetentionNotice) => string): string` | 224 |

