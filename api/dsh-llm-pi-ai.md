# dsh-llm-pi-ai

> pi-ai-backed DeepSeek adapter for the DeepSeek Harness LLM seam (design-verification twin of dsh-llm-deepseek)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-llm-pi-ai/lib/types/adapter.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PiAiAdapterOptions | `export interface PiAiAdapterOptions` | 34 |
| interface | PiAiAuthInjection | `export interface PiAiAuthInjection` | 70 |
| class | PiAiAdapter | `export declare class PiAiAdapter extends LlmAdapter` | 81 |
| method | PiAiAdapter.constructor | `constructor(config: PiAiAdapterOptions);` | 84 |

## dsh-llm-pi-ai/lib/types/auth.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | RECORD_SCOPE | `export declare const RECORD_SCOPE = "llm-pi-ai"` | 19 |
| function | recordKeyFor | `export declare function recordKeyFor(providerId: string): CredentialKey` | 25 |
| function | credentialStoreFrom | `export declare function credentialStoreFrom(ctx: Context): CredentialStore` | 43 |
| function | authContextFrom | `export declare function authContextFrom(ctx: Context): AuthContext` | 59 |

## dsh-llm-pi-ai/lib/types/catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PiAiModality | `export type PiAiModality` | 16 |
| const | MODALITIES | `export declare const MODALITIES: readonly PiAiModality[]` | 18 |
| const | THINKING_LEVELS | `export declare const THINKING_LEVELS: readonly ModelThinkingLevel[]` | 20 |
| type | PiAiThinkingFormat | `export type PiAiThinkingFormat` | 22 |
| const | SUPPORTED_THINKING_FORMATS | `export declare const SUPPORTED_THINKING_FORMATS: readonly PiAiThinkingFormat[]` | 24 |
| type | PiAiMaxTokensField | `export type PiAiMaxTokensField` | 26 |
| const | MAX_TOKENS_FIELDS | `export declare const MAX_TOKENS_FIELDS: readonly PiAiMaxTokensField[]` | 28 |
| type | PiAiThinkingTokenBudgetField | `export type PiAiThinkingTokenBudgetField` | 30 |
| const | THINKING_TOKEN_BUDGET_FIELDS | `export declare const THINKING_TOKEN_BUDGET_FIELDS: readonly PiAiThinkingTokenBudgetField[]` | 32 |
| type | PiAiCacheControlFormat | `export type PiAiCacheControlFormat` | 34 |
| const | CACHE_CONTROL_FORMATS | `export declare const CACHE_CONTROL_FORMATS: readonly PiAiCacheControlFormat[]` | 36 |
| type | PiAiChatTemplateVar | `export type PiAiChatTemplateVar` | 38 |
| const | CHAT_TEMPLATE_VARS | `export declare const CHAT_TEMPLATE_VARS: readonly PiAiChatTemplateVar[]` | 42 |
| function | catalogProvider | `export declare function catalogProvider(provider: string): Provider \| undefined` | 48 |
| function | catalogProviderIds | `export declare function catalogProviderIds(): readonly string[]` | 53 |
| function | catalogModels | `export declare function catalogModels(provider: string): Map<string, Model<Api>>` | 59 |
| type | PiAiReasoningEfforts | `export type PiAiReasoningEfforts` | 68 |
| const | COMPLETIONS_COMPAT_GATE | `declare const COMPLETIONS_COMPAT_GATE: {` | 74 |
| const | RESPONSES_COMPAT_GATE | `declare const RESPONSES_COMPAT_GATE: {` | 103 |
| const | ANTHROPIC_COMPAT_GATE | `declare const ANTHROPIC_COMPAT_GATE: {` | 115 |
| const | BEDROCK_COMPAT_GATE | `declare const BEDROCK_COMPAT_GATE: {` | 129 |
| type | OfferedIn | `type OfferedIn<G>` | 133 |
| type | OfferedCompatField | `type OfferedCompatField` | 137 |
| interface | PiAiCompatProfile | `export interface PiAiCompatProfile` | 156 |
| type | AssertNever | `type AssertNever<T extends never>` | 230 |
| type | EveryProfileFieldIsOffered | `export type EveryProfileFieldIsOffered` | 235 |
| type | EveryOfferedFieldIsDocumented | `export type EveryOfferedFieldIsDocumented` | 241 |
| type | AssertTrue | `type AssertTrue<T extends true>` | 243 |
| type | UpstreamCompat | `type UpstreamCompat` | 245 |
| type | EveryProfileFieldMatchesUpstream | `export type EveryProfileFieldMatchesUpstream` | 255 |
| interface | PiAiModelProfile | `export interface PiAiModelProfile` | 257 |
| type | PiAiModelOverride | `export type PiAiModelOverride` | 301 |
| interface | RouteCatalogRequest | `export interface RouteCatalogRequest` | 303 |
| class | PiAiCatalogError | `export declare class PiAiCatalogError extends Error` | 324 |
| interface | RouteCatalog | `export interface RouteCatalog` | 327 |
| function | resolveRouteModels | `export declare function resolveRouteModels(request: RouteCatalogRequest, validation?: 'strict' \| 'deferred'): RouteCatalog` | 353 |
| export-list |  | `export {};` | 354 |

