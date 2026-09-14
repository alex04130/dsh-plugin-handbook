# dsh-jobs-local

> Process-local implementation of the DeepSeek Harness background job registry seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-jobs-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TASK_WAIT_TIMEOUT | `export declare const TASK_WAIT_TIMEOUT = "TASK_WAIT_TIMEOUT"` | 17 |
| interface | Config | `export interface Config` | 19 |
| class | LocalJobRegistry | `export declare class LocalJobRegistry extends JobRegistry` | 31 |
| method | LocalJobRegistry.constructor | `constructor(ctx: Context, config: Config);` | 55 |
| default | LocalJobRegistry | `export default LocalJobRegistry;` | 140 |

