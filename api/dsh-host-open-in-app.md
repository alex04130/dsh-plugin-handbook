# dsh-host-open-in-app

> Host half of open-in-app: resolved application catalog, icons, and the launch endpoint as three webServer routes
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-host-open-in-app/lib/types/catalog.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | OpenInAppPlatform | `export type OpenInAppPlatform` | 9 |
| const | PATH_TOKEN | `export declare const PATH_TOKEN = "{path}"` | 11 |
| type | OpenInAppLaunch | `export type OpenInAppLaunch` | 23 |
| type | OpenInAppLocator | `export type OpenInAppLocator` | 48 |
| interface | OpenInAppPlatformSpec | `export interface OpenInAppPlatformSpec` | 93 |
| interface | OpenInAppApp | `export interface OpenInAppApp` | 104 |
| const | OPEN_IN_APP_CATALOG | `export declare const OPEN_IN_APP_CATALOG: readonly OpenInAppApp[]` | 116 |

## dsh-host-open-in-app/lib/types/icons.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | OpenInAppIcon | `export interface OpenInAppIcon` | 14 |
| function | extractAppIcon | `export declare function extractAppIcon(app: OpenInAppApp, resolved: OpenInAppResolvedLaunch, timeoutMs: number, internals?: OpenInAppInternals): Promise<OpenInA` | 26 |

## dsh-host-open-in-app/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | name | `export declare const name = "open-in-app"` | 26 |
| const | inject | `export declare const inject: string[]` | 28 |
| interface | Config | `export interface Config` | 30 |
| const | Config | `export declare const Config: z<Config>` | 49 |
| function | apply | `export declare function apply(ctx: Context, config: Config): void` | 51 |

## dsh-host-open-in-app/lib/types/internals.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | internals | `export declare const internals: {` | 4 |

## dsh-host-open-in-app/lib/types/resolver.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | OpenInAppIconSource | `export type OpenInAppIconSource` | 17 |
| interface | OpenInAppResolvedLaunch | `export interface OpenInAppResolvedLaunch` | 25 |
| type | OpenInAppLauncher | `export type OpenInAppLauncher` | 35 |
| type | OpenInAppLaunchOutcome | `export type OpenInAppLaunchOutcome` | 41 |
| const | launchDetachedApp | `export declare const launchDetachedApp: OpenInAppLauncher` | 58 |
| interface | OpenInAppInternals | `export interface OpenInAppInternals` | 60 |
| interface | ResolvedInternals | `export interface ResolvedInternals` | 76 |
| function | resolveInternals | `export declare function resolveInternals(internals: OpenInAppInternals): ResolvedInternals` | 94 |
| function | output | `export declare function output(command: string, args: readonly string[], timeoutMs: number, internals: ResolvedInternals): Promise<string \| null>` | 103 |
| function | isDirectory | `export declare function isDirectory(path: string): Promise<boolean>` | 109 |
| function | isFile | `export declare function isFile(path: string): Promise<boolean>` | 115 |
| function | expandCandidate | `export declare function expandCandidate(template: string, internals: ResolvedInternals): string \| null` | 124 |
| interface | WindowsInstallRecord | `interface WindowsInstallRecord` | 126 |
| interface | WindowsRegistryView | `export interface WindowsRegistryView` | 132 |
| function | parseRegistryDump | `export declare function parseRegistryDump(dump: string): ReadonlyMap<string, ReadonlyMap<string, string>>` | 146 |
| function | readWindowsRegistryView | `export declare function readWindowsRegistryView(timeoutMs: number, internals: ResolvedInternals): Promise<WindowsRegistryView>` | 155 |
| interface | DesktopEntry | `export interface DesktopEntry` | 157 |
| function | parseDesktopEntry | `export declare function parseDesktopEntry(text: string): DesktopEntry` | 167 |
| function | xdgDataDirectories | `export declare function xdgDataDirectories(internals: ResolvedInternals): readonly string[]` | 173 |
| function | findDesktopEntry | `export declare function findDesktopEntry(desktopId: string, internals: ResolvedInternals): Promise<DesktopEntry \| null>` | 180 |
| function | execCommand | `export declare function execCommand(exec: string \| undefined): string \| null` | 186 |
| function | specFor | `export declare function specFor(app: OpenInAppApp, platform: NodeJS.Platform): OpenInAppPlatformSpec \| undefined` | 193 |
| function | resolveLaunch | `export declare function resolveLaunch(app: OpenInAppApp, probeTimeoutMs: number, internals?: OpenInAppInternals): Promise<OpenInAppResolvedLaunch \| null>` | 202 |
| function | resolveOpenInAppApps | `export declare function resolveOpenInAppApps(probeTimeoutMs: number, internals?: OpenInAppInternals): Promise<Map<string, OpenInAppResolvedLaunch>>` | 214 |
| function | launchResolved | `export declare function launchResolved(resolved: OpenInAppResolvedLaunch, path: string, watchMs: number, internals?: OpenInAppInternals): Promise<OpenInAppLaunc` | 226 |
| export-list |  | `export {};` | 227 |

## dsh-host-open-in-app/lib/types/shared.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | OPEN_IN_APP_APPS_ROUTE | `export declare const OPEN_IN_APP_APPS_ROUTE = "/open-in-app/apps"` | 7 |
| const | OPEN_IN_APP_ICON_PREFIX | `export declare const OPEN_IN_APP_ICON_PREFIX = "/open-in-app/icon"` | 9 |
| const | OPEN_IN_APP_OPEN_ROUTE | `export declare const OPEN_IN_APP_OPEN_ROUTE = "/open-in-app/open"` | 11 |
| interface | OpenInAppAppsPayload | `export interface OpenInAppAppsPayload` | 13 |
| interface | OpenInAppOpenPayload | `export interface OpenInAppOpenPayload` | 17 |

