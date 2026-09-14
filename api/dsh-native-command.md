# dsh-native-command

> Host-native command and path-opening utilities with shell-free execution, cancellation, desktop detection, and WSL handoff
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-native-command/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { runNativeCommand } | `export { runNativeCommand } from './runner.ts';` | 5 |
| re-export | { canOpenNativePath, nativeFileManager,  | `export { canOpenNativePath, nativeFileManager, revealNativePath, openNativePath, openNativeTextFile, } from './path-opener.ts';` | 7 |

## dsh-native-command/lib/types/path-opener.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PathOpenerRunner | `export type PathOpenerRunner` | 13 |
| interface | PathOpenerInternals | `export interface PathOpenerInternals` | 15 |
| function | canOpenNativePath | `export declare function canOpenNativePath(internals?: PathOpenerInternals): boolean` | 34 |
| function | openNativePath | `export declare function openNativePath(path: string, signal: AbortSignal, internals?: PathOpenerInternals): Promise<void>` | 42 |
| function | openNativeTextFile | `export declare function openNativeTextFile(path: string, signal: AbortSignal, internals?: PathOpenerInternals): Promise<void>` | 50 |
| type | NativeFileManager | `export type NativeFileManager` | 52 |
| function | nativeFileManager | `export declare function nativeFileManager(internals?: PathOpenerInternals): NativeFileManager \| null` | 58 |
| function | revealNativePath | `export declare function revealNativePath(path: string, signal: AbortSignal, internals?: PathOpenerInternals): Promise<void>` | 66 |

## dsh-native-command/lib/types/runner.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | NativeCommandRunner | `export type NativeCommandRunner` | 6 |
| const | runNativeCommand | `export declare const runNativeCommand: NativeCommandRunner` | 17 |

