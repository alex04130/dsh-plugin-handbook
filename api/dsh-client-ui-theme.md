# dsh-client-ui-theme

> Theme plugin: Host bootstrap for the pre-plugin palette; DOM-free ThemeRuntime for light/dark/system state; --dsw-* token styles and Appearance settings row
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-theme/lib/types/boot-theme.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | bootThemeInjection | `export declare function bootThemeInjection(preference?: ThemePreference, fontSize?: number): IndexInjection` | 16 |

## dsh-client-ui-theme/lib/types/client/AppearanceRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AppearanceRowInjected | `export interface AppearanceRowInjected` | 5 |
| type | AppearanceRowComponentProps | `export type AppearanceRowComponentProps` | 10 |
| function | AppearanceRow | `export declare function AppearanceRow({ t, setTheme, useStore }: AppearanceRowComponentProps): import("react").JSX.Element` | 16 |

## dsh-client-ui-theme/lib/types/client/FontSizeRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FontSizeRowInjected | `export interface FontSizeRowInjected` | 4 |
| type | FontSizeRowComponentProps | `export type FontSizeRowComponentProps` | 9 |
| function | FontSizeRow | `export declare function FontSizeRow({ t, setFontSize, useStore }: FontSizeRowComponentProps): import("react").JSX.Element` | 15 |

## dsh-client-ui-theme/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SETTINGS_NS | `export declare const SETTINGS_NS = "settings.theme"` | 20 |
| type | ThemeTokens | `export type ThemeTokens` | 28 |
| interface | ThemeTokenModes | `export interface ThemeTokenModes` | 34 |
| type | ThemeTokenOverrides | `export type ThemeTokenOverrides` | 41 |
| interface | ThemeDefinition | `export interface ThemeDefinition` | 43 |
| interface | ThemeSnapshot | `export interface ThemeSnapshot` | 55 |
| interface | ThemeTokenInspection | `export interface ThemeTokenInspection` | 72 |
| class | ThemeRuntime | `export declare class ThemeRuntime` | 109 |
| method | ThemeRuntime.constructor | `constructor(ctx: ClientContext, host: SettingsScope<ThemeSettings>);` | 126 |
| const | inject | `export declare const inject: string[]` | 194 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 201 |

## dsh-client-ui-theme/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | ThemeKey | `export type ThemeKey` | 15 |
| const | en | `export declare const en: {` | 17 |

## dsh-client-ui-theme/lib/types/client/settings-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AppearanceRowState | `export interface AppearanceRowState` | 9 |
| type | AppearanceRowActions | `type AppearanceRowActions` | 16 |
| function | createAppearanceRowStore | `export declare function createAppearanceRowStore(): EngineStoreHandle<AppearanceRowState, AppearanceRowActions>` | 23 |
| interface | FontSizeRowState | `export interface FontSizeRowState` | 25 |
| type | FontSizeRowActions | `type FontSizeRowActions` | 32 |
| function | createFontSizeRowStore | `export declare function createFontSizeRowStore(): EngineStoreHandle<FontSizeRowState, FontSizeRowActions>` | 39 |
| export-list |  | `export {};` | 40 |

## dsh-client-ui-theme/lib/types/client/styles.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | installThemeStyles | `export declare function installThemeStyles(ctx: Context): void` | 6 |

## dsh-client-ui-theme/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DEFAULT_FONT_SIZE, DEFAULT_PREFERENCE, | `export { DEFAULT_FONT_SIZE, DEFAULT_PREFERENCE, FONT_SIZE_FIELD, FONT_SIZE_MAX, FONT_SIZE_MIN, THEME_PREFERENCE_FIELD, THEME_PREFERENCES, THEME_SETTINGS_NAMESPA` | 3 |
| function | apply | `export declare function apply(ctx: Context): void` | 10 |

## dsh-client-ui-theme/lib/types/theme-settings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | THEME_PREFERENCES | `export declare const THEME_PREFERENCES: readonly ["light", "dark", "system"]` | 4 |
| const | THEME_SETTINGS_NAMESPACE | `export declare const THEME_SETTINGS_NAMESPACE = "ui-theme"` | 6 |
| const | THEME_PREFERENCE_FIELD | `export declare const THEME_PREFERENCE_FIELD = "preference"` | 8 |
| const | FONT_SIZE_FIELD | `export declare const FONT_SIZE_FIELD = "fontSize"` | 10 |
| type | ThemePreference | `export type ThemePreference` | 12 |
| const | DEFAULT_PREFERENCE | `export declare const DEFAULT_PREFERENCE: ThemePreference` | 14 |
| const | FONT_SIZE_MIN | `export declare const FONT_SIZE_MIN = 12` | 16 |
| const | FONT_SIZE_MAX | `export declare const FONT_SIZE_MAX = 17` | 18 |
| const | DEFAULT_FONT_SIZE | `export declare const DEFAULT_FONT_SIZE = 14` | 20 |
| interface | ThemeSettings | `export interface ThemeSettings` | 22 |
| const | ThemeSettingsSchema | `export declare const ThemeSettingsSchema: z<ThemeSettings>` | 29 |
| function | isThemePreference | `export declare function isThemePreference(value: unknown): value is ThemePreference` | 35 |

