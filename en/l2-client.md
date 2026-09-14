<!-- translation of Chinese source; CAP/GATE/ENV ids duplicate by design. Do not pass this directory to doccheck together with ../. Field names are English (Status/Evidence/As of), so the Chinese-field checker will not validate them. -->

# L2 client surface, full

As of 2026-09-14 · DSH 0.1.5-rc.2.

You want to add a piece of UI and the slot path does not match, or you mistake a module name for a slot: read this runtime-face table first.

## How it was sampled, and under what conditions it can be sampled

The client provider can be queried **from a session**; you do not need browser DevTools. But the **runtime-face numbers require this session to have the cordis tool surface** (`cordis_inspect_query`). A preset without that tool group cannot sample it; the query hangs. A hang = no page is answering right now, or the preset has no inspect tool at all: report unverified, do not invent numbers.

```js
cordis_inspect_query({ platform:'client', provider:'Slots',  method:'listSubTree' })
cordis_inspect_query({ platform:'client', provider:'Service', method:'listService' })
cordis_inspect_query({ platform:'client', provider:'Theme',  method:'listTokens' })
```

With a page open and the cordis tool surface mounted (measured on a session that had it):

| Face | How to query | Count | How to count |
|---|---|---|---|
| **Runtime-face slots** | `Slots.listSubTree` | **61** | count `"kind":"…"` occurrences in the returned tree. Do not count `"name"` (you will count props; a fake 131) |
| **Inspection-catalog client services** | `Service.listService` | **8** | table CSR below. listService is a catalog, **not** a guarantee of mounting; this observation did not separately run client `ctx.get` |
| **Runtime-face theme tokens** | `Theme.listTokens` | **13** | table CTK below, one row each; names are full CSS variable names |

Node fields: `name/kind/scope/purpose/replaceRisk/children`. `kind` = registration protocol (single / list / keyed / chain). `replaceRisk`: `shadows-shipped-ui` = replacing covers shipped UI; `none` = append / replace-by-key, does not cover the shipped root node.

The session this observation ran in did not have the cordis tool surface and did not run listSubTree itself. 61/8/13 were sampled on **a session that had the cordis tool surface** (service names and token full names aligned against one `Theme.listTokens` dump). A different preset may not reach the tools at all.

The declaration face once had a number of paths heuristically extracted from `.d.ts`; **22 of them are real slots** (the "also seen in declaration face" column of CSL below), **the rest are not slots**: `message` / `session` / `session-end` / `session-maybe` / `session-reference` / `tool` / `tool-call` / `tool-calls` / `tool-result` / `tools` are module names or event fragments; `locale` `theme` `slots` `connection` `modules` `resources` `uiRenderer` `uiSession` `uiWorkspace` `sidebarRight` `documentPreviews` are client Context keys (see CSV). **Do not treat that heuristic result as a declaration-face slot count.**

## Completeness (one row per block)

| Block | Expected rows | Rows in this table | Aggregated? |
|---|---|---|---|
| CSL runtime-face slots | 61 | 61 | no |
| CSR inspection-catalog client services | 8 | 8 | no |
| CTK runtime-face theme tokens | 13 | 13 | no |
| CSV declaration-face Context keys | 12 | 12 | no |
| Heuristic "32 declared slots" | — | 0 | **Not listed separately.** The 22 real slots are in the CSL "also declared" column; the rest are not slots — see the top of this file and CSV. |

Table body total **61+8+13+12 = 94**. Not 114: 114 = 61+8+13+32, which adds the dismantled heuristic 32 back in.

<!-- doccheck:no-entries -->

## CSL · 61 runtime-face slots

