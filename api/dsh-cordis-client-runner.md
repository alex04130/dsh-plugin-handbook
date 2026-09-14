# dsh-cordis-client-runner

> Browser half of dynamic dual-half plugin packages: event subscription, closure evaluation, guard facade, and loader entries
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-cordis-client-runner/lib/types/client/api-catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ApiParameter | `export interface ApiParameter` | 15 |
| interface | ServiceApiMethod | `export interface ServiceApiMethod` | 22 |
| interface | ServiceApiEntry | `export interface ServiceApiEntry` | 35 |
| interface | EventApiEntry | `export interface EventApiEntry` | 46 |
| interface | InheritedApiEntry | `export interface InheritedApiEntry` | 61 |
| interface | TypeApiEntry | `export interface TypeApiEntry` | 68 |
| const | SERVICE_API | `export declare const SERVICE_API: readonly ServiceApiEntry[]` | 75 |
| const | EVENT_API | `export declare const EVENT_API: readonly EventApiEntry[]` | 77 |
| const | TYPE_API | `export declare const TYPE_API: readonly TypeApiEntry[]` | 79 |
| const | INHERITED_CTX_API | `export declare const INHERITED_CTX_API: readonly InheritedApiEntry[]` | 81 |
| function | queryServiceApi | `export declare function queryServiceApi(key?: string, services?: readonly ServiceApiEntry[]): object` | 88 |
| function | queryEventApi | `export declare function queryEventApi(name?: string, events?: readonly EventApiEntry[]): object` | 95 |

## dsh-cordis-client-runner/lib/types/client/evaluator.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DynamicCordisEvaluatedPlugin | `export interface DynamicCordisEvaluatedPlugin` | 11 |
| interface | DynamicCordisClosureEnv | `export interface DynamicCordisClosureEnv` | 20 |
| const | DYNAMIC_CLIENT_REDIRECTS | `export declare const DYNAMIC_CLIENT_REDIRECTS: Readonly<Record<string, string>>` | 33 |
| class | DynamicCordisStyles | `export declare class DynamicCordisStyles` | 35 |
| method | DynamicCordisStyles.constructor | `constructor(pluginId: CordisDynamicPluginId);` | 39 |
| function | isDynamicCordisPlugin | `export declare function isDynamicCordisPlugin(value: unknown): value is DynamicCordisEvaluatedPlugin \| ((ctx: unknown) => unknown)` | 56 |
| function | evaluateClientHalf | `export declare function evaluateClientHalf(pluginId: CordisDynamicPluginId, clientCode: string, env: DynamicCordisClosureEnv, styles: DynamicCordisStyles): Prom` | 66 |

## dsh-cordis-client-runner/lib/types/client/guard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DynamicCordisSlotLedgerRow | `export interface DynamicCordisSlotLedgerRow` | 18 |
| interface | DynamicCordisGuardEnv | `export interface DynamicCordisGuardEnv` | 25 |
| function | dynamicCordisContext | `export declare function dynamicCordisContext(ctx: Context, env: DynamicCordisGuardEnv): Context` | 51 |

