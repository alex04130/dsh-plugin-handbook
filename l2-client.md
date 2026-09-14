# L2 client 面全量

截至 2026-09-14 · DSH 0.1.5-rc.2。

## 怎么采、在什么条件下采得到

client provider **从会话里**就能查，不必开浏览器 DevTools。但 **运行面数字需要这个会话装了 cordis 工具面**（`cordis_inspect_query`）。没挂这组工具的 preset 采不到，查询会挂起。挂起 = 当前没有页面在答，或者 preset 根本没有 inspect 工具：报未核实，别编数。

```js
cordis_inspect_query({ platform:'client', provider:'Slots',  method:'listSubTree' })
cordis_inspect_query({ platform:'client', provider:'Service', method:'listService' })
cordis_inspect_query({ platform:'client', provider:'Theme',  method:'listTokens' })
```

有页面且装了 cordis 工具面时（在一台装了 cordis 工具面的会话上实测）：

| 面 | 查法 | 数 | 怎么数 |
|---|---|---|---|
| **运行面 slot** | `Slots.listSubTree` | **61** | 数返回树里 `"kind":"…"` 的出现次数。别数 `"name"`（会数到 props，假的 131） |
| **检视目录 client service** | `Service.listService` | **8** | 下表 CSR。listService 是目录，**不保证**已挂；本观察未另做 client ctx.get |
| **运行面 theme token** | `Theme.listTokens` | **13** | 下表 CTK 一行一项；名是 CSS 变量全称 |

节点字段：`name/kind/scope/purpose/replaceRisk/children`。`kind` = 注册协议（single / list / keyed / chain）。`replaceRisk`：`shadows-shipped-ui` = 替换会盖掉发行版 UI；`none` = 追加/按 key 替换，不盖发行版根节点。

本观察所在会话没挂 cordis 工具面，没有自己跑 listSubTree。61/8/13 与下表采自**一台装了 cordis 工具面的会话**（服务名、token 全称与一次 `Theme.listTokens` dump 对齐）。换 preset 可能连工具都调不到。

声明面曾经从 `.d.ts` 启发式抽出若干路径，其中 **22 条是真 slot**（下表「声明也见到」列），**其余不是 slot**：`message` / `session` / `session-end` / `session-maybe` / `session-reference` / `tool` / `tool-call` / `tool-calls` / `tool-result` / `tools` 是模块名或事件碎片；`locale` `theme` `slots` `connection` `modules` `resources` `uiRenderer` `uiSession` `uiWorkspace` `sidebarRight` `documentPreviews` 是 client Context 键（见 CSV）。**不要把那串启发式结果当成 slot 声明面总数。**

## 完整度（一行一项）

| 块 | 应有行 | 本表行 | 聚合？ |
|---|---|---|---|
| CSL 运行面 slot | 61 | 61 | 否 |
| CSR 检视目录 client service | 8 | 8 | 否 |
| CTK 运行面 theme token | 13 | 13 | 否 |
| CSV 声明面 Context 键 | 12 | 12 | 否 |
| 启发式「32 条声明 slot」 | — | 0 | **不单列表。** 22 条真 slot 已在 CSL「声明也见到」；其余不是 slot，见文首与 CSV。 |

表体合计 **61+8+13+12 = 94**。不是 114：114 = 61+8+13+32，把已拆掉的启发式 32 又加回去了。

<!-- doccheck:no-entries -->

## CSL · 运行面 61 个 slot

