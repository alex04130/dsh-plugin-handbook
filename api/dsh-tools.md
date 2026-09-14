# dsh-tools

> Tool registry and execution pipeline for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tools/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { defineTool, valueSchemaSpecToJsonSchem | `export { defineTool, valueSchemaSpecToJsonSchema, parameterSchemaSpecToJsonSchema, validateArgs, ToolArgsError, type ValueSchemaAnnotations, type StringValueSch` | 16 |
| re-export | { assertSupportedJsonSchema, assertObjec | `export { assertSupportedJsonSchema, assertObjectJsonSchema, validateJsonSchemaValue, JsonSchemaError, type JsonSchemaNode, type ObjectJsonSchema, type JsonSchem` | 17 |
| re-export | { CodeRunFailedError, RUN_CODE_NAME } | `export { CodeRunFailedError, RUN_CODE_NAME } from './ptc.ts';` | 19 |
| re-export | { jsonSchemaToTs, renderToolsSdk } | `export { jsonSchemaToTs, renderToolsSdk } from './ts-types.ts';` | 20 |
| re-export | { jsonSchemaToPy, renderToolsSdkPy } | `export { jsonSchemaToPy, renderToolsSdkPy } from './py-types.ts';` | 21 |
| re-export | { defineContentToolFixture, type Content | `export { defineContentToolFixture, type ContentToolFixtureOptions } from './testing.ts';` | 22 |
| interface | ToolOutputDefinition | `export interface ToolOutputDefinition` | 97 |
| interface | ToolDefinition | `export interface ToolDefinition extends ToolSchema` | 106 |
| interface | ToolResult | `export interface ToolResult` | 174 |
| const | toolExecutionTokenBrand | `declare const toolExecutionTokenBrand: unique symbol` | 187 |
| type | ToolExecutionToken | `export type ToolExecutionToken` | 189 |
| interface | ToolExecutionInput | `export interface ToolExecutionInput` | 197 |
| type | ToolExecutionMode | `export type ToolExecutionMode` | 226 |
| interface | PtcDispatchLog | `export interface PtcDispatchLog` | 240 |
| interface | ToolExecution | `export interface ToolExecution extends ToolExecutionInput` | 261 |
| interface | ToolDispatchExecution | `export interface ToolDispatchExecution extends Omit<ToolExecution, 'signal'>` | 272 |
| interface | ToolRunContext | `export interface ToolRunContext extends ToolExecution` | 284 |
| type | ScheduledToolPreparation | `export type ScheduledToolPreparation` | 307 |
| type | ScheduledToolDispatch | `export type ScheduledToolDispatch` | 324 |
| interface | ToolRuntimeScheduler | `export interface ToolRuntimeScheduler` | 337 |
| const | TOOL_RUNTIME_SCHEDULER | `export declare const TOOL_RUNTIME_SCHEDULER: unique symbol` | 351 |
| const | TOOL_ABORTED | `export declare const TOOL_ABORTED = "ABORTED"` | 353 |
| const | TOOL_ABORTED_BEFORE_DISPATCH | `export declare const TOOL_ABORTED_BEFORE_DISPATCH = "ABORTED_BEFORE_DISPATCH"` | 355 |
| interface | ToolErrorInfo | `export interface ToolErrorInfo` | 357 |
| interface | ToolFailure | `export interface ToolFailure` | 362 |
| class | ToolNotFoundError | `export declare class ToolNotFoundError extends HarnessError` | 374 |
| method | ToolNotFoundError.constructor | `constructor(toolName: string, reachableFrom?: string);` | 381 |
| class | ToolOutputError | `export declare class ToolOutputError extends HarnessError` | 384 |
| method | ToolOutputError.constructor | `constructor(toolName: string, violations: string[]);` | 387 |
| interface | ToolExecutionSuccess | `export interface ToolExecutionSuccess` | 390 |
| interface | ToolExecutionFailure | `export interface ToolExecutionFailure` | 402 |
| type | ToolExecutionResult | `export type ToolExecutionResult` | 412 |
| type | PreToolDecision | `export type PreToolDecision` | 419 |
| type | PostToolDecision | `export type PostToolDecision` | 432 |
| type | ToolPresentationMode | `export type ToolPresentationMode` | 448 |
| interface | Config | `export interface Config` | 450 |
| interface | ToolRestriction | `export interface ToolRestriction` | 475 |
| type | ToolGuard | `export type ToolGuard` | 489 |
| class | ToolRuntime | `export declare class ToolRuntime extends Service` | 494 |
| method | ToolRuntime.constructor | `constructor(ctx: Context, config?: Config);` | 518 |
| default | ToolRuntime | `export default ToolRuntime;` | 816 |

## dsh-tools/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tools-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-tools/lib/types/json-schema.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | JsonSchemaScalar | `export type JsonSchemaScalar` | 16 |
| type | JsonSchemaType | `export type JsonSchemaType` | 18 |
| interface | JsonSchemaNode | `export interface JsonSchemaNode` | 24 |
| type | ObjectJsonSchema | `export type ObjectJsonSchema` | 51 |
| class | JsonSchemaError | `export declare class JsonSchemaError extends HarnessError` | 58 |
| method | JsonSchemaError.constructor | `constructor(violations: string[]);` | 61 |
| function | isPlainJsonRecord | `export declare function isPlainJsonRecord(value: unknown): value is Record<string, unknown>` | 69 |
| function | isJsonSchemaRecord | `export declare function isJsonSchemaRecord(value: unknown): value is Record<string, unknown>` | 75 |
| function | isPlainJsonArray | `export declare function isPlainJsonArray(value: unknown): value is unknown[]` | 81 |
| function | assertSupportedJsonSchema | `export declare function assertSupportedJsonSchema(schema: unknown): asserts schema is JsonSchemaNode` | 89 |
| function | assertObjectJsonSchema | `export declare function assertObjectJsonSchema(schema: unknown): asserts schema is ObjectJsonSchema` | 96 |
| function | validateJsonSchemaValue | `export declare function validateJsonSchemaValue(schema: JsonSchemaNode, value: unknown, path?: string): string[]` | 105 |

## dsh-tools/lib/types/presentation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ToolCallKind | `export type ToolCallKind` | 13 |
| interface | FileLocation | `export interface FileLocation` | 20 |
| interface | FileDiff | `export interface FileDiff` | 30 |
| type | ToolCallView | `export type ToolCallView` | 41 |
| interface | GenericCallView | `export interface GenericCallView` | 47 |
| interface | TerminalCallView | `export interface TerminalCallView` | 77 |
| interface | DiffCallView | `export interface DiffCallView` | 102 |
| interface | ReadFileLine | `export interface ReadFileLine` | 118 |
| type | ToolResultView | `export type ToolResultView` | 130 |
| interface | GenericResultView | `export interface GenericResultView` | 135 |
| interface | TerminalResultView | `export interface TerminalResultView` | 151 |
| interface | DiffResultView | `export interface DiffResultView` | 171 |
| interface | SearchLineMatch | `export interface SearchLineMatch` | 179 |
| interface | SearchFileMatches | `export interface SearchFileMatches` | 186 |
| interface | SearchMatchesResultView | `export interface SearchMatchesResultView` | 200 |
| interface | SearchPathsResultView | `export interface SearchPathsResultView` | 221 |
| type | SearchResultView | `export type SearchResultView` | 249 |
| interface | ReadResultView | `export interface ReadResultView` | 262 |
| interface | WebSource | `export interface WebSource` | 299 |
| type | WebResultView | `export type WebResultView` | 326 |
| interface | WebSearchResultView | `export interface WebSearchResultView` | 333 |
| interface | WebFetchResultView | `export interface WebFetchResultView` | 351 |

## dsh-tools/lib/types/ptc.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | RUN_CODE_NAME | `export declare const RUN_CODE_NAME = "run_code"` | 13 |
| type | CodeSdkLanguage | `export type CodeSdkLanguage` | 23 |
| class | CodeRunFailedError | `export declare class CodeRunFailedError extends HarnessError` | 31 |
| method | CodeRunFailedError.constructor | `constructor(message: string);` | 32 |
| interface | RunCodeBridgeOptions | `export interface RunCodeBridgeOptions` | 39 |
| function | createRunCodeTool | `export declare function createRunCodeTool(registry: ToolRuntime, options: RunCodeBridgeOptions): ToolDefinition` | 65 |

## dsh-tools/lib/types/py-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | jsonSchemaToPy | `export declare function jsonSchemaToPy(schema: unknown): string` | 29 |
| function | renderToolsSdkPy | `export declare function renderToolsSdkPy(schemas: ToolSdkSchema[]): string` | 48 |

## dsh-tools/lib/types/schema.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ValueSchemaAnnotations | `export interface ValueSchemaAnnotations` | 9 |
| interface | StringValueSchemaSpec | `export interface StringValueSchemaSpec extends ValueSchemaAnnotations` | 20 |
| interface | NumberValueSchemaSpec | `export interface NumberValueSchemaSpec extends ValueSchemaAnnotations` | 26 |
| interface | IntegerValueSchemaSpec | `export interface IntegerValueSchemaSpec extends ValueSchemaAnnotations` | 32 |
| interface | BooleanValueSchemaSpec | `export interface BooleanValueSchemaSpec extends ValueSchemaAnnotations` | 38 |
| interface | NullValueSchemaSpec | `export interface NullValueSchemaSpec extends ValueSchemaAnnotations` | 44 |
| interface | ArrayValueSchemaSpec | `export interface ArrayValueSchemaSpec extends ValueSchemaAnnotations` | 50 |
| interface | ObjectValueSchemaSpec | `export interface ObjectValueSchemaSpec extends ValueSchemaAnnotations` | 58 |
| interface | JsonValueSchemaSpec | `export interface JsonValueSchemaSpec extends ValueSchemaAnnotations` | 64 |
| interface | OneOfValueSchemaSpec | `export interface OneOfValueSchemaSpec extends ValueSchemaAnnotations` | 68 |
| type | ValueSchemaSpec | `export type ValueSchemaSpec` | 72 |
| type | ParameterPropertySpec | `export type ParameterPropertySpec` | 74 |
| type | ParameterSchemaSpec | `export type ParameterSchemaSpec` | 81 |
| interface | ParameterJsonSchema | `export interface ParameterJsonSchema extends ObjectJsonSchema` | 86 |
| type | Simplify | `type Simplify<T>` | 90 |
| type | StringKeyOf | `type StringKeyOf<S>` | 94 |
| type | RequiredKeys | `type RequiredKeys<S>` | 96 |
| type | InferProperty | `type InferProperty<P, Depth extends unknown[]>` | 102 |
| type | InferProperties | `type InferProperties<S, Depth extends unknown[]>` | 104 |
| type | InferObject | `type InferObject<S extends` | 110 |
| type | InferScalar | `type InferScalar<S, Fallback>` | 116 |
| type | NextInferenceDepth | `type NextInferenceDepth<Depth extends unknown[]>` | 122 |
| type | InferValueAt | `type InferValueAt<S, Depth extends unknown[]>` | 124 |
| type | InferValue | `export type InferValue<S>` | 148 |
| type | InferArgs | `export type InferArgs<S>` | 150 |
| function | valueSchemaSpecToJsonSchema | `export declare function valueSchemaSpecToJsonSchema(spec: ValueSchemaSpec): JsonSchemaNode` | 157 |
| function | parameterSchemaSpecToJsonSchema | `export declare function parameterSchemaSpecToJsonSchema(spec: ParameterSchemaSpec): ParameterJsonSchema` | 163 |
| class | ToolArgsError | `export declare class ToolArgsError extends HarnessError` | 165 |
| method | ToolArgsError.constructor | `constructor(violations: string[]);` | 168 |
| function | validateArgs | `export declare function validateArgs(spec: ParameterSchemaSpec, args: unknown): string[]` | 176 |
| interface | DefineToolOptions | `export interface DefineToolOptions<S extends ParameterSchemaSpec, O extends ValueSchemaSpec>` | 178 |
| function | defineTool | `export declare function defineTool<const S extends ParameterSchemaSpec, const O extends ValueSchemaSpec>(options: DefineToolOptions<S, O>): ToolDefinition` | 239 |
| export-list |  | `export {};` | 240 |

## dsh-tools/lib/types/testing.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CONTENT_VALUE_SCHEMA | `declare const CONTENT_VALUE_SCHEMA: {` | 5 |
| type | ContentToolFixtureOptions | `export type ContentToolFixtureOptions<S extends ParameterSchemaSpec>` | 12 |
| function | defineContentToolFixture | `export declare function defineContentToolFixture<const S extends ParameterSchemaSpec>(options: ContentToolFixtureOptions<S>): ToolDefinition` | 23 |
| export-list |  | `export {};` | 24 |

## dsh-tools/lib/types/ts-types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolSdkSchema | `export interface ToolSdkSchema extends ToolSchema` | 11 |
| function | jsonSchemaToTs | `export declare function jsonSchemaToTs(schema: unknown, indent?: number): string` | 23 |
| function | renderToolsSdk | `export declare function renderToolsSdk(schemas: ToolSdkSchema[]): string` | 36 |

## dsh-tools/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PtcDispatchStartEventData | `export interface PtcDispatchStartEventData` | 9 |
| interface | PtcDispatchEventData | `export interface PtcDispatchEventData extends PtcDispatchStartEventData` | 17 |

