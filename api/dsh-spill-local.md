# dsh-spill-local

> Local-filesystem implementation of the DeepSeek Harness spill storage seam (private session-scoped files)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-spill-local/lib/types/cleanup.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WarnFn | `export type WarnFn` | 2 |
| interface | SweepRoot | `export interface SweepRoot` | 4 |
| interface | SweepOptions | `export interface SweepOptions` | 17 |
| function | sweepSpillRoots | `export declare function sweepSpillRoots(options: SweepOptions): Promise<void>` | 40 |
| function | discoverDefaultRoots | `export declare function discoverDefaultRoots(warn: WarnFn, base?: string): Promise<string[]>` | 48 |
| function | gatherSweepRoots | `export declare function gatherSweepRoots(activeRoot: string, warn: WarnFn, defaultRootsBase?: string): Promise<SweepRoot[]>` | 59 |

## dsh-spill-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { discoverDefaultRoots, sweepSpillRoots  | `export { discoverDefaultRoots, sweepSpillRoots } from './cleanup.ts';` | 16 |
| re-export | { DEFAULT_ROOT_PREFIX, encodeSegment, is | `export { DEFAULT_ROOT_PREFIX, encodeSegment, isErrno, privateRoot, saveTextFile, sessionDir } from './store.ts';` | 18 |
| interface | Config | `export interface Config` | 21 |
| type | ResolvedConfig | `type ResolvedConfig` | 41 |
| class | LocalSpillStore | `export declare class LocalSpillStore extends SpillStore` | 53 |
| method | LocalSpillStore.constructor | `constructor(ctx: Context, config: Config);` | 64 |
| default | LocalSpillStore | `export default LocalSpillStore;` | 101 |

## dsh-spill-local/lib/types/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_ROOT_PREFIX | `export declare const DEFAULT_ROOT_PREFIX = "dsh-spill-"` | 9 |
| function | isErrno | `export declare function isErrno(error: unknown, code: string): boolean` | 17 |
| function | privateRoot | `export declare function privateRoot(): string` | 23 |
| function | encodeSegment | `export declare function encodeSegment(raw: string): string` | 36 |
| function | sessionDir | `export declare function sessionDir(root: string, sessionId: string): string` | 44 |
| interface | SaveTextOptions | `export interface SaveTextOptions` | 46 |
| interface | SavedText | `export interface SavedText` | 57 |
| function | saveTextFile | `export declare function saveTextFile(options: SaveTextOptions): Promise<SavedText>` | 68 |

