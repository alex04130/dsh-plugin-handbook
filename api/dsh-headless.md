# dsh-headless

> The dsh one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-headless/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "headless-runner"` | 13 |
| const | inject | `export declare const inject: string[]` | 15 |
| interface | Config | `export interface Config` | 17 |
| const | Config | `export declare const Config: z<Config>` | 21 |
| interface | HeadlessIo | `interface HeadlessIo` | 23 |
| const | internals | `export declare const internals: {` | 34 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 43 |
| export-list |  | `export {};` | 44 |

## dsh-headless/lib/types/startup.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "headless-startup"` | 9 |
| const | inject | `export declare const inject: string[]` | 11 |
| const | HEADLESS_STARTUP_SERVICE | `export declare const HEADLESS_STARTUP_SERVICE = "headlessStartup"` | 13 |
| interface | HeadlessStartupValues | `export interface HeadlessStartupValues` | 15 |
| function | apply | `export declare function apply(ctx: Context): void` | 25 |

