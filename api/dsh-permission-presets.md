# dsh-permission-presets

> User-facing permission presets (ctx.permissionPresets) for the DeepSeek Harness: one product-level Permissions select bundling the sandbox-mode and approval-policy knobs, written through to their own session events
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-permission-presets/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PresetSpec | `export interface PresetSpec` | 44 |
| const | CUSTOM_PRESET | `export declare const CUSTOM_PRESET = "custom"` | 58 |
| const | PERMISSION_SETTINGS_NAMESPACE | `export declare const PERMISSION_SETTINGS_NAMESPACE = "permission"` | 60 |
| interface | KnobState | `export interface KnobState` | 65 |
| interface | PermissionProjectionState | `interface PermissionProjectionState extends KnobState` | 74 |
| interface | PermissionSettings | `export interface PermissionSettings` | 79 |
| interface | Config | `export interface Config` | 84 |
| class | PermissionPresetService | `export declare class PermissionPresetService extends Service` | 102 |
| method | PermissionPresetService.constructor | `constructor(ctx: Context, config: Config);` | 107 |
| default | PermissionPresetService | `export default PermissionPresetService;` | 169 |

## dsh-permission-presets/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "permission-presets-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-permission-presets/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PresetOption | `export interface PresetOption` | 12 |
| interface | PermissionSelect | `export interface PermissionSelect` | 25 |

