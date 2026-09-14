# dsh-spill

> Abstract spill storage seam (ctx.spillStore) for the DeepSeek Harness — save oversized tool text and return a retrieval locator
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-spill/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SpillLocator } | `export { SpillLocator } from './types.ts';` | 18 |
| class | SpillStore | `export declare abstract class SpillStore extends Service` | 41 |
| method | SpillStore.constructor | `constructor(ctx: Context);` | 42 |
| default | SpillStore | `export default SpillStore;` | 50 |

## dsh-spill/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SpillLocator | `export type SpillLocator` | 16 |
| function | SpillLocator | `export declare function SpillLocator(locator: string): SpillLocator` | 23 |
| interface | SpillOwner | `export interface SpillOwner` | 31 |
| type | SpillSource | `export type SpillSource` | 39 |
| interface | SaveTextSpill | `export interface SaveTextSpill` | 55 |
| interface | SpillRef | `export interface SpillRef` | 67 |

