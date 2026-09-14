# dsh-pwsh-local

> Local PowerShell implementation of the DeepSeek Harness bash executor seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-pwsh-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | ENV_OVERRIDES | `export declare const ENV_OVERRIDES: {` | 24 |
| const | ENCODING_PREAMBLE | `export declare const ENCODING_PREAMBLE = "[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false); $OutputEncoding = [System.Text.UTF8Encoding]::new` | 37 |
| interface | Config | `export interface Config` | 39 |
| type | ResolvedConfig | `type ResolvedConfig` | 61 |
| re-export | { candidatePwshPaths, resolvePwshPath } | `export { candidatePwshPaths, resolvePwshPath } from './resolve.ts';` | 62 |
| function | assertServiceablePwshConfig | `export declare function assertServiceablePwshConfig(config: Config): void` | 71 |
| class | PwshLocalExecutor | `export declare class PwshLocalExecutor extends ShellExecutor` | 77 |
| method | PwshLocalExecutor.constructor | `constructor(ctx: Context, config: Config);` | 90 |
| default | PwshLocalExecutor | `export default PwshLocalExecutor;` | 126 |

## dsh-pwsh-local/lib/types/resolve.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | candidatePwshPaths | `export declare function candidatePwshPaths(env?: NodeJS.ProcessEnv): string[]` | 17 |
| function | resolvePwshPath | `export declare function resolvePwshPath(configured?: string, env?: NodeJS.ProcessEnv, platform?: NodeJS.Platform): string` | 27 |

