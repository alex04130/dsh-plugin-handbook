# dsh-subprocess-local

> Local-subprocess implementation of the DeepSeek Harness subprocess seam
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-subprocess-local/lib/types/bin.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | runSelectedSubprocessRunner | `export declare function runSelectedSubprocessRunner(selection: string): Promise<void>` | 6 |

## dsh-subprocess-local/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | LocalSubprocessRuntime | `export declare class LocalSubprocessRuntime extends SubprocessRuntime` | 22 |
| method | LocalSubprocessRuntime.constructor | `constructor(ctx: Context);` | 35 |
| default | LocalSubprocessRuntime | `export default LocalSubprocessRuntime;` | 45 |

## dsh-subprocess-local/lib/types/linux-execve.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | LinuxExecve | `export type LinuxExecve` | 3 |
| function | loadLinuxExecve | `export declare function loadLinuxExecve(): LinuxExecve` | 8 |

## dsh-subprocess-local/lib/types/linux-scope.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LinuxScopeInternals | `export interface LinuxScopeInternals` | 8 |
| interface | SystemctlResult | `interface SystemctlResult` | 20 |
| function | probeLinuxBootstrap | `export declare function probeLinuxBootstrap(internals?: LinuxScopeInternals): boolean` | 31 |
| function | probeLinuxScope | `export declare function probeLinuxScope(internals?: LinuxScopeInternals): boolean` | 37 |
| function | probeLinuxManager | `export declare function probeLinuxManager(internals?: LinuxScopeInternals): boolean` | 43 |
| function | probeLinuxNative | `export declare function probeLinuxNative(internals?: LinuxScopeInternals): boolean` | 49 |
| interface | DirectRange | `interface DirectRange` | 50 |
| interface | LinuxTerminalScopeLaunch | `export interface LinuxTerminalScopeLaunch` | 55 |
| function | prepareLinuxTerminalScope | `export declare function prepareLinuxTerminalScope(spec: SubprocessTerminalSpawnSpec, targetEnv: Record<string, string>, internals?: LinuxScopeInternals): LinuxT` | 71 |
| function | launchLinuxScope | `export declare function launchLinuxScope(spec: SubprocessSpawnSpec, targetEnv: Record<string, string>, internals?: LinuxScopeInternals): ManagedProcessLaunch` | 79 |
| export-list |  | `export {};` | 80 |

## dsh-subprocess-local/lib/types/managed-owner.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | BoundProcessOwner | `export interface BoundProcessOwner` | 5 |
| interface | ManagedProcessLaunch | `export interface ManagedProcessLaunch` | 16 |
| function | waitWithAbort | `export declare function waitWithAbort(pending: Promise<void>, signal?: AbortSignal): Promise<boolean>` | 29 |

## dsh-subprocess-local/lib/types/process-inspector.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ProcessIdentity | `export interface ProcessIdentity` | 4 |
| interface | FileStatus | `interface FileStatus` | 8 |
| interface | ProcessSnapshot | `export interface ProcessSnapshot` | 27 |
| interface | ProcessInspector | `export interface ProcessInspector` | 48 |
| interface | ProcessInspectorInternals | `export interface ProcessInspectorInternals` | 90 |
| interface | ProcStat | `interface ProcStat` | 101 |
| function | parseProcStat | `export declare function parseProcStat(text: string): ProcStat \| undefined` | 116 |
| function | linuxProcessGroupHasLiveMembers | `export declare function linuxProcessGroupHasLiveMembers(processGroupId: number, internals?: ProcessInspectorInternals): boolean \| undefined` | 125 |
| function | createProcessInspector | `export declare function createProcessInspector(platform?: NodeJS.Platform, arch?: NodeJS.Architecture, internals?: ProcessInspectorInternals): ProcessInspector` | 133 |
| export-list |  | `export {};` | 134 |

