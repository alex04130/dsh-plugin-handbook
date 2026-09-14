# dsh-settings-file

> File-backed settings provider (settings.yaml) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-settings-file/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 13 |
| type | SettingsFormat | `type SettingsFormat` | 24 |
| interface | ResolvedSpec | `interface ResolvedSpec` | 26 |
| function | resolveSpec | `export declare function resolveSpec(config: Config): ResolvedSpec` | 38 |
| class | FileSettingsProvider | `export declare class FileSettingsProvider extends SettingsProvider` | 40 |
| method | FileSettingsProvider.constructor | `constructor(ctx: Context, config: Config);` | 61 |
| default | FileSettingsProvider | `export default FileSettingsProvider;` | 104 |

