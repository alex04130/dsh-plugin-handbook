# dsh-client-ui-settings-plugins

> Plugins settings section with feature-owned tabs and configurable host-plane plugin cards
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-settings-plugins/lib/types/client/AgentLoopCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AgentLoopCardProps | `export type AgentLoopCardProps` | 5 |
| function | AgentLoopCard | `export declare function AgentLoopCard(props: AgentLoopCardProps): import("react").JSX.Element` | 11 |

## dsh-client-ui-settings-plugins/lib/types/client/BashCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | BashCardProps | `export type BashCardProps` | 5 |
| function | BashCard | `export declare function BashCard(props: BashCardProps): import("react").JSX.Element` | 11 |

## dsh-client-ui-settings-plugins/lib/types/client/ConfigurablePluginsTab.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ConfigurablePluginsTabProps | `export type ConfigurablePluginsTabProps` | 12 |
| function | ConfigurablePluginsTab | `export declare function ConfigurablePluginsTab(props: ConfigurablePluginsTabProps): import("react").JSX.Element \| null` | 18 |

## dsh-client-ui-settings-plugins/lib/types/client/PluginCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PluginCardProps | `export interface PluginCardProps` | 20 |
| function | PluginCard | `export declare function PluginCard(props: PluginCardProps): import("react").JSX.Element \| null` | 41 |

## dsh-client-ui-settings-plugins/lib/types/client/PluginsSettingsSection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PluginsSettingsTabEntry | `export interface PluginsSettingsTabEntry` | 5 |
| interface | PluginsSettingsSectionInjected | `export interface PluginsSettingsSectionInjected` | 11 |
| type | PluginsSettingsSectionProps | `export type PluginsSettingsSectionProps` | 18 |
| function | PluginsSettingsSection | `export declare function PluginsSettingsSection({ t, renderSlot, useTabs }: PluginsSettingsSectionProps): import("react").JSX.Element` | 20 |

## dsh-client-ui-settings-plugins/lib/types/client/SubagentModelSelectionCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SubagentModelSelectionCardProps | `export type SubagentModelSelectionCardProps` | 5 |
| function | SubagentModelSelectionCard | `export declare function SubagentModelSelectionCard(props: SubagentModelSelectionCardProps): import("react").JSX.Element` | 11 |

## dsh-client-ui-settings-plugins/lib/types/client/WebSearchCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | WebSearchCardProps | `export type WebSearchCardProps` | 9 |
| function | WebSearchCard | `export declare function WebSearchCard(props: WebSearchCardProps): import("react").JSX.Element` | 15 |

## dsh-client-ui-settings-plugins/lib/types/client/agent-loop-card-controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | AGENT_LOOP_NS | `export declare const AGENT_LOOP_NS = "agent-loop"` | 9 |
| interface | AgentLoopSettings | `export interface AgentLoopSettings` | 14 |
| interface | AgentLoopCardState | `export interface AgentLoopCardState extends CardShell` | 19 |
| interface | AgentLoopCardFace | `export interface AgentLoopCardFace extends CardActions` | 24 |
| class | AgentLoopCardController | `export declare class AgentLoopCardController` | 31 |
| method | AgentLoopCardController.constructor | `constructor(scope: SettingsScope<AgentLoopSettings>);` | 35 |

## dsh-client-ui-settings-plugins/lib/types/client/bash-card-controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SHELL_NS | `export declare const SHELL_NS = "shell"` | 10 |
| interface | BashSettings | `export interface BashSettings` | 12 |
| interface | BashCardState | `export interface BashCardState extends CardShell` | 19 |
| interface | BashCardFace | `export interface BashCardFace extends CardActions` | 26 |
| class | BashCardController | `export declare class BashCardController` | 33 |
| method | BashCardController.constructor | `constructor(scope: SettingsScope<BashSettings>);` | 37 |

