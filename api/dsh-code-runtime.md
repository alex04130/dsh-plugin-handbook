# dsh-code-runtime

> Abstract code-execution seam (ctx.codeRuntime) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-code-runtime/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | RESERVED_BINDING_GLOBALS | `export declare const RESERVED_BINDING_GLOBALS: ReadonlySet<string>` | 28 |
| const | RESERVED_ERROR_MEMBERS | `export declare const RESERVED_ERROR_MEMBERS: ReadonlySet<string>` | 39 |
| const | DUNDER_MEMBER | `export declare const DUNDER_MEMBER: RegExp` | 44 |
| const | PORTABLE_RESERVED_WORDS | `export declare const PORTABLE_RESERVED_WORDS: ReadonlySet<string>` | 55 |
| class | CodeRuntime | `export declare abstract class CodeRuntime extends Service` | 68 |
| method | CodeRuntime.constructor | `constructor(ctx: Context);` | 86 |
| default | CodeRuntime | `export default CodeRuntime;` | 98 |

## dsh-code-runtime/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CodeBindingFunction | `export type CodeBindingFunction` | 17 |
| type | CodeJsonValue | `export type CodeJsonValue` | 19 |
| interface | CodeBindingErrorClass | `export interface CodeBindingErrorClass` | 29 |
| interface | CodeBindingNamespace | `export interface CodeBindingNamespace` | 47 |
| interface | CodeRunRequest | `export interface CodeRunRequest` | 70 |
| interface | CodeRunFailure | `export interface CodeRunFailure` | 99 |
| interface | CodeRunResult | `export interface CodeRunResult` | 110 |

