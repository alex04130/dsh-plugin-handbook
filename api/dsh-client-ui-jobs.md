# dsh-client-ui-jobs

> Session-header background-job list: live registry state mirrored from session/jobs frames
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-jobs/lib/types/client/JobListAction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | JobListActionProps | `export type JobListActionProps` | 4 |
| function | JobListAction | `export declare function JobListAction({ sessionId, useSessions, t }: JobListActionProps): import("react").JSX.Element \| null` | 12 |

## dsh-client-ui-jobs/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 17 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 22 |

## dsh-client-ui-jobs/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "job"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| const | en | `export declare const en: Record<JobKey, string>` | 23 |
| type | JobKey | `export type JobKey` | 25 |

## dsh-client-ui-jobs/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

