# dsh-tmux-context

> Opt-in durable per-step context with this agent's tmux pane and window location
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tmux-context/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tmux-context"` | 24 |
| const | inject | `export declare const inject: string[]` | 26 |
| interface | Config | `export interface Config` | 28 |
| const | Config | `export declare const Config: z<Config>` | 33 |
| const | tmuxContextStateSchema | `declare const tmuxContextStateSchema: zod.ZodNullable<zod.ZodObject<{` | 34 |
| type | TmuxContextState | `type TmuxContextState` | 38 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 51 |
| export-list |  | `export {};` | 52 |

