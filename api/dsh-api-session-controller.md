# dsh-api-session-controller

> Session Remote commands, cold reads, and live control transport
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-api-session-controller/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-api-session-controller/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 65 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 66 |

## dsh-api-session-controller/lib/types/agent.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | ApiSessionNotFound | `export declare class ApiSessionNotFound extends Error` | 9 |
| class | ApiSessionSubagentOwnership | `export declare class ApiSessionSubagentOwnership extends Error` | 12 |
| method | ApiSessionSubagentOwnership.constructor | `constructor(sessionId: SessionId);` | 15 |
| class | ApiSessionCwdConflict | `export declare class ApiSessionCwdConflict extends Error` | 18 |
| method | ApiSessionCwdConflict.constructor | `constructor(sessionId: SessionId, requestedCwd: string, existingCwd: string \| undefined);` | 22 |
| class | ApiSessionPresetConflict | `export declare class ApiSessionPresetConflict extends Error` | 25 |
| method | ApiSessionPresetConflict.constructor | `constructor(sessionId: SessionId, requestedPreset: string, existingPreset: string \| undefined);` | 29 |
| type | ApiSessionAgentError | `export type ApiSessionAgentError` | 32 |
| type | ApiSessionAgentResult | `export type ApiSessionAgentResult` | 34 |
| type | InstalledSelection | `type InstalledSelection` | 39 |
| function | hasApiSessionSubagentOwner | `export declare function hasApiSessionSubagentOwner(ctx: Context, session: Pick<Session, 'header'>, agent: Agent \| undefined): boolean` | 50 |
| function | apiSessionSubagentOwnershipError | `export declare function apiSessionSubagentOwnershipError(sessionId: SessionId): ApiSessionAgentError` | 56 |
| function | inspectApiSession | `export declare function inspectApiSession(ctx: Context, sessionId: SessionId, signal?: AbortSignal): Promise<SessionInspection>` | 64 |
| class | ApiSessionAgentController | `export declare class ApiSessionAgentController` | 66 |
| method | ApiSessionAgentController.constructor | `constructor(ctx: Context);` | 73 |
| export-list |  | `export {};` | 153 |

## dsh-api-session-controller/lib/types/assistant-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionAssistantStreamAccumulator | `export declare class SessionAssistantStreamAccumulator` | 9 |

## dsh-api-session-controller/lib/types/catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | buildModelCatalog | `export declare function buildModelCatalog(ctx: Context, defaultSelection?: ModelSelection): Promise<ModelCatalog>` | 10 |

## dsh-api-session-controller/lib/types/client/contract/events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | AssistantLiveChunkEvent | `export interface AssistantLiveChunkEvent` | 6 |
| type | SessionEventLike | `export type SessionEventLike` | 18 |
| type | SessionEventLikeEntry | `export type SessionEventLikeEntry` | 20 |
| type | SessionLiveEventEntry | `export type SessionLiveEventEntry` | 28 |
| interface | SessionAssistantSettlementEntry | `export interface SessionAssistantSettlementEntry` | 32 |
| type | SessionTransientEventEntry | `export type SessionTransientEventEntry` | 37 |
| type | SessionEventChange | `export type SessionEventChange` | 41 |
| interface | SessionEventWindow | `export interface SessionEventWindow` | 56 |
| type | SessionEventSource | `export type SessionEventSource` | 63 |
| class | MutableSessionEventSource | `export declare class MutableSessionEventSource implements SessionEventSource` | 65 |

## dsh-api-session-controller/lib/types/client/contract/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | PendingSubmissionRetirement | `export type PendingSubmissionRetirement` | 23 |
| interface | BeginSubmissionInput | `export interface BeginSubmissionInput` | 30 |
| interface | SubmissionHandle | `export interface SubmissionHandle` | 41 |
| interface | ProjectionsFace | `export interface ProjectionsFace` | 48 |
| interface | ISession | `export interface ISession` | 58 |
| type | SessionFace | `export type SessionFace` | 149 |

## dsh-api-session-controller/lib/types/client/contract/sessions.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ISessions | `export interface ISessions` | 19 |

