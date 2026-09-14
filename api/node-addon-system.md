# node-addon-system

> Prebuilt system primitives: a Linux Landlock launcher and asynchronous POSIX flock through stable Node-API
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## node-addon-system/lib/flock.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | tryLockExclusive | `export declare function tryLockExclusive(fd: number): Promise<void>` | 13 |

## node-addon-system/lib/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | LAUNCHER_BIN | `export declare const LAUNCHER_BIN = "landlock-run"` | 2 |
| const | LAUNCHER_FAILURE_EXIT | `export declare const LAUNCHER_FAILURE_EXIT = 125` | 10 |
| type | LandlockEnforcement | `export type LandlockEnforcement` | 19 |
| interface | LauncherGrants | `export interface LauncherGrants` | 24 |
| function | launcherPath | `export declare function launcherPath(resolvePackageJson?: (specifier: string) => string): string` | 45 |
| function | grantArgs | `export declare function grantArgs(grants: LauncherGrants): string[]` | 55 |
| function | probe | `export declare function probe(launcher?: string, options?: {` | 71 |

