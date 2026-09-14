# dsh-tool-workflow

> Model-facing workflow tool: run a JavaScript orchestration script over ctx.workflowEngine
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-workflow/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-workflow"` | 14 |
| const | inject | `export declare const inject: string[]` | 15 |
| interface | Config | `export interface Config` | 17 |
| const | Config | `export declare const Config: z<Config>` | 23 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 24 |

## dsh-tool-workflow/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-workflow-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 8 |

## dsh-tool-workflow/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolWorkflowRunStartData | `export interface ToolWorkflowRunStartData` | 10 |
| interface | ToolWorkflowAgentStartData | `export interface ToolWorkflowAgentStartData` | 15 |
| interface | ToolWorkflowAgentEndData | `export interface ToolWorkflowAgentEndData` | 23 |
| interface | ToolWorkflowRunEndData | `export interface ToolWorkflowRunEndData` | 29 |

