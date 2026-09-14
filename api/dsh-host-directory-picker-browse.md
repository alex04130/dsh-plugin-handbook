# dsh-host-directory-picker-browse

> In-app browsing backend of the directory-picker seam (listing/creation primitives over the host filesystem)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-directory-picker-browse/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | fullyQualified | `export declare function fullyQualified(path: string, platform?: NodeJS.Platform): boolean` | 25 |
| interface | ListingCandidate | `export interface ListingCandidate` | 27 |
| function | boundedInsert | `export declare function boundedInsert(window: ListingCandidate[], candidate: ListingCandidate, keep: number): boolean` | 45 |
| function | raceAbort | `export declare function raceAbort<T>(operation: Promise<T>, signal: AbortSignal \| undefined): Promise<T>` | 56 |
| interface | Config | `export interface Config` | 58 |
| default | class | `export default class BrowseDirectoryPicker extends DirectoryPicker {` | 63 |

