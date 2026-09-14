# cordis-plugin-include

> Include files in cordis configurations
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## cordis-plugin-include/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | entryListSchema | `export declare const entryListSchema: yaml.Schema` | 10 |
| function | applyEntryPatches | `export declare function applyEntryPatches(data: EntryOptions[], patches: PatchOptions[] \| undefined, warn: (message: string, ...args: any[]) => void): EntryOpt` | 26 |
| interface | PatchOptions | `export interface PatchOptions` | 28 |
| class | Include | `export declare class Include extends EntryTree` | 55 |
| method | Include.constructor | `constructor(ctx: Context, config: Include.Config);` | 68 |
| default | Include | `export default Include;` | 98 |

