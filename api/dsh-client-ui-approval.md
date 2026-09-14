# dsh-client-ui-approval

> Approval composer takeover over the scoped Remote Event waterfall
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-approval/lib/types/client/ApprovalPanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ApprovalPanel | `export declare function ApprovalPanel(props: ApprovalComposerProps): import("react").JSX.Element` | 7 |

## dsh-client-ui-approval/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ApprovalDetailOwnerProps | `export interface ApprovalDetailOwnerProps` | 27 |
| interface | ApprovalPresentationRequest | `export interface ApprovalPresentationRequest` | 32 |
| type | ApprovalDecision | `export type ApprovalDecision` | 43 |
| class | PendingApproval | `export declare class PendingApproval` | 45 |
| method | PendingApproval.constructor | `constructor(sessionId: SessionId, request: ApprovalPresentationRequest);` | 64 |
| type | ApprovalComposerProps | `export type ApprovalComposerProps` | 86 |

## dsh-client-ui-approval/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 6 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 11 |

## dsh-client-ui-approval/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | ApprovalKey | `export type ApprovalKey` | 11 |
| const | en | `export declare const en: {` | 13 |

## dsh-client-ui-approval/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

