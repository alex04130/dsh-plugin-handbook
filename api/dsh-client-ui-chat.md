# dsh-client-ui-chat

> Chat Conversation target, node definitions, renderers, and details surface
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-chat/lib/types/chat-settings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CHAT_SETTINGS_NAMESPACE | `export declare const CHAT_SETTINGS_NAMESPACE = "ui-chat"` | 4 |
| const | TRANSCRIPT_VIEW_FIELD | `export declare const TRANSCRIPT_VIEW_FIELD = "transcriptView"` | 6 |
| const | TRANSCRIPT_VIEW_MODES | `export declare const TRANSCRIPT_VIEW_MODES: readonly ["normal", "compact"]` | 8 |
| type | TranscriptViewMode | `export type TranscriptViewMode` | 10 |
| const | DEFAULT_TRANSCRIPT_VIEW_MODE | `export declare const DEFAULT_TRANSCRIPT_VIEW_MODE: TranscriptViewMode` | 12 |
| interface | ChatSettings | `export interface ChatSettings` | 14 |
| const | ChatSettingsSchema | `export declare const ChatSettingsSchema: z<ChatSettings>` | 19 |

## dsh-client-ui-chat/lib/types/client/apply.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 4 |
| function | apply | `export declare function apply(ctx: Context): void` | 9 |

## dsh-client-ui-chat/lib/types/client/chat/ApprovalCommand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ApprovalToolCall | `interface ApprovalToolCall` | 3 |
| function | commandOf | `export declare function commandOf(call: ApprovalToolCall \| undefined): string \| undefined` | 12 |
| function | ApprovalCommand | `export declare function ApprovalCommand({ callId, useChat }: PropsRuntime<'conversation.approval.detail'>): string \| null` | 18 |
| export-list |  | `export {};` | 19 |

## dsh-client-ui-chat/lib/types/client/chat/AssistantMarkdown.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | localPathMediaUrl | `export declare function localPathMediaUrl(protocol: string, origin: string, value: string): string \| undefined` | 14 |
| interface | AssistantMarkdownProps | `export interface AssistantMarkdownProps` | 15 |
| const | AssistantMarkdown | `export declare const AssistantMarkdown: import("react").MemoExoticComponent<({ blocks, streaming, interrupted, renderMessageImages, reasoningHidden, revealProce` | 32 |

## dsh-client-ui-chat/lib/types/client/chat/AssistantNodeView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | AssistantNodeView | `export declare const AssistantNodeView: import("react").MemoExoticComponent<({ node, useTurnData, turnProcess, openFile, renderMessageImages, fileMentions, t, }` | 3 |

## dsh-client-ui-chat/lib/types/client/chat/ChatNodeSeat.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ChatNodeSeatProps | `interface ChatNodeSeatProps extends ChatNodeOwnerProps` | 2 |
| const | ChatNodeSeat | `export declare const ChatNodeSeat: import("react").MemoExoticComponent<({ nodeKey, useChatNode, useChatNodeProcess, historyIncomplete, compactTranscript, cwd, o` | 14 |
| export-list |  | `export {};` | 15 |

## dsh-client-ui-chat/lib/types/client/chat/ChatView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ChatView | `export declare function ChatView({ useSession, useChat, useChatNode, useChatNodeProcess, useSessions, useStore, actions, renderSlot, sessionId, openFile, loadOl` | 6 |

## dsh-client-ui-chat/lib/types/client/chat/CommandNodeView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CommandNodeViewProps | `type CommandNodeViewProps` | 3 |
| const | CommandNodeView | `export declare const CommandNodeView: import("react").MemoExoticComponent<({ node, renderSlot, t }: CommandNodeViewProps) => import("react").JSX.Element>` | 5 |
| const | ManualCompactionNodeView | `export declare const ManualCompactionNodeView: import("react").MemoExoticComponent<({ node, t, }: ChatNodeViewProps<"manual-compaction">) => import("react").JSX` | 7 |
| export-list |  | `export {};` | 8 |

## dsh-client-ui-chat/lib/types/client/chat/CompactionCommandCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CompactionCommandCardProps | `interface CompactionCommandCardProps extends CommandRowOwnerProps` | 2 |
| function | CompactionCommandCard | `export declare function CompactionCommandCard({ node, compaction, t }: CompactionCommandCardProps): import("react").JSX.Element` | 6 |
| export-list |  | `export {};` | 7 |

