# dsh-llm-retry

> Provider-routed LLM request retry policy for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-llm-retry/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RetryId | `export type RetryId` | 3 |
| function | RetryId | `export declare function RetryId(id: string): RetryId` | 9 |

## dsh-llm-retry/lib/types/history.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | providerForOpenStep | `export declare function providerForOpenStep(events: readonly SessionEvent[], turn: number, step: number): string \| undefined` | 12 |

## dsh-llm-retry/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { RetryId } | `export { RetryId } from './brand.ts';` | 11 |
| const | name | `export declare const name = "llm-retry"` | 12 |
| const | inject | `export declare const inject: string[]` | 13 |
| type | Config | `export type Config` | 15 |
| const | Config | `export declare const Config: z<Config>` | 17 |
| interface | RetryInternals | `export interface RetryInternals` | 19 |
| interface | RetryStateEntry | `interface RetryStateEntry` | 29 |
| type | LlmRetryState | `type LlmRetryState` | 33 |
| function | apply | `export declare function apply(ctx: Context, config?: Config, internals?: RetryInternals): void` | 40 |

## dsh-llm-retry/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "llm-retry-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-llm-retry/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | LlmRetryEventData | `export type LlmRetryEventData` | 13 |
| interface | LlmRetryStartedEventData | `export interface LlmRetryStartedEventData` | 36 |

