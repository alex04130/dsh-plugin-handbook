# dsh-llm

> Provider-neutral LLM service interface for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-llm/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-llm/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 24 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 25 |

## dsh-llm/lib/types/adapter-failure.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | normalizeLlmFailure | `export declare function normalizeLlmFailure(value: unknown): LlmFailure` | 13 |

## dsh-llm/lib/types/api-key.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ApiKeyRejection | `export type ApiKeyRejection` | 7 |
| type | ApiKeyCheck | `export type ApiKeyCheck` | 9 |
| function | normalizeApiKey | `export declare function normalizeApiKey(raw: string): ApiKeyCheck` | 27 |

## dsh-llm/lib/types/assembler.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | BlockAssembler | `export declare class BlockAssembler` | 22 |

## dsh-llm/lib/types/assistant-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TimedStreamChunk | `export interface TimedStreamChunk` | 11 |
| type | AssistantStreamRecord | `export type AssistantStreamRecord` | 16 |
| type | AssistantStreamRun | `export type AssistantStreamRun` | 42 |
| type | RawStreamChunkType | `export type RawStreamChunkType` | 49 |
| class | AssistantStreamAccumulator | `export declare class AssistantStreamAccumulator` | 51 |
| function | expandAssistantStream | `export declare function expandAssistantStream(stream: readonly AssistantStreamRecord[]): readonly TimedStreamChunk[]` | 71 |
| function | isTokenDelta | `export declare function isTokenDelta(chunk: StreamChunk): boolean` | 78 |
| function | isVisibleChunk | `export declare function isVisibleChunk(chunk: StreamChunk): boolean` | 87 |
| function | chunkHasVisibleText | `export declare function chunkHasVisibleText(chunk: StreamChunk): boolean` | 94 |
| function | runFirstTokenTime | `export declare function runFirstTokenTime(run: AssistantStreamRun): number \| undefined` | 102 |
| function | runFirstVisibleTime | `export declare function runFirstVisibleTime(run: AssistantStreamRun): number \| undefined` | 109 |
| function | assistantStreamFirstTokenTime | `export declare function assistantStreamFirstTokenTime(stream: readonly AssistantStreamRecord[]): number \| undefined` | 116 |
| function | assistantStreamHasVisibleContent | `export declare function assistantStreamHasVisibleContent(stream: readonly AssistantStreamRecord[]): boolean` | 123 |
| function | assistantStreamHasVisibleText | `export declare function assistantStreamHasVisibleText(stream: readonly AssistantStreamRecord[]): boolean` | 130 |
| function | lastAssistantStreamChunk | `export declare function lastAssistantStreamChunk<T extends RawStreamChunkType>(stream: readonly AssistantStreamRecord[], type: T): Extract<StreamChunk, {` | 137 |
| function | assistantStreamChunks | `export declare function assistantStreamChunks<T extends RawStreamChunkType>(stream: readonly AssistantStreamRecord[], type: T): readonly Extract<StreamChunk, {` | 146 |
| function | joinAssistantStreamText | `export declare function joinAssistantStreamText(stream: readonly AssistantStreamRecord[]): string` | 154 |
| function | assembleAssistantStream | `export declare function assembleAssistantStream(stream: readonly AssistantStreamRecord[], assembler?: BlockAssembler): BlockAssembler` | 165 |

## dsh-llm/lib/types/attribution.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AppIdentity | `export interface AppIdentity` | 16 |
| const | APP_IDENTITY | `export declare const APP_IDENTITY: AppIdentity` | 30 |
| function | userAgent | `export declare function userAgent(identity?: AppIdentity): string` | 38 |
| function | attributionHeaders | `export declare function attributionHeaders(identity?: AppIdentity): Record<string, string>` | 46 |

## dsh-llm/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MessageId | `export type MessageId` | 14 |
| function | MessageId | `export declare function MessageId(id: string): MessageId` | 20 |
| type | ToolCallId | `export type ToolCallId` | 25 |
| function | ToolCallId | `export declare function ToolCallId(id: string): ToolCallId` | 31 |
| type | ProviderRequestId | `export type ProviderRequestId` | 33 |
| function | ProviderRequestId | `export declare function ProviderRequestId(id: string): ProviderRequestId` | 39 |
| type | LlmAttemptId | `export type LlmAttemptId` | 41 |
| function | LlmAttemptId | `export declare function LlmAttemptId(id: string): LlmAttemptId` | 47 |
| type | ReasoningEffortId | `export type ReasoningEffortId` | 49 |
| function | ReasoningEffortId | `export declare function ReasoningEffortId(id: string): ReasoningEffortId` | 55 |

