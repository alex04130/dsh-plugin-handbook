# dsh-client-ui-session

> Session Controller adapter for React and session-scoped slots
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-session/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | UseSessions | `export type UseSessions` | 7 |
| type | SessionSnapshotSelector | `export type SessionSnapshotSelector` | 9 |
| type | UseSession | `export type UseSession` | 11 |
| interface | SessionPendingInteractionBase | `export interface SessionPendingInteractionBase` | 13 |
| interface | SessionPendingInteractionMap | `export interface SessionPendingInteractionMap` | 22 |
| type | SessionPendingInteraction | `export type SessionPendingInteraction` | 25 |
| type | SessionPendingInteractionSnapshot | `export type SessionPendingInteractionSnapshot` | 29 |
| type | UseSessionPendingInteraction | `export type UseSessionPendingInteraction` | 31 |
| type | PendingInteractionPublisher | `export type PendingInteractionPublisher<T extends SessionPendingInteractionBase>` | 33 |
| type | SessionSourceRoster | `type SessionSourceRoster` | 64 |
| type | SessionSourceRecord | `type SessionSourceRecord<Roster extends SessionSourceRoster, Value>` | 65 |
| interface | SessionSourceContribution | `export interface SessionSourceContribution<Hooks extends SessionSourceRoster` | 67 |
| interface | SessionSourceDescriptor | `export interface SessionSourceDescriptor<Hooks extends SessionSourceRoster` | 73 |
| class | UiSession | `export declare class UiSession extends Service` | 85 |
| method | UiSession.constructor | `constructor(ctx: Context, sessions: ISessions);` | 103 |
| const | inject | `export declare const inject: string[]` | 128 |
| function | apply | `export declare function apply(ctx: Context): void` | 133 |
| export-list |  | `export {};` | 134 |

## dsh-client-ui-session/lib/types/client/session-provider.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | renderSessionArea | `export declare function renderSessionArea(binding: StandardSourceBinding, { empty, children }: SessionAreaProps): ReactNode` | 10 |

## dsh-client-ui-session/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

