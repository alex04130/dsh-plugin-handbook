# schemastery

> Type driven schema validator
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## schemastery/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | kSchema | `declare const kSchema: unique symbol` | 3 |
| class | ValidationError | `declare class ValidationError extends TypeError` | 191 |
| method | ValidationError.constructor | `constructor(message: string, options: Schemastery.Options);` | 194 |
| type | Schema | `type Schema<S` | 197 |
| const | Schema | `declare const Schema: Schemastery.Static` | 198 |
| default | Schema | `export default Schema;` | 199 |

