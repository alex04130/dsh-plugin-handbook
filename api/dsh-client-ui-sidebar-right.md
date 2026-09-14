# dsh-client-ui-sidebar-right

> Right Sidebar: the docking surface's session-bound state, its panel and header expand control, and the navigation service over it
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-sidebar-right/lib/types/client/contract/params.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ValuesOf | `type ValuesOf<T>` | 19 |
| interface | SidebarRightResourceParamsMap | `export interface SidebarRightResourceParamsMap` | 21 |
| type | SidebarRightResourceParams | `export type SidebarRightResourceParams` | 24 |
| interface | SidebarRightTabParamsMap | `export interface SidebarRightTabParamsMap` | 29 |
| type | SidebarRightTabParamsFor | `export type SidebarRightTabParamsFor<K extends string>` | 35 |
| type | SidebarRightTabParams | `export type SidebarRightTabParams` | 37 |
| type | SidebarRightNavigationParams | `export type SidebarRightNavigationParams` | 42 |
| export-list |  | `export {};` | 46 |

## dsh-client-ui-sidebar-right/lib/types/client/contract/seed.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SidebarRightSeed | `export interface SidebarRightSeed` | 15 |
| function | defaultSeed | `export declare function defaultSeed(tabs: SidebarRightTabRegistry): SidebarRightSeed` | 24 |
| const | GUIDE_KIND | `export declare const GUIDE_KIND = "guide"` | 26 |
| function | pageAddress | `export declare function pageAddress(kind: string): string` | 34 |

## dsh-client-ui-sidebar-right/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SidebarRightTabNavigation | `export interface SidebarRightTabNavigation` | 74 |
| interface | SidebarRightTabPlacement | `export interface SidebarRightTabPlacement` | 87 |
| interface | SidebarRightTabActions | `export interface SidebarRightTabActions` | 96 |
| interface | SidebarRightTabInfo | `export interface SidebarRightTabInfo` | 117 |
| type | UseSidebarRightTabInfo | `export type UseSidebarRightTabInfo` | 139 |
| interface | SidebarRightTabInjected | `export interface SidebarRightTabInjected` | 141 |
| interface | SidebarRightTabMenuOwnerProps | `export interface SidebarRightTabMenuOwnerProps` | 147 |

## dsh-client-ui-sidebar-right/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 39 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 55 |

## dsh-client-ui-sidebar-right/lib/types/client/labels.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | dockLabels | `export declare function dockLabels(t: TranslateNS<'sidebarRight'>): DockLabels` | 18 |

## dsh-client-ui-sidebar-right/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 9 |
| type | SidebarRightKey | `export type SidebarRightKey` | 33 |
| const | en | `export declare const en: {` | 35 |

## dsh-client-ui-sidebar-right/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SurfaceActions | `export type SurfaceActions` | 39 |
| interface | SidebarRightSurfaceStore | `export interface SidebarRightSurfaceStore` | 41 |
| interface | Adoption | `interface Adoption` | 47 |
| function | createSidebarRightController | `export declare function createSidebarRightController(tabs: SidebarRightTabRegistry, pin: PinResource): {` | 58 |
| interface | SidebarRightBinding | `export interface SidebarRightBinding` | 63 |
| interface | SidebarRightPlacement | `export interface SidebarRightPlacement` | 81 |
| interface | SidebarRightOpenResourceOptions | `export interface SidebarRightOpenResourceOptions extends SidebarRightPlacement` | 93 |
| interface | SidebarRightOpenTabOptions | `export interface SidebarRightOpenTabOptions<K extends string` | 100 |
| interface | ISidebarRight | `export interface ISidebarRight` | 105 |
| class | SidebarRightController | `export declare class SidebarRightController implements ISidebarRight` | 170 |
| method | SidebarRightController.constructor | `constructor(tabs: SidebarRightTabRegistry, pin: PinResource, adopted?: Map<SessionId, Adoption>);` | 184 |
| export-list |  | `export {};` | 299 |

## dsh-client-ui-sidebar-right/lib/types/client/shell/ExpandButton.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ExpandButtonProps | `export type ExpandButtonProps` | 20 |
| function | ExpandButton | `export declare function ExpandButton({ sessionId, useStore, actions, t }: ExpandButtonProps): ReactNode` | 22 |

## dsh-client-ui-sidebar-right/lib/types/client/shell/RightbarRoot.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | RightbarRoot | `export declare function RightbarRoot({ usePanelInfo, SessionProvider, renderSlot, width, viewportWidth, canShow, }: PropsRuntime<'rightbar'> & PropsRenderSlots<` | 8 |

