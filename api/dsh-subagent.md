# dsh-subagent

> Abstract subagent seam (ctx.subagents): named-provider registry for delegating to child agents
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-subagent/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-subagent/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 25 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 26 |

## dsh-subagent/lib/types/assistant-output.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | AssistantOutputFold | `export declare class AssistantOutputFold` | 20 |
| function | finalAssistantOutput | `export declare function finalAssistantOutput(events: readonly SessionEvent[]): ContentBlock[] \| undefined` | 47 |

## dsh-subagent/lib/types/catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SUBAGENT_CATALOG_VERSION | `export declare const SUBAGENT_CATALOG_VERSION = 0` | 11 |
| type | SubagentCatalogEvent | `export type SubagentCatalogEvent` | 13 |
| interface | SubagentCatalogState | `export interface SubagentCatalogState` | 34 |
| function | subagentCatalogEntries | `declare function subagentCatalogEntries(state: SubagentCatalogState): SubagentCatalogEntry[]` | 48 |
| const | subagentCatalogProjectionDefinition | `export declare const subagentCatalogProjectionDefinition: {` | 50 |
| function | establishCatalogChild | `export declare function establishCatalogChild(parent: Session, child: SessionHeader, descriptor: {` | 69 |
| export-list |  | `export {};` | 76 |

## dsh-subagent/lib/types/child-agent.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SubagentDepthError | `export declare class SubagentDepthError extends Error` | 16 |
| method | SubagentDepthError.constructor | `constructor(attemptedDepth: number, maxDepth: number);` | 19 |
| function | resolveChildDepth | `export declare function resolveChildDepth(parent: Agent, maxDepth: number \| undefined): number` | 31 |
| function | parentAgentOptionsForDelegation | `export declare function parentAgentOptionsForDelegation(parent: Agent): AgentOptions` | 40 |
| function | resolveChildAgentOptions | `export declare function resolveChildAgentOptions(parent: Agent, requested: AgentOptions \| undefined, childDepth: number): AgentOptions` | 52 |
| function | childSessionMeta | `export declare function childSessionMeta(parent: Agent, childDepth: number, isSeeded: boolean): NonNullable<CreateAgentOptions['meta']>` | 70 |
| interface | ChildComposition | `export interface ChildComposition` | 72 |
| const | SUBAGENT_DELEGATION_CONTEXT | `export declare const SUBAGENT_DELEGATION_CONTEXT: string` | 83 |
| function | applyChildComposition | `export declare function applyChildComposition(childCtx: Context, parent: Agent, composition: ChildComposition): void` | 106 |
| interface | DelegatedPolicyOverrides | `export interface DelegatedPolicyOverrides` | 108 |
| function | captureDelegatedPolicyOverrides | `export declare function captureDelegatedPolicyOverrides(parent: Agent): DelegatedPolicyOverrides` | 128 |
| function | appendDelegatedPolicyOverrides | `export declare function appendDelegatedPolicyOverrides(childSession: Session, overrides: DelegatedPolicyOverrides): void` | 138 |
| interface | ChildCreateInputs | `export interface ChildCreateInputs` | 140 |

## dsh-subagent/lib/types/continuation-activation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Activation | `export interface Activation` | 26 |
| interface | MaterializeInputs | `export interface MaterializeInputs` | 66 |
| class | ChildLock | `export declare class ChildLock` | 93 |
| class | ContinuableActivationRegistry | `export declare class ContinuableActivationRegistry` | 104 |
| method | ContinuableActivationRegistry.constructor | `constructor(ctx: Context, observeActivation: (provider: string, childId: SessionId, parent: Agent) => ActivationObserver);` | 128 |

## dsh-subagent/lib/types/continuation-messages.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentMessageSource | `export interface AgentMessageSource` | 12 |
| interface | SubagentSettledMessageSource | `export interface SubagentSettledMessageSource` | 26 |
| function | createAgentMessage | `export declare function createAgentMessage(sender: Agent, content: ContentBlock[]): ReturnType<typeof createUserMessage>` | 47 |
| function | withContinuableReturnGuidance | `export declare function withContinuableReturnGuidance(parentId: SessionId, prompt: ContentBlock[]): ContentBlock[]` | 54 |
| function | createSettlementMessage | `export declare function createSettlementMessage(childId: SessionId, terminal: ActivationTerminal): ReturnType<typeof createUserMessage>` | 61 |

