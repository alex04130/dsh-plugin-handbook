# dsh-client-ui-conversation

> Target-neutral Conversation assembly, shell, composer, queue, and view navigation
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-conversation/lib/types/client/apply.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 12 |
| interface | Config | `export interface Config` | 14 |
| const | Config | `export declare const Config: z<Config>` | 19 |
| function | apply | `export declare function apply(ctx: Context, config?: Config): void` | 24 |

## dsh-client-ui-conversation/lib/types/client/context-occupancy.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ContextOccupancy | `export interface ContextOccupancy` | 3 |
| function | contextOccupancy | `export declare function contextOccupancy(pressure: ContextPressureProjection \| undefined): ContextOccupancy \| null` | 13 |

## dsh-client-ui-conversation/lib/types/client/contract/composer-blocks.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ComposerBlock | `export interface ComposerBlock` | 4 |
| interface | ComposerBlocks | `export interface ComposerBlocks` | 9 |

## dsh-client-ui-conversation/lib/types/client/contract/composer-submission.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | InputSubmitMode | `export type InputSubmitMode` | 5 |
| type | ComposerSubmitGesture | `export type ComposerSubmitGesture` | 7 |

## dsh-client-ui-conversation/lib/types/client/contract/context-provenance.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ContextRole | `export type ContextRole` | 10 |
| interface | ContextProvenanceView | `export interface ContextProvenanceView` | 12 |
| type | KnownContextForm | `export type KnownContextForm` | 28 |

## dsh-client-ui-conversation/lib/types/client/contract/conversation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConversationMatchResult | `export interface ConversationMatchResult` | 4 |
| interface | ConversationTurnDataMap | `export interface ConversationTurnDataMap` | 9 |
| interface | ConversationStepDataMap | `export interface ConversationStepDataMap` | 12 |
| interface | ConversationLocationDataSource | `export interface ConversationLocationDataSource<Value>` | 15 |
| interface | ConversationLocationDataStore | `export interface ConversationLocationDataStore<DataMap extends object>` | 22 |
| interface | ConversationLocationDataValue | `interface ConversationLocationDataValue` | 36 |
| type | RegisteredTurnData | `type RegisteredTurnData<DataMap extends object>` | 43 |
| type | RegisteredStepData | `type RegisteredStepData<DataMap extends object>` | 51 |
| type | ConversationLocationDataOf | `type ConversationLocationDataOf<TurnData extends object, StepData extends object>` | 60 |
| type | ConversationLocationData | `export type ConversationLocationData` | 64 |
| interface | StepLocation | `export interface StepLocation` | 66 |
| interface | TurnLocation | `export interface TurnLocation` | 76 |
| type | ConversationLocation | `export type ConversationLocation` | 86 |
| interface | ConversationMatchOf | `interface ConversationMatchOf<Event extends SessionEventLike, Role extends ConversationMatchResult['role']>` | 98 |
| type | ConversationStartMatch | `export type ConversationStartMatch` | 104 |
| type | ConversationMatch | `export type ConversationMatch` | 106 |
| interface | ConversationViewNode | `export interface ConversationViewNode` | 108 |
| interface | ConversationViewSnapshotMap | `export interface ConversationViewSnapshotMap` | 116 |
| interface | ConversationViewSnapshotStore | `export interface ConversationViewSnapshotStore` | 119 |
| interface | ConversationNodeContext | `export interface ConversationNodeContext<State` | 124 |
| interface | ConversationPreviousContext | `export interface ConversationPreviousContext<State` | 134 |
| interface | ConversationContextReader | `export interface ConversationContextReader` | 143 |
| type | ConversationPublication | `export type ConversationPublication` | 153 |
| type | ConversationLocationDataScope | `export type ConversationLocationDataScope` | 155 |
| interface | ConversationNodeDefinition | `export interface ConversationNodeDefinition<State` | 157 |
| interface | ConversationTimelineSnapshot | `export interface ConversationTimelineSnapshot` | 210 |
| interface | ConversationViewBuilder | `export interface ConversationViewBuilder<Node extends ConversationViewNode` | 215 |
| interface | ConversationViewDefinition | `export interface ConversationViewDefinition<Node extends ConversationViewNode` | 237 |
| function | conversationContextKey | `export declare function conversationContextKey(kind: string, id: string): string` | 254 |
| export-list |  | `export {};` | 255 |

