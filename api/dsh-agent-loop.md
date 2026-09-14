# dsh-agent-loop

> The concrete agent loop plugin for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-agent-loop/lib/types/agent.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ReactLoopAgent | `export declare class ReactLoopAgent implements Agent` | 12 |
| method | ReactLoopAgent.constructor | `constructor(loopCtx: Context, id: SessionId, options: AgentOptions, session: Session);` | 36 |

## dsh-agent-loop/lib/types/assistant-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | AssistantStreamAttempt | `export declare class AssistantStreamAttempt` | 6 |
| method | AssistantStreamAttempt.constructor | `constructor(sessionId: SessionId, attempt: number, nextRevision: () => number, turn: number, step: number, emit: (frame: AssistantStreamFrame) => void);` | 27 |

## dsh-agent-loop/lib/types/constants.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_MAX_PARALLEL_TOOL_CALLS | `export declare const DEFAULT_MAX_PARALLEL_TOOL_CALLS = 10` | 5 |

## dsh-agent-loop/lib/types/inbox.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inboxProjectionSchema | `export declare const inboxProjectionSchema: z.ZodReadonly<z.ZodObject<{` | 12 |
| const | inboxProjectionDefinition | `export declare const inboxProjectionDefinition: {` | 17 |
| class | ReactLoopInbox | `export declare class ReactLoopInbox implements InboxContract` | 38 |
| method | ReactLoopInbox.constructor | `constructor(projections: SessionProjectionRegistry, session: Session, dispatch: AgentEventDispatch);` | 42 |

## dsh-agent-loop/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | turnBoundaryProjectionDefinition | `export declare const turnBoundaryProjectionDefinition: {` | 14 |
| export-list | DEFAULT_MAX_PARALLEL_TOOL_CALLS | `export { DEFAULT_MAX_PARALLEL_TOOL_CALLS };` | 55 |
| interface | LauncherAgentIdentity | `export interface LauncherAgentIdentity` | 62 |
| interface | ConfiguredAgentIdentities | `export interface ConfiguredAgentIdentities extends Readonly<Record<string, LauncherAgentIdentity>>` | 69 |
| const | CONFIGURED_AGENT_IDENTITIES_KEY | `export declare const CONFIGURED_AGENT_IDENTITIES_KEY = "configuredAgentIdentities"` | 77 |
| const | AGENT_LOOP_SETTINGS_NAMESPACE | `export declare const AGENT_LOOP_SETTINGS_NAMESPACE = "agent-loop"` | 79 |
| interface | AgentLoopSettings | `export interface AgentLoopSettings` | 85 |
| const | AGENT_LOOP_SETTINGS_SCHEMA | `export declare const AGENT_LOOP_SETTINGS_SCHEMA: z<AgentLoopSettings>` | 90 |
| interface | Config | `export interface Config` | 92 |
| type | ResolvedConfig | `type ResolvedConfig` | 111 |
| class | AgentLoop | `export declare class AgentLoop extends Service implements AgentFactory` | 115 |
| method | AgentLoop.constructor | `constructor(ctx: Context, config: Config);` | 124 |
| default | AgentLoop | `export default AgentLoop;` | 190 |

## dsh-agent-loop/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "agent-loop-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-agent-loop/lib/types/runtime-context.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SystemPromptCommit | `export interface SystemPromptCommit` | 11 |
| interface | SystemPromptDecisionInput | `export interface SystemPromptDecisionInput` | 18 |
| class | SystemPromptProjection | `export declare class SystemPromptProjection` | 36 |
| method | SystemPromptProjection.constructor | `constructor(session: Session);` | 38 |
| class | RuntimeContextProjection | `export declare class RuntimeContextProjection` | 51 |
| method | RuntimeContextProjection.constructor | `constructor(ctx: Context, session: Session);` | 59 |

## dsh-agent-loop/lib/types/tool-calls.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | executeToolCalls | `export declare function executeToolCalls(ctx: Context, turn: number, step: number, toolCalls: ToolCallBlock[], signal: AbortSignal, acceptContext: (context: Use` | 35 |

