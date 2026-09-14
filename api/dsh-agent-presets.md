# dsh-agent-presets

> Per-session agent composition from preset cordis.yml files for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-agent-presets/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-agent-presets/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 32 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 33 |

## dsh-agent-presets/lib/types/authoring.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | presetExists | `export declare function presetExists(presetId: string): RemoteError<'agent-preset/invalid'>` | 22 |
| function | writableRoot | `export declare function writableRoot(roots: readonly PresetRoot[], presetId: string): string` | 30 |
| function | readComposition | `export declare function readComposition(preset: AgentPreset): Promise<string>` | 36 |
| function | copyComposition | `export declare function copyComposition(roots: readonly PresetRoot[], source: AgentPreset, id: string, name?: string): Promise<string>` | 59 |
| function | deleteComposition | `export declare function deleteComposition(roots: readonly PresetRoot[], preset: AgentPreset): Promise<void>` | 70 |

## dsh-agent-presets/lib/types/composition-inventory.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CompositionRowEnablement | `export type CompositionRowEnablement` | 20 |
| type | DisabledExpressionEvaluator | `export type DisabledExpressionEvaluator` | 26 |
| interface | AgentPresetCompositionRow | `export interface AgentPresetCompositionRow` | 28 |
| interface | AgentPresetComposition | `export interface AgentPresetComposition` | 44 |
| function | fileComposition | `export declare function fileComposition(path: string, evaluateExpression: DisabledExpressionEvaluator): Promise<{` | 70 |
| function | mountedCompositionRows | `export declare function mountedCompositionRows(tree: EntryTree): AgentPresetCompositionRow[]` | 80 |

## dsh-agent-presets/lib/types/discovery.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | COMPOSITION_FILE | `export declare const COMPOSITION_FILE = "agent.cordis.yml"` | 25 |
| const | USER_PRESET_DIR | `export declare const USER_PRESET_DIR = ".agent-presets"` | 38 |
| const | SHIPPED_PRESET_ROOT | `export declare const SHIPPED_PRESET_ROOT: string` | 46 |
| function | entryListProblem | `export declare function entryListProblem(rows: unknown, at?: string): string \| undefined` | 62 |
| function | scanRoot | `export declare function scanRoot(root: PresetRoot, harnessBase: string): Promise<AgentPreset[]>` | 80 |
| function | discoverPresets | `export declare function discoverPresets(roots: readonly PresetRoot[], harnessBase: string): Promise<AgentPreset[]>` | 87 |

## dsh-agent-presets/lib/types/display.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | BuiltInPresetCopyKey | `export type BuiltInPresetCopyKey` | 10 |
| interface | PresetDisplaySource | `export interface PresetDisplaySource` | 12 |
| interface | PresetDisplayText | `export interface PresetDisplayText` | 23 |
| function | presetDisplayText | `export declare function presetDisplayText(preset: PresetDisplaySource, t: (key: BuiltInPresetCopyKey) => string): PresetDisplayText` | 35 |

## dsh-agent-presets/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SETTINGS_NAMESPACE | `export declare const SETTINGS_NAMESPACE = "agent-presets"` | 34 |
| interface | AgentPresetSettings | `export interface AgentPresetSettings` | 36 |
| const | AgentPresetSettingsSchema | `export declare const AgentPresetSettingsSchema: z<AgentPresetSettings>` | 41 |
| re-export | { COMPOSITION_FILE, discoverPresets, sca | `export { COMPOSITION_FILE, discoverPresets, scanRoot, SHIPPED_PRESET_ROOT } from './discovery.ts';` | 42 |
| re-export | { METADATA_FILE, readPresetMetadata, ren | `export { METADATA_FILE, readPresetMetadata, renderPresetMetadata, type PresetMetadata, } from './metadata.ts';` | 43 |
| re-export | { inactiveRows, leakedServices, livePres | `export { inactiveRows, leakedServices, livePresetMounts, mountPreset, serviceForAgent, standingMountFor, type JoinedPresetMount, type PresetMount, } from './mou` | 44 |
| re-export | { copyComposition, deleteComposition, re | `export { copyComposition, deleteComposition, readComposition, writableRoot } from './authoring.ts';` | 45 |
| re-export | { agentPresetProjectionDefinition } | `export { agentPresetProjectionDefinition } from './session.ts';` | 46 |
| class | AgentPresets | `export declare class AgentPresets extends TypertRemoteService` | 60 |
| method | AgentPresets.constructor | `constructor(ctx: Context, config: Config);` | 109 |
| default | AgentPresets | `export default AgentPresets;` | 387 |

## dsh-agent-presets/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "agent-presets-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-agent-presets/lib/types/metadata.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | METADATA_FILE | `export declare const METADATA_FILE = "preset.yml"` | 20 |
| interface | PresetMetadata | `export interface PresetMetadata` | 22 |
| function | readPresetMetadata | `export declare function readPresetMetadata(directory: string): Promise<PresetMetadata>` | 42 |
| function | renderPresetMetadata | `export declare function renderPresetMetadata(metadata: PresetMetadata): string \| undefined` | 51 |

## dsh-agent-presets/lib/types/mount.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PresetMount | `export interface PresetMount` | 21 |
| function | livePresetMounts | `export declare function livePresetMounts(within?: Fiber): PresetMount[]` | 42 |
| function | leakedServices | `export declare function leakedServices(ctx: Context, mount: Fiber): string[]` | 54 |
| type | JoinedPresetMount | `export type JoinedPresetMount` | 56 |
| function | standingMountFor | `export declare function standingMountFor(agentCtx: Context): JoinedPresetMount \| undefined` | 71 |
| function | serviceForAgent | `export declare function serviceForAgent<K extends string & keyof Context>(ctx: Context, agent: {` | 96 |
| function | inactiveRows | `export declare function inactiveRows(tree: EntryTree): string[]` | 108 |
| function | mountPreset | `export declare function mountPreset(agentCtx: Context, preset: AgentPreset): Promise<void>` | 119 |

## dsh-agent-presets/lib/types/preset.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PresetTrust | `export type PresetTrust` | 7 |
| const | PRESET_ID | `export declare const PRESET_ID: RegExp` | 16 |
| interface | AgentPreset | `export interface AgentPreset` | 18 |
| interface | PresetRoot | `export interface PresetRoot` | 40 |
| interface | Config | `export interface Config` | 47 |

## dsh-agent-presets/lib/types/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | agentPresetProjectionDefinition | `export declare const agentPresetProjectionDefinition: {` | 31 |

## dsh-agent-presets/lib/types/specifier.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RowSpecifier | `export type RowSpecifier` | 16 |
| function | classifyRowSpecifier | `export declare function classifyRowSpecifier(name: string): RowSpecifier` | 50 |

## dsh-agent-presets/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentPresetRow | `export interface AgentPresetRow` | 9 |
| interface | AgentPresetRoster | `export interface AgentPresetRoster` | 24 |
| interface | AgentPresetDocument | `export interface AgentPresetDocument` | 55 |
| export-list |  | `export {};` | 88 |

