# dsh-sdk-protocol

> Shared wire protocol for the DeepSeek Harness SDK runtime: the newline-delimited JSON-RPC stdio transport and the named request, result, and notification types spoken between the runtime server and SDK clients
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sdk-protocol/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { JsonRpcLineTransport, JsonRpcResponseE | `export { JsonRpcLineTransport, JsonRpcResponseError } from './transport.ts';` | 10 |

## dsh-sdk-protocol/lib/types/transport.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RequestHandler | `type RequestHandler` | 9 |
| type | NotificationHandler | `type NotificationHandler` | 10 |
| class | JsonRpcResponseError | `export declare class JsonRpcResponseError extends Error` | 12 |
| method | JsonRpcResponseError.constructor | `constructor(code: number \| undefined, message: string, data?: unknown \| undefined);` | 20 |
| interface | JsonRpcTransportPeer | `export interface JsonRpcTransportPeer` | 26 |
| class | JsonRpcLineTransport | `export declare class JsonRpcLineTransport implements JsonRpcTransportPeer` | 48 |
| method | JsonRpcLineTransport.constructor | `constructor(input: Readable, output: Writable);` | 57 |
| export-list |  | `export {};` | 103 |

## dsh-sdk-protocol/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | InitializeParams | `export interface InitializeParams` | 14 |
| interface | InitializeResult | `export interface InitializeResult` | 27 |
| interface | SessionPromptParams | `export interface SessionPromptParams` | 35 |
| interface | SdkEncodedImageBlock | `export interface SdkEncodedImageBlock` | 42 |
| type | SdkPromptContentBlock | `export type SdkPromptContentBlock` | 50 |
| interface | SessionPromptResult | `export interface SessionPromptResult` | 52 |
| type | SdkRunStatus | `export type SdkRunStatus` | 57 |
| interface | SessionEventNotification | `export interface SessionEventNotification` | 59 |
| interface | SessionStatusNotification | `export interface SessionStatusNotification` | 66 |
| interface | SubagentStartedNotification | `export interface SubagentStartedNotification` | 73 |
| interface | SubagentFinishedNotification | `export interface SubagentFinishedNotification` | 80 |
| interface | HarnessSdkNotificationMap | `export interface HarnessSdkNotificationMap` | 97 |
| interface | HarnessSdkRequestMap | `export interface HarnessSdkRequestMap` | 104 |