## dsh-llm-pi-ai/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_STREAM_IDLE_TIMEOUT_MS | `export declare const DEFAULT_STREAM_IDLE_TIMEOUT_MS = 300000` | 21 |
| const | DEFAULT_MAX_REQUEST_IMAGE_BYTES | `export declare const DEFAULT_MAX_REQUEST_IMAGE_BYTES: number` | 31 |
| const | DEFAULT_REQUEST_IMAGE_PIXEL_BUDGET | `export declare const DEFAULT_REQUEST_IMAGE_PIXEL_BUDGET: number` | 33 |
| const | DEFAULT_REQUEST_IMAGE_MAX_BYTES | `export declare const DEFAULT_REQUEST_IMAGE_MAX_BYTES: number` | 35 |
| const | DEFAULT_CONTEXT_WINDOW | `export declare const DEFAULT_CONTEXT_WINDOW = 262144` | 37 |
| const | DEFAULT_MAX_TOKENS | `export declare const DEFAULT_MAX_TOKENS = 32768` | 39 |
| const | DEFAULT_INPUT | `export declare const DEFAULT_INPUT: readonly PiAiModality[]` | 50 |
| interface | PiAiProviderProfile | `export interface PiAiProviderProfile` | 53 |
| interface | ResolvedPiAiProviderProfile | `export interface ResolvedPiAiProviderProfile extends Omit<PiAiProviderProfile, 'apiKeyEnv' \| 'retryPolicy' \| 'models' \| 'displayName'>` | 146 |
| interface | Config | `export interface Config` | 180 |
| const | Config | `export declare const Config: z<Config>` | 189 |
| function | assertServiceable | `export declare function assertServiceable(config: Config, previous?: Config): void` | 198 |
| function | resolveProfiles | `export declare function resolveProfiles(providers: Readonly<Record<string, PiAiProviderProfile>> \| undefined, validation?: 'strict' \| 'deferred'): Map<string,` | 207 |

## dsh-llm-pi-ai/lib/types/context.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PiImageRequestContext | `export interface PiImageRequestContext` | 10 |
| function | toPiContext | `export declare function toPiContext(options: GenerateOptions, images?: undefined, onReplayDegrade?: (reason: string) => void): PiContext` | 29 |
| function | toPiContext | `export declare function toPiContext(options: GenerateOptions, images: PiImageRequestContext, onReplayDegrade?: (reason: string) => void): Promise<PiContext>` | 41 |

## dsh-llm-pi-ai/lib/types/discovery.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | StoredModelDiscoveryProfile | `export interface StoredModelDiscoveryProfile` | 26 |
| function | discoverModels | `export declare function discoverModels(request: LlmModelDiscoveryOperation, storedProfile?: () => StoredModelDiscoveryProfile \| undefined): Promise<readonly Ll` | 42 |

## dsh-llm-pi-ai/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { PiAiAdapter } | `export { PiAiAdapter } from './adapter.ts';` | 59 |
| re-export | { Config } | `export { Config } from './config.ts';` | 61 |
| re-export | { recordKeyFor } | `export { recordKeyFor } from './auth.ts';` | 63 |
| re-export | { supportedProtocols } | `export { supportedProtocols } from './provider.ts';` | 64 |
| const | name | `export declare const name = "llm-pi-ai"` | 65 |
| const | inject | `export declare const inject: string[]` | 66 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 68 |

## dsh-llm-pi-ai/lib/types/login.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerPiAiFlows | `export declare function registerPiAiFlows(ctx: Context, auth: PiAiAuthInjection): void` | 20 |

## dsh-llm-pi-ai/lib/types/provider.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | supportedProtocols | `export declare function supportedProtocols(): readonly string[]` | 30 |
| interface | ProviderSpec | `export interface ProviderSpec` | 32 |
| function | buildProvider | `export declare function buildProvider(spec: ProviderSpec): Provider` | 58 |

## dsh-llm-pi-ai/lib/types/replay.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PiAiReplayBlock | `export type PiAiReplayBlock` | 13 |
| interface | PiAiReplayResponse | `export interface PiAiReplayResponse` | 25 |
| function | toPiReplayState | `export declare function toPiReplayState(message: AssistantMessage, requestedModel?: string): ReplayEnvelope` | 48 |
| function | toPiAssistant | `export declare function toPiAssistant(message: Message, onDegrade?: (reason: string) => void): AssistantMessage` | 62 |

## dsh-llm-pi-ai/lib/types/stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | mapUsage | `export declare function mapUsage(usage: PiUsage): TokenUsage` | 18 |
| function | mapStopReason | `export declare function mapStopReason(message: AssistantMessage, contextWindow?: number): FinishReason` | 29 |
| function | toStreamChunks | `export declare function toStreamChunks(events: AsyncIterable<AssistantMessageEvent>, contextWindow?: number, callerSignal?: AbortSignal, requestedModel?: string` | 42 |

