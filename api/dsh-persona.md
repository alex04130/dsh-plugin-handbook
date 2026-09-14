# dsh-persona

> Composition-authored deployment persona section for the DeepSeek Harness
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-persona/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list | PERSONA_PREFIX_SECTION, PERSONA_SUFFIX_SECTION | `export { PERSONA_PREFIX_SECTION, PERSONA_SUFFIX_SECTION };` | 18 |
| const | name | `export declare const name = "persona"` | 20 |
| const | inject | `export declare const inject: string[]` | 22 |
| interface | Config | `export interface Config` | 24 |
| const | Config | `export declare const Config: z<Config>` | 42 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 49 |

