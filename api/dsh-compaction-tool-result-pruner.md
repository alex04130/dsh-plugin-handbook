# dsh-compaction-tool-result-pruner

> Replay-safe model-free head/middle/tail pruning for tool-result surface nodes
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-compaction-tool-result-pruner/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PRUNE_MARKER | `export declare const PRUNE_MARKER = "\n\n[... tool result middle pruned ...]\n\n"` | 4 |
| const | DEFAULTS | `export declare const DEFAULTS: ResolvedConfig` | 6 |
| function | codePointLength | `export declare function codePointLength(text: string): number` | 12 |
| function | resolveConfig | `export declare function resolveConfig(config?: ToolResultPruneConfig): ResolvedConfig` | 18 |

## dsh-compaction-tool-result-pruner/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { codePointLength, DEFAULTS, PRUNE_MARKE | `export { codePointLength, DEFAULTS, PRUNE_MARKER, resolveConfig } from './config.ts';` | 11 |
| class | ToolResultPruner | `export declare class ToolResultPruner extends Service` | 19 |
| method | ToolResultPruner.constructor | `constructor(ctx: Context, config?: ToolResultPruneConfig);` | 24 |
| default | ToolResultPruner | `export default ToolResultPruner;` | 53 |

## dsh-compaction-tool-result-pruner/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolResultPruneConfig | `export interface ToolResultPruneConfig` | 4 |
| interface | ResolvedConfig | `export interface ResolvedConfig` | 13 |
| interface | PrunedEntry | `export interface PrunedEntry` | 19 |
| interface | PruneResult | `export interface PruneResult` | 32 |

