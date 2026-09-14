# dsh-host-directory-picker

> Abstract workspace-directory picking seam (ctx.directoryPicker) for the DeepSeek Harness web GUI host
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-directory-picker/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DirectoryPickerNativeCapability | `export interface DirectoryPickerNativeCapability` | 17 |
| interface | DirectoryPickerBrowseCapability | `export interface DirectoryPickerBrowseCapability` | 31 |
| interface | DirectoryPickerCapabilities | `export interface DirectoryPickerCapabilities` | 61 |
| type | DirectoryPickerCapability | `export type DirectoryPickerCapability` | 66 |
| type | DirectoryPickerErrorCode | `export type DirectoryPickerErrorCode` | 68 |
| class | DirectoryPickerError | `export declare class DirectoryPickerError extends Error` | 70 |
| method | DirectoryPickerError.constructor | `constructor(code: DirectoryPickerErrorCode, path: string, message: string);` | 78 |
| class | DirectoryPicker | `export declare abstract class DirectoryPicker extends Service` | 92 |
| method | DirectoryPicker.constructor | `constructor(ctx: Context);` | 93 |
| default | DirectoryPicker | `export default DirectoryPicker;` | 100 |

## dsh-host-directory-picker/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DirectoryEntry | `export interface DirectoryEntry` | 10 |
| interface | DirectoryListing | `export interface DirectoryListing` | 19 |

