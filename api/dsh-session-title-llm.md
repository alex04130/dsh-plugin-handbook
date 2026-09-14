# dsh-session-title-llm

> Shared LLM generation policy for DeepSeek Harness session-title providers
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-title-llm/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionTitleLlmRequestEventData | `export interface SessionTitleLlmRequestEventData` | 13 |
| const | SESSION_TITLE_TIMEOUT_CODE | `export declare const SESSION_TITLE_TIMEOUT_CODE = "SESSION_TITLE_TIMEOUT"` | 34 |
| interface | SessionTitleLlmConfig | `export interface SessionTitleLlmConfig` | 36 |
| interface | ResolvedSessionTitleLlmConfig | `export interface ResolvedSessionTitleLlmConfig extends SessionTitleLlmConfig` | 53 |
| const | SessionTitleLlmConfigFields | `export declare const SessionTitleLlmConfigFields: {` | 56 |
| const | SessionTitleLlmConfigSchema | `export declare const SessionTitleLlmConfigSchema: z<SessionTitleLlmConfig>` | 66 |
| function | resolveSessionTitleLlmConfig | `export declare function resolveSessionTitleLlmConfig(config: SessionTitleLlmConfig): ResolvedSessionTitleLlmConfig` | 72 |
| type | SessionTitleLlmMessageSelector | `export type SessionTitleLlmMessageSelector` | 74 |
| function | registerSessionTitleLlmProvider | `export declare function registerSessionTitleLlmProvider(ctx: Context, config: SessionTitleLlmConfig, id: string, automatic: SessionTitleAutomaticMode, selectMes` | 83 |
| function | generateSessionTitleWithLlm | `export declare function generateSessionTitleWithLlm(ctx: Context, config: ResolvedSessionTitleLlmConfig, request: SessionTitleProviderRequest, selectedMessages:` | 93 |

