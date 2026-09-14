# dsh-host-directory-picker-auto

> Adaptive chooser of the directory-picker seam: resolves the host situation at boot and mounts the native or browse backend for the DeepSeek Harness web GUI host
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-directory-picker-auto/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { canExecute, hasLinuxChooserBinary } | `export { canExecute, hasLinuxChooserBinary } from './probe.ts';` | 15 |
| re-export | { resolveDirectoryPickerBackend } | `export { resolveDirectoryPickerBackend } from './resolve.ts';` | 17 |
| const | name | `export declare const name = "directory-picker-auto"` | 19 |
| const | inject | `export declare const inject: string[]` | 21 |
| const | BACKEND_PACKAGES | `export declare const BACKEND_PACKAGES: Record<DirectoryPickerBackendKind, string>` | 28 |
| const | SURFACE_PACKAGES | `export declare const SURFACE_PACKAGES: Record<DirectoryPickerBackendKind, string>` | 36 |
| function | apply | `export declare function apply(ctx: Context): Promise<void>` | 44 |

## dsh-host-directory-picker-auto/lib/types/probe.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | canExecute | `export declare function canExecute(candidate: string): boolean` | 13 |
| function | hasLinuxChooserBinary | `export declare function hasLinuxChooserBinary(pathValue: string \| undefined, isExecutable: (candidate: string) => boolean): boolean` | 20 |

## dsh-host-directory-picker-auto/lib/types/resolve.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DirectoryPickerBackendKind | `export type DirectoryPickerBackendKind` | 10 |
| type | DirectoryPickerEnv | `export type DirectoryPickerEnv` | 12 |
| interface | DirectoryPickerHostFacts | `export interface DirectoryPickerHostFacts` | 14 |
| function | resolveDirectoryPickerBackend | `export declare function resolveDirectoryPickerBackend(facts: DirectoryPickerHostFacts): DirectoryPickerBackendKind` | 39 |

