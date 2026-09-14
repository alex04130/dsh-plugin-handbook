# dsh-pwsh-sandbox

> Sandbox-consuming implementation of the DeepSeek Harness PowerShell executor seam (confines every command via ctx.sandbox, reports denial/enforcement result facts)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-pwsh-sandbox/lib/types/helpers.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isRunnerSpawnFailure | `export declare function isRunnerSpawnFailure(error: unknown, runnerProgram: string \| undefined, workdir: string): boolean` | 24 |
| interface | RunnerFailureMatch | `interface RunnerFailureMatch` | 26 |
| function | classifyDenial | `export declare function classifyDenial(result: ShellRunResult, signatures: readonly string[]): boolean` | 36 |
| function | classifyRunnerFailure | `export declare function classifyRunnerFailure(exitCode: number \| null, stderr: string, rules: readonly RunnerFailureRule[]): RunnerFailureMatch \| undefined` | 47 |
| function | matchesSignature | `export declare function matchesSignature(exitCode: number \| null, stderr: string, signatures: readonly string[]): boolean` | 55 |
| export-list |  | `export {};` | 56 |

## dsh-pwsh-sandbox/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Config | `export type Config` | 27 |
| class | SandboxPwshExecutor | `export declare class SandboxPwshExecutor extends PwshLocalExecutor` | 37 |
| method | SandboxPwshExecutor.constructor | `constructor(ctx: Context, config: Config);` | 47 |
| default | SandboxPwshExecutor | `export default SandboxPwshExecutor;` | 73 |

