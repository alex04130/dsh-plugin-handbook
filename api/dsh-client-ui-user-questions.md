# dsh-client-ui-user-questions

> Web ask_user_question composer takeover and plan-review presentation UI
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-user-questions/lib/types/client/PlanReviewPanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PlanReviewPanelProps | `export type PlanReviewPanelProps` | 3 |
| function | PlanReviewPanel | `export declare function PlanReviewPanel({ pending, review, t }: PlanReviewPanelProps): import("react").JSX.Element` | 13 |

## dsh-client-ui-user-questions/lib/types/client/QuestionComposer.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | parseRecommendedLabel | `export declare function parseRecommendedLabel(label: string): {` | 7 |
| function | QuestionComposer | `export declare function QuestionComposer(props: QuestionComposerProps): import("react").JSX.Element` | 25 |

## dsh-client-ui-user-questions/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | QuestionAnswer | `export type QuestionAnswer` | 13 |
| type | QuestionItem | `type QuestionItem` | 15 |
| type | QuestionOption | `type QuestionOption` | 17 |
| interface | PlanReview | `export interface PlanReview` | 25 |
| function | planReviewOf | `export declare function planReviewOf(questions: readonly QuestionItem[]): PlanReview \| undefined` | 55 |
| class | PendingQuestion | `export declare class PendingQuestion` | 57 |
| method | PendingQuestion.constructor | `constructor(sessionId: SessionId, questions: readonly AskUserQuestionItem[], signal?: AbortSignal);` | 73 |
| type | QuestionWait | `export type QuestionWait` | 97 |
| type | QuestionComposerProps | `export type QuestionComposerProps` | 105 |
| export-list |  | `export {};` | 108 |

## dsh-client-ui-user-questions/lib/types/client/draft-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | QuestionDraftAnswer | `export interface QuestionDraftAnswer` | 8 |
| interface | QuestionDraftProgress | `export interface QuestionDraftProgress` | 17 |
| interface | QuestionDraftState | `interface QuestionDraftState` | 23 |
| type | QuestionDraftActions | `type QuestionDraftActions` | 27 |
| function | createQuestionDraftStore | `export declare function createQuestionDraftStore(): EngineStoreHandle<QuestionDraftState, QuestionDraftActions>` | 35 |
| export-list |  | `export {};` | 36 |

## dsh-client-ui-user-questions/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 26 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 33 |

## dsh-client-ui-user-questions/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 3 |
| type | QuestionKey | `export type QuestionKey` | 21 |
| const | en | `export declare const en: {` | 23 |

## dsh-client-ui-user-questions/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 10 |