## dsh-client-ui-chat/lib/types/client/chat/CompactionItem.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CompactionItemProps | `interface CompactionItemProps` | 3 |
| const | CompactionItem | `export declare const CompactionItem: import("react").MemoExoticComponent<({ node, title, fallbackSummary, t, }: CompactionItemProps) => import("react").JSX.Elem` | 17 |
| export-list |  | `export {};` | 18 |

## dsh-client-ui-chat/lib/types/client/chat/ContextBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Translate | `type Translate` | 5 |
| function | OpaqueBody | `export declare function OpaqueBody({ content, source, t }: {` | 13 |
| function | InstructionsBody | `export declare function InstructionsBody({ content, source, t }: {` | 27 |
| function | CatalogBody | `export declare function CatalogBody({ content, source, t }: {` | 42 |
| function | SnapshotBody | `export declare function SnapshotBody({ content, source, t }: {` | 63 |
| function | NoticeBody | `export declare function NoticeBody({ content, t }: {` | 76 |
| function | RelayBody | `export declare function RelayBody({ content, source, t }: {` | 89 |
| function | RecallBody | `export declare function RecallBody({ content, source, t }: {` | 104 |
| function | contextBody | `export declare function contextBody(form: ContextMessageNode['form'], props: {` | 121 |
| export-list |  | `export {};` | 130 |

## dsh-client-ui-chat/lib/types/client/chat/ContextInjectionRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ContextInjectionRowProps | `export interface ContextInjectionRowProps` | 4 |
| function | ContextInjectionRow | `export declare function ContextInjectionRow({ content, source, provenance, form, t }: ContextInjectionRowProps): import("react").JSX.Element` | 25 |

## dsh-client-ui-chat/lib/types/client/chat/GenericCommandCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GenericCommandCardProps | `export interface GenericCommandCardProps extends CommandRowOwnerProps` | 3 |
| function | GenericCommandCard | `export declare function GenericCommandCard({ node, t, runningSummary }: GenericCommandCardProps): import("react").JSX.Element` | 8 |

## dsh-client-ui-chat/lib/types/client/chat/MessageIconActions.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | MessageIconActionsProps | `export interface MessageIconActionsProps` | 3 |
| function | MessageIconActions | `export declare function MessageIconActions({ text, time, clock, onBranch, branchUnavailable, className, extraActions, usageAction, t, }: MessageIconActionsProps` | 34 |

## dsh-client-ui-chat/lib/types/client/chat/MessageItem.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | PendingSteeringBubble | `export declare function PendingSteeringBubble({ content, renderMessageImages, t }: {` | 10 |
| function | PendingSubmissionBubble | `export declare function PendingSubmissionBubble({ submission, renderMessageImages, t }: {` | 23 |
| const | UserMessageNodeView | `export declare const UserMessageNodeView: import("react").MemoExoticComponent<({ node, renderMessageImages, t, }: ChatNodeViewProps<"user" \| "steering">) => im` | 29 |
| const | ContextMessageNodeView | `export declare const ContextMessageNodeView: import("react").MemoExoticComponent<({ node, t }: ChatNodeViewProps<"context">) => import("react").JSX.Element>` | 31 |
| const | CompactionNodeView | `export declare const CompactionNodeView: import("react").MemoExoticComponent<({ node, t }: ChatNodeViewProps<"compaction">) => import("react").JSX.Element>` | 33 |
| const | RetryNodeView | `export declare const RetryNodeView: import("react").MemoExoticComponent<({ node, t }: ChatNodeViewProps<"model-retry">) => import("react").JSX.Element>` | 35 |
| const | TurnErrorNodeView | `export declare const TurnErrorNodeView: import("react").MemoExoticComponent<({ node, t }: ChatNodeViewProps<"turn-error">) => import("react").JSX.Element>` | 37 |
| const | TurnMaxTokensNodeView | `export declare const TurnMaxTokensNodeView: import("react").MemoExoticComponent<({ t }: ChatNodeViewProps<"turn-max-tokens">) => import("react").JSX.Element>` | 39 |
| const | UnknownNodeView | `export declare const UnknownNodeView: import("react").MemoExoticComponent<({ node, t }: ChatNodeViewProps<"unknown">) => import("react").JSX.Element>` | 41 |