## dsh-cordis-client-runner/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CordisRunOrchestrator } | `export { CordisRunOrchestrator } from './orchestrator.ts';` | 17 |
| re-export | { ClientCordisInspectRegistry } | `export { ClientCordisInspectRegistry } from './inspect-registry.ts';` | 18 |
| re-export | { DynamicCordisPackageRunner } | `export { DynamicCordisPackageRunner } from './runtime.ts';` | 21 |
| re-export | { DynamicCordisStyles, evaluateClientHal | `export { DynamicCordisStyles, evaluateClientHalf, isDynamicCordisPlugin } from './evaluator.ts';` | 23 |
| re-export | { dynamicCordisContext } | `export { dynamicCordisContext } from './guard.ts';` | 25 |
| re-export | { ClientTimerService } | `export { ClientTimerService } from './timer.ts';` | 27 |
| interface | CordisRunnerFace | `export interface CordisRunnerFace` | 34 |
| const | name | `export declare const name = "cordis-client-runner"` | 100 |
| const | inject | `export declare const inject: string[]` | 107 |
| function | apply | `export declare function apply(ctx: Context): void` | 112 |

## dsh-cordis-client-runner/lib/types/client/inspect-registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ClientCordisInspectQueryContext | `export interface ClientCordisInspectQueryContext` | 6 |
| interface | ClientCordisInspectProviderRegistration | `export interface ClientCordisInspectProviderRegistration` | 13 |
| interface | ClientCordisInspectHost | `export interface ClientCordisInspectHost` | 20 |
| class | ClientCordisInspectRegistry | `export declare class ClientCordisInspectRegistry` | 27 |
| method | ClientCordisInspectRegistry.constructor | `constructor(host: ClientCordisInspectHost);` | 34 |
| function | provideClientCordisInspect | `export declare function provideClientCordisInspect(ctx: Context, registry: ClientCordisInspectRegistry): void` | 66 |

## dsh-cordis-client-runner/lib/types/client/orchestrator.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisRunActivity | `export type CordisRunActivity` | 10 |
| interface | CordisRunFailure | `export interface CordisRunFailure` | 25 |
| interface | CordisRunHostSeam | `export interface CordisRunHostSeam` | 36 |
| interface | CordisRunOrchestratorEnv | `export interface CordisRunOrchestratorEnv` | 47 |
| interface | CordisRunRequest | `export interface CordisRunRequest` | 54 |
| interface | CordisUserRunRequest | `export interface CordisUserRunRequest` | 65 |
| class | CordisRunOrchestrator | `export declare class CordisRunOrchestrator` | 74 |
| method | CordisRunOrchestrator.constructor | `constructor(env: CordisRunOrchestratorEnv);` | 84 |

## dsh-cordis-client-runner/lib/types/client/providers.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CLIENT_BUILTIN_INSPECTION | `export declare const CLIENT_BUILTIN_INSPECTION: readonly JsonValue[]` | 6 |
| function | clientInspectProviders | `export declare function clientInspectProviders(ctx: Context): ClientCordisInspectProviderRegistration[]` | 12 |

## dsh-cordis-client-runner/lib/types/client/runtime.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CordisObservable | `export interface CordisObservable<T>` | 26 |
| type | DynamicCordisLoadErrorCause | `export type DynamicCordisLoadErrorCause` | 37 |
| interface | CordisErrorDetails | `export interface CordisErrorDetails` | 39 |
| interface | DynamicCordisClientHalf | `export interface DynamicCordisClientHalf` | 46 |
| interface | DynamicCordisRenderFailure | `export interface DynamicCordisRenderFailure` | 66 |
| type | DynamicCordisLoadResult | `export type DynamicCordisLoadResult` | 80 |
| interface | DynamicCordisRunnerEnv | `export interface DynamicCordisRunnerEnv` | 90 |
| interface | DynamicCordisLivePackage | `export interface DynamicCordisLivePackage` | 114 |
| class | DynamicCordisPackageRunner | `export declare class DynamicCordisPackageRunner` | 129 |
| method | DynamicCordisPackageRunner.constructor | `constructor(env: DynamicCordisRunnerEnv);` | 162 |
| function | errorDetails | `export declare function errorDetails(error: unknown): CordisErrorDetails` | 226 |

## dsh-cordis-client-runner/lib/types/client/slot-catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ClientSlotOption | `export interface ClientSlotOption` | 16 |
| interface | ClientSlotEntry | `export interface ClientSlotEntry` | 27 |
| const | CLIENT_NOTES | `export declare const CLIENT_NOTES: readonly string[]` | 64 |
| const | CLIENT_SLOT_API | `export declare const CLIENT_SLOT_API: readonly ClientSlotEntry[]` | 66 |

## dsh-cordis-client-runner/lib/types/client/timer.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WithDispose | `type WithDispose<T>` | 10 |
| class | ClientTimerService | `export declare class ClientTimerService extends Service` | 14 |
| method | ClientTimerService.constructor | `constructor(ctx: Context);` | 16 |
| function | provideClientTimer | `export declare function provideClientTimer(ctx: Context): void` | 82 |
| export-list |  | `export {};` | 83 |

## dsh-cordis-client-runner/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