## dsh-api-session-controller/lib/types/client/contract/snapshot.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | QueuedMessage | `export interface QueuedMessage` | 10 |
| interface | PendingSubmissionImage | `export interface PendingSubmissionImage` | 21 |
| interface | PendingSubmissionImageAttachment | `export interface PendingSubmissionImageAttachment` | 32 |
| interface | PendingSubmissionFileAttachment | `export interface PendingSubmissionFileAttachment` | 37 |
| type | PendingSubmissionAttachment | `export type PendingSubmissionAttachment` | 42 |
| type | PendingSubmissionPlacement | `export type PendingSubmissionPlacement` | 44 |
| interface | PendingSubmission | `export interface PendingSubmission` | 51 |
| type | OpenState | `export type OpenState` | 64 |
| interface | PromptError | `export interface PromptError` | 66 |
| interface | SessionSnapshot | `export interface SessionSnapshot` | 71 |

## dsh-api-session-controller/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { createSessionControlStream, SessionEve | `export { createSessionControlStream, SessionEventStream, SESSION_SEARCH_RESULT_LIMIT, SESSION_SEARCH_SNIPPET_MAX_CODE_POINTS, } from './transport.ts';` | 3 |
| re-export | { createScope, scopeOf } | `export { createScope, scopeOf } from './scope.ts';` | 5 |
| re-export | { SessionCreateError, SessionForkError } | `export { SessionCreateError, SessionForkError } from './sessions/service.ts';` | 7 |
| re-export | { MutableSessionEventSource } | `export { MutableSessionEventSource } from './contract/events.ts';` | 14 |
| const | inject | `export declare const inject: string[]` | 24 |
| function | apply | `export declare function apply(ctx: Context): void` | 29 |

## dsh-api-session-controller/lib/types/client/ordered-baseline.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | mergeOrderedBaseline | `export declare function mergeOrderedBaseline<T>(current: readonly T[], baseline: readonly T[], keyOf: (value: T) => unknown): T[]` | 11 |

## dsh-api-session-controller/lib/types/client/scope.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | AgentContext | `export type AgentContext` | 6 |
| interface | AgentScopeHandle | `export interface AgentScopeHandle` | 10 |
| function | createScope | `export declare function createScope(ctx: Context, key: SessionId): AgentScopeHandle` | 29 |
| function | scopeOf | `export declare function scopeOf(ctx: Context): SessionId \| undefined` | 35 |

## dsh-api-session-controller/lib/types/client/session-wire-event.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertSessionWireEvent | `export declare function assertSessionWireEvent(value: unknown): asserts value is SessionWireEvent` | 10 |

## dsh-api-session-controller/lib/types/client/sessions/assistant-stream.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ClientAssistantStreamResult | `export type ClientAssistantStreamResult` | 6 |
| class | ClientAssistantStream | `export declare class ClientAssistantStream` | 23 |

## dsh-api-session-controller/lib/types/client/sessions/history-records.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | historyEntries | `export declare function historyEntries(records: readonly SessionHistoryRecord[]): readonly SessionEventLikeEntry[]` | 9 |
| function | historyRecordFirstSeq | `export declare function historyRecordFirstSeq(record: SessionHistoryRecord): number` | 15 |
| function | historyRecordLastSeq | `export declare function historyRecordLastSeq(record: SessionHistoryRecord): number` | 21 |

## dsh-api-session-controller/lib/types/client/sessions/lineage.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TitledSessionSummary | `export interface TitledSessionSummary extends SessionSummary` | 5 |
| interface | SessionListEntry | `export interface SessionListEntry` | 11 |
| function | flattenLineage | `export declare function flattenLineage(summaries: readonly TitledSessionSummary[], completed?: ReadonlySet<SessionId>): SessionListEntry[]` | 37 |

## dsh-api-session-controller/lib/types/client/sessions/manager.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionListPhase | `export type SessionListPhase` | 17 |
| interface | SessionSearchResultItem | `export interface SessionSearchResultItem` | 19 |
| interface | SessionListSnapshot | `export interface SessionListSnapshot` | 24 |
| type | SubagentCatalogSnapshot | `export type SubagentCatalogSnapshot` | 38 |
| class | SessionManager | `export declare class SessionManager` | 45 |
| method | SessionManager.constructor | `constructor(remote: SessionRemotes, restoredSelection?: SessionId, restoredAddress?: SubagentAddress);` | 98 |

## dsh-api-session-controller/lib/types/client/sessions/notifier.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | Notifier | `export declare class Notifier` | 6 |
| method | Notifier.constructor | `constructor(rebuild: () => void);` | 14 |

