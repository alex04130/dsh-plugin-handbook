# dsh-code-runtime-worker-thread

> Worker-thread implementation of the DeepSeek Harness code-execution seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-code-runtime-worker-thread/lib/types/bootstrap.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | BootstrapPort | `export interface BootstrapPort` | 9 |
| interface | PatchableStream | `export interface PatchableStream` | 19 |
| class | LogBuffer | `export declare class LogBuffer` | 30 |
| method | LogBuffer.constructor | `constructor(maxBytes: number, sink: (text: string) => void, onLimit?: () => void);` | 37 |
| const | CONSOLE_LEVELS | `declare const CONSOLE_LEVELS: readonly ["log", "info", "warn", "error", "debug"]` | 47 |
| function | makeConsoleShim | `export declare function makeConsoleShim(logs: LogBuffer): Record<(typeof CONSOLE_LEVELS)[number], (...args: unknown[]) => void>` | 57 |
| function | captureStreamWrites | `export declare function captureStreamWrites(logs: LogBuffer, stream: PatchableStream): () => void` | 70 |
| function | prepareCompletion | `export declare function prepareCompletion(value: unknown, remainingOutputBytes: number, maxOutputBytes?: number): Omit<DoneMessage, 'type'>` | 82 |
| function | prepareException | `export declare function prepareException(error: unknown, remainingOutputBytes: number, maxOutputBytes?: number): Omit<DoneMessage, 'type'>` | 91 |
| interface | PendingCall | `export interface PendingCall` | 93 |
| type | BindingErrorConstructor | `export type BindingErrorConstructor` | 98 |
| function | makeBindingErrorClasses | `export declare function makeBindingErrorClasses(data: Pick<WorkerBootData, 'namespaces'>): Map<string, BindingErrorConstructor>` | 104 |
| function | wireReplies | `export declare function wireReplies(port: BootstrapPort, pending: Map<number, PendingCall>): void` | 114 |
| function | makeNamespaces | `export declare function makeNamespaces(data: Pick<WorkerBootData, 'namespaces'>, port: BootstrapPort, pending: Map<number, PendingCall>, nextId: {` | 129 |
| function | runWorkerMain | `export declare function runWorkerMain(port: BootstrapPort, data: WorkerBootData, streams: {` | 140 |
| export-list |  | `export {};` | 144 |

## dsh-code-runtime-worker-thread/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 13 |
| class | WorkerThreadCodeRuntime | `export declare class WorkerThreadCodeRuntime extends CodeRuntime` | 47 |
| method | WorkerThreadCodeRuntime.constructor | `constructor(ctx: Context, config: Config);` | 54 |
| default | WorkerThreadCodeRuntime | `export default WorkerThreadCodeRuntime;` | 77 |

## dsh-code-runtime-worker-thread/lib/types/output-json.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | jsonStringBytesUpTo | `export declare function jsonStringBytesUpTo(text: string, maxBytes: number): number \| undefined` | 9 |
| function | jsonValueBytesUpTo | `export declare function jsonValueBytesUpTo(value: CodeJsonValue, maxBytes: number): number \| undefined` | 16 |
| function | truncateJsonStringBytes | `export declare function truncateJsonStringBytes(text: string, maxBytes: number): string` | 25 |

## dsh-code-runtime-worker-thread/lib/types/protocol.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkerBootData | `export interface WorkerBootData` | 9 |
| interface | CallMessage | `interface CallMessage` | 25 |
| interface | LogMessage | `interface LogMessage` | 37 |
| interface | OutputLimitMessage | `interface OutputLimitMessage` | 42 |
| interface | DoneMessage | `export interface DoneMessage` | 53 |
| type | WorkerToHost | `export type WorkerToHost` | 62 |
| type | ReplyMessage | `export type ReplyMessage` | 64 |
| export-list |  | `export {};` | 75 |

## dsh-code-runtime-worker-thread/lib/types/worker-json.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | snapshotCodeJsonValue | `export declare function snapshotCodeJsonValue(value: unknown): CodeJsonValue \| undefined` | 15 |
| interface | ArrayWireToken | `interface ArrayWireToken` | 16 |
| interface | ObjectWireToken | `interface ObjectWireToken` | 20 |
| type | WorkerJsonToken | `type WorkerJsonToken` | 24 |
| type | WorkerJsonWire | `export type WorkerJsonWire` | 30 |
| function | encodeWorkerJson | `export declare function encodeWorkerJson(value: CodeJsonValue): WorkerJsonWire` | 36 |
| function | decodeWorkerJson | `export declare function decodeWorkerJson(input: unknown): CodeJsonValue \| undefined` | 44 |
| export-list |  | `export {};` | 45 |

## dsh-code-runtime-worker-thread/lib/types/worker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 6 |

