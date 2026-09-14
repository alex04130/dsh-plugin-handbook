# dsh-sandbox-policy

> Per-call sandbox policy resolver and current model context: deployment fallbacks plus each session's mode and workspace root, shared by every enforcing capability family
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sandbox-policy/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { SANDBOX_MODES, setSandboxMode } | `export { SANDBOX_MODES, setSandboxMode } from './session-mode.ts';` | 27 |
| interface | Config | `export interface Config` | 40 |
| interface | SandboxPolicyRequest | `export interface SandboxPolicyRequest` | 50 |
| const | sandboxModeStateSchema | `declare const sandboxModeStateSchema: zod.ZodNullable<zod.ZodUnion<readonly [zod.ZodLiteral<"read-only">, zod.ZodLiteral<"workspace-write">, zod.ZodLiteral<"dan` | 57 |
| type | SandboxModeState | `type SandboxModeState` | 58 |
| class | SandboxPolicyService | `export declare class SandboxPolicyService extends Service` | 71 |
| method | SandboxPolicyService.constructor | `constructor(ctx: Context, config: Config);` | 78 |
| default | SandboxPolicyService | `export default SandboxPolicyService;` | 96 |

## dsh-sandbox-policy/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "sandbox-policy-invariant"` | 4 |
| const | inject | `export declare const inject: string[]` | 6 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 12 |

## dsh-sandbox-policy/lib/types/session-mode.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SANDBOX_MODES | `export declare const SANDBOX_MODES: readonly SandboxMode[]` | 39 |
| function | setSandboxMode | `export declare function setSandboxMode(session: Session, mode: SandboxMode): void` | 49 |

