# dsh-tool-subagent

> Model-facing subagent delegation tool over the ctx.subagents seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-subagent/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-subagent"` | 14 |
| const | inject | `export declare const inject: string[]` | 15 |
| interface | Config | `export interface Config` | 17 |
| const | Config | `export declare const Config: z<Config>` | 73 |
| function | apply | `export declare function apply(ctx: Context, config: Config, session?: Session): void` | 80 |

## dsh-tool-subagent/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-subagent-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-tool-subagent/lib/types/list-models.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerListSubagentModels | `export declare function registerListSubagentModels(ctx: Context, policy: ModelSelectionPolicy): void` | 9 |

## dsh-tool-subagent/lib/types/model-selection-settings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SUBAGENT_MODEL_SELECTION_SETTINGS_NAMESPACE | `export declare const SUBAGENT_MODEL_SELECTION_SETTINGS_NAMESPACE = "subagent-model-selection"` | 12 |
| interface | SubagentModelSelectionSettings | `export interface SubagentModelSelectionSettings` | 14 |
| const | SUBAGENT_MODEL_SELECTION_SETTINGS_SCHEMA | `export declare const SUBAGENT_MODEL_SELECTION_SETTINGS_SCHEMA: z<SubagentModelSelectionSettings>` | 21 |
| interface | Config | `export interface Config` | 23 |
| class | SubagentModelSelectionConfig | `export declare class SubagentModelSelectionConfig extends Service` | 30 |
| method | SubagentModelSelectionConfig.constructor | `constructor(ctx: Context, config?: Config);` | 33 |
| const | name | `export declare const name = "subagent-model-selection-settings"` | 41 |
| default | SubagentModelSelectionConfig | `export default SubagentModelSelectionConfig;` | 42 |

## dsh-tool-subagent/lib/types/model-selection-state.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | subagentModelSelectionProjectionDefinition | `export declare const subagentModelSelectionProjectionDefinition: {` | 27 |
| function | subagentModelSelectionPolicy | `export declare function subagentModelSelectionPolicy(projections: Pick<SessionProjectionRegistry, 'stateOf'>, session: Session): AllowedModelRoute[] \| undefine` | 40 |
| function | recordSubagentModelSelection | `export declare function recordSubagentModelSelection(projections: Pick<SessionProjectionRegistry, 'stateOf'>, session: Session, allowedModels: readonly AllowedM` | 47 |

## dsh-tool-subagent/lib/types/model-selection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AllowedModelRoute | `export interface AllowedModelRoute` | 6 |
| const | AllowedModelRouteSchema | `export declare const AllowedModelRouteSchema: z<AllowedModelRoute>` | 13 |
| interface | ModelSelectionPolicy | `export interface ModelSelectionPolicy` | 15 |
| function | modelRouteKey | `export declare function modelRouteKey(route: AllowedModelRoute): string` | 24 |
| function | assertAllowedModelRoutes | `export declare function assertAllowedModelRoutes(routes: unknown): asserts routes is readonly AllowedModelRoute[]` | 30 |
| interface | DelegationModelRequest | `export interface DelegationModelRequest` | 32 |
| function | hasDelegationModelRequest | `export declare function hasDelegationModelRequest(request: DelegationModelRequest): boolean` | 42 |
| function | requestedAgentOptions | `export declare function requestedAgentOptions(parentOptions: AgentOptions, configured: AgentOptions \| undefined, request: DelegationModelRequest, enabled: bool` | 53 |
| function | assertAllowedModelSelection | `export declare function assertAllowedModelSelection(policy: ModelSelectionPolicy \| undefined, parentOptions: AgentOptions, requested: AgentOptions \| undefined` | 63 |
| function | hasConfiguredLlmSelection | `export declare function hasConfiguredLlmSelection(options: AgentOptions \| undefined): boolean` | 69 |
| function | preflightChildLlmRoute | `export declare function preflightChildLlmRoute(llm: LlmRuntime, parentOptions: AgentOptions, requested: AgentOptions \| undefined, signal: AbortSignal, inheritP` | 80 |

