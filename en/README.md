# Community notes: DSH capabilities and gates

A measured record of one live DSH install: what a plugin can hang on, whether it still works, and where the edge is. For people writing DSH plugins.

Official API docs list interfaces. They do not list what 0.1.5 already retired. This cut fills that. As of about 0.1.5-rc.2. Your build may differ: read the version stamp, then run `verify.md`.

## Where to start

| File | What you came to do |
|---|---|
| [capabilities.md](capabilities.md) | Can I still use this (how to read status: that file's header) |
| [gates.md](gates.md) | I hit an error; which gate is it |
| [verify.md](verify.md) | I do not trust this conclusion; I will run it myself |
| [environment.md](environment.md) | Directories, hot reload, preset syntax |

The rest (full host/client tables, package index, terms) is in the directory. Words: [glossary.md](glossary.md). Chinese source: `../`.

## Which names to type

These pages describe a **runtime** (DSH 0.1.5-rc.2 plus plugins under `$DSH_HOME`). `@dsh-forge/bundle@0.2.0-preview.1` still ships the older names (`session_*` / `model_*` / `dev_*` / `teams`). If that package is what you installed, call those names; do not copy the `forge_*` names from here. To see what your machine actually has: with the cordis tool surface, `cordis_inspect_query({ platform:'host', provider:'Tool', method:'listTools' })`; on a PTC session, `tool_router({ action:'list' })`. Trust that list.

`$DSH_HOME` is this machine's DSH home.
