# dsh-anonymous-user-id

> Shared anonymous user identity for DeepSeek Harness telemetry and feedback correlation
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-anonymous-user-id/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AnonymousUserId | `export type AnonymousUserId` | 20 |
| const | ANONYMOUS_USER_ID_FILE_NAME | `export declare const ANONYMOUS_USER_ID_FILE_NAME = ".anonymous-user-id"` | 22 |
| interface | AnonymousUserIdOptions | `export interface AnonymousUserIdOptions` | 24 |
| function | getOrCreateAnonymousUserId | `export declare function getOrCreateAnonymousUserId(options?: AnonymousUserIdOptions): AnonymousUserId` | 41 |