## dsh-client-ui-chat/lib/types/client/chat/ReasoningRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ReasoningRow | `export declare function ReasoningRow({ text, running, t }: {` | 11 |

## dsh-client-ui-chat/lib/types/client/chat/StatsPills.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WindowStats | `interface WindowStats` | 6 |
| function | deriveStats | `export declare function deriveStats(nodes: ChatSnapshot['legacy']['nodes']): WindowStats` | 34 |
| function | formatDuration | `export declare function formatDuration(ms: number, t: ChatViewSlotProps['t']): string` | 40 |
| function | cacheHitPercent | `export declare function cacheHitPercent(usage: TokenUsageProjection): string \| null` | 48 |
| function | billedInputTokens | `export declare function billedInputTokens(usage: TokenUsageProjection): number` | 54 |
| interface | StatsPillsProps | `export interface StatsPillsProps` | 56 |
| const | StatsPills | `export declare const StatsPills: import("react").MemoExoticComponent<({ useChat, useProjection, t }: StatsPillsProps) => import("react").JSX.Element \| null>` | 62 |
| export-list |  | `export {};` | 63 |

## dsh-client-ui-chat/lib/types/client/chat/SystemPromptRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SystemPromptRowProps | `export interface SystemPromptRowProps` | 3 |
| function | SystemPromptRow | `export declare function SystemPromptRow({ text, update, t }: SystemPromptRowProps): import("react").JSX.Element` | 19 |
| const | SystemPromptNodeView | `export declare const SystemPromptNodeView: import("react").MemoExoticComponent<({ node, t, }: Pick<ChatNodeViewProps<"system-prompt">, "node" \| "t">) => import` | 21 |

## dsh-client-ui-chat/lib/types/client/chat/TurnNavigator.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnNavigatorProps | `interface TurnNavigatorProps` | 3 |
| function | TurnNavigatorRail | `declare function TurnNavigatorRail({ items, activeTurn, busyTurn, onNavigate, t }: TurnNavigatorProps): import("react").JSX.Element \| null` | 11 |
| const | TurnNavigator | `export declare const TurnNavigator: import("react").MemoExoticComponent<typeof TurnNavigatorRail>` | 24 |
| export-list |  | `export {};` | 25 |

## dsh-client-ui-chat/lib/types/client/chat/TurnProcessNodeView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TurnProcessNodeView | `export declare const TurnProcessNodeView: import("react").MemoExoticComponent<({ node, turnProcess, t, }: ChatNodeViewProps<"turn-process">) => import("react").` | 3 |

## dsh-client-ui-chat/lib/types/client/chat/TurnTailNodeView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TurnTailNodeViewProps | `type TurnTailNodeViewProps` | 3 |
| const | TurnTailNodeView | `export declare const TurnTailNodeView: import("react").MemoExoticComponent<({ node, openFile, forkAt, renderSlot, renderSlotChain, t, useChat, }: TurnTailNodeVi` | 5 |
| export-list |  | `export {};` | 6 |

## dsh-client-ui-chat/lib/types/client/chat/TurnUsagePanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnUsagePanelProps | `export interface TurnUsagePanelProps` | 3 |
| interface | TurnTimePanelProps | `export interface TurnTimePanelProps` | 8 |
| function | TurnUsagePanel | `export declare function TurnUsagePanel({ usage, t }: TurnUsagePanelProps): import("react").JSX.Element` | 23 |
| function | TurnTimePanel | `export declare function TurnTimePanel({ runMs, tokensPerSecond, ttftMs, t }: TurnTimePanelProps): import("react").JSX.Element` | 29 |

## dsh-client-ui-chat/lib/types/client/chat/message-chrome.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ClockTranslate | `export type ClockTranslate` | 3 |
| type | RunDurationTranslate | `export type RunDurationTranslate` | 5 |
| function | startOfLocalDay | `export declare function startOfLocalDay(ms: number): number` | 11 |
| function | msUntilNextLocalMidnight | `export declare function msUntilNextLocalMidnight(ms: number): number` | 17 |
| function | formatRunDuration | `export declare function formatRunDuration(ms: number, t: RunDurationTranslate): string` | 24 |
| function | formatLatencySeconds | `export declare function formatLatencySeconds(ms: number): string` | 31 |
| function | formatTokensPerSecond | `export declare function formatTokensPerSecond(tps: number): string` | 37 |
| function | formatMessageClock | `export declare function formatMessageClock(time: number, t: ClockTranslate, now?: number): string` | 48 |

