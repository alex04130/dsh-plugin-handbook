# dsh-spill-policy

> Tool-result spill policy for the DeepSeek Harness — replaces oversized plain-text tool results with a retained preview plus a spill-file path (no service API)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-spill-policy/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 49 |
| const | name | `export declare const name = "spill-policy"` | 58 |
| const | inject | `export declare const inject: string[]` | 60 |
| const | Config | `export declare const Config: z<Config>` | 61 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 62 |

## dsh-spill-policy/lib/types/notice.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | formatSpillNotice | `export declare function formatSpillNotice(omitted: Omitted, ref: Pick<SpillRef, 'locator' \| 'retrievalHint'>): string` | 10 |
| function | hasSpillNotice | `export declare function hasSpillNotice(text: string): boolean` | 17 |

## dsh-spill-policy/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SpillPolicyExec | `export interface SpillPolicyExec` | 14 |

