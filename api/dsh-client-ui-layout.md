# dsh-client-ui-layout

> Shell plugin: three-column AppFrame with drag handles, ctx.layout viewing-state service (navigation + panels)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-layout/lib/types/client/AppFrame.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AppFrameProps | `export type AppFrameProps` | 4 |
| function | AppFrame | `export declare function AppFrame({ useStore, useSessions, usePanelInfo, actions, renderSlot, t, }: AppFrameProps): import("react").JSX.Element` | 6 |

## dsh-client-ui-layout/lib/types/client/DocumentTitle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DocumentTitleProps | `export type DocumentTitleProps` | 3 |
| function | DocumentTitle | `export declare function DocumentTitle({ useSessions, usePanelInfo, productTitle }: DocumentTitleProps): null` | 13 |

## dsh-client-ui-layout/lib/types/client/columns.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Columns | `export interface Columns` | 7 |
| const | CENTER_MIN | `export declare const CENTER_MIN = 400` | 13 |
| const | SIDEBAR_MIN | `export declare const SIDEBAR_MIN = 264` | 15 |
| const | SIDEBAR_MAX | `export declare const SIDEBAR_MAX = 420` | 17 |
| const | SIDEBAR_DEFAULT | `export declare const SIDEBAR_DEFAULT = 280` | 19 |
| const | SIDEBAR_COLLAPSED | `export declare const SIDEBAR_COLLAPSED = 56` | 21 |
| const | SIDEBAR_AUTO_COLLAPSE | `export declare const SIDEBAR_AUTO_COLLAPSE = 1024` | 25 |
| const | RIGHTBAR_MIN | `export declare const RIGHTBAR_MIN = 300` | 27 |
| const | RIGHTBAR_MAX_RATIO | `export declare const RIGHTBAR_MAX_RATIO = 0.7` | 29 |
| const | RIGHTBAR_DEFAULT_RATIO | `export declare const RIGHTBAR_DEFAULT_RATIO = 0.45` | 31 |
| function | clampWidth | `export declare function clampWidth(px: number, min: number, max: number): number` | 39 |
| function | computeColumns | `export declare function computeColumns(viewport: number, sidebar: number, rightbar: number): Columns` | 48 |

## dsh-client-ui-layout/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { LayoutController } | `export { LayoutController } from './service.ts';` | 13 |
| type | UsePanelInfo | `export type UsePanelInfo` | 16 |
| interface | SidebarOwnerProps | `export interface SidebarOwnerProps` | 87 |
| interface | RightbarOwnerProps | `export interface RightbarOwnerProps` | 94 |
| const | inject | `export declare const inject: string[]` | 106 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 113 |

## dsh-client-ui-layout/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MainPanelId | `export type MainPanelId` | 15 |
| interface | PanelInfo | `export interface PanelInfo` | 17 |
| type | PanelActions | `export type PanelActions` | 22 |
| interface | ILayout | `export interface ILayout` | 24 |
| class | LayoutController | `export declare class LayoutController implements ILayout` | 50 |
| method | LayoutController.constructor | `constructor(panels: PanelActions, hasMainPanel: (id: MainPanelId) => boolean);` | 58 |

## dsh-client-ui-layout/lib/types/client/stores.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | LayoutState | `type LayoutState` | 11 |
| type | LayoutInfo | `type LayoutInfo` | 18 |
| type | LayoutActions | `type LayoutActions` | 51 |
| function | createLayoutStore | `export declare function createLayoutStore(): EngineStoreHandle<LayoutState, LayoutActions>` | 70 |
| export-list |  | `export {};` | 71 |

## dsh-client-ui-layout/lib/types/client/theme-presenter.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DARK_ATTRIBUTE | `export declare const DARK_ATTRIBUTE = "data-ds-dark-theme"` | 13 |
| const | CONTENT_FONT_SIZE_VARIABLE | `export declare const CONTENT_FONT_SIZE_VARIABLE = "--dsh-content-font-size"` | 15 |
| class | ThemePresenter | `export declare class ThemePresenter` | 17 |
| method | ThemePresenter.constructor | `constructor();` | 23 |

## dsh-client-ui-layout/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

