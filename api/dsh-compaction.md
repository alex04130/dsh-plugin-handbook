# dsh-compaction

> Abstract compaction service seam (ctx.compaction) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-compaction/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CompactionId | `export type CompactionId` | 3 |
| function | CompactionId | `export declare function CompactionId(id: string): CompactionId` | 9 |

## dsh-compaction/lib/types/checkpoint.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | COMPACT_CHECKPOINT_MARKER | `declare const COMPACT_CHECKPOINT_MARKER: Readonly<{` | 17 |
| type | CompactionCheckpointSource | `export type CompactionCheckpointSource` | 22 |
| function | compactCheckpointSource | `export declare function compactCheckpointSource(compactionId: CompactionId, sourceCommandId?: CommandId): CompactionCheckpointSource` | 32 |
| function | isCompactCheckpointSource | `export declare function isCompactCheckpointSource(source: MessageSource): boolean` | 38 |
| export-list |  | `export {};` | 39 |

## dsh-compaction/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CompactionId } | `export { CompactionId } from './brand.ts';` | 14 |
| re-export | { toolPairingBalancedAfter, toolPairingB | `export { toolPairingBalancedAfter, toolPairingBalancedBefore } from './tool-pairing.ts';` | 15 |
| re-export | { compactCheckpointSource, isCompactChec | `export { compactCheckpointSource, isCompactCheckpointSource } from './checkpoint.ts';` | 16 |
| type | CompactionTrigger | `export type CompactionTrigger` | 19 |
| type | ManualCompactionErrorCode | `export type ManualCompactionErrorCode` | 21 |
| class | ManualCompactionError | `export declare class ManualCompactionError extends Error` | 27 |
| method | ManualCompactionError.constructor | `constructor(code: ManualCompactionErrorCode, message: string, options?: ErrorOptions);` | 36 |
| interface | CompactionAgentContext | `export interface CompactionAgentContext` | 39 |
| interface | ManualCompactAgentContext | `export interface ManualCompactAgentContext extends CompactionAgentContext` | 51 |
| class | CompactionEngine | `export declare abstract class CompactionEngine extends Service` | 75 |
| method | CompactionEngine.constructor | `constructor(ctx: Context);` | 76 |
| default | CompactionEngine | `export default CompactionEngine;` | 132 |

## dsh-compaction/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "compaction-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-compaction/lib/types/tool-pairing.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | toolPairingBalancedBefore | `export declare function toolPairingBalancedBefore(session: Session, seq: SessionSeq): boolean` | 16 |
| function | toolPairingBalancedAfter | `export declare function toolPairingBalancedAfter(session: Session, seq: SessionSeq): boolean` | 25 |

## dsh-compaction/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CompactionResult | `export interface CompactionResult` | 102 |

