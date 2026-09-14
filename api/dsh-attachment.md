# dsh-attachment

> Durable immutable attachment storage seam for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-attachment/lib/types/admission.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | admitEncodedImages | `export declare function admitEncodedImages(attachments: AttachmentStore, images: readonly EncodedImageAttachment[]): Promise<readonly ImageAttachmentRef[]>` | 14 |
| function | admitEncodedFile | `export declare function admitEncodedFile(attachments: AttachmentStore, file: EncodedFileAttachment): Promise<FileAttachmentRef>` | 25 |

## dsh-attachment/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AttachmentId | `export type AttachmentId` | 4 |
| function | AttachmentId | `export declare function AttachmentId(value: string): AttachmentId` | 10 |
| type | ImageVariantId | `export type ImageVariantId` | 12 |
| function | ImageVariantId | `export declare function ImageVariantId(value: string): ImageVariantId` | 18 |

## dsh-attachment/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | IMAGE_ADMISSION_ERROR_CODES | `declare const IMAGE_ADMISSION_ERROR_CODES: readonly ["TOO_MANY_IMAGES", "IMAGES_TOO_LARGE", "UNSUPPORTED_IMAGE_TYPE", "INVALID_IMAGE_BASE64", "INVALID_IMAGE", "` | 2 |
| type | ImageAdmissionErrorCode | `export type ImageAdmissionErrorCode` | 4 |
| const | ATTACHMENT_ERROR_CODES | `declare const ATTACHMENT_ERROR_CODES: readonly ["TOO_MANY_IMAGES", "IMAGES_TOO_LARGE", "UNSUPPORTED_IMAGE_TYPE", "INVALID_IMAGE_BASE64", "INVALID_IMAGE", "IMAGE` | 5 |
| type | AttachmentErrorCode | `export type AttachmentErrorCode` | 7 |
| class | AttachmentError | `export declare class AttachmentError extends Error` | 17 |
| method | AttachmentError.constructor | `constructor(message: string, code: AttachmentErrorCode, options?: ErrorOptions);` | 25 |
| function | isAttachmentError | `export declare function isAttachmentError(error: unknown): error is AttachmentError` | 32 |
| function | isImageAdmissionError | `export declare function isImageAdmissionError(error: unknown): error is AttachmentError & {` | 38 |
| export-list |  | `export {};` | 41 |

## dsh-attachment/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { AttachmentId, ImageVariantId } | `export { AttachmentId, ImageVariantId } from './brand.ts';` | 5 |
| re-export | { AttachmentError, isAttachmentError, is | `export { AttachmentError, isAttachmentError, isImageAdmissionError } from './error.ts';` | 6 |
| re-export | { admitEncodedFile, admitEncodedImages } | `export { admitEncodedFile, admitEncodedImages } from './admission.ts';` | 8 |
| re-export | { requestImageDimensions } | `export { requestImageDimensions } from './request-projection.ts';` | 9 |
| class | AttachmentStore | `export declare abstract class AttachmentStore extends Service` | 17 |
| method | AttachmentStore.constructor | `constructor(ctx: Context);` | 18 |
| default | AttachmentStore | `export default AttachmentStore;` | 130 |

## dsh-attachment/lib/types/request-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | requestImageDimensions | `export declare function requestImageDimensions(width: number, height: number, maxPixels: number): {` | 12 |

## dsh-attachment/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ImageMediaType | `export type ImageMediaType` | 5 |
| interface | ImageAttachmentRef | `export interface ImageAttachmentRef` | 7 |
| interface | FileAttachmentRef | `export interface FileAttachmentRef` | 34 |
| interface | EncodedFileAttachment | `export interface EncodedFileAttachment` | 43 |
| interface | SaveFileAttachment | `export interface SaveFileAttachment` | 50 |
| interface | SaveFileStreamAttachment | `export interface SaveFileStreamAttachment` | 56 |
| interface | ImageAttachmentLimits | `export interface ImageAttachmentLimits` | 65 |
| interface | EncodedImageAttachment | `export interface EncodedImageAttachment` | 75 |
| type | PromptContentPart | `export type PromptContentPart` | 89 |
| type | AttachmentAdmissionPart | `export type AttachmentAdmissionPart` | 99 |
| type | AdmittedPromptContentPart | `export type AdmittedPromptContentPart` | 104 |
| interface | SaveImageAttachment | `export interface SaveImageAttachment` | 115 |
| interface | StoredImageAttachment | `export interface StoredImageAttachment` | 123 |
| interface | ImageRequestPolicy | `export interface ImageRequestPolicy` | 128 |
| interface | RequestImageAttachment | `export interface RequestImageAttachment` | 135 |

