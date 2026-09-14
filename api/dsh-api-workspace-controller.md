# dsh-api-workspace-controller

> Workspace Remote commands and reconnect-safe state transport
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-api-workspace-controller/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-api-workspace-controller/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 42 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 43 |

## dsh-api-workspace-controller/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ClientWorkspaceModel } | `export { ClientWorkspaceModel } from './model.ts';` | 6 |
| re-export | { WorkspaceController, WorkspaceCreateEr | `export { WorkspaceController, WorkspaceCreateError } from './service.ts';` | 8 |
| type | WorkspaceBaselineFrame | `type WorkspaceBaselineFrame` | 11 |
| type | WorkspaceStateStream | `export type WorkspaceStateStream` | 15 |
| const | inject | `export declare const inject: string[]` | 23 |
| function | apply | `export declare function apply(ctx: Context): void` | 28 |
| interface | WorkspaceStateStreamOptions | `export interface WorkspaceStateStreamOptions` | 30 |
| function | createWorkspaceStateStream | `export declare function createWorkspaceStateStream(remote: ClientRemote, options: WorkspaceStateStreamOptions): WorkspaceStateStream` | 44 |

## dsh-api-workspace-controller/lib/types/client/model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WorkspaceRemote | `export type WorkspaceRemote` | 5 |
| type | WorkspaceListPhase | `export type WorkspaceListPhase` | 7 |
| interface | WorkspaceSnapshot | `export interface WorkspaceSnapshot` | 9 |
| interface | WorkspaceFollowSink | `export interface WorkspaceFollowSink` | 18 |
| class | ClientWorkspaceModel | `export declare class ClientWorkspaceModel implements WorkspaceFollowSink` | 33 |
| method | ClientWorkspaceModel.constructor | `constructor(remote: WorkspaceRemote);` | 55 |

## dsh-api-workspace-controller/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | WorkspaceCreateError | `export declare class WorkspaceCreateError extends Error` | 9 |
| method | WorkspaceCreateError.constructor | `constructor(rpcError: RemoteFailure);` | 13 |
| interface | WorkspaceSource | `export interface WorkspaceSource` | 16 |
| interface | IWorkspaces | `export interface IWorkspaces` | 27 |
| class | WorkspaceController | `export declare class WorkspaceController extends Service implements IWorkspaces` | 71 |
| method | WorkspaceController.constructor | `constructor(ctx: Context, model: ClientWorkspaceModel);` | 78 |

## dsh-api-workspace-controller/lib/types/commands.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | WorkspaceCommands | `export declare class WorkspaceCommands` | 5 |
| method | WorkspaceCommands.constructor | `constructor(ctx: Context);` | 9 |

## dsh-api-workspace-controller/lib/types/directory-picker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | DirectoryPickerController | `export declare class DirectoryPickerController extends TypertRemoteService` | 21 |
| method | DirectoryPickerController.constructor | `constructor(ctx: Context);` | 24 |

## dsh-api-workspace-controller/lib/types/feed.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | workspaceView | `export declare function workspaceView(workspace: Workspace): WorkspaceView` | 10 |
| class | WorkspaceFeed | `export declare class WorkspaceFeed` | 12 |
| method | WorkspaceFeed.constructor | `constructor(ctx: Context);` | 19 |

## dsh-api-workspace-controller/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DirectoryPickerController } | `export { DirectoryPickerController } from './directory-picker.ts';` | 6 |
| class | WorkspaceController | `export declare class WorkspaceController extends TypertRemoteService` | 14 |
| method | WorkspaceController.constructor | `constructor(ctx: Context);` | 19 |
| default | WorkspaceController | `export default WorkspaceController;` | 63 |

## dsh-api-workspace-controller/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkspaceView | `export interface WorkspaceView` | 12 |
| interface | WorkspaceCreateRequest | `export interface WorkspaceCreateRequest` | 60 |
| interface | WorkspaceCreateValue | `export interface WorkspaceCreateValue` | 64 |
| interface | WorkspaceRenameRequest | `export interface WorkspaceRenameRequest` | 69 |
| interface | WorkspaceValue | `export interface WorkspaceValue` | 74 |
| interface | WorkspaceDeleteRequest | `export interface WorkspaceDeleteRequest` | 78 |
| interface | WorkspaceDeleteValue | `export interface WorkspaceDeleteValue` | 82 |
| interface | WorkspaceInsertBeforeRequest | `export interface WorkspaceInsertBeforeRequest` | 86 |
| interface | WorkspaceOrderValue | `export interface WorkspaceOrderValue` | 91 |
| interface | WorkspaceInsertSessionBeforeRequest | `export interface WorkspaceInsertSessionBeforeRequest` | 95 |
| interface | WorkspaceArchiveSessionRequest | `export interface WorkspaceArchiveSessionRequest` | 101 |
| interface | WorkspaceArchiveValue | `export interface WorkspaceArchiveValue` | 105 |
| interface | WorkspaceBaseline | `export interface WorkspaceBaseline` | 109 |
| type | WorkspaceFollowIncrement | `export type WorkspaceFollowIncrement` | 114 |
| type | WorkspaceFollowFrame | `export type WorkspaceFollowFrame` | 128 |

