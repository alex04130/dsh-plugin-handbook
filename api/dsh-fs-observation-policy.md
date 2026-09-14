# dsh-fs-observation-policy

> File-context policy plugin for the DeepSeek Harness — observed-state, read-before-edit, and version-guarded write/edit added over the ctx.fs provider seam through the fs/* event gate (no service API)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-fs-observation-policy/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "fs-observation-policy"` | 12 |
| function | apply | `export declare function apply(ctx: Context): void` | 19 |

## dsh-fs-observation-policy/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FsObservationActor | `export interface FsObservationActor` | 22 |

