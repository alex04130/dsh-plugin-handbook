# dsh-client-ui-attachment

> Dynamic attachment presentation plugin for conversation input, message-image, and trajectory image slots
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-attachment/lib/types/AttachmentRail.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AttachmentRailItem | `export interface AttachmentRailItem` | 4 |
| interface | AttachmentRailLabels | `export interface AttachmentRailLabels` | 9 |
| function | AttachmentRail | `export declare function AttachmentRail<T extends AttachmentRailItem>({ items, labels, renderItem }: {` | 34 |

## dsh-client-ui-attachment/lib/types/DropOverlay.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DropOverlayLabels | `export interface DropOverlayLabels` | 2 |
| function | DropOverlay | `export declare function DropOverlay({ disabled, labels }: {` | 20 |

## dsh-client-ui-attachment/lib/types/FileCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FileCardLabels | `export interface FileCardLabels` | 2 |
| type | FileCardState | `export type FileCardState` | 15 |
| function | FileCard | `export declare function FileCard({ name, bytes, state, progress, labels, onRemove, onRetry, }: {` | 17 |

## dsh-client-ui-attachment/lib/types/ImageLightbox.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ImageLightboxLabels | `export interface ImageLightboxLabels` | 2 |
| function | ImageLightbox | `export declare function ImageLightbox({ src, alt, labels, onClose }: {` | 21 |

## dsh-client-ui-attachment/lib/types/MessageImage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ImageLoader | `export type ImageLoader` | 4 |
| type | MessageImageSpec | `export type MessageImageSpec` | 8 |
| interface | MessageImageLabels | `export interface MessageImageLabels` | 19 |
| function | MessageImage | `export declare function MessageImage({ image, load, variant, labels }: {` | 45 |
| function | ImageGallery | `export declare function ImageGallery({ images, load, align, compact, labels }: {` | 53 |

## dsh-client-ui-attachment/lib/types/client/ComposerAttachments.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ComposerAttachments | `export declare function ComposerAttachments({ attachments, canAcceptDrop, onAddFiles, onRemoveAttachment, uploads, onRetryFile, dropLimits, t, }: ComposerAttach` | 3 |

## dsh-client-ui-attachment/lib/types/client/MessageImages.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | MessageImages | `export declare function MessageImages({ images, loadImage, align, compact, t }: MessageImagesProps): import("react").JSX.Element` | 3 |

## dsh-client-ui-attachment/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 4 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 6 |

## dsh-client-ui-attachment/lib/types/client/labels.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | lightboxLabels | `export declare function lightboxLabels(t: TranslateNS<'conversation'>): ImageLightboxLabels` | 12 |
| function | messageImageLabels | `export declare function messageImageLabels(t: TranslateNS<'conversation'>): MessageImageLabels` | 18 |
| function | dropOverlayLabels | `export declare function dropOverlayLabels(t: TranslateNS<'conversation'>, accepting: boolean, limits?: {` | 26 |
| function | fileCardLabels | `export declare function fileCardLabels(t: TranslateNS<'conversation'>, name: string): FileCardLabels` | 36 |
| function | attachmentRailLabels | `export declare function attachmentRailLabels(t: TranslateNS<'conversation'>): AttachmentRailLabels` | 42 |

## dsh-client-ui-attachment/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

