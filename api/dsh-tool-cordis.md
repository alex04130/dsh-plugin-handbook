# dsh-tool-cordis

> Self-referential cordis toolset: inspect the live runtime, mount and dispose model-written plugins
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-cordis/lib/types/api-catalog.d.ts

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

## dsh-tool-cordis/lib/types/fiber-state.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FiberState | `export declare const FiberState: {` | 9 |
| type | FiberState | `export type FiberState` | 18 |
| const | STATE_LABELS | `export declare const STATE_LABELS: {` | 20 |

## dsh-tool-cordis/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-cordis"` | 6 |
| const | inject | `export declare const inject: string[]` | 7 |
| function | apply | `export declare function apply(ctx: Context): void` | 9 |

## dsh-tool-cordis/lib/types/inspect.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | withinFiber | `export declare function withinFiber(fiber: Fiber, root: Fiber): boolean` | 19 |
| function | providedServices | `export declare function providedServices(ctx: Context, fiber: Fiber): string[]` | 26 |
| function | missingServices | `export declare function missingServices(ctx: Context, fiber: Fiber): string[]` | 35 |
| function | describeServices | `export declare function describeServices(ctx: Context, api?: readonly ServiceApiEntry[]): string[]` | 44 |
| function | describePlugins | `export declare function describePlugins(ctx: Context): string[]` | 53 |
| function | describeTools | `export declare function describeTools(ctx: Context, scope?: ScopeKey): string[]` | 62 |
| function | describeDynamic | `export declare function describeDynamic(ctx: Context, agent?: Agent): string[]` | 72 |
| function | describeApi | `export declare function describeApi(ctx: Context, api?: readonly ServiceApiEntry[], name?: string, inherited?: readonly InheritedApiEntry[], types?: readonly Ty` | 84 |
| function | describeEvents | `export declare function describeEvents(events?: readonly EventApiEntry[], name?: string): string[]` | 92 |

## dsh-tool-cordis/lib/types/present.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | presentRuntimeInspectCall | `export declare function presentRuntimeInspectCall(args: {` | 8 |
| function | presentInspectListCall | `export declare function presentInspectListCall(): GenericCallView` | 16 |
| function | presentInspectQueryCall | `export declare function presentInspectQueryCall(args: {` | 22 |
| function | presentInspectSelfCall | `export declare function presentInspectSelfCall(args: {` | 32 |
| function | presentPackageInspectCall | `export declare function presentPackageInspectCall(args: {` | 41 |
| function | presentDefineCall | `export declare function presentDefineCall(args: {` | 50 |
| function | presentUndefineCall | `export declare function presentUndefineCall(args: {` | 70 |
| function | presentRunCall | `export declare function presentRunCall(args: {` | 78 |
| function | presentStopCall | `export declare function presentStopCall(args: {` | 88 |

## dsh-tool-cordis/lib/types/prompt.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CORDIS_SYSTEM_PROMPT | `export declare const CORDIS_SYSTEM_PROMPT = "# Dynamic Cordis Plugins\n\nDynamic Cordis plugins temporarily extend the current DSH process. A Plugin uses apply(` | 2 |

## dsh-tool-cordis/lib/types/providers.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | hostInspectProviders | `export declare function hostInspectProviders(ctx: Context): HostCordisInspectProviderRegistration[]` | 9 |

