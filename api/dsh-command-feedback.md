# dsh-command-feedback

> Log-only session feedback: the record event, the sessionFeedback Host Remote, and the human-facing slash command
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-command-feedback/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-command-feedback/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 20 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 21 |

## dsh-command-feedback/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FEEDBACK_CATEGORIES | `export declare const FEEDBACK_CATEGORIES: readonly ["task-result", "instruction-following", "product-interaction", "service-stability", "resource-cost", "securi` | 19 |
| const | name | `export declare const name = "command-feedback"` | 20 |
| const | inject | `export declare const inject: string[]` | 21 |
| function | recordFeedback | `export declare function recordFeedback(session: Session, entry: FeedbackRecord): void` | 34 |
| class | SessionFeedbackService | `export declare class SessionFeedbackService extends TypertRemoteService` | 36 |
| method | SessionFeedbackService.constructor | `constructor(ctx: Context);` | 41 |
| function | apply | `export declare function apply(ctx: Context): void` | 55 |

## dsh-command-feedback/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FeedbackCategory | `export type FeedbackCategory` | 11 |
| interface | FeedbackRecord | `export interface FeedbackRecord` | 17 |
| interface | SessionFeedbackRecordRequest | `export interface SessionFeedbackRecordRequest` | 33 |
| interface | SessionFeedbackRecordValue | `export interface SessionFeedbackRecordValue` | 42 |
| interface | SessionFeedbackSessionNotFound | `export interface SessionFeedbackSessionNotFound` | 47 |
| type | SessionFeedbackRecordResult | `export type SessionFeedbackRecordResult` | 52 |

