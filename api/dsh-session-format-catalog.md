# dsh-session-format-catalog

> Build-static first-party Session format codec and migration catalog
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-format-catalog/lib/types/current.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | validateInstalledCurrentSessionHeader | `export declare function validateInstalledCurrentSessionHeader(header: SessionFormatHeader): void` | 8 |
| function | validateInstalledCurrentSessionArtifact | `export declare function validateInstalledCurrentSessionArtifact(artifact: SessionFormatArtifact): void` | 14 |

## dsh-session-format-catalog/lib/types/generated.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | sessionFormatCatalog | `export declare const sessionFormatCatalog: import("@deepseek-ai/dsh-session-format").SessionFormatCatalog` | 6 |

## dsh-session-format-catalog/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { sessionFormatCatalog } | `export { sessionFormatCatalog } from './generated.ts';` | 2 |
| re-export | { SessionFormatUnsupportedMigrationError | `export { SessionFormatUnsupportedMigrationError } from '@deepseek-ai/dsh-session-format';` | 3 |