## dsh-client-ui-chat/lib/types/client/chat/register-node-renderers.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerChatNodeRenderers | `export declare function registerChatNodeRenderers(ctx: Context): void` | 6 |

## dsh-client-ui-chat/lib/types/client/chat/searchable-hidden.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | useSearchableHidden | `export declare function useSearchableHidden(hidden: boolean, reveal: () => void): RefObject<HTMLDivElement>` | 8 |

## dsh-client-ui-chat/lib/types/client/chat/stat-dialog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MEASURE_STYLE | `export declare const MEASURE_STYLE: CSSProperties` | 6 |
| interface | StatDialogSeat | `export interface StatDialogSeat` | 8 |
| function | useStatDialog | `export declare function useStatDialog(controlled?: Pick<StatDialogSeat, 'open' \| 'setOpen'>): StatDialogSeat` | 21 |

## dsh-client-ui-chat/lib/types/client/chat/token-format.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | formatTokens | `export declare function formatTokens(value: number, t: ChatViewSlotProps['t']): string` | 8 |
| function | formatExactTokens | `export declare function formatExactTokens(value: number, t: ChatViewSlotProps['t']): string` | 15 |
| function | formatCacheHitPercent | `export declare function formatCacheHitPercent(cacheReadTokens: number, promptTokens: number, decimalPlaces?: 0 \| 1): string \| null` | 24 |

## dsh-client-ui-chat/lib/types/client/chat/turn-assistant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assistantText | `export declare function assistantText(blocks: readonly AssistantBlock[]): string` | 7 |

## dsh-client-ui-chat/lib/types/client/chat/turn-rail-items.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnRailItem | `export interface TurnRailItem` | 11 |
| function | mergeTurnRailItems | `export declare function mergeTurnRailItems(loaded: readonly TurnNavigationItem[], outline: unknown): readonly TurnRailItem[]` | 36 |

## dsh-client-ui-chat/lib/types/client/chat/use-calendar-day.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | useCalendarDay | `export declare function useCalendarDay(): number` | 5 |

## dsh-client-ui-chat/lib/types/client/contract/assistant-content.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | hasAssistantReplyContent | `export declare function hasAssistantReplyContent(blocks: readonly AssistantBlock[]): boolean` | 8 |

## dsh-client-ui-chat/lib/types/client/contract/chat-nodes.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ChatConversationViewNode | `export interface ChatConversationViewNode extends ConversationViewNode` | 3 |
| interface | ChatNodeDataMap | `export interface ChatNodeDataMap` | 10 |
| type | ChatNodeKind | `export type ChatNodeKind` | 13 |
| type | ChatNode | `export type ChatNode<Kind extends ChatNodeKind` | 15 |
| interface | AssistantChatData | `export interface AssistantChatData` | 22 |
| type | FinalAssistantChatData | `export type FinalAssistantChatData` | 32 |
| interface | ToolChatData | `export interface ToolChatData` | 36 |
| interface | ManualCompactionChatData | `export interface ManualCompactionChatData` | 40 |
| interface | RetryChatData | `export interface RetryChatData` | 45 |
| interface | TurnTokenUsageRoute | `export interface TurnTokenUsageRoute` | 50 |
| interface | TurnTokenUsage | `export interface TurnTokenUsage` | 55 |
| interface | TurnTailChatData | `export interface TurnTailChatData` | 71 |
| interface | TurnProcessChatData | `export interface TurnProcessChatData` | 85 |
| function | isSettledTool | `export declare function isSettledTool(block: ToolCallBlock): block is Extract<ToolCallBlock, {` | 101 |
| function | isRunningTool | `export declare function isRunningTool(block: ToolCallBlock): block is RunningToolCall` | 109 |

