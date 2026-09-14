# dsh-client-ui-settings-models

> Models settings and shared product-onboarding dialogs over existing settings and credential joins
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-settings-models/lib/types/client/CustomProviderCard.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | CustomProviderCardProps | `export interface CustomProviderCardProps` | 27 |
| function | CustomProviderCard | `export declare function CustomProviderCard(props: CustomProviderCardProps): ReactNode` | 52 |

## dsh-client-ui-settings-models/lib/types/client/DeepSeekModelsEditor.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | DeepSeekModelDraft | `export type DeepSeekModelDraft` | 10 |
| function | parseCapacity | `export declare function parseCapacity(text: string): number \| undefined` | 18 |
| function | formatCapacity | `export declare function formatCapacity(value: number): string` | 26 |
| interface | DeepSeekModelsValidationFailure | `export interface DeepSeekModelsValidationFailure` | 28 |
| function | modelDrafts | `export declare function modelDrafts(value: unknown): DeepSeekModelDraft[]` | 35 |
| function | validateDeepSeekModels | `export declare function validateDeepSeekModels(value: unknown): DeepSeekModelsValidationFailure \| undefined` | 41 |
| interface | DeepSeekModelsEditorProps | `export interface DeepSeekModelsEditorProps` | 43 |
| function | DeepSeekModelsEditor | `export declare function DeepSeekModelsEditor(props: DeepSeekModelsEditorProps): ReactNode` | 67 |

## dsh-client-ui-settings-models/lib/types/client/DeepSeekOnboardingDialog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DeepSeekOnboardingInjected | `export interface DeepSeekOnboardingInjected` | 16 |
| type | DeepSeekOnboardingDialogProps | `export type DeepSeekOnboardingDialogProps` | 31 |
| function | DeepSeekOnboardingDialog | `export declare function DeepSeekOnboardingDialog(props: DeepSeekOnboardingDialogProps): ReactNode` | 38 |

## dsh-client-ui-settings-models/lib/types/client/EditorFooter.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | EditorFooterProps | `export interface EditorFooterProps` | 18 |
| function | EditorFooter | `export declare function EditorFooter(props: EditorFooterProps): ReactNode` | 41 |

## dsh-client-ui-settings-models/lib/types/client/ModelListEditor.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ModelDraft | `export type ModelDraft` | 24 |
| interface | ProbeTarget | `export interface ProbeTarget` | 26 |
| interface | ModelListEditorProps | `export interface ModelListEditorProps` | 43 |
| function | ModelListEditor | `export declare function ModelListEditor(props: ModelListEditorProps): ReactNode` | 73 |

## dsh-client-ui-settings-models/lib/types/client/ModelsSection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ModelsSectionInjected | `export interface ModelsSectionInjected` | 21 |
| type | ModelsChildSlots | `type ModelsChildSlots` | 36 |
| type | ModelsSectionProps | `export type ModelsSectionProps` | 44 |
| interface | ProviderIdentity | `export interface ProviderIdentity` | 46 |
| function | removeProviderProfile | `export declare function removeProviderProfile(operations: ModelsOperations, controller: ModelsSettingsStore, target: {` | 63 |
| function | needsSetup | `export declare function needsSetup(row: ProviderRow, anyUsable: boolean): boolean` | 77 |
| function | providerTargetLabel | `export declare function providerTargetLabel(target: ProviderIdentity): string` | 79 |
| function | providerCopy | `export declare function providerCopy(template: string, target: ProviderIdentity): string` | 81 |
| function | ModelsSection | `export declare function ModelsSection(props: ModelsSectionProps): ReactNode` | 87 |
| export-list |  | `export {};` | 88 |

## dsh-client-ui-settings-models/lib/types/client/OnboardingModal.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | OnboardingModal | `export declare function OnboardingModal({ title, focusTitle, children, }: {` | 10 |

## dsh-client-ui-settings-models/lib/types/client/ProviderEditor.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ProviderEditorProps | `export interface ProviderEditorProps` | 29 |
| function | pathOps | `export declare function pathOps(base: readonly string[], before: unknown, after: Record<string, unknown>): SettingsPathOpView[]` | 81 |
| function | ProviderEditor | `export declare function ProviderEditor(props: ProviderEditorProps): ReactNode` | 87 |

## dsh-client-ui-settings-models/lib/types/client/WelcomeNotice.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WelcomeNoticeInjected | `export interface WelcomeNoticeInjected` | 8 |
| type | WelcomeNoticeProps | `export type WelcomeNoticeProps` | 19 |
| function | WelcomeNotice | `export declare function WelcomeNotice(props: WelcomeNoticeProps): ReactNode` | 25 |

