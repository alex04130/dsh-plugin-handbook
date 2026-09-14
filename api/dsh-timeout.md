# dsh-timeout

> Zero-dependency timeout/deadline primitive: clampTimeout, deadline, timeoutOf, TimeoutReason (timing + classification only, no termination)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-timeout/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | TimeoutReason | `export declare class TimeoutReason extends Error` | 11 |
| method | TimeoutReason.constructor | `constructor(code: string, timeoutMs: number);` | 19 |
| const | MAX_TIMER_DELAY_MS | `export declare const MAX_TIMER_DELAY_MS = 2147483647` | 22 |
| function | clampTimeout | `export declare function clampTimeout(requested: number \| undefined, def: number, max: number, name?: string): number` | 35 |
| interface | Deadline | `export interface Deadline` | 37 |
| interface | IdleWatchdog | `export interface IdleWatchdog` | 44 |
| function | deadline | `export declare function deadline(upstream: AbortSignal \| undefined, timeoutMs: number, code: string): Deadline` | 68 |
| function | idleWatchdog | `export declare function idleWatchdog(upstream: AbortSignal \| undefined, timeoutMs: number, code: string): IdleWatchdog` | 80 |
| function | timeoutOf | `export declare function timeoutOf(x: AbortSignal \| {` | 90 |

