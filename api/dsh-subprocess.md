# dsh-subprocess

> Subprocess seam (ctx.subprocess) for the DeepSeek Harness — managed process groups, bounded spill-backed output, and escalated kills behind one abstract service
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-subprocess/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DSH_ENV_PREFIX } | `export { DSH_ENV_PREFIX } from './types.ts';` | 13 |
| const | SENSITIVE_ENV_PATTERN | `export declare const SENSITIVE_ENV_PATTERN: RegExp` | 22 |
| function | scrubbedParentEnv | `export declare function scrubbedParentEnv(): Record<string, string>` | 40 |
| class | SubprocessRuntime | `export declare abstract class SubprocessRuntime extends Service` | 75 |
| method | SubprocessRuntime.constructor | `constructor(ctx: Context);` | 76 |
| default | SubprocessRuntime | `export default SubprocessRuntime;` | 106 |

## dsh-subprocess/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DSH_ENV_PREFIX | `export declare const DSH_ENV_PREFIX: "DSH_"` | 11 |
| type | DshEnvironmentKey | `export type DshEnvironmentKey` | 13 |
| type | DshEnvironment | `export type DshEnvironment` | 15 |
| interface | CollectedOutput | `export interface CollectedOutput` | 17 |
| type | SubprocessStdinMode | `export type SubprocessStdinMode` | 30 |
| interface | SubprocessCollect | `export interface SubprocessCollect` | 39 |
| type | SubprocessOutputMode | `export type SubprocessOutputMode` | 54 |
| interface | SubprocessStdio | `export interface SubprocessStdio` | 56 |
| interface | SubprocessSpawnSpec | `export interface SubprocessSpawnSpec` | 67 |
| interface | SubprocessOutcome | `export interface SubprocessOutcome` | 105 |
| interface | SubprocessOutputRead | `export interface SubprocessOutputRead` | 112 |
| interface | SubprocessOutputReader | `export interface SubprocessOutputReader` | 129 |
| interface | SubprocessCollectedOutputs | `export interface SubprocessCollectedOutputs` | 140 |
| interface | SubprocessHandle | `export interface SubprocessHandle` | 154 |
| type | SubprocessTerminalSignal | `export type SubprocessTerminalSignal` | 185 |
| interface | SubprocessTerminalSpawnSpec | `export interface SubprocessTerminalSpawnSpec` | 187 |
| interface | SubprocessTerminalForeground | `export interface SubprocessTerminalForeground` | 204 |
| interface | SubprocessTerminalHandle | `export interface SubprocessTerminalHandle` | 216 |

