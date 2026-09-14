# dsh-sdk-app

> The dsh SDK profile bundle: stdio JSON-RPC serving and process lifecycle over dsh-base
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sdk-app/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "sdk-app-startup"` | 10 |
| const | inject | `export declare const inject: string[]` | 12 |
| const | SDK_APP_STARTUP_SERVICE | `export declare const SDK_APP_STARTUP_SERVICE = "sdkAppStartup"` | 14 |
| interface | Config | `export interface Config` | 16 |
| const | Config | `export declare const Config: z<Config>` | 21 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 28 |

