# dsh-authorization

> Authorization seam (ctx.authorization): plugin-owned flows that obtain a credential through a conversation with the human
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-authorization/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | AuthorizationError | `export declare class AuthorizationError extends HarnessError` | 50 |
| method | AuthorizationError.constructor | `constructor(message: string, code: string, options?: ErrorOptions);` | 51 |
| class | AuthorizationDeclinedError | `export declare class AuthorizationDeclinedError extends AuthorizationError` | 63 |
| method | AuthorizationDeclinedError.constructor | `constructor(message?: string);` | 64 |
| interface | AuthorizationSession | `export interface AuthorizationSession` | 70 |
| interface | AuthorizationFlow | `export interface AuthorizationFlow` | 98 |
| interface | AuthorizationInteraction | `export interface AuthorizationInteraction` | 123 |
| interface | AuthorizationRequest | `export interface AuthorizationRequest` | 139 |
| class | AuthorizationService | `export declare class AuthorizationService extends Service` | 153 |
| method | AuthorizationService.constructor | `constructor(ctx: Context);` | 158 |
| default | AuthorizationService | `export default AuthorizationService;` | 222 |

## dsh-authorization/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "authorization-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-authorization/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AuthorizationMethod | `export interface AuthorizationMethod` | 9 |
| interface | AuthorizationNotice | `export interface AuthorizationNotice` | 16 |
| interface | AuthorizationPromptOption | `export interface AuthorizationPromptOption` | 25 |
| type | AuthorizationPrompt | `export type AuthorizationPrompt` | 38 |
| type | AuthorizationStatus | `export type AuthorizationStatus` | 59 |
| type | AuthorizationSettlement | `export type AuthorizationSettlement` | 66 |
| interface | AuthorizationOutcome | `export interface AuthorizationOutcome` | 68 |
| interface | AuthorizationEntry | `export interface AuthorizationEntry` | 73 |

