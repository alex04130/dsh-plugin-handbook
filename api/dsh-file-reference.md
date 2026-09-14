# dsh-file-reference

> File-reference discovery contract and shared @file grammar
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-file-reference/lib/types/grammar.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ActiveAtToken | `export interface ActiveAtToken` | 8 |
| function | activeAtToken | `export declare function activeAtToken(line: string, cursorCol: number): ActiveAtToken \| undefined` | 23 |
| function | formatFileMention | `export declare function formatFileMention(candidate: FileReferenceCandidate, preserveQuote: boolean): string \| undefined` | 32 |

## dsh-file-reference/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { activeAtToken, formatFileMention } | `export { activeAtToken, formatFileMention } from './grammar.ts';` | 9 |
| const | FILE_REFERENCE_PROMPT | `export declare const FILE_REFERENCE_PROMPT = "Tokens prefixed with @ are workspace paths the user explicitly referenced, relative to the workspace root. A trail` | 13 |
| class | FileReferenceService | `export declare abstract class FileReferenceService extends Service` | 20 |
| method | FileReferenceService.constructor | `constructor(ctx: Context);` | 21 |
| default | FileReferenceService | `export default FileReferenceService;` | 31 |

## dsh-file-reference/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FileReferenceCandidate | `export interface FileReferenceCandidate` | 7 |

