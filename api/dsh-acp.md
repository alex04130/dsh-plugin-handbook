# dsh-acp

> Automation-only Agent Client Protocol server for driving DeepSeek Harness agents over JSON-RPC stdio
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-acp/lib/types/codec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | turnEndToStopReason | `export declare function turnEndToStopReason(reason: TurnEndReason): StopReason` | 12 |

## dsh-acp/lib/types/content.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AcpContentFailureKind | `export type AcpContentFailureKind` | 7 |
| class | AcpContentError | `export declare class AcpContentError extends Error` | 9 |
| method | AcpContentError.constructor | `constructor(message: string, kind: AcpContentFailureKind, options?: ErrorOptions);` | 17 |
| function | supportsAcpImagePrompts | `export declare function supportsAcpImagePrompts(ctx: Context, provider: string \| undefined, model: string \| undefined): Promise<boolean>` | 27 |
| function | admitAcpPrompt | `export declare function admitAcpPrompt(ctx: Context, route: ModelSelection \| undefined, prompt: readonly AcpContentBlock[], imageEnabled: boolean, signal: Abor` | 40 |
| function | assistantBlockToAcp | `export declare function assistantBlockToAcp(ctx: Context, block: ContentBlock): Promise<AcpContentBlock \| undefined>` | 49 |

## dsh-acp/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "acp"` | 14 |
| const | inject | `export declare const inject: string[]` | 16 |
| interface | AcpConfig | `export interface AcpConfig` | 18 |
| const | Config | `export declare const Config: Schema<AcpConfig>` | 28 |
| function | apply | `export declare function apply(ctx: Context, config: AcpConfig): void` | 34 |

## dsh-acp/lib/types/mcp.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | AcpMcpConfigError | `export declare class AcpMcpConfigError extends Error` | 5 |
| method | AcpMcpConfigError.constructor | `constructor(message: string);` | 6 |
| function | mountAcpMcpServers | `export declare function mountAcpMcpServers(agentCtx: Context, servers: readonly McpServer[], sessionCwd: string): Promise<void>` | 14 |

## dsh-acp/lib/types/model-control.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | AcpModelConfigError | `export declare class AcpModelConfigError extends Error` | 7 |
| method | AcpModelConfigError.constructor | `constructor(message: string);` | 8 |
| class | AcpModelControl | `export declare class AcpModelControl` | 11 |
| method | AcpModelControl.constructor | `constructor(llm: LlmRuntime, initial: ModelSelection \| undefined);` | 19 |

## dsh-acp/lib/types/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AcpSessionBuildOptions | `interface AcpSessionBuildOptions` | 8 |
| interface | CreateAcpSessionOptions | `export interface CreateAcpSessionOptions extends AcpSessionBuildOptions` | 17 |
| interface | ResumeAcpSessionOptions | `export interface ResumeAcpSessionOptions extends AcpSessionBuildOptions` | 21 |
| class | AcpSession | `export declare class AcpSession` | 29 |
| export-list |  | `export {};` | 123 |

## dsh-acp/lib/types/updates.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assistantUpdates | `export declare function assistantUpdates(ctx: Context, session: Session, event: SessionEvent<'assistant/message'>): Promise<SessionUpdate[]>` | 12 |
| function | toolCallUpdate | `export declare function toolCallUpdate(event: SessionEvent<'tool/call'>): SessionUpdate` | 18 |
| function | toolResultUpdate | `export declare function toolResultUpdate(ctx: Context, event: SessionEvent<'tool/result'>): Promise<SessionUpdate>` | 25 |

