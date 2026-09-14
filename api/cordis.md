# cordis

> Meta-Framework for Modern JavaScript Applications
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## cordis/lib/types/context.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Context | `export interface Context` | 15 |
| class | Context | `export declare class Context` | 40 |
| method | Context.constructor | `constructor();` | 60 |

## cordis/lib/types/events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | isBailed | `export declare function isBailed(value: any): boolean` | 10 |
| type | Parameters | `export type Parameters<F>` | 12 |
| type | ReturnType | `export type ReturnType<F>` | 14 |
| type | ThisType | `export type ThisType<F>` | 16 |
| type | DispatchMode | `export type DispatchMode` | 25 |
| interface | EventOptions | `export interface EventOptions` | 101 |
| interface | Hook | `export interface Hook extends EventOptions` | 108 |
| class | EventsService | `export declare class EventsService` | 118 |
| method | EventsService.constructor | `constructor(ctx: Context);` | 121 |
| interface | Events | `export interface Events` | 216 |

## cordis/lib/types/fiber.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ValidationError | `export declare class ValidationError extends TypeError` | 14 |
| method | ValidationError.constructor | `constructor(issues: readonly StandardSchemaV1.Issue[]);` | 21 |
| function | resolveConfig | `export declare function resolveConfig(runtime: Plugin.Runtime, config: any): any` | 31 |
| interface | AsyncDisposable | `interface AsyncDisposable<T extends Awaitable<void>` | 32 |
| type | Disposable | `export type Disposable<T` | 41 |
| type | Effect | `export type Effect<T` | 49 |
| type | SyncEffect | `type SyncEffect<T` | 50 |
| type | AsyncEffect | `type AsyncEffect<T` | 51 |
| interface | EffectMeta | `export interface EffectMeta` | 53 |
| const | enum | `export declare const enum FiberState {` | 67 |
| class | CordisError | `export declare class CordisError extends Error` | 76 |
| method | CordisError.constructor | `constructor(code: CordisError.Code, message?: string);` | 82 |
| class | Fiber | `export declare class Fiber` | 97 |
| method | Fiber.constructor | `constructor(parent: Context, config: any, inject: Dict<any>, runtime: Plugin.Runtime \| null, getOuterStack: () => string[]);` | 133 |
| export-list |  | `export {};` | 201 |

## cordis/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './context.ts';` | 2 |
| re-export | * | `export * from './events.ts';` | 4 |
| re-export | * | `export * from './fiber.ts';` | 6 |
| re-export | * | `export * from './logger.ts';` | 8 |
| re-export | * | `export * from './registry.ts';` | 10 |
| re-export | * | `export * from './service.ts';` | 12 |
| re-export | * | `export * from './utils.ts';` | 14 |

## cordis/lib/types/logger.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | LoggerType | `export type LoggerType` | 10 |
| type | LoggerMethod | `export type LoggerMethod` | 12 |
| type | Formatter | `export type Formatter` | 14 |
| const | enum | `export declare const enum LoggerLevel {` | 16 |
| interface | Message | `export interface Message` | 23 |
| interface | Exporter | `export interface Exporter` | 33 |
| const | defaultFormatters | `export declare const defaultFormatters: Record<string, Formatter>` | 41 |
| interface | LoggerOptions | `export interface LoggerOptions` | 43 |
| interface | Logger | `export interface Logger extends LoggerOptions` | 52 |
| interface | Logger | `export interface Logger extends Record<LoggerType, LoggerMethod>` | 55 |
| class | Logger | `export declare class Logger` | 58 |
| method | Logger.constructor | `constructor(options: LoggerOptions, service: LoggerService);` | 63 |
| const | c16 | `export declare const c16: number[]` | 67 |
| const | c256 | `export declare const c256: number[]` | 69 |
| interface | LoggerService | `export interface LoggerService extends Record<LoggerType, LoggerMethod>` | 78 |
| class | LoggerService | `export declare class LoggerService` | 87 |
| method | LoggerService.constructor | `constructor(ctx: Context);` | 94 |

## cordis/lib/types/reflect.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Property | `export type Property` | 70 |
| interface | Impl | `export interface Impl` | 89 |
| class | ReflectService | `export declare class ReflectService` | 105 |
| method | ReflectService.constructor | `constructor(ctx: Context);` | 113 |

## cordis/lib/types/registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Inject | `export type Inject<M` | 13 |
| type | InjectKey | `export type InjectKey` | 17 |
| function | Inject | `export declare function Inject<K extends InjectKey>(name: K, config?: Context[K] extends {` | 33 |
| type | Plugin | `export type Plugin<T` | 48 |
| type | Spread | `type Spread<T>` | 94 |
| type | GetPluginParameters | `type GetPluginParameters<P>` | 95 |
| type | GetPluginConfig | `type GetPluginConfig<P>` | 98 |
| class | RegistryService | `export declare class RegistryService` | 129 |
| method | RegistryService.constructor | `constructor(ctx: Context);` | 133 |
| export-list |  | `export {};` | 200 |

## cordis/lib/types/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | Service | `export declare abstract class Service<out T = never>` | 9 |
| method | Service.constructor | `constructor(ctx: Context, name: string);` | 38 |

## cordis/lib/types/utils.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | DisposableList | `export declare class DisposableList<T extends WeakKey>` | 3 |
| interface | Tracker | `export interface Tracker` | 14 |
| const | symbols | `export declare const symbols: {` | 20 |
| function | isConstructor | `export declare function isConstructor(func: any): func is new (...args: any) => any` | 40 |
| function | joinPrototype | `export declare function joinPrototype(proto1: {}, proto2: {}): any` | 42 |
| function | isObject | `export declare function isObject(value: any): value is {}` | 44 |
| function | getPropertyDescriptor | `export declare function getPropertyDescriptor(target: any, prop: string \| symbol): TypedPropertyDescriptor<any> \| undefined` | 46 |
| function | getTraceable | `export declare function getTraceable<T>(ctx: Context, value: T): T` | 48 |
| function | withProps | `export declare function withProps(target: any, props?: {}): any` | 50 |
| function | createCallable | `export declare function createCallable(name: string, proto: {}, tracker: Tracker): any` | 52 |
| interface | StackInfo | `interface StackInfo` | 53 |
| function | composeError | `export declare function composeError<T>(callback: (info: StackInfo) => T, getOuterStack?: () => string[]): T` | 58 |
| function | buildOuterStack | `export declare function buildOuterStack(offset?: number): () => string[]` | 60 |
| export-list |  | `export {};` | 61 |

