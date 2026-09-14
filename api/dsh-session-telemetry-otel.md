# dsh-session-telemetry-otel

> OpenTelemetry backend for the DeepSeek Harness telemetry seam: hands captured session records to the OTel JS SDK's log pipeline
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-telemetry-otel/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DEFAULT_TELEMETRY_MODE | `export declare const DEFAULT_TELEMETRY_MODE = SessionTelemetryMode.FEEDBACK_ONLY` | 25 |
| interface | Config | `export interface Config` | 31 |
| const | Config | `export declare const Config: z<Config>` | 59 |
| const | DEFAULT_SHUTDOWN_TIMEOUT_MILLIS | `export declare const DEFAULT_SHUTDOWN_TIMEOUT_MILLIS = 3000` | 61 |
| class | OpenTelemetrySessionBackend | `export declare class OpenTelemetrySessionBackend extends SessionTelemetryBackend` | 68 |
| method | OpenTelemetrySessionBackend.constructor | `constructor(ctx: Context, config: Config);` | 74 |
| default | OpenTelemetrySessionBackend | `export default OpenTelemetrySessionBackend;` | 92 |