## dsh-api-session-controller/lib/types/client/sessions/projection-store.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | UseProjection | `export type UseProjection` | 24 |
| interface | ProjectionsBaseline | `export interface ProjectionsBaseline` | 33 |
| class | ProjectionValueStore | `export declare class ProjectionValueStore` | 49 |

## dsh-api-session-controller/lib/types/client/sessions/queue-mirror.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | QueueItems | `type QueueItems` | 4 |
| class | SessionQueueMirror | `export declare class SessionQueueMirror` | 6 |
| export-list |  | `export {};` | 25 |

## dsh-api-session-controller/lib/types/client/sessions/remotes.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionCommandsRemote | `export interface SessionCommandsRemote` | 14 |
| interface | SessionSubagentsRemote | `export interface SessionSubagentsRemote` | 18 |
| interface | SessionRemotes | `export interface SessionRemotes` | 24 |

## dsh-api-session-controller/lib/types/client/sessions/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionSummary | `export interface SessionSummary` | 32 |
| interface | SessionListState | `export interface SessionListState` | 61 |
| class | SessionCreateError | `export declare class SessionCreateError extends Error` | 81 |
| method | SessionCreateError.constructor | `constructor(rpcError: RemoteFailure, requestedSessionId: SessionId \| undefined);` | 89 |
| class | SessionForkError | `export declare class SessionForkError extends Error` | 92 |
| method | SessionForkError.constructor | `constructor(rpcError: RemoteFailure, sourceSessionId: SessionId);` | 100 |
| interface | SessionBinding | `export interface SessionBinding` | 103 |
| re-export | { scopeOf } | `export { scopeOf } from '../scope.ts';` | 111 |
| class | ClientSessions | `export declare class ClientSessions implements ISessions` | 113 |
| method | ClientSessions.constructor | `constructor(rootCtx: Context, remote: SessionRemotes);` | 151 |

## dsh-api-session-controller/lib/types/client/sessions/session.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PAGE_MESSAGES | `export declare const PAGE_MESSAGES = 50` | 14 |
| const | JUMP_PAGE_MESSAGES | `export declare const JUMP_PAGE_MESSAGES = 200` | 16 |
| interface | SessionOptions | `export interface SessionOptions` | 18 |
| class | Session | `export declare class Session implements SessionFace` | 45 |
| method | Session.constructor | `constructor(sessionId: SessionId, remote: SessionRemotes, options?: SessionOptions);` | 118 |

## dsh-api-session-controller/lib/types/client/time-zone.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | resolvedClientTimeZone | `export declare function resolvedClientTimeZone(): string` | 7 |

## dsh-api-session-controller/lib/types/client/transport.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SESSION_SEARCH_RESULT_LIMIT, SESSION_S | `export { SESSION_SEARCH_RESULT_LIMIT, SESSION_SEARCH_SNIPPET_MAX_CODE_POINTS, } from '../types.ts';` | 6 |
| type | ClientSessionPageRequest | `export type ClientSessionPageRequest` | 8 |
| type | SessionRemote | `export type SessionRemote` | 10 |
| interface | SessionJournalPage | `interface SessionJournalPage extends SessionPage` | 12 |
| type | SessionJournalChange | `export type SessionJournalChange` | 17 |
| type | SessionControlBaselineFrame | `type SessionControlBaselineFrame` | 29 |
| type | SessionControlDeltaFrame | `type SessionControlDeltaFrame` | 32 |
| type | SessionControlStream | `export type SessionControlStream` | 34 |
| interface | SessionControlStreamOptions | `export interface SessionControlStreamOptions` | 36 |
| interface | SessionEventStreamOptions | `export interface SessionEventStreamOptions` | 45 |
| function | createSessionControlStream | `export declare function createSessionControlStream(remote: SessionRemotes, options: SessionControlStreamOptions): SessionControlStream` | 59 |
| class | SessionEventStream | `export declare class SessionEventStream extends RemoteJournalStream<SessionJournalPage, SessionHistoryRecord, number, ClientSessionPageRequest, SessionAssistant` | 61 |
| method | SessionEventStream.constructor | `constructor(remote: SessionRemotes, address: SessionAddress, options: SessionEventStreamOptions);` | 69 |

## dsh-api-session-controller/lib/types/commands.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionCommandController | `export declare class SessionCommandController` | 6 |
| method | SessionCommandController.constructor | `constructor(ctx: Context, agents: ApiSessionAgentController, defaultCwd: string);` | 15 |

