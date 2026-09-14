# dsh-client-connection

> Authenticated RPC transport, generation lifecycle, and browser fixture
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-connection/lib/types/api-path.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | API_PATH | `export declare const API_PATH = "/api"` | 6 |

## dsh-client-connection/lib/types/api-request-trust.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertTrustedAuthority | `export declare function assertTrustedAuthority(entry: string): void` | 30 |
| function | isTrustedApiRequest | `export declare function isTrustedApiRequest(request: ConnectionTrustRequest, trustedHosts: readonly string[]): boolean` | 37 |

## dsh-client-connection/lib/types/browser-auth.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | BrowserAuth | `export declare class BrowserAuth` | 9 |

## dsh-client-connection/lib/types/client/api.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { RpcId, transportError } | `export { RpcId, transportError } from '../rpc.ts';` | 3 |
| function | resultOf | `export declare function resultOf<T>(response: RpcResponse<T>): RpcResult<T>` | 13 |

## dsh-client-connection/lib/types/client/connection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConnectionHostInfo | `export interface ConnectionHostInfo` | 5 |
| interface | ConnectionGeneration | `export interface ConnectionGeneration` | 10 |
| type | ConnectionState | `export type ConnectionState` | 17 |
| interface | ConnectionSinks | `export interface ConnectionSinks` | 19 |
| type | ConnectionGenerationSource | `export type ConnectionGenerationSource` | 36 |
| class | ConnectionController | `export declare class ConnectionController` | 42 |
| method | ConnectionController.constructor | `constructor(source: ConnectionGenerationSource, sinks?: ConnectionSinks, config?: ConnectionRecoveryConfig);` | 54 |

## dsh-client-connection/lib/types/client/fixture.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FixtureAssistantStreamFrame | `export type FixtureAssistantStreamFrame` | 6 |
| interface | FixtureOptions | `export interface FixtureOptions` | 34 |
| interface | FixtureWorld | `export interface FixtureWorld` | 49 |
| function | createFixtureFaces | `export declare function createFixtureFaces(options?: FixtureOptions): FixtureWorld` | 58 |
| function | createFixtureConnectionRpc | `export declare function createFixtureConnectionRpc(): ClientConnectionRpc` | 63 |

## dsh-client-connection/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { RpcId, transportError, } | `export { RpcId, transportError, } from './api.ts';` | 17 |
| interface | ConnectionGenerationState | `export interface ConnectionGenerationState` | 22 |
| interface | ConnectionStateSource | `export interface ConnectionStateSource` | 29 |
| const | inject | `export declare const inject: string[]` | 36 |
| interface | ClientTransportHooks | `export interface ClientTransportHooks` | 43 |
| interface | ConnectionHandle | `export interface ConnectionHandle` | 68 |
| interface | ConnectionLoop | `export interface ConnectionLoop` | 100 |
| function | apply | `export declare function apply(ctx: Context): void` | 108 |

## dsh-client-connection/lib/types/client/random-uuid.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | randomUuid | `export declare function randomUuid(): string` | 6 |

## dsh-client-connection/lib/types/client/rpc.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RpcFetch | `export type RpcFetch` | 4 |
| type | RpcStreamOpen | `export type RpcStreamOpen` | 6 |
| function | createWebConnectionRpc | `export declare function createWebConnectionRpc(doFetch?: RpcFetch, openStream?: RpcStreamOpen): ClientConnectionRpc` | 13 |

## dsh-client-connection/lib/types/http-bridge.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_MAX_REQUEST_BODY_BYTES | `export declare const DEFAULT_MAX_REQUEST_BODY_BYTES: number` | 11 |
| function | bridge | `export declare function bridge(req: IncomingMessage, res: ServerResponse, apiHandler: ConnectionFetchHandler, maxRequestBodyBytes?: number): Promise<void>` | 20 |

