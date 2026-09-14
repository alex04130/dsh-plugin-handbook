# dsh-client-ui-settings-general

> Settings ownerless-copy and product onboarding plugin: the General section, shell trigger/header chrome content, settings dictionaries, and the versioned welcome notice
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-settings-general/lib/types/client/GeneralSection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | GeneralSectionComponentProps | `export type GeneralSectionComponentProps` | 4 |
| function | GeneralSection | `export declare function GeneralSection({ renderSlot }: GeneralSectionComponentProps): import("react").JSX.Element` | 10 |

## dsh-client-ui-settings-general/lib/types/client/SettingsDocumentAction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsDocumentActionInjected | `export interface SettingsDocumentActionInjected` | 6 |
| type | SettingsDocumentActionProps | `export type SettingsDocumentActionProps` | 15 |
| function | SettingsDocumentAction | `export declare function SettingsDocumentAction({ controller, useSnapshot, t }: SettingsDocumentActionProps): ReactNode` | 21 |

## dsh-client-ui-settings-general/lib/types/client/SettingsRoot.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | SettingsRoot | `export declare function SettingsRoot(props: SettingsRootComponentProps): import("react").JSX.Element` | 7 |

## dsh-client-ui-settings-general/lib/types/client/chrome.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TriggerContentProps | `export type TriggerContentProps` | 3 |
| type | HeaderContentProps | `export type HeaderContentProps` | 5 |
| function | TriggerContent | `export declare function TriggerContent({ wide, t }: TriggerContentProps): import("react").JSX.Element` | 11 |
| function | HeaderContent | `export declare function HeaderContent({ t }: HeaderContentProps): import("react").JSX.Element` | 17 |
| type | CloseLabelProps | `export type CloseLabelProps` | 19 |
| function | CloseLabel | `export declare function CloseLabel({ t }: CloseLabelProps): import("react").JSX.Element` | 25 |

## dsh-client-ui-settings-general/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SettingsDocumentStore } | `export { SettingsDocumentStore } from './settings-document-store.ts';` | 16 |
| const | inject | `export declare const inject: string[]` | 29 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 35 |

## dsh-client-ui-settings-general/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | SettingsKey | `export type SettingsKey` | 18 |
| const | en | `export declare const en: {` | 20 |

## dsh-client-ui-settings-general/lib/types/client/settings-document-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsDocumentState | `export interface SettingsDocumentState` | 6 |
| class | SettingsDocumentStore | `export declare class SettingsDocumentStore` | 15 |
| method | SettingsDocumentStore.constructor | `constructor(ctx: ClientContext, describeFace: SettingsDescribeFace);` | 26 |

## dsh-client-ui-settings-general/lib/types/client/shell-contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsSectionRow | `export interface SettingsSectionRow` | 12 |
| interface | SettingsOnboardingStep | `export interface SettingsOnboardingStep` | 18 |
| type | SettingsRootInjected | `export type SettingsRootInjected` | 27 |
| type | SettingsRootComponentProps | `export type SettingsRootComponentProps` | 45 |

## dsh-client-ui-settings-general/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(ctx: Context): void` | 4 |

