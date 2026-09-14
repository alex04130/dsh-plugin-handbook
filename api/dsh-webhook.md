# dsh-webhook

> Fire-and-forget webhook rule runtime that creates Workspace-backed DeepSeek Harness Sessions
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-webhook/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WebhookRuleId | `export type WebhookRuleId` | 4 |
| type | WebhookSourceId | `export type WebhookSourceId` | 6 |
| type | WebhookDeliveryId | `export type WebhookDeliveryId` | 8 |
| function | WebhookRuleId | `export declare function WebhookRuleId(value: string): WebhookRuleId` | 14 |
| function | WebhookSourceId | `export declare function WebhookSourceId(value: string): WebhookSourceId` | 20 |
| function | WebhookDeliveryId | `export declare function WebhookDeliveryId(value: string): WebhookDeliveryId` | 26 |

## dsh-webhook/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './brand.ts';` | 4 |
| class | WebhookRuntime | `export declare class WebhookRuntime extends Service` | 12 |
| method | WebhookRuntime.constructor | `constructor(ctx: Context);` | 17 |
| default | WebhookRuntime | `export default WebhookRuntime;` | 35 |

## dsh-webhook/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "webhook-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-webhook/lib/types/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createWebhookSession | `export declare function createWebhookSession(ctx: Context, delivery: VerifiedWebhookDelivery, ruleId: WebhookRuleId, request: WebhookSessionRequest, signal: Abo` | 16 |

## dsh-webhook/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WebhookEventMap | `export interface WebhookEventMap` | 5 |
| type | WebhookEventOf | `export type WebhookEventOf<K extends string>` | 8 |
| interface | VerifiedWebhookDelivery | `export interface VerifiedWebhookDelivery<K extends string` | 10 |
| interface | WebhookModelSelection | `export interface WebhookModelSelection` | 23 |
| interface | WebhookSessionRequest | `export interface WebhookSessionRequest` | 32 |
| interface | WebhookRule | `export interface WebhookRule<K extends string` | 47 |

