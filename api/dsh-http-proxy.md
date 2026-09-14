# dsh-http-proxy

> Process-wide outbound HTTP proxy policy for DeepSeek Harness: resolve it from the launch environment and install it as undici's global dispatcher
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-http-proxy/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| re-export | { clearedProxyEnv, installProxyFromEnvir | `export { clearedProxyEnv, installProxyFromEnvironment, proxyEnvironmentForChild, proxyRouteFor, type ProxyRoute, } from './install.ts';` | 16 |

## dsh-http-proxy/lib/types/install.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | ProxyRoute | `export type ProxyRoute` | 20 |
| function | proxyRouteFor | `export declare function proxyRouteFor(url: URL): ProxyRoute` | 33 |
| function | proxyEnvironmentForChild | `export declare function proxyEnvironmentForChild(): Readonly<Record<string, string \| undefined>>` | 68 |
| function | installProxyFromEnvironment | `export declare function installProxyFromEnvironment(env: EnvLookup, report: (message: string) => void): Promise<() => Promise<void>>` | 84 |
| function | clearedProxyEnv | `export declare function clearedProxyEnv(): Record<string, undefined>` | 93 |

## dsh-http-proxy/lib/types/policy.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | EnvLookup | `export interface EnvLookup` | 15 |
| const | LOOPBACK_NO_PROXY | `export declare const LOOPBACK_NO_PROXY: readonly string[]` | 33 |
| const | POLICY_ENV_NAMES | `export declare const POLICY_ENV_NAMES: {` | 38 |
| const | PROXY_ENV_NAMES | `export declare const PROXY_ENV_NAMES: readonly string[]` | 48 |
| interface | ProxyPolicy | `export interface ProxyPolicy` | 54 |
| const | DIRECT_POLICY | `export declare const DIRECT_POLICY: ProxyPolicy` | 65 |
| interface | ProxyDiagnostic | `export interface ProxyDiagnostic` | 67 |
| interface | ProxyResolution | `export interface ProxyResolution` | 76 |
| function | isSupportedProxyUrl | `export declare function isSupportedProxyUrl(value: string): boolean` | 89 |
| function | isLoopbackHost | `export declare function isLoopbackHost(hostname: string): boolean` | 102 |
| function | bypassesProxy | `export declare function bypassesProxy(noProxy: string, url: URL): boolean` | 114 |
| function | resolveProxyPolicy | `export declare function resolveProxyPolicy(env: EnvLookup): ProxyResolution` | 124 |
| function | proxyForUrl | `export declare function proxyForUrl(policy: ProxyPolicy, url: URL): string \| undefined` | 135 |

