# dsh-bash-sandbox

> Sandbox-consuming implementation of the DeepSeek Harness bash executor seam (confines every command via ctx.sandbox, reports denial/enforcement result facts)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-bash-sandbox/lib/types/helpers.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isRunnerSpawnFailure | `export declare function isRunnerSpawnFailure(error: unknown, runnerProgram: string \| undefined, workdir: string): boolean` | 22 |
| interface | RunnerFailureMatch | `interface RunnerFailureMatch` | 24 |
| function | classifyDenial | `export declare function classifyDenial(result: ShellRunResult, signatures: readonly string[]): boolean` | 34 |
| function | classifyRunnerFailure | `export declare function classifyRunnerFailure(exitCode: number \| null, stderr: string, rules: readonly RunnerFailureRule[]): RunnerFailureMatch \| undefined` | 45 |
| function | matchesSignature | `export declare function matchesSignature(exitCode: number \| null, stderr: string, signatures: readonly string[]): boolean` | 53 |
| export-list |  | `export {};` | 54 |

## dsh-bash-sandbox/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Config | `export type Config` | 23 |
| class | SandboxBashExecutor | `export declare class SandboxBashExecutor extends LocalBashExecutor` | 31 |
| method | SandboxBashExecutor.constructor | `constructor(ctx: Context, config: Config);` | 41 |
| default | SandboxBashExecutor | `export default SandboxBashExecutor;` | 67 |

