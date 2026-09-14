# dsh-user-approval

> User-approval seam (ctx.approval) for the DeepSeek Harness: one-shot permission decisions dispatched to composed answerers over the approval/request waterfall, fail-closed by default
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-user-approval/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ApprovalRequestId } | `export { ApprovalRequestId } from './types.ts';` | 34 |
| type | ApprovalPolicy | `export type ApprovalPolicy` | 46 |
| const | APPROVAL_POLICIES | `export declare const APPROVAL_POLICIES: readonly ApprovalPolicy[]` | 48 |
| function | setApprovalPolicy | `export declare function setApprovalPolicy(session: Session, policy: ApprovalPolicy): void` | 55 |
| interface | ApprovalRequest | `export interface ApprovalRequest extends ApprovalRequestEvent` | 60 |
| interface | Config | `export interface Config` | 83 |
| class | ApprovalService | `export declare class ApprovalService extends Service` | 97 |
| method | ApprovalService.constructor | `constructor(ctx: Context, config: Config);` | 100 |
| default | ApprovalService | `export default ApprovalService;` | 150 |

## dsh-user-approval/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "user-approval-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-user-approval/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ApprovalRequestId | `export type ApprovalRequestId` | 15 |
| function | ApprovalRequestId | `export declare function ApprovalRequestId(id: string): ApprovalRequestId` | 21 |
| type | ApprovalOutcome | `export type ApprovalOutcome` | 26 |
| interface | ApprovalRequestEvent | `export interface ApprovalRequestEvent` | 55 |

