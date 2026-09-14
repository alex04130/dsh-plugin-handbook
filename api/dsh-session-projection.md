# dsh-session-projection

> Session-projection seam: the merge-extensible projection type table, the provider contract, and the ctx.sessionProjections registry serving whole current values of log-derived per-session state
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-projection/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ProjectionDefinition | `export interface ProjectionDefinition<K extends keyof SessionProjectionStateMap, S extends SessionProjectionStateMap[K]` | 38 |
| type | ProjectionChangeListener | `export type ProjectionChangeListener` | 86 |
| interface | ProjectionSnapshot | `export interface ProjectionSnapshot` | 92 |
| interface | ProjectionCheckpointRow | `export interface ProjectionCheckpointRow` | 106 |
| type | ProjectionCheckpoint | `export type ProjectionCheckpoint` | 115 |
| class | SessionProjectionRegistry | `export declare class SessionProjectionRegistry extends Service` | 134 |
| method | SessionProjectionRegistry.constructor | `constructor(ctx: Context);` | 141 |
| default | SessionProjectionRegistry | `export default SessionProjectionRegistry;` | 291 |

## dsh-session-projection/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionProjectionMap | `export interface SessionProjectionMap` | 16 |
| interface | SessionProjectionStateMap | `export interface SessionProjectionStateMap` | 23 |

