# dsh-app-boot

> Shared boot glue for the app bins: .env loading, fail-loud Loader guards, snapshot-aware config resolution, and the Loader boot sequence
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-app-boot/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { composeEntries, DEFAULT_PROFILE_BUNDLE | `export { composeEntries, DEFAULT_PROFILE_BUNDLES, DEFAULT_PROFILE_PATCH_RELOAD, healProfilesModuleFallback, initProfile, loadProfile, loadProfileDirectory, PROF` | 19 |
| function | resolveConfigPath | `export declare function resolveConfigPath(configPath: string, snapshotMode: string \| undefined, cwd?: string): string` | 29 |
| function | loadEnv | `export declare function loadEnv(binName: string, dir?: string, warn?: (line: string) => void): void` | 37 |
| function | loadLayeredEnv | `export declare function loadLayeredEnv(binName: string, cwd?: string, warn?: (line: string) => void): LaunchEnvironmentSnapshot` | 49 |
| interface | UserPatchWatchOptions | `export interface UserPatchWatchOptions` | 51 |
| function | watchUserPatches | `export declare function watchUserPatches(ctx: Context, options: UserPatchWatchOptions): Promise<() => Promise<void>>` | 72 |
| function | loadOptionalPatches | `export declare function loadOptionalPatches(binName: string, file: string): PatchOptions[] \| undefined` | 84 |
| function | loadOverlayPatches | `export declare function loadOverlayPatches(binName: string, file: string): PatchOptions[]` | 94 |
| interface | ConfigDumpLayer | `export interface ConfigDumpLayer` | 96 |
| function | renderConfigDump | `export declare function renderConfigDump(binName: string, absoluteConfigPath: string, layers: ConfigDumpLayer[], warn?: (line: string) => void): string` | 133 |
| function | mountRootInclude | `export declare function mountRootInclude(ctx: Context, absoluteConfigPath: string, patches?: readonly PatchOptions[], bareModuleBaseUrl?: string): Promise<Entry` | 145 |
| interface | FailLoudProcess | `export interface FailLoudProcess` | 150 |
| const | FAIL_LOUD_RELEASE_TIMEOUT_MS | `export declare const FAIL_LOUD_RELEASE_TIMEOUT_MS = 2000` | 167 |
| function | installFailLoud | `export declare function installFailLoud(binName: string, proc?: FailLoudProcess, release?: () => Promise<void> \| void): () => void` | 197 |
| function | assertEntriesLoaded | `export declare function assertEntriesLoaded(ctx: Context, binName: string): void` | 205 |
| function | assertEntriesActivated | `export declare function assertEntriesActivated(ctx: Context, binName: string): Promise<void>` | 218 |
| function | boot | `export declare function boot(binName: string, absoluteConfigPath: string, patches?: PatchOptions[], prepare?: (ctx: Context) => Promise<void> \| void, bareModul` | 249 |
| const | HARNESS_SOURCE_SECTION | `export declare const HARNESS_SOURCE_SECTION = "harness:source"` | 251 |
| function | addHarnessSourceSection | `export declare function addHarnessSourceSection(ctx: Context, sourceRoot: string): (() => void) \| undefined` | 267 |

## dsh-app-boot/lib/types/profile.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PROFILES_DIR | `export declare const PROFILES_DIR = "profiles"` | 29 |
| const | PROFILE_PATCH_FILENAME | `export declare const PROFILE_PATCH_FILENAME = "cordis.patch.yml"` | 31 |
| interface | ProfileTemplate | `export interface ProfileTemplate` | 33 |
| interface | ProfileManifest | `export interface ProfileManifest` | 40 |
| interface | ProfileLayer | `export interface ProfileLayer` | 47 |
| interface | Profile | `export interface Profile` | 58 |
| function | resolveProfileDir | `export declare function resolveProfileDir(name: string, home?: string): string` | 78 |
| const | PROFILE_TEMPLATES | `export declare const PROFILE_TEMPLATES: Record<string, ProfileTemplate>` | 80 |
| const | DEFAULT_PROFILE_BUNDLES | `export declare const DEFAULT_PROFILE_BUNDLES: readonly string[]` | 82 |
| const | DEFAULT_PROFILE_PATCH_RELOAD | `export declare const DEFAULT_PROFILE_PATCH_RELOAD: ProfilePatchReload` | 84 |
| function | initProfile | `export declare function initProfile(dir: string, bundles: readonly string[], patchReload?: ProfilePatchReload): void` | 93 |
| interface | ProfileModuleFallbackOptions | `export interface ProfileModuleFallbackOptions` | 95 |
| function | healProfilesModuleFallback | `export declare function healProfilesModuleFallback(options: ProfileModuleFallbackOptions): Promise<void>` | 115 |
| function | readProfileManifest | `export declare function readProfileManifest(binName: string, dir: string): ProfileManifest` | 122 |
| function | writeProfileManifest | `export declare function writeProfileManifest(dir: string, manifest: ProfileManifest): void` | 128 |
| function | resolveBundleDir | `export declare function resolveBundleDir(binName: string, packageName: string, installAnchor: string, profileDir: string): string` | 141 |
| function | loadProfileDirectory | `export declare function loadProfileDirectory(binName: string, dir: string, installAnchor: string, options?: {` | 152 |
| function | loadProfile | `export declare function loadProfile(binName: string, name: string, installAnchor: string, home?: string, options?: {` | 169 |
| function | composeEntries | `export declare function composeEntries(layers: readonly PatchOptions[][], warn?: (message: string) => void): EntryOptions[]` | 180 |

