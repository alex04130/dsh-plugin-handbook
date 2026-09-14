# dsh-subagent-in-process-driver

> Shared in-process subagent run driver: drives a child agent on ctx.agents (used by the spawn and fork backends)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-subagent-in-process-driver/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { STRUCTURED_OUTPUT_TOOL, STRUCTURED_OUT | `export { STRUCTURED_OUTPUT_TOOL, STRUCTURED_OUTPUT_INSTRUCTION, } from './structured.ts';` | 15 |
| interface | InProcessRunOptions | `export interface InProcessRunOptions` | 17 |
| function | startInProcessRun | `export declare function startInProcessRun(request: ResolvedSubagentStartRequest, options: InProcessRunOptions): Promise<SubagentRun>` | 32 |

## dsh-subagent-in-process-driver/lib/types/structured.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | STRUCTURED_OUTPUT_TOOL | `export declare const STRUCTURED_OUTPUT_TOOL = "structured_output"` | 15 |
| const | STRUCTURED_OUTPUT_INSTRUCTION | `export declare const STRUCTURED_OUTPUT_INSTRUCTION: string` | 21 |
| interface | StructuredAttachment | `export interface StructuredAttachment` | 23 |
| function | attachStructuredRuntime | `export declare function attachStructuredRuntime(childCtx: Context, schema: ObjectJsonSchema): StructuredAttachment` | 41 |

