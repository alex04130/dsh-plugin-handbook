# dsh-llm-deepseek

> DeepSeek chat-completions adapter for the DeepSeek Harness LLM seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-llm-deepseek/lib/types/adapter.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DeepSeekCatalogModel | `export interface DeepSeekCatalogModel` | 21 |
| interface | DeepSeekConnectionOptions | `export interface DeepSeekConnectionOptions` | 51 |
| interface | DeepSeekAdapterOptions | `export interface DeepSeekAdapterOptions` | 91 |
| const | DEFAULT_STREAM_IDLE_TIMEOUT_MS | `export declare const DEFAULT_STREAM_IDLE_TIMEOUT_MS = 300000` | 113 |
| const | DEFAULT_CONTEXT_WINDOW | `export declare const DEFAULT_CONTEXT_WINDOW = 1000000` | 115 |
| const | DEFAULT_MAX_TOKENS | `export declare const DEFAULT_MAX_TOKENS = 256000` | 117 |
| const | DEFAULT_MAX_INLINE_REQUEST_IMAGE_BYTES | `export declare const DEFAULT_MAX_INLINE_REQUEST_IMAGE_BYTES: number` | 119 |
| const | DEFAULT_IMAGE_OFFLOAD_BYTE_QUANTUM | `export declare const DEFAULT_IMAGE_OFFLOAD_BYTE_QUANTUM: number` | 121 |
| const | DEFAULT_INLINE_IMAGE_OFFLOAD_BYTE_QUANTUM | `export declare const DEFAULT_INLINE_IMAGE_OFFLOAD_BYTE_QUANTUM: number` | 123 |
| const | DEFAULT_IMAGE_OFFLOAD_COUNT_QUANTUM | `export declare const DEFAULT_IMAGE_OFFLOAD_COUNT_QUANTUM = 20` | 125 |
| const | DEFAULT_FILE_EXPIRY_SECONDS | `export declare const DEFAULT_FILE_EXPIRY_SECONDS: number` | 127 |
| const | DEFAULT_FILE_REFRESH_MARGIN_SECONDS | `export declare const DEFAULT_FILE_REFRESH_MARGIN_SECONDS: number` | 129 |
| const | DEFAULT_FILE_QUOTA_CLEANUP_BATCH | `export declare const DEFAULT_FILE_QUOTA_CLEANUP_BATCH = 100` | 131 |
| const | DEFAULT_FILES_API_TIMEOUT_MS | `export declare const DEFAULT_FILES_API_TIMEOUT_MS = 60000` | 133 |
| function | httpErrorCode | `export declare function httpErrorCode(status: number, error?: WireError['error']): string` | 140 |
| class | DeepSeekAdapter | `export declare class DeepSeekAdapter extends LlmAdapter` | 148 |
| method | DeepSeekAdapter.constructor | `constructor(config: DeepSeekAdapterOptions);` | 151 |

## dsh-llm-deepseek/lib/types/file-id.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DeepSeekFileId | `export type DeepSeekFileId` | 4 |
| function | DeepSeekFileId | `export declare function DeepSeekFileId(id: string): DeepSeekFileId` | 10 |
| type | DeepSeekFileScope | `export type DeepSeekFileScope` | 12 |
| function | DeepSeekFileScope | `export declare function DeepSeekFileScope(scope: string): DeepSeekFileScope` | 18 |

## dsh-llm-deepseek/lib/types/file-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MAX_CHAT_IMAGE_BYTES | `export declare const MAX_CHAT_IMAGE_BYTES: number` | 7 |
| interface | DeepSeekFilePolicy | `export interface DeepSeekFilePolicy` | 9 |
| interface | DeepSeekFileConnection | `export interface DeepSeekFileConnection` | 15 |
| interface | DeepSeekFileReference | `export interface DeepSeekFileReference` | 20 |
| interface | FileStoreOptions | `interface FileStoreOptions` | 24 |
| class | DeepSeekFileStore | `export declare class DeepSeekFileStore` | 30 |
| method | DeepSeekFileStore.constructor | `constructor(options?: FileStoreOptions);` | 38 |
| export-list |  | `export {};` | 82 |

