# dsh-sandbox

> Abstract process-sandbox seam (ctx.sandbox) for the DeepSeek Harness: same-world confinement vocabulary and the SandboxProvider contract
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sandbox/lib/types/escalation.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | WIDER_MODES | `export declare const WIDER_MODES: Record<string, readonly SandboxMode[]>` | 25 |
| const | ESCALATION_TARGETS | `export declare const ESCALATION_TARGETS: readonly SandboxMode[]` | 34 |
| function | validateEscalationArgs | `export declare function validateEscalationArgs(sandboxPermissions: string \| undefined, justification: string \| undefined): void` | 43 |
| function | sandboxDenialMarker | `export declare function sandboxDenialMarker(mode: SandboxMode): string` | 52 |
| function | escalationHintMarker | `export declare function escalationHintMarker(subject: string): string` | 62 |
| type | EscalationOutcome | `export type EscalationOutcome` | 68 |
| interface | EscalationApprover | `export interface EscalationApprover<A` | 76 |
| interface | EscalationApproval | `export interface EscalationApproval<A` | 97 |
| interface | EscalationRequest | `export interface EscalationRequest` | 110 |
| function | approveEscalation | `export declare function approveEscalation<A, C>(request: EscalationRequest, approval: EscalationApproval<A, C>): Promise<SandboxMode>` | 134 |

## dsh-sandbox/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ESCALATION_TARGETS, WIDER_MODES, appro | `export { ESCALATION_TARGETS, WIDER_MODES, approveEscalation, escalationHintMarker, sandboxDenialMarker, validateEscalationArgs, } from './escalation.ts';` | 10 |
| re-export | { canonicalPath, writableRoots } | `export { canonicalPath, writableRoots } from './roots.ts';` | 12 |
| type | SandboxMode | `export type SandboxMode` | 19 |
| type | ConfinedSandboxMode | `export type ConfinedSandboxMode` | 21 |
| interface | SandboxExecutionPolicy | `export interface SandboxExecutionPolicy` | 27 |
| type | SandboxEnforcement | `export type SandboxEnforcement` | 46 |
| interface | SandboxPolicy | `export interface SandboxPolicy extends SandboxExecutionPolicy` | 55 |
| interface | RunnerFailureRule | `export interface RunnerFailureRule` | 66 |
| interface | ConfinedArgv | `export interface ConfinedArgv` | 79 |
| const | SANDBOX_UNAVAILABLE | `export declare const SANDBOX_UNAVAILABLE = "SANDBOX_UNAVAILABLE"` | 107 |
| class | SandboxUnavailableError | `export declare class SandboxUnavailableError extends HarnessError` | 113 |
| method | SandboxUnavailableError.constructor | `constructor(mode: ConfinedSandboxMode, detail?: string);` | 114 |
| class | SandboxProvider | `export declare abstract class SandboxProvider extends Service` | 127 |
| method | SandboxProvider.constructor | `constructor(ctx: Context);` | 128 |
| default | SandboxProvider | `export default SandboxProvider;` | 142 |

## dsh-sandbox/lib/types/roots.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | canonicalPath | `export declare function canonicalPath(path: string): string` | 26 |
| function | writableRoots | `export declare function writableRoots(policy: SandboxExecutionPolicy): string[]` | 36 |

