# dsh-client-ui-sidebar-files

> Workspace file tree tab type for the right Sidebar: lazy directory listing over the workspaceFiles Remote namespace, opening files into the Sidebar
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-sidebar-files/lib/types/client/FilesBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FilesBodyProps | `export type FilesBodyProps` | 8 |
| function | orderEntries | `export declare function orderEntries(entries: readonly WorkspaceDirectoryEntry[]): WorkspaceDirectoryEntry[]` | 16 |
| function | failureLine | `export declare function failureLine(t: TranslateNS<'sidebarFiles'>, failure: RemoteFailure): string` | 23 |
| function | FilesBody | `export declare function FilesBody({ useTabInfo, sessionId, useSessions, useStore, actions, start, load, toggle, t, }: FilesBodyProps): ReactNode` | 25 |

## dsh-client-ui-sidebar-files/lib/types/client/FilesTitle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | FilesTitle | `export declare function FilesTitle({ useTabInfo }: PropsRuntime<'sidebar.right.pane.tab.title'>): ReactNode` | 14 |

## dsh-client-ui-sidebar-files/lib/types/client/definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FILES_KIND | `export declare const FILES_KIND = "files"` | 11 |
| const | FILES_ID | `export declare const FILES_ID = "@deepseek-ai/dsh-client-ui-sidebar-files"` | 13 |
| function | filesDefinition | `export declare function filesDefinition(t: TranslateNS<'sidebarFiles'>): SidebarRightTabDefinition` | 19 |

## dsh-client-ui-sidebar-files/lib/types/client/face.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ListWorkspaceDirectory | `export type ListWorkspaceDirectory` | 33 |
| type | WorkspaceFilesListRemote | `export type WorkspaceFilesListRemote` | 38 |
| function | createList | `export declare function createList(remote: WorkspaceFilesListRemote): ListWorkspaceDirectory` | 46 |
| function | childPath | `export declare function childPath(parent: string, name: string): string` | 56 |
| interface | FilesInjected | `export interface FilesInjected` | 58 |
| function | filesFace | `export declare function filesFace(list: ListWorkspaceDirectory): (sessionId: SessionId, actions: BoundActions<ReturnType<typeof createFilesStore>>) => FilesInje` | 87 |

## dsh-client-ui-sidebar-files/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 22 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 27 |

## dsh-client-ui-sidebar-files/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 8 |
| type | SidebarFilesKey | `export type SidebarFilesKey` | 24 |
| const | en | `export declare const en: {` | 26 |

## dsh-client-ui-sidebar-files/lib/types/client/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DirLevel | `export interface DirLevel` | 23 |
| type | LevelState | `export type LevelState` | 30 |
| interface | FilesTabState | `export interface FilesTabState` | 45 |
| interface | FilesState | `export interface FilesState` | 54 |
| type | FilesActions | `type FilesActions` | 58 |
| function | createFilesStore | `export declare function createFilesStore(): EngineStoreHandle<FilesState, FilesActions>` | 74 |
| export-list |  | `export {};` | 75 |

## dsh-client-ui-sidebar-files/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

