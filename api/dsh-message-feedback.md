# dsh-message-feedback

> Canonical Session-log ratings and notes for finalized assistant messages
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-message-feedback/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-message-feedback/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 24 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 25 |

## dsh-message-feedback/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 12 |
| class | MessageFeedbackService | `export declare class MessageFeedbackService extends TypertRemoteService` | 33 |
| method | MessageFeedbackService.constructor | `constructor(ctx: Context, config: Config);` | 44 |
| default | MessageFeedbackService | `export default MessageFeedbackService;` | 72 |

## dsh-message-feedback/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MessageFeedbackVersion | `export type MessageFeedbackVersion` | 12 |
| type | MessageFeedbackRating | `export type MessageFeedbackRating` | 14 |
| interface | MessageFeedbackItem | `export interface MessageFeedbackItem` | 16 |
| interface | MessageFeedbackPut | `export interface MessageFeedbackPut` | 33 |
| interface | MessageFeedbackDelete | `export interface MessageFeedbackDelete` | 40 |
| interface | MessageFeedbackListRequest | `export interface MessageFeedbackListRequest` | 55 |
| interface | MessageFeedbackListValue | `export interface MessageFeedbackListValue` | 60 |
| interface | MessageFeedbackPutRequest | `export interface MessageFeedbackPutRequest` | 65 |
| interface | MessageFeedbackDeleteRequest | `export interface MessageFeedbackDeleteRequest` | 80 |
| interface | MessageFeedbackDeleteValue | `export interface MessageFeedbackDeleteValue` | 89 |
| interface | MessageFeedbackSessionNotFound | `export interface MessageFeedbackSessionNotFound` | 94 |
| interface | MessageFeedbackTargetNotFound | `export interface MessageFeedbackTargetNotFound` | 99 |
| interface | MessageFeedbackVersionConflict | `export interface MessageFeedbackVersionConflict` | 105 |
| interface | MessageFeedbackNoteBlank | `export interface MessageFeedbackNoteBlank` | 111 |
| interface | MessageFeedbackNoteTooLarge | `export interface MessageFeedbackNoteTooLarge` | 115 |
| type | MessageFeedbackFailure | `export type MessageFeedbackFailure` | 121 |
| interface | MessageFeedbackSuccess | `export interface MessageFeedbackSuccess<T>` | 123 |
| interface | MessageFeedbackRejected | `export interface MessageFeedbackRejected<E extends MessageFeedbackFailure>` | 128 |
| type | MessageFeedbackListResult | `export type MessageFeedbackListResult` | 133 |
| type | MessageFeedbackPutResult | `export type MessageFeedbackPutResult` | 135 |
| type | MessageFeedbackDeleteResult | `export type MessageFeedbackDeleteResult` | 137 |