## dsh-subagent/lib/types/continuation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ContinuationHost | `interface ContinuationHost` | 22 |
| class | SubagentContinuationManager | `export declare class SubagentContinuationManager` | 34 |
| method | SubagentContinuationManager.constructor | `constructor(ctx: Context, host: ContinuationHost);` | 38 |
| default | SubagentContinuationManager | `export default SubagentContinuationManager;` | 123 |

## dsh-subagent/lib/types/control-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SubagentPromptRequestId | `export type SubagentPromptRequestId` | 19 |
| type | SubagentListEntry | `export type SubagentListEntry` | 30 |
| interface | SubagentCatalog | `export interface SubagentCatalog` | 72 |
| type | SubagentAddress | `export type SubagentAddress` | 77 |
| interface | SubagentPromptRequest | `export interface SubagentPromptRequest` | 86 |
| interface | SubagentPromptReceipt | `export interface SubagentPromptReceipt` | 105 |
| interface | SubagentInterruptReceipt | `export interface SubagentInterruptReceipt` | 109 |

## dsh-subagent/lib/types/control.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CONTROL_ID_SCHEMAS | `declare const CONTROL_ID_SCHEMAS: {` | 12 |
| function | validateControlRequest | `export declare function validateControlRequest(method: keyof typeof CONTROL_ID_SCHEMAS, payload: unknown): void` | 38 |
| function | catalogView | `export declare function catalogView(ctx: Context, parentSessionId: SessionId, entries: readonly SubagentListEntry[]): SubagentCatalog` | 49 |
| function | rejectCatalogRead | `export declare function rejectCatalogRead(error: unknown, signal: AbortSignal): never` | 58 |
| function | rejectPrompt | `export declare function rejectPrompt(error: unknown, childSessionId: SessionId, signal: AbortSignal): never` | 69 |
| export-list |  | `export {};` | 70 |

## dsh-subagent/lib/types/depth.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | delegationDepthOf | `export declare function delegationDepthOf(agent: Agent): number` | 25 |
| function | assertSubagentMaxDepth | `export declare function assertSubagentMaxDepth(maxDepth: unknown): void` | 30 |

## dsh-subagent/lib/types/descriptor.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SUBAGENT_DESCRIPTOR_VERSION | `export declare const SUBAGENT_DESCRIPTOR_VERSION = 3` | 44 |
| interface | SubagentDescriptorBase | `interface SubagentDescriptorBase` | 46 |
| interface | OneShotSubagentDescriptorData | `export interface OneShotSubagentDescriptorData extends SubagentDescriptorBase` | 55 |
| interface | ContinuableSubagentDescriptorData | `export interface ContinuableSubagentDescriptorData extends SubagentDescriptorBase` | 65 |
| type | SubagentDescriptorData | `export type SubagentDescriptorData` | 81 |
| interface | SubagentDescriptorInputBase | `interface SubagentDescriptorInputBase` | 83 |
| interface | OneShotSubagentDescriptorInput | `export interface OneShotSubagentDescriptorInput extends SubagentDescriptorInputBase` | 90 |
| interface | ContinuableSubagentDescriptorInput | `export interface ContinuableSubagentDescriptorInput extends SubagentDescriptorInputBase` | 96 |
| type | SubagentDescriptorInput | `export type SubagentDescriptorInput` | 112 |
| function | snapshotSubagentDescriptor | `export declare function snapshotSubagentDescriptor(input: OneShotSubagentDescriptorInput): OneShotSubagentDescriptorData` | 122 |
| function | snapshotSubagentDescriptor | `export declare function snapshotSubagentDescriptor(input: ContinuableSubagentDescriptorInput): ContinuableSubagentDescriptorData` | 129 |
| function | foldSubagentDescriptor | `export declare function foldSubagentDescriptor(events: readonly SessionEvent[]): SubagentDescriptorData \| undefined` | 142 |
| export-list |  | `export {};` | 143 |

