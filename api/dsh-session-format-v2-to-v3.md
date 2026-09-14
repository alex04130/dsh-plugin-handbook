# dsh-session-format-v2-to-v3

> Streaming system-prompt, canonical-envelope and PTC migration into V3
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-format-v2-to-v3/lib/types/codec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | releasedV3SessionFormatCodec | `export declare const releasedV3SessionFormatCodec: Readonly<{` | 4 |
| function | assertV3RowAdmission | `export declare function assertV3RowAdmission(row: unknown): void` | 42 |

## dsh-session-format-v2-to-v3/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { releasedV2SessionFormatCodec } | `export { releasedV2SessionFormatCodec } from '@deepseek-ai/dsh-session-format-v1-to-v2';` | 2 |
| re-export | * | `export * from './codec.ts';` | 3 |
| re-export | * | `export * from './migration.ts';` | 4 |
| re-export | * | `export * from './validation.ts';` | 5 |

## dsh-session-format-v2-to-v3/lib/types/migration.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | sessionFormatV2ToV3 | `export declare const sessionFormatV2ToV3: import("@deepseek-ai/dsh-session-format").SessionFormatMigration` | 3 |

## dsh-session-format-v2-to-v3/lib/types/payload.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SURFACE_TYPES | `export declare const SURFACE_TYPES: ReadonlySet<string>` | 4 |
| function | record | `export declare function record(value: SessionFormatJsonValue \| undefined, label: string): SessionFormatJsonObject` | 11 |
| function | keys | `export declare function keys(value: SessionFormatJsonObject, required: readonly string[], optional: readonly string[], label: string): void` | 19 |
| function | assertEvent | `export declare function assertEvent(event: SessionFormatEvent, version: 2 \| 3): void` | 25 |
| function | isRepairIdentity | `export declare function isRepairIdentity(id: SessionFormatJsonValue \| undefined, callId: SessionFormatJsonValue \| undefined): callId is string` | 32 |
| function | assertV3StructuralRow | `export declare function assertV3StructuralRow(value: unknown): void` | 37 |
| function | assertV3Event | `export declare function assertV3Event(event: SessionFormatEvent, knownEventTypes?: ReadonlySet<string>): void` | 44 |
| function | canonicalizeTransformedEvent | `export declare function canonicalizeTransformedEvent(event: SessionFormatEvent): SessionFormatEvent` | 50 |

## dsh-session-format-v2-to-v3/lib/types/references.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | remapEvent | `export declare function remapEvent(event: SessionFormatEvent, seq: number, mapping: readonly number[]): SessionFormatEvent` | 10 |

## dsh-session-format-v2-to-v3/lib/types/validation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertReleasedV3Header | `export declare function assertReleasedV3Header(header: SessionFormatHeader): void` | 7 |
| function | restoreReleasedV3Artifact | `export declare function restoreReleasedV3Artifact(artifact: SessionFormatArtifact, knownEventTypes: ReadonlySet<string>): SessionFormatArtifact` | 15 |
| function | assertV3EventAdmission | `export declare function assertV3EventAdmission(event: SessionFormatEvent): void` | 20 |