## dsh-llm/lib/types/call-config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LlmCallConfig | `export interface LlmCallConfig` | 16 |
| interface | LlmCallConfigAdapterDefaults | `export interface LlmCallConfigAdapterDefaults` | 28 |
| function | callConfigEquals | `export declare function callConfigEquals(a: LlmCallConfig, b: LlmCallConfig): boolean` | 40 |
| function | markAgentLoopRequest | `export declare function markAgentLoopRequest<T extends GenerateOptions>(request: T): T` | 46 |
| function | isAgentLoopRequest | `export declare function isAgentLoopRequest(request: GenerateOptions): boolean` | 52 |

## dsh-llm/lib/types/content.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ImageAttachmentAccess | `export interface ImageAttachmentAccess` | 6 |
| type | ImageAttachmentAccessResolver | `export type ImageAttachmentAccessResolver` | 15 |
| function | resolveImageAttachmentAccess | `export declare function resolveImageAttachmentAccess(attachments: AttachmentStore, mapHostPath: (hostPath: string) => string \| undefined, ref: ImageAttachmentR` | 26 |
| function | textOnlyImageText | `export declare function textOnlyImageText(ref: ImageAttachmentRef): string` | 32 |
| function | requestImageHandleText | `export declare function requestImageHandleText(ref: ImageAttachmentRef, version: Pick<RequestImageAttachment, 'width' \| 'height'>, access?: ImageAttachmentAcce` | 43 |
| function | offloadedImageText | `export declare function offloadedImageText(ref: ImageAttachmentRef, access?: ImageAttachmentAccess): string` | 50 |
| function | contentHasImage | `export declare function contentHasImage(content: readonly ContentBlock[]): boolean` | 59 |
| function | contentHasFile | `export declare function contentHasFile(content: readonly ContentBlock[]): boolean` | 67 |
| function | fileHandleText | `export declare function fileHandleText(ref: FileAttachmentRef, readonlyPath: string \| undefined): string` | 76 |
| function | projectFilesToText | `export declare function projectFilesToText(messages: readonly Message[], resolvePath: (ref: FileAttachmentRef) => string \| undefined): readonly Message[]` | 85 |
| interface | RequestImageOffloadPolicy | `export interface RequestImageOffloadPolicy` | 87 |
| function | projectImagesForTextModel | `export declare function projectImagesForTextModel(messages: readonly Message[]): readonly Message[]` | 108 |
| function | offloadedImagePrefixCount | `export declare function offloadedImagePrefixCount(lengths: readonly number[], policy: Pick<RequestImageOffloadPolicy, 'maxImages' \| 'maxBytes' \| 'countQuantum` | 118 |
| function | offloadRequestImagesWithPolicy | `export declare function offloadRequestImagesWithPolicy(messages: readonly Message[], policy: RequestImageOffloadPolicy): readonly Message[]` | 130 |

## dsh-llm/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | HarnessError | `export declare class HarnessError extends Error` | 12 |
| method | HarnessError.constructor | `constructor(message: string, code: string, options?: ErrorOptions);` | 15 |
| const | CONTEXT_WINDOW_EXCEEDED_CODE | `export declare const CONTEXT_WINDOW_EXCEEDED_CODE = "CONTEXT_WINDOW_EXCEEDED"` | 18 |
| const | QUOTA_EXCEEDED_CODE | `export declare const QUOTA_EXCEEDED_CODE = "QUOTA"` | 20 |
| const | EMPTY_RESPONSE_CODE | `export declare const EMPTY_RESPONSE_CODE = "EMPTY_RESPONSE"` | 30 |
| const | INVALID_CREDENTIAL_CODE | `export declare const INVALID_CREDENTIAL_CODE = "INVALID_CREDENTIAL"` | 38 |
| function | isContextWindowExceededError | `export declare function isContextWindowExceededError(detail: string): boolean` | 46 |
| function | isQuotaExceededError | `export declare function isQuotaExceededError(detail: string): boolean` | 53 |
| function | errorChain | `export declare function errorChain(value: unknown): string` | 66 |
| function | isHarnessError | `export declare function isHarnessError(value: unknown): value is HarnessError` | 72 |

