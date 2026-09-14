# dsh-client-locale

> Locale plugin: Host-backed preference, extensible language catalog, browser fallback, and typed built-in dictionaries
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-locale/lib/types/client/LanguageRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LanguageRowInjected | `export interface LanguageRowInjected` | 4 |
| type | LanguageRowComponentProps | `export type LanguageRowComponentProps` | 9 |
| function | LanguageRow | `export declare function LanguageRow({ t, setLocale, useStore }: LanguageRowComponentProps): import("react").JSX.Element` | 15 |

## dsh-client-locale/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | LocaleDict | `export type LocaleDict` | 27 |
| interface | LanguageRegistration | `export interface LanguageRegistration` | 29 |
| interface | LocaleDefinition | `export interface LocaleDefinition` | 38 |
| interface | LocaleSnapshot | `export interface LocaleSnapshot` | 47 |
| const | FALLBACK_LOCALE | `export declare const FALLBACK_LOCALE: BuiltInLocaleId` | 80 |
| const | COMMON_NS | `export declare const COMMON_NS = "common"` | 82 |
| const | SETTINGS_NS | `export declare const SETTINGS_NS = "settings.locale"` | 84 |
| class | LocaleRuntime | `export declare class LocaleRuntime` | 95 |
| method | LocaleRuntime.constructor | `constructor(ctx: ClientContext, host?: SettingsScope<LocaleSettings>);` | 114 |
| const | inject | `export declare const inject: string[]` | 228 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 235 |

## dsh-client-locale/lib/types/client/settings-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LanguageOptionRow | `export interface LanguageOptionRow` | 8 |
| interface | LanguageRowState | `export interface LanguageRowState` | 15 |
| type | LanguageRowActions | `type LanguageRowActions` | 24 |
| function | createLanguageRowStore | `export declare function createLanguageRowStore(): EngineStoreHandle<LanguageRowState, LanguageRowActions>` | 31 |
| export-list |  | `export {};` | 32 |

## dsh-client-locale/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { LOCALE_IDS, LOCALE_PREFERENCE_FIELD, L | `export { LOCALE_IDS, LOCALE_PREFERENCE_FIELD, LOCALE_SETTINGS_NAMESPACE, type BuiltInLocaleId, type LocaleId, type LocaleSettings, } from './locale-settings.ts'` | 3 |
| function | apply | `export declare function apply(ctx: Context): void` | 8 |

## dsh-client-locale/lib/types/locale-settings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | LOCALE_SETTINGS_NAMESPACE | `export declare const LOCALE_SETTINGS_NAMESPACE = "locale"` | 4 |
| const | LOCALE_PREFERENCE_FIELD | `export declare const LOCALE_PREFERENCE_FIELD = "preference"` | 6 |
| const | LOCALE_ID_PATTERN | `export declare const LOCALE_ID_PATTERN: RegExp` | 8 |
| const | LOCALE_IDS | `export declare const LOCALE_IDS: readonly ["zh", "en"]` | 10 |
| type | BuiltInLocaleId | `export type BuiltInLocaleId` | 12 |
| type | LocaleId | `export type LocaleId` | 14 |
| interface | LocaleSettings | `export interface LocaleSettings` | 16 |
| const | LocaleSettingsSchema | `export declare const LocaleSettingsSchema: z<LocaleSettings>` | 21 |

## dsh-client-locale/lib/types/locales/en.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | en | `export declare const en: {` | 2 |

## dsh-client-locale/lib/types/locales/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { zh } | `export { zh } from './zh.ts';` | 6 |
| re-export | { en } | `export { en } from './en.ts';` | 7 |

## dsh-client-locale/lib/types/locales/settings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | SettingsLocaleKey | `export type SettingsLocaleKey` | 7 |
| const | en | `export declare const en: {` | 9 |

## dsh-client-locale/lib/types/locales/zh.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 2 |
| type | CommonKey | `export type CommonKey` | 44 |

