# dsh-client-ui-schedule

> Read-only active Schedule catalog in the Web Session header
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-schedule/lib/types/client/ScheduleCatalogAction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ScheduleCatalogActionProps | `export type ScheduleCatalogActionProps` | 5 |
| function | formatScheduleFrequency | `export declare function formatScheduleFrequency(record: ScheduleRecord, t: TranslateNS<typeof NS>): string` | 7 |
| function | formatScheduleLocalTime | `export declare function formatScheduleLocalTime(scheduledAt: string, locale?: string): string` | 9 |
| function | formatScheduleRelative | `export declare function formatScheduleRelative(scheduledAt: string, now: number, t: TranslateNS<typeof NS>): string` | 11 |
| function | orderScheduleRecords | `export declare function orderScheduleRecords(records: readonly ScheduleRecord[], now: number): ScheduleRecord[]` | 13 |
| function | ScheduleCatalogAction | `export declare function ScheduleCatalogAction({ useSession, useProjection, t }: ScheduleCatalogActionProps): import("react").JSX.Element \| null` | 15 |

## dsh-client-ui-schedule/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 11 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 13 |

## dsh-client-ui-schedule/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "schedule.catalog"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| const | en | `export declare const en: Record<ScheduleCatalogKey, string>` | 26 |
| type | ScheduleCatalogKey | `export type ScheduleCatalogKey` | 28 |

## dsh-client-ui-schedule/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 6 |

