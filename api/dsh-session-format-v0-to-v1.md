# dsh-session-format-v0-to-v1

> Frozen released-v0 Session codec and identity migration to v1
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-session-format-v0-to-v1/lib/types/codec.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ReleasedAssistantChunkRun | `export interface ReleasedAssistantChunkRun extends SessionFormatEventRun` | 3 |
| function | isReleasedAssistantChunkRun | `export declare function isReleasedAssistantChunkRun(run: SessionFormatEventRun): run is ReleasedAssistantChunkRun` | 16 |
| const | releasedV0SessionFormatCodec | `export declare const releasedV0SessionFormatCodec: Readonly<{` | 18 |
| const | releasedV1SessionFormatCodec | `export declare const releasedV1SessionFormatCodec: Readonly<{` | 29 |

## dsh-session-format-v0-to-v1/lib/types/dispositions.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ReleasedV0PayloadDisposition | `export interface ReleasedV0PayloadDisposition` | 2 |
| function | defineReleasedPayloadDisposition | `export declare function defineReleasedPayloadDisposition(required: readonly string[], optional?: readonly string[], opaque?: readonly string[]): ReleasedV0Paylo` | 15 |
| const | RELEASED_V0_EVENT_DISPOSITIONS | `export declare const RELEASED_V0_EVENT_DISPOSITIONS: Readonly<Record<string, ReleasedV0PayloadDisposition>>` | 23 |
| const | RELEASED_V0_EVENT_TYPES | `export declare const RELEASED_V0_EVENT_TYPES: readonly string[]` | 25 |

## dsh-session-format-v0-to-v1/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | * | `export * from './codec.ts';` | 2 |
| re-export | * | `export * from './dispositions.ts';` | 3 |
| re-export | * | `export * from './migration.ts';` | 4 |
| re-export | { assertReleasedPayloadSemantics } | `export { assertReleasedPayloadSemantics } from './payload-validation.ts';` | 5 |
| re-export | { assertReleasedArtifactRelationships } | `export { assertReleasedArtifactRelationships } from './relationships.ts';` | 6 |
| re-export | { assertReleasedSurfaceMetadata, assertR | `export { assertReleasedSurfaceMetadata, assertReleasedEventPayload, assertReleasedV1Header, restoreReleasedV1Artifact, } from './validation.ts';` | 7 |

## dsh-session-format-v0-to-v1/lib/types/migration.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | sessionFormatV0ToV1 | `export declare const sessionFormatV0ToV1: import("@deepseek-ai/dsh-session-format").SessionFormatMigration` | 2 |

## dsh-session-format-v0-to-v1/lib/types/payload-validation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertReleasedPayloadSemantics | `export declare function assertReleasedPayloadSemantics(event: SessionFormatEvent, version: number): void` | 7 |

## dsh-session-format-v0-to-v1/lib/types/relationships.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ReleasedRelationshipExtensions | `export interface ReleasedRelationshipExtensions` | 3 |
| function | assertReleasedArtifactRelationships | `export declare function assertReleasedArtifactRelationships(artifact: SessionFormatArtifact, extensions?: ReleasedRelationshipExtensions): void` | 16 |

## dsh-session-format-v0-to-v1/lib/types/testing/restore.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | restoreV0ToV1 | `export declare function restoreV0ToV1(header: unknown, rows: readonly unknown[], recovery?: SessionFormatRecovery): SessionFormatArtifact` | 9 |
| function | restoreV1 | `export declare function restoreV1(header: unknown, rows: readonly unknown[], recovery?: SessionFormatRecovery): SessionFormatArtifact` | 17 |

## dsh-session-format-v0-to-v1/lib/types/testing/validation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertReleasedV0SourceArtifact | `export declare function assertReleasedV0SourceArtifact(artifact: SessionFormatArtifact): void` | 6 |
| function | assertNormalizedReleasedV0Artifact | `export declare function assertNormalizedReleasedV0Artifact(artifact: SessionFormatArtifact): void` | 11 |
| function | assertReleasedV1MigrationSource | `export declare function assertReleasedV1MigrationSource(artifact: SessionFormatArtifact): void` | 16 |
| function | assertReleasedV1Artifact | `export declare function assertReleasedV1Artifact(artifact: SessionFormatArtifact): void` | 21 |
| function | assertReleasedV1PhysicalArtifact | `export declare function assertReleasedV1PhysicalArtifact(artifact: SessionFormatArtifact): void` | 26 |

## dsh-session-format-v0-to-v1/lib/types/validation-helpers.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | releasedV0Record | `export declare function releasedV0Record(value: unknown, label: string): Record<string, SessionFormatJsonValue>` | 8 |
| function | assertReleasedV0Keys | `export declare function assertReleasedV0Keys(record: Readonly<Record<string, unknown>>, required: readonly string[], optional: readonly string[] \| undefined, l` | 16 |

## dsh-session-format-v0-to-v1/lib/types/validation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertReleasedSessionFormatHeader | `export declare function assertReleasedSessionFormatHeader(header: SessionFormatHeader, version: 0 \| 1): void` | 7 |
| function | assertReleasedV1Header | `export declare function assertReleasedV1Header(header: SessionFormatHeader): void` | 12 |
| function | restoreReleasedV1Artifact | `export declare function restoreReleasedV1Artifact(artifact: SessionFormatArtifact, knownEventTypes: ReadonlySet<string>): SessionFormatArtifact` | 19 |
| function | assertReleasedArtifactCoordinates | `export declare function assertReleasedArtifactCoordinates(artifact: SessionFormatArtifact, allowLegacySteering: boolean, knownEventTypes?: ReadonlySet<string>, ` | 28 |
| function | assertReleasedSurfaceMetadata | `export declare function assertReleasedSurfaceMetadata(record: Record<string, SessionFormatJsonValue>, seq: number, type: string, assistantSources: 'allow-empty-` | 36 |
| function | assertReleasedEventPayload | `export declare function assertReleasedEventPayload(event: SessionFormatEvent, version: 0 \| 1): void` | 42 |

