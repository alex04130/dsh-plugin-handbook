# dsh-client-ui-agent-preset

> Agent-preset surfaces: the default for later sessions, this session's seat, and the composition editor
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-agent-preset/lib/types/client/AgentPresetLabel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentPresetLabelInjected | `export interface AgentPresetLabelInjected` | 14 |
| type | AgentPresetLabelProps | `export type AgentPresetLabelProps` | 23 |
| function | AgentPresetLabel | `export declare function AgentPresetLabel({ sessionId, useSessions, useAgentPresets, load, t, }: AgentPresetLabelProps): import("react").JSX.Element \| null` | 29 |

## dsh-client-ui-agent-preset/lib/types/client/AgentPresetSeat.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentPresetSeatInjected | `export interface AgentPresetSeatInjected` | 18 |
| type | AgentPresetSeatProps | `export type AgentPresetSeatProps` | 31 |
| function | AgentPresetSeat | `export declare function AgentPresetSeat({ load, select, introduced, useAgentPresetSeat, t }: AgentPresetSeatProps): import("react").JSX.Element \| null` | 37 |

## dsh-client-ui-agent-preset/lib/types/client/AgentPresetSection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentPresetSectionInjected | `export interface AgentPresetSectionInjected` | 17 |
| type | AgentPresetSectionProps | `export type AgentPresetSectionProps` | 54 |
| function | AgentPresetSection | `export declare function AgentPresetSection(props: AgentPresetSectionProps): ReactNode` | 60 |

## dsh-client-ui-agent-preset/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { draftBlocker, type AgentPresetSectionS | `export { draftBlocker, type AgentPresetSectionState, type CopyDraft, type PresetRow, type PresetView, } from './section-store.ts';` | 26 |
| re-export | { AGENT_PRESET_SETTINGS_NS, writeDefault | `export { AGENT_PRESET_SETTINGS_NS, writeDefaultPreset } from './settings-store.ts';` | 28 |
| const | inject | `export declare const inject: string[]` | 30 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 35 |

## dsh-client-ui-agent-preset/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AgentPresetSettingsKey | `export type AgentPresetSettingsKey` | 3 |
| const | en | `export declare const en: Record<AgentPresetSettingsKey, string>` | 5 |
| const | zh | `export declare const zh: Record<AgentPresetSettingsKey, string>` | 7 |
| re-export | { presetDisplayText } | `export { presetDisplayText } from '@deepseek-ai/dsh-agent-presets/display';` | 8 |

## dsh-client-ui-agent-preset/lib/types/client/seat-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AgentPresetSeatState | `export interface AgentPresetSeatState` | 17 |
| class | AgentPresetSeatController | `export declare class AgentPresetSeatController` | 33 |
| method | AgentPresetSeatController.constructor | `constructor(ctx: ClientContext,` | 46 |

## dsh-client-ui-agent-preset/lib/types/client/section-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PresetRow | `export interface PresetRow` | 19 |
| interface | CopyDraft | `export interface CopyDraft` | 39 |
| interface | PresetView | `export interface PresetView` | 54 |
| interface | AgentPresetSectionState | `export interface AgentPresetSectionState` | 63 |
| function | draftBlocker | `export declare function draftBlocker(draft: CopyDraft, rows: readonly PresetRow[]): 'idRequired' \| 'idInvalid' \| 'idTaken' \| undefined` | 95 |
| class | AgentPresetSectionController | `export declare class AgentPresetSectionController` | 97 |
| method | AgentPresetSectionController.constructor | `constructor(ctx: ClientContext,` | 110 |

## dsh-client-ui-agent-preset/lib/types/client/settings-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | AGENT_PRESET_SETTINGS_NS | `export declare const AGENT_PRESET_SETTINGS_NS = "agent-presets"` | 12 |
| function | writeDefaultPreset | `export declare function writeDefaultPreset(ctx: ClientContext, id: string): Promise<string \| undefined>` | 23 |
| interface | AgentPresetOption | `export interface AgentPresetOption` | 25 |
| type | RosterPreset | `export type RosterPreset` | 36 |
| type | RosterRead | `export type RosterRead` | 38 |
| function | readRoster | `export declare function readRoster(ctx: ClientContext): Promise<RosterRead>` | 50 |
| function | presetOptions | `export declare function presetOptions(presets: readonly {` | 81 |
| interface | AgentPresetSettingsState | `export interface AgentPresetSettingsState` | 89 |
| class | AgentPresetSettingsController | `export declare class AgentPresetSettingsController` | 95 |
| method | AgentPresetSettingsController.constructor | `constructor(ctx: ClientContext);` | 102 |

## dsh-client-ui-agent-preset/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