## dsh-client-ui-chat/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | UseChat | `export type UseChat` | 15 |
| type | UseChatNode | `export type UseChatNode` | 17 |
| type | UseChatNodeProcess | `export type UseChatNodeProcess` | 19 |
| interface | OpenFileOptions | `export interface OpenFileOptions` | 21 |
| interface | TurnTailOwnerProps | `export interface TurnTailOwnerProps` | 26 |
| interface | AssistantActionOwnerProps | `export interface AssistantActionOwnerProps` | 32 |
| interface | ChatFileMentions | `export interface ChatFileMentions` | 36 |
| type | UseChatNodeTurnData | `export type UseChatNodeTurnData` | 52 |
| interface | ChatNodeTurnDataInjected | `export interface ChatNodeTurnDataInjected` | 54 |
| interface | ChatNodeOwnerProps | `export interface ChatNodeOwnerProps` | 60 |
| interface | TurnProcessOwnerProps | `export interface TurnProcessOwnerProps` | 78 |
| type | ChatNodeViewProps | `export type ChatNodeViewProps<Kind extends ChatNodeKind` | 85 |
| interface | CommandRowOwnerProps | `export interface CommandRowOwnerProps` | 87 |
| type | CommandRowProps | `export type CommandRowProps` | 92 |
| type | ChatStore | `export type ChatStore` | 94 |
| interface | ChatScrollPosition | `export interface ChatScrollPosition` | 96 |
| interface | ChatViewInjected | `export interface ChatViewInjected` | 102 |
| type | ChatViewSlotProps | `export type ChatViewSlotProps` | 126 |
| type | MessageImagesProps | `export type MessageImagesProps` | 128 |

## dsh-client-ui-chat/lib/types/client/contract/snapshot.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ChatNodeSource | `export interface ChatNodeSource` | 6 |
| interface | ChatNodeProcessSource | `export interface ChatNodeProcessSource` | 13 |
| interface | ChatNodeStore | `export interface ChatNodeStore` | 20 |
| interface | TurnNavigationItem | `export interface TurnNavigationItem` | 31 |
| interface | ChatTurnNavigationIndex | `export interface ChatTurnNavigationIndex` | 41 |
| interface | ChatLocationNodeIndex | `export interface ChatLocationNodeIndex` | 51 |
| interface | ChatTurnProcessPresentation | `export interface ChatTurnProcessPresentation` | 58 |
| interface | LegacyConversationSlice | `export interface LegacyConversationSlice` | 66 |
| interface | ChatSnapshot | `export interface ChatSnapshot` | 77 |
| const | EMPTY_CHAT_SNAPSHOT | `export declare const EMPTY_CHAT_SNAPSHOT: ChatSnapshot` | 91 |

## dsh-client-ui-chat/lib/types/client/contract/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ToolCallId | `export type ToolCallId` | 3 |
| interface | TurnProcessViewEntry | `export interface TurnProcessViewEntry` | 5 |
| interface | ChatStoreState | `export interface ChatStoreState` | 10 |

## dsh-client-ui-chat/lib/types/client/contract/turn-metrics.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnMetrics | `export interface TurnMetrics` | 3 |
| interface | StepReading | `export interface StepReading` | 10 |
| type | AssistantNode | `type AssistantNode` | 18 |
| function | assistantStepReading | `export declare function assistantStepReading(node: AssistantNode): StepReading` | 24 |
| function | deriveTurnMetrics | `export declare function deriveTurnMetrics(nodes: readonly ConversationNode[]): Map<number, TurnMetrics>` | 36 |
| export-list |  | `export {};` | 37 |

