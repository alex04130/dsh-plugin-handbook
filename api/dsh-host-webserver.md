# dsh-host-webserver

> Web route-registration plugin: HTTP and upgrade routes, index transform taps, and static dist fallback; knows no harness concepts
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-webserver/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { renderIndexInjections } | `export { renderIndexInjections } from './injections.ts';` | 13 |
| type | WebRouteKind | `export type WebRouteKind` | 31 |
| interface | WebRoute | `export interface WebRoute` | 33 |
| interface | WebUpgradeRoute | `export interface WebUpgradeRoute` | 41 |
| interface | Config | `export interface Config` | 48 |
| class | WebServer | `export declare class WebServer extends Service` | 67 |
| method | WebServer.constructor | `constructor(ctx: Context, config: Config);` | 79 |
| default | WebServer | `export default WebServer;` | 141 |

## dsh-host-webserver/lib/types/injections.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | IndexInjectionPlacement | `export type IndexInjectionPlacement` | 11 |
| type | IndexInjection | `export type IndexInjection` | 13 |
| function | renderIndexInjections | `export declare function renderIndexInjections(html: string, rows: readonly IndexInjection[]): string` | 60 |

