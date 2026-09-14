# dsh-host-directory-picker-native

> Native-OS-chooser backend of the directory-picker seam for the DeepSeek Harness web GUI host
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-directory-picker-native/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { pickNativeDirectory } | `export { pickNativeDirectory } from './native-picker.ts';` | 16 |
| default | class | `export default class NativeDirectoryPicker extends DirectoryPicker {` | 18 |

## dsh-host-directory-picker-native/lib/types/native-picker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DirectoryPickerRunner | `export type DirectoryPickerRunner` | 4 |
| interface | DirectoryPickerInternals | `export interface DirectoryPickerInternals` | 6 |
| function | pickNativeDirectory | `export declare function pickNativeDirectory(signal: AbortSignal, internals?: DirectoryPickerInternals): Promise<string \| null>` | 18 |

## dsh-host-directory-picker-native/lib/types/win32-dialog-bindings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | loadWin32DialogBindings | `export declare function loadWin32DialogBindings(): Promise<Win32DialogBindings>` | 19 |
| function | closeThreadWindows | `export declare function closeThreadWindows(threadId: number): Promise<void>` | 26 |

## dsh-host-directory-picker-native/lib/types/win32-dialog-host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | spawnDialogWorker | `export declare function spawnDialogWorker(data: Win32DialogWorkerData): ReturnType<typeof spawn>` | 21 |
| re-export | { closeThreadWindows } | `export { closeThreadWindows } from './win32-dialog-bindings.ts';` | 22 |

## dsh-host-directory-picker-native/lib/types/win32-dialog-logic.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | HRESULT_CANCELLED | `export declare const HRESULT_CANCELLED: number` | 9 |
| const | FOS_PICKFOLDERS | `export declare const FOS_PICKFOLDERS = 32` | 11 |
| const | FOS_FORCEFILESYSTEM | `export declare const FOS_FORCEFILESYSTEM = 64` | 13 |
| const | FOS_NOCHANGEDIR | `export declare const FOS_NOCHANGEDIR = 8` | 15 |
| interface | Win32FolderDialog | `export interface Win32FolderDialog` | 17 |
| interface | Win32DialogBindings | `export interface Win32DialogBindings` | 49 |
| function | runFolderDialog | `export declare function runFolderDialog(bindings: Win32DialogBindings, title: string, onShowing: (threadId: number) => void): string \| null` | 106 |

## dsh-host-directory-picker-native/lib/types/win32-dialog-worker.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Win32DialogWorkerData | `export interface Win32DialogWorkerData` | 15 |
| type | Win32DialogWorkerMessage | `export type Win32DialogWorkerMessage` | 19 |

## dsh-host-directory-picker-native/lib/types/win32-dialog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Win32DialogWorkerLike | `export interface Win32DialogWorkerLike` | 10 |
| interface | Win32DialogInternals | `export interface Win32DialogInternals` | 32 |
| const | DIALOG_TITLE | `export declare const DIALOG_TITLE = "Select Workspace Directory"` | 41 |
| function | pickWin32Directory | `export declare function pickWin32Directory(signal: AbortSignal, internals?: Win32DialogInternals): Promise<string \| null>` | 48 |

