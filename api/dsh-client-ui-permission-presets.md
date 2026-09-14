# dsh-client-ui-permission-presets

> Permission surfaces: a new-session default in General settings and a current-session /permission popup over the permissions projection
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-permission-presets/lib/types/client/PermissionRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PermissionRowInjected | `export interface PermissionRowInjected` | 11 |
| type | PermissionRowProps | `export type PermissionRowProps` | 22 |
| function | PermissionRow | `export declare function PermissionRow({ load, select, usePermission, t }: PermissionRowProps): import("react").JSX.Element \| null` | 28 |

## dsh-client-ui-permission-presets/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 20 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 26 |

## dsh-client-ui-permission-presets/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | PermissionSettingsKey | `export type PermissionSettingsKey` | 18 |
| const | en | `export declare const en: {` | 20 |
| const | accessZh | `export declare const accessZh: {` | 35 |
| type | PermissionAccessKey | `export type PermissionAccessKey` | 46 |
| const | accessEn | `export declare const accessEn: {` | 48 |

## dsh-client-ui-permission-presets/lib/types/client/presentation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | FULL_ACCESS_PRESET | `export declare const FULL_ACCESS_PRESET = "danger-full-access"` | 2 |
| type | PermissionPresetLabelKey | `export type PermissionPresetLabelKey` | 4 |
| function | displayPresetName | `export declare function displayPresetName(name: string): string` | 10 |
| function | displayPermissionPreset | `export declare function displayPermissionPreset(value: string, name: string, t?: (key: PermissionPresetLabelKey) => string): string` | 18 |

## dsh-client-ui-permission-presets/lib/types/client/settings-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PERMISSION_SETTINGS_NS | `export declare const PERMISSION_SETTINGS_NS = "permission"` | 13 |
| interface | PermissionDefaultOption | `export interface PermissionDefaultOption` | 15 |
| interface | PermissionSettingsState | `export interface PermissionSettingsState` | 22 |
| function | permissionDefaultOf | `export declare function permissionDefaultOf(view: SettingsNamespaceView, schema: SettingsSchemaService): {` | 36 |
| class | PermissionPresetSettingsController | `export declare class PermissionPresetSettingsController` | 41 |
| method | PermissionPresetSettingsController.constructor | `constructor(describeFace: SettingsDescribeFace, ctx: ClientContext, schema: SettingsSchemaService);` | 56 |

## dsh-client-ui-permission-presets/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

