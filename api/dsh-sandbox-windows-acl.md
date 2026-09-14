# dsh-sandbox-windows-acl

> Windows ACL write-restriction sandbox backend (restricted-token spawn with capability-SID write allowlist) for the DeepSeek Harness sandbox seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-sandbox-windows-acl/lib/types/acl.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | buildExplicitAccess | `export declare function buildExplicitAccess(sidPtr: NativePtr, mode: number, permissions: number): Buffer` | 26 |
| function | lockFilePath | `export declare function lockFilePath(api: Win32Bindings, path: string): string` | 36 |
| function | withPathLock | `export declare function withPathLock<T>(api: Win32Bindings, path: string, action: () => T): T` | 52 |
| function | grantWrite | `export declare function grantWrite(api: Win32Bindings, path: string, sidPtr: NativePtr): void` | 69 |
| function | revokeWrite | `export declare function revokeWrite(api: Win32Bindings, path: string, sidPtr: NativePtr): boolean` | 82 |

## dsh-sandbox-windows-acl/lib/types/ffi.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { allocPtrSlot, allocUint32, decodePtr,  | `export { allocPtrSlot, allocUint32, decodePtr, decodeUint32, isNullPtr, throwLastError, throwWin32, } from '@deepseek-ai/dsh-win32-process';` | 3 |
| interface | Win32Bindings | `export interface Win32Bindings extends Win32ProcessBindings` | 6 |
| function | isInvalidHandle | `export declare function isInvalidHandle(handle: NativePtr \| null \| undefined): boolean` | 34 |
| function | encodeUint32 | `export declare function encodeUint32(slot: NativePtr, value: number): void` | 40 |
| function | ptrAddress | `export declare function ptrAddress(ptr: NativePtr): bigint` | 46 |
| function | allocBytes | `export declare function allocBytes(length: number): NativePtr` | 52 |
| function | allocOverlapped | `export declare function allocOverlapped(): NativePtr` | 59 |
| function | decodePtrAt | `export declare function decodePtrAt(buffer: Buffer, offset: number): NativePtr \| null` | 66 |
| function | decodeUint8At | `export declare function decodeUint8At(ptr: NativePtr, offset: number): number` | 73 |
| function | decodeUint16At | `export declare function decodeUint16At(ptr: NativePtr, offset: number): number` | 80 |
| function | decodeUint32At | `export declare function decodeUint32At(ptr: NativePtr, offset: number): number` | 87 |
| function | sameSidAt | `export declare function sameSidAt(left: NativePtr, leftOffset: number, right: NativePtr, rightOffset: number): boolean` | 96 |
| function | win32 | `export declare function win32(): Promise<Win32Bindings>` | 101 |
| function | win32Sync | `export declare function win32Sync(): Win32Bindings` | 106 |
| function | getTempPath | `export declare function getTempPath(api: Win32Bindings): string` | 112 |

## dsh-sandbox-windows-acl/lib/types/grant.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | AclWriteGrant | `export declare class AclWriteGrant` | 24 |

## dsh-sandbox-windows-acl/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { AclWriteGrant } | `export { AclWriteGrant } from './grant.ts';` | 42 |
| re-export | { assertTempRootOutsideWorkspace } | `export { assertTempRootOutsideWorkspace } from './path-boundary.ts';` | 43 |
| re-export | { tempWriteSid, workspaceWriteSid } | `export { tempWriteSid, workspaceWriteSid } from './workspace-sid.ts';` | 44 |
| interface | AclSandboxOptions | `export interface AclSandboxOptions` | 46 |
| interface | AclSandboxSpawnOptions | `export interface AclSandboxSpawnOptions` | 87 |
| interface | AclSandboxChildResult | `export interface AclSandboxChildResult` | 103 |
| interface | AclSandboxChild | `export interface AclSandboxChild` | 109 |
| class | AclSandbox | `export declare class AclSandbox` | 124 |
| method | AclSandbox.constructor | `constructor(options: AclSandboxOptions);` | 143 |

