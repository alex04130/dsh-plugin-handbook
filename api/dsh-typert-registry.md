# dsh-typert-registry

> Runtime registry for generated package reflection and Zod schemas
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-typert-registry/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 4 |
| function | apply | `export declare function apply(ctx: Context): void` | 9 |

## dsh-typert-registry/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { default, TypertRegistry, typertEndpoin | `export { default, TypertRegistry, typertEndpoint, typertKey, typertPackageKey } from './service.ts';` | 5 |

## dsh-typert-registry/lib/types/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | typertKey | `export declare function typertKey(packageName: string, name: string): string` | 17 |
| function | typertPackageKey | `export declare function typertPackageKey(packageName: string, face: TypertFace): string` | 24 |
| function | typertEndpoint | `export declare function typertEndpoint(descriptor: Pick<InvocationDescriptor, 'namespace' \| 'method'>): string` | 30 |
| class | TypertRegistry | `export declare class TypertRegistry extends Service implements TypertRegistryContract` | 36 |
| method | TypertRegistry.constructor | `constructor(ctx: Context);` | 43 |
| default | TypertRegistry | `export default TypertRegistry;` | 102 |

## dsh-typert-registry/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TypertFace | `export type TypertFace` | 9 |
| interface | TypertDocTag | `export interface TypertDocTag` | 11 |
| interface | TypertDocumentation | `export interface TypertDocumentation` | 18 |
| interface | TypertMemberModel | `export interface TypertMemberModel` | 25 |
| interface | TypertTypeModel | `export interface TypertTypeModel` | 33 |
| interface | TypertServiceModel | `export interface TypertServiceModel extends TypertDocumentation` | 38 |
| interface | TypertEventModel | `export interface TypertEventModel extends TypertDocumentation` | 45 |
| interface | TypertObjectModel | `export interface TypertObjectModel extends TypertDocumentation` | 51 |
| interface | TypertPackageModel | `export interface TypertPackageModel` | 58 |
| interface | TypertSchema | `export interface TypertSchema` | 64 |
| interface | TypertContribution | `export interface TypertContribution` | 69 |
| interface | TypertSchemaRecord | `export interface TypertSchemaRecord extends TypertSchema` | 78 |
| interface | TypertPackageRecord | `export interface TypertPackageRecord` | 84 |
| interface | TypertSchemaFilter | `export interface TypertSchemaFilter` | 91 |
| interface | TypertPackageFilter | `export interface TypertPackageFilter` | 96 |