## dsh-client-ui-chat/lib/types/client/contract/turn-process.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnProcessSpec | `export interface TurnProcessSpec` | 2 |
| const | TURN_PROCESS_INDEPENDENT_KINDS | `export declare const TURN_PROCESS_INDEPENDENT_KINDS: ReadonlySet<string>` | 18 |
| function | sameTurnProcessSpec | `export declare function sameTurnProcessSpec(left: TurnProcessSpec, right: TurnProcessSpec): boolean` | 25 |
| function | isSubagentDelegationTool | `export declare function isSubagentDelegationTool(name: string): boolean` | 32 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/assistant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AssistantState | `interface AssistantState` | 16 |
| const | assistantDefinition | `export declare const assistantDefinition: ConversationNodeDefinition<AssistantState>` | 29 |
| function | registerAssistantConversationNode | `export declare function registerAssistantConversationNode(ctx: Context): void` | 34 |
| export-list |  | `export {};` | 35 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/chat-snapshot-builder.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | orderedVisibleChatNodes | `export declare function orderedVisibleChatNodes(nodes: readonly ChatConversationViewNode[]): ChatConversationViewNode[]` | 12 |
| class | SkillNameProjector | `export declare class SkillNameProjector` | 31 |
| class | ChatSnapshotBuilder | `export declare class ChatSnapshotBuilder implements ConversationViewBuilder<ChatConversationViewNode, ChatSnapshot>` | 67 |
| method | ChatSnapshotBuilder.constructor | `constructor();` | 78 |
| const | chatViewDefinition | `export declare const chatViewDefinition: ConversationViewDefinition<ChatConversationViewNode, ChatSnapshot>` | 90 |
| function | registerChatConversationView | `export declare function registerChatConversationView(ctx: Context): void` | 95 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/command.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CommandId | `type CommandId` | 11 |
| interface | CommandState | `interface CommandState` | 12 |
| interface | CompactionEvidence | `interface CompactionEvidence` | 17 |
| function | compactSource | `declare function compactSource(event: Parameters<ConversationNodeDefinition['match']>[0]): {` | 26 |
| function | compactSummary | `declare function compactSummary(match: ConversationMatch \| undefined, checkpoint: ConversationMatch): CompactionSummaryNode` | 36 |
| function | updateCompactionState | `export declare function updateCompactionState<State extends CompactionEvidence>(state: State, match: ConversationMatch): State` | 43 |
| const | commandDefinition | `export declare const commandDefinition: ConversationNodeDefinition<CommandState>` | 45 |
| function | registerCommandConversationNode | `export declare function registerCommandConversationNode(ctx: Context): void` | 50 |
| export-list | compactSource, compactSummary | `export { compactSource, compactSummary };` | 52 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/common.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CHAT_SYNTHETIC_SEQ_OFFSETS | `export declare const CHAT_SYNTHETIC_SEQ_OFFSETS: {` | 9 |
| function | contextLocation | `export declare function contextLocation(context: ConversationNodeContext): ConversationLocation` | 21 |
| function | chatNode | `export declare function chatNode<Kind extends ChatNodeKind>(context: ConversationNodeContext, kind: Kind, anchorSeq: number, data: ChatNodeDataMap[Kind], option` | 31 |
| function | coordinate | `export declare function coordinate(value: unknown): number \| undefined` | 40 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/compaction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CompactionState | `interface CompactionState` | 9 |
| const | compactionDefinition | `export declare const compactionDefinition: ConversationNodeDefinition<CompactionState>` | 14 |
| function | registerCompactionConversationNode | `export declare function registerCompactionConversationNode(ctx: Context): void` | 19 |
| export-list |  | `export {};` | 20 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/event-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | contextForm | `export declare function contextForm(source: unknown): KnownContextForm \| null` | 9 |
| function | contextProvenance | `export declare function contextProvenance(source: unknown): ContextProvenanceView` | 15 |
| function | sessionRecallLabels | `export declare function sessionRecallLabels(source: unknown): string[]` | 21 |
| function | skillInvocationName | `export declare function skillInvocationName(source: unknown): string \| null` | 27 |
| function | toAssistantBlocks | `export declare function toAssistantBlocks(content: readonly ContentBlock[]): AssistantBlock[]` | 33 |
| function | toAssistantBlock | `export declare function toAssistantBlock(block: ContentBlock): AssistantBlock` | 39 |
| function | emptyAssistantBlock | `export declare function emptyAssistantBlock(blockType: string): AssistantBlock` | 45 |
| interface | DisplayFailure | `export interface DisplayFailure` | 47 |
| function | displayFailure | `export declare function displayFailure(failure: unknown): DisplayFailure` | 56 |
| function | isTokenDelta | `export declare function isTokenDelta(chunk: StreamChunk): boolean` | 62 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/fallback.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | unknownFallbackDefinition | `export declare const unknownFallbackDefinition: ConversationNodeDefinition<UnknownSurfaceNode>` | 10 |
| function | registerUnknownConversationFallback | `export declare function registerUnknownConversationFallback(ctx: Context): void` | 15 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/inbox.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PendingSnapshot | `interface PendingSnapshot` | 3 |
| interface | PendingSplice | `interface PendingSplice` | 7 |
| type | PendingState | `type PendingState` | 14 |
| interface | InboxState | `export interface InboxState` | 16 |
| const | nextStepInboxDefinition | `export declare const nextStepInboxDefinition: ConversationNodeDefinition<InboxState>` | 23 |
| function | registerInboxConversationNodes | `export declare function registerInboxConversationNodes(ctx: Context): void` | 28 |
| export-list |  | `export {};` | 29 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/message.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ReferencedUserMessageNode | `interface ReferencedUserMessageNode extends UserMessageNode` | 3 |
| interface | ReferencedSteeringMessageNode | `interface ReferencedSteeringMessageNode extends SteeringMessageNode` | 9 |
| type | MessageNode | `type MessageNode` | 15 |
| const | messageDefinition | `export declare const messageDefinition: ConversationNodeDefinition<MessageNode>` | 27 |
| function | registerMessageConversationNode | `export declare function registerMessageConversationNode(ctx: Context): void` | 32 |
| export-list |  | `export {};` | 33 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/partial.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isVisibleAssistantChunk | `export declare function isVisibleAssistantChunk(type: string): boolean` | 8 |
| class | PartialAccumulator | `export declare class PartialAccumulator` | 10 |
| method | PartialAccumulator.constructor | `constructor(turn: number, step: number, initialBlocks?: readonly AssistantBlock[]);` | 21 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/register.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerConversationNodes | `export declare function registerConversationNodes(ctx: Context): void` | 6 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/request-prompt.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RequestPromptState | `interface RequestPromptState extends ReturnType<RequestPromptInspector>` | 12 |
| function | systemMessageDefinition | `export declare function systemMessageDefinition(inspect: SystemPromptInspector): ConversationNodeDefinition<SystemPromptState>` | 29 |
| function | requestPromptDefinition | `export declare function requestPromptDefinition(inspect: RequestPromptInspector): ConversationNodeDefinition<RequestPromptState>` | 37 |
| function | registerRequestPromptConversationNode | `export declare function registerRequestPromptConversationNode(ctx: Context): void` | 42 |
| export-list |  | `export {};` | 43 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/retry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RetryState | `export interface RetryState` | 10 |
| const | retryDefinition | `export declare const retryDefinition: ConversationNodeDefinition<RetryState>` | 16 |
| function | registerRetryConversationNode | `export declare function registerRetryConversationNode(ctx: Context): void` | 21 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/tool.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolState | `interface ToolState` | 9 |
| const | toolDefinition | `export declare const toolDefinition: ConversationNodeDefinition<ToolState>` | 15 |
| function | registerToolConversationNode | `export declare function registerToolConversationNode(ctx: Context): void` | 20 |
| export-list |  | `export {};` | 21 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/turn-error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnErrorState | `interface TurnErrorState` | 9 |
| const | turnErrorDefinition | `export declare const turnErrorDefinition: ConversationNodeDefinition<TurnErrorState>` | 23 |
| function | registerTurnErrorConversationNode | `export declare function registerTurnErrorConversationNode(ctx: Context): void` | 28 |
| export-list |  | `export {};` | 29 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/turn-max-tokens.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnMaxTokensState | `interface TurnMaxTokensState` | 9 |
| const | turnMaxTokensDefinition | `export declare const turnMaxTokensDefinition: ConversationNodeDefinition<TurnMaxTokensState>` | 15 |
| function | registerTurnMaxTokensConversationNode | `export declare function registerTurnMaxTokensConversationNode(ctx: Context): void` | 20 |
| export-list |  | `export {};` | 21 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/turn-navigation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | sameTurnNavigationItem | `export declare function sameTurnNavigationItem(left: TurnNavigationItem \| undefined, right: TurnNavigationItem \| undefined): boolean` | 8 |
| function | turnNavigationItem | `export declare function turnNavigationItem(turn: number, locations: ChatLocationNodeIndex, nodes: ChatNodeStore): TurnNavigationItem \| undefined` | 16 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/turn-process-presentation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ChatTurnProcessProjector | `export declare class ChatTurnProcessProjector` | 4 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/turn-process.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnProcessState | `interface TurnProcessState` | 16 |
| const | turnProcessDefinition | `export declare const turnProcessDefinition: ConversationNodeDefinition<TurnProcessState>` | 27 |
| function | registerTurnProcess | `export declare function registerTurnProcess(ctx: Context): void` | 32 |
| export-list |  | `export {};` | 33 |

