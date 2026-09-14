# dsh-attachment-local

> Private content-addressed DSH_HOME attachment storage
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-attachment-local/lib/types/compression-limiter.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | compressionFailure | `export declare function compressionFailure(reason: unknown): Error` | 7 |
| class | CompressionLimiter | `export declare class CompressionLimiter` | 9 |
| method | CompressionLimiter.constructor | `constructor(concurrency: number);` | 16 |

## dsh-attachment-local/lib/types/encoding.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | IMAGE_ENCODING_QUALITIES | `export declare const IMAGE_ENCODING_QUALITIES: readonly [85, 75, 60]` | 4 |
| const | WEBP_ENCODING_EFFORT | `export declare const WEBP_ENCODING_EFFORT = 0` | 6 |
| interface | EncodedImage | `export interface EncodedImage` | 8 |
| function | encodingLadder | `export declare function encodingLadder(prepared: Sharp, hasAlpha: boolean): Array<() => Promise<EncodedImage>>` | 21 |
| interface | EncodedCandidate | `export interface EncodedCandidate` | 23 |
| interface | ExhaustedEncoding | `export interface ExhaustedEncoding<T extends EncodedCandidate>` | 27 |
| function | encodeFirstWithinLimit | `export declare function encodeFirstWithinLimit<T extends EncodedCandidate>(attempts: readonly (() => Promise<T>)[], maxBytes: number): Promise<T \| ExhaustedEnc` | 36 |
| function | isExhaustedEncoding | `export declare function isExhaustedEncoding<T extends EncodedCandidate>(result: T \| ExhaustedEncoding<T>): result is ExhaustedEncoding<T>` | 42 |

## dsh-attachment-local/lib/types/file-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | fileLeafName | `export declare function fileLeafName(value: string \| undefined): string` | 13 |
| function | storedFilePath | `export declare function storedFilePath(root: string, ref: FileAttachmentRef): string` | 23 |
| function | saveFileVerbatim | `export declare function saveFileVerbatim(root: string, input: SaveFileAttachment): Promise<FileAttachmentRef>` | 30 |
| function | saveFileStreamVerbatim | `export declare function saveFileStreamVerbatim(root: string, input: SaveFileStreamAttachment): Promise<FileAttachmentRef>` | 37 |
| function | readFileStreamVerbatim | `export declare function readFileStreamVerbatim(root: string, ref: FileAttachmentRef, signal?: AbortSignal): AsyncIterable<Uint8Array>` | 45 |

## dsh-attachment-local/lib/types/image.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DetectedImage | `export interface DetectedImage` | 4 |
| function | encodedAlphaIsCompatible | `export declare function encodedAlphaIsCompatible(sourceHasAlpha: boolean \| undefined, output: Pick<DetectedImage, 'mediaType' \| 'hasAlpha'>): boolean` | 30 |
| function | probeImage | `export declare function probeImage(data: Uint8Array): Promise<DetectedImage>` | 39 |
| interface | DecodedImageLimits | `export interface DecodedImageLimits` | 41 |
| function | detectImage | `export declare function detectImage(data: Uint8Array, limits?: DecodedImageLimits): Promise<DetectedImage>` | 53 |

