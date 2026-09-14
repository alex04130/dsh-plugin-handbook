# dsh-tool-subagent-control

> Globally named send_message, interrupt_agent, and list_agents tools over ctx.subagents continuations
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-subagent-control/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-subagent-control"` | 12 |
| const | inject | `export declare const inject: string[]` | 13 |
| function | apply | `export declare function apply(ctx: Context): void` | 18 |

## dsh-tool-subagent-control/lib/types/list-agents.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-subagent-list-agents"` | 10 |
| const | inject | `export declare const inject: string[]` | 11 |
| function | apply | `export declare function apply(ctx: Context): void` | 16 |

