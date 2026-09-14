# dsh-hooks-claude-code

> Bridge plugin: run a Claude Code hooks.json / settings hook config on the DeepSeek Harness interception seams
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-hooks-claude-code/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ClaudeCodeHookConfig | `export type ClaudeCodeHookConfig` | 10 |
| interface | SkippedHook | `export interface SkippedHook` | 12 |
| interface | ParsedClaudeConfig | `export interface ParsedClaudeConfig` | 17 |
| interface | SubstitutionVars | `export interface SubstitutionVars` | 22 |
| function | substituteCommand | `export declare function substituteCommand(command: string, vars: SubstitutionVars): string` | 34 |
| function | parseClaudeCodeConfig | `export declare function parseClaudeCodeConfig(raw: unknown, vars?: SubstitutionVars): ParsedClaudeConfig` | 49 |

## dsh-hooks-claude-code/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "hooks-claude-code"` | 12 |
| const | inject | `export declare const inject: string[]` | 13 |
| interface | Config | `export interface Config` | 15 |
| const | Config | `export declare const Config: z<Config>` | 41 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 42 |