## dsh-client-ui-conversation/lib/types/client/contract/input.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TokenSpan | `export interface TokenSpan` | 16 |
| type | SubmitAttachment | `export type SubmitAttachment` | 22 |
| interface | DraftAttachmentSerializationResult | `export interface DraftAttachmentSerializationResult` | 32 |
| interface | SubmitOutcome | `export interface SubmitOutcome` | 36 |
| interface | CommandClaim | `export interface CommandClaim` | 41 |
| interface | ReferenceInsert | `export interface ReferenceInsert` | 55 |
| type | PickOutcome | `export type PickOutcome` | 63 |
| type | ArbitrateKey | `export type ArbitrateKey` | 72 |
| type | ArbitrateOutcome | `export type ArbitrateOutcome` | 74 |
| interface | BeginCommandRequest | `export interface BeginCommandRequest` | 76 |
| interface | InsertReferenceRequest | `export interface InsertReferenceRequest` | 81 |
| interface | ConsumeTokenRequest | `export interface ConsumeTokenRequest` | 86 |
| interface | InsertTextRequest | `export interface InsertTextRequest` | 96 |
| interface | InputTriggerHit | `export interface InputTriggerHit` | 102 |
| interface | InputTriggerController | `export interface InputTriggerController` | 110 |
| type | DraftAttachmentId | `export type DraftAttachmentId` | 159 |
| interface | InputTarget | `export interface InputTarget` | 165 |
| interface | SessionInput | `export interface SessionInput extends InputTarget` | 172 |
| interface | SessionInputResolver | `export interface SessionInputResolver` | 200 |
| interface | InputActions | `export interface InputActions` | 210 |
| interface | InputNotice | `export interface InputNotice` | 223 |
| interface | ComposerKeyboard | `export interface ComposerKeyboard` | 237 |
| type | QueuedMessage | `export type QueuedMessage` | 266 |
| type | ConsumeTokenGuard | `export type ConsumeTokenGuard` | 268 |
| interface | EditSelection | `export interface EditSelection` | 270 |
| interface | Occurrence | `export interface Occurrence` | 282 |
| interface | InputState | `export interface InputState` | 303 |
| interface | SubmitAttempt | `export interface SubmitAttempt` | 330 |
| type | InputEvent | `export type InputEvent` | 343 |
| type | InputEffect | `export type InputEffect` | 395 |

## dsh-client-ui-conversation/lib/types/client/contract/queue.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | QueueItemId | `export type QueueItemId` | 4 |
| type | QueueAction | `export type QueueAction` | 6 |
| type | QueueRow | `export type QueueRow` | 8 |

## dsh-client-ui-conversation/lib/types/client/contract/records.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AssistantRequestConfig | `export interface AssistantRequestConfig` | 10 |
| interface | AssistantProvenanceView | `export interface AssistantProvenanceView` | 21 |
| type | AssistantBlock | `export type AssistantBlock` | 26 |
| interface | UserMessageNode | `export interface UserMessageNode` | 45 |
| interface | AssistantTiming | `export interface AssistantTiming` | 54 |
| interface | AssistantMessageNode | `export interface AssistantMessageNode` | 63 |
| interface | SteeringMessageNode | `export interface SteeringMessageNode` | 88 |
| interface | ContextMessageNode | `export interface ContextMessageNode` | 99 |
| type | ModelRetryNode | `export type ModelRetryNode` | 112 |
| interface | TurnErrorNode | `export interface TurnErrorNode` | 127 |
| interface | TurnMaxTokensNode | `export interface TurnMaxTokensNode` | 141 |
| interface | ToolResultNode | `export interface ToolResultNode` | 151 |
| interface | CompactionSummaryNode | `export interface CompactionSummaryNode` | 183 |
| interface | UnknownSurfaceNode | `export interface UnknownSurfaceNode` | 208 |
| interface | CommandNode | `export interface CommandNode` | 225 |
| type | ConversationNode | `export type ConversationNode` | 249 |
| interface | RunningToolCall | `export interface RunningToolCall` | 251 |
| type | ToolCallBlock | `export type ToolCallBlock` | 265 |
| interface | PartialAssistant | `export interface PartialAssistant` | 267 |

