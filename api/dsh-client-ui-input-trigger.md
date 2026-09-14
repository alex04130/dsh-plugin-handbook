# dsh-client-ui-input-trigger

> Input trigger pipeline: '/' and '@' detection, candidate menu, pick routing to registered sources
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-input-trigger/lib/types/client/MenuView.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | MenuViewProps | `export type MenuViewProps` | 4 |
| function | MenuView | `export declare function MenuView({ menu, headers, onPick, onCrumb, onHover, onDismiss, t }: MenuViewProps): import("react").JSX.Element \| null` | 10 |

## dsh-client-ui-input-trigger/lib/types/client/contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | InputTriggerServiceContract | `export interface InputTriggerServiceContract` | 11 |

## dsh-client-ui-input-trigger/lib/types/client/controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | SourceRoster | `export interface SourceRoster` | 17 |
| interface | InputTriggerControllerDeps | `export interface InputTriggerControllerDeps` | 22 |
| class | InputTriggerController | `export declare class InputTriggerController` | 35 |
| method | InputTriggerController.constructor | `constructor(deps: InputTriggerControllerDeps);` | 71 |

## dsh-client-ui-input-trigger/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { InputTriggerService } | `export { InputTriggerService } from './service.ts';` | 3 |
| re-export | { InputTriggerController } | `export { InputTriggerController } from './controller.ts';` | 4 |
| const | inject | `export declare const inject: string[]` | 25 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 31 |

## dsh-client-ui-input-trigger/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | zh | `export declare const zh: {` | 7 |
| type | MenuKey | `export type MenuKey` | 19 |
| const | en | `export declare const en: {` | 21 |

## dsh-client-ui-input-trigger/lib/types/client/service.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | InputTriggerService | `export declare class InputTriggerService extends Service implements InputTriggerServiceContract` | 15 |
| method | InputTriggerService.constructor | `constructor(ctx: Context);` | 21 |

## dsh-client-ui-input-trigger/lib/types/client/slots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | MenuViewInjected | `export interface MenuViewInjected` | 5 |

## dsh-client-ui-input-trigger/lib/types/core/contract.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | TriggerHit | `export interface TriggerHit` | 10 |
| type | DetectTrigger | `export type DetectTrigger` | 28 |
| interface | MenuState | `export interface MenuState` | 30 |
| type | MenuEvent | `export type MenuEvent` | 48 |
| type | MenuReduce | `export type MenuReduce` | 71 |
| type | ExactMatch | `export type ExactMatch` | 76 |

## dsh-client-ui-input-trigger/lib/types/core/detect.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | detectTrigger | `export declare const detectTrigger: DetectTrigger` | 18 |

## dsh-client-ui-input-trigger/lib/types/core/menu.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | MENU_CLOSED | `export declare const MENU_CLOSED: MenuState` | 19 |
| function | seedGroups | `export declare function seedGroups(state: MenuState, sources: readonly Pick<InputTriggerSource, 'name' \| 'showGroupTitle'>[]): MenuState` | 28 |
| const | menuReduce | `export declare const menuReduce: MenuReduce` | 42 |
| const | exactMatch | `export declare const exactMatch: ExactMatch` | 52 |

## dsh-client-ui-input-trigger/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 8 |

## dsh-client-ui-input-trigger/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ClientSessionContext | `export interface ClientSessionContext` | 19 |
| type | TriggerChar | `export type TriggerChar` | 23 |
| type | TriggerPosition | `export type TriggerPosition` | 25 |
| type | PickVia | `export type PickVia` | 27 |
| type | PickAction | `export type PickAction` | 29 |
| type | InputTriggerCandidateIcon | `export type InputTriggerCandidateIcon` | 31 |
| interface | InputTriggerCandidate | `export interface InputTriggerCandidate` | 33 |
| interface | InputTriggerCrumb | `export interface InputTriggerCrumb` | 53 |
| interface | HeaderRequest | `export interface HeaderRequest` | 62 |
| interface | SubmitEnvelope | `export interface SubmitEnvelope` | 80 |
| interface | CandidateRequest | `export interface CandidateRequest` | 85 |
| interface | InputTriggerPick | `export interface InputTriggerPick` | 95 |
| interface | ReferenceCodec | `export interface ReferenceCodec` | 111 |
| interface | InputTriggerSource | `export interface InputTriggerSource` | 128 |
| interface | TriggerGuard | `export interface TriggerGuard` | 192 |