## dsh-client-ui-settings-models/lib/types/client/apiKey.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ApiKeyFailureKey | `export type ApiKeyFailureKey` | 12 |
| function | apiKeyFailure | `export declare function apiKeyFailure(draft: string): ApiKeyFailureKey \| undefined` | 23 |

## dsh-client-ui-settings-models/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | refreshIfLoaded | `export declare function refreshIfLoaded(controller: ModelsSettingsStore): void` | 28 |
| const | inject | `export declare const inject: string[]` | 34 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 41 |

## dsh-client-ui-settings-models/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | en | `export declare const en: {` | 3 |
| type | ModelsKey | `export type ModelsKey` | 106 |
| const | zh | `export declare const zh: {` | 108 |

## dsh-client-ui-settings-models/lib/types/client/operations.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SettingsWriteOutcome | `export type SettingsWriteOutcome` | 10 |
| type | ModelDiscoveryOutcome | `export type ModelDiscoveryOutcome` | 30 |
| interface | ModelsOperations | `export interface ModelsOperations` | 42 |
| function | createModelsOperations | `export declare function createModelsOperations(ctx: ClientContext): ModelsOperations` | 85 |

## dsh-client-ui-settings-models/lib/types/client/schema-operations.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SettingsSchemaOperations | `export type SettingsSchemaOperations` | 3 |
| function | createSettingsSchemaOperations | `export declare function createSettingsSchemaOperations(service: SettingsSchemaService): SettingsSchemaOperations` | 9 |

## dsh-client-ui-settings-models/lib/types/client/slot-contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ProviderCardExtrasOwnerProps | `export interface ProviderCardExtrasOwnerProps` | 47 |
| interface | ModelsFooterOwnerProps | `export interface ModelsFooterOwnerProps` | 56 |

## dsh-client-ui-settings-models/lib/types/client/store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ProviderDirectoryEntry | `export interface ProviderDirectoryEntry` | 15 |
| function | joinProviderDirectory | `export declare function joinProviderDirectory(registered: readonly LlmProviderInfo[], directory: readonly LlmConfigurableProvider[]): ProviderDirectoryEntry[]` | 30 |
| interface | ProviderRow | `export interface ProviderRow` | 32 |
| interface | ModelsSettingsState | `export interface ModelsSettingsState` | 52 |
| function | deriveKeyRef | `export declare function deriveKeyRef(provider: string): string` | 72 |
| function | protocolChoices | `export declare function protocolChoices(namespace: SettingsNamespaceView \| undefined, schema: SettingsSchemaOperations): string[]` | 82 |
| class | ModelsSettingsStore | `export declare class ModelsSettingsStore` | 84 |
| method | ModelsSettingsStore.constructor | `constructor(ctx: ClientContext, schema: SettingsSchemaOperations, describeFace: SettingsDescribeFace);` | 98 |
| function | providerUsable | `export declare function providerUsable(row: ProviderRow): boolean` | 121 |
| type | OnboardingReadiness | `export type OnboardingReadiness` | 123 |
| function | onboardingReadiness | `export declare function onboardingReadiness(state: ModelsSettingsState): OnboardingReadiness` | 145 |

## dsh-client-ui-settings-models/lib/types/client/welcome-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WelcomeNoticeState | `export interface WelcomeNoticeState` | 10 |
| type | WelcomeSection | `export type WelcomeSection` | 16 |
| function | decodeWelcomeSection | `export declare function decodeWelcomeSection(section: unknown): WelcomeSection` | 24 |
| class | WelcomeNoticeStore | `export declare class WelcomeNoticeStore` | 26 |
| method | WelcomeNoticeStore.constructor | `constructor(scope: SettingsScope<WelcomeSection>);` | 37 |

## dsh-client-ui-settings-models/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 3 |

## dsh-client-ui-settings-models/lib/types/onboarding-copy.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | WELCOME_NOTICE_SETTINGS_NAMESPACE | `export declare const WELCOME_NOTICE_SETTINGS_NAMESPACE = "ui-onboarding"` | 2 |
| const | WELCOME_NOTICE_ACK_FIELD | `export declare const WELCOME_NOTICE_ACK_FIELD = "welcomeNoticeVersion"` | 4 |
| const | WELCOME_NOTICE_VERSION | `export declare const WELCOME_NOTICE_VERSION = "2026-08-13.1"` | 9 |