## dsh-subagent/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SubagentError | `export declare class SubagentError extends HarnessError` | 8 |
| method | SubagentError.constructor | `constructor(message: string, code: string, options?: ErrorOptions);` | 9 |

## dsh-subagent/lib/types/inbox.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SubagentDelivery | `export type SubagentDelivery` | 10 |
| class | SubagentInbox | `export declare class SubagentInbox` | 12 |
| method | SubagentInbox.constructor | `constructor(agent: Agent);` | 19 |

## dsh-subagent/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './out-of-process.ts';` | 42 |
| re-export | { AssistantOutputFold, finalAssistantOut | `export { AssistantOutputFold, finalAssistantOutput } from './assistant-output.ts';` | 43 |
| re-export | { SubagentRunId } | `export { SubagentRunId } from './types.ts';` | 44 |
| re-export | { foldSubagentDescriptor, snapshotSubage | `export { foldSubagentDescriptor, snapshotSubagentDescriptor, SUBAGENT_DESCRIPTOR_VERSION, } from './descriptor.ts';` | 46 |
| re-export | { SubagentError } | `export { SubagentError } from './error.ts';` | 48 |
| re-export | { settleRun } | `export { settleRun } from './run-settlement.ts';` | 49 |
| re-export | { assertSubagentMaxDepth, delegationDept | `export { assertSubagentMaxDepth, delegationDepthOf } from './depth.ts';` | 50 |
| re-export | { appendDelegatedPolicyOverrides, applyC | `export { appendDelegatedPolicyOverrides, applyChildComposition, captureDelegatedPolicyOverrides, childSessionMeta, parentAgentOptionsForDelegation, resolveChild` | 51 |
| class | SubagentRuntime | `export declare class SubagentRuntime extends TypertRemoteService` | 98 |
| method | SubagentRuntime.constructor | `constructor(ctx: Context);` | 107 |
| default | SubagentRuntime | `export default SubagentRuntime;` | 315 |

## dsh-subagent/lib/types/internal.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | adjacentAgentSendMessageTool | `export declare const adjacentAgentSendMessageTool: unique symbol` | 13 |
| function | markAdjacentAgentSendMessageTool | `export declare function markAdjacentAgentSendMessageTool(definition: ToolDefinition): ToolDefinition` | 19 |
| function | isAdjacentAgentSendMessageTool | `export declare function isAdjacentAgentSendMessageTool(definition: ToolDefinition \| undefined): boolean` | 25 |
| const | deliverSubagentPrompt | `export declare const deliverSubagentPrompt: unique symbol` | 31 |
| interface | HostPromptDeliverer | `export interface HostPromptDeliverer` | 33 |
| function | queueHostSubagentPrompt | `export declare function queueHostSubagentPrompt(runtime: SubagentRuntime, parent: Agent, childId: SessionId, content: ContentBlock[], source: MessageSource, sig` | 46 |
| function | steerHostSubagentPrompt | `export declare function steerHostSubagentPrompt(runtime: SubagentRuntime, parent: Agent, childId: SessionId, content: ContentBlock[], source: MessageSource, sig` | 57 |

## dsh-subagent/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "subagent-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-subagent/lib/types/lifecycle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ActivationTerminal | `export interface ActivationTerminal` | 25 |
| interface | ActivationObserver | `export interface ActivationObserver` | 37 |
| type | LifecycleEmitter | `export type LifecycleEmitter` | 77 |
| function | createLifecycleEmitter | `export declare function createLifecycleEmitter(ctx: Context, carrier: (parent: Agent) => object): LifecycleEmitter` | 91 |
| function | observeRun | `export declare function observeRun(emit: LifecycleEmitter, provider: string, parent: Agent, run: SubagentRun): SubagentRun` | 100 |
| function | createActivationObserver | `export declare function createActivationObserver(emit: LifecycleEmitter, provider: string, childId: SessionId, parent: Agent): ActivationObserver` | 112 |

## dsh-subagent/lib/types/list-children.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SubagentDescendantListEntry | `export type SubagentDescendantListEntry` | 28 |
| function | listChildren | `export declare function listChildren(ctx: Context, parentSessionId: SessionId, signal?: AbortSignal): Promise<SubagentListEntry[]>` | 50 |
| function | listDescendants | `export declare function listDescendants(ctx: Context, rootSessionId: SessionId, signal?: AbortSignal): Promise<SubagentDescendantListEntry[]>` | 64 |

## dsh-subagent/lib/types/out-of-process.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NO_START_CAPABILITIES | `export declare const NO_START_CAPABILITIES: SubagentCapabilities` | 21 |
| function | assertPositiveFinite | `export declare function assertPositiveFinite(prefix: string, name: string, value: number): void` | 29 |
| function | assertUsableCwd | `export declare function assertUsableCwd(prefix: string, label: string, cwd: string): string` | 40 |
| function | validateConfiguredCwd | `export declare function validateConfiguredCwd(prefix: string, cwd: string \| undefined): string \| undefined` | 51 |
| function | resolveChildCwd | `export declare function resolveChildCwd(prefix: string, configured: string \| undefined, parentCwd: string \| undefined): string` | 65 |
| interface | RunResultSettlement | `export interface RunResultSettlement` | 67 |
| function | settleRunResult | `export declare function settleRunResult(parts: RunResultSettlement): Promise<SubagentResult>` | 93 |
| interface | SubprocessRunHandleParts | `export interface SubprocessRunHandleParts` | 95 |
| function | subprocessRunHandle | `export declare function subprocessRunHandle(parts: SubprocessRunHandleParts): SubagentRun` | 117 |

## dsh-subagent/lib/types/projection-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SubagentCatalogEntry | `export type SubagentCatalogEntry` | 8 |
| interface | SubagentTimingProjection | `export interface SubagentTimingProjection` | 19 |
| type | SubagentIdentityProjection | `export type SubagentIdentityProjection` | 36 |

## dsh-subagent/lib/types/projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TimingState | `export interface TimingState` | 11 |
| const | subagentTimingProjectionDefinition | `export declare const subagentTimingProjectionDefinition: {` | 38 |
| interface | IdentityState | `interface IdentityState` | 68 |
| const | subagentIdentityProjectionDefinition | `export declare const subagentIdentityProjectionDefinition: {` | 83 |
| export-list |  | `export {};` | 94 |

## dsh-subagent/lib/types/run-settlement.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | settleRun | `export declare function settleRun(run: SubagentRun): Promise<JobOutcome>` | 16 |

## dsh-subagent/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SubagentRunId | `export type SubagentRunId` | 18 |
| function | SubagentRunId | `export declare function SubagentRunId(id: string): SubagentRunId` | 24 |
| interface | ContinuableStartSpec | `export interface ContinuableStartSpec` | 26 |
| interface | ContinuableStart | `export interface ContinuableStart` | 46 |
| type | SubagentInterruptAuthority | `export type SubagentInterruptAuthority` | 57 |
| interface | SubagentSendMessageOptions | `export interface SubagentSendMessageOptions` | 65 |
| interface | SubagentRunInfo | `export interface SubagentRunInfo` | 74 |
| interface | SubagentRunEndInfo | `export interface SubagentRunEndInfo` | 93 |
| interface | SubagentCapabilities | `export interface SubagentCapabilities` | 122 |
| interface | SubagentStartRequest | `export interface SubagentStartRequest` | 136 |
| interface | ResolvedSubagentStartRequest | `export interface ResolvedSubagentStartRequest extends SubagentStartRequest` | 197 |
| interface | ContinuableCreateRequest | `export interface ContinuableCreateRequest` | 208 |
| interface | ContinuableCreateSpec | `export interface ContinuableCreateSpec` | 225 |
| interface | SubagentStopReasonMap | `export interface SubagentStopReasonMap` | 239 |
| type | SubagentStopReason | `export type SubagentStopReason` | 252 |
| interface | SubagentResult | `export interface SubagentResult` | 256 |
| interface | SubagentRun | `export interface SubagentRun` | 292 |
| interface | SubagentProvider | `export interface SubagentProvider` | 327 |

