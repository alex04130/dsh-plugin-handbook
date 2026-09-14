# dsh-atomic-write

> Zero-dependency atomic file replacement: exclusive-create random-suffix temp + rename carrying the caller-stated permissions (writeFileAtomic)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-atomic-write/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WriteFileAtomicOptions | `export interface WriteFileAtomicOptions` | 16 |
| function | writeFileAtomic | `export declare function writeFileAtomic(filename: string, content: string, options: WriteFileAtomicOptions): Promise<void>` | 45 |
| interface | FileLockOptions | `export interface FileLockOptions` | 47 |
| function | withFileLock | `export declare function withFileLock<T>(filename: string, operation: () => Promise<T>, options?: FileLockOptions): Promise<T>` | 74 |

