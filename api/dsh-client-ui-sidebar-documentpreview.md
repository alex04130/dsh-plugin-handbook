# dsh-client-ui-sidebar-documentpreview

> Extensible document previews for Sidebar files: Markdown, highlighted code, images, PDF, HTML, and plain text
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-sidebar-documentpreview/lib/types/client/LoadingIndicator.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | LoadingIndicator | `export declare function LoadingIndicator({ label, className }: {` | 4 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/TextPreview.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { linesOf, loadedPages, lastLineLoaded,  | `export { linesOf, loadedPages, lastLineLoaded, scrollToLine } from './text/lines.ts';` | 7 |
| interface | TextPreviewInjected | `export interface TextPreviewInjected extends TextInjected` | 10 |
| type | TextPreviewProps | `export type TextPreviewProps` | 16 |
| function | TextPreview | `export declare function TextPreview({ useTabInfo, useResource, useStore, actions, loadPage, reloadPages, loadAll, reloadAll, useDocumentPreviews, renderSlot, t,` | 22 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/TextTitle.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | TextTitle | `export declare function TextTitle({ useTabInfo }: PropsRuntime<'sidebar.right.pane.tab.title'>): ReactNode` | 13 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/code/CodeBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CodeBodyProps | `export type CodeBodyProps` | 6 |
| function | CodeBody | `export declare function CodeBody({ resourceAddress, content, wrap, scrollportRef, t }: CodeBodyProps): ReactNode` | 8 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/code/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(ctx: Context): void` | 4 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/code/languages.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CODE_EXTENSIONS | `export declare const CODE_EXTENSIONS: readonly string[]` | 2 |
| function | languageForPath | `export declare function languageForPath(path: string): string \| undefined` | 8 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/code/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 8 |
| const | en | `export declare const en: {` | 14 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/definition.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TEXTPREVIEW_KIND | `export declare const TEXTPREVIEW_KIND = "text"` | 13 |
| const | TEXTPREVIEW_ID | `export declare const TEXTPREVIEW_ID = "@deepseek-ai/dsh-client-ui-sidebar-documentpreview"` | 15 |
| function | basenameOf | `export declare function basenameOf(address: string): string` | 26 |
| function | textDefinition | `export declare function textDefinition(): SidebarRightTabDefinition` | 31 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/document/contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DocumentTextPage | `export interface DocumentTextPage` | 6 |
| type | DocumentContent | `export type DocumentContent` | 15 |
| type | DocumentPreviewProps | `export type DocumentPreviewProps` | 50 |
| const | documentTabInfoFactory | `export declare const documentTabInfoFactory: SlotHookFactory<'sidebar.right.tab.document', UseSidebarRightTabInfo>` | 57 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/document/registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DocumentLoadMode | `export type DocumentLoadMode` | 2 |
| interface | DocumentPreviewDefinition | `export interface DocumentPreviewDefinition` | 4 |
| function | matchingDocumentPreviews | `export declare function matchingDocumentPreviews(definitions: readonly DocumentPreviewDefinition[], path: string): readonly DocumentPreviewDefinition[]` | 24 |
| class | DocumentPreviewRegistry | `export declare class DocumentPreviewRegistry` | 26 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/face.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TextInjected | `export interface TextInjected` | 25 |
| function | textFace | `export declare function textFace(read: ReadWorkspaceFilePage, readAll: ReadDocumentBytes): (sessionId: SessionId, actions: BoundActions<TextStore>) => TextInjec` | 71 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/failure-line.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | failureLine | `export declare function failureLine(t: TranslateNS<'sidebarDocumentPreview'>, failure: RemoteFailure): string` | 16 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/HtmlBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | HtmlBodyProps | `export type HtmlBodyProps` | 6 |
| function | HtmlBody | `export declare function HtmlBody({ content, resourceAddress, readRelated, useTabInfo, t }: HtmlBodyProps): ReactNode` | 15 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/bootstrap.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | HtmlAsset | `export interface HtmlAsset` | 2 |
| interface | HtmlBundle | `export interface HtmlBundle` | 9 |
| function | createHtmlDocument | `export declare function createHtmlDocument(bundle: HtmlBundle): string` | 19 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/bytes.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | decodeText | `export declare function decodeText(data: Uint8Array<ArrayBuffer>): string` | 7 |
| function | encodeText | `export declare function encodeText(text: string): string` | 13 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | HTML_BODY_ID | `export declare const HTML_BODY_ID = "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/html"` | 5 |
| function | htmlBodyDefinition | `export declare function htmlBodyDefinition(title: () => string): DocumentPreviewDefinition` | 11 |
| function | apply | `export declare function apply(ctx: Context): void` | 16 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 2 |
| type | HtmlPreviewKey | `export type HtmlPreviewKey` | 9 |
| const | en | `export declare const en: {` | 11 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/pack.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ReadHtmlRelative | `export type ReadHtmlRelative` | 10 |
| function | packHtml | `export declare function packHtml(data: Uint8Array<ArrayBuffer>, readRelative: ReadHtmlRelative, signal: AbortSignal): Promise<HtmlBundle>` | 20 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/html/read-relative.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ReadHtmlRelated | `export type ReadHtmlRelated` | 12 |
| function | createReadHtmlRelative | `export declare function createReadHtmlRelative(readRelated: ReadHtmlRelated, address: string, lifetime: AbortSignal): ReadHtmlRelative` | 20 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/icons.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | IconNowrapFill16 | `export declare const IconNowrapFill16: ({ size, className }: IconProps) => import("react").JSX.Element` | 11 |
| const | IconWrapFill16 | `export declare const IconWrapFill16: ({ size, className }: IconProps) => import("react").JSX.Element` | 13 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/image/ImageBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | IMAGE_MEDIA_TYPES | `declare const IMAGE_MEDIA_TYPES: {` | 5 |
| type | ImageMediaType | `type ImageMediaType` | 15 |
| type | ImageBodyProps | `export type ImageBodyProps` | 17 |
| function | imageMediaType | `export declare function imageMediaType(path: string): ImageMediaType \| undefined` | 23 |
| function | ImageBody | `export declare function ImageBody({ content, resourceAddress, t }: ImageBodyProps): ReactNode` | 29 |
| export-list |  | `export {};` | 30 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/image/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | IMAGE_BODY_ID | `export declare const IMAGE_BODY_ID = "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/image"` | 5 |
| const | IMAGE_EXTENSIONS | `export declare const IMAGE_EXTENSIONS: readonly ["png", "jpg", "jpeg", "gif", "webp", "bmp", "ico", "svg"]` | 7 |
| function | imageBodyDefinition | `export declare function imageBodyDefinition(title: () => string): DocumentPreviewDefinition` | 13 |
| function | apply | `export declare function apply(ctx: Context): void` | 18 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/image/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 2 |
| type | ImagePreviewKey | `export type ImagePreviewKey` | 10 |
| const | en | `export declare const en: {` | 12 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 45 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 50 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 9 |
| type | SidebarDocumentPreviewKey | `export type SidebarDocumentPreviewKey` | 30 |
| const | en | `export declare const en: {` | 32 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/markdown/MarkdownBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MarkdownBodyProps | `export type MarkdownBodyProps` | 5 |
| function | MarkdownBody | `export declare function MarkdownBody({ content, t }: MarkdownBodyProps): ReactNode` | 11 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/markdown/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MARKDOWN_BODY_ID | `export declare const MARKDOWN_BODY_ID = "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/markdown"` | 5 |
| function | markdownDefinition | `export declare function markdownDefinition(title: () => string): DocumentPreviewDefinition` | 11 |
| function | apply | `export declare function apply(ctx: Context): void` | 16 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/markdown/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 2 |
| type | MarkdownPreviewKey | `export type MarkdownPreviewKey` | 9 |
| const | en | `export declare const en: {` | 11 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/PdfBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PdfBodyInjected | `export interface PdfBodyInjected` | 8 |
| type | PdfBodyProps | `export type PdfBodyProps` | 17 |
| function | PdfBody | `export declare function PdfBody(props: PdfBodyProps): ReactNode` | 23 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/assets.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list | workerSource | `export { workerSource };` | 3 |
| type | PdfAssetKind | `export type PdfAssetKind` | 5 |
| type | PdfAssetMap | `export type PdfAssetMap` | 7 |
| interface | PdfBinaryDataFactory | `export interface PdfBinaryDataFactory` | 13 |
| function | createPdfBinaryDataFactory | `export declare function createPdfBinaryDataFactory(assets?: PdfAssetMap): new () => PdfBinaryDataFactory` | 25 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/document.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PdfDocument | `export type PdfDocument` | 4 |
| interface | PdfSession | `export interface PdfSession` | 6 |
| interface | PdfPageSize | `export interface PdfPageSize` | 16 |
| function | renderPdfPage | `export declare function renderPdfPage(document: PdfDocument, pageNumber: number, canvas: HTMLCanvasElement, signal: AbortSignal, pixelRatio: number): Promise<Pd` | 31 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/errors.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | PdfWorkerFailure | `export declare class PdfWorkerFailure extends Error` | 2 |
| method | PdfWorkerFailure.constructor | `constructor(cause: Event);` | 6 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PDF_BODY_ID | `export declare const PDF_BODY_ID = "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/pdf"` | 5 |
| function | pdfBodyDefinition | `export declare function pdfBodyDefinition(title: () => string): DocumentPreviewDefinition` | 11 |
| function | apply | `export declare function apply(ctx: Context): void` | 13 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 2 |
| type | PdfLocaleKey | `export type PdfLocaleKey` | 14 |
| const | en | `export declare const en: {` | 16 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/runtime.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | openPdf | `export declare function openPdf(data: Uint8Array<ArrayBuffer>, signal: AbortSignal, reportFailure: (error: PdfWorkerFailure) => void): PdfSession` | 13 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/pdf/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PdfView | `export interface PdfView` | 5 |
| const | DEFAULT_PDF_VIEW | `export declare const DEFAULT_PDF_VIEW: PdfView` | 9 |
| interface | PdfState | `export interface PdfState` | 11 |
| type | PdfActions | `type PdfActions` | 14 |
| function | createPdfStore | `export declare function createPdfStore(): EngineStoreHandle<PdfState, PdfActions>` | 22 |
| type | PdfStore | `export type PdfStore` | 24 |
| export-list |  | `export {};` | 25 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/rpc.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WorkspaceFilesReadRemote | `export interface WorkspaceFilesReadRemote` | 13 |
| type | ReadWorkspaceFilePage | `export type ReadWorkspaceFilePage` | 33 |
| interface | SessionFile | `export interface SessionFile` | 35 |
| function | hostFileOf | `export declare function hostFileOf(address: string): SessionFile` | 52 |
| function | createReadPage | `export declare function createReadPage(remote: WorkspaceFilesReadRemote): ReadWorkspaceFilePage` | 59 |
| type | DocumentFileBytes | `export type DocumentFileBytes` | 61 |
| type | ReadDocumentBytes | `export type ReadDocumentBytes` | 70 |
| function | documentFileBytes | `export declare function documentFileBytes(file: WorkspaceFileBytes): DocumentFileBytes` | 76 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TextPage | `export interface TextPage` | 26 |
| interface | TextTabState | `export interface TextTabState` | 31 |
| interface | TextState | `export interface TextState` | 58 |
| function | fresh | `export declare function fresh(): TextTabState` | 65 |
| type | TextActions | `type TextActions` | 67 |
| function | createTextStore | `export declare function createTextStore(): EngineStoreHandle<TextState, TextActions>` | 86 |
| type | TextStore | `export type TextStore` | 88 |
| export-list |  | `export {};` | 89 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/text/TextBody.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | TextBody | `export declare function TextBody({ content, useTabInfo }: DocumentPreviewProps): ReactNode` | 5 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/text/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PLAIN_BODY_ID | `export declare const PLAIN_BODY_ID = "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/text"` | 5 |
| function | textBodyDefinition | `export declare function textBodyDefinition(title: () => string): DocumentPreviewDefinition` | 11 |
| function | apply | `export declare function apply(ctx: Context): void` | 13 |

## dsh-client-ui-sidebar-documentpreview/lib/types/client/text/lines.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | linesOf | `export declare function linesOf(page: TextPage): string[]` | 9 |
| type | LoadedPage | `export type LoadedPage` | 11 |
| function | loadedPages | `export declare function loadedPages(pages: Readonly<Record<number, TextPage>>): LoadedPage[]` | 17 |
| function | lastLineLoaded | `export declare function lastLineLoaded(pages: readonly LoadedPage[]): number` | 23 |
| function | scrollToLine | `export declare function scrollToLine(body: HTMLElement, line: number): boolean` | 30 |

## dsh-client-ui-sidebar-documentpreview/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