## dsh-llm-deepseek/lib/types/files-api.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MIN_FILE_EXPIRY_SECONDS | `export declare const MIN_FILE_EXPIRY_SECONDS = 3600` | 6 |
| const | MAX_FILE_EXPIRY_SECONDS | `export declare const MAX_FILE_EXPIRY_SECONDS = 2592000` | 8 |
| const | MAX_FILE_UPLOAD_BYTES | `export declare const MAX_FILE_UPLOAD_BYTES: number` | 10 |
| const | MAX_STORED_FILE_COUNT | `export declare const MAX_STORED_FILE_COUNT = 10000` | 12 |
| const | MAX_STORED_FILE_BYTES | `export declare const MAX_STORED_FILE_BYTES: number` | 14 |
| interface | DeepSeekFileObject | `export interface DeepSeekFileObject` | 16 |
| interface | DeepSeekFilePage | `export interface DeepSeekFilePage` | 25 |
| class | DeepSeekFilesError | `export declare class DeepSeekFilesError extends LlmError` | 32 |
| method | DeepSeekFilesError.constructor | `constructor(message: string, status: number, detail: string);` | 40 |
| function | isFilesQuotaError | `export declare function isFilesQuotaError(error: unknown): error is DeepSeekFilesError` | 47 |
| interface | FilesApiOptions | `interface FilesApiOptions` | 48 |
| class | DeepSeekFilesClient | `export declare class DeepSeekFilesClient` | 54 |
| method | DeepSeekFilesClient.constructor | `constructor(options: FilesApiOptions);` | 61 |
| export-list |  | `export {};` | 102 |

## dsh-llm-deepseek/lib/types/image-tokens.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | deepSeekImageTokens | `export declare function deepSeekImageTokens(width: number, height: number): number` | 18 |

