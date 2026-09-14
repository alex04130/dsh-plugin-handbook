# dsh-cordis-host-runner

> Dynamic package definition registry, host-half sandbox lifecycle, and invoke handler table for model-mounted dual-half packages
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-cordis-host-runner/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-cordis-host-runner/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 54 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 55 |

## dsh-cordis-host-runner/lib/types/guard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | sandboxDefineTool | `export declare function sandboxDefineTool(options: unknown): ToolDefinition` | 27 |
| function | normalizeHandler | `export declare function normalizeHandler(method: unknown, fn: unknown): {` | 38 |
| function | sandboxRegisterTool | `export declare function sandboxRegisterTool(ctx: Context, tool: unknown): () => void` | 49 |
| function | isPlugin | `export declare function isPlugin(value: unknown): value is Plugin` | 57 |
| function | guardedPlugin | `export declare function guardedPlugin(plugin: Plugin, reportFailure: (error: Error) => void): Plugin` | 64 |
| function | pluginName | `export declare function pluginName(plugin: Plugin): string` | 70 |

## dsh-cordis-host-runner/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CordisInspectRegistryService } | `export { CordisInspectRegistryService } from './inspect-registry.ts';` | 16 |
| re-export | { HOST_BUILTIN_INSPECTION } | `export { HOST_BUILTIN_INSPECTION } from './sandbox.ts';` | 18 |
| function | CordisDynamicPluginId | `export declare function CordisDynamicPluginId(id: string): CordisDynamicPluginId` | 24 |
| function | CordisDynamicPackageId | `export declare function CordisDynamicPackageId(id: string): CordisDynamicPackageId` | 30 |
| function | CordisDynamicPluginRunId | `export declare function CordisDynamicPluginRunId(id: string): CordisDynamicPluginRunId` | 36 |
| function | ApprovalRequestId | `export declare function ApprovalRequestId(id: string): ApprovalRequestId` | 42 |
| interface | Config | `export interface Config` | 50 |
| interface | DynamicCordisSnapshotRow | `export interface DynamicCordisSnapshotRow` | 55 |
| class | DynamicCordisRunnerService | `export declare class DynamicCordisRunnerService extends TypertRemoteService` | 76 |
| method | DynamicCordisRunnerService.constructor | `constructor(ctx: Context, config: Config);` | 86 |
| default | DynamicCordisRunnerService | `export default DynamicCordisRunnerService;` | 269 |

## dsh-cordis-host-runner/lib/types/inspect-registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | HostCordisInspectQueryContext | `export interface HostCordisInspectQueryContext` | 8 |
| interface | HostCordisInspectProviderRegistration | `export interface HostCordisInspectProviderRegistration` | 15 |
| class | CordisInspectRegistryService | `export declare class CordisInspectRegistryService extends Service` | 28 |
| method | CordisInspectRegistryService.constructor | `constructor(ctx: Context);` | 34 |

## dsh-cordis-host-runner/lib/types/lifecycle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | startHostHalf | `export declare function startHostHalf(group: Fiber, plugin: Plugin, reportGuardFailure: (error: Error) => void): Promise<Fiber>` | 19 |
| function | missingServices | `export declare function missingServices(ctx: Context, fiber: Fiber): string[]` | 28 |

## dsh-cordis-host-runner/lib/types/registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DynamicCordisHandler | `export type DynamicCordisHandler` | 9 |
| interface | DynamicCordisRun | `export interface DynamicCordisRun` | 11 |
| interface | DynamicCordisDefinition | `export interface DynamicCordisDefinition` | 30 |
| interface | DynamicCordisPlugin | `export interface DynamicCordisPlugin` | 43 |
| interface | DynamicCordisPendingRequest | `export interface DynamicCordisPendingRequest` | 64 |
| interface | DynamicCordisDefineRequest | `export interface DynamicCordisDefineRequest` | 75 |
| interface | DynamicCordisDefineReceipt | `export interface DynamicCordisDefineReceipt` | 97 |
| interface | DynamicCordisReference | `export interface DynamicCordisReference` | 106 |
| interface | DynamicCordisPluginInspection | `export interface DynamicCordisPluginInspection extends DynamicCordisReference` | 120 |
| interface | DynamicCordisPackageInspection | `export interface DynamicCordisPackageInspection extends DynamicCordisReference` | 131 |
| class | DynamicCordisRegistry | `export declare class DynamicCordisRegistry` | 139 |

