# dsh-client-ui-commands

> Client command surface: global directory cache, '/' source, three command UI kinds, popupSelect registry
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-commands/lib/types/client/PopupSelectView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PopupSelectInjected | `export interface PopupSelectInjected` | 4 |
| type | PopupSelectViewProps | `export type PopupSelectViewProps` | 9 |
| function | PopupSelectView | `export declare function PopupSelectView({ popup, t }: PopupSelectViewProps): import("react").JSX.Element \| null` | 15 |

## dsh-client-ui-commands/lib/types/client/contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SelectConfirmation | `export interface SelectConfirmation` | 9 |
| interface | SelectOption | `export interface SelectOption` | 17 |
| interface | PopupSelectSpec | `export interface PopupSelectSpec` | 31 |
| interface | ActionSpec | `export interface ActionSpec` | 42 |
| type | CommandUiSpec | `export type CommandUiSpec` | 51 |
| interface | CommandContribution | `export interface CommandContribution` | 58 |
| interface | CommandDecoration | `export interface CommandDecoration` | 77 |
| interface | CommandUiContract | `export interface CommandUiContract` | 86 |

## dsh-client-ui-commands/lib/types/client/directory.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DirectoryStatus | `export type DirectoryStatus` | 16 |
| type | FetchCommands | `export type FetchCommands` | 18 |
| class | CommandDirectory | `export declare class CommandDirectory` | 20 |
| method | CommandDirectory.constructor | `constructor(fetchCommands: FetchCommands);` | 23 |

## dsh-client-ui-commands/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CommandUiRuntime } | `export { CommandUiRuntime } from './service.ts';` | 11 |
| re-export | { CommandDirectory } | `export { CommandDirectory } from './directory.ts';` | 12 |
| re-export | { filterOptions, PopupSelectController } | `export { filterOptions, PopupSelectController } from './popup.ts';` | 14 |
| const | inject | `export declare const inject: string[]` | 31 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 37 |

## dsh-client-ui-commands/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | CommandKey | `export type CommandKey` | 20 |
| const | en | `export declare const en: {` | 22 |

## dsh-client-ui-commands/lib/types/client/popup.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TokenSegment | `export type TokenSegment` | 11 |
| interface | PopupSpec | `export interface PopupSpec<TCtx>` | 24 |
| interface | PopupSelectDeps | `export interface PopupSelectDeps` | 31 |
| interface | PopupState | `export interface PopupState` | 44 |
| function | filterOptions | `export declare function filterOptions(options: readonly SelectOption[], search: string): readonly SelectOption[]` | 72 |
| class | PopupSelectController | `export declare class PopupSelectController<TCtx = unknown>` | 79 |
| method | PopupSelectController.constructor | `constructor(deps: PopupSelectDeps);` | 87 |

## dsh-client-ui-commands/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | CommandUiRuntime | `export declare class CommandUiRuntime extends Service implements CommandUiContract` | 34 |
| method | CommandUiRuntime.constructor | `constructor(ctx: Context);` | 44 |

## dsh-client-ui-commands/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 9 |

