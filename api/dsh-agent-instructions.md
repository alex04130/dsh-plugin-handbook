# dsh-agent-instructions

> Workspace context loader for AGENTS.md/CLAUDE.md instruction files
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-agent-instructions/lib/types/config.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | Config | `export interface Config` | 8 |
| const | Config | `export declare const Config: z<Config>` | 28 |
| interface | ResolvedDiscoveryConfig | `export interface ResolvedDiscoveryConfig` | 30 |
| interface | ResolvedConfig | `export interface ResolvedConfig extends ResolvedDiscoveryConfig` | 37 |
| function | workspaceBaselineIdentity | `export declare function workspaceBaselineIdentity(config: ResolvedConfig, cwd: string, projectRoot: string): string` | 48 |
| function | resolveConfig | `export declare function resolveConfig(config: Config): ResolvedConfig` | 54 |
| function | resolveDiscoveryConfig | `export declare function resolveDiscoveryConfig(config: Pick<Config, 'dshHome' \| 'projectRootMarkers' \| 'instructionFileCandidates' \| 'localInstructionFileCan` | 60 |

## dsh-agent-instructions/lib/types/digest.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | instructionContentSha1 | `export declare function instructionContentSha1(content: string): string` | 11 |
| function | trimmedInstructionDigest | `export declare function trimmedInstructionDigest(content: string): string` | 20 |

## dsh-agent-instructions/lib/types/files.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | InstructionFile | `export interface InstructionFile` | 10 |
| interface | LoadedInstructionFile | `export interface LoadedInstructionFile extends InstructionFile` | 15 |
| interface | ProbedInstructionFile | `export interface ProbedInstructionFile extends InstructionFile` | 21 |
| interface | DiscoverOptions | `interface DiscoverOptions` | 26 |
| interface | LoadOptions | `interface LoadOptions extends DiscoverOptions` | 35 |
| interface | RenderedInstructionSet | `export interface RenderedInstructionSet` | 41 |
| type | ScopeInstructionProbe | `export type ScopeInstructionProbe` | 49 |
| function | findProjectRoot | `export declare function findProjectRoot(cwd: string, markers: readonly string[], fileSystem?: FileSystem, signal?: AbortSignal): Promise<string>` | 66 |
| function | ancestorChain | `export declare function ancestorChain(root: string, cwd: string): string[]` | 73 |
| function | descendantDirsBetween | `export declare function descendantDirsBetween(root: string, touchedPath: string): string[]` | 80 |
| function | relativeDisplay | `export declare function relativeDisplay(root: string, path: string): string` | 87 |
| function | discoverBaselineInstructionFiles | `export declare function discoverBaselineInstructionFiles(options: DiscoverOptions): Promise<InstructionFile[]>` | 97 |
| function | dedupInstructionFilesByDirectory | `export declare function dedupInstructionFilesByDirectory(files: LoadedInstructionFile[]): LoadedInstructionFile[]` | 107 |
| function | loadBaselineInstructions | `export declare function loadBaselineInstructions(options: LoadOptions, fileSystem?: FileSystem): Promise<RenderedWorkspaceContext \| undefined>` | 116 |
| function | loadBaselineInstructionSet | `export declare function loadBaselineInstructionSet(options: LoadOptions, fileSystem?: FileSystem): Promise<RenderedInstructionSet \| undefined>` | 123 |
| function | probeScopeInstruction | `export declare function probeScopeInstruction(scope: string, projectRoot: string, resolved: ResolvedConfig, fileSystem: FileSystem, signal?: AbortSignal): Promi` | 133 |
| function | readScopeInstruction | `export declare function readScopeInstruction(file: ProbedInstructionFile, maxSourceBytes: number, fileSystem: FileSystem, signal?: AbortSignal): Promise<LoadedI` | 142 |
| export-list |  | `export {};` | 143 |

## dsh-agent-instructions/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list | Config, name | `export { Config, name };` | 14 |
| const | inject | `export declare const inject: string[]` | 16 |
| re-export | { discoverBaselineInstructionFiles, load | `export { discoverBaselineInstructionFiles, loadBaselineInstructions, } from './files.ts';` | 17 |
| re-export | { renderWorkspaceContext } | `export { renderWorkspaceContext } from './render.ts';` | 19 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 21 |

## dsh-agent-instructions/lib/types/render.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TruncatedInstruction | `export interface TruncatedInstruction` | 8 |
| interface | RenderedWorkspaceContext | `export interface RenderedWorkspaceContext` | 14 |
| interface | AgentInstructionChange | `export interface AgentInstructionChange` | 20 |
| interface | ChangeRenderItem | `export interface ChangeRenderItem` | 27 |
| const | USER_GLOBAL_DIRECTORY | `export declare const USER_GLOBAL_DIRECTORY = "user-global"` | 32 |
| const | USER_GLOBAL_FILE | `export declare const USER_GLOBAL_FILE = "AGENTS.md"` | 39 |
| function | scopeForDisplayPath | `export declare function scopeForDisplayPath(displayPath: string): string` | 45 |
| function | candidateScopeKey | `export declare function candidateScopeKey(directory: string, candidateName: string): string` | 57 |
| function | instructionScopeKey | `export declare function instructionScopeKey(displayPath: string): string` | 63 |
| function | decodeScopeKey | `export declare function decodeScopeKey(scope: string): {` | 69 |
| function | renderInstructionChanges | `export declare function renderInstructionChanges(items: ChangeRenderItem[], maxBytes: number): {` | 79 |
| function | renderWorkspaceInstructionSet | `export declare function renderWorkspaceInstructionSet(files: LoadedInstructionFile[], options: {` | 90 |
| function | renderWorkspaceContext | `export declare function renderWorkspaceContext(files: LoadedInstructionFile[], options: {` | 103 |

## dsh-agent-instructions/lib/types/state.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "agent-instructions"` | 13 |
| interface | AgentInstructionSource | `export interface AgentInstructionSource` | 15 |
| interface | InstructionVersionState | `export interface InstructionVersionState` | 31 |
| type | InstructionVersionCache | `export type InstructionVersionCache` | 42 |
| interface | InstructionVersionUpdate | `export interface InstructionVersionUpdate` | 44 |
| interface | ReconciledInstructionContext | `export interface ReconciledInstructionContext` | 49 |
| function | workspaceContextMessage | `export declare function workspaceContextMessage(text: string): Message` | 58 |
| function | baselineInstructionState | `export declare function baselineInstructionState(files: LoadedInstructionFile[]): {` | 64 |
| function | retainedInstructionVersionUpdates | `export declare function retainedInstructionVersionUpdates(updates: readonly InstructionVersionUpdate[], renderedChanges: readonly AgentInstructionChange[]): Ins` | 74 |
| function | applyInstructionVersionUpdates | `export declare function applyInstructionVersionUpdates(session: Session, updates: readonly InstructionVersionUpdate[], cache: InstructionVersionCache): void` | 81 |
| function | reconcileInstructionContext | `export declare function reconcileInstructionContext(agent: Agent, resolved: ResolvedConfig, versionCache: InstructionVersionCache, fileSystem: FileSystem, optio` | 91 |

