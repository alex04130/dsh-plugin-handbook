# dsh-client-resources

> Unified client resource model: protocol-registered providers turn URL addresses into live values, consumed through the useResource global standard hook
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-resources/lib/types/client/contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ResourceProtocol | `export type ResourceProtocol` | 33 |
| type | ResourceStatus | `export type ResourceStatus` | 40 |
| interface | ResourceSnapshot | `export interface ResourceSnapshot<Value>` | 42 |
| type | UseResource | `export type UseResource` | 54 |
| interface | ResourceOpenContext | `export interface ResourceOpenContext` | 56 |
| interface | ResourceProvider | `export interface ResourceProvider<P extends ResourceProtocol>` | 61 |
| interface | Resources | `export interface Resources` | 82 |

## dsh-client-resources/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 9 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 15 |

## dsh-client-resources/lib/types/client/resources.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | RESOURCE_SCHEME | `export declare const RESOURCE_SCHEME = "dsh-resource"` | 19 |
| function | protocolOf | `export declare function protocolOf(address: string): string \| undefined` | 28 |
| class | ResourceRegistry | `export declare class ResourceRegistry implements Resources` | 30 |
| method | ResourceRegistry.constructor | `constructor(ctx: Context);` | 35 |

## dsh-client-resources/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

