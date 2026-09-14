# dsh-client-ui-workspace

> Workspace picker plugin: one WorkspacePicker registered into the sidebar and empty-state workspace slots
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-workspace/lib/types/client/WorkspacePicker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkspacePickFlowProps | `export interface WorkspacePickFlowProps` | 16 |
| function | WorkspacePickFlow | `export declare function WorkspacePickFlow({ t, open, anchorRef, useWorkspaces, createWorkspace, useDirectoryFlow, renderDirectoryFlow, onPick, onClose, addOnly,` | 49 |
| function | WorkspacePicker | `export declare function WorkspacePicker({ open, anchorRef, useWorkspaces, selectedId, onPick, onClose, createWorkspace, useDirectoryFlow, renderSlot, t, }: Work` | 56 |

## dsh-client-ui-workspace/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DirectoryFlowOwnerProps | `export interface DirectoryFlowOwnerProps` | 36 |
| type | DirectoryFlowSlotName | `export type DirectoryFlowSlotName` | 65 |
| type | DirectoryPickingInjected | `export type DirectoryPickingInjected` | 73 |
| type | DirectoryPickingHooks | `export type DirectoryPickingHooks` | 80 |
| type | WorkspaceBrowserInjected | `export type WorkspaceBrowserInjected` | 86 |
| type | WorkspaceBrowserProps | `export type WorkspaceBrowserProps` | 145 |
| type | WorkspacePickerInjected | `export type WorkspacePickerInjected` | 151 |
| type | WorkspacePickerProps | `export type WorkspacePickerProps` | 162 |

## dsh-client-ui-workspace/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 36 |
| function | apply | `export declare function apply(ctx: Context): void` | 43 |

## dsh-client-ui-workspace/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 7 |
| type | WorkspaceKey | `export type WorkspaceKey` | 73 |
| const | en | `export declare const en: {` | 75 |

## dsh-client-ui-workspace/lib/types/client/navigation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | UiWorkspace | `export interface UiWorkspace` | 8 |
| class | DirectoryBrowseError | `export declare class DirectoryBrowseError extends Error` | 70 |
| method | DirectoryBrowseError.constructor | `constructor(rpcError: RemoteFailure);` | 74 |
| class | UiWorkspaceService | `declare class UiWorkspaceService extends Service implements UiWorkspace` | 77 |
| method | UiWorkspaceService.constructor | `constructor(ctx: Context, directoryPicker: ClientRemote['directoryPicker'], workspaces: IWorkspaces, sessions: ISessions);` | 89 |
| export-list | UiWorkspaceService | `export { UiWorkspaceService };` | 103 |

## dsh-client-ui-workspace/lib/types/client/rows/Rows.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RowTranslate | `type RowTranslate` | 4 |
| interface | RowDragProps | `export interface RowDragProps` | 9 |
| interface | WorkspaceRowDragProps | `interface WorkspaceRowDragProps` | 22 |
| function | ProjectRowItem | `export declare function ProjectRowItem({ group, onToggle, onCreate, actions, drag, home, t }: {` | 39 |
| function | SearchResultItem | `export declare function SearchResultItem({ result, currentId, onOpen, t }: {` | 64 |
| function | SessionNodeItem | `export declare function SessionNodeItem({ node, currentId, now, onOpen, onRename, onFork, onArchive, onReveal, drag, flat, t, }: {` | 86 |
| export-list |  | `export {};` | 105 |

## dsh-client-ui-workspace/lib/types/client/rows/WorkspaceBrowser.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | WorkspaceBrowser | `export declare function WorkspaceBrowser({ wide, usePanelInfo, expandSidebar, useSessions, useSessionPendingInteraction, useWorkspaces, useStore, actions, start` | 7 |

## dsh-client-ui-workspace/lib/types/client/stores.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FLAT_SESSION_ORDER_KEY | `export declare const FLAT_SESSION_ORDER_KEY = "__flat_session_order__"` | 10 |
| type | SessionGroupBy | `export type SessionGroupBy` | 12 |
| type | SessionOrderBy | `export type SessionOrderBy` | 14 |
| type | WorkspaceViewState | `type WorkspaceViewState` | 16 |
| type | WorkspaceViewActions | `type WorkspaceViewActions` | 30 |
| function | createWorkspaceViewStore | `export declare function createWorkspaceViewStore(): EngineStoreHandle<WorkspaceViewState, WorkspaceViewActions>` | 42 |
| export-list |  | `export {};` | 43 |

## dsh-client-ui-workspace/lib/types/client/subagent-lineage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LineageEntry | `interface LineageEntry` | 3 |
| interface | SubagentDescendantSummary | `export interface SubagentDescendantSummary` | 10 |
| function | indexSubagentDescendants | `export declare function indexSubagentDescendants(summaries: Readonly<Record<SessionId, LineageEntry>>): ReadonlyMap<SessionId, SubagentDescendantSummary>` | 19 |
| export-list |  | `export {};` | 20 |

## dsh-client-ui-workspace/lib/types/client/tree.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | UNGROUPED_KEY | `export declare const UNGROUPED_KEY = ""` | 11 |
| function | owningGroupKey | `export declare function owningGroupKey(workspaces: readonly WorkspaceView[], sessionId: SessionId): string` | 18 |
| type | SessionPendingInteractionStatus | `export type SessionPendingInteractionStatus` | 20 |
| type | SessionPendingInteractions | `type SessionPendingInteractions` | 21 |
| interface | SessionNode | `export interface SessionNode` | 23 |
| type | SessionOrderBy | `export type SessionOrderBy` | 41 |
| interface | GroupNode | `export interface GroupNode` | 43 |
| interface | SearchResultNode | `export interface SearchResultNode` | 61 |
| interface | SearchResultSet | `export interface SearchResultSet` | 77 |
| interface | TreeView | `export interface TreeView` | 82 |
| function | workspaceLabel | `export declare function workspaceLabel(cwd: string \| undefined): string` | 93 |
| function | deriveGroups | `export declare function deriveGroups(list: SessionListState, workspaces: readonly WorkspaceView[], archivedSessionIds: readonly SessionId[], pendingInteractions` | 109 |
| function | deriveFlat | `export declare function deriveFlat(list: SessionListState, archivedSessionIds: readonly SessionId[], pendingInteractions: SessionPendingInteractions): SessionNo` | 120 |
| function | deriveSearchResults | `export declare function deriveSearchResults(list: SessionListState, workspaces: readonly WorkspaceView[], query: string, archivedSessionIds: readonly SessionId[` | 134 |
| export-list |  | `export {};` | 138 |

## dsh-client-ui-workspace/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

