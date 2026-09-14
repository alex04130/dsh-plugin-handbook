# Full DSH notes

Package-level reading of DeepSeek Harness, written up as this full cut for plugin work and for looking up how a mechanism actually runs. As of about 0.1.5-rc.2.

Why it exists: an agent writing a DSH plugin often finds that an API exists, does not walk the call chain, and then spends turns pulling code and probing the runtime that a written chain would have saved. This cut records the chain, the edge, and what this version sealed.

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
