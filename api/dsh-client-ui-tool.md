# dsh-client-ui-tool

> Client Tool call-tree renderer and keyed per-tool presentation slot
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-tool/lib/types/client/apply.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 4 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 9 |

## dsh-client-ui-tool/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolImagesOwnerProps | `export interface ToolImagesOwnerProps` | 48 |
| interface | ToolCallOwnerProps | `export interface ToolCallOwnerProps` | 57 |
| type | ToolCallViewProps | `export type ToolCallViewProps` | 85 |
| type | ToolHostInfoInjected | `export type ToolHostInfoInjected` | 87 |
| type | ToolTreeProps | `export type ToolTreeProps` | 99 |

## dsh-client-ui-tool/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { apply, inject } | `export { apply, inject } from './apply.ts';` | 2 |

## dsh-client-ui-tool/lib/types/client/locale.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CONVERSATION_NS | `export declare const CONVERSATION_NS = "conversation"` | 2 |

## dsh-client-ui-tool/lib/types/client/tool/ToolCallTree.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ToolCallTree | `export declare function ToolCallTree({ renderSlot, node, cwd, openFile, inspectCall, loadImage, useHostInfo, t, }: ToolTreeProps): import("react").JSX.Element` | 8 |

## dsh-client-ui-tool/lib/types/client/tool/components/AskQuestionCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | AskQuestionCard | `export declare function AskQuestionCard({ card }: {` | 8 |

## dsh-client-ui-tool/lib/types/client/tool/components/ToolRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ToolRowProps | `export interface ToolRowProps` | 13 |
| function | ToolRow | `export declare function ToolRow({ t, variant, toolName, icon, title, summary, summarySuffix, bodyRaw, output, askQuestion, errorSummary, terminal, diff, read, i` | 74 |

## dsh-client-ui-tool/lib/types/client/tool/models/ask-question-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AnsweredQuestionCardItem | `interface AnsweredQuestionCardItem` | 2 |
| interface | UnansweredQuestionCardItem | `interface UnansweredQuestionCardItem` | 7 |
| type | AskQuestionCardModel | `export type AskQuestionCardModel` | 12 |
| export-list |  | `export {};` | 21 |

## dsh-client-ui-tool/lib/types/client/tool/models/diff-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CHAT_DIFF_MAX_LINES | `export declare const CHAT_DIFF_MAX_LINES = 8` | 13 |
| interface | DiffCardModel | `export interface DiffCardModel` | 19 |
| function | diffCardModel | `export declare function diffCardModel(block: ToolCallBlock): DiffCardModel \| null` | 36 |

## dsh-client-ui-tool/lib/types/client/tool/models/image-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ImageCardModel | `export interface ImageCardModel` | 12 |
| function | imageCardModel | `export declare function imageCardModel(block: ToolCallBlock, sessionCwd?: string, home?: string): ImageCardModel \| null` | 44 |

## dsh-client-ui-tool/lib/types/client/tool/models/primitive-labels.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | T | `type T` | 4 |
| function | markdownLabels | `export declare function markdownLabels(t: T): MarkdownLabels` | 10 |
| function | diffBlockLabels | `export declare function diffBlockLabels(t: T): DiffBlockLabels` | 16 |
| function | readBlockLabels | `export declare function readBlockLabels(t: T): ReadBlockLabels` | 22 |
| function | searchBlockLabels | `export declare function searchBlockLabels(t: T): SearchBlockLabels` | 28 |
| function | webBlockLabels | `export declare function webBlockLabels(t: T): WebBlockLabels` | 34 |
| export-list |  | `export {};` | 35 |

## dsh-client-ui-tool/lib/types/client/tool/models/raw-tool-call.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ParsedToolCall | `export interface ParsedToolCall` | 4 |
| function | parsedToolCall | `export declare function parsedToolCall(block: ToolCallBlock): ParsedToolCall \| null` | 13 |
| function | singleResultText | `export declare function singleResultText(block: ToolResultNode): string \| undefined` | 19 |
| function | validEscalationFields | `export declare function validEscalationFields(args: Record<string, unknown>): boolean` | 26 |

