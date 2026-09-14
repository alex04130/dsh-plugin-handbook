# dsh-client-modules

> Client module system, dual-face: node half composes the __DSH_BOOT__ entry graph (incremental dsh.client scan, bundle route, index tap, webPlugins service); browser half is the lazy-CJS module table the vendored cordis Loader consumes as its internal seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-modules/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list | ClientModuleSystem | `export { ClientModuleSystem };` | 16 |
| re-export | { parseBootManifest, stripClientSuffix } | `export { parseBootManifest, stripClientSuffix } from './manifest.ts';` | 17 |
| function | createClientModuleSystem | `export declare function createClientModuleSystem(target: ClientModuleLoaderTarget, bootstrapModule: ClientBootstrapModule, options: ClientModuleCreateOptions): ` | 26 |
| function | apply | `export declare function apply(ctx: Context): void` | 31 |

## dsh-client-modules/lib/types/client/manifest.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WebBootEntry | `export interface WebBootEntry` | 46 |
| type | WebBootBatchPhase | `export type WebBootBatchPhase` | 61 |
| interface | WebBootBatch | `export interface WebBootBatch` | 63 |
| interface | WebBootGraph | `export interface WebBootGraph` | 74 |
| interface | BootModuleRow | `export interface BootModuleRow` | 87 |
| interface | BootPluginRow | `export interface BootPluginRow` | 102 |
| interface | BootManifest | `export interface BootManifest` | 111 |
| function | optionalStringArray | `export declare function optionalStringArray(subject: string, field: string, value: unknown): string[] \| undefined` | 128 |
| function | stripClientSuffix | `export declare function stripClientSuffix(spec: string): string` | 138 |
| function | parseBootManifest | `export declare function parseBootManifest(wire: unknown): BootManifest` | 146 |
| interface | ClientBundleRegistration | `export interface ClientBundleRegistration` | 148 |
| interface | ClientModuleCreateOptions | `export interface ClientModuleCreateOptions` | 159 |
| interface | ClientBootstrapModule | `export interface ClientBootstrapModule` | 168 |
| interface | ClientModuleLoaderTarget | `export interface ClientModuleLoaderTarget` | 175 |
| interface | DshWindow | `export interface DshWindow` | 186 |
| interface | ClientModuleRecord | `export interface ClientModuleRecord` | 193 |
| interface | ClientModuleLoader | `export interface ClientModuleLoader` | 208 |
| interface | ClientModuleSystemOptions | `export interface ClientModuleSystemOptions` | 248 |

## dsh-client-modules/lib/types/client/system.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ClientModuleSystem | `export declare class ClientModuleSystem implements ClientModuleLoader` | 9 |
| method | ClientModuleSystem.constructor | `constructor(options: ClientModuleSystemOptions);` | 28 |

## dsh-client-modules/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { stripClientSuffix } | `export { stripClientSuffix } from './client/manifest.ts';` | 29 |
| interface | ClientArtifactBaseline | `export interface ClientArtifactBaseline` | 38 |
| function | orderByModuleGraph | `export declare function orderByModuleGraph(entries: readonly WebBootEntry[]): WebBootEntry[]` | 56 |
| function | bootInjections | `export declare function bootInjections(graph: WebBootGraph): IndexInjection[]` | 68 |
| class | ClientModuleRegistry | `export declare class ClientModuleRegistry extends Service` | 76 |
| method | ClientModuleRegistry.constructor | `constructor(ctx: Context);` | 96 |
| default | ClientModuleRegistry | `export default ClientModuleRegistry;` | 184 |

## dsh-client-modules/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "client-modules-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