## dsh-client-ui-conversation/lib/types/client/contract/request-inspection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConversationPromptSnapshot | `export interface ConversationPromptSnapshot` | 10 |
| interface | SystemPromptNode | `export interface SystemPromptNode` | 23 |
| interface | RequestPromptChange | `export interface RequestPromptChange` | 42 |
| interface | RequestPromptInspection | `export interface RequestPromptInspection` | 57 |
| type | RequestPromptInspector | `export type RequestPromptInspector` | 68 |
| function | inspectRequestPrompt | `export declare function inspectRequestPrompt(previous: ConversationPromptSnapshot \| undefined, event: SessionEvent<'request/header'>, system: SystemPromptNode ` | 78 |
| interface | RequestViewBase | `interface RequestViewBase` | 80 |
| interface | AssistantRequestView | `interface AssistantRequestView extends RequestViewBase` | 96 |
| interface | CompactionRequestView | `interface CompactionRequestView extends RequestViewBase` | 111 |
| type | RequestView | `export type RequestView` | 125 |
| interface | RequestInspectionSnapshot | `export interface RequestInspectionSnapshot` | 127 |

## dsh-client-ui-conversation/lib/types/client/contract/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ComposerAttachment | `export type ComposerAttachment` | 19 |
| interface | ComposerImageAttachment | `export interface ComposerImageAttachment` | 21 |
| interface | ComposerFileAttachment | `export interface ComposerFileAttachment` | 32 |
| type | DraftFileUpload | `export type DraftFileUpload` | 38 |
| type | DraftFileUploads | `export type DraftFileUploads` | 51 |
| interface | ComposerAttachmentsOwnerProps | `export interface ComposerAttachmentsOwnerProps` | 53 |
| type | MessageImageSource | `export type MessageImageSource` | 76 |
| type | MessageImageLoader | `export type MessageImageLoader` | 90 |
| interface | MessageImagesOwnerProps | `export interface MessageImagesOwnerProps` | 94 |
| type | RenderMessageImages | `export type RenderMessageImages` | 105 |
| type | UseConversation | `export type UseConversation` | 107 |
| type | UseConversationViews | `export type UseConversationViews` | 109 |
| interface | HeroAgentPresetOwnerProps | `export interface HeroAgentPresetOwnerProps` | 259 |
| interface | ConversationHeaderActionOwnerProps | `export interface ConversationHeaderActionOwnerProps` | 264 |
| interface | ConversationHeaderCornerOwnerProps | `export interface ConversationHeaderCornerOwnerProps` | 269 |
| interface | ConversationHeaderLineageOwnerProps | `export interface ConversationHeaderLineageOwnerProps` | 274 |
| interface | InputZone | `export interface InputZone` | 283 |
| interface | ConvViewOwnerProps | `export interface ConvViewOwnerProps` | 288 |
| type | ConvViewProps | `export type ConvViewProps` | 297 |
| interface | ConversationInjected | `export interface ConversationInjected` | 299 |
| interface | ConversationSessionInjected | `export interface ConversationSessionInjected` | 308 |
| interface | ConversationSessionHeaderInjected | `export interface ConversationSessionHeaderInjected` | 319 |
| interface | ComposerBarOwnerProps | `export interface ComposerBarOwnerProps` | 330 |
| interface | ComposerBarInjected | `export interface ComposerBarInjected` | 348 |
| interface | InputControlOwnerProps | `export interface InputControlOwnerProps` | 372 |
| type | ComposerBarProps | `export type ComposerBarProps` | 377 |
| interface | ComposerChainProps | `export interface ComposerChainProps` | 379 |
| interface | HeroBrandMarkOwnerProps | `export interface HeroBrandMarkOwnerProps` | 388 |
| type | ConversationSlotProps | `export type ConversationSlotProps` | 395 |
| type | ConversationStore | `export type ConversationStore` | 397 |
| type | ConversationSessionSlotProps | `export type ConversationSessionSlotProps` | 399 |
| type | ConversationSessionHeaderSlotProps | `export type ConversationSessionHeaderSlotProps` | 401 |
| type | ComposerAttachmentsProps | `export type ComposerAttachmentsProps` | 403 |
| interface | EmptyWorkspaceOwnerProps | `export interface EmptyWorkspaceOwnerProps` | 405 |

