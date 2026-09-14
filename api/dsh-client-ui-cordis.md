# dsh-client-ui-cordis

> Cordis dynamic-plugin definition card: the keyed cordis_define tool row with its run/stop switch
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-cordis/lib/types/client/CordisActionRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisActionRowProps | `export type CordisActionRowProps` | 5 |
| function | CordisActionRow | `export declare function CordisActionRow({ callId, toolName, block, inspect, t }: CordisActionRowProps): import("react").JSX.Element` | 7 |

## dsh-client-ui-cordis/lib/types/client/CordisDefineRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisDefineRowProps | `export type CordisDefineRowProps` | 6 |
| function | CordisDefineRow | `export declare function CordisDefineRow({ callId, block, inspect, useInventory, useLoaded, t, }: CordisDefineRowProps): import("react").JSX.Element` | 8 |

## dsh-client-ui-cordis/lib/types/client/CordisPanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisPanelProps | `export type CordisPanelProps` | 5 |
| function | CordisPanel | `export declare function CordisPanel({ wide, useSessions, useInventory, useActiveRuns, useRunErrors, useLoaded, useRenderFailures, onApprove, onDecline, onRun, o` | 7 |

## dsh-client-ui-cordis/lib/types/client/CordisRunRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisRunRowProps | `export type CordisRunRowProps` | 6 |
| function | CordisRunRow | `export declare function CordisRunRow({ callId, block, inspect, renderSlot, useInventory, useLoaded, useRunCards, useActiveRuns, onObserveRunCard, t, }: CordisRu` | 8 |

## dsh-client-ui-cordis/lib/types/client/card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Block | `type Block` | 4 |
| type | CordisToolState | `export type CordisToolState` | 6 |
| interface | CordisDefineCard | `export interface CordisDefineCard` | 8 |
| interface | CordisRunCard | `export interface CordisRunCard` | 20 |
| interface | CordisActionCard | `export interface CordisActionCard` | 31 |
| function | cordisDefineCard | `export declare function cordisDefineCard(block: Block): CordisDefineCard` | 42 |
| function | cordisRunCard | `export declare function cordisRunCard(block: Block): CordisRunCard` | 48 |
| function | cordisActionCard | `export declare function cordisActionCard(block: Block): CordisActionCard` | 54 |
| export-list |  | `export {};` | 55 |

## dsh-client-ui-cordis/lib/types/client/dynamic-port.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisActionResult | `export type CordisActionResult` | 5 |
| interface | CordisDynamicPort | `export interface CordisDynamicPort` | 12 |
| type | CordisInventoryRow | `export type CordisInventoryRow` | 21 |

## dsh-client-ui-cordis/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 12 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 14 |

## dsh-client-ui-cordis/lib/types/client/inventory.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CordisInventorySnapshot | `export interface CordisInventorySnapshot` | 23 |
| interface | CordisInventory | `export interface CordisInventory extends HostObservable<CordisInventorySnapshot>` | 36 |
| function | createCordisInventory | `export declare function createCordisInventory(port: CordisDynamicPort, onError: (error: unknown) => void): CordisInventory` | 50 |

## dsh-client-ui-cordis/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "cordis"` | 2 |
| const | zh | `export declare const zh: {` | 4 |
| type | CordisKey | `export type CordisKey` | 57 |
| const | en | `export declare const en: {` | 65 |

## dsh-client-ui-cordis/lib/types/client/run-card-index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisToolViewKey | `export type CordisToolViewKey` | 6 |
| interface | CordisRunCardPointer | `export interface CordisRunCardPointer` | 8 |
| interface | CordisRunCardStore | `export interface CordisRunCardStore extends HostObservable<ReadonlyMap<CordisToolViewKey, CordisRunCardPointer>>` | 15 |
| class | CordisRunCardRegistry | `export declare class CordisRunCardRegistry` | 20 |
| function | cordisToolViewKey | `export declare function cordisToolViewKey(pluginId: CordisDynamicPluginId, packageId: CordisDynamicPackageId): CordisToolViewKey` | 35 |

## dsh-client-ui-cordis/lib/types/client/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CordisToolViewOwnerProps | `export interface CordisToolViewOwnerProps` | 10 |
| interface | CordisCardFace | `export interface CordisCardFace` | 31 |
| interface | CordisRunCardFace | `export interface CordisRunCardFace extends CordisCardFace` | 38 |
| interface | CordisPanelFace | `export interface CordisPanelFace` | 47 |

## dsh-client-ui-cordis/lib/types/client/status.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CordisVisibleStatus | `export type CordisVisibleStatus` | 5 |
| function | packageOf | `export declare function packageOf(row: DynamicCordisInventoryRow, packageId: CordisDynamicPackageId): DynamicCordisInventoryRow['packages'][number] \| undefined` | 12 |
| function | cordisVisibleStatus | `export declare function cordisVisibleStatus(row: DynamicCordisInventoryRow, packageId: CordisDynamicPackageId, loaded: readonly DynamicCordisLivePackage[]): Cor` | 20 |

## dsh-client-ui-cordis/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

