# dsh-api-remotes

> Remote BFF assembly for application-selected Host capabilities
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-api-remotes/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 58 |
| function | apply | `export declare function apply(ctx: Context): Promise<() => Promise<void>>` | 64 |

## dsh-api-remotes/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { API_REMOTE_FORWARDED_EVENTS } | `export { API_REMOTE_FORWARDED_EVENTS } from './remote-events.ts';` | 4 |
| const | inject | `export declare const inject: string[]` | 7 |
| function | apply | `export declare function apply(ctx: Context): void` | 9 |

## dsh-api-remotes/lib/types/remote-events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | API_REMOTE_FORWARDED_EVENTS | `export declare const API_REMOTE_FORWARDED_EVENTS: readonly [{` | 12 |

## dsh-api-remotes/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ApiRemoteForwardedEvent | `export type ApiRemoteForwardedEvent` | 13 |