## dsh-subprocess-local/lib/types/runner-launch.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | SUBPROCESS_RUNNER_ENV | `export declare const SUBPROCESS_RUNNER_ENV: "DSH_SUBPROCESS_RUNNER"` | 5 |
| const | WINDOWS_RUNNER_SELECTION | `export declare const WINDOWS_RUNNER_SELECTION: "windows"` | 7 |
| type | RunnerInvocation | `export type RunnerInvocation` | 9 |
| function | spawnRunnerInvocation | `export declare function spawnRunnerInvocation(): RunnerInvocation` | 14 |
| function | runnerInvocationAvailable | `export declare function runnerInvocationAvailable(invocation?: RunnerInvocation): boolean` | 20 |
| function | runnerEnvironment | `export declare function runnerEnvironment(selection: string, invocation?: RunnerInvocation): NodeJS.ProcessEnv` | 27 |
| function | consumeRunnerSelection | `export declare function consumeRunnerSelection(env?: NodeJS.ProcessEnv): string \| undefined` | 33 |
| function | parseRunnerTargetArgv | `export declare function parseRunnerTargetArgv(argv: readonly string[]): string[]` | 39 |
| function | runnerStdio | `export declare function runnerStdio(spec: SubprocessSpawnSpec, ipc: boolean, stdinCarrier?: 'pipe' \| number): StdioOptions` | 48 |
| function | resolveWindowsExecutable | `export declare function resolveWindowsExecutable(command: string, cwd: string, env: Readonly<Record<string, string>>, exists?: (candidate: string) => boolean, c` | 59 |
| function | targetEnvironment | `export declare function targetEnvironment(spec: Pick<SubprocessSpawnSpec, 'argv' \| 'cwd' \| 'env'>): Record<string, string>` | 65 |

## dsh-subprocess-local/lib/types/runner-protocol.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | LinuxLaunchRequest | `export interface LinuxLaunchRequest` | 3 |
| interface | SerializedRunnerError | `export interface SerializedRunnerError` | 8 |
| type | LinuxStartupError | `export type LinuxStartupError` | 16 |
| interface | WindowsStartRequest | `export interface WindowsStartRequest` | 21 |
| interface | WindowsTerminateRequest | `export interface WindowsTerminateRequest` | 27 |
| type | WindowsRunnerResult | `export type WindowsRunnerResult` | 31 |
| interface | LinuxLaunchFiles | `export interface LinuxLaunchFiles` | 39 |
| function | createLinuxLaunchFiles | `export declare function createLinuxLaunchFiles(request: LinuxLaunchRequest): LinuxLaunchFiles` | 49 |
| function | linuxLaunchFilesFromLocator | `export declare function linuxLaunchFilesFromLocator(requestPath: string): LinuxLaunchFiles` | 55 |
| function | consumeLinuxLaunchRequest | `export declare function consumeLinuxLaunchRequest(requestPath: string): LinuxLaunchRequest` | 61 |
| function | writeLinuxStartupError | `export declare function writeLinuxStartupError(files: LinuxLaunchFiles, error: LinuxStartupError): void` | 67 |
| function | readLinuxStartupError | `export declare function readLinuxStartupError(path: string): LinuxStartupError \| undefined` | 73 |
| function | parseWindowsStartRequest | `export declare function parseWindowsStartRequest(value: unknown): WindowsStartRequest` | 79 |
| function | isWindowsTerminateRequest | `export declare function isWindowsTerminateRequest(value: unknown): value is WindowsTerminateRequest` | 85 |
| function | parseWindowsRunnerResult | `export declare function parseWindowsRunnerResult(value: unknown): WindowsRunnerResult` | 91 |
| function | serializeRunnerError | `export declare function serializeRunnerError(error: unknown): SerializedRunnerError` | 97 |
| function | deserializeRunnerError | `export declare function deserializeRunnerError(serialized: SerializedRunnerError): Error` | 103 |
| function | cleanupLinuxLaunchFiles | `export declare function cleanupLinuxLaunchFiles(files: LinuxLaunchFiles): void` | 108 |

## dsh-subprocess-local/lib/types/spawn-runner.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | RunnerHost | `type RunnerHost` | 5 |
| interface | SpawnRunnerInternals | `export interface SpawnRunnerInternals` | 9 |
| function | runSpawnRunner | `export declare function runSpawnRunner(selection: string, argv: readonly string[], host?: RunnerHost, internals?: SpawnRunnerInternals): Promise<void>` | 27 |
| function | reportSpawnRunnerFailure | `export declare function reportSpawnRunnerFailure(selection: string \| undefined, error: unknown, host?: RunnerHost): Promise<void>` | 34 |
| export-list |  | `export {};` | 35 |