## dsh-client-ui-conversation/lib/types/client/contract/snapshot.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConversationSnapshot | `export interface ConversationSnapshot` | 5 |
| const | EMPTY_CONVERSATION_SNAPSHOT | `export declare const EMPTY_CONVERSATION_SNAPSHOT: ConversationSnapshot` | 10 |
| type | ConversationPhase | `export type ConversationPhase` | 12 |
| function | conversationPhase | `export declare function conversationPhase(session: SessionSnapshot, conversation: ConversationSnapshot): ConversationPhase` | 19 |

## dsh-client-ui-conversation/lib/types/client/contract/system-prompt.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PositionedSystem | `interface PositionedSystem` | 4 |
| interface | SystemPromptState | `export interface SystemPromptState` | 9 |
| type | SystemPromptInspector | `export type SystemPromptInspector` | 24 |
| function | inspectSystemPrompt | `export declare function inspectSystemPrompt(previous: SystemPromptState \| undefined, event: SessionEvent): SystemPromptState` | 33 |
| export-list |  | `export {};` | 34 |

## dsh-client-ui-conversation/lib/types/client/contract/views.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ViewTab | `export interface ViewTab` | 6 |
| interface | ConversationViewRequest | `export interface ConversationViewRequest` | 11 |
| interface | ConversationStoreState | `export interface ConversationStoreState` | 18 |

## dsh-client-ui-conversation/lib/types/client/conversation/assembler.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConversationEventDefinitions | `export interface ConversationEventDefinitions` | 5 |
| interface | ConversationViewDefinitions | `export interface ConversationViewDefinitions` | 12 |
| class | ConversationNodeAssembler | `export declare class ConversationNodeAssembler implements ConversationViewSnapshotStore` | 20 |
| method | ConversationNodeAssembler.constructor | `constructor(eventDefinitions: ConversationEventDefinitions, viewDefinitions: ConversationViewDefinitions);` | 42 |

## dsh-client-ui-conversation/lib/types/client/conversation/assembly.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConversationBinding | `export interface ConversationBinding` | 14 |
| class | UiConversation | `export declare class UiConversation extends Service` | 31 |
| method | UiConversation.constructor | `constructor(ctx: Context, sessions: ISessions);` | 43 |

## dsh-client-ui-conversation/lib/types/client/conversation/definition-registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ConversationDefinitionRegistry | `export declare abstract class ConversationDefinitionRegistry<Definition>` | 3 |
| method | ConversationDefinitionRegistry.constructor | `constructor(ctx: Context);` | 9 |

## dsh-client-ui-conversation/lib/types/client/conversation/event-registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ConversationEventRegistry | `export declare class ConversationEventRegistry extends ConversationDefinitionRegistry<ConversationNodeDefinition>` | 4 |

## dsh-client-ui-conversation/lib/types/client/conversation/historical-images.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | HistoricalImageCache | `export declare class HistoricalImageCache` | 7 |
| method | HistoricalImageCache.constructor | `constructor(ctx: Context, sessions: ISessions);` | 18 |

## dsh-client-ui-conversation/lib/types/client/conversation/location-index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ConversationLocationDataChange | `export interface ConversationLocationDataChange` | 5 |
| class | ConversationLocationIndex | `export declare class ConversationLocationIndex` | 11 |

## dsh-client-ui-conversation/lib/types/client/conversation/view-registry.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ConversationViewRegistry | `export declare class ConversationViewRegistry extends ConversationDefinitionRegistry<ConversationViewDefinition>` | 4 |

