# dsh-client-ui-workflow-run

> Durable workflow-run Conversation Node and nested member disclosure for dsh web
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-workflow-run/lib/types/client/WorkflowRunPanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkflowRunInjected | `export interface WorkflowRunInjected` | 4 |
| type | WorkflowRunPanelProps | `export type WorkflowRunPanelProps` | 8 |
| function | WorkflowRunPanel | `export declare function WorkflowRunPanel({ node, sessionId, useSessions, openSession, t }: WorkflowRunPanelProps): import("react").JSX.Element` | 10 |

## dsh-client-ui-workflow-run/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 11 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 13 |

## dsh-client-ui-workflow-run/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "workflowRun"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| const | en | `export declare const en: Record<WorkflowRunKey, string>` | 26 |
| type | WorkflowRunKey | `export type WorkflowRunKey` | 28 |

## dsh-client-ui-workflow-run/lib/types/client/workflow-definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WorkflowRunStatus | `export type WorkflowRunStatus` | 6 |
| interface | WorkflowRunMemberData | `export interface WorkflowRunMemberData` | 8 |
| interface | WorkflowRunPhaseData | `export interface WorkflowRunPhaseData` | 15 |
| interface | WorkflowRunChatData | `export interface WorkflowRunChatData` | 22 |
| interface | WorkflowMemberState | `interface WorkflowMemberState extends Omit<ToolWorkflowAgentStartData, 'runId'>` | 33 |
| interface | WorkflowState | `interface WorkflowState` | 36 |
| function | workflowPhaseKey | `export declare function workflowPhaseKey(phase: string \| null): string` | 46 |
| const | workflowRunDefinition | `export declare const workflowRunDefinition: ConversationNodeDefinition<WorkflowState>` | 48 |
| export-list |  | `export {};` | 49 |

## dsh-client-ui-workflow-run/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