## dsh-subprocess-local/lib/types/spawn.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | SpawnProcess | `type SpawnProcess` | 13 |
| function | childEnv | `export declare function childEnv(extra?: Readonly<NodeJS.ProcessEnv>): NodeJS.ProcessEnv` | 22 |
| interface | SpawnInternals | `export interface SpawnInternals` | 24 |
| interface | LocalSubprocessHandle | `export interface LocalSubprocessHandle extends SubprocessHandle` | 41 |
| function | prepareManagedProcessBinding | `export declare function prepareManagedProcessBinding(internals?: Pick<SpawnInternals, 'spillDir'>): {` | 50 |
| class | OutputCollector | `export declare class OutputCollector` | 63 |
| method | OutputCollector.constructor | `constructor(maxBytes: number, maxSpillBytes: number \| undefined, label: string, spillDir: string);` | 76 |
| function | killGroup | `export declare function killGroup(pid: number \| undefined, sig: NodeJS.Signals): void` | 125 |
| function | taskkillProcessTree | `export declare function taskkillProcessTree(pid: number \| undefined): void` | 133 |
| function | validateSubprocessSpec | `export declare function validateSubprocessSpec(spec: SubprocessSpawnSpec): void` | 139 |
| function | bindManagedProcess | `export declare function bindManagedProcess(spec: SubprocessSpawnSpec, launch: ManagedProcessLaunch, internals?: Pick<SpawnInternals, 'spillDir'>): LocalSubproce` | 147 |
| function | spawnSubprocess | `export declare function spawnSubprocess(spec: SubprocessSpawnSpec, internals?: SpawnInternals): LocalSubprocessHandle` | 154 |
| export-list |  | `export {};` | 155 |

## dsh-subprocess-local/lib/types/terminal.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| class | LocalTerminalHandle | `export declare class LocalTerminalHandle implements SubprocessTerminalHandle` | 16 |
| method | LocalTerminalHandle.constructor | `constructor(terminal: IPty, inspector: ProcessInspector, graceMs: number, platform?: NodeJS.Platform, managedOwner?: BoundProcessOwner \| undefined, resolveMana` | 41 |

## dsh-subprocess-local/lib/types/windows-inspector.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | ProcessEntry | `export interface ProcessEntry` | 14 |
| interface | WindowsProcessState | `export interface WindowsProcessState` | 19 |
| interface | WindowsProcessInspectorInternals | `export interface WindowsProcessInspectorInternals` | 26 |
| function | windowsProcessTree | `export declare function windowsProcessTree(entries: ProcessEntry[], rootPid: number, started: (pid: number) => string \| undefined): ProcessIdentity[]` | 43 |
| class | WindowsProcessInspector | `export declare class WindowsProcessInspector implements ProcessInspector` | 51 |
| method | WindowsProcessInspector.constructor | `constructor(internals?: WindowsProcessInspectorInternals);` | 53 |
| function | createWindowsProcessInspector | `export declare function createWindowsProcessInspector(internals?: WindowsProcessInspectorInternals): WindowsProcessInspector` | 66 |
| const | nativePtr | `declare const nativePtr: unique symbol` | 67 |
| type | NativePtr | `export type NativePtr` | 69 |
| function | isInvalidHandle | `export declare function isInvalidHandle(value: NativePtr \| null \| undefined): boolean` | 77 |
| export-list |  | `export {};` | 78 |

## dsh-subprocess-local/lib/types/windows-job.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | WindowsJobInternals | `export interface WindowsJobInternals` | 8 |
| function | probeWindowsJob | `export declare function probeWindowsJob(internals?: WindowsJobInternals): boolean` | 21 |
| function | launchWindowsJob | `export declare function launchWindowsJob(spec: SubprocessSpawnSpec, targetEnv: Record<string, string>, internals?: WindowsJobInternals): ManagedProcessLaunch` | 29 |

