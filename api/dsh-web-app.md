# dsh-web-app

> The dsh browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, bash runtime variables, URL line)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-web-app/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "web-app"` | 16 |
| const | inject | `export declare const inject: string[]` | 18 |
| interface | Config | `export interface Config` | 20 |
| const | Config | `export declare const Config: z<Config>` | 35 |
| interface | WebRuntimeValues | `export interface WebRuntimeValues` | 37 |
| function | resolveLanTrust | `export declare function resolveLanTrust(bindHost: string, extra: readonly string[]): WebRuntimeValues` | 53 |
| const | internals | `export declare const internals: {` | 55 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 65 |

## dsh-web-app/lib/types/startup.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "web-startup"` | 10 |
| const | inject | `export declare const inject: string[]` | 12 |
| const | WEB_STARTUP_SERVICE | `export declare const WEB_STARTUP_SERVICE = "webStartup"` | 14 |
| interface | WebStartupValues | `export interface WebStartupValues` | 16 |
| function | apply | `export declare function apply(ctx: Context): void` | 33 |

