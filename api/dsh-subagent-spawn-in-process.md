# dsh-subagent-spawn-in-process

> In-process spawn subagent backend: runs a fresh child agent on ctx.agents
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-subagent-spawn-in-process/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "subagent-spawn-in-process"` | 10 |
| const | inject | `export declare const inject: string[]` | 11 |
| interface | Config | `export interface Config` | 13 |
| const | Config | `export declare const Config: z<Config>` | 17 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 18 |

