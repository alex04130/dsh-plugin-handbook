# dsh-win32-process

> Shared low-level Win32 process, stdio, and Job Object primitives
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-win32-process/lib/types/abi.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | STARTF_USESTDHANDLES | `export declare const STARTF_USESTDHANDLES = 256` | 3 |
| const | HANDLE_FLAG_INHERIT | `export declare const HANDLE_FLAG_INHERIT = 1` | 5 |
| const | INFINITE | `export declare const INFINITE = 4294967295` | 7 |
| const | WAIT_TIMEOUT | `export declare const WAIT_TIMEOUT = 258` | 9 |
| const | CREATE_SUSPENDED | `export declare const CREATE_SUSPENDED = 4` | 11 |
| const | CREATE_UNICODE_ENVIRONMENT | `export declare const CREATE_UNICODE_ENVIRONMENT = 1024` | 13 |
| const | STD_INPUT_HANDLE | `export declare const STD_INPUT_HANDLE = -10` | 15 |
| const | STD_OUTPUT_HANDLE | `export declare const STD_OUTPUT_HANDLE = -11` | 17 |
| const | STD_ERROR_HANDLE | `export declare const STD_ERROR_HANDLE = -12` | 19 |
| const | FORMAT_MESSAGE_FROM_SYSTEM | `export declare const FORMAT_MESSAGE_FROM_SYSTEM = 4096` | 21 |
| const | FORMAT_MESSAGE_IGNORE_INSERTS | `export declare const FORMAT_MESSAGE_IGNORE_INSERTS = 512` | 23 |
| const | ERROR_INSUFFICIENT_BUFFER | `export declare const ERROR_INSUFFICIENT_BUFFER = 122` | 25 |
| const | ERROR_BROKEN_PIPE | `export declare const ERROR_BROKEN_PIPE = 109` | 27 |
| const | ERROR_NO_DATA | `export declare const ERROR_NO_DATA = 232` | 29 |
| const | JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE | `export declare const JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE = 8192` | 31 |
| const | JobObjectBasicAccountingInformation | `export declare const JobObjectBasicAccountingInformation = 1` | 33 |
| const | JobObjectExtendedLimitInformation | `export declare const JobObjectExtendedLimitInformation = 9` | 35 |
| const | JOBOBJECT_BASIC_ACCOUNTING_SIZE | `export declare const JOBOBJECT_BASIC_ACCOUNTING_SIZE = 48` | 37 |
| const | JOBOBJECT_BASIC_ACCOUNTING_ACTIVE_PROCESSES_OFFSET | `export declare const JOBOBJECT_BASIC_ACCOUNTING_ACTIVE_PROCESSES_OFFSET = 40` | 39 |
| const | JOBOBJECT_EXTENDED_LIMIT_SIZE | `export declare const JOBOBJECT_EXTENDED_LIMIT_SIZE = 144` | 41 |
| const | JOBOBJECT_EXTENDED_LIMIT_FLAGS_OFFSET | `export declare const JOBOBJECT_EXTENDED_LIMIT_FLAGS_OFFSET = 16` | 43 |
| const | STARTUPINFOW_SIZE | `export declare const STARTUPINFOW_SIZE = 104` | 45 |
| const | PROCESS_INFORMATION_SIZE | `export declare const PROCESS_INFORMATION_SIZE = 24` | 47 |

## dsh-win32-process/lib/types/errors.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | Win32Error | `export declare class Win32Error extends Error` | 2 |
| method | Win32Error.constructor | `constructor(api: string, win32Code: number, detail?: string);` | 7 |

