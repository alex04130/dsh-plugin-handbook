# dsh-typert-loader

> Loader integration for generated Typert package contributions
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-typert-loader/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_HOST_EXPORT | `export declare const TYPERT_HOST_EXPORT = "./typert"` | 31 |
| const | name | `export declare const name = "typert-loader"` | 33 |
| const | inject | `export declare const inject: string[]` | 35 |
| interface | Config | `export interface Config` | 37 |
| const | Config | `export declare const Config: z<Config>` | 42 |
| function | validateTypertManifest | `export declare function validateTypertManifest(pkgName: string, exported: unknown): TypertContribution` | 52 |
| function | apply | `export declare function apply(ctx: Context, config: Config): Promise<void>` | 59 |