## dsh-cordis-host-runner/lib/types/sandbox.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | HOST_BUILTIN_INSPECTION | `export declare const HOST_BUILTIN_INSPECTION: readonly [{` | 14 |
| function | createSandbox | `export declare function createSandbox(id: string, harnessExtras?: Record<string, unknown>): object` | 51 |
| function | syntaxErrorContext | `export declare function syntaxErrorContext(error: Error): string` | 60 |
| function | parseErrorMessage | `export declare function parseErrorMessage(half: 'code.host' \| 'code.client', context: string): string` | 69 |
| function | precheckCode | `export declare function precheckCode(code: string, half: 'code.host' \| 'code.client'): void` | 86 |
| function | evaluateHostCode | `export declare function evaluateHostCode(sandbox: object, code: string, id: string, vmTimeoutMs: number): Promise<unknown>` | 98 |

## dsh-cordis-host-runner/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisDynamicPluginId | `export type CordisDynamicPluginId` | 9 |
| type | CordisDynamicPackageId | `export type CordisDynamicPackageId` | 11 |
| type | CordisDynamicPluginRunId | `export type CordisDynamicPluginRunId` | 13 |
| type | ApprovalRequestId | `export type ApprovalRequestId` | 15 |
| type | CordisInspectRequestId | `export type CordisInspectRequestId` | 17 |
| type | CordisInspectPlatform | `export type CordisInspectPlatform` | 19 |
| interface | CordisInspectMethodManifest | `export interface CordisInspectMethodManifest` | 21 |
| interface | CordisInspectProviderManifest | `export interface CordisInspectProviderManifest` | 32 |
| interface | CordisInspectProviderView | `export interface CordisInspectProviderView extends CordisInspectProviderManifest` | 41 |
| interface | CordisInspectQueryRequest | `export interface CordisInspectQueryRequest` | 46 |
| type | CordisInspectQueryResolution | `export type CordisInspectQueryResolution` | 59 |
| interface | CordisInspectQueryResolved | `export interface CordisInspectQueryResolved` | 68 |
| interface | CordisInspectResolveAck | `export interface CordisInspectResolveAck` | 73 |
| type | CordisDynamicRunMode | `export type CordisDynamicRunMode` | 78 |
| type | RequestRunOutcome | `export type RequestRunOutcome` | 80 |
| interface | CordisErrorDetails | `export interface CordisErrorDetails` | 82 |
| type | CordisRunStatus | `export type CordisRunStatus` | 89 |
| interface | CordisHalfState | `export interface CordisHalfState` | 91 |
| interface | CordisRunDiagnostic | `export interface CordisRunDiagnostic` | 100 |
| interface | DynamicCordisRunAttempt | `export interface DynamicCordisRunAttempt` | 115 |
| interface | DynamicCordisPackage | `export interface DynamicCordisPackage` | 136 |
| interface | DynamicCordisRunRequest | `export interface DynamicCordisRunRequest` | 147 |
| interface | DynamicCordisRequestResolved | `export interface DynamicCordisRequestResolved` | 166 |
| interface | DynamicCordisRetracted | `export interface DynamicCordisRetracted` | 173 |
| interface | DynamicCordisInventoryPackage | `export interface DynamicCordisInventoryPackage` | 182 |
| interface | DynamicCordisInventoryRow | `export interface DynamicCordisInventoryRow` | 195 |
| type | DynamicCordisUndefineReceipt | `export type DynamicCordisUndefineReceipt` | 215 |
| interface | DynamicCordisRenderFailure | `export interface DynamicCordisRenderFailure` | 224 |
| type | DynamicCordisRunResponse | `export type DynamicCordisRunResponse` | 235 |
| type | DynamicCordisStopResponse | `export type DynamicCordisStopResponse` | 260 |
| type | DynamicCordisHostHalfResult | `export type DynamicCordisHostHalfResult` | 268 |
| interface | DynamicCordisClientSource | `export interface DynamicCordisClientSource` | 280 |
| type | DynamicCordisRunResolution | `export type DynamicCordisRunResolution` | 293 |
| interface | DynamicCordisResolveAck | `export interface DynamicCordisResolveAck` | 308 |
| type | DynamicCordisInvokeResult | `export type DynamicCordisInvokeResult` | 313 |

