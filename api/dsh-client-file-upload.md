# dsh-client-file-upload

> Agent-scoped browser file upload, streaming intake, and staged receipt service
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-file-upload/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-client-file-upload/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 24 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 25 |

## dsh-client-file-upload/lib/types/client/contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FileUploadBody | `export type FileUploadBody` | 5 |
| interface | FileUploadProgress | `export interface FileUploadProgress` | 7 |
| interface | FileUploadService | `export interface FileUploadService` | 12 |

## dsh-client-file-upload/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 13 |
| function | apply | `export declare function apply(ctx: Context): void` | 18 |

## dsh-client-file-upload/lib/types/client/runtime.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FileUploadRequest | `interface FileUploadRequest` | 7 |
| interface | FileUploadResponse | `interface FileUploadResponse` | 17 |
| interface | UploadWorkerStart | `interface UploadWorkerStart` | 21 |
| type | UploadWorkerOutput | `type UploadWorkerOutput` | 26 |
| interface | UploadWorkerScope | `interface UploadWorkerScope` | 38 |
| interface | UploadXhr | `interface UploadXhr` | 42 |
| type | UploadWorkerFetch | `type UploadWorkerFetch` | 55 |
| function | fileUploadWorker | `export declare function fileUploadWorker(scope?: UploadWorkerScope, createXhr?: () => UploadXhr, doFetch?: UploadWorkerFetch): void` | 64 |
| class | FileUploadRuntime | `export declare class FileUploadRuntime extends Service implements FileUploadService` | 66 |
| method | FileUploadRuntime.constructor | `constructor(ctx: Context);` | 70 |
| export-list |  | `export {};` | 91 |

## dsh-client-file-upload/lib/types/http-route.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | handleFileUploadHttp | `export declare function handleFileUploadHttp(service: FileUploads, request: Request): Promise<Response>` | 9 |

## dsh-client-file-upload/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AgentResolver | `export type AgentResolver` | 16 |
| interface | PromptFileBinding | `export interface PromptFileBinding extends Disposable` | 18 |
| class | FileUploads | `export declare class FileUploads extends TypertRemoteService` | 23 |
| method | FileUploads.constructor | `constructor(ctx: Context);` | 28 |
| default | FileUploads | `export default FileUploads;` | 83 |

## dsh-client-file-upload/lib/types/protocol.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FILE_UPLOAD_PATH | `export declare const FILE_UPLOAD_PATH = "/api/session/uploadFileBinary"` | 2 |

## dsh-client-file-upload/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | EncodedFileUploadRequest | `export interface EncodedFileUploadRequest` | 5 |
| interface | FileUploadValue | `export interface FileUploadValue` | 12 |
| type | FileUploadReceiptId | `export type FileUploadReceiptId` | 18 |
| type | FileUploadFetch | `export type FileUploadFetch` | 25 |
| interface | ClientFileUploadHooks | `export interface ClientFileUploadHooks` | 27 |