## dsh-sandbox-windows-acl/lib/types/path-boundary.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | assertTempRootOutsideWorkspace | `export declare function assertTempRootOutsideWorkspace(workspaceRoot: string, tempRoot: string): void` | 12 |
| function | assertPrivateTempDisjoint | `export declare function assertPrivateTempDisjoint(writableDirs: readonly string[], tempDir: string): void` | 19 |

## dsh-sandbox-windows-acl/lib/types/runner.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| export-list |  | `export {};` | 46 |

## dsh-sandbox-windows-acl/lib/types/spawn.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { drainPipe } | `export { drainPipe } from '@deepseek-ai/dsh-win32-process';` | 4 |
| interface | SpawnedNative | `export interface SpawnedNative extends SpawnedPipedProcess` | 6 |
| interface | SpawnedInherited | `export interface SpawnedInherited extends SpawnedJobProcess` | 9 |
| function | spawnSandboxed | `export declare function spawnSandboxed(api: Win32Bindings, token: NativePtr, options: {` | 18 |
| function | spawnSandboxedInherited | `export declare function spawnSandboxedInherited(api: Win32Bindings, token: NativePtr, options: {` | 30 |
| function | waitForExit | `export declare function waitForExit(api: Win32Bindings, process: NativePtr): number` | 41 |

## dsh-sandbox-windows-acl/lib/types/token.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | openCurrentProcessToken | `export declare function openCurrentProcessToken(api: Win32Bindings): NativePtr` | 18 |
| function | findLogonSid | `export declare function findLogonSid(api: Win32Bindings, token: NativePtr): NativePtr` | 27 |
| function | makeWellKnownSid | `export declare function makeWellKnownSid(api: Win32Bindings, type: number): NativePtr` | 34 |
| function | setTokenDefaultDaclGrant | `export declare function setTokenDefaultDaclGrant(api: Win32Bindings, token: NativePtr, sidPtr: NativePtr): void` | 51 |
| interface | RestrictingSidSet | `export interface RestrictingSidSet` | 53 |
| function | createRestrictedToken | `export declare function createRestrictedToken(api: Win32Bindings, currentToken: NativePtr, logonSid: NativePtr, writeSids: readonly NativePtr[], known: Restrict` | 91 |