## dsh-llm-deepseek/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DEFAULT_CONTEXT_WINDOW, DEFAULT_FILE_E | `export { DEFAULT_CONTEXT_WINDOW, DEFAULT_FILE_EXPIRY_SECONDS, DEFAULT_FILE_QUOTA_CLEANUP_BATCH, DEFAULT_FILE_REFRESH_MARGIN_SECONDS, DEFAULT_FILES_API_TIMEOUT_M` | 18 |
| re-export | { DEFAULT_LOW_DETAIL_IMAGE_PIXEL_BUDGET, | `export { DEFAULT_LOW_DETAIL_IMAGE_PIXEL_BUDGET, DEFAULT_MAX_IMAGES_PER_REQUEST, DEFAULT_MAX_REQUEST_FILES_BYTES, DEFAULT_REQUEST_IMAGE_MAX_BYTES, DEFAULT_REQUES` | 20 |
| re-export | { deepSeekImageTokens } | `export { deepSeekImageTokens } from './image-tokens.ts';` | 21 |
| re-export | { DeepSeekFileStore, MAX_CHAT_IMAGE_BYTE | `export { DeepSeekFileStore, MAX_CHAT_IMAGE_BYTES } from './file-store.ts';` | 22 |
| re-export | { DeepSeekFilesClient, MAX_FILE_EXPIRY_S | `export { DeepSeekFilesClient, MAX_FILE_EXPIRY_SECONDS, MAX_FILE_UPLOAD_BYTES, MAX_STORED_FILE_BYTES, MAX_STORED_FILE_COUNT, MIN_FILE_EXPIRY_SECONDS } from './fi` | 24 |
| re-export | { DeepSeekFileId } | `export { DeepSeekFileId } from './file-id.ts';` | 26 |
| re-export | { DeepSeekUploadIndex, deepSeekFileScope | `export { DeepSeekUploadIndex, deepSeekFileScope } from './upload-index.ts';` | 28 |
| const | name | `export declare const name = "llm-deepseek"` | 32 |
| const | inject | `export declare const inject: string[]` | 33 |
| interface | Config | `export interface Config` | 42 |
| const | Config | `export declare const Config: z<Config>` | 82 |
| const | PUBLIC_BASE_URL | `export declare const PUBLIC_BASE_URL = "https://api.deepseek.com"` | 84 |
| type | ResolvedDeepSeekOptions | `export type ResolvedDeepSeekOptions` | 91 |
| function | resolveAdapterOptions | `export declare function resolveAdapterOptions(config: Config, environment?: LaunchEnvironmentSnapshot): ResolvedDeepSeekOptions` | 104 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 105 |

## dsh-llm-deepseek/lib/types/request-pricing.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_MAX_REQUEST_FILES_BYTES | `export declare const DEFAULT_MAX_REQUEST_FILES_BYTES: number` | 15 |
| const | DEFAULT_MAX_IMAGES_PER_REQUEST | `export declare const DEFAULT_MAX_IMAGES_PER_REQUEST = 600` | 17 |
| const | DEFAULT_REQUEST_IMAGE_PIXEL_BUDGET | `export declare const DEFAULT_REQUEST_IMAGE_PIXEL_BUDGET = 640000` | 19 |
| const | DEFAULT_LOW_DETAIL_IMAGE_PIXEL_BUDGET | `export declare const DEFAULT_LOW_DETAIL_IMAGE_PIXEL_BUDGET: number` | 21 |
| const | DEFAULT_REQUEST_IMAGE_MAX_BYTES | `export declare const DEFAULT_REQUEST_IMAGE_MAX_BYTES: number` | 23 |
| function | resolveRequestImagePolicy | `export declare function resolveRequestImagePolicy(model: DeepSeekCatalogModel): ImageRequestPolicy` | 30 |
| function | deepSeekImageRequestPricing | `export declare function deepSeekImageRequestPricing(connection: DeepSeekConnectionOptions, model: string, resolveAccess?: ImageAttachmentAccessResolver): LlmIma` | 47 |

## dsh-llm-deepseek/lib/types/serialize.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RequestDefaults | `export interface RequestDefaults` | 12 |
| type | ImageRequestRepresentation | `export type ImageRequestRepresentation` | 17 |
| interface | ImageSerializationOptions | `export interface ImageSerializationOptions` | 27 |
| interface | ImageWireLocation | `export interface ImageWireLocation` | 44 |
| function | serializeMessages | `export declare function serializeMessages(messages: Message[]): WireMessage[]` | 56 |
| function | serializeMessagesWithImages | `export declare function serializeMessagesWithImages(messages: readonly Message[], images: ImageSerializationOptions): Promise<WireMessage[]>` | 65 |
| function | serializeRequest | `export declare function serializeRequest(options: GenerateOptions, defaults?: RequestDefaults): WireRequest` | 74 |
| function | serializeRequestWithImages | `export declare function serializeRequestWithImages(options: GenerateOptions, images: ImageSerializationOptions, defaults?: RequestDefaults): Promise<WireRequest` | 84 |

## dsh-llm-deepseek/lib/types/sse.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DONE | `export declare const DONE = "[DONE]"` | 14 |
| function | parseSse | `export declare function parseSse(stream: ReadableStream<BufferSource>, onComment?: (comment: string) => void): AsyncGenerator<string>` | 23 |

## dsh-llm-deepseek/lib/types/translate.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | mapFinishReason | `export declare function mapFinishReason(reason: string): FinishReason` | 17 |
| function | mapUsage | `export declare function mapUsage(usage: WireUsage): TokenUsage` | 27 |
| function | translate | `export declare function translate(payloads: AsyncIterable<string>): AsyncGenerator<StreamChunk>` | 36 |

## dsh-llm-deepseek/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WireRequest | `export interface WireRequest` | 12 |
| interface | WireSystemMessage | `export interface WireSystemMessage` | 35 |
| interface | WireTextContentPart | `export interface WireTextContentPart` | 40 |
| interface | WireFileContentPart | `export interface WireFileContentPart` | 45 |
| interface | WireImageUrlContentPart | `export interface WireImageUrlContentPart` | 50 |
| type | WireImageContentPart | `export type WireImageContentPart` | 57 |
| type | WireUserContentPart | `export type WireUserContentPart` | 59 |
| interface | WireUserMessage | `export interface WireUserMessage` | 61 |
| interface | WireToolMessage | `export interface WireToolMessage` | 66 |
| type | WireMessage | `export type WireMessage` | 72 |
| interface | WireAssistantMessage | `export interface WireAssistantMessage` | 78 |
| interface | WireToolCall | `export interface WireToolCall` | 92 |
| interface | WireTool | `export interface WireTool` | 101 |
| interface | WireChunk | `export interface WireChunk` | 110 |
| interface | WireChoice | `export interface WireChoice` | 116 |
| interface | WireDelta | `export interface WireDelta` | 121 |
| interface | WireToolCallDelta | `export interface WireToolCallDelta` | 133 |
| interface | WireUsage | `export interface WireUsage` | 156 |
| interface | WireError | `export interface WireError` | 171 |

## dsh-llm-deepseek/lib/types/upload-index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DeepSeekUploadRecord | `export interface DeepSeekUploadRecord` | 5 |
| interface | UploadIndexCommit | `export interface UploadIndexCommit` | 17 |
| function | deepSeekFileScope | `export declare function deepSeekFileScope(baseURL: string, apiKey: string): DeepSeekFileScopeType` | 27 |
| class | DeepSeekUploadIndex | `export declare class DeepSeekUploadIndex` | 29 |
| method | DeepSeekUploadIndex.constructor | `constructor(path?: string);` | 35 |

