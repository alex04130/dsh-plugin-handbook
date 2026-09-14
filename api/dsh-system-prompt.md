# dsh-system-prompt

> System prompt assembly registry for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-system-prompt/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AssembleContext | `export interface AssembleContext` | 37 |
| interface | PromptSection | `export interface PromptSection` | 47 |
| interface | PromptContext | `export interface PromptContext` | 70 |
| interface | AssembledSection | `export interface AssembledSection` | 79 |
| interface | AssembledContext | `export interface AssembledContext` | 86 |
| interface | ToolProviderResult | `export interface ToolProviderResult` | 93 |
| interface | PromptAssembly | `export interface PromptAssembly` | 103 |
| const | SECTION_ORDERS | `declare const SECTION_ORDERS: {` | 109 |
| type | PromptSectionOrderName | `export type PromptSectionOrderName` | 143 |
| const | CONTEXT_ORDERS | `declare const CONTEXT_ORDERS: {` | 144 |
| type | PromptContextOrderName | `export type PromptContextOrderName` | 150 |
| const | PERSONA_PREFIX_SECTION | `export declare const PERSONA_PREFIX_SECTION = "deployment:persona-prefix"` | 157 |
| const | PERSONA_SUFFIX_SECTION | `export declare const PERSONA_SUFFIX_SECTION = "deployment:persona-suffix"` | 159 |
| const | TOOL_ORDER_REST | `export declare const TOOL_ORDER_REST = "<unlisted-tools>"` | 161 |
| interface | Config | `export interface Config` | 163 |
| function | renderPrompt | `export declare function renderPrompt(assembly: PromptAssembly): string` | 193 |
| function | renderContextSnapshot | `export declare function renderContextSnapshot(assembly: PromptAssembly): string` | 199 |
| function | joinContextSections | `export declare function joinContextSections(sections: readonly ContextSnapshotSection[]): string` | 208 |
| function | renderContextSections | `export declare function renderContextSections(assembly: PromptAssembly): ContextSnapshotSection[]` | 218 |
| class | SystemPrompt | `export declare class SystemPrompt extends Service` | 220 |
| method | SystemPrompt.constructor | `constructor(ctx: Context, config: Config);` | 224 |
| default | SystemPrompt | `export default SystemPrompt;` | 288 |

## dsh-system-prompt/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "system-prompt-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

