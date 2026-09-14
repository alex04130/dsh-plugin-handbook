# dsh-host-plugin-inventory

> Read-only Remote projection of current Cordis Loader plugin state
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-plugin-inventory/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-host-plugin-inventory/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 20 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 21 |

## dsh-host-plugin-inventory/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | PluginInventoryGateway | `export declare class PluginInventoryGateway extends TypertRemoteService` | 7 |
| method | PluginInventoryGateway.constructor | `constructor(ctx: Context);` | 9 |
| default | PluginInventoryGateway | `export default PluginInventoryGateway;` | 24 |

## dsh-host-plugin-inventory/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PluginEntryId | `export type PluginEntryId` | 3 |
| type | PluginFiberPhase | `export type PluginFiberPhase` | 5 |
| interface | PluginInventoryEntry | `export interface PluginInventoryEntry` | 7 |
| type | PresetPluginEnablement | `export type PresetPluginEnablement` | 16 |
| interface | AgentPresetPluginRow | `export interface AgentPresetPluginRow` | 18 |
| interface | AgentPresetPluginGroup | `export interface AgentPresetPluginGroup` | 35 |
| interface | PluginInventorySnapshot | `export interface PluginInventorySnapshot` | 50 |

