# dsh-mcp-client

> MCP client bridge: connects to MCP servers and registers their tools on ctx.tools
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-mcp-client/lib/types/connection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ReconnectConfig | `export interface ReconnectConfig` | 20 |
| const | RECONNECT_DEFAULTS | `export declare const RECONNECT_DEFAULTS: Required<ReconnectConfig>` | 31 |
| type | ResolvedReconnectPolicy | `export type ResolvedReconnectPolicy` | 33 |
| function | resolveReconnectPolicy | `export declare function resolveReconnectPolicy(config: ReconnectConfig \| undefined, path: string): ResolvedReconnectPolicy` | 44 |
| interface | ConnectionOutcome | `export interface ConnectionOutcome` | 46 |
| interface | ConnectionHandle | `export interface ConnectionHandle` | 51 |
| function | startConnection | `export declare function startConnection(ctx: Context, config: Config, policy: ResolvedReconnectPolicy): ConnectionHandle` | 74 |

## dsh-mcp-client/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "mcp-client"` | 21 |
| const | inject | `export declare const inject: string[]` | 23 |
| interface | StdioConfig | `export interface StdioConfig` | 25 |
| interface | StreamableHttpConfig | `export interface StreamableHttpConfig` | 50 |
| type | Config | `export type Config` | 71 |
| type | StdioConfigInput | `type StdioConfigInput` | 72 |
| type | StreamableHttpConfigInput | `type StreamableHttpConfigInput` | 73 |
| type | ConfigInput | `type ConfigInput` | 74 |
| const | Config | `export declare const Config: z<ConfigInput, Config>` | 75 |
| function | apply | `export declare function apply(ctx: Context, config: Config): Promise<void>` | 84 |

## dsh-mcp-client/lib/types/tools.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolBridgeOptions | `export interface ToolBridgeOptions` | 18 |
| type | ToolDisposers | `export type ToolDisposers` | 25 |
| type | McpResult | `export type McpResult<Structured extends JsonValue` | 27 |
| function | publicToolName | `export declare function publicToolName(serverName: string, rawName: string): string` | 45 |
| function | syncTools | `export declare function syncTools(client: Client, ctx: Context, opts: ToolBridgeOptions, previous: ToolDisposers): Promise<ToolDisposers>` | 70 |

## dsh-mcp-client/lib/types/transport.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | createTransport | `export declare function createTransport(config: Config): Transport` | 16 |

