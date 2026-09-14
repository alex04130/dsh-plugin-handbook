# dsh-workspace

> Workspace entity registry (ctx.workspaceRegistry): durable workspace records with validated session attachment over the domain data form for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-workspace/lib/types/entity.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | WorkspaceMoveInvalidError | `export declare class WorkspaceMoveInvalidError extends Error` | 15 |
| method | WorkspaceMoveInvalidError.constructor | `constructor(message: string);` | 19 |
| interface | WorkspaceEntityHost | `export interface WorkspaceEntityHost` | 26 |
| class | WorkspaceEntity | `export declare class WorkspaceEntity implements Workspace` | 54 |
| method | WorkspaceEntity.constructor | `constructor(host: WorkspaceEntityHost, id: WorkspaceId, record: WorkspaceRecord);` | 63 |

## dsh-workspace/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { WorkspaceMoveInvalidError } | `export { WorkspaceMoveInvalidError } from './entity.ts';` | 9 |
| re-export | { workspaceDomainState, workspaceRecord, | `export { workspaceDomainState, workspaceRecord, workspaceDomainSpec } from './spec.ts';` | 12 |
| re-export | { realpathNormalize } | `export { realpathNormalize } from './paths.ts';` | 14 |
| type | WorkspaceId | `export type WorkspaceId` | 16 |
| function | WorkspaceId | `export declare function WorkspaceId(id: string): WorkspaceId` | 22 |
| class | WorkspaceUnknownSessionError | `export declare class WorkspaceUnknownSessionError extends Error` | 27 |
| method | WorkspaceUnknownSessionError.constructor | `constructor(sessionId: SessionId);` | 32 |
| class | WorkspaceOrderInvalidError | `export declare class WorkspaceOrderInvalidError extends Error` | 35 |
| method | WorkspaceOrderInvalidError.constructor | `constructor(workspaceId: WorkspaceId);` | 40 |
| class | WorkspaceRegistry | `export declare class WorkspaceRegistry extends Service` | 54 |
| method | WorkspaceRegistry.constructor | `constructor(ctx: Context);` | 65 |
| default | WorkspaceRegistry | `export default WorkspaceRegistry;` | 164 |

## dsh-workspace/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "workspace-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-workspace/lib/types/paths.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | fullyQualifiedWorkspacePath | `export declare function fullyQualifiedWorkspacePath(path: string, platform?: NodeJS.Platform): boolean` | 12 |
| function | defaultWorkspaceTitle | `export declare function defaultWorkspaceTitle(path: string, platform?: NodeJS.Platform): string` | 19 |
| function | realpathNormalize | `export declare function realpathNormalize(path: string): Promise<string>` | 33 |

## dsh-workspace/lib/types/spec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | workspaceRecord | `export declare const workspaceRecord: z.ZodObject<{` | 15 |
| type | WorkspaceRecord | `export type WorkspaceRecord` | 23 |
| const | workspaceDomainState | `export declare const workspaceDomainState: z.ZodObject<{` | 33 |
| type | WorkspaceDomainState | `export type WorkspaceDomainState` | 46 |
| const | workspaceDomainSpec | `export declare const workspaceDomainSpec: {` | 53 |

## dsh-workspace/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WorkspaceId | `export type WorkspaceId` | 13 |
| interface | Workspace | `export interface Workspace` | 28 |

