# dsh-terminal-bash

> Persistent shell PTY backend over the DeepSeek Harness subprocess terminal primitive
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-terminal-bash/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ShellDialect | `export type ShellDialect` | 4 |
| interface | Config | `export interface Config` | 6 |
| type | ResolvedConfig | `export type ResolvedConfig` | 42 |
| const | DEFAULT_BASH_SHELL | `export declare const DEFAULT_BASH_SHELL = "/bin/bash"` | 48 |
| const | DEFAULT_BASH_ARGS | `export declare const DEFAULT_BASH_ARGS: string[]` | 50 |
| const | DEFAULT_PWSH_ARGS | `export declare const DEFAULT_PWSH_ARGS: string[]` | 52 |
| function | resolveConfig | `export declare function resolveConfig(config: Config): ResolvedConfig` | 62 |
| const | Config | `export declare const Config: z<Config>` | 64 |
| function | validateConfig | `export declare function validateConfig(config: Config): asserts config is ResolvedConfig` | 70 |

## dsh-terminal-bash/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { Config } | `export { Config } from './config.ts';` | 11 |
| const | name | `export declare const name = "terminal-bash"` | 14 |
| const | inject | `export declare const inject: string[]` | 16 |
| const | PWSH_PROMPT_SETUP | `export declare const PWSH_PROMPT_SETUP: string` | 23 |
| class | BashTerminalBackend | `export declare class BashTerminalBackend implements TerminalBackend` | 25 |
| method | BashTerminalBackend.constructor | `constructor(ctx: Context, config: ResolvedConfig, spawnTerminal?: (spec: SubprocessTerminalSpawnSpec) => Promise<SubprocessTerminalHandle>, createSession?: (ter` | 31 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 35 |

## dsh-terminal-bash/lib/types/sanitize.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PROMPT_MARKER_PREFIX | `export declare const PROMPT_MARKER_PREFIX = "133;D;"` | 3 |
| const | CONTROLLED_PROMPT | `export declare const CONTROLLED_PROMPT = "dsh> "` | 5 |
| interface | SanitizedChunk | `export interface SanitizedChunk` | 7 |
| class | TerminalSanitizer | `export declare class TerminalSanitizer` | 18 |
| method | TerminalSanitizer.constructor | `constructor(maxPendingBytes: number);` | 25 |
| function | normalizeTerminalText | `export declare function normalizeTerminalText(text: string): string` | 46 |

## dsh-terminal-bash/lib/types/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | LocalPtySession | `export declare class LocalPtySession implements TerminalBackendSession` | 6 |
| method | LocalPtySession.constructor | `constructor(terminal: SubprocessTerminalHandle, config: ResolvedConfig);` | 44 |

