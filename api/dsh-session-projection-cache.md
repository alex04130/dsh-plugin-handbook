# dsh-session-projection-cache

> Persisted projection cache (ctx.sessionProjectionCache): durable per-session checkpoint records on the session_projcache storage domain (per-record layout), throttled write-behind, and the cached listing read
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-projection-cache/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { checkpointIdentity, checkpointRecord,  | `export { checkpointIdentity, checkpointRecord, checkpointRow, projectionCacheDomainSpec } from './spec.ts';` | 23 |
| interface | Config | `export interface Config` | 37 |
| const | Config | `export declare const Config: z<Config>` | 43 |
| class | SessionProjectionCache | `export declare class SessionProjectionCache extends Service` | 53 |
| method | SessionProjectionCache.constructor | `constructor(ctx: Context, config: Config);` | 59 |
| default | SessionProjectionCache | `export default SessionProjectionCache;` | 158 |

## dsh-session-projection-cache/lib/types/spec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | checkpointRow | `export declare const checkpointRow: z.ZodObject<{` | 23 |
| const | checkpointIdentity | `export declare const checkpointIdentity: z.ZodObject<{` | 44 |
| type | CheckpointIdentity | `export type CheckpointIdentity` | 52 |
| const | checkpointRecord | `export declare const checkpointRecord: z.ZodObject<{` | 59 |
| type | CheckpointRecord | `export type CheckpointRecord` | 74 |
| const | projectionCacheDomainSpec | `export declare const projectionCacheDomainSpec: {` | 99 |

