# dsh-subagent-fork-in-process

> In-process fork subagent backend: runs a child agent seeded with a prefix of the parent's log
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-subagent-fork-in-process/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "subagent-fork-in-process"` | 11 |
| const | inject | `export declare const inject: string[]` | 12 |
| interface | Config | `export interface Config` | 14 |
| const | Config | `export declare const Config: z<Config>` | 18 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 19 |