## dsh-api-session-controller/lib/types/control.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionControlController | `export declare class SessionControlController` | 5 |
| method | SessionControlController.constructor | `constructor(ctx: Context);` | 9 |

## dsh-api-session-controller/lib/types/file-references.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionFileReferences | `export declare class SessionFileReferences extends TypertRemoteService` | 13 |
| method | SessionFileReferences.constructor | `constructor(ctx: Context);` | 16 |
| default | SessionFileReferences | `export default SessionFileReferences;` | 26 |

## dsh-api-session-controller/lib/types/history.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionHistoryController | `export declare class SessionHistoryController` | 6 |
| method | SessionHistoryController.constructor | `constructor(ctx: Context, promote: (observation: SessionObservation) => void);` | 15 |

## dsh-api-session-controller/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ApiSessionNotFound } | `export { ApiSessionNotFound } from './agent.ts';` | 11 |
| re-export | { SessionFileReferences } | `export { SessionFileReferences } from './file-references.ts';` | 12 |
| re-export | { SessionSkillCatalog } | `export { SessionSkillCatalog } from './skill-catalog.ts';` | 13 |
| interface | Config | `export interface Config` | 21 |
| interface | SessionControllerInternals | `export interface SessionControllerInternals` | 26 |
| class | SessionController | `export declare class SessionController extends TypertRemoteService` | 35 |
| method | SessionController.constructor | `constructor(ctx: Context, config: Config, internals?: SessionControllerInternals);` | 52 |
| export-list | buildModelCatalog | `export { buildModelCatalog };` | 179 |
| default | SessionController | `export default SessionController;` | 180 |

## dsh-api-session-controller/lib/types/list.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | applySessionListMetadata | `export declare function applySessionListMetadata(state: SessionListMetadata, event: SessionEvent): SessionListMetadata` | 11 |
| function | truncateUnicodeCodePoints | `export declare function truncateUnicodeCodePoints(value: string, maximum: number): string` | 18 |
| class | ApiSessionList | `export declare class ApiSessionList` | 20 |
| method | ApiSessionList.constructor | `constructor(ctx: Context);` | 23 |

## dsh-api-session-controller/lib/types/media-references.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SessionMediaReferences | `export declare const SessionMediaReferences: {` | 12 |

## dsh-api-session-controller/lib/types/model-selection-projection.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | installModelSelectionProjection | `export declare function installModelSelectionProjection(ctx: Context): void` | 7 |

## dsh-api-session-controller/lib/types/remote-events.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SessionControllerRemoteEvent | `type SessionControllerRemoteEvent` | 2 |
| export-list |  | `export {};` | 7 |

## dsh-api-session-controller/lib/types/skill-catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | SessionSkillCatalog | `export declare class SessionSkillCatalog extends TypertRemoteService` | 12 |
| method | SessionSkillCatalog.constructor | `constructor(ctx: Context);` | 15 |
| default | SessionSkillCatalog | `export default SessionSkillCatalog;` | 27 |

