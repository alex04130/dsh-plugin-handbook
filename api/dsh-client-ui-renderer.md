# dsh-client-ui-renderer

> Browser UI renderer: React slot bindings, ctx.uiRenderer, and the assembled application root
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-renderer/lib/types/client/app.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AssemblyDeps | `export interface AssemblyDeps` | 8 |
| function | buildRenderApp | `export declare function buildRenderApp(deps: AssemblyDeps): () => ReactNode` | 17 |

## dsh-client-ui-renderer/lib/types/client/bind.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | bindSnapshotSelector | `export declare function bindSnapshotSelector<T>(w: HostObservable<T>): SnapshotSelectorHook<T>` | 10 |

## dsh-client-ui-renderer/lib/types/client/bindings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SlotAssemblyError | `export declare class SlotAssemblyError extends Error` | 5 |
| const | HostContext | `export declare const HostContext: import("react").Context<SlotRendererHost \| null>` | 8 |
| function | useHost | `export declare function useHost(): SlotRendererHost` | 13 |
| function | useRootBinding | `export declare function useRootBinding(): StandardSourceBinding` | 18 |
| function | useScopeBinding | `export declare function useScopeBinding(): StandardSourceBinding` | 23 |
| function | observableHook | `export declare function observableHook<T>(source: HostObservable<T>): SnapshotSelectorHook<T>` | 29 |
| function | maybeObservableHook | `export declare function maybeObservableHook<T>(source: HostObservable<T> \| undefined): MaybeSnapshotSelectorHook<T>` | 35 |
| type | KeyedSnapshotHook | `export type KeyedSnapshotHook` | 37 |
| function | keyedObservableHook | `export declare function keyedObservableHook(source: KeyedStandardSource \| undefined): KeyedSnapshotHook` | 43 |
| function | RootStandardProvider | `export declare function RootStandardProvider({ children }: {` | 45 |
| function | ScopeProvider | `export declare function ScopeProvider({ scope, children, }: {` | 49 |

## dsh-client-ui-renderer/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SlotRegistry } | `export { SlotRegistry } from './registry.ts';` | 3 |
| interface | UiRendererService | `export interface UiRendererService` | 7 |
| const | inject | `export declare const inject: string[]` | 32 |
| function | apply | `export declare function apply(ctx: Context): void` | 37 |

## dsh-client-ui-renderer/lib/types/client/registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RootOwnerProps | `export interface RootOwnerProps` | 40 |
| type | SlotInjectionEffect | `type SlotInjectionEffect` | 44 |
| class | SlotRegistry | `export declare class SlotRegistry extends Service` | 46 |
| method | SlotRegistry.constructor | `constructor(ctx: Context);` | 66 |
| export-list |  | `export {};` | 221 |

## dsh-client-ui-renderer/lib/types/client/scoped-slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createSlotRenderer | `export declare function createSlotRenderer(): SlotRenderer` | 8 |

## dsh-client-ui-renderer/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

## dsh-client-ui-renderer/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "client-ui-renderer-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

