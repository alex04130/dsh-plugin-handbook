# dsh-client-ui-message-feedback

> The Web feedback surface: per-message Like/Dislike in the assistant-message action strip and the feedback dialog behind both ratings and /feedback, backed by the messageFeedback and sessionFeedback Host Remotes
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-message-feedback/lib/types/client/FeedbackDialog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | FeedbackDialog | `export declare function FeedbackDialog({ useDialog, edit, submit, dismiss, dismissFailure, dismissToast, t, }: FeedbackDialogProps): import("react").JSX.Element` | 15 |

## dsh-client-ui-message-feedback/lib/types/client/MessageFeedbackActions.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | MessageFeedbackActions | `export declare function MessageFeedbackActions({ messageId, ensure, current, retract, openDialog, useFeedback, t, }: MessageFeedbackActionProps): import("react"` | 16 |

## dsh-client-ui-message-feedback/lib/types/client/controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MessageFeedbackStatus | `export type MessageFeedbackStatus` | 16 |
| interface | MessageFeedbackView | `export interface MessageFeedbackView` | 18 |
| interface | MessageFeedbackActionFailure | `export interface MessageFeedbackActionFailure` | 26 |
| type | MessageFeedbackActionResult | `export type MessageFeedbackActionResult` | 34 |
| function | describe | `export declare function describe(code: string): string` | 42 |
| class | MessageFeedbackController | `export declare class MessageFeedbackController implements HostObservable<MessageFeedbackView>` | 47 |
| method | MessageFeedbackController.constructor | `constructor(ctx: ClientContext, sessionId: SessionId);` | 59 |

## dsh-client-ui-message-feedback/lib/types/client/dialog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FeedbackDialogTarget | `export type FeedbackDialogTarget` | 14 |
| interface | FeedbackDialogState | `export interface FeedbackDialogState` | 22 |
| type | FeedbackSubmit | `export type FeedbackSubmit` | 39 |
| class | FeedbackDialogController | `export declare class FeedbackDialogController` | 41 |
| method | FeedbackDialogController.constructor | `constructor(submit: FeedbackSubmit);` | 51 |

## dsh-client-ui-message-feedback/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 15 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 21 |

## dsh-client-ui-message-feedback/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | MessageFeedbackKey | `export type MessageFeedbackKey` | 26 |
| const | en | `export declare const en: {` | 34 |

## dsh-client-ui-message-feedback/lib/types/client/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | MessageFeedbackInjected | `export interface MessageFeedbackInjected` | 16 |
| type | MessageFeedbackActionProps | `export type MessageFeedbackActionProps` | 44 |
| interface | FeedbackDialogInjected | `export interface FeedbackDialogInjected` | 46 |
| type | FeedbackDialogProps | `export type FeedbackDialogProps` | 69 |

## dsh-client-ui-message-feedback/lib/types/client/surface.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | FeedbackSurface | `export declare class FeedbackSurface` | 13 |
| method | FeedbackSurface.constructor | `constructor(ctx: ClientContext, sessionId: SessionId);` | 24 |

## dsh-client-ui-message-feedback/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

