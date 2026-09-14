# dsh-agent

> Agent interface, registry, initiator scope, and event vocabulary for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-agent/lib/types/consumed-work.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConsumedWork | `export interface ConsumedWork` | 16 |
| function | foldConsumedWork | `export declare function foldConsumedWork(events: readonly SessionEvent[]): ConsumedWork` | 38 |

## dsh-agent/lib/types/dispatch.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Params | `type Params<F>` | 13 |
| type | Return | `type Return<F>` | 15 |
| type | AgentSubjectEvent | `export type AgentSubjectEvent` | 24 |
| type | PayloadOf | `type PayloadOf<K extends AgentSubjectEvent>` | 30 |
| type | Tail | `type Tail<K extends AgentSubjectEvent>` | 32 |
| type | PayloadRest | `type PayloadRest<K extends AgentSubjectEvent>` | 38 |
| interface | AgentEventDispatch | `export interface AgentEventDispatch` | 44 |
| function | agentCarrier | `export declare function agentCarrier(agent: Agent): Scoped<Agent>` | 83 |
| function | agentEvents | `export declare function agentEvents(ctx: Context, agent: Agent, carrier?: Scoped<Agent>): AgentEventDispatch` | 93 |
| function | emitAgentEvent | `export declare function emitAgentEvent<K extends AgentSubjectEvent>(ctx: Context, agent: Agent, name: K, payload: PayloadRest<K>): void` | 101 |
| function | assembleContextFor | `export declare function assembleContextFor(agent: Agent, signal?: AbortSignal): AssembleContext` | 109 |
| export-list |  | `export {};` | 110 |

## dsh-agent/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './runtime-types.ts';` | 11 |
| re-export | * | `export * from './types.ts';` | 12 |
| re-export | * | `export * from './consumed-work.ts';` | 14 |
| re-export | * | `export * from './model-selection.ts';` | 15 |
| re-export | { agentCarrier, agentEvents, assembleCon | `export { agentCarrier, agentEvents, assembleContextFor, emitAgentEvent } from './dispatch.ts';` | 16 |
| interface | AgentSetupCommit | `export interface AgentSetupCommit` | 27 |
| type | AgentSetup | `export type AgentSetup` | 40 |
| interface | CreateAgentOptions | `export interface CreateAgentOptions` | 48 |
| interface | ResumeAgentOptions | `export interface ResumeAgentOptions` | 110 |
| interface | AgentHandle | `export interface AgentHandle` | 144 |
| interface | AgentFactory | `export interface AgentFactory` | 154 |
| class | AgentRegistry | `export declare class AgentRegistry extends Service` | 199 |
| method | AgentRegistry.constructor | `constructor(ctx: Context);` | 208 |
| default | AgentRegistry | `export default AgentRegistry;` | 376 |

## dsh-agent/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "agent-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-agent/lib/types/model-selection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ModelSelection | `export interface ModelSelection` | 8 |
| interface | ModelSelectionRef | `export interface ModelSelectionRef` | 17 |
| function | installModelSelection | `export declare function installModelSelection(agentCtx: Context, selection: ModelSelectionRef): () => void` | 41 |

## dsh-agent/lib/types/projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 8 |

## dsh-agent/lib/types/runtime-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentOptions | `export interface AgentOptions` | 21 |
| interface | CancelOptions | `export interface CancelOptions` | 32 |
| interface | Inbox | `export interface Inbox` | 41 |
| type | AgentStatus | `export type AgentStatus` | 90 |
| type | PreStepDecision | `export type PreStepDecision` | 92 |
| type | RequestErrorAction | `export type RequestErrorAction` | 101 |
| type | SessionStartSource | `export type SessionStartSource` | 105 |
| type | AssistantStreamFrame | `export type AssistantStreamFrame` | 107 |

## dsh-agent/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Agent | `export interface Agent` | 11 |
| type | InboxTarget | `export type InboxTarget` | 25 |
| interface | InboxState | `export interface InboxState` | 27 |
| interface | InboxWireState | `export interface InboxWireState` | 37 |
| interface | TurnBoundaryProjection | `export interface TurnBoundaryProjection` | 60 |

