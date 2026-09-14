# dsh-util-workspace-path

> Browser-safe Workspace path and display helpers
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-util-workspace-path/lib/types/file-address.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FileAddress | `export type FileAddress` | 26 |
| function | sessionFileAddress | `export declare function sessionFileAddress(sessionId: string, path: string): string` | 43 |
| function | absoluteFileAddress | `export declare function absoluteFileAddress(path: string): string` | 50 |
| function | parseFileAddress | `export declare function parseFileAddress(address: string): FileAddress \| undefined` | 57 |

## dsh-util-workspace-path/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isAbsoluteWorkspacePath | `export declare function isAbsoluteWorkspacePath(path: string): boolean` | 6 |
| function | resolveWorkspacePath | `export declare function resolveWorkspacePath(cwd: string \| undefined, path: string): string` | 13 |
| function | abbreviateHomePath | `export declare function abbreviateHomePath(path: string, home?: string): string` | 20 |
| function | workspaceTitleOf | `export declare function workspaceTitleOf(path: string): string` | 27 |
| function | pathPartsOf | `export declare function pathPartsOf(path: string): {` | 37 |
| re-export | * | `export * from './file-address.ts';` | 41 |
| function | fileAddressFor | `export declare function fileAddressFor(sessionId: string, cwd: string \| undefined, path: string): string` | 52 |
| function | relativizeToCwd | `export declare function relativizeToCwd(text: string, cwd: string \| undefined): string` | 59 |

