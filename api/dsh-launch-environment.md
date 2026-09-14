# dsh-launch-environment

> Immutable DeepSeek Harness launch environment that records which layer supplied each value
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-launch-environment/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | LaunchEnvironmentSource | `export type LaunchEnvironmentSource` | 14 |
| interface | LaunchEnvironmentEntry | `export interface LaunchEnvironmentEntry` | 16 |
| interface | LaunchEnvironmentSnapshot | `export interface LaunchEnvironmentSnapshot` | 30 |
| interface | LaunchEnvironmentLayerInput | `export interface LaunchEnvironmentLayerInput` | 47 |
| function | createLaunchEnvironmentSnapshot | `export declare function createLaunchEnvironmentSnapshot(layers: readonly LaunchEnvironmentLayerInput[]): LaunchEnvironmentSnapshot` | 58 |
| const | DSH_LAUNCH_ENVIRONMENT_KEY | `export declare const DSH_LAUNCH_ENVIRONMENT_KEY = "launchEnvironment"` | 60 |
| function | launchEnvironmentOf | `export declare function launchEnvironmentOf(ctx: Context): LaunchEnvironmentSnapshot` | 67 |
| function | launchedThroughSsh | `export declare function launchedThroughSsh(environment: LaunchEnvironmentSnapshot): boolean` | 74 |

