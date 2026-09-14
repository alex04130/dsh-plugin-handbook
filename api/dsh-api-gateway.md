# dsh-api-gateway

> Typert Remote Host dispatcher and Client API endpoint
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-api-gateway/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { RemoteStreamCarrierError } | `export { RemoteStreamCarrierError } from './stream-client.ts';` | 10 |
| re-export | { RemoteJournalStream } | `export { RemoteJournalStream } from './journal-stream.ts';` | 11 |
| re-export | { RemoteStream } | `export { RemoteStream } from './remote-stream.ts';` | 13 |
| re-export | { RemoteSnapshotStream } | `export { RemoteSnapshotStream } from './snapshot-stream.ts';` | 15 |
| interface | ClientRemote | `export interface ClientRemote extends TypertClientRemote` | 18 |
| interface | RemoteHostFacts | `export interface RemoteHostFacts` | 33 |
| const | inject | `export declare const inject: string[]` | 46 |
| function | apply | `export declare function apply(ctx: Context): void` | 51 |
| function | isRemoteFailure | `export declare function isRemoteFailure(error: unknown): error is RemoteFailure` | 59 |

## dsh-api-gateway/lib/types/client/journal-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RemoteJournalFrame | `export type RemoteJournalFrame<Entry, Cursor, Page, Notification` | 5 |
| type | RemoteJournalChange | `export type RemoteJournalChange<Page, Entry, Notification` | 17 |
| interface | RemoteStreamFactory | `export interface RemoteStreamFactory` | 35 |
| interface | RemoteJournalStreamOptions | `export interface RemoteJournalStreamOptions<Page, Entry, Cursor, Notification` | 44 |
| class | RemoteJournalStream | `export declare abstract class RemoteJournalStream<Page, Entry, Cursor, PageRequest = void, Notification = never>` | 75 |

## dsh-api-gateway/lib/types/client/remote-events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RemoteEventStreamOpener | `export type RemoteEventStreamOpener` | 6 |
| class | ClientRemoteEvents | `export declare class ClientRemoteEvents` | 8 |
| method | ClientRemoteEvents.constructor | `constructor(ownerCtx: Context, connection: ConnectionHandle, openStream: RemoteEventStreamOpener);` | 20 |

## dsh-api-gateway/lib/types/client/remote-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RemoteStreamItem | `export interface RemoteStreamItem<Item>` | 5 |
| interface | RemoteStreamOptions | `export interface RemoteStreamOptions<Item>` | 16 |
| class | RemoteStream | `export declare class RemoteStream<Item> implements AsyncIterable<RemoteStreamItem<Item>>` | 34 |
| method | RemoteStream.constructor | `constructor(connection: Pick<ConnectionHandle, 'generation'>, options: RemoteStreamOptions<Item>);` | 47 |

## dsh-api-gateway/lib/types/client/snapshot-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RemoteSnapshotStreamOptions | `export interface RemoteSnapshotStreamOptions<Snapshot, Delta>` | 4 |
| class | RemoteSnapshotStream | `export declare class RemoteSnapshotStream<Snapshot, Delta>` | 22 |
| method | RemoteSnapshotStream.constructor | `constructor(stream: RemoteStream<Snapshot \| Delta>, options: RemoteSnapshotStreamOptions<Snapshot, Delta>);` | 32 |

## dsh-api-gateway/lib/types/client/stream-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | RemoteStreamCarrierError | `export declare class RemoteStreamCarrierError extends Error` | 2 |
| method | RemoteStreamCarrierError.constructor | `constructor(message: string, options?: ErrorOptions);` | 7 |
| class | RemoteStreamMuxClient | `export declare class RemoteStreamMuxClient` | 10 |

## dsh-api-gateway/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GatewayErrorOptions | `interface GatewayErrorOptions` | 15 |
| interface | Config | `export interface Config` | 20 |
| class | TypertGatewayError | `export declare class TypertGatewayError extends RemoteError<TypertGatewayErrorCode>` | 29 |
| method | TypertGatewayError.constructor | `constructor(code: TypertGatewayErrorCode, endpoint: string, message: string, options?: GatewayErrorOptions);` | 41 |
| class | TypertGatewayService | `export declare class TypertGatewayService extends Service implements TypertGateway` | 48 |
| method | TypertGatewayService.constructor | `constructor(ctx: Context, config: Config);` | 62 |
| default | TypertGatewayService | `export default TypertGatewayService;` | 107 |

## dsh-api-gateway/lib/types/remote-error-codes.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TypertGatewayFaultDetails | `export interface TypertGatewayFaultDetails` | 7 |

