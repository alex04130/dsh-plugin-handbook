# dsh-tool-fs

> Model-facing filesystem tools (read, write, edit) over the DeepSeek Harness filesystem seam (ctx.fs)
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-tool-fs/lib/types/diff.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | DIFF_CONTEXT | `export declare const DIFF_CONTEXT = 3` | 8 |
| type | FsDiffMeta | `export type FsDiffMeta` | 16 |
| function | computeHunkDiffs | `export declare function computeHunkDiffs(path: string, before: string, after: string): FileDiff[]` | 30 |
| function | diffsFromMeta | `export declare function diffsFromMeta(meta: unknown): FileDiff[] \| undefined` | 37 |

## dsh-tool-fs/lib/types/edit.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | EditInput | `interface EditInput` | 10 |
| function | parseEditArgs | `export declare function parseEditArgs(args: {` | 23 |
| function | formatEditOutput | `export declare function formatEditOutput(displayPath: string, replaceAll: boolean): string` | 35 |
| function | applyEditTool | `export declare function applyEditTool(ctx: Context, sandbox: FsSandboxController): void` | 41 |
| export-list |  | `export {};` | 42 |

## dsh-tool-fs/lib/types/error.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | remediateFsError | `export declare function remediateFsError(error: unknown, displayPath: string): unknown` | 18 |

## dsh-tool-fs/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "tool-fs"` | 10 |
| const | inject | `export declare const inject: string[]` | 12 |
| interface | Config | `export interface Config` | 14 |
| const | Config | `export declare const Config: z<Config>` | 24 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 26 |

## dsh-tool-fs/lib/types/read-image.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | sniffImageMediaType | `export declare function sniffImageMediaType(data: Uint8Array): ImageMediaType \| undefined` | 21 |
| interface | ImageReadValue | `export interface ImageReadValue` | 23 |
| function | imageMediaTypeForPath | `export declare function imageMediaTypeForPath(filePath: string): ImageMediaType \| undefined` | 44 |
| function | assertImageCapableRoute | `export declare function assertImageCapableRoute(ctx: Context, exec: ToolExecution, requestedPath: string): Promise<void>` | 53 |
| function | imageRefFromValue | `export declare function imageRefFromValue(image: ImageReadValue['image']): ImageAttachmentRef` | 60 |
| function | formatImageReadOutput | `export declare function formatImageReadOutput(displayPath: string, image: ImageReadValue['image']): string` | 69 |
| function | applyReadImageTool | `export declare function applyReadImageTool(ctx: Context): void` | 79 |

## dsh-tool-fs/lib/types/read-render.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | READ_MAX_LINE_LENGTH | `export declare const READ_MAX_LINE_LENGTH = 2000` | 8 |
| const | READ_MAX_BYTES | `export declare const READ_MAX_BYTES: number` | 10 |
| interface | ReadWindow | `export interface ReadWindow` | 12 |
| interface | FileTextLine | `export interface FileTextLine` | 23 |
| interface | WindowResult | `export interface WindowResult` | 30 |
| interface | FileReadOutcome | `export interface FileReadOutcome` | 39 |
| function | buildWindow | `export declare function buildWindow(chunks: AsyncIterable<string> \| Iterable<string>, request: ReadWindow, displayPath: string): Promise<WindowResult>` | 58 |
| function | formatReadOutput | `export declare function formatReadOutput(displayPath: string, outcome: FileReadOutcome): string` | 65 |
| function | langFromPath | `export declare function langFromPath(path: string): string \| undefined` | 73 |
| interface | FsReadMeta | `export interface FsReadMeta` | 82 |
| function | readMetaFromMeta | `export declare function readMetaFromMeta(meta: unknown): FsReadMeta \| undefined` | 107 |

## dsh-tool-fs/lib/types/read-target.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | resolveRegularReadTarget | `export declare function resolveRegularReadTarget(ctx: Context, exec: ToolExecution, requestedPath: string): Promise<{` | 15 |

## dsh-tool-fs/lib/types/read.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | READ_LIMIT | `export declare const READ_LIMIT = 2000` | 8 |
| const | STREAM_MIN_SIZE | `export declare const STREAM_MIN_SIZE: number` | 13 |
| interface | ReadToolCaps | `export interface ReadToolCaps` | 15 |
| interface | ReadInput | `interface ReadInput` | 26 |
| function | parseReadArgs | `export declare function parseReadArgs(args: {` | 37 |
| function | applyReadTool | `export declare function applyReadTool(ctx: Context, caps: ReadToolCaps): void` | 47 |
| export-list |  | `export {};` | 48 |

## dsh-tool-fs/lib/types/sandbox.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FsEscalationArgs | `export interface FsEscalationArgs` | 16 |
| interface | EscalationSchemaFields | `export interface EscalationSchemaFields` | 21 |
| class | FsSandboxController | `export declare class FsSandboxController` | 37 |
| method | FsSandboxController.constructor | `constructor(ctx: Context);` | 43 |

## dsh-tool-fs/lib/types/session-cwd.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | sessionCwd | `export declare function sessionCwd(exec: ToolExecution, requestedPath: string): string \| undefined` | 17 |
| function | sessionResolveOptions | `export declare function sessionResolveOptions(exec: ToolExecution, requestedPath: string, policyWorkspaceRoot?: string): {` | 25 |

## dsh-tool-fs/lib/types/write.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | parseWriteArgs | `export declare function parseWriteArgs(args: {` | 16 |
| function | formatWriteOutput | `export declare function formatWriteOutput(displayPath: string, outcome: Pick<FsWriteOutcome, 'operation'>): string` | 29 |
| function | applyWriteTool | `export declare function applyWriteTool(ctx: Context, sandbox: FsSandboxController): void` | 35 |