| ID | 路径 | kind | scope | replaceRisk | 声明面也见到 |
|---|---|---|---|---|---|
| CSL-001 | `root` | single | root | shadows-shipped-ui |  |
| CSL-002 | `sidebar` | single | root | shadows-shipped-ui | 是 |
| CSL-003 | `sidebar.brand.mark` | single | root | shadows-shipped-ui |  |
| CSL-004 | `sidebar.settings` | single | root | shadows-shipped-ui | 是 |
| CSL-005 | `settings.trigger` | single | root | shadows-shipped-ui |  |
| CSL-006 | `settings.header` | single | root | shadows-shipped-ui |  |
| CSL-007 | `settings.action` | list | root | none |  |
| CSL-008 | `settings.close` | single | root | shadows-shipped-ui |  |
| CSL-009 | `settings.section` | list | root | none | 是 |
| CSL-010 | `settings.general.item` | list | root | none |  |
| CSL-011 | `settings.plugins.tab` | list | root | none | 是 |
| CSL-012 | `settings.plugin.item` | keyed | root | none |  |
| CSL-013 | `settings.models.provider-card` | keyed | root | none | 是 |
| CSL-014 | `settings.models.footer` | list | root | none |  |
| CSL-015 | `settings.onboarding` | list | root | none |  |
| CSL-016 | `sidebar.footer.action` | list | root | none |  |
| CSL-017 | `sidebar.workspaces` | single | root | shadows-shipped-ui | 是 |
| CSL-018 | `sidebar.workspaces.directoryFlow` | single | root | shadows-shipped-ui |  |
| CSL-019 | `sidebar.panellist` | list | root | none |  |
| CSL-020 | `sidebar.brand.name` | single | root | shadows-shipped-ui |  |
| CSL-021 | `main` | keyed | root | shadows-shipped-ui |  |
| CSL-022 | `main.conversation` | single | session-maybe | shadows-shipped-ui |  |
| CSL-023 | `conversation.composer` | chain | session | none | 是 |
| CSL-024 | `conversation.approval.detail` | single | session | shadows-shipped-ui |  |
| CSL-025 | `conversation.hero.workspace` | single | root | shadows-shipped-ui | 是 |
| CSL-026 | `conversation.hero.workspace.directoryFlow` | single | root | shadows-shipped-ui | 是 |
| CSL-027 | `conversation.session` | single | session | shadows-shipped-ui | 是 |
| CSL-028 | `conversation.view` | list | session | none | 是 |
| CSL-029 | `conversation.chat.node` | keyed | session | shadows-shipped-ui | 是 |
| CSL-030 | `tool.call.toolview` | keyed | session | shadows-shipped-ui |  |
| CSL-031 | `tool.call.images` | single | session | shadows-shipped-ui | 是 |
| CSL-032 | `tool.view.cordis` | keyed | session | none | 是 |
| CSL-033 | `conversation.chat.assistant-actions` | list | session | none |  |
| CSL-034 | `conversation.chat.commandview` | keyed | session | none | 是 |
| CSL-035 | `conversation.chat.turnTail` | chain | session | none | 是 |
| CSL-036 | `conversation.message.images` | single | session | shadows-shipped-ui |  |
| CSL-037 | `conversation.trajectory.images` | single | session | shadows-shipped-ui | 是 |
| CSL-038 | `conversation.session.header` | single | session | shadows-shipped-ui | 是 |
| CSL-039 | `conversation.session.header.corner` | single | session | shadows-shipped-ui |  |
| CSL-040 | `conversation.session.header.utilities` | list | session | none |  |
| CSL-041 | `conversation.session.header.actions` | list | session | none |  |
| CSL-042 | `conversation.session.header.lineage` | single | session | shadows-shipped-ui |  |
| CSL-043 | `conversation.composer.bar` | single | session-maybe | shadows-shipped-ui | 是 |
| CSL-044 | `conversation.input.plan` | single | session | shadows-shipped-ui |  |
| CSL-045 | `conversation.input.attachments` | single | session-maybe | shadows-shipped-ui |  |
| CSL-046 | `conversation.input.overlay` | list | session | none |  |
| CSL-047 | `conversation.input.model` | single | session | shadows-shipped-ui |  |
| CSL-048 | `conversation.input.left` | list | session | none |  |
| CSL-049 | `conversation.input.right` | list | session | none |  |
| CSL-050 | `conversation.composer.dock` | list | session | none |  |
| CSL-051 | `conversation.input.dock` | list | session | none |  |
| CSL-052 | `conversation.hero.brand.mark` | single | root | none |  |
| CSL-053 | `conversation.hero.agentPreset` | single | root | shadows-shipped-ui |  |
| CSL-054 | `rightbar` | single | root | shadows-shipped-ui |  |
| CSL-055 | `rightbar.session` | single | session | shadows-shipped-ui |  |
| CSL-056 | `sidebar.right.pane.tab` | keyed | session | none | 是 |
| CSL-057 | `sidebar.right.tab.guide` | chain | session | none | 是 |
| CSL-058 | `sidebar.right.tab.document` | keyed | session | none | 是 |
| CSL-059 | `sidebar.right.pane.tab.title` | keyed | session | none |  |
| CSL-060 | `sidebar.right.tab.menu.item` | list | session | none |  |
| CSL-061 | `shell.overlay` | list | root | none |  |

