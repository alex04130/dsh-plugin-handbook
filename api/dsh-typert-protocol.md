# dsh-typert-protocol

> Compiler-independent Remote metadata and Typert provider protocols
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-typert-protocol/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { RemoteError, remoteErrorOf } | `export { RemoteError, remoteErrorOf } from './remote-error.ts';` | 9 |
| function | isTypertRemoteSegment | `export declare function isTypertRemoteSegment(value: string): boolean` | 15 |
| interface | TypertGatewayBindingOptions | `export interface TypertGatewayBindingOptions` | 18 |
| interface | TypertGatewayBinding | `export interface TypertGatewayBinding<Service extends object` | 23 |
| type | RemoteInvocationMarker | `export type RemoteInvocationMarker` | 29 |
| interface | RemoteMethodMarker | `export interface RemoteMethodMarker` | 36 |
| interface | RemoteMethodOptions | `export interface RemoteMethodOptions` | 46 |
| type | RemoteMethodDecorator | `type RemoteMethodDecorator` | 50 |
| function | bindTypertRemote | `export declare function bindTypertRemote<Service extends object>(service: Service, serviceKey: string, options?: TypertGatewayBindingOptions): TypertGatewayBind` | 58 |
| class | TypertRemoteService | `export declare abstract class TypertRemoteService<out T = never> extends Service<T>` | 60 |
| function | Remote | `export declare function Remote<This extends object, Args extends unknown[], Result>(_method: (this: This, ...args: Args) => Result, context: ClassMethodDecorato` | 76 |
| function | Remote | `export declare function Remote(option: string \| RemoteMethodOptions): RemoteMethodDecorator` | 82 |
| function | RemoteScope | `export declare function RemoteScope(key: Extract<keyof TypertContextMap, string>, exportName?: string): RemoteMethodDecorator` | 89 |
| function | remoteMethods | `export declare function remoteMethods(service: object): readonly RemoteMethodMarker[]` | 96 |

## dsh-typert-protocol/lib/types/remote-error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | RemoteError | `export declare class RemoteError<Code extends RemoteErrorCode = RemoteErrorCode> extends Error` | 10 |
| method | RemoteError.constructor | `constructor(code: Code, message: string, details: RemoteErrorDetailsMap[Code], options?: ErrorOptions);` | 21 |
| function | remoteErrorOf | `export declare function remoteErrorOf(value: unknown): RemoteFailure \| undefined` | 30 |

