# dsh-session-telemetry

> SessionTelemetryBackend seam for the DeepSeek Harness: session-event capture, projection, redaction, and handoff to a reporting backend
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-telemetry/lib/types/coordinator.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionTelemetryCapture | `export type SessionTelemetryCapture` | 20 |
| interface | SessionTelemetryCaptureOptions | `export interface SessionTelemetryCaptureOptions` | 22 |
| class | SessionTelemetryCoordinator | `export declare class SessionTelemetryCoordinator` | 43 |
| method | SessionTelemetryCoordinator.constructor | `constructor(ctx: Context, backend: SessionTelemetrySink, options?: SessionTelemetryCaptureOptions);` | 58 |

## dsh-session-telemetry/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionTelemetrySeverity | `export type SessionTelemetrySeverity` | 51 |
| interface | SessionTelemetryRecord | `export interface SessionTelemetryRecord` | 59 |
| interface | SessionTelemetrySink | `export interface SessionTelemetrySink` | 89 |
| type | SessionTelemetrySharingStatus | `export type SessionTelemetrySharingStatus` | 130 |
| class | SessionTelemetryBackend | `export declare abstract class SessionTelemetryBackend extends Service implements SessionTelemetrySink` | 137 |
| method | SessionTelemetryBackend.constructor | `constructor(ctx: Context);` | 138 |
| re-export | { SessionTelemetryCoordinator, type Sess | `export { SessionTelemetryCoordinator, type SessionTelemetryCapture, type SessionTelemetryCaptureOptions } from './coordinator.ts';` | 156 |

