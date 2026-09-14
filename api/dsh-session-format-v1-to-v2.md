# dsh-session-format-v1-to-v2

> Frozen released-v1 Session codec and assistant-stream migration to v2
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-format-v1-to-v2/lib/types/codec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | releasedV2SessionFormatCodec | `export declare const releasedV2SessionFormatCodec: Readonly<{` | 3 |

## dsh-session-format-v1-to-v2/lib/types/dispositions.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | RELEASED_V2_EVENT_DISPOSITIONS | `export declare const RELEASED_V2_EVENT_DISPOSITIONS: Readonly<Record<string, ReleasedV0PayloadDisposition>>` | 3 |
| const | RELEASED_V2_EVENT_TYPES | `export declare const RELEASED_V2_EVENT_TYPES: readonly string[]` | 5 |

## dsh-session-format-v1-to-v2/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { releasedV1SessionFormatCodec } | `export { releasedV1SessionFormatCodec } from '@deepseek-ai/dsh-session-format-v0-to-v1';` | 2 |
| re-export | * | `export * from './codec.ts';` | 3 |
| re-export | * | `export * from './dispositions.ts';` | 4 |
| re-export | * | `export * from './migration.ts';` | 5 |
| re-export | { assertReleasedV2Header, restoreRelease | `export { assertReleasedV2Header, restoreReleasedV2Artifact } from './validation.ts';` | 6 |

## dsh-session-format-v1-to-v2/lib/types/migration.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | sessionFormatV1ToV2 | `export declare const sessionFormatV1ToV2: import("@deepseek-ai/dsh-session-format").SessionFormatMigration` | 2 |

## dsh-session-format-v1-to-v2/lib/types/testing/validation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertReleasedV2Artifact | `export declare function assertReleasedV2Artifact(artifact: SessionFormatArtifact): void` | 6 |
| re-export | { assertReleasedV2PhysicalArtifact } | `export { assertReleasedV2PhysicalArtifact } from '../validation.ts';` | 7 |

## dsh-session-format-v1-to-v2/lib/types/validation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertReleasedV2Header | `export declare function assertReleasedV2Header(header: SessionFormatHeader): void` | 7 |
| function | releasedV2Record | `export declare function releasedV2Record(value: SessionFormatJsonValue \| undefined, label: string): SessionFormatJsonObject` | 14 |
| function | assertReleasedV2Keys | `export declare function assertReleasedV2Keys(value: SessionFormatJsonObject, required: readonly string[], optional: readonly string[], label: string): void` | 22 |
| function | restoreReleasedV2Artifact | `export declare function restoreReleasedV2Artifact(artifact: SessionFormatArtifact, knownEventTypes: ReadonlySet<string>, relationshipHeaderVersion?: number): Se` | 30 |
| function | assertReleasedV2PhysicalArtifact | `export declare function assertReleasedV2PhysicalArtifact(artifact: SessionFormatArtifact): void` | 35 |

