# dsh-shell-env

> Tool-independent managed DSH_* shell environment registry
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-shell-env/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "shell-env"` | 19 |
| const | inject | `export declare const inject: string[]` | 20 |
| interface | Config | `export interface Config` | 22 |
| const | Config | `export declare const Config: z<Config>` | 27 |
| interface | BashEnvVariable | `export interface BashEnvVariable` | 29 |
| interface | BashEnvContributor | `export interface BashEnvContributor` | 38 |
| interface | BashEnvVariableInfo | `export interface BashEnvVariableInfo extends BashEnvVariable` | 51 |
| class | ShellEnvRegistry | `export declare class ShellEnvRegistry extends Service` | 65 |
| method | ShellEnvRegistry.constructor | `constructor(ctx: Context, config?: Config);` | 74 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 99 |

