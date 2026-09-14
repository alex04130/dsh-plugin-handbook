# dsh-invariants

> Registry service for package-owned DeepSeek Harness runtime invariants
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-invariants/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 12 |
| type | InvariantFailure | `export type InvariantFailure` | 25 |
| interface | InvariantInstaller | `export interface InvariantInstaller` | 27 |
| class | InvariantError | `export declare class InvariantError extends Error` | 39 |
| method | InvariantError.constructor | `constructor(packageName: string, message: string);` | 49 |
| class | InvariantRegistry | `export declare class InvariantRegistry extends Service` | 57 |
| method | InvariantRegistry.constructor | `constructor(ctx: Context, config?: Config);` | 69 |
| default | InvariantRegistry | `export default InvariantRegistry;` | 82 |

