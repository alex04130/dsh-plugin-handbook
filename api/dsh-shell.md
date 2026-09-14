# dsh-shell

> Abstract bash executor seam (ctx.shell) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-shell/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SHELL_SETTINGS_NAMESPACE | `export declare const SHELL_SETTINGS_NAMESPACE = "shell"` | 19 |
| re-export | { DSH_ENV_PREFIX } | `export { DSH_ENV_PREFIX } from './types.ts';` | 20 |
| re-export | { parseExitStatus } | `export { parseExitStatus } from './render.ts';` | 22 |
| class | ShellExecutor | `export declare abstract class ShellExecutor extends Service` | 48 |
| method | ShellExecutor.constructor | `constructor(ctx: Context);` | 49 |
| default | ShellExecutor | `export default ShellExecutor;` | 77 |

## dsh-shell/lib/types/render.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ParsedExitStatus | `export type ParsedExitStatus` | 12 |
| function | parseExitStatus | `export declare function parseExitStatus(text: string): ParsedExitStatus` | 39 |

## dsh-shell/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DSH_ENV_PREFIX } | `export { DSH_ENV_PREFIX } from '@deepseek-ai/dsh-subprocess';` | 11 |
| interface | ShellSandboxInfo | `export interface ShellSandboxInfo` | 18 |
| interface | ShellExecRequest | `export interface ShellExecRequest` | 34 |
| interface | ShellExecSpec | `export interface ShellExecSpec` | 81 |
| interface | ShellRunResult | `export interface ShellRunResult` | 107 |
| type | ShellProcessStatus | `export type ShellProcessStatus` | 134 |
| interface | ShellProcessRead | `export interface ShellProcessRead` | 136 |
| interface | ShellProcess | `export interface ShellProcess` | 152 |

