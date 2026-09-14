# dsh-token-meter

> Replay-aware token measurement service (ctx.tokenMeter) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-token-meter/lib/types/breakdown-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | contextBreakdownStateSchema | `declare const contextBreakdownStateSchema: z.ZodObject<{` | 14 |
| type | ContextBreakdownState | `type ContextBreakdownState` | 26 |
| const | contextBreakdownProjectionDefinition | `export declare const contextBreakdownProjectionDefinition: {` | 34 |
| export-list |  | `export {};` | 97 |

## dsh-token-meter/lib/types/client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { deriveTurnTokenUsage } | `export { deriveTurnTokenUsage } from './turn-usage.ts';` | 7 |

## dsh-token-meter/lib/types/estimate.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | ROLE_OVERHEAD | `export declare const ROLE_OVERHEAD = 4` | 11 |
| function | estimateStructuralBlock | `export declare function estimateStructuralBlock(block: ContentBlock): number` | 19 |
| function | estimateContent | `export declare function estimateContent(blocks: readonly ContentBlock[]): number` | 25 |
| function | estimateSystemMessage | `export declare function estimateSystemMessage(message: Message): number` | 34 |
| function | estimateMessage | `export declare function estimateMessage(message: Message): number` | 41 |
| function | estimateToolsTokens | `export declare function estimateToolsTokens(header: EpochHeader \| undefined): number` | 48 |

## dsh-token-meter/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | TokenMeter | `export declare class TokenMeter extends Service` | 20 |
| method | TokenMeter.constructor | `constructor(ctx: Context, config?: TokenMeterConfig);` | 24 |
| default | TokenMeter | `export default TokenMeter;` | 71 |

## dsh-token-meter/lib/types/projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TokenUsageProjection | `export interface TokenUsageProjection` | 12 |
| interface | ContextPressureProjection | `export interface ContextPressureProjection` | 28 |
| interface | ContextBreakdownProjection | `export interface ContextBreakdownProjection` | 56 |

## dsh-token-meter/lib/types/route-pricing.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FileAttachmentRef | `type FileAttachmentRef` | 10 |
| interface | PricedSurface | `export interface PricedSurface` | 14 |
| function | priceSurface | `export declare function priceSurface(nodes: readonly MeterSurfaceNode[], pricing: LlmImageRequestPricing \| undefined, fileText?: (ref: FileAttachmentRef) => st` | 29 |
| export-list |  | `export {};` | 30 |

## dsh-token-meter/lib/types/surface-fold.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FileAttachmentRef | `type FileAttachmentRef` | 19 |
| interface | MeterSurfaceNode | `export interface MeterSurfaceNode` | 23 |
| interface | SurfaceTokenPlan | `export interface SurfaceTokenPlan<Node` | 38 |
| function | planSurfaceTokens | `export declare function planSurfaceTokens(nodes: readonly Pick<MeterSurfaceNode, 'seq' \| 'heuristicTokens'>[], event: SurfaceEvent): SurfaceTokenPlan` | 60 |
| function | commitSurfaceTokens | `export declare function commitSurfaceTokens<Node>(nodes: Node[], plan: SurfaceTokenPlan<Node>): void` | 67 |
| export-list |  | `export {};` | 68 |

## dsh-token-meter/lib/types/surface-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ShadowPriceClaim | `export interface ShadowPriceClaim` | 24 |
| interface | SurfaceTokensFold | `export interface SurfaceTokensFold` | 33 |
| function | foldSurfaceProjection | `export declare function foldSurfaceProjection(claim: ShadowPriceClaim \| undefined, event: SessionEvent): SurfaceTokensFold` | 57 |

## dsh-token-meter/lib/types/turn-usage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TurnTokenUsageRoute | `export interface TurnTokenUsageRoute` | 3 |
| interface | TurnTokenUsage | `export interface TurnTokenUsage` | 8 |
| function | deriveTurnTokenUsage | `export declare function deriveTurnTokenUsage(events: readonly SessionEvent[]): TurnTokenUsage \| undefined` | 32 |

## dsh-token-meter/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TokenMeterConfig | `export type TokenMeterConfig` | 10 |
| type | TokenMeasurementBaseline | `export type TokenMeasurementBaseline` | 12 |
| interface | TokenMeasurement | `export interface TokenMeasurement` | 24 |
| interface | TokenSurfaceNode | `export interface TokenSurfaceNode` | 39 |

## dsh-token-meter/lib/types/usage-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | tokenUsageStateSchema | `declare const tokenUsageStateSchema: z.ZodObject<{` | 12 |
| type | TokenUsageState | `type TokenUsageState` | 30 |
| const | contextPressureStateSchema | `declare const contextPressureStateSchema: z.ZodObject<{` | 38 |
| type | ContextPressureState | `type ContextPressureState` | 49 |
| const | tokenUsageProjectionDefinition | `export declare const tokenUsageProjectionDefinition: {` | 57 |
| const | contextPressureProjectionDefinition | `export declare const contextPressureProjectionDefinition: {` | 170 |
| export-list |  | `export {};` | 222 |

