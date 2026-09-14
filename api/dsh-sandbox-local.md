# dsh-sandbox-local

> Local process-sandbox backends for the DeepSeek Harness sandbox seam: bwrap, the npm-distributed landlock-run launcher, macOS Seatbelt, or the Windows ACL restricted-token runner — functionally probed, fail-closed
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sandbox-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 27 |
| interface | SandboxInternals | `export interface SandboxInternals` | 50 |
| type | SelectedRunner | `type SelectedRunner` | 75 |
| class | LocalSandboxProvider | `export declare class LocalSandboxProvider extends SandboxProvider` | 87 |
| method | LocalSandboxProvider.constructor | `constructor(ctx: Context, config: Config);` | 105 |
| default | LocalSandboxProvider | `export default LocalSandboxProvider;` | 183 |

## dsh-sandbox-local/lib/types/profiles.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | bwrapProfileArgs | `export declare function bwrapProfileArgs(policy: SandboxPolicy): string[]` | 12 |
| function | landlockProfileArgs | `export declare function landlockProfileArgs(policy: SandboxPolicy): string[]` | 18 |
| function | seatbeltProfileArgs | `export declare function seatbeltProfileArgs(policy: SandboxPolicy): string[]` | 27 |