## dsh-api-session-controller/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SessionListMetadata | `export interface SessionListMetadata` | 39 |
| interface | SessionProjectionHints | `export interface SessionProjectionHints` | 46 |
| interface | SessionProjectionBaseline | `export interface SessionProjectionBaseline` | 52 |
| type | SessionProjectionValues | `export type SessionProjectionValues` | 58 |
| type | PromptContentPart | `export type PromptContentPart` | 64 |
| interface | ModelSelection | `export interface ModelSelection` | 77 |
| interface | ModelSelectionProjectionState | `export interface ModelSelectionProjectionState` | 83 |
| interface | ModelSelectionProjection | `export interface ModelSelectionProjection` | 90 |
| interface | ModelReasoningEffort | `export interface ModelReasoningEffort` | 97 |
| interface | ModelReasoning | `export interface ModelReasoning` | 103 |
| interface | ModelCatalogModel | `export interface ModelCatalogModel` | 108 |
| interface | ModelProviderGroup | `export interface ModelProviderGroup` | 115 |
| interface | ModelCatalogFailure | `export interface ModelCatalogFailure` | 121 |
| interface | ModelCatalog | `export interface ModelCatalog` | 127 |
| type | QueueAction | `export type QueueAction` | 135 |
| interface | SessionSummary | `export interface SessionSummary` | 145 |
| interface | SessionSearchItem | `export interface SessionSearchItem` | 156 |
| const | SESSION_SEARCH_RESULT_LIMIT | `export declare const SESSION_SEARCH_RESULT_LIMIT = 20` | 161 |
| const | SESSION_SEARCH_SNIPPET_MAX_CODE_POINTS | `export declare const SESSION_SEARCH_SNIPPET_MAX_CODE_POINTS = 240` | 163 |
| interface | SkillListRequest | `export interface SkillListRequest` | 217 |
| interface | SkillEntry | `export interface SkillEntry` | 221 |
| interface | SkillListValue | `export interface SkillListValue` | 232 |
| interface | SessionListRequest | `export interface SessionListRequest` | 236 |
| interface | SessionListValue | `export interface SessionListValue` | 240 |
| interface | SessionSearchRequest | `export interface SessionSearchRequest` | 244 |
| interface | SessionSearchValue | `export interface SessionSearchValue` | 248 |
| interface | SessionCreateRequest | `export interface SessionCreateRequest` | 253 |
| interface | SessionCreateValue | `export interface SessionCreateValue` | 260 |
| interface | SessionSelectModelRequest | `export interface SessionSelectModelRequest extends ModelSelection` | 265 |
| interface | SessionSelectModelValue | `export interface SessionSelectModelValue` | 269 |
| interface | SessionRenameRequest | `export interface SessionRenameRequest` | 273 |
| interface | SessionRenameValue | `export interface SessionRenameValue` | 278 |
| interface | SessionForkRequest | `export interface SessionForkRequest` | 283 |
| interface | SessionForkValue | `export interface SessionForkValue` | 288 |
| interface | SessionPromptRequest | `export interface SessionPromptRequest` | 292 |
| interface | SessionPromptValue | `export interface SessionPromptValue` | 302 |
| interface | SessionAttachmentRequest | `export interface SessionAttachmentRequest` | 306 |
| interface | SessionAttachmentValue | `export interface SessionAttachmentValue` | 311 |
| interface | SessionUpdateQueueRequest | `export interface SessionUpdateQueueRequest` | 316 |
| interface | SessionUpdateQueueValue | `export interface SessionUpdateQueueValue` | 322 |
| interface | SessionCancelRequest | `export interface SessionCancelRequest` | 326 |
| interface | SessionCancelValue | `export interface SessionCancelValue` | 330 |
| interface | SessionOpenWorkspacePathRequest | `export interface SessionOpenWorkspacePathRequest` | 334 |
| interface | SessionOpenWorkspacePathValue | `export interface SessionOpenWorkspacePathValue` | 341 |
| type | SessionRequestId | `export type SessionRequestId` | 345 |
| type | SessionAddress | `export type SessionAddress` | 357 |
| interface | SessionEventEntry | `export interface SessionEventEntry` | 367 |
| interface | SessionWireHeader | `export interface SessionWireHeader` | 372 |
| type | SessionWireSurfaceOp | `export type SessionWireSurfaceOp` | 385 |
| type | SessionHistoryRecord | `export type SessionHistoryRecord` | 391 |
| interface | SessionWireEvent | `export interface SessionWireEvent` | 397 |
| interface | SessionPageRequest | `export interface SessionPageRequest` | 409 |
| interface | SessionFollowRequest | `export interface SessionFollowRequest` | 417 |
| interface | SessionAssistantStreamAttempt | `export interface SessionAssistantStreamAttempt` | 424 |
| interface | SessionAssistantStreamBaseline | `export interface SessionAssistantStreamBaseline` | 436 |
| type | SessionAssistantStreamFrame | `export type SessionAssistantStreamFrame` | 441 |
| interface | SessionPage | `export interface SessionPage` | 470 |
| type | SessionFollowFrame | `export type SessionFollowFrame` | 475 |
| interface | SessionQueuedItem | `export interface SessionQueuedItem` | 488 |
| interface | SessionJob | `export interface SessionJob` | 500 |
| interface | SessionControlBaseline | `export interface SessionControlBaseline` | 510 |
| interface | SessionProjectionUpdate | `export interface SessionProjectionUpdate` | 516 |
| type | SessionControlFrame | `export type SessionControlFrame` | 523 |
| type | SessionProjectionValue | `export type SessionProjectionValue` | 575 |