## dsh-client-connection/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { RpcId, transportError } | `export { RpcId, transportError } from './rpc.ts';` | 6 |
| re-export | { clientRequestSchema, rpcErrorSchema, r | `export { clientRequestSchema, rpcErrorSchema, rpcIdSchema, rpcMessageSchema, rpcResultSchema, serverResponseSchema, } from './rpc-schema.ts';` | 7 |
| re-export | { HostConnectionService } | `export { HostConnectionService } from './rpc-host.ts';` | 8 |
| re-export | { API_PATH } | `export { API_PATH } from './api-path.ts';` | 9 |
| const | name | `export declare const name = "client-connection"` | 11 |
| const | inject | `export declare const inject: string[]` | 13 |
| interface | ConnectionConfig | `export interface ConnectionConfig` | 15 |
| const | Config | `export declare const Config: z<ConnectionConfig>` | 32 |
| function | apply | `export declare function apply(ctx: Context, config?: ConnectionConfig): Promise<void>` | 40 |

## dsh-client-connection/lib/types/loopback-hostname.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isLoopbackHostname | `export declare function isLoopbackHostname(hostname: string): boolean` | 11 |

## dsh-client-connection/lib/types/recovery-config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConnectionRecoveryConfig | `export interface ConnectionRecoveryConfig` | 4 |
| const | ConnectionRecoveryConfigSchema | `export declare const ConnectionRecoveryConfigSchema: z<ConnectionRecoveryConfig>` | 20 |
| function | resolveConnectionConfig | `export declare function resolveConnectionConfig(config?: unknown): Required<ConnectionRecoveryConfig>` | 26 |

## dsh-client-connection/lib/types/rpc-host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | HostConnectionService | `export declare class HostConnectionService extends Service implements HostConnectionHandle` | 12 |
| method | HostConnectionService.constructor | `constructor(ctx: Context, trustedHosts: readonly string[], browserAuth: BrowserAuth);` | 23 |

## dsh-client-connection/lib/types/rpc-schema.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | rpcIdSchema | `export declare const rpcIdSchema: z.ZodType<RpcId>` | 5 |
| const | rpcErrorSchema | `export declare const rpcErrorSchema: z.ZodObject<{` | 7 |
| function | rpcResultSchema | `export declare function rpcResultSchema<T>(value: z.ZodType<T>): z.ZodType<{` | 17 |
| const | clientRequestSchema | `export declare const clientRequestSchema: z.ZodType<ClientRequest>` | 25 |
| const | serverResponseSchema | `export declare const serverResponseSchema: z.ZodType<ServerResponse>` | 27 |
| const | rpcMessageSchema | `export declare const rpcMessageSchema: z.ZodType<RpcMessage>` | 29 |

## dsh-client-connection/lib/types/rpc.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RpcId | `export type RpcId` | 4 |
| function | RpcId | `export declare function RpcId(id: string): RpcId` | 10 |
| interface | ConnectionRpcFailure | `export interface ConnectionRpcFailure` | 12 |
| type | ConnectionRpcResult | `export type ConnectionRpcResult<T>` | 18 |
| type | RpcResult | `export type RpcResult<T>` | 26 |
| function | transportError | `export declare function transportError<T>(error: unknown): RpcResult<T>` | 32 |
| interface | RpcRequest | `export interface RpcRequest<P>` | 34 |
| interface | RpcResponse | `export interface RpcResponse<T>` | 39 |
| interface | ClientRequest | `export interface ClientRequest` | 44 |
| interface | ServerResponse | `export interface ServerResponse` | 51 |
| type | RpcMessage | `export type RpcMessage` | 57 |
| interface | ConnectionTrustRequest | `export interface ConnectionTrustRequest` | 59 |
| type | ConnectionRequestRejection | `export type ConnectionRequestRejection` | 64 |
| interface | ConnectionIndexRequest | `export interface ConnectionIndexRequest extends ConnectionTrustRequest` | 66 |
| interface | ConnectionIndexResponse | `export interface ConnectionIndexResponse` | 71 |
| type | ConnectionRpcHandler | `export type ConnectionRpcHandler` | 76 |
| type | ConnectionRpcEndpointMatcher | `export type ConnectionRpcEndpointMatcher` | 78 |
| type | ConnectionFetchMethod | `export type ConnectionFetchMethod` | 80 |
| type | ConnectionRequestBodyMode | `export type ConnectionRequestBodyMode` | 82 |
| interface | ConnectionFetchRoute | `export interface ConnectionFetchRoute` | 84 |
| interface | HostConnectionFetch | `export interface HostConnectionFetch` | 95 |
| interface | HostConnectionRpc | `export interface HostConnectionRpc` | 104 |
| interface | HostConnectionHandle | `export interface HostConnectionHandle` | 122 |
| interface | ConnectionFetchHandler | `export interface ConnectionFetchHandler` | 155 |
| interface | ClientConnectionRpc | `export interface ClientConnectionRpc` | 173 |

