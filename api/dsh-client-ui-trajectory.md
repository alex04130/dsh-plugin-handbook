# dsh-client-ui-trajectory

> Trajectory event ledger with an interactive timing overview: pure-consumer plugin registering into the conversation ViewMap (no service)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-trajectory/lib/types/client/TrajectoryCell.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list | formatElapsedSeconds | `export { formatElapsedSeconds };` | 3 |
| function | TrajectoryCell | `export declare function TrajectoryCell({ t, index, kind, text, inputDetail: _inputDetail, promptDetail: _promptDetail, previousPromptDetail: _previousPromptDeta` | 10 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryGroupHeader.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryGroupHeaderProps | `export interface TrajectoryGroupHeaderProps` | 1 |
| function | TrajectoryGroupHeader | `export declare function TrajectoryGroupHeader({ title, description }: TrajectoryGroupHeaderProps): import("react").JSX.Element` | 12 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryTable.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryTableProps | `export interface TrajectoryTableProps` | 7 |
| interface | TrajectoryRequestNumberBase | `interface TrajectoryRequestNumberBase` | 60 |
| type | TrajectoryRequestNumber | `export type TrajectoryRequestNumber` | 79 |
| interface | TrajectoryUsage | `export interface TrajectoryUsage` | 93 |
| function | TrajectoryTable | `export declare function TrajectoryTable({ t, renderImages, requestNumbers: sessionRequestNumbers, turns, streamingCells, timelineFocusIndexes, searchMatchIndexe` | 106 |
| export-list |  | `export {};` | 107 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryTimeline.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryTimelineProps | `export interface TrajectoryTimelineProps` | 6 |
| const | TrajectoryTimeline | `export declare const TrajectoryTimeline: import("react").MemoExoticComponent<({ t, turns, mode, range, hasEarlierRecords, onLoadEarlier, selectedIndex, searchMa` | 25 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryToolbar.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryToolbarProps | `export interface TrajectoryToolbarProps` | 4 |
| function | TrajectoryToolbar | `export declare function TrajectoryToolbar({ actualDuration, onActualDurationChange, actualTime, onActualTimeChange, allTurnsCollapsed, onToggleAllTurns, allAssi` | 33 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryTurn.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryTurnProps | `export interface TrajectoryTurnProps` | 3 |
| function | TrajectoryTurn | `export declare function TrajectoryTurn({ turn, children, t }: TrajectoryTurnProps): import("react").JSX.Element` | 16 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryTurnHeader.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryTurnHeaderProps | `export interface TrajectoryTurnHeaderProps` | 2 |
| function | TrajectoryTurnHeader | `export declare function TrajectoryTurnHeader({ turn, t }: TrajectoryTurnHeaderProps): import("react").JSX.Element` | 13 |

## dsh-client-ui-trajectory/lib/types/client/TrajectoryView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryViewInjected | `export interface TrajectoryViewInjected` | 6 |
| function | TrajectoryView | `export declare function TrajectoryView({ useSession, useTrajectory, useDuration, loadOlder, loadImage, setActualDuration, viewRequest, completeViewRequest, rend` | 14 |

## dsh-client-ui-trajectory/lib/types/client/copy-codes.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | COMPACTION_INTERRUPTED_ERROR | `export declare const COMPACTION_INTERRUPTED_ERROR = "trajectory.compaction-interrupted"` | 3 |

## dsh-client-ui-trajectory/lib/types/client/duration-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createTrajectoryDurationStore | `export declare function createTrajectoryDurationStore(): SnapshotStore<boolean>` | 6 |

## dsh-client-ui-trajectory/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 9 |
| function | apply | `export declare function apply(ctx: Context): void` | 15 |

## dsh-client-ui-trajectory/lib/types/client/layout.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryGroupModel | `export interface TrajectoryGroupModel` | 10 |
| interface | TrajectoryTurnModel | `export interface TrajectoryTurnModel` | 16 |
| interface | TrajectoryLayoutInput | `export interface TrajectoryLayoutInput` | 21 |
| function | deriveTrajectoryLayout | `export declare function deriveTrajectoryLayout(input: TrajectoryLayoutInput, t: TrajectoryTranslate): readonly TrajectoryTurnModel[]` | 36 |
| function | appendTrajectoryPartialLayout | `export declare function appendTrajectoryPartialLayout(turns: readonly TrajectoryTurnModel[], partial: TrajectorySnapshot['partial'], lastIndex: number, t: Traje` | 45 |

## dsh-client-ui-trajectory/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "trajectory"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| type | TrajectoryKey | `export type TrajectoryKey` | 183 |
| type | TrajectoryTranslate | `export type TrajectoryTranslate` | 191 |
| const | en | `export declare const en: Record<TrajectoryKey, string>` | 193 |