## dsh-client-ui-tool/lib/types/client/tool/models/read-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CHAT_READ_MAX_LINES | `export declare const CHAT_READ_MAX_LINES = 8` | 14 |
| type | ReadCardModel | `export type ReadCardModel` | 20 |
| function | readCallLine | `export declare function readCallLine(block: ToolCallBlock): number \| undefined` | 32 |
| function | readCardModel | `export declare function readCardModel(block: ToolCallBlock, sessionCwd?: string, home?: string): ReadCardModel \| null` | 42 |

## dsh-client-ui-tool/lib/types/client/tool/models/search-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DistributiveOmit | `type DistributiveOmit<T, K extends keyof T>` | 4 |
| type | SearchBlockModelProps | `type SearchBlockModelProps` | 6 |
| const | CHAT_SEARCH_MAX_LINES | `export declare const CHAT_SEARCH_MAX_LINES = 8` | 8 |
| interface | SearchCardModel | `export interface SearchCardModel` | 10 |
| function | searchCardModel | `export declare function searchCardModel(block: ToolCallBlock): SearchCardModel \| null` | 21 |
| export-list |  | `export {};` | 22 |

## dsh-client-ui-tool/lib/types/client/tool/models/terminal-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | terminalBlockLabels | `export declare function terminalBlockLabels(t: TranslateNS<'conversation'>): TerminalBlockLabels` | 13 |
| interface | TerminalCardModel | `export interface TerminalCardModel` | 19 |
| interface | LocalizedTerminalCardModel | `interface LocalizedTerminalCardModel` | 39 |
| function | localizeTerminalCardModel | `export declare function localizeTerminalCardModel(model: TerminalCardModel, t: TranslateNS<'conversation'>): LocalizedTerminalCardModel` | 50 |
| function | terminalFailed | `export declare function terminalFailed(model: TerminalCardModel): boolean` | 60 |
| function | isSettledPersistentShellCall | `export declare function isSettledPersistentShellCall(block: ToolCallBlock): boolean` | 68 |
| function | isSpilledShellCall | `export declare function isSpilledShellCall(block: ToolCallBlock): boolean` | 74 |
| function | terminalCardModel | `export declare function terminalCardModel(block: ToolCallBlock, sessionCwd?: string): TerminalCardModel \| null` | 85 |
| export-list |  | `export {};` | 86 |

## dsh-client-ui-tool/lib/types/client/tool/models/tool-call-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ToolRowVariant | `export type ToolRowVariant` | 12 |
| type | ToolRowState | `export type ToolRowState` | 14 |
| type | ToolTitleKey | `type ToolTitleKey` | 15 |
| const | VARIANT_TITLE_KEYS | `export declare const VARIANT_TITLE_KEYS: {` | 17 |
| function | classifyTool | `export declare function classifyTool(toolName: string): ToolRowVariant` | 31 |
| interface | ToolRowModel | `export interface ToolRowModel` | 33 |
| function | resultText | `export declare function resultText(node: ToolResultNode): string` | 58 |
| function | formatToolBody | `export declare function formatToolBody(variant: ToolRowVariant, argsRaw: string): string \| null` | 65 |
| function | toolRowModel | `export declare function toolRowModel(toolName: string, block: ToolCallBlock, cwd?: string, home?: string): ToolRowModel` | 74 |

