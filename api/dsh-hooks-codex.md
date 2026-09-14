# dsh-hooks-codex

> Bridge plugin: run a Codex hooks.json hook config on the DeepSeek Harness interception seams
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-hooks-codex/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CODEX_EVENTS | `export declare const CODEX_EVENTS: readonly ["PreToolUse", "PostToolUse", "SessionStart", "UserPromptSubmit", "Stop"]` | 9 |
| type | CodexHookConfig | `export type CodexHookConfig` | 11 |
| interface | SkippedHook | `export interface SkippedHook` | 13 |
| interface | ParsedCodexConfig | `export interface ParsedCodexConfig` | 18 |
| function | parseCodexConfig | `export declare function parseCodexConfig(raw: unknown): ParsedCodexConfig` | 31 |

## dsh-hooks-codex/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "hooks-codex"` | 12 |
| const | inject | `export declare const inject: string[]` | 13 |
| interface | Config | `export interface Config` | 15 |
| const | Config | `export declare const Config: z<Config>` | 30 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 31 |

