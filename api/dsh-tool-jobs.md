# dsh-tool-jobs

> Model-facing background job control tools (job_output, job_list, job_kill) over the ctx.jobs registry
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-jobs/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-jobs"` | 12 |
| const | inject | `export declare const inject: string[]` | 13 |
| type | CompletionDelivery | `export type CompletionDelivery` | 19 |
| interface | Config | `export interface Config` | 21 |
| const | Config | `export declare const Config: z<Config>` | 36 |
| interface | PublicJobSnapshot | `export interface PublicJobSnapshot` | 38 |
| function | statusLine | `export declare function statusLine(snapshot: Pick<JobSnapshot, 'status' \| 'detail'>): string` | 52 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 53 |

