# dsh-host-frontend-static

> SPA dist server for the Web shell: owns the webserver fallback seat, serving explicit index entries and static assets with traversal rejection and 404 misses
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-frontend-static/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "frontend-static"` | 18 |
| const | inject | `export declare const inject: string[]` | 20 |
| interface | Config | `export interface Config` | 22 |
| const | Config | `export declare const Config: z<Config>` | 26 |
| function | serveStatic | `export declare function serveStatic(pathname: string, res: ServerResponse, distRoot: string, distIndex: string, authorizeIndex: () => boolean, renderIndex: () =` | 37 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 43 |

