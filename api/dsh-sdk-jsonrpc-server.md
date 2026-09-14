# dsh-sdk-jsonrpc-server

> Stdio JSON-RPC server plugin for out-of-process DeepSeek Harness SDK clients
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sdk-jsonrpc-server/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './server.ts';` | 14 |
| const | name | `export declare const name = "sdk-jsonrpc-server"` | 15 |
| const | inject | `export declare const inject: string[]` | 16 |
| interface | JsonRpcConfig | `export interface JsonRpcConfig` | 18 |
| const | Config | `export declare const Config: Schema<JsonRpcConfig>` | 28 |
| function | apply | `export declare function apply(ctx: Context, config: JsonRpcConfig): void` | 35 |

## dsh-sdk-jsonrpc-server/lib/types/server.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | HarnessSdkJsonRpcServerOptions | `export interface HarnessSdkJsonRpcServerOptions` | 10 |
| class | HarnessSdkJsonRpcServer | `export declare class HarnessSdkJsonRpcServer` | 19 |
| method | HarnessSdkJsonRpcServer.constructor | `constructor(ctx: Context, transport: JsonRpcTransportPeer, options?: HarnessSdkJsonRpcServerOptions);` | 35 |