## dsh-sandbox-windows-acl/lib/types/win32-abi.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | PROCESS_QUERY_INFORMATION | `export declare const PROCESS_QUERY_INFORMATION = 1024` | 3 |
| const | TOKEN_ASSIGN_PRIMARY | `export declare const TOKEN_ASSIGN_PRIMARY = 1` | 5 |
| const | TOKEN_DUPLICATE | `export declare const TOKEN_DUPLICATE = 2` | 7 |
| const | TOKEN_QUERY | `export declare const TOKEN_QUERY = 8` | 9 |
| const | TOKEN_ADJUST_DEFAULT | `export declare const TOKEN_ADJUST_DEFAULT = 128` | 11 |
| const | SE_GROUP_LOGON_ID | `export declare const SE_GROUP_LOGON_ID = 3221225472` | 13 |
| const | STANDARD_RIGHTS_WRITE | `export declare const STANDARD_RIGHTS_WRITE = 131072` | 15 |
| const | FILE_GENERIC_WRITE | `export declare const FILE_GENERIC_WRITE = 1179926` | 17 |
| const | DELETE | `export declare const DELETE = 65536` | 19 |
| const | FILE_DELETE_CHILD | `export declare const FILE_DELETE_CHILD = 64` | 21 |
| const | GRANT_MASK | `export declare const GRANT_MASK: number` | 27 |
| const | FILE_ALL_ACCESS | `export declare const FILE_ALL_ACCESS = 2032127` | 29 |
| const | DISABLE_MAX_PRIVILEGE | `export declare const DISABLE_MAX_PRIVILEGE = 1` | 31 |
| const | LUA_TOKEN | `export declare const LUA_TOKEN = 4` | 33 |
| const | WRITE_RESTRICTED | `export declare const WRITE_RESTRICTED = 8` | 35 |
| const | WinWorldSid | `export declare const WinWorldSid = 1` | 37 |
| const | TokenGroups | `export declare const TokenGroups = 2` | 39 |
| const | TokenDefaultDacl | `export declare const TokenDefaultDacl = 6` | 41 |
| const | DACL_SECURITY_INFORMATION | `export declare const DACL_SECURITY_INFORMATION = 4` | 43 |
| const | SE_FILE_OBJECT | `export declare const SE_FILE_OBJECT = 1` | 45 |
| const | TRUSTEE_IS_UNKNOWN | `export declare const TRUSTEE_IS_UNKNOWN = 0` | 47 |
| const | TRUSTEE_IS_SID | `export declare const TRUSTEE_IS_SID = 0` | 49 |
| const | NO_MULTIPLE_TRUSTEE | `export declare const NO_MULTIPLE_TRUSTEE = 0` | 51 |
| const | GRANT_ACCESS | `export declare const GRANT_ACCESS = 1` | 53 |
| const | REVOKE_ACCESS | `export declare const REVOKE_ACCESS = 4` | 55 |
| const | SUB_CONTAINERS_AND_OBJECTS_INHERIT | `export declare const SUB_CONTAINERS_AND_OBJECTS_INHERIT = 3` | 57 |
| const | MAX_PATH | `export declare const MAX_PATH = 260` | 59 |
| const | ERROR_SUCCESS | `export declare const ERROR_SUCCESS = 0` | 61 |
| const | ERROR_LOCK_VIOLATION | `export declare const ERROR_LOCK_VIOLATION = 33` | 63 |
| const | GENERIC_READ | `export declare const GENERIC_READ = 2147483648` | 65 |
| const | GENERIC_WRITE | `export declare const GENERIC_WRITE = 1073741824` | 67 |
| const | FILE_SHARE_READ | `export declare const FILE_SHARE_READ = 1` | 69 |
| const | FILE_SHARE_WRITE | `export declare const FILE_SHARE_WRITE = 2` | 71 |
| const | FILE_SHARE_DELETE | `export declare const FILE_SHARE_DELETE = 4` | 73 |
| const | OPEN_ALWAYS | `export declare const OPEN_ALWAYS = 4` | 75 |
| const | LOCKFILE_EXCLUSIVE_LOCK | `export declare const LOCKFILE_EXCLUSIVE_LOCK = 2` | 77 |
| const | LOCKFILE_FAIL_IMMEDIATELY | `export declare const LOCKFILE_FAIL_IMMEDIATELY = 1` | 79 |
| const | ACCESS_ALLOWED_ACE_TYPE | `export declare const ACCESS_ALLOWED_ACE_TYPE = 0` | 81 |
| const | SID_MAX_SUB_AUTHORITIES | `export declare const SID_MAX_SUB_AUTHORITIES = 15` | 83 |
| const | INHERITED_ACE | `export declare const INHERITED_ACE = 16` | 85 |
| const | SECURITY_MAX_SID_SIZE | `export declare const SECURITY_MAX_SID_SIZE = 68` | 87 |
| const | SID_AND_ATTRIBUTES_SIZE | `export declare const SID_AND_ATTRIBUTES_SIZE = 16` | 89 |
| const | TOKEN_GROUPS_OFFSET | `export declare const TOKEN_GROUPS_OFFSET = 8` | 91 |
| const | EXPLICIT_ACCESS_W_SIZE | `export declare const EXPLICIT_ACCESS_W_SIZE = 48` | 93 |
| const | TRUSTEE_W_OFFSET | `export declare const TRUSTEE_W_OFFSET = 16` | 95 |
| const | TRUSTEE_W_PTSTRNAME_OFFSET | `export declare const TRUSTEE_W_PTSTRNAME_OFFSET = 24` | 97 |

## dsh-sandbox-windows-acl/lib/types/workspace-sid.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | workspaceWriteSid | `export declare function workspaceWriteSid(workspaceRoot: string): string` | 32 |
| function | tempWriteSid | `export declare function tempWriteSid(tempDir: string): string` | 40 |

