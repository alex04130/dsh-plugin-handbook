# dsh-tool-todo

> Model-facing todo_write tool over the DeepSeek Harness event-sourced session log
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-todo/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-todo"` | 10 |
| const | inject | `export declare const inject: string[]` | 11 |
| interface | Config | `export interface Config` | 13 |
| const | Config | `export declare const Config: z<Config>` | 24 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 31 |

## dsh-tool-todo/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-todo-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-tool-todo/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TodoItem | `export interface TodoItem` | 20 |

