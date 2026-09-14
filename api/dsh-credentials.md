# dsh-credentials

> Abstract credential seam (ctx.credentials): settings carry references to secrets, providers own the values
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-credentials/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | credentialRef | `export declare function credentialRef(value: string): CredentialRef` | 18 |
| function | isCredentialRefName | `export declare function isCredentialRefName(value: string): boolean` | 28 |
| function | isCredentialKeySegment | `export declare function isCredentialKeySegment(value: string): boolean` | 38 |
| function | credentialKey | `export declare function credentialKey(scope: string, id: string): CredentialKey` | 46 |
| function | parseCredentialKey | `export declare function parseCredentialKey(value: string): CredentialKey` | 54 |
| function | credentialKeyScope | `export declare function credentialKeyScope(key: CredentialKey): string` | 62 |
| function | credentialKeyId | `export declare function credentialKeyId(key: CredentialKey): string` | 69 |
| interface | ResolvedCredential | `export interface ResolvedCredential` | 71 |
| interface | CredentialRecordInfo | `export interface CredentialRecordInfo` | 78 |
| interface | CredentialRecordEntry | `export interface CredentialRecordEntry` | 92 |
| class | CredentialProvider | `export declare abstract class CredentialProvider extends Service` | 119 |
| method | CredentialProvider.constructor | `constructor(ctx: Context);` | 120 |
| default | CredentialProvider | `export default CredentialProvider;` | 215 |

## dsh-credentials/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "credentials-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-credentials/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CredentialRef | `export type CredentialRef` | 12 |
| type | CredentialKey | `export type CredentialKey` | 26 |
| interface | ApiKeyRecord | `export interface ApiKeyRecord` | 33 |
| interface | GrantRecord | `export interface GrantRecord` | 47 |
| type | CredentialRecord | `export type CredentialRecord` | 54 |
| interface | CredentialInfo | `export interface CredentialInfo` | 60 |

