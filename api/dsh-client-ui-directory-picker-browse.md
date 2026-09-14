# dsh-client-ui-directory-picker-browse

> In-app directory browsing surface: the workspace directory-flow owner rendering the host's listing and creation primitives
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-directory-picker-browse/lib/types/client/DirectoryBrowser.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DirectoryBrowserProps | `export interface DirectoryBrowserProps` | 4 |
| function | DirectoryBrowser | `export declare function DirectoryBrowser({ open, listDirectory, createDirectory, onOpen, onClose, busy, t }: DirectoryBrowserProps): import("react").JSX.Element` | 34 |

## dsh-client-ui-directory-picker-browse/lib/types/client/flow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | BrowseFlowInjected | `export interface BrowseFlowInjected` | 6 |
| function | BrowseDirectoryFlow | `export declare function BrowseDirectoryFlow(props: DirectoryFlowOwnerProps & BrowseFlowInjected): ReactElement` | 23 |

## dsh-client-ui-directory-picker-browse/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 13 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 20 |

## dsh-client-ui-directory-picker-browse/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 9 |