## dsh-client-ui-chat/lib/types/client/conversation-nodes/turn-tail.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnTailState | `interface TurnTailState` | 16 |
| const | turnTailDefinition | `export declare const turnTailDefinition: ConversationNodeDefinition<TurnTailState>` | 21 |
| function | registerTurnTailConversationNode | `export declare function registerTurnTailConversationNode(ctx: Context): void` | 26 |
| export-list |  | `export {};` | 27 |

## dsh-client-ui-chat/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { apply, inject } | `export { apply, inject } from './apply.ts';` | 2 |
| re-export | { isRunningTool, isSettledTool } | `export { isRunningTool, isSettledTool } from './contract/chat-nodes.ts';` | 26 |
| re-export | { EMPTY_CHAT_SNAPSHOT } | `export { EMPTY_CHAT_SNAPSHOT } from './contract/snapshot.ts';` | 27 |
| interface | ChatNodeDataMap | `export interface ChatNodeDataMap` | 29 |
| type | PublicChatNodeDataMap | `type PublicChatNodeDataMap` | 31 |

## dsh-client-ui-chat/lib/types/client/locale.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "chat"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| type | ChatKey | `export type ChatKey` | 111 |
| const | en | `export declare const en: {` | 113 |

## dsh-client-ui-chat/lib/types/client/markdown-labels.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | markdownLabels | `export declare function markdownLabels(t: ChatViewSlotProps['t']): MarkdownLabels` | 9 |

