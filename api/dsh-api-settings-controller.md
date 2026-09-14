# dsh-api-settings-controller

> Remote owner for the configuration surfaces over the settings-domain seams
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-api-settings-controller/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-api-settings-controller/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 44 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 45 |

## dsh-api-settings-controller/lib/types/credentials.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | CredentialsController | `export declare class CredentialsController extends TypertRemoteService` | 23 |
| method | CredentialsController.constructor | `constructor(ctx: Context);` | 25 |
| default | CredentialsController | `export default CredentialsController;` | 62 |

## dsh-api-settings-controller/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CredentialsController } | `export { CredentialsController } from './credentials.ts';` | 15 |
| interface | Config | `export interface Config` | 18 |
| interface | SettingsControllerInternals | `export interface SettingsControllerInternals` | 23 |
| class | SettingsController | `export declare class SettingsController extends TypertRemoteService` | 41 |
| method | SettingsController.constructor | `constructor(ctx: Context, config?: Config, internals?: SettingsControllerInternals);` | 52 |
| default | SettingsController | `export default SettingsController;` | 113 |

## dsh-api-settings-controller/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsDocumentOpenValue | `export interface SettingsDocumentOpenValue` | 38 |
| type | AgentPresetDirectoryOpenValue | `export type AgentPresetDirectoryOpenValue` | 42 |