## dsh-client-ui-trajectory/lib/types/client/timeline.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TrajectoryTimelineMode | `export type TrajectoryTimelineMode` | 6 |
| interface | TrajectoryTimeRange | `export interface TrajectoryTimeRange` | 8 |
| interface | TrajectoryTimelineSpan | `export interface TrajectoryTimelineSpan extends TrajectoryTimeRange` | 13 |
| interface | TrajectoryTimelineTurnBoundary | `export interface TrajectoryTimelineTurnBoundary` | 21 |
| interface | TrajectoryTimelineModel | `export interface TrajectoryTimelineModel extends TrajectoryTimeRange` | 26 |
| function | formatTimelineOffset | `export declare function formatTimelineOffset(milliseconds: number, t: TrajectoryTranslate): string` | 36 |
| function | deriveTrajectoryTimeline | `export declare function deriveTrajectoryTimeline(turns: readonly TrajectoryTurnModel[], mode?: TrajectoryTimelineMode): TrajectoryTimelineModel \| null` | 43 |
| function | trajectoryTimelineFocusIndexes | `export declare function trajectoryTimelineFocusIndexes(turns: readonly TrajectoryTurnModel[], range: TrajectoryTimeRange, mode?: TrajectoryTimelineMode): Readon` | 51 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-assistant-definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerTrajectoryAssistantDefinition | `export declare function registerTrajectoryAssistantDefinition(ctx: Context): void` | 7 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-compaction-definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerTrajectoryCompactionDefinitions | `export declare function registerTrajectoryCompactionDefinitions(ctx: Context): void` | 7 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectoryRequestHeaderState | `export interface TrajectoryRequestHeaderState` | 4 |
| type | TrajectoryContribution | `export type TrajectoryContribution` | 12 |
| interface | TrajectoryConversationViewNode | `export interface TrajectoryConversationViewNode extends ConversationViewNode` | 48 |
| interface | TrajectorySnapshot | `export interface TrajectorySnapshot` | 55 |
| type | UseTrajectory | `export type UseTrajectory` | 66 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-definition-common.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | trajectoryNode | `export declare function trajectoryNode(context: ConversationNodeContext, anchorSeq: number, data: TrajectoryContribution): TrajectoryConversationViewNode` | 11 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-event-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | contextForm | `export declare function contextForm(source: unknown): KnownContextForm \| null` | 9 |
| function | contextProvenance | `export declare function contextProvenance(source: unknown): ContextProvenanceView` | 15 |
| function | toAssistantBlocks | `export declare function toAssistantBlocks(content: readonly ContentBlock[]): AssistantBlock[]` | 21 |
| function | toAssistantBlock | `export declare function toAssistantBlock(block: ContentBlock): AssistantBlock` | 27 |
| function | emptyAssistantBlock | `export declare function emptyAssistantBlock(blockType: string): AssistantBlock` | 33 |
| interface | DisplayFailure | `export interface DisplayFailure` | 35 |
| function | displayFailure | `export declare function displayFailure(failure: unknown): DisplayFailure` | 44 |
| function | isTokenDelta | `export declare function isTokenDelta(chunk: StreamChunk): boolean` | 50 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-message-definitions.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerTrajectoryMessageDefinitions | `export declare function registerTrajectoryMessageDefinitions(ctx: Context): void` | 7 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-preview.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | trajectoryPreviewText | `export declare function trajectoryPreviewText(text: string): string` | 7 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-record.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TrajectoryCellKind | `export type TrajectoryCellKind` | 7 |
| interface | AssistantMetricDetail | `export interface AssistantMetricDetail` | 9 |
| interface | TrajectorySourceBlock | `export interface TrajectorySourceBlock` | 18 |
| interface | TrajectoryCellProps | `export interface TrajectoryCellProps extends HTMLAttributes<HTMLDivElement>` | 26 |
| function | trajectoryRecordId | `export declare function trajectoryRecordId(cell: TrajectoryCellProps): string` | 95 |
| function | formatDurationMillis | `export declare function formatDurationMillis(milliseconds: number \| null, t: TrajectoryTranslate): string` | 102 |
| function | formatElapsedSeconds | `export declare function formatElapsedSeconds(seconds: number \| null, t: TrajectoryTranslate): string` | 109 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-request-header-definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TrajectorySystemMessageState | `export interface TrajectorySystemMessageState extends SystemPromptState` | 5 |
| function | registerTrajectoryRequestHeaderDefinition | `export declare function registerTrajectoryRequestHeaderDefinition(ctx: Context): void` | 17 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-search-index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | TrajectorySearchIndex | `export declare class TrajectorySearchIndex` | 4 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-snapshot-builder.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | EMPTY_TRAJECTORY_SNAPSHOT | `export declare const EMPTY_TRAJECTORY_SNAPSHOT: TrajectorySnapshot` | 5 |
| class | TrajectorySnapshotBuilder | `export declare class TrajectorySnapshotBuilder implements ConversationViewBuilder<TrajectoryConversationViewNode, TrajectorySnapshot>` | 7 |
| const | trajectoryViewDefinition | `export declare const trajectoryViewDefinition: ConversationViewDefinition<TrajectoryConversationViewNode, TrajectorySnapshot>` | 22 |
| function | registerTrajectoryConversationView | `export declare function registerTrajectoryConversationView(ctx: Context): void` | 28 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-tool-definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerTrajectoryToolDefinition | `export declare function registerTrajectoryToolDefinition(ctx: Context): void` | 7 |

## dsh-client-ui-trajectory/lib/types/client/trajectory-virtual-rows.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | VirtualizableTrajectoryRecord | `export interface VirtualizableTrajectoryRecord` | 4 |
| interface | TrajectoryVirtualRowEntry | `export interface TrajectoryVirtualRowEntry<T extends VirtualizableTrajectoryRecord>` | 9 |
| interface | TrajectoryVirtualRow | `export interface TrajectoryVirtualRow<T extends VirtualizableTrajectoryRecord>` | 14 |
| function | trajectoryVirtualRecordKey | `export declare function trajectoryVirtualRecordKey(record: VirtualizableTrajectoryRecord): string` | 25 |
| function | groupTrajectoryVirtualRows | `export declare function groupTrajectoryVirtualRows<T extends VirtualizableTrajectoryRecord>(records: readonly T[]): readonly TrajectoryVirtualRow<T>[]` | 33 |

## dsh-client-ui-trajectory/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

