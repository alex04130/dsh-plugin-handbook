# dsh-client-ui-open-in-app

> Web Session-header "Open In..." split button opening the session workspace directory in a locally installed application
> 已知限制：只读 .d.ts（纯 JS 导出不可见）；不含参数语义（只有签名与行号）。
> 生成：2026-09-11（源 mtime · content-7536a635） · DSH 0.1.5。

## dsh-client-ui-open-in-app/lib/types/client/OpenInAppAction.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| interface | OpenInAppActionInjected | `export interface OpenInAppActionInjected` | 5 |
| type | OpenInAppActionProps | `export type OpenInAppActionProps` | 15 |
| function | OpenInAppAction | `export declare function OpenInAppAction(props: OpenInAppActionProps): React.JSX.Element \| null` | 26 |

## dsh-client-ui-open-in-app/lib/types/client/controller.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| type | Fetch | `type Fetch` | 3 |
| class | OpenInAppController | `export declare class OpenInAppController` | 9 |
| method | OpenInAppController.constructor | `constructor(fetcher?: Fetch);` | 19 |
| export-list |  | `export {};` | 40 |

## dsh-client-ui-open-in-app/lib/types/client/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | inject | `export declare const inject: string[]` | 18 |
| function | apply | `export declare function apply(ctx: ClientContext): void` | 23 |

## dsh-client-ui-open-in-app/lib/types/client/locales.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| const | NS | `export declare const NS = "open-in-app"` | 3 |
| const | zh | `export declare const zh: {` | 5 |
| const | en | `export declare const en: Record<OpenInAppKey, string>` | 47 |
| type | OpenInAppKey | `export type OpenInAppKey` | 49 |

## dsh-client-ui-open-in-app/lib/types/index.d.ts

| 类型 | 名称 | 签名 | 行 |
|---|---|---|---|
| function | apply | `export declare function apply(): void` | 9 |

