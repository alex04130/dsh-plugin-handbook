# dsh-settings

> Abstract user-settings seam (ctx.settings) for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-settings/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { redactSecrets } | `export { redactSecrets } from './redact.ts';` | 12 |
| type | LowercaseLetter | `type LowercaseLetter` | 15 |
| type | DecimalDigit | `type DecimalDigit` | 16 |
| type | NamespaceCharacter | `type NamespaceCharacter` | 17 |
| type | ValidNamespaceTail | `type ValidNamespaceTail<Value extends string>` | 18 |
| type | SettingsNamespaceInput | `type SettingsNamespaceInput<Value extends string>` | 19 |
| type | SettingsApplies | `export type SettingsApplies` | 21 |
| interface | SettingsRegisterOptions | `export interface SettingsRegisterOptions<T>` | 23 |
| interface | SettingsDescriptor | `export interface SettingsDescriptor` | 50 |
| interface | SettingsDescribeOptions | `export interface SettingsDescribeOptions` | 75 |
| interface | SettingsScope | `export interface SettingsScope<T>` | 84 |
| class | SettingsConflictError | `export declare class SettingsConflictError extends Error` | 121 |
| method | SettingsConflictError.constructor | `constructor(ns: SettingsNamespace, expected: number, actual: number);` | 133 |
| type | SettingsPathOp | `export type SettingsPathOp` | 143 |
| class | SettingsProvider | `export declare abstract class SettingsProvider extends Service` | 157 |
| method | SettingsProvider.constructor | `constructor(ctx: Context);` | 169 |
| interface | SettingsSectionHooks | `export interface SettingsSectionHooks<T>` | 315 |
| default | SettingsProvider | `export default SettingsProvider;` | 335 |

## dsh-settings/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "settings-invariant"` | 7 |
| const | inject | `export declare const inject: string[]` | 9 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 15 |

## dsh-settings/lib/types/redact.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | RedactedSecret | `export interface RedactedSecret` | 11 |
| interface | RedactedValue | `export interface RedactedValue` | 18 |
| function | redactSecrets | `export declare function redactSecrets(schema: z<never>, value: unknown): RedactedValue` | 39 |

## dsh-settings/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SettingsNamespace | `export type SettingsNamespace` | 13 |
| type | SettingsUpdateSource | `export type SettingsUpdateSource` | 15 |
| interface | SettingsSecretView | `export interface SettingsSecretView` | 17 |
| interface | SettingsNamespaceView | `export interface SettingsNamespaceView` | 28 |
| type | SettingsPathOpView | `export type SettingsPathOpView` | 55 |
| interface | SettingsDescribeValue | `export interface SettingsDescribeValue` | 64 |

