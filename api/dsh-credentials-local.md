# dsh-credentials-local

> File-backed credentials provider ($DSH_HOME/.env under the live process environment) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-credentials-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CREDENTIALS_FILENAME | `export declare const CREDENTIALS_FILENAME = ".credentials.yaml"` | 42 |
| interface | Config | `export interface Config` | 44 |
| interface | ResolvedSpec | `interface ResolvedSpec` | 55 |
| function | resolveSpec | `export declare function resolveSpec(config: Config): ResolvedSpec` | 66 |
| const | DOCUMENT_VERSION | `export declare const DOCUMENT_VERSION = 1` | 68 |
| interface | CredentialsDocument | `export interface CredentialsDocument` | 70 |
| function | parseCredentialsDocument | `export declare function parseCredentialsDocument(text: string, filename: string): CredentialsDocument` | 87 |
| function | renderFlatLayoutMigration | `export declare function renderFlatLayoutMigration(text: string): string \| undefined` | 101 |
| class | LocalCredentialProvider | `export declare class LocalCredentialProvider extends CredentialProvider` | 103 |
| method | LocalCredentialProvider.constructor | `constructor(ctx: Context, config: Config);` | 127 |
| default | LocalCredentialProvider | `export default LocalCredentialProvider;` | 199 |