## dsh-llm/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './attribution.ts';` | 16 |
| re-export | * | `export * from './brand.ts';` | 17 |
| re-export | * | `export * from './error.ts';` | 18 |
| re-export | * | `export * from './api-key.ts';` | 19 |
| re-export | * | `export * from './types.ts';` | 20 |
| re-export | * | `export * from './content.ts';` | 21 |
| re-export | * | `export * from './assistant-stream.ts';` | 22 |
| re-export | * | `export * from './message.ts';` | 23 |
| re-export | * | `export * from './retry-policy.ts';` | 24 |
| re-export | { BlockAssembler } | `export { BlockAssembler } from './assembler.ts';` | 25 |
| re-export | { callConfigEquals, isAgentLoopRequest,  | `export { callConfigEquals, isAgentLoopRequest, markAgentLoopRequest } from './call-config.ts';` | 26 |
| interface | LlmErrorOptions | `export interface LlmErrorOptions extends ErrorOptions` | 49 |
| class | LlmError | `export declare class LlmError extends HarnessError` | 61 |
| method | LlmError.constructor | `constructor(message: string, code: string, options?: LlmErrorOptions);` | 69 |
| function | assertUsableApiKey | `export declare function assertUsableApiKey(raw: string, pkg: string, ref: string): string` | 89 |
| interface | PreparedLlmCall | `export interface PreparedLlmCall` | 91 |
| interface | PreparedAdapterCall | `export interface PreparedAdapterCall` | 114 |
| class | LlmAdapter | `export declare abstract class LlmAdapter` | 126 |
| interface | AdapterRegistrationHandle | `export interface AdapterRegistrationHandle` | 188 |
| interface | DirectoryRegistrationHandle | `export interface DirectoryRegistrationHandle` | 211 |
| class | LlmRuntime | `export declare class LlmRuntime extends TypertRemoteService` | 231 |
| method | LlmRuntime.constructor | `constructor(ctx: Context);` | 235 |
| default | LlmRuntime | `export default LlmRuntime;` | 409 |

## dsh-llm/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "llm-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-llm/lib/types/message.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AssistantProvenance | `export interface AssistantProvenance` | 5 |
| interface | ModelMessageSource | `export interface ModelMessageSource extends AssistantProvenance` | 18 |
| interface | ToolMessageSource | `export interface ToolMessageSource` | 22 |
| type | ContextForm | `export type ContextForm` | 42 |
| interface | ContextSnapshotSection | `export interface ContextSnapshotSection` | 56 |
| type | ContextFormed | `export type ContextFormed` | 71 |
| interface | MessageSourceMap | `export interface MessageSourceMap` | 94 |
| const | CONTEXT_SUMMARY_MAX_CHARS | `export declare const CONTEXT_SUMMARY_MAX_CHARS = 120` | 110 |
| function | boundContextSummary | `export declare function boundContextSummary(summary: string): string` | 116 |
| type | MessageSource | `export type MessageSource` | 118 |
| interface | Message | `export interface Message` | 120 |
| interface | UserMessage | `export interface UserMessage extends Message` | 131 |
| interface | AssistantMessage | `export interface AssistantMessage extends Message` | 135 |
| interface | SystemMessage | `export interface SystemMessage extends Message` | 144 |
| interface | ToolResultMessage | `export interface ToolResultMessage extends Message` | 149 |
| type | NewMessage | `type NewMessage` | 154 |
| type | NewUserMessage | `type NewUserMessage` | 155 |
| type | NewAssistantMessage | `type NewAssistantMessage` | 156 |
| function | freezeMessage | `export declare function freezeMessage<T extends Message>(message: T): T` | 166 |
| function | createMessage | `export declare function createMessage<T extends NewMessage>(input: T & {` | 172 |
| function | createUserMessage | `export declare function createUserMessage<T extends NewUserMessage>(input: T & {` | 180 |
| function | createAssistantMessage | `export declare function createAssistantMessage(input: NewAssistantMessage & {` | 189 |
| function | createSystemMessage | `export declare function createSystemMessage(text: string, plugin: string): SystemMessage` | 200 |
| interface | ToolResultMessageInput | `export interface ToolResultMessageInput` | 202 |
| function | createToolResultMessage | `export declare function createToolResultMessage(input: ToolResultMessageInput): ToolResultMessage` | 212 |
| export-list |  | `export {};` | 213 |

## dsh-llm/lib/types/retry-policy.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | BackoffConfig | `export interface BackoffConfig` | 11 |
| interface | NormalRetryPolicyConfig | `export interface NormalRetryPolicyConfig` | 20 |
| interface | AlwaysRetryPolicyConfig | `export interface AlwaysRetryPolicyConfig` | 31 |
| type | RetryPolicyConfig | `export type RetryPolicyConfig` | 38 |
| interface | ResolvedRetryBackoff | `export interface ResolvedRetryBackoff` | 40 |
| interface | ResolvedNormalRetryPolicy | `export interface ResolvedNormalRetryPolicy extends ResolvedRetryBackoff` | 46 |
| interface | ResolvedAlwaysRetryPolicy | `export interface ResolvedAlwaysRetryPolicy extends ResolvedRetryBackoff` | 52 |
| type | ResolvedRetryPolicy | `export type ResolvedRetryPolicy` | 56 |
| const | RetryPolicySchema | `export declare const RetryPolicySchema: z<RetryPolicyConfig>` | 58 |
| function | resolveRetryPolicy | `export declare function resolveRetryPolicy(config: RetryPolicyConfig \| undefined, path: string): ResolvedRetryPolicy` | 65 |

## dsh-llm/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LlmFailure | `export interface LlmFailure` | 26 |
| interface | TextBlock | `export interface TextBlock` | 39 |
| interface | ReasoningBlock | `export interface ReasoningBlock` | 44 |
| interface | ImageBlock | `export interface ImageBlock` | 54 |
| interface | FileBlock | `export interface FileBlock` | 66 |
| interface | ToolCallBlock | `export interface ToolCallBlock` | 72 |
| interface | ToolResultBlock | `export interface ToolResultBlock` | 81 |
| interface | ContentBlockMap | `export interface ContentBlockMap` | 91 |
| type | ContentBlockType | `export type ContentBlockType` | 100 |
| type | ContentBlock | `export type ContentBlock` | 102 |
| interface | FinishReasonMap | `export interface FinishReasonMap` | 107 |
| type | FinishReason | `export type FinishReason` | 127 |
| interface | TokenUsage | `export interface TokenUsage` | 136 |
| interface | LlmImageRequestPrice | `export interface LlmImageRequestPrice` | 159 |
| interface | LlmImageRequestPricing | `export interface LlmImageRequestPricing` | 171 |
| interface | LlmProviderInfo | `export interface LlmProviderInfo` | 180 |
| interface | ModelModalityMap | `export interface ModelModalityMap` | 187 |
| type | ModelModality | `export type ModelModality` | 192 |
| interface | LlmConfigurableProvider | `export interface LlmConfigurableProvider` | 199 |
| interface | LlmModelDiscoveryRequest | `export interface LlmModelDiscoveryRequest` | 229 |
| interface | LlmModelDiscoveryOperation | `export interface LlmModelDiscoveryOperation extends LlmModelDiscoveryRequest` | 248 |
| interface | LlmDiscoveredModel | `export interface LlmDiscoveredModel` | 266 |
| interface | LlmModelInfo | `export interface LlmModelInfo` | 277 |
| interface | LlmModelContext | `export interface LlmModelContext` | 290 |
| interface | LlmReasoningEffortInfo | `export interface LlmReasoningEffortInfo` | 295 |
| interface | LlmModelReasoningInfo | `export interface LlmModelReasoningInfo` | 304 |
| type | SystemPromptUpdate | `export type SystemPromptUpdate` | 319 |
| interface | LlmResolvedModelInfo | `export interface LlmResolvedModelInfo extends LlmModelInfo` | 321 |
| interface | ReplayEnvelope | `export interface ReplayEnvelope` | 338 |
| type | StreamChunk | `export type StreamChunk` | 359 |
| interface | ToolSchema | `export interface ToolSchema` | 397 |
| interface | GenerateOptions | `export interface GenerateOptions` | 404 |