## dsh-typert-protocol/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | LOOKUP_HOST | `declare const LOOKUP_HOST: unique symbol` | 7 |
| const | LOOKUP_WIRE | `declare const LOOKUP_WIRE: unique symbol` | 8 |
| const | CONTEXT_WIRE | `declare const CONTEXT_WIRE: unique symbol` | 9 |
| interface | TypertLookup | `export interface TypertLookup<Host, Wire>` | 11 |
| type | TypertLookupHost | `export type TypertLookupHost<Lookup>` | 16 |
| type | TypertLookupWire | `export type TypertLookupWire<Lookup>` | 18 |
| interface | TypertContext | `export interface TypertContext<Wire>` | 20 |
| type | TypertContextWire | `export type TypertContextWire<ContextType>` | 24 |
| interface | TypertLookupMap | `export interface TypertLookupMap` | 26 |
| interface | TypertContextMap | `export interface TypertContextMap` | 29 |
| interface | TypertRemoteMap | `export interface TypertRemoteMap` | 32 |
| interface | RemoteErrorDetailsMap | `export interface RemoteErrorDetailsMap` | 39 |
| type | RemoteErrorCode | `export type RemoteErrorCode` | 50 |
| type | RemoteFailure | `export type RemoteFailure` | 55 |
| type | RemoteResult | `export type RemoteResult<T>` | 65 |
| interface | TypertRemoteScopeMap | `export interface TypertRemoteScopeMap` | 73 |
| type | TypertEventParameters | `type TypertEventParameters<Event extends keyof Events>` | 75 |
| type | TypertEventResult | `type TypertEventResult<Event extends keyof Events>` | 76 |
| type | TypertProjectedContextKey | `type TypertProjectedContextKey` | 77 |
| type | TypertProjectedContextSubject | `type TypertProjectedContextSubject` | 78 |
| type | TypertAgentScopedRequest | `type TypertAgentScopedRequest<Request>` | 81 |
| type | TypertWaterfallEvent | `type TypertWaterfallEvent<Event extends keyof Events>` | 82 |
| type | TypertForwardingMode | `type TypertForwardingMode<Event extends keyof Events>` | 83 |
| type | TypertForwardableEvent | `export type TypertForwardableEvent` | 89 |
| type | TypertForwardableEventEntry | `export type TypertForwardableEventEntry` | 93 |
| interface | TypertRemoteEventSelection | `export interface TypertRemoteEventSelection` | 100 |
| type | TypertRemoteEvent | `export type TypertRemoteEvent` | 103 |
| type | TypertClientAgent | `type TypertClientAgent<Value>` | 104 |
| type | TypertClientEventRequest | `type TypertClientEventRequest<Request>` | 105 |
| type | TypertScopedClientEventListener | `type TypertScopedClientEventListener<Event extends TypertRemoteEvent>` | 108 |
| type | TypertClientEventListener | `export type TypertClientEventListener<Event extends TypertRemoteEvent>` | 115 |
| type | TypertRemoteNamespace | `export type TypertRemoteNamespace<Namespace extends string>` | 120 |
| type | TypertRemoteScopeNamespace | `export type TypertRemoteScopeNamespace<Namespace extends string, ContextKey extends string` | 128 |
| type | TypertRemoteScopeNamespaceKey | `type TypertRemoteScopeNamespaceKey<ContextKey extends string, Endpoint` | 131 |
| type | TypertRemoteScopeApi | `export type TypertRemoteScopeApi<ContextKey extends string>` | 133 |
| interface | TypertRemoteNamespaceMap | `export interface TypertRemoteNamespaceMap` | 137 |
| type | TypertDisposer | `export type TypertDisposer` | 140 |
| type | StringKeyOf | `type StringKeyOf<Value>` | 141 |
| interface | TypertSchema | `export interface TypertSchema<Output` | 143 |
| type | TypertCodec | `export type TypertCodec` | 152 |
| interface | InvocationParameterDescriptor | `export interface InvocationParameterDescriptor` | 160 |
| interface | InvocationSourceLocation | `export interface InvocationSourceLocation` | 175 |
| interface | InvocationDescriptor | `export interface InvocationDescriptor` | 181 |
| interface | TypertRemoteContribution | `export interface TypertRemoteContribution` | 223 |
| interface | TypertClientRemote | `export interface TypertClientRemote extends TypertRemoteNamespaceMap` | 230 |
| type | TypertLookupResolver | `export type TypertLookupResolver<Host` | 253 |
| interface | TypertLookupProvider | `export interface TypertLookupProvider<Host` | 255 |
| interface | TypertLookupDefinition | `export interface TypertLookupDefinition` | 272 |
| interface | TypertHostContextAdapter | `export interface TypertHostContextAdapter<Wire` | 285 |
| type | TypertHostContextResolver | `export type TypertHostContextResolver<Wire` | 298 |
| interface | TypertClientContextAdapter | `export interface TypertClientContextAdapter<Wire` | 300 |
| interface | TypertRegistryChange | `export interface TypertRegistryChange` | 315 |
| type | TypertRegistryListener | `export type TypertRegistryListener` | 320 |
| interface | TypertLocalRegistry | `export interface TypertLocalRegistry` | 322 |
| interface | TypertRemoteRegistry | `export interface TypertRemoteRegistry` | 345 |
| interface | TypertLookupRegistry | `export interface TypertLookupRegistry` | 368 |
| interface | TypertContextRegistry | `export interface TypertContextRegistry` | 402 |
| interface | TypertRegistryContract | `export interface TypertRegistryContract` | 445 |
| export-list |  | `export {};` | 456 |

