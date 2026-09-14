# dsh-commands

> Plugin-owned human command registry for DeepSeek Harness UIs
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-commands/lib/typert.host.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT | `export declare const TYPERT: unknown` | 3 |

## dsh-commands/lib/typert.remote-client.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | TYPERT_REMOTE | `export declare const TYPERT_REMOTE: TypertRemoteContribution` | 27 |
| default | TYPERT_REMOTE | `export default TYPERT_REMOTE` | 28 |

## dsh-commands/lib/types/brand.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CommandId | `export type CommandId` | 18 |
| function | CommandId | `export declare function CommandId(id: string): CommandId` | 24 |

## dsh-commands/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { CommandId } | `export { CommandId } from './brand.ts';` | 12 |
| const | name | `export declare const name = "commands"` | 14 |
| type | CommandFileReceiptResolver | `export type CommandFileReceiptResolver` | 16 |
| interface | CommandInvocation | `export interface CommandInvocation` | 18 |
| interface | CommandDefinition | `export interface CommandDefinition` | 37 |
| interface | ParsedCommand | `export interface ParsedCommand` | 54 |
| function | parseCommand | `export declare function parseCommand(line: string): ParsedCommand \| undefined` | 71 |
| class | CommandRuntime | `export declare class CommandRuntime extends TypertRemoteService` | 77 |
| method | CommandRuntime.constructor | `constructor(ctx: Context);` | 85 |
| default | CommandRuntime | `export default CommandRuntime;` | 156 |

## dsh-commands/lib/types/invariant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "commands-invariant"` | 8 |
| const | inject | `export declare const inject: string[]` | 10 |
| const | apply | `export declare const apply: (ctx: Context) => Promise<() => void>` | 16 |

## dsh-commands/lib/types/types.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | CommandSubmitAttachment | `export type CommandSubmitAttachment` | 13 |
| interface | CommandInputDescriptor | `export interface CommandInputDescriptor` | 20 |
| type | CommandResult | `export type CommandResult` | 33 |
| interface | CommandExecution | `export interface CommandExecution` | 48 |
| interface | CommandDescriptor | `export interface CommandDescriptor` | 55 |
| interface | CommandSourceMap | `export interface CommandSourceMap` | 69 |
| type | CommandSource | `export type CommandSource` | 75 |