## dsh-client-ui-sidebar-right/lib/types/client/shell/SidebarRight.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Store | `type Store` | 12 |
| type | Children | `type Children` | 14 |
| interface | SidebarRightPresentation | `export interface SidebarRightPresentation` | 16 |
| interface | SidebarRightInjected | `export interface SidebarRightInjected` | 25 |
| type | RightbarSeatProps | `export type RightbarSeatProps` | 65 |
| interface | PanelProps | `interface PanelProps` | 67 |
| function | intentsFor | `export declare function intentsFor(sessionId: SessionId, actions: Store['actions'], openTab: PanelProps['openTab']): DockIntents` | 90 |
| function | RightbarSeat | `export declare function RightbarSeat({ sessionId, width, viewportWidth, canShow, useStore, actions, t, renderSlot, syncPresentation, bindService, openTab, useTa` | 97 |
| export-list |  | `export {};` | 98 |

## dsh-client-ui-sidebar-right/lib/types/client/stores.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SurfaceState | `export interface SurfaceState` | 33 |
| interface | SidebarRightState | `export interface SidebarRightState` | 46 |
| function | canCloseTab | `export declare function canCloseTab(surface: SurfaceState, tabId: TabId): boolean` | 55 |
| interface | OpenContentIntent | `export interface OpenContentIntent` | 60 |
| function | createSurface | `export declare function createSurface(): SurfaceState` | 78 |
| function | soleDockedTab | `export declare function soleDockedTab(state: LayoutState, tabId: TabId): boolean` | 87 |
| type | SidebarRightActions | `type SidebarRightActions` | 89 |
| function | createSidebarRightStore | `export declare function createSidebarRightStore(seed: () => SidebarRightSeed): EngineStoreHandle<SidebarRightState, SidebarRightActions>` | 119 |
| export-list |  | `export {};` | 120 |

## dsh-client-ui-sidebar-right/lib/types/client/tab-domain.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SidebarRightNavigator | `export interface SidebarRightNavigator` | 29 |
| type | PinResource | `export type PinResource` | 38 |
| interface | TabOccurrence | `export interface TabOccurrence` | 40 |
| class | TabDomain | `export declare class TabDomain` | 51 |
| method | TabDomain.constructor | `constructor(navigator: SidebarRightNavigator, pin: PinResource);` | 59 |

## dsh-client-ui-sidebar-right/lib/types/client/tab-info.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TabHookContext | `export interface TabHookContext` | 6 |
| const | tabInfoFactory | `export declare const tabInfoFactory: SlotHookFactory<'sidebar.right.pane.tab', UseSidebarRightTabInfo>` | 21 |
| const | guideTabInfoFactory | `export declare const guideTabInfoFactory: SlotHookFactory<'sidebar.right.tab.guide', UseSidebarRightTabInfo>` | 28 |

## dsh-client-ui-sidebar-right/lib/types/client/tab-registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SidebarRightTabPriority | `export type SidebarRightTabPriority` | 43 |
| interface | SidebarRightGuideEntry | `export interface SidebarRightGuideEntry` | 45 |
| interface | SidebarRightGuideBox | `export interface SidebarRightGuideBox extends SidebarRightGuideEntry` | 64 |
| interface | SidebarRightTabDefinition | `export interface SidebarRightTabDefinition` | 68 |
| interface | SidebarRightTabClaim | `export interface SidebarRightTabClaim` | 111 |
| class | SidebarRightTabRegistry | `export declare class SidebarRightTabRegistry` | 130 |
| method | SidebarRightTabRegistry.constructor | `constructor(ctx: Context);` | 139 |

## dsh-client-ui-sidebar-right/lib/types/client/tabs/guide/GuideBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GuideInjected | `export interface GuideInjected` | 25 |
| type | GuideBodyProps | `export type GuideBodyProps` | 32 |
| function | GuideBody | `export declare function GuideBody({ useTabInfo, useGuideEntries, renderSlotChain }: GuideBodyProps): ReactNode` | 34 |

## dsh-client-ui-sidebar-right/lib/types/client/tabs/guide/GuideTitle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | CompassGlyph | `export declare function CompassGlyph({ size, className }: IconProps): ReactNode` | 16 |
| function | CubeGlyph | `export declare function CubeGlyph({ size, className }: IconProps): ReactNode` | 25 |
| function | GuideTitle | `export declare function GuideTitle({ useTabInfo }: PropsRuntime<'sidebar.right.pane.tab.title'>): ReactNode` | 31 |

## dsh-client-ui-sidebar-right/lib/types/client/tabs/guide/definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | GUIDE_ID | `export declare const GUIDE_ID = "@deepseek-ai/dsh-client-ui-sidebar-right/guide"` | 7 |
| function | guideDefinition | `export declare function guideDefinition(t: TranslateNS<'sidebarRight'>): SidebarRightTabDefinition` | 17 |

## dsh-client-ui-sidebar-right/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