## dsh-client-ui-chat/lib/types/client/model/conversation-context.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ConversationContextOriginKind | `export type ConversationContextOriginKind` | 3 |
| interface | ConversationContext | `export interface ConversationContext` | 5 |

## dsh-client-ui-chat/lib/types/client/model/steering-history.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SteeringHistory | `export declare class SteeringHistory` | 9 |

## dsh-client-ui-chat/lib/types/client/model/tool-call-tree.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MAX_TOOL_CALL_TREE_DEPTH | `export declare const MAX_TOOL_CALL_TREE_DEPTH = 256` | 4 |
| class | ToolCallTree | `export declare class ToolCallTree` | 9 |

## dsh-client-ui-chat/lib/types/client/settings/TranscriptViewRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TranscriptViewRowInjected | `export interface TranscriptViewRowInjected` | 6 |
| type | TranscriptViewRowProps | `export type TranscriptViewRowProps` | 15 |
| function | TranscriptViewRow | `export declare function TranscriptViewRow({ useTranscriptView, setTranscriptView, t }: TranscriptViewRowProps): import("react").JSX.Element` | 21 |

## dsh-client-ui-chat/lib/types/client/stores.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ChatActions | `type ChatActions` | 4 |
| function | storedTurnProcessEntry | `export declare function storedTurnProcessEntry(state: Readonly<ChatStoreState>, turn: number): Readonly<TurnProcessViewEntry> \| undefined` | 13 |
| function | createChatStore | `export declare function createChatStore(): EngineStoreHandle<ChatStoreState, ChatActions>` | 18 |
| export-list |  | `export {};` | 19 |

## dsh-client-ui-chat/lib/types/client/transcript-view.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | TranscriptViewPolicy | `export declare class TranscriptViewPolicy` | 6 |
| method | TranscriptViewPolicy.constructor | `constructor(host: SettingsScope<ChatSettings>);` | 13 |

## dsh-client-ui-chat/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CHAT_SETTINGS_NAMESPACE, DEFAULT_TRANS | `export { CHAT_SETTINGS_NAMESPACE, DEFAULT_TRANSCRIPT_VIEW_MODE, TRANSCRIPT_VIEW_FIELD, TRANSCRIPT_VIEW_MODES, type ChatSettings, type TranscriptViewMode, } from` | 3 |
| function | apply | `export declare function apply(ctx: Context): void` | 5 |

