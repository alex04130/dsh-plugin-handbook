# dsh-api-workspace-files

> Workspace file service and Client resource provider: bounded reads, directory listing, and live metadata over the workspaceFiles Remote namespace
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-api-workspace-files/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-api-workspace-files/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 33 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 34 |

## dsh-api-workspace-files/lib/types/changes.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | WorkspaceChangeFeed | `export declare class WorkspaceChangeFeed` | 12 |
| method | WorkspaceChangeFeed.constructor | `constructor(ctx: Context);` | 16 |

## dsh-api-workspace-files/lib/types/client/change-feed.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | Follower | `declare class Follower implements AsyncIterable<WorkspaceFileNotice>` | 16 |
| method | Follower.constructor | `constructor(leave: () => void);` | 31 |
| class | ChangeFeed | `export declare class ChangeFeed` | 57 |
| method | ChangeFeed.constructor | `constructor(remote: WorkspaceFilesRemote);` | 66 |
| export-list |  | `export {};` | 92 |

## dsh-api-workspace-files/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 11 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 16 |

## dsh-api-workspace-files/lib/types/client/provider.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createFileResourceProvider | `export declare function createFileResourceProvider(remote: WorkspaceFilesRemote, changes: ChangeFeed): ResourceProvider<'file'>` | 33 |

## dsh-api-workspace-files/lib/types/client/remote.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SupervisedStreamItem | `export interface SupervisedStreamItem<Item>` | 8 |
| interface | SupervisedStream | `export interface SupervisedStream<Item> extends AsyncIterable<SupervisedStreamItem<Item>>` | 15 |
| interface | SupervisedStreamOptions | `export interface SupervisedStreamOptions<Item>` | 23 |
| type | WorkspaceFilesNamespace | `export type WorkspaceFilesNamespace` | 32 |
| interface | WorkspaceFilesRemote | `export interface WorkspaceFilesRemote` | 34 |

## dsh-api-workspace-files/lib/types/client/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkspaceFileParams | `export interface WorkspaceFileParams` | 12 |
| type | WorkspaceFileEdit | `export type WorkspaceFileEdit` | 38 |
| type | WorkspaceFileNotice | `export type WorkspaceFileNotice` | 45 |

## dsh-api-workspace-files/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkspaceFileScope | `export interface WorkspaceFileScope` | 34 |
| interface | Config | `export interface Config` | 47 |
| class | WorkspaceFiles | `export declare class WorkspaceFiles extends TypertRemoteService` | 64 |
| method | WorkspaceFiles.constructor | `constructor(ctx: Context, config: Config);` | 73 |
| default | WorkspaceFiles | `export default WorkspaceFiles;` | 157 |

## dsh-api-workspace-files/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkspaceFileStat | `export interface WorkspaceFileStat` | 17 |
| interface | WorkspaceFileRange | `export interface WorkspaceFileRange` | 35 |
| interface | WorkspaceFileText | `export interface WorkspaceFileText extends WorkspaceFileStat` | 42 |
| interface | WorkspaceByteRange | `export interface WorkspaceByteRange` | 57 |
| interface | WorkspaceFileBytes | `export interface WorkspaceFileBytes extends WorkspaceFileStat` | 67 |
| interface | WorkspaceDirectoryEntry | `export interface WorkspaceDirectoryEntry` | 76 |
| interface | WorkspaceDirectoryListing | `export interface WorkspaceDirectoryListing` | 90 |
| type | WorkspaceFileChange | `export type WorkspaceFileChange` | 110 |
| type | WorkspaceFileWatchFrame | `export type WorkspaceFileWatchFrame` | 126 |