## CSR · 检视目录 client service（8，一行一项）

`Service.listService` 的 8 个名字（目录，不保证已挂）。和 CSV 那 12 个安装树 Context 键不是一张表：有的两边都有，有的只在一边。本观察未另做 client `ctx.get`。怎么拿：client 插件 `ctx.get('<键>')`。

| ID | 键 | 一句 | 声明面 CSV |
|---|---|---|---|
| CSR-001 | `layout` | 布局 | 否 |
| CSR-002 | `locale` | 本地化 | CSV-001 |
| CSR-003 | `sessions` | 会话列表/注册 | 否 |
| CSR-004 | `slots` | 插槽 | CSV-003 |
| CSR-005 | `theme` | 主题 | CSV-002 |
| CSR-006 | `timer` | 定时 | 否 |
| CSR-007 | `uiWorkspace` | 工作区 UI | CSV-009 |
| CSR-008 | `workspaces` | 工作区 | 否 |

检视目录有、安装树 12 里没有：`layout` `sessions` `timer` `workspaces`。安装树有、这次 listService 没出现：CSV 里标了「目录未列」的那些。client 侧未做 ctx.get，所以不把目录差写成「运行面未挂」。

## CSV · client Context 键（安装树 12 ≠ 检视目录 8）

这些**不是 slot 路径**。曾经混进启发式 slot 表里，已挪出。

| ID | 键 | 包 | 检视目录 listService=8 |
|---|---|---|---|
| CSV-001 | `locale` | dsh-client-locale | CSR-002 |
| CSV-002 | `theme` | dsh-client-ui-theme | CSR-005 |
| CSV-003 | `slots` | dsh-client-ui-renderer | CSR-004 |
| CSV-004 | `connection` | dsh-client-connection | 目录未列 |
| CSV-005 | `modules` | dsh-client-modules | 目录未列 |
| CSV-006 | `resources` | dsh-client-resources | 目录未列 |
| CSV-007 | `uiRenderer` | dsh-client-ui-renderer | 目录未列 |
| CSV-008 | `uiSession` | dsh-client-ui-session | 目录未列 |
| CSV-009 | `uiWorkspace` | dsh-client-ui-workspace | CSR-007 |
| CSV-010 | `sidebarRight` | dsh-client-ui-sidebar-right | 目录未列 |
| CSV-011 | `documentPreviews` | dsh-client-ui-sidebar-documentpreview | 目录未列 |
| CSV-012 | `fileUpload` / `fileUploads` | dsh-client-file-upload | 目录未列 |

安装树 12 vs 检视目录 8 = 有键在 `.d.ts` 里、这次 listService 没列。不是 ctx.get 探针。CSV-012 两个名字算 1 条声明键族，不拆成 13。

## CTK · theme token（13，一行一项）

类型 `ThemeTokens = Record<string, string>`（`dsh-client-ui-theme/lib/types/client/index.d.ts:28`）。运行面 `Theme.listTokens`。名是 CSS 变量全称（`--dsw-alias-*` / `--dsw-specific-*`），不是短后缀。client 插件经 theme 服务读。13 条都 `requiresLightAndDark: true`，`valueType` = CSS color。

| ID | token | 一句 |
|---|---|---|
| CTK-001 | `--dsw-alias-bg-base` | Application base background. |
| CTK-002 | `--dsw-alias-bg-layer-1` | Primary raised surface background. |
| CTK-003 | `--dsw-alias-bg-layer-2` | Secondary nested surface background. |
| CTK-004 | `--dsw-alias-bg-overlay` | Overlay and popover background. |
| CTK-005 | `--dsw-alias-border-l1` | Primary subtle border. |
| CTK-006 | `--dsw-alias-border-l2` | Secondary stronger border. |
| CTK-007 | `--dsw-alias-brand-primary` | Primary brand accent. |
| CTK-008 | `--dsw-alias-label-primary` | Primary text color. |
| CTK-009 | `--dsw-alias-label-secondary` | Secondary text color. |
| CTK-010 | `--dsw-alias-state-error-primary` | Primary error state color. |
| CTK-011 | `--dsw-alias-state-success-primary` | Primary success state color. |
| CTK-012 | `--dsw-alias-state-warn-primary` | Primary warning state color. |
| CTK-013 | `--dsw-specific-sidebar-fill` | Sidebar column and title-row background. |