## dsh-api-gateway/lib/types/stream-protocol.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | REMOTE_STREAM_MUX_PATH | `export declare const REMOTE_STREAM_MUX_PATH = "/api/remote.mux"` | 4 |
| const | REMOTE_EVENT_STREAM_ENDPOINT | `export declare const REMOTE_EVENT_STREAM_ENDPOINT = "$events"` | 6 |
| const | REMOTE_EVENT_RESULT_ENDPOINT | `export declare const REMOTE_EVENT_RESULT_ENDPOINT = "$events/result"` | 8 |
| const | REMOTE_EVENT_STREAM_PAYLOAD | `export declare const REMOTE_EVENT_STREAM_PAYLOAD: {` | 10 |
| const | REMOTE_EVENT_STREAM_READY | `export declare const REMOTE_EVENT_STREAM_READY: {` | 14 |
| type | RemoteEventClientId | `export type RemoteEventClientId` | 18 |
| type | RemoteEventId | `export type RemoteEventId` | 20 |
| interface | RemoteEventHostInfo | `export interface RemoteEventHostInfo` | 22 |
| interface | RemoteEventReadyFrame | `export interface RemoteEventReadyFrame` | 27 |
| type | RemoteEventAgentId | `export type RemoteEventAgentId` | 34 |
| interface | RemoteEventEmitFrame | `export interface RemoteEventEmitFrame` | 36 |
| interface | RemoteEventInvocationFrame | `export interface RemoteEventInvocationFrame` | 42 |
| interface | RemoteEventCancellationFrame | `export interface RemoteEventCancellationFrame` | 50 |
| type | RemoteEventDownlinkFrame | `export type RemoteEventDownlinkFrame` | 55 |
| interface | ProjectedRemoteEventRequest | `export interface ProjectedRemoteEventRequest` | 57 |
| interface | RemoteEventRejection | `export interface RemoteEventRejection` | 62 |
| interface | RemoteEventResult | `export interface RemoteEventResult` | 69 |
| function | parseRemoteEventResult | `export declare function parseRemoteEventResult(value: unknown): RemoteEventResult` | 87 |
| function | projectRemoteEventRequest | `export declare function projectRemoteEventRequest(value: unknown, subject: object): ProjectedRemoteEventRequest` | 94 |
| function | projectRemoteEventRejection | `export declare function projectRemoteEventRejection(reason: unknown): RemoteEventRejection` | 100 |
| function | restoreRemoteEventRejection | `export declare function restoreRemoteEventRejection(rejection: RemoteEventRejection): Error` | 106 |
| function | isRemoteJsonValue | `export declare function isRemoteJsonValue(value: unknown): boolean` | 112 |
| function | isRemoteEventId | `export declare function isRemoteEventId(value: unknown): value is RemoteEventId` | 118 |
| function | isRemoteEventClientId | `export declare function isRemoteEventClientId(value: unknown): value is RemoteEventClientId` | 124 |
| function | isRemoteEventAgentId | `export declare function isRemoteEventAgentId(value: unknown): value is RemoteEventAgentId` | 130 |
| type | RemoteStreamClientMessage | `export type RemoteStreamClientMessage` | 132 |
| interface | RemoteStreamFailure | `export interface RemoteStreamFailure` | 142 |
| type | RemoteStreamServerMessage | `export type RemoteStreamServerMessage` | 148 |
| function | parseRemoteStreamClientMessage | `export declare function parseRemoteStreamClientMessage(text: string): RemoteStreamClientMessage` | 165 |
| function | parseRemoteStreamServerMessage | `export declare function parseRemoteStreamServerMessage(text: string): RemoteStreamServerMessage` | 171 |

## dsh-api-gateway/lib/types/stream-server.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RemoteStreamOpener | `export type RemoteStreamOpener` | 6 |
| type | RemoteStreamFailureMapper | `export type RemoteStreamFailureMapper` | 8 |
| class | RemoteStreamMuxServer | `export declare class RemoteStreamMuxServer` | 10 |
| method | RemoteStreamMuxServer.constructor | `constructor(open: RemoteStreamOpener, failure: RemoteStreamFailureMapper, heartbeatIntervalMs: number);` | 23 |
| function | rejectRemoteStreamUpgrade | `export declare function rejectRemoteStreamUpgrade(socket: Duplex, status: 401 \| 403): void` | 41 |

## dsh-api-gateway/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | InvokeRemoteRequest | `export interface InvokeRemoteRequest` | 8 |
| interface | TypertRemoteEventFrame | `export interface TypertRemoteEventFrame` | 19 |
| interface | TypertRemoteEventContext | `export interface TypertRemoteEventContext` | 26 |
| type | TypertRemoteEventOutcome | `export type TypertRemoteEventOutcome` | 35 |
| interface | TypertRemoteEventInvocation | `export interface TypertRemoteEventInvocation` | 46 |
| type | TypertRemoteEventDispatch | `export type TypertRemoteEventDispatch` | 58 |
| type | TypertRemoteEventSource | `export type TypertRemoteEventSource` | 66 |
| interface | TypertGatewayWireStream | `export interface TypertGatewayWireStream` | 68 |
| type | TypertGatewayErrorCode | `export type TypertGatewayErrorCode` | 89 |
| interface | TypertGateway | `export interface TypertGateway` | 91 |