## dsh-client-ui-conversation/lib/types/client/image-labels.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | imageSizeText | `export declare function imageSizeText(bytes: number): string` | 10 |
| function | attachmentErrorText | `export declare function attachmentErrorText(t: Translate<ConversationKey>, reason: string, limits?: ImageAttachmentLimits): string` | 22 |

## dsh-client-ui-conversation/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { apply, Config, inject } | `export { apply, Config, inject } from './apply.ts';` | 2 |
| re-export | { UiConversation } | `export { UiConversation } from './conversation/assembly.ts';` | 4 |
| re-export | { ConversationController, UnsupportedIma | `export { ConversationController, UnsupportedImageMediaTypeError } from './service.ts';` | 6 |
| re-export | { EMPTY_CONVERSATION_SNAPSHOT, conversat | `export { EMPTY_CONVERSATION_SNAPSHOT, conversationPhase } from './contract/snapshot.ts';` | 9 |
| re-export | { inspectRequestPrompt } | `export { inspectRequestPrompt } from './contract/request-inspection.ts';` | 14 |
| re-export | { ConversationNodeAssembler } | `export { ConversationNodeAssembler } from './conversation/assembler.ts';` | 17 |
| re-export | { ConversationDefinitionRegistry } | `export { ConversationDefinitionRegistry } from './conversation/definition-registry.ts';` | 19 |
| re-export | { ConversationEventRegistry } | `export { ConversationEventRegistry } from './conversation/event-registry.ts';` | 20 |
| re-export | { ConversationLocationIndex } | `export { ConversationLocationIndex } from './conversation/location-index.ts';` | 21 |
| re-export | { ConversationViewRegistry } | `export { ConversationViewRegistry } from './conversation/view-registry.ts';` | 23 |

## dsh-client-ui-conversation/lib/types/client/input/blocks.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ComposerBlockRegistry | `export declare class ComposerBlockRegistry implements ComposerBlocks` | 18 |

## dsh-client-ui-conversation/lib/types/client/input/decorations.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TextRefRange | `export interface TextRefRange` | 16 |
| function | scanTextRefs | `export declare function scanTextRefs(draft: string, lexicon: ReadonlyMap<'/' \| '@', readonly string[]>): TextRefRange[]` | 31 |

## dsh-client-ui-conversation/lib/types/client/input/editor/ComposerContentEditable.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ComposerContentEditableProps | `export interface ComposerContentEditableProps extends HTMLAttributes<HTMLDivElement>` | 4 |
| function | ComposerContentEditable | `export declare function ComposerContentEditable({ editor, editable, ...rest }: ComposerContentEditableProps): ReactNode` | 15 |

## dsh-client-ui-conversation/lib/types/client/input/editor/DecoratorPortals.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DecoratorPortalsProps | `export interface DecoratorPortalsProps` | 4 |
| function | DecoratorPortals | `export declare function DecoratorPortals({ editor }: DecoratorPortalsProps): ReactNode` | 13 |

## dsh-client-ui-conversation/lib/types/client/input/editor/ReferenceChip.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ReferenceChipProps | `export interface ReferenceChipProps` | 4 |
| function | ReferenceChip | `export declare function ReferenceChip({ label, appearance, invalid }: ReferenceChipProps): ReactNode` | 16 |

## dsh-client-ui-conversation/lib/types/client/input/editor/chip-node.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SerializedReferenceChipNode | `export type SerializedReferenceChipNode` | 15 |
| class | ReferenceChipNode | `export declare class ReferenceChipNode extends DecoratorNode<JSX.Element>` | 24 |
| method | ReferenceChipNode.constructor | `constructor(insert: Omit<ReferenceInsert, 'appearance'> & {` | 56 |
| function | $createReferenceChipNode | `export declare function $createReferenceChipNode(insert: ReferenceInsert): ReferenceChipNode` | 103 |
| function | $isReferenceChipNode | `export declare function $isReferenceChipNode(node: LexicalNode \| null \| undefined): node is ReferenceChipNode` | 109 |

## dsh-client-ui-conversation/lib/types/client/input/editor/claim-decor.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | registerClaimDecoration | `export declare function registerClaimDecoration(editor: LexicalEditor, activeToken: () => string \| null): () => void` | 15 |
| function | refreshClaimDecoration | `export declare function refreshClaimDecoration(editor: LexicalEditor): void` | 22 |

## dsh-client-ui-conversation/lib/types/client/input/editor/keymap.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ComposerKeymapHandlers | `export interface ComposerKeymapHandlers` | 18 |
| function | registerComposerKeymap | `export declare function registerComposerKeymap(editor: LexicalEditor, handlers: ComposerKeymapHandlers): () => void` | 40 |

## dsh-client-ui-conversation/lib/types/client/input/editor/projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | ATOMIC_CHAR | `export declare const ATOMIC_CHAR = "\uFFFC"` | 13 |
| interface | ComposerSegment | `export interface ComposerSegment` | 15 |
| interface | ComposerLayout | `export interface ComposerLayout` | 31 |
| function | $composerLayout | `export declare function $composerLayout(): ComposerLayout` | 52 |
| function | detectOffsetOfClipboardOffset | `export declare function detectOffsetOfClipboardOffset(layout: ComposerLayout, clipboardOffset: number): number` | 62 |
| interface | EditorProjection | `export interface EditorProjection` | 64 |
| function | $detectOffsetOfPoint | `export declare function $detectOffsetOfPoint(layout: ComposerLayout, point: Point): number \| null` | 85 |
| function | $projectComposer | `export declare function $projectComposer(idOf: (key: NodeKey) => number): EditorProjection` | 92 |

## dsh-client-ui-conversation/lib/types/client/input/editor/span-map.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | DetectSpan | `export interface DetectSpan` | 11 |
| function | $selectDetectSpan | `export declare function $selectDetectSpan(span: DetectSpan): boolean` | 21 |
| function | $replaceDetectSpanWithText | `export declare function $replaceDetectSpanWithText(span: DetectSpan, text: string): boolean` | 29 |
| function | $replaceDetectSpanWithNodes | `export declare function $replaceDetectSpanWithNodes(span: DetectSpan, nodes: readonly LexicalNode[]): boolean` | 37 |

## dsh-client-ui-conversation/lib/types/client/input/editor/text-ref.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SerializedTextRefNode | `export type SerializedTextRefNode` | 15 |
| class | TextRefNode | `export declare class TextRefNode extends TextNode` | 17 |
| function | registerTextRefDecoration | `export declare function registerTextRefDecoration(editor: LexicalEditor, lexiconOf: () => ReadonlyMap<'/' \| '@', readonly string[]>, activeToken: () => string ` | 52 |
| function | rescanTextRefs | `export declare function rescanTextRefs(editor: LexicalEditor): void` | 59 |

## dsh-client-ui-conversation/lib/types/client/input/facade.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PopupDismissFace | `export interface PopupDismissFace` | 17 |
| interface | SessionInputDeps | `export interface SessionInputDeps` | 26 |
| class | SessionInputShell | `export declare class SessionInputShell implements SessionInput` | 57 |
| method | SessionInputShell.constructor | `constructor(deps: SessionInputDeps);` | 92 |

## dsh-client-ui-conversation/lib/types/client/input/hub.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | InputHub | `export declare class InputHub implements SessionInputResolver` | 17 |
| method | InputHub.constructor | `constructor(rootCtx: Context, t: TranslateNS<'conversation'>);` | 25 |

## dsh-client-ui-conversation/lib/types/client/input/machine.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SubmitSnapshot | `export interface SubmitSnapshot` | 3 |
| class | SubmitMachine | `export declare class SubmitMachine` | 8 |

## dsh-client-ui-conversation/lib/types/client/input/queue-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | queueReadFaceOf | `export declare function queueReadFaceOf(session: SessionFace): ObservableSnapshot<readonly QueuedMessage[]>` | 19 |

## dsh-client-ui-conversation/lib/types/client/input/submission-policy.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { DEFAULT_BUSY_ENTER_BEHAVIOR } | `export { DEFAULT_BUSY_ENTER_BEHAVIOR } from '../../submission-settings.ts';` | 10 |
| function | resolveSubmitMode | `export declare function resolveSubmitMode(preferred: BusyEnterBehavior, running: boolean, gesture: ComposerSubmitGesture, steeringAvailable: boolean): InputSubm` | 23 |
| class | ComposerSubmissionPolicy | `export declare class ComposerSubmissionPolicy` | 29 |
| method | ComposerSubmissionPolicy.constructor | `constructor(host?: SettingsScope<ConversationSettings>);` | 39 |

## dsh-client-ui-conversation/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "conversation"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| type | ConversationKey | `export type ConversationKey` | 167 |
| const | en | `export declare const en: {` | 169 |

## dsh-client-ui-conversation/lib/types/client/queue/QueueDock.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | QueueDockInjected | `export interface QueueDockInjected` | 6 |
| type | QueueDockProps | `export type QueueDockProps` | 13 |
| function | QueueDock | `export declare function QueueDock({ useSession, updateQueue, notify, loadImage, t }: QueueDockProps): import("react").JSX.Element \| null` | 19 |
| const | queueDockEntry | `export declare const queueDockEntry: {` | 21 |

## dsh-client-ui-conversation/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | IConversation | `export interface IConversation` | 25 |
| class | UnsupportedImageMediaTypeError | `export declare class UnsupportedImageMediaTypeError extends Error` | 58 |
| method | UnsupportedImageMediaTypeError.constructor | `constructor(mediaType: string);` | 62 |
| class | ConversationController | `export declare class ConversationController extends Service implements IConversation` | 65 |
| method | ConversationController.constructor | `constructor(ctx: Context, config: {` | 85 |

## dsh-client-ui-conversation/lib/types/client/settings/EnterBehaviorRow.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | EnterBehaviorRowInjected | `export interface EnterBehaviorRowInjected` | 5 |
| type | EnterBehaviorRowProps | `export type EnterBehaviorRowProps` | 14 |
| function | EnterBehaviorRow | `export declare function EnterBehaviorRow({ useBusyEnter, setBusyEnter, t }: EnterBehaviorRowProps): import("react").JSX.Element` | 20 |

## dsh-client-ui-conversation/lib/types/client/skeleton/ContextMeter.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ContextMeterProps | `export interface ContextMeterProps` | 8 |
| function | ContextMeter | `export declare function ContextMeter({ useProjection, t }: ContextMeterProps): import("react").JSX.Element \| null` | 13 |

## dsh-client-ui-conversation/lib/types/client/skeleton/ConversationPanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | ConversationPanel | `export declare function ConversationPanel({ renderSlot }: PropsRuntime<'main'> & PropsRenderSlots<'main.conversation'>): import("react").ReactNode` | 8 |

## dsh-client-ui-conversation/lib/types/client/skeleton/ConversationRoot.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ConversationRootProps | `export type ConversationRootProps` | 3 |
| function | ConversationRoot | `export declare function ConversationRoot({ sessionId, useSession, useSessions, useSessionPendingInteraction, useWorkspaces, useConversation, useInput, useCompos` | 4 |

## dsh-client-ui-conversation/lib/types/client/skeleton/ConversationSession.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ConversationSessionProps | `export type ConversationSessionProps` | 4 |
| type | ConversationSessionHeaderProps | `export type ConversationSessionHeaderProps` | 6 |
| function | ConversationSessionHeader | `export declare function ConversationSessionHeader({ sessionId, useSession, useSessions, useConversation, useConversationViews, useStore, renderSlot, open, selec` | 12 |
| function | ConversationSession | `export declare function ConversationSession({ useSession, useConversation, useConversationViews, useInput, inputActions, useStore, actions, renderSlot, bindDraf` | 19 |

## dsh-client-ui-conversation/lib/types/client/skeleton/EmptyHero.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | HeroTranslate | `type HeroTranslate` | 4 |
| function | workspaceLabel | `export declare function workspaceLabel(cwd: string): string` | 11 |
| function | WorkspaceChip | `export declare function WorkspaceChip({ buttonRef, label, menuOpen, onClick, t }: {` | 23 |
| interface | HeroShellProps | `export interface HeroShellProps` | 31 |
| function | HeroShell | `export declare function HeroShell({ t, renderSlot, children }: HeroShellProps): import("react").JSX.Element` | 44 |
| export-list |  | `export {};` | 45 |

## dsh-client-ui-conversation/lib/types/client/skeleton/InputBar.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | InputBarProps | `export type InputBarProps` | 16 |
| const | InputBar | `export declare const InputBar: import("react").MemoExoticComponent<({ useSession, useInput, inputActions, keyboard, addFiles, removeAttachment, resolveDraftAtta` | 17 |

## dsh-client-ui-conversation/lib/types/client/skeleton/PermissionSelect.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | PermissionSelectProps | `export interface PermissionSelectProps` | 3 |
| function | PermissionSelect | `export declare function PermissionSelect({ value, locked, command, t }: PermissionSelectProps): import("react").JSX.Element \| null` | 10 |

## dsh-client-ui-conversation/lib/types/client/skeleton/TodoPanel.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TodoPanelProps | `export interface TodoPanelProps` | 4 |
| function | TodoPanel | `export declare function TodoPanel({ todos, t }: TodoPanelProps): import("react").JSX.Element \| null` | 10 |
| type | TodoDockProps | `export type TodoDockProps` | 12 |
| function | TodoDock | `export declare function TodoDock({ useProjection, t }: TodoDockProps): import("react").JSX.Element` | 14 |
| const | todoDockEntry | `export declare const todoDockEntry: {` | 16 |

## dsh-client-ui-conversation/lib/types/client/skeleton/safari.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | BrowserIdentity | `export interface BrowserIdentity` | 3 |
| function | isSafariBrowser | `export declare function isSafariBrowser(identity: BrowserIdentity): boolean` | 12 |
| function | repairSafariTextareaLayout | `export declare function repairSafariTextareaLayout(input: HTMLTextAreaElement \| null): void` | 17 |

## dsh-client-ui-conversation/lib/types/client/stores.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ConversationActions | `type ConversationActions` | 6 |
| function | createConversationStore | `export declare function createConversationStore(): EngineStoreHandle<ConversationStoreState, ConversationActions>` | 16 |
| function | readConversationViewPreference | `export declare function readConversationViewPreference(sessionId: SessionId): string \| null` | 22 |
| export-list |  | `export {};` | 23 |

## dsh-client-ui-conversation/lib/types/client/view-selection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | resolveActiveView | `export declare function resolveActiveView(tabs: readonly ViewTab[], selectedId: string \| null): ViewTab \| undefined` | 8 |

## dsh-client-ui-conversation/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { BUSY_ENTER_BEHAVIORS, BUSY_ENTER_FIELD | `export { BUSY_ENTER_BEHAVIORS, BUSY_ENTER_FIELD, CONVERSATION_SETTINGS_NAMESPACE, DEFAULT_BUSY_ENTER_BEHAVIOR, type BusyEnterBehavior, type ConversationSettings` | 3 |
| function | apply | `export declare function apply(ctx: Context): void` | 8 |

## dsh-client-ui-conversation/lib/types/submission-settings.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | CONVERSATION_SETTINGS_NAMESPACE | `export declare const CONVERSATION_SETTINGS_NAMESPACE = "ui-conversation"` | 4 |
| const | BUSY_ENTER_FIELD | `export declare const BUSY_ENTER_FIELD = "busyEnter"` | 6 |
| const | BUSY_ENTER_BEHAVIORS | `export declare const BUSY_ENTER_BEHAVIORS: readonly ["queue", "steer"]` | 8 |
| type | BusyEnterBehavior | `export type BusyEnterBehavior` | 10 |
| const | DEFAULT_BUSY_ENTER_BEHAVIOR | `export declare const DEFAULT_BUSY_ENTER_BEHAVIOR: BusyEnterBehavior` | 12 |
| interface | ConversationSettings | `export interface ConversationSettings` | 14 |
| const | ConversationSettingsSchema | `export declare const ConversationSettingsSchema: z<ConversationSettings>` | 19 |

