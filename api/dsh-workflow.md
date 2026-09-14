# dsh-workflow

> Workflow capability seam: ctx.workflowEngine service, run vocabulary, and workflow/* events
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-workflow/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { WorkflowRunId } | `export { WorkflowRunId } from './types.ts';` | 10 |
| type | WorkflowEventName | `export type WorkflowEventName` | 74 |
| type | WorkflowErrorCode | `export type WorkflowErrorCode` | 81 |
| class | WorkflowError | `export declare class WorkflowError extends HarnessError` | 91 |
| method | WorkflowError.constructor | `constructor(message: string, code: WorkflowErrorCode, options?: ErrorOptions & {` | 94 |
| function | isFatalWorkflowError | `export declare function isFatalWorkflowError(error: unknown): boolean` | 103 |
| class | WorkflowEngine | `export declare abstract class WorkflowEngine extends Service` | 111 |
| method | WorkflowEngine.constructor | `constructor(ctx: Context);` | 112 |
| default | WorkflowEngine | `export default WorkflowEngine;` | 127 |

## dsh-workflow/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "workflow-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-workflow/lib/types/runtime-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkflowStartRequest | `export interface WorkflowStartRequest` | 15 |
| interface | WorkflowRun | `export interface WorkflowRun` | 35 |

## dsh-workflow/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WorkflowRunId | `export type WorkflowRunId` | 11 |
| function | WorkflowRunId | `export declare function WorkflowRunId(id: string): WorkflowRunId` | 17 |
| interface | WorkflowPhase | `export interface WorkflowPhase` | 22 |
| interface | WorkflowMeta | `export interface WorkflowMeta` | 39 |
| type | WorkflowStopReason | `export type WorkflowStopReason` | 55 |
| interface | WorkflowResult | `export interface WorkflowResult` | 63 |
| interface | WorkflowRunInfo | `export interface WorkflowRunInfo` | 80 |
| interface | WorkflowAgentInfo | `export interface WorkflowAgentInfo` | 87 |
| type | WorkflowAgentOutcome | `export type WorkflowAgentOutcome` | 98 |
| interface | WorkflowAgentEndInfo | `export interface WorkflowAgentEndInfo extends WorkflowAgentInfo` | 100 |
| interface | WorkflowResultInfo | `export interface WorkflowResultInfo` | 110 |

