# dsh-workflow-worker-thread

> worker-thread workflow engine: executes model-written orchestration scripts off the host event loop, bridging agent() calls back to ctx.subagents
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-workflow-worker-thread/lib/types/host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | workerSpawnEnv | `export declare function workerSpawnEnv(platform?: NodeJS.Platform, tsconfigPath?: string): NodeJS.ProcessEnv` | 31 |
| class | WorkerRun | `export declare class WorkerRun implements WorkflowRun` | 41 |
| method | WorkerRun.constructor | `constructor(ctx: Context, subagents: SubagentRuntime, id: WorkflowRunId, meta: WorkflowMeta, parent: Agent, init: WorkerInit, provider: string, disposeGraceMs: ` | 78 |

## dsh-workflow-worker-thread/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { validateMeta } | `export { validateMeta } from './meta.ts';` | 12 |
| re-export | { materializeFromRealm, MaterializeError | `export { materializeFromRealm, MaterializeError } from './realm.ts';` | 13 |
| interface | Config | `export interface Config` | 16 |
| class | WorkerThreadWorkflowEngine | `declare class WorkerThreadWorkflowEngine extends WorkflowEngine` | 40 |
| method | WorkerThreadWorkflowEngine.constructor | `constructor(ctx: Context, config: Config);` | 44 |
| default | WorkerThreadWorkflowEngine | `export default WorkerThreadWorkflowEngine;` | 57 |

## dsh-workflow-worker-thread/lib/types/meta.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | validateMeta | `export declare function validateMeta(value: unknown): WorkflowMeta` | 18 |

## dsh-workflow-worker-thread/lib/types/protocol.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkerToHostPayloads | `export interface WorkerToHostPayloads` | 31 |
| interface | HostToWorkerPayloads | `export interface HostToWorkerPayloads` | 82 |
| type | WorkerToHostMessage | `export type WorkerToHostMessage<T extends WorkerToHostType` | 118 |
| type | HostToWorkerMessage | `export type HostToWorkerMessage<T extends HostToWorkerType` | 127 |

## dsh-workflow-worker-thread/lib/types/realm.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | MaterializeError | `export declare class MaterializeError extends Error` | 11 |
| method | MaterializeError.constructor | `constructor(path: string, reason: string);` | 14 |
| function | renderThrown | `export declare function renderThrown(error: unknown): string` | 25 |
| function | materializeFromRealm | `export declare function materializeFromRealm(value: unknown, root?: string): unknown` | 38 |

## dsh-workflow-worker-thread/lib/types/runtime.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ExecutionObserver | `export interface ExecutionObserver` | 17 |
| class | WorkflowExecution | `export declare class WorkflowExecution` | 29 |
| method | WorkflowExecution.constructor | `constructor(meta: WorkflowMeta, body: string, args: unknown, limits: WorkerLimits, observer: ExecutionObserver, children: ChildPort);` | 42 |

## dsh-workflow-worker-thread/lib/types/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | requireParentPort | `export declare function requireParentPort(port: MessagePort \| null): MessagePort` | 21 |
| function | runWorkerSession | `export declare function runWorkerSession(port: MessagePort, init: WorkerInit): Promise<void>` | 32 |

## dsh-workflow-worker-thread/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkerLimits | `export interface WorkerLimits` | 14 |
| interface | WorkerInit | `export interface WorkerInit` | 25 |
| interface | ChildStartRequest | `export interface ChildStartRequest` | 36 |
| interface | ChildResult | `export interface ChildResult` | 51 |
| interface | ChildHandle | `export interface ChildHandle` | 63 |
| interface | ChildPort | `export interface ChildPort` | 79 |

## dsh-workflow-worker-thread/lib/types/worker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 7 |

