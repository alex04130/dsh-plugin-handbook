# dsh-jobs

> Background job registry (ctx.jobs) for the DeepSeek Harness — shared ids, owner isolation, polling, cancellation, and completion listeners for long-running tool work
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-jobs/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | JobId | `export type JobId` | 17 |
| function | JobId | `export declare function JobId(id: string): JobId` | 23 |

## dsh-jobs/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { JobId } | `export { JobId } from './types.ts';` | 11 |
| class | JobRegistry | `export declare abstract class JobRegistry extends Service` | 45 |
| method | JobRegistry.constructor | `constructor(ctx: Context);` | 46 |
| default | JobRegistry | `export default JobRegistry;` | 144 |

## dsh-jobs/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "jobs-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-jobs/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { JobId } | `export { JobId } from './brand.ts';` | 9 |
| type | JobStatus | `export type JobStatus` | 14 |
| interface | JobKindMap | `export interface JobKindMap` | 19 |
| type | JobKind | `export type JobKind` | 24 |
| interface | JobOutcome | `export interface JobOutcome` | 26 |
| interface | JobStart | `export interface JobStart` | 39 |
| interface | JobHooks | `export interface JobHooks` | 64 |
| interface | JobSnapshot | `export interface JobSnapshot` | 88 |
| interface | JobRead | `export interface JobRead` | 121 |
| type | JobDoneListener | `export type JobDoneListener` | 135 |
| type | JobsChangedListener | `export type JobsChangedListener` | 145 |

