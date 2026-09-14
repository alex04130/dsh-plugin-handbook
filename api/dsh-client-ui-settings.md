# dsh-client-ui-settings

> Settings domain base plugin: the settings-namespace scope service and the canonical settings slot-type contract
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-settings/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsGeneralItemOwnerProps | `export interface SettingsGeneralItemOwnerProps` | 122 |
| interface | SettingsPluginsTabOwnerProps | `export interface SettingsPluginsTabOwnerProps` | 127 |
| interface | SettingsTriggerOwnerProps | `export interface SettingsTriggerOwnerProps` | 132 |
| interface | SettingsHeaderOwnerProps | `export interface SettingsHeaderOwnerProps` | 137 |
| interface | SettingsSectionOwnerProps | `export interface SettingsSectionOwnerProps` | 148 |
| interface | SettingsOnboardingOwnerProps | `export interface SettingsOnboardingOwnerProps` | 153 |

## dsh-client-ui-settings/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 25 |
| function | apply | `export declare function apply(ctx: Context): void` | 35 |

## dsh-client-ui-settings/lib/types/client/schema.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SchemaNode | `export type SchemaNode` | 6 |
| class | SettingsSchemaService | `export declare class SettingsSchemaService extends Service` | 11 |
| method | SettingsSchemaService.constructor | `constructor(ctx: Context);` | 13 |

## dsh-client-ui-settings/lib/types/client/settings-contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsScopeSnapshot | `export interface SettingsScopeSnapshot<T>` | 6 |
| interface | SettingsScopeSpec | `export interface SettingsScopeSpec<T>` | 34 |
| interface | SettingsScope | `export interface SettingsScope<T>` | 50 |

## dsh-client-ui-settings/lib/types/client/settings-mirror.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsDescribeView | `export interface SettingsDescribeView` | 14 |
| interface | SettingsMirrorSnapshot | `export interface SettingsMirrorSnapshot` | 23 |
| interface | SettingsDescribeFace | `export interface SettingsDescribeFace` | 40 |
| class | SettingsDescribeMirror | `export declare class SettingsDescribeMirror implements SettingsDescribeFace` | 67 |
| method | SettingsDescribeMirror.constructor | `constructor(ctx: ClientContext, persistence?: 'host' \| 'memory');` | 79 |

## dsh-client-ui-settings/lib/types/client/settings-scope.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SettingsScopeController | `export declare class SettingsScopeController<T> implements SettingsScope<T>` | 20 |
| method | SettingsScopeController.constructor | `constructor(ctx: Context, spec: SettingsScopeSpec<T>, mirror: SettingsDescribeMirror, persistence: 'host' \| 'memory', schema: SettingsSchemaService);` | 45 |
| class | SettingsScopeBinder | `export declare class SettingsScopeBinder extends Service` | 100 |
| method | SettingsScopeBinder.constructor | `constructor(ctx: Context, config: {` | 116 |

## dsh-client-ui-settings/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

