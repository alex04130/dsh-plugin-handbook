# dsh-client-ui-subagent

> Subagent conversation catalog, continuation routing UI, and '@' reference source
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-subagent/lib/types/client/SubagentHeaderLineage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SubagentCatalogInjected | `export interface SubagentCatalogInjected` | 6 |
| type | SubagentHeaderLineageProps | `export type SubagentHeaderLineageProps` | 12 |
| function | SubagentHeaderLineage | `export declare function SubagentHeaderLineage({ lineageSessionId, displayTitle, openTitle, useSessions, openChild, refresh, setCatalogOpen, t, }: SubagentHeader` | 18 |

## dsh-client-ui-subagent/lib/types/client/SubagentReadOnlyComposer.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SubagentReadOnlyMatch | `export interface SubagentReadOnlyMatch` | 4 |
| type | SubagentReadOnlyComposerProps | `export type SubagentReadOnlyComposerProps` | 8 |
| function | SubagentReadOnlyComposer | `export declare function SubagentReadOnlyComposer({ matched, t, }: Pick<SubagentReadOnlyComposerProps, 'matched' \| 't'>): import("react").JSX.Element` | 16 |

## dsh-client-ui-subagent/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 13 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 18 |

## dsh-client-ui-subagent/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "subagent"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| const | en | `export declare const en: Record<SubagentKey, string>` | 45 |
| type | SubagentKey | `export type SubagentKey` | 47 |

## dsh-client-ui-subagent/lib/types/client/subagent-lineage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LineageEntry | `interface LineageEntry` | 3 |
| interface | SubagentDescendantSummary | `export interface SubagentDescendantSummary` | 10 |
| function | indexSubagentDescendants | `export declare function indexSubagentDescendants(summaries: Readonly<Record<SessionId, LineageEntry>>): ReadonlyMap<SessionId, SubagentDescendantSummary>` | 19 |
| export-list |  | `export {};` | 20 |

## dsh-client-ui-subagent/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

