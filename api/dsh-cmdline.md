# dsh-cmdline

> Immutable command-line handoff from a dsh launcher to any app plugin that injects cmdlineArgs
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-cmdline/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CmdlineArgs | `export interface CmdlineArgs` | 25 |
| interface | AppExit | `export interface AppExit` | 33 |
| interface | AppReady | `export interface AppReady` | 41 |
| interface | CmdlineHost | `export interface CmdlineHost` | 61 |
| function | provideCmdline | `export declare function provideCmdline(ctx: Context, host: CmdlineHost): void` | 77 |
| interface | AppStdin | `export interface AppStdin` | 79 |
| const | internals | `export declare const internals: {` | 88 |
| function | exitOnStdinEnd | `export declare function exitOnStdinEnd(ctx: Context, label: string): void` | 108 |
| function | parseCmdline | `export declare function parseCmdline(ctx: Context, program: Command): void` | 127 |