## dsh-client-ui-settings-plugins/lib/types/client/card-form.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | FieldWrite | `export type FieldWrite` | 18 |
| interface | CardFieldSpec | `export interface CardFieldSpec` | 25 |
| interface | CardSecretSpec | `export interface CardSecretSpec` | 41 |
| interface | CardFieldState | `export interface CardFieldState` | 48 |
| interface | CardShell | `export interface CardShell` | 61 |
| interface | CardActions | `export interface CardActions` | 76 |
| function | numberField | `export declare function numberField(field: string): CardFieldSpec` | 92 |
| function | textField | `export declare function textField(field: string): CardFieldSpec` | 99 |
| class | CardForm | `export declare class CardForm<T>` | 107 |
| method | CardForm.constructor | `constructor(scope: SettingsScope<T>, specs: CardFieldSpec[], secrets?: CardSecretSpec[]);` | 120 |

## dsh-client-ui-settings-plugins/lib/types/client/fields.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | FieldProps | `export interface FieldProps` | 9 |
| function | ValueField | `export declare function ValueField(props: FieldProps & {` | 42 |
| function | SecretField | `export declare function SecretField(props: Pick<FieldProps, 'id' \| 'label' \| 'hint' \| 'text' \| 'disabled' \| 'onEdit'> & {` | 55 |

## dsh-client-ui-settings-plugins/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 23 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 28 |

## dsh-client-ui-settings-plugins/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PluginsSettingsLocaleKey | `export type PluginsSettingsLocaleKey` | 3 |
| const | en | `export declare const en: Record<PluginsSettingsLocaleKey, string>` | 5 |
| const | zh | `export declare const zh: Record<PluginsSettingsLocaleKey, string>` | 7 |

## dsh-client-ui-settings-plugins/lib/types/client/slot-contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SettingsPluginItemOwnerProps | `export interface SettingsPluginItemOwnerProps` | 27 |

## dsh-client-ui-settings-plugins/lib/types/client/subagent-model-selection-card-controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SUBAGENT_MODEL_SELECTION_NS | `export declare const SUBAGENT_MODEL_SELECTION_NS = "subagent-model-selection"` | 8 |
| interface | AllowedSubagentModel | `export interface AllowedSubagentModel` | 10 |
| interface | SubagentModelSelectionSettings | `export interface SubagentModelSelectionSettings` | 15 |
| interface | SubagentModelCandidate | `export interface SubagentModelCandidate extends AllowedSubagentModel` | 22 |
| interface | SubagentModelSelectionCardState | `export interface SubagentModelSelectionCardState extends CardShell` | 35 |
| interface | SubagentModelSelectionCardFace | `export interface SubagentModelSelectionCardFace` | 48 |
| function | subagentModelKey | `export declare function subagentModelKey(route: AllowedSubagentModel): string` | 69 |
| function | subagentModelCandidates | `export declare function subagentModelCandidates(groups: readonly ModelProviderGroup[], stored: readonly AllowedSubagentModel[], selected: ReadonlySet<string>): ` | 77 |
| class | SubagentModelSelectionCardController | `export declare class SubagentModelSelectionCardController` | 79 |
| method | SubagentModelSelectionCardController.constructor | `constructor(scope: SettingsScope<SubagentModelSelectionSettings>, ctx: ClientContext);` | 101 |

## dsh-client-ui-settings-plugins/lib/types/client/tab-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConfigurablePluginsTabState | `export interface ConfigurablePluginsTabState` | 16 |
| interface | ConfigurablePluginsTabFace | `export interface ConfigurablePluginsTabFace` | 35 |
| class | ConfigurablePluginsTabController | `export declare class ConfigurablePluginsTabController` | 42 |
| method | ConfigurablePluginsTabController.constructor | `constructor(describeFace: SettingsDescribeFace, entries: () => readonly StoredEntry[]);` | 53 |

## dsh-client-ui-settings-plugins/lib/types/client/web-search-card-controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | WEB_SEARCH_NS | `export declare const WEB_SEARCH_NS = "web-search-deepseek"` | 19 |
| interface | WebSearchSettings | `export interface WebSearchSettings` | 21 |
| interface | WebSearchCardState | `export interface WebSearchCardState extends CardShell` | 30 |
| interface | WebSearchCardFace | `export interface WebSearchCardFace extends CardActions` | 43 |
| class | WebSearchCardController | `export declare class WebSearchCardController` | 50 |
| method | WebSearchCardController.constructor | `constructor(scope: SettingsScope<WebSearchSettings>, ctx: ClientContext);` | 61 |

## dsh-client-ui-settings-plugins/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 10 |

