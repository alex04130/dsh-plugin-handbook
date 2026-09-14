# dsh-user-questions

> Abstract user-questions seam (ctx.userQuestions) for asking the human during agent runs
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-user-questions/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AskUserQuestionRequest | `export interface AskUserQuestionRequest extends AskUserQuestionRequestEvent` | 19 |
| class | UserQuestionError | `export declare class UserQuestionError extends HarnessError` | 22 |
| method | UserQuestionError.constructor | `constructor(message: string, code: string, options?: ErrorOptions);` | 23 |
| class | UserQuestionService | `export declare class UserQuestionService extends Service` | 26 |
| method | UserQuestionService.constructor | `constructor(ctx: Context);` | 27 |
| default | UserQuestionService | `export default UserQuestionService;` | 46 |

## dsh-user-questions/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AskUserQuestionOption | `export interface AskUserQuestionOption` | 5 |
| type | AskUserQuestionIntent | `export type AskUserQuestionIntent` | 18 |
| interface | AskUserQuestionItem | `export interface AskUserQuestionItem` | 29 |
| interface | AskUserQuestionAnswerItem | `export interface AskUserQuestionAnswerItem` | 46 |
| interface | AskUserQuestionAnswer | `export interface AskUserQuestionAnswer` | 55 |
| interface | AskUserQuestionRequestEvent | `export interface AskUserQuestionRequestEvent` | 60 |

