# dsh-tool-pwsh

> Model-facing pwsh tool over the bash executor seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-pwsh/lib/types/background.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | processOutcome | `export declare function processOutcome(proc: ShellProcess): {` | 16 |

## dsh-tool-pwsh/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-pwsh"` | 28 |
| const | inject | `export declare const inject: string[]` | 29 |
| interface | Config | `export interface Config` | 31 |
| const | Config | `export declare const Config: z<Config>` | 36 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 37 |

## dsh-tool-pwsh/lib/types/render.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RenderablePwshResult | `export interface RenderablePwshResult` | 15 |
| function | renderPwshResult | `export declare function renderPwshResult(result: RenderablePwshResult, escalationModes?: readonly SandboxMode[]): string` | 34 |
| function | renderPwshProcessRead | `export declare function renderPwshProcessRead(read: ShellProcessRead, sandbox?: ShellSandboxInfo, escalationModes?: readonly SandboxMode[]): string` | 44 |

