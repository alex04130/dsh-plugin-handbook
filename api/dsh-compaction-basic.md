# dsh-compaction-basic

> Token-meter-driven compaction policy and LLM summarization backend for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-compaction-basic/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | TargetPressureConfigError | `export declare class TargetPressureConfigError extends Error` | 9 |
| method | TargetPressureConfigError.constructor | `constructor(targetKey: string, message: string);` | 15 |
| function | resolveConfig | `export declare function resolveConfig(config?: BasicCompactionConfig): ResolvedConfig` | 22 |
| function | resolveTargetPolicy | `export declare function resolveTargetPolicy(config: ResolvedConfig, target: Pick<LlmCallConfig, 'provider' \| 'model'>): ResolvedTargetPolicy` | 29 |
| function | resolveCompactSpec | `export declare function resolveCompactSpec(policy: ResolvedTargetPolicy, contextWindow: number): ResolvedCompactSpec` | 36 |

## dsh-compaction-basic/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | BasicCompactionEngine | `export declare class BasicCompactionEngine extends CompactionEngine` | 24 |
| method | BasicCompactionEngine.constructor | `constructor(ctx: Context, config?: BasicCompactionConfig);` | 32 |
| default | BasicCompactionEngine | `export default BasicCompactionEngine;` | 83 |

## dsh-compaction-basic/lib/types/region.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RegionDependencies | `interface RegionDependencies` | 13 |
| interface | CompactionTransactionOptions | `interface CompactionTransactionOptions` | 17 |
| function | selectCompactableRange | `export declare function selectCompactableRange(session: Session, measurement: TokenMeasurement, retainTokens: number): {` | 37 |
| function | compactSurfaceRegion | `export declare function compactSurfaceRegion(dependencies: RegionDependencies, session: Session, start: SessionSeq, end: SessionSeq, agent: Agent, options: Comp` | 57 |
| function | assertNoActiveCompaction | `export declare function assertNoActiveCompaction(session: Session, stage: string): void` | 63 |
| export-list |  | `export {};` | 64 |

## dsh-compaction-basic/lib/types/summarizer.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SummaryConfig | `interface SummaryConfig` | 9 |
| interface | SummarizationInput | `export interface SummarizationInput` | 20 |
| type | SummaryResult | `export type SummaryResult` | 27 |
| function | summarizeWithLlm | `export declare function summarizeWithLlm(ctx: Context, config: SummaryConfig, input: SummarizationInput, agent: Agent, signal?: AbortSignal): Promise<SummaryRes` | 56 |
| function | frameSummary | `export declare function frameSummary(summary: readonly ContentBlock[]): ContentBlock[]` | 62 |
| export-list |  | `export {};` | 63 |

## dsh-compaction-basic/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CompactionPolicyConfig | `export interface CompactionPolicyConfig` | 8 |
| interface | ModelCompactPolicyConfig | `export interface ModelCompactPolicyConfig extends CompactionPolicyConfig` | 27 |
| interface | BasicCompactionConfig | `export interface BasicCompactionConfig extends CompactionPolicyConfig` | 34 |
| type | ResolvedRetention | `export type ResolvedRetention` | 41 |
| interface | ResolvedPolicyFields | `interface ResolvedPolicyFields` | 49 |
| type | ResolvedConfig | `export type ResolvedConfig` | 58 |
| type | ResolvedTargetPolicy | `export type ResolvedTargetPolicy` | 63 |
| type | ResolvedCompactSpec | `export type ResolvedCompactSpec` | 67 |
| export-list |  | `export {};` | 72 |

