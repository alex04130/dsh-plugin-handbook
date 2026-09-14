# dsh-client-ui-deliverables

> Produced-files turn tail and clickable final-response file references for Web
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-deliverables/lib/types/client/Deliverables.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DeliverablesMatch | `interface DeliverablesMatch` | 7 |
| interface | DeliverablesInjected | `export interface DeliverablesInjected` | 12 |
| function | selectDeliverables | `export declare function selectDeliverables(owner: TurnTailOwnerProps): DeliverablesMatch \| null` | 25 |
| function | Deliverables | `export declare function Deliverables({ matched, openFile, t, sessionId, useSessions, openPresented, usePresentedOpen, usePresentedHost, reloadPresentedHost }: P` | 31 |
| export-list |  | `export {};` | 34 |

## dsh-client-ui-deliverables/lib/types/client/PresentRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PresentRowProps | `type PresentRowProps` | 4 |
| function | PresentRow | `export declare function PresentRow({ block, inspect, t }: PresentRowProps): import("react").JSX.Element` | 10 |
| export-list |  | `export {};` | 11 |

## dsh-client-ui-deliverables/lib/types/client/PresentedFileCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | PresentedFileCard | `export declare function PresentedFileCard({ file, cwd, phase, host, onPreview, onAction, t }: {` | 11 |

## dsh-client-ui-deliverables/lib/types/client/ProducedFiles.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ProducedFilesProps | `export type ProducedFilesProps` | 5 |
| function | ProducedFiles | `export declare function ProducedFiles({ matched: paths, openFile, t }: ProducedFilesProps): import("react").JSX.Element` | 13 |

## dsh-client-ui-deliverables/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ProducedFiles, type ProducedFilesProps | `export { ProducedFiles, type ProducedFilesProps } from './ProducedFiles.tsx';` | 18 |
| re-export | { producedForClosing } | `export { producedForClosing } from './turn-deliverables.ts';` | 19 |
| const | inject | `export declare const inject: string[]` | 21 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 26 |

## dsh-client-ui-deliverables/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "deliverables"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| const | en | `export declare const en: Record<DeliverablesKey, string>` | 46 |
| type | DeliverablesKey | `export type DeliverablesKey` | 48 |

## dsh-client-ui-deliverables/lib/types/client/present-open.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PresentedOpenPhase | `export type PresentedOpenPhase` | 4 |
| class | PresentedOpenController | `export declare class PresentedOpenController` | 6 |

## dsh-client-ui-deliverables/lib/types/client/turn-deliverables.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PresentedPath | `export interface PresentedPath extends PresentedFile` | 6 |
| interface | ProducedPath | `interface ProducedPath` | 10 |
| interface | DeliverablesTurnData | `export interface DeliverablesTurnData` | 15 |
| interface | DeliverablesState | `interface DeliverablesState extends DeliverablesTurnData` | 25 |
| function | producedForClosing | `export declare function producedForClosing(data: Readonly<DeliverablesTurnData> \| undefined, seq?: number): readonly string[]` | 46 |
| function | selectProducedFiles | `export declare function selectProducedFiles(owner: TurnTailOwnerProps): readonly string[] \| null` | 52 |
| const | deliverablesDefinition | `export declare const deliverablesDefinition: ConversationNodeDefinition<DeliverablesState>` | 54 |
| function | presentedForClosing | `export declare function presentedForClosing(owner: TurnTailOwnerProps): PresentedPath[]` | 60 |
| re-export | { basename } | `export { basename } from '../presented.ts';` | 61 |
| function | producedFileMentions | `export declare function producedFileMentions(paths: readonly string[], openFile: (path: string) => void, label: (path: string) => string): MarkdownFileMentions` | 74 |

## dsh-client-ui-deliverables/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 10 |
| function | apply | `export declare function apply(ctx: Context): void` | 15 |

## dsh-client-ui-deliverables/lib/types/present-open.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerPresentOpen | `export declare function registerPresentOpen(ctx: Context): void` | 7 |

## dsh-client-ui-deliverables/lib/types/presented.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PRESENT_OPEN_PATH | `export declare const PRESENT_OPEN_PATH = "/api/present.open"` | 6 |
| const | PRESENT_HOST_PATH | `export declare const PRESENT_HOST_PATH = "/api/present.host"` | 8 |
| type | PresentedAction | `export type PresentedAction` | 10 |
| interface | PresentedHost | `export interface PresentedHost` | 12 |
| function | isPresentedHost | `export declare function isPresentedHost(value: unknown): value is PresentedHost` | 22 |
| function | isPresentedFile | `export declare function isPresentedFile(value: unknown): value is PresentedFile` | 28 |
| function | presentedFileUrl | `export declare function presentedFileUrl(sessionId: SessionId, seq: number, index: number): string` | 36 |
| function | isPresentedData | `export declare function isPresentedData(value: unknown): value is {` | 42 |
| function | basename | `export declare function basename(path: string): string` | 52 |

