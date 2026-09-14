# dsh-client-ui-model-selection

> Model selection over the shared model catalog, Session projection, and session.selectModel
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-model-selection/lib/types/client/ModelSelect.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ModelSelect | `export declare function ModelSelect({ locked, available, directory, load, select, t }: ModelSelectInjected & {` | 9 |

## dsh-client-ui-model-selection/lib/types/client/catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ModelCatalogState | `export interface ModelCatalogState` | 6 |
| class | ModelCatalogDirectory | `export declare class ModelCatalogDirectory` | 12 |
| method | ModelCatalogDirectory.constructor | `constructor(ctx: ClientContext);` | 22 |

## dsh-client-ui-model-selection/lib/types/client/directory.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ModelDirectoryState | `export interface ModelDirectoryState` | 13 |
| class | ModelDirectory | `export declare class ModelDirectory` | 34 |
| method | ModelDirectory.constructor | `constructor(sessions: Pick<TypertClientRemote['session'], 'selectModel'>, sessionId: SessionId, available: () => boolean, catalog: ModelCatalogDirectory, projec` | 55 |

## dsh-client-ui-model-selection/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ModelDirectory } | `export { ModelDirectory } from './directory.ts';` | 3 |
| re-export | { ModelDirectoryResolver } | `export { ModelDirectoryResolver } from './service.ts';` | 5 |
| const | inject | `export declare const inject: string[]` | 15 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 22 |

## dsh-client-ui-model-selection/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 11 |
| type | ModelKey | `export type ModelKey` | 34 |
| const | en | `export declare const en: {` | 36 |

## dsh-client-ui-model-selection/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ModelDirectoryResolver | `export declare class ModelDirectoryResolver extends Service` | 25 |
| method | ModelDirectoryResolver.constructor | `constructor(ctx: Context, config: {` | 35 |

## dsh-client-ui-model-selection/lib/types/client/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ModelSelectInjected | `export interface ModelSelectInjected` | 11 |

## dsh-client-ui-model-selection/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

