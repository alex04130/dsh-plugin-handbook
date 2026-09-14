# dsh-tool-bash

> Model-facing bash tool with optional generic background-job and sandbox-escalation support
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-bash/lib/types/background.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | processOutcome | `export declare function processOutcome(proc: ShellProcess): {` | 15 |

## dsh-tool-bash/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-bash"` | 12 |
| const | inject | `export declare const inject: string[]` | 13 |
| interface | Config | `export interface Config` | 15 |
| const | Config | `export declare const Config: z<Config>` | 20 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 21 |

## dsh-tool-bash/lib/types/render.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | renderResult | `export declare function renderResult(result: ShellRunResult, escalationModes?: readonly SandboxMode[]): string` | 19 |
| function | renderProcessRead | `export declare function renderProcessRead(read: ShellProcessRead, sandbox?: ShellSandboxInfo, escalationModes?: readonly SandboxMode[]): string` | 30 |
| re-export | { parseExitStatus, type ParsedExitStatus | `export { parseExitStatus, type ParsedExitStatus } from '@deepseek-ai/dsh-shell';` | 37 |