## dsh-win32-process/lib/types/ffi.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | nativePtr | `declare const nativePtr: unique symbol` | 3 |
| type | NativePtr | `export type NativePtr` | 5 |
| type | Ptr | `type Ptr` | 8 |
| interface | Win32BindingContext | `export interface Win32BindingContext` | 10 |
| function | isNullPtr | `export declare function isNullPtr(value: NativePtr \| null \| undefined): value is null \| undefined` | 23 |
| interface | StartupInfoInput | `export interface StartupInfoInput` | 25 |
| interface | ProcessInfoOutput | `export interface ProcessInfoOutput` | 33 |
| interface | Win32ProcessBindings | `export interface Win32ProcessBindings` | 40 |
| interface | CurrentTokenProcessBindings | `export interface CurrentTokenProcessBindings extends Win32ProcessBindings` | 62 |
| const | STARTUPINFOW | `export declare const STARTUPINFOW: import("koffi").TypeObject` | 66 |
| const | PROCESS_INFORMATION | `export declare const PROCESS_INFORMATION: import("koffi").TypeObject` | 68 |
| function | allocPtrSlot | `export declare function allocPtrSlot(): NativePtr` | 73 |
| function | allocUint32 | `export declare function allocUint32(): NativePtr` | 78 |
| function | decodePtr | `export declare function decodePtr(slot: NativePtr): NativePtr \| null` | 84 |
| function | decodeUint32 | `export declare function decodeUint32(slot: NativePtr): number` | 90 |
| function | allocStartupInfo | `export declare function allocStartupInfo(): NativePtr` | 95 |
| function | encodeStartupInfo | `export declare function encodeStartupInfo(startupInfo: NativePtr, fields: StartupInfoInput): void` | 101 |
| function | allocProcessInfo | `export declare function allocProcessInfo(): NativePtr` | 106 |
| function | decodeProcessInfo | `export declare function decodeProcessInfo(processInfo: NativePtr): ProcessInfoOutput` | 112 |
| function | extendWin32ProcessBindings | `export declare function extendWin32ProcessBindings<Extension extends object>(create: (context: Win32BindingContext) => Extension): CurrentTokenProcessBindings &` | 118 |
| function | loadWin32ProcessBindings | `export declare function loadWin32ProcessBindings(): CurrentTokenProcessBindings` | 123 |
| function | errorText | `export declare function errorText(api: Win32ProcessBindings, win32Code: number): string` | 130 |
| function | throwLastError | `export declare function throwLastError(api: Win32ProcessBindings, name: string, detail?: string): never` | 138 |
| function | throwWin32 | `export declare function throwWin32(api: Win32ProcessBindings, name: string, win32Code: number, detail?: string): never` | 147 |
| export-list |  | `export {};` | 148 |

## dsh-win32-process/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { ERROR_INSUFFICIENT_BUFFER } | `export { ERROR_INSUFFICIENT_BUFFER } from './abi.ts';` | 2 |
| re-export | * | `export * from './errors.ts';` | 3 |
| re-export | { allocPtrSlot, allocUint32, decodePtr,  | `export { allocPtrSlot, allocUint32, decodePtr, decodeUint32, extendWin32ProcessBindings, isNullPtr, loadWin32ProcessBindings, throwLastError, throwWin32, } from` | 4 |
| re-export | { closeHandleChecked, drainPipe, isJobEm | `export { closeHandleChecked, drainPipe, isJobEmpty, pollProcessExit, probeCurrentTokenJobSupport, spawnInheritedJobProcess, spawnCurrentTokenJobProcess, spawnPi` | 6 |

## dsh-win32-process/lib/types/process.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | quoteArg | `export declare function quoteArg(argument: string): string` | 8 |
| function | buildCommandLine | `export declare function buildCommandLine(program: string, args: readonly string[]): string` | 15 |
| interface | ProcessSpawnOptions | `interface ProcessSpawnOptions` | 16 |
| interface | CurrentTokenProcessSpawnOptions | `export interface CurrentTokenProcessSpawnOptions extends ProcessSpawnOptions` | 25 |
| interface | CurrentTokenStdioFileDescriptors | `export interface CurrentTokenStdioFileDescriptors` | 34 |
| interface | RestrictedProcessSpawnOptions | `export interface RestrictedProcessSpawnOptions extends ProcessSpawnOptions` | 40 |
| interface | SpawnedPipedProcess | `export interface SpawnedPipedProcess` | 45 |
| interface | SpawnedJobProcess | `export interface SpawnedJobProcess` | 56 |
| function | spawnPipedProcess | `export declare function spawnPipedProcess(api: Win32ProcessBindings, options: RestrictedProcessSpawnOptions): SpawnedPipedProcess` | 70 |
| function | drainPipe | `export declare function drainPipe(api: Win32ProcessBindings, handle: NativePtr): Promise<Buffer>` | 78 |
| function | waitForProcessExit | `export declare function waitForProcessExit(api: Win32ProcessBindings, process: NativePtr): number` | 85 |
| function | spawnInheritedJobProcess | `export declare function spawnInheritedJobProcess(api: Win32ProcessBindings, options: RestrictedProcessSpawnOptions): SpawnedJobProcess` | 96 |
| function | spawnCurrentTokenJobProcess | `export declare function spawnCurrentTokenJobProcess(api: CurrentTokenProcessBindings, options: CurrentTokenProcessSpawnOptions): SpawnedJobProcess` | 103 |
| function | probeCurrentTokenJobSupport | `export declare function probeCurrentTokenJobSupport(api: CurrentTokenProcessBindings): void` | 108 |
| function | pollProcessExit | `export declare function pollProcessExit(api: Win32ProcessBindings, process: NativePtr): number \| undefined` | 115 |
| function | isJobEmpty | `export declare function isJobEmpty(api: Win32ProcessBindings, job: NativePtr): boolean` | 122 |
| function | terminateJob | `export declare function terminateJob(api: Win32ProcessBindings, job: NativePtr, exitCode: number): void` | 129 |
| function | closeHandleChecked | `export declare function closeHandleChecked(api: Win32ProcessBindings, handle: NativePtr, detail: string): void` | 136 |
| export-list |  | `export {};` | 137 |

