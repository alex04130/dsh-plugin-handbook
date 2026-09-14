# dsh-tool-call-timeout-policy

> Tool-call timeout policy: a tools/execute wrapper that arms a per-tool deadline on exec.signal and returns TOOL_TIMEOUT when it wins
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-call-timeout-policy/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TOOL_TIMEOUT | `export declare const TOOL_TIMEOUT = "TOOL_TIMEOUT"` | 21 |
| const | name | `export declare const name = "timeout-policy"` | 23 |
| const | inject | `export declare const inject: string[]` | 25 |
| function | apply | `export declare function apply(ctx: Context): void` | 31 |

