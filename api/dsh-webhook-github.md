# dsh-webhook-github

> Signed GitHub HTTP webhook adapter for the DeepSeek Harness webhook runtime
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-webhook-github/lib/types/body.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | WebhookHttpError | `export declare class WebhookHttpError extends Error` | 4 |
| method | WebhookHttpError.constructor | `constructor(status: 400 \| 401 \| 405 \| 413 \| 415 \| 503, message: string);` | 7 |
| function | readBoundedUtf8Body | `export declare function readBoundedUtf8Body(request: IncomingMessage, maxBodyBytes: number): Promise<string>` | 16 |

## dsh-webhook-github/lib/types/handler.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GitHubWebhookHandlerConfig | `export interface GitHubWebhookHandlerConfig` | 6 |
| function | createGitHubWebhookHandler | `export declare function createGitHubWebhookHandler(ctx: Context, config: GitHubWebhookHandlerConfig): WebRoute['handler']` | 17 |

## dsh-webhook-github/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "webhook-github"` | 6 |
| const | inject | `export declare const inject: string[]` | 8 |
| interface | Config | `export interface Config` | 10 |
| const | Config | `export declare const Config: z<Config>` | 20 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 22 |

## dsh-webhook-github/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | GitHubJsonObject | `export type GitHubJsonObject` | 4 |
| interface | GitHubWebhookEvent | `export interface GitHubWebhookEvent` | 8 |

