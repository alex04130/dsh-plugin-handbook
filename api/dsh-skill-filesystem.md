# dsh-skill-filesystem

> Local filesystem skill provider for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-skill-filesystem/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "skill-filesystem"` | 14 |
| const | inject | `export declare const inject: string[]` | 15 |
| interface | Config | `export interface Config` | 17 |
| const | Config | `export declare const Config: Schema<Config>` | 43 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 45 |
| class | FileSystemSkillProvider | `export declare class FileSystemSkillProvider implements SkillProvider` | 47 |
| method | FileSystemSkillProvider.constructor | `constructor(ctx: Context, control: SkillProviderControl, config?: Config);` | 57 |

## dsh-skill-filesystem/node_modules/chokidar/handler.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Path | `export type Path` | 4 |
| const | STR_DATA | `export declare const STR_DATA = "data"` | 5 |
| const | STR_END | `export declare const STR_END = "end"` | 6 |
| const | STR_CLOSE | `export declare const STR_CLOSE = "close"` | 7 |
| const | EMPTY_FN | `export declare const EMPTY_FN: () => void` | 8 |
| const | IDENTITY_FN | `export declare const IDENTITY_FN: (val: unknown) => unknown` | 9 |
| const | isWindows | `export declare const isWindows: boolean` | 10 |
| const | isMacos | `export declare const isMacos: boolean` | 11 |
| const | isLinux | `export declare const isLinux: boolean` | 12 |
| const | isFreeBSD | `export declare const isFreeBSD: boolean` | 13 |
| const | isIBMi | `export declare const isIBMi: boolean` | 14 |
| const | EVENTS | `export declare const EVENTS: {` | 15 |
| type | EventName | `export type EventName` | 26 |
| type | FsWatchContainer | `export type FsWatchContainer` | 27 |
| interface | WatchHandlers | `export interface WatchHandlers` | 34 |
| class | NodeFsHandler | `export declare class NodeFsHandler` | 42 |
| method | NodeFsHandler.constructor | `constructor(fsW: FSWatcher);` | 45 |

## dsh-skill-filesystem/node_modules/chokidar/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AWF | `export type AWF` | 6 |
| type | BasicOpts | `type BasicOpts` | 10 |
| type | Throttler | `export type Throttler` | 23 |
| type | ChokidarOptions | `export type ChokidarOptions` | 28 |
| type | FSWInstanceOptions | `export type FSWInstanceOptions` | 32 |
| type | ThrottleType | `export type ThrottleType` | 36 |
| type | EmitArgs | `export type EmitArgs` | 37 |
| type | EmitErrorArgs | `export type EmitErrorArgs` | 38 |
| type | EmitArgsWithName | `export type EmitArgsWithName` | 39 |
| type | MatchFunction | `export type MatchFunction` | 40 |
| interface | MatcherObject | `export interface MatcherObject` | 41 |
| type | Matcher | `export type Matcher` | 45 |
| class | DirEntry | `declare class DirEntry` | 49 |
| method | DirEntry.constructor | `constructor(dir: Path, removeWatcher: (dir: string, base: string) => void);` | 53 |
| class | WatchHelper | `export declare class WatchHelper` | 60 |
| method | WatchHelper.constructor | `constructor(path: string, follow: boolean, fsw: FSWatcher);` | 68 |
| interface | FSWatcherEventMap | `export interface FSWatcherEventMap` | 73 |
| class | FSWatcher | `export declare class FSWatcher extends EventEmitter<FSWatcherEventMap>` | 92 |
| method | FSWatcher.constructor | `constructor(_opts?: ChokidarOptions);` | 111 |
| function | watch | `export declare function watch(paths: string \| string[], options?: ChokidarOptions): FSWatcher` | 212 |
| const | _default | `declare const _default: {` | 213 |
| default | _default | `export default _default;` | 217 |

## dsh-skill-filesystem/node_modules/readdirp/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Path | `export type Path` | 19 |
| interface | EntryInfo | `export interface EntryInfo` | 21 |
| type | PathOrDirent | `export type PathOrDirent` | 29 |
| type | Tester | `export type Tester` | 31 |
| type | Predicate | `export type Predicate` | 32 |
| const | EntryTypes | `export declare const EntryTypes: {` | 33 |
| type | EntryType | `export type EntryType` | 39 |
| type | ReaddirpOptions | `export type ReaddirpOptions` | 48 |
| interface | DirEntry | `export interface DirEntry` | 59 |
| interface | PendingDir | `interface PendingDir` | 66 |
| class | ReaddirpStream | `export declare class ReaddirpStream extends Readable` | 71 |
| method | ReaddirpStream.constructor | `constructor(options?: Partial<ReaddirpOptions>);` | 95 |
| function | readdirp | `export declare function readdirp(root: Path, options?: Partial<ReaddirpOptions>): ReaddirpStream` | 110 |
| function | readdirpPromise | `export declare function readdirpPromise(root: Path, options?: Partial<ReaddirpOptions>): Promise<EntryInfo[]>` | 116 |
| default | readdirp | `export default readdirp;` | 117 |

