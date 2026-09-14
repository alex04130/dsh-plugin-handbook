# dsh-hook-protocol

> Shared Claude Code / Codex hook wire protocol: matcher engine, stdin/exit-code/stdout codec, multi-hook merge, and hook/* session events
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-hook-protocol/lib/types/codec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | parseHookOutput | `export declare function parseHookOutput(exitCode: number \| undefined, stdout: string, stderr: string, expectedEventName?: string): HookOutput` | 20 |

## dsh-hook-protocol/lib/types/detached.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DetachedRuns | `export interface DetachedRuns` | 8 |
| function | createDetachedRuns | `export declare function createDetachedRuns(): DetachedRuns` | 41 |

## dsh-hook-protocol/lib/types/events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | HookInvocation | `export interface HookInvocation` | 11 |
| interface | HookResultRecord | `export interface HookResultRecord` | 24 |
| const | DEFAULT_STDERR_SUMMARY_MAX_CHARS | `export declare const DEFAULT_STDERR_SUMMARY_MAX_CHARS = 500` | 49 |
| function | summarizeStderr | `export declare function summarizeStderr(stderr: string, maxChars: number): string \| undefined` | 59 |
| function | appendHookInvoked | `export declare function appendHookInvoked(session: Session, invocation: HookInvocation): void` | 65 |
| function | appendHookResult | `export declare function appendHookResult(session: Session, record: HookResultRecord): void` | 73 |

## dsh-hook-protocol/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { matcherDiagnostic, matchesMatcher } | `export { matcherDiagnostic, matchesMatcher } from './matcher.ts';` | 9 |
| re-export | { parseHookOutput } | `export { parseHookOutput } from './codec.ts';` | 10 |
| re-export | { DEFAULT_HOOK_TIMEOUT_MS, runHook } | `export { DEFAULT_HOOK_TIMEOUT_MS, runHook } from './runner.ts';` | 11 |
| re-export | { mergeHookOutputs } | `export { mergeHookOutputs } from './merge.ts';` | 13 |
| re-export | { appendHookInvoked, appendHookResult, D | `export { appendHookInvoked, appendHookResult, DEFAULT_STDERR_SUMMARY_MAX_CHARS, summarizeStderr } from './events.ts';` | 15 |
| re-export | { createDetachedRuns } | `export { createDetachedRuns } from './detached.ts';` | 17 |

## dsh-hook-protocol/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "hook-protocol-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-hook-protocol/lib/types/matcher.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | matcherDiagnostic | `export declare function matcherDiagnostic(matcher: string \| undefined, mode: MatcherMode): string \| undefined` | 16 |
| function | matchesMatcher | `export declare function matchesMatcher(matcher: string \| undefined, query: string, mode: MatcherMode): boolean` | 28 |

## dsh-hook-protocol/lib/types/merge.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MergedDecision | `export type MergedDecision` | 10 |
| interface | MergedHookOutcome | `export interface MergedHookOutcome` | 12 |
| function | mergeHookOutputs | `export declare function mergeHookOutputs(outputs: HookOutput[]): MergedHookOutcome` | 38 |

## dsh-hook-protocol/lib/types/runner.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_HOOK_TIMEOUT_MS | `export declare const DEFAULT_HOOK_TIMEOUT_MS = 600000` | 17 |
| interface | RunHookOptions | `export interface RunHookOptions` | 19 |
| interface | RunHookResult | `export interface RunHookResult` | 45 |
| function | runHook | `export declare function runHook(bash: ShellExecutor, hook: CommandHook, options: RunHookOptions, now: () => number): Promise<RunHookResult>` | 61 |

## dsh-hook-protocol/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | HookDialect | `export type HookDialect` | 46 |
| interface | CommandHook | `export interface CommandHook` | 53 |
| interface | MatcherGroup | `export interface MatcherGroup` | 64 |
| type | MatcherMode | `export type MatcherMode` | 74 |
| interface | HookOutput | `export interface HookOutput` | 83 |