| ID | Path | kind | scope | replaceRisk | Also seen in declaration face |
|---|---|---|---|---|---|
| CSL-001 | `root` | single | root | shadows-shipped-ui |  |
| CSL-002 | `sidebar` | single | root | shadows-shipped-ui | yes |
| CSL-003 | `sidebar.brand.mark` | single | root | shadows-shipped-ui |  |
| CSL-004 | `sidebar.settings` | single | root | shadows-shipped-ui | yes |
| CSL-005 | `settings.trigger` | single | root | shadows-shipped-ui |  |
| CSL-006 | `settings.header` | single | root | shadows-shipped-ui |  |
| CSL-007 | `settings.action` | list | root | none |  |
| CSL-008 | `settings.close` | single | root | shadows-shipped-ui |  |
| CSL-009 | `settings.section` | list | root | none | yes |
| CSL-010 | `settings.general.item` | list | root | none |  |
| CSL-011 | `settings.plugins.tab` | list | root | none | yes |
| CSL-012 | `settings.plugin.item` | keyed | root | none |  |
| CSL-013 | `settings.models.provider-card` | keyed | root | none | yes |
| CSL-014 | `settings.models.footer` | list | root | none |  |
| CSL-015 | `settings.onboarding` | list | root | none |  |
| CSL-016 | `sidebar.footer.action` | list | root | none |  |
| CSL-017 | `sidebar.workspaces` | single | root | shadows-shipped-ui | yes |
| CSL-018 | `sidebar.workspaces.directoryFlow` | single | root | shadows-shipped-ui |  |
| CSL-019 | `sidebar.panellist` | list | root | none |  |
| CSL-020 | `sidebar.brand.name` | single | root | shadows-shipped-ui |  |
| CSL-021 | `main` | keyed | root | shadows-shipped-ui |  |
| CSL-022 | `main.conversation` | single | session-maybe | shadows-shipped-ui |  |
| CSL-023 | `conversation.composer` | chain | session | none | yes |
| CSL-024 | `conversation.approval.detail` | single | session | shadows-shipped-ui |  |
| CSL-025 | `conversation.hero.workspace` | single | root | shadows-shipped-ui | yes |
| CSL-026 | `conversation.hero.workspace.directoryFlow` | single | root | shadows-shipped-ui | yes |
| CSL-027 | `conversation.session` | single | session | shadows-shipped-ui | yes |
| CSL-028 | `conversation.view` | list | session | none | yes |
| CSL-029 | `conversation.chat.node` | keyed | session | shadows-shipped-ui | yes |
| CSL-030 | `tool.call.toolview` | keyed | session | shadows-shipped-ui |  |
| CSL-031 | `tool.call.images` | single | session | shadows-shipped-ui | yes |
| CSL-032 | `tool.view.cordis` | keyed | session | none | yes |
| CSL-033 | `conversation.chat.assistant-actions` | list | session | none |  |
| CSL-034 | `conversation.chat.commandview` | keyed | session | none | yes |
| CSL-035 | `conversation.chat.turnTail` | chain | session | none | yes |
| CSL-036 | `conversation.message.images` | single | session | shadows-shipped-ui |  |
| CSL-037 | `conversation.trajectory.images` | single | session | shadows-shipped-ui | yes |
| CSL-038 | `conversation.session.header` | single | session | shadows-shipped-ui | yes |
| CSL-039 | `conversation.session.header.corner` | single | session | shadows-shipped-ui |  |
| CSL-040 | `conversation.session.header.utilities` | list | session | none |  |
| CSL-041 | `conversation.session.header.actions` | list | session | none |  |
| CSL-042 | `conversation.session.header.lineage` | single | session | shadows-shipped-ui |  |
| CSL-043 | `conversation.composer.bar` | single | session-maybe | shadows-shipped-ui | yes |
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
| CSL-056 | `sidebar.right.pane.tab` | keyed | session | none | yes |
| CSL-057 | `sidebar.right.tab.guide` | chain | session | none | yes |
| CSL-058 | `sidebar.right.tab.document` | keyed | session | none | yes |
| CSL-059 | `sidebar.right.pane.tab.title` | keyed | session | none |  |
| CSL-060 | `sidebar.right.tab.menu.item` | list | session | none |  |
| CSL-061 | `shell.overlay` | list | root | none |  |

## CSR · inspection-catalog client services (8, one row each)

The 8 names from `Service.listService` (a catalog, no mounting guarantee). Not the same table as the 12 install-tree Context keys in CSV: some appear on both sides, some on only one. This observation did not separately run client `ctx.get`. How to get one: client plugin `ctx.get('<key>')`.

| ID | Key | One line | Declaration face CSV |
|---|---|---|---|
| CSR-001 | `layout` | layout | no |
| CSR-002 | `locale` | localization | CSV-001 |
| CSR-003 | `sessions` | session list / registration | no |
| CSR-004 | `slots` | slots | CSV-003 |
| CSR-005 | `theme` | theme | CSV-002 |
| CSR-006 | `timer` | timing | no |
| CSR-007 | `uiWorkspace` | workspace UI | CSV-009 |
| CSR-008 | `workspaces` | workspaces | no |

In the catalog but not in the 12 install-tree keys: `layout` `sessions` `timer` `workspaces`. In the install tree but missing from this listService run: the rows CSV marks "not in catalog". No client `ctx.get` was run, so the catalog gap is not written up as "not mounted at runtime".

## CSV · client Context keys (install tree 12 ≠ catalog 8)

These are **not slot paths**. They once leaked into the heuristic slot table and have been moved out.

| ID | Key | Package | Inspection catalog listService=8 |
|---|---|---|---|
| CSV-001 | `locale` | dsh-client-locale | CSR-002 |
| CSV-002 | `theme` | dsh-client-ui-theme | CSR-005 |
| CSV-003 | `slots` | dsh-client-ui-renderer | CSR-004 |
| CSV-004 | `connection` | dsh-client-connection | not in catalog |
| CSV-005 | `modules` | dsh-client-modules | not in catalog |
| CSV-006 | `resources` | dsh-client-resources | not in catalog |
| CSV-007 | `uiRenderer` | dsh-client-ui-renderer | not in catalog |
| CSV-008 | `uiSession` | dsh-client-ui-session | not in catalog |
| CSV-009 | `uiWorkspace` | dsh-client-ui-workspace | CSR-007 |
| CSV-010 | `sidebarRight` | dsh-client-ui-sidebar-right | not in catalog |
| CSV-011 | `documentPreviews` | dsh-client-ui-sidebar-documentpreview | not in catalog |
| CSV-012 | `fileUpload` / `fileUploads` | dsh-client-file-upload | not in catalog |

Install tree 12 vs catalog 8 = some keys are in `.d.ts` but did not show up in this listService run. Not a `ctx.get` probe. CSV-012's two names count as **1** declared key family, not split into 13.

## CTK · theme tokens (13, one row each)

Type `ThemeTokens = Record<string, string>` (`dsh-client-ui-theme/lib/types/client/index.d.ts:28`). Runtime face `Theme.listTokens`. Names are full CSS variable names (`--dsw-alias-*` / `--dsw-specific-*`), not short suffixes. A client plugin reads them through the theme service. All 13 have `requiresLightAndDark: true`, `valueType` = CSS color.

| ID | Token | One line |
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
