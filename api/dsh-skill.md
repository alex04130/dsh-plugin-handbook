# dsh-skill

> Agent skill provider registry for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-skill/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | BUNDLED_SKILL_RANK | `export declare const BUNDLED_SKILL_RANK = 600` | 16 |
| function | isSkillName | `export declare function isSkillName(name: string): boolean` | 22 |
| type | SkillSource | `export type SkillSource` | 24 |
| type | SkillResourceBase | `export type SkillResourceBase` | 26 |
| interface | SkillInvocationPolicy | `export interface SkillInvocationPolicy` | 37 |
| interface | SkillSummary | `export interface SkillSummary` | 44 |
| interface | SkillCandidate | `export interface SkillCandidate extends SkillSummary` | 61 |
| interface | SkillDefinition | `export interface SkillDefinition extends SkillSummary` | 72 |
| type | SkillRegistration | `export type SkillRegistration` | 81 |
| interface | SkillLookupOptions | `export interface SkillLookupOptions` | 88 |
| interface | SkillViewOptions | `export interface SkillViewOptions extends SkillLookupOptions` | 100 |
| function | isModelInvocable | `export declare function isModelInvocable(skill: Pick<SkillSummary, 'invocation'>): boolean` | 109 |
| function | isUserInvocable | `export declare function isUserInvocable(skill: Pick<SkillSummary, 'invocation'>): boolean` | 115 |
| interface | SkillInvocationSource | `export interface SkillInvocationSource` | 123 |
| function | renderSkillContent | `export declare function renderSkillContent(skill: Pick<SkillDefinition, 'name' \| 'provider' \| 'resourceBase' \| 'content'>): string` | 145 |
| function | escapeText | `export declare function escapeText(value: string): string` | 152 |
| interface | SkillCatalogSnapshot | `export interface SkillCatalogSnapshot` | 154 |
| interface | SkillProviderObservation | `export interface SkillProviderObservation` | 161 |
| interface | SkillProvider | `export interface SkillProvider` | 168 |
| interface | SkillProviderControl | `export interface SkillProviderControl` | 190 |
| interface | Config | `export interface Config` | 197 |
| class | SkillRegistry | `export declare class SkillRegistry extends Service` | 227 |
| method | SkillRegistry.constructor | `constructor(ctx: Context, config?: Config);` | 237 |
| default | SkillRegistry | `export default SkillRegistry;` | 299 |