## dsh-client-ui-tool/lib/types/client/tool/models/web-card-model.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DistributiveOmit | `type DistributiveOmit<T, K extends keyof T>` | 4 |
| type | WebCardModelProps | `export type WebCardModelProps` | 6 |
| function | webCardModel | `export declare function webCardModel(block: ToolCallBlock): WebCardModelProps \| null` | 12 |
| export-list |  | `export {};` | 13 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/GenericToolCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | GenericToolCardProps | `export interface GenericToolCardProps extends ToolCallOwnerProps` | 3 |
| function | GenericToolCard | `export declare function GenericToolCard({ toolName, block, cwd, home, openFile, inspect, t }: GenericToolCardProps): import("react").JSX.Element` | 6 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/ask-question-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AskQuestionRowProps | `type AskQuestionRowProps` | 4 |
| function | AskQuestionRow | `export declare function AskQuestionRow({ toolName, block, inspect, t }: AskQuestionRowProps): import("react").JSX.Element` | 6 |
| const | askQuestionToolview | `export declare const askQuestionToolview: {` | 8 |
| export-list |  | `export {};` | 13 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/bash-sample.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | BashRowProps | `type BashRowProps` | 4 |
| function | BashRow | `export declare function BashRow({ toolName, block, sessionId, useSessions, inspect, t }: BashRowProps): import("react").JSX.Element` | 6 |
| const | bashToolviewSample | `export declare const bashToolviewSample: {` | 8 |
| export-list |  | `export {};` | 13 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/file-mutation-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FileMutationRowProps | `type FileMutationRowProps` | 4 |
| function | FileMutationRow | `export declare function FileMutationRow({ toolName, block, cwd, home, openFile, inspect, t }: FileMutationRowProps): import("react").JSX.Element` | 8 |
| const | fileMutationToolview | `export declare const fileMutationToolview: {` | 10 |
| export-list |  | `export {};` | 15 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/plan-summary.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PlanItemLike | `export interface PlanItemLike` | 14 |
| interface | PlanSummary | `export interface PlanSummary` | 25 |
| function | planSummary | `export declare function planSummary(todos: readonly PlanItemLike[]): PlanSummary` | 47 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/read-family-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ReadFamilyRowProps | `export type ReadFamilyRowProps` | 6 |
| type | ReadImageRowProps | `export type ReadImageRowProps` | 10 |
| type | ReadFamilyCard | `export type ReadFamilyCard` | 17 |
| function | readFamilyRow | `export declare function readFamilyRow({ toolName, block, cwd, home, openFile, inspect, t }: ReadFamilyRowProps, card: ReadFamilyCard): ReactNode` | 25 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/read-image-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ReadImageRow | `export declare function ReadImageRow(props: ReadImageRowProps): import("react").ReactNode` | 8 |
| const | readImageToolview | `export declare const readImageToolview: {` | 15 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/read-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ReadRowProps | `type ReadRowProps` | 4 |
| function | ReadRow | `export declare function ReadRow(props: ReadRowProps): import("react").ReactNode` | 9 |
| const | readToolview | `export declare const readToolview: {` | 11 |
| export-list |  | `export {};` | 16 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/search-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SearchRowProps | `type SearchRowProps` | 4 |
| function | SearchRow | `export declare function SearchRow({ toolName, block, inspect, t }: SearchRowProps): import("react").JSX.Element` | 6 |
| const | searchToolview | `export declare const searchToolview: {` | 8 |
| export-list |  | `export {};` | 13 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/todo-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | TodoRowProps | `type TodoRowProps` | 4 |
| function | TodoRow | `export declare function TodoRow({ toolName, block, inspect, t }: TodoRowProps): import("react").JSX.Element` | 6 |
| const | todoToolview | `export declare const todoToolview: {` | 8 |
| export-list |  | `export {};` | 13 |

## dsh-client-ui-tool/lib/types/client/tool/toolviews/web-row.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WebRowProps | `type WebRowProps` | 4 |
| function | WebRow | `export declare function WebRow({ toolName, block, inspect, t }: WebRowProps): import("react").JSX.Element` | 6 |
| const | webToolview | `export declare const webToolview: {` | 8 |
| export-list |  | `export {};` | 13 |

## dsh-client-ui-tool/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

