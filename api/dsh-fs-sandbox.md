# dsh-fs-sandbox

> Sandbox-enforcing implementation of the DeepSeek Harness filesystem seam: fences write/edit by the per-call sandbox mode (read-only denies mutation, workspace-write contains it to the workspace + temp roots) while reads pass through
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-fs-sandbox/lib/types/containment.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isPathUnder | `export declare function isPathUnder(path: string, root: string, caseSensitive?: boolean): Promise<boolean>` | 19 |

## dsh-fs-sandbox/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Config | `export type Config` | 39 |
| class | SandboxedFileSystem | `export declare class SandboxedFileSystem extends LocalFileSystem` | 48 |
| method | SandboxedFileSystem.constructor | `constructor(ctx: Context, config: Config);` | 51 |
| default | SandboxedFileSystem | `export default SandboxedFileSystem;` | 93 |