## dsh-attachment-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { canPassThroughNormalization, normalize | `export { canPassThroughNormalization, normalizeImage } from './normalization.ts';` | 7 |
| re-export | { commitPreparedImageFile, prepareImageF | `export { commitPreparedImageFile, prepareImageFile, readImageFile, saveImageFile, validateImageFile } from './store.ts';` | 9 |
| re-export | { readRequestImageFile, requestImageVari | `export { readRequestImageFile, requestImageVariantId } from './request-image.ts';` | 11 |
| const | DEFAULT_MAX_IMAGE_BYTES | `export declare const DEFAULT_MAX_IMAGE_BYTES: number` | 13 |
| const | DEFAULT_MAX_IMAGES_PER_MESSAGE | `export declare const DEFAULT_MAX_IMAGES_PER_MESSAGE = 20` | 15 |
| const | DEFAULT_MAX_MESSAGE_IMAGE_BYTES | `export declare const DEFAULT_MAX_MESSAGE_IMAGE_BYTES: number` | 17 |
| const | DEFAULT_MAX_IMAGE_PIXELS | `export declare const DEFAULT_MAX_IMAGE_PIXELS = 64000000` | 19 |
| const | DEFAULT_MAX_IMAGE_DIMENSION | `export declare const DEFAULT_MAX_IMAGE_DIMENSION = 8192` | 21 |
| const | DEFAULT_NORMALIZED_IMAGE_MAX_PIXELS | `export declare const DEFAULT_NORMALIZED_IMAGE_MAX_PIXELS: number` | 29 |
| const | DEFAULT_NORMALIZED_IMAGE_MAX_DIMENSION | `export declare const DEFAULT_NORMALIZED_IMAGE_MAX_DIMENSION = 8192` | 31 |
| const | DEFAULT_NORMALIZED_IMAGE_MAX_BYTES | `export declare const DEFAULT_NORMALIZED_IMAGE_MAX_BYTES: number` | 33 |
| const | DEFAULT_IMAGE_COMPRESSION_CONCURRENCY | `export declare const DEFAULT_IMAGE_COMPRESSION_CONCURRENCY = 2` | 35 |
| const | MAX_IMAGE_COMPRESSION_CONCURRENCY | `export declare const MAX_IMAGE_COMPRESSION_CONCURRENCY = 8` | 37 |
| interface | Config | `export interface Config` | 39 |
| class | LocalAttachmentStore | `export declare class LocalAttachmentStore extends AttachmentStore` | 65 |
| method | LocalAttachmentStore.constructor | `constructor(ctx: Context, config: Config);` | 76 |
| default | LocalAttachmentStore | `export default LocalAttachmentStore;` | 89 |

## dsh-attachment-local/lib/types/normalization.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | NormalizationPolicy | `export interface NormalizationPolicy` | 5 |
| interface | NormalizedImage | `export interface NormalizedImage` | 14 |
| function | canPassThroughNormalization | `export declare function canPassThroughNormalization(detected: DetectedImage, bytes: number, policy: NormalizationPolicy): boolean` | 27 |
| function | normalizeImage | `export declare function normalizeImage(data: Uint8Array, detected: DetectedImage, policy: NormalizationPolicy): Promise<NormalizedImage>` | 39 |

## dsh-attachment-local/lib/types/request-image.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | REQUEST_IMAGE_TRANSFORM_VERSION | `export declare const REQUEST_IMAGE_TRANSFORM_VERSION = "request-image-v5"` | 5 |
| function | requestImageVariantId | `export declare function requestImageVariantId(attachment: ImageAttachmentRef, policy: ImageRequestPolicy): ReturnType<typeof ImageVariantId>` | 12 |
| function | readRequestImageFile | `export declare function readRequestImageFile(root: string, attachment: StoredImageAttachment, policy: ImageRequestPolicy, signal?: AbortSignal): Promise<Request` | 21 |

## dsh-attachment-local/lib/types/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | normalizedImagePath | `export declare function normalizedImagePath(root: string, ref: ImageAttachmentRef): string` | 10 |
| function | validateImageFile | `export declare function validateImageFile(input: SaveImageAttachment, limits: ImageAttachmentLimits, policy: NormalizationPolicy): Promise<void>` | 20 |
| interface | PreparedImageFile | `export interface PreparedImageFile` | 22 |
| function | prepareImageFile | `export declare function prepareImageFile(input: SaveImageAttachment, limits: ImageAttachmentLimits, policy: NormalizationPolicy): Promise<PreparedImageFile>` | 35 |
| function | commitPreparedImageFile | `export declare function commitPreparedImageFile(root: string, prepared: PreparedImageFile): Promise<ImageAttachmentRef>` | 42 |
| function | publishImmutableObject | `export declare function publishImmutableObject(root: string, target: string, data: Uint8Array, sha256: string): Promise<void>` | 53 |
| interface | StreamedImmutableObject | `export interface StreamedImmutableObject` | 55 |
| function | publishImmutableObjectStream | `export declare function publishImmutableObjectStream(root: string, data: AsyncIterable<Uint8Array>, targetFor: (sha256: string, bytes: number) => string, signal` | 68 |
| function | publishImmutableAlias | `export declare function publishImmutableAlias(root: string, source: string, target: string, sha256: string): Promise<void>` | 76 |
| function | saveImageFile | `export declare function saveImageFile(root: string, input: SaveImageAttachment, limits: ImageAttachmentLimits, policy: NormalizationPolicy): Promise<ImageAttach` | 85 |
| function | readImageFile | `export declare function readImageFile(root: string, ref: ImageAttachmentRef, signal?: AbortSignal): Promise<StoredImageAttachment>` | 94 |

