# dsh-home-paths

> Shared filesystem path helpers for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-home-paths/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DSH_HOME_DIR_NAME | `export declare const DSH_HOME_DIR_NAME = ".dsh"` | 7 |
| const | DEFAULT_DSH_HOME_DISPLAY | `export declare const DEFAULT_DSH_HOME_DISPLAY = "~/.dsh"` | 9 |
| const | DSH_HOME_ENV | `export declare const DSH_HOME_ENV = "DSH_HOME"` | 11 |
| function | canonicalizeWatchPath | `export declare function canonicalizeWatchPath(path: string): Promise<string>` | 25 |
| function | defaultDshHome | `export declare function defaultDshHome(): string` | 30 |
| function | expandHomePath | `export declare function expandHomePath(path: string): string` | 36 |
| function | resolveDshHome | `export declare function resolveDshHome(configured?: string, env?: Record<string, string \| undefined>): string` | 48 |
| function | dshHomePath | `export declare function dshHomePath(...segments: string[]): string` | 54 |
| function | dshHomeDisplay | `export declare function dshHomeDisplay(resolvedHome: string): string` | 63 |

