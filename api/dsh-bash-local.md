# dsh-bash-local

> Local-subprocess implementation of the DeepSeek Harness bash executor seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-bash-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | ENV_OVERRIDES | `export declare const ENV_OVERRIDES: {` | 22 |
| interface | Config | `export interface Config` | 29 |
| type | ResolvedConfig | `type ResolvedConfig` | 44 |
| function | assertServiceableBashConfig | `export declare function assertServiceableBashConfig(config: Config): void` | 53 |
| class | LocalBashExecutor | `export declare class LocalBashExecutor extends ShellExecutor` | 61 |
| method | LocalBashExecutor.constructor | `constructor(ctx: Context, config: Config);` | 68 |
| default | LocalBashExecutor | `export default LocalBashExecutor;` | 114 |

