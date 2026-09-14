# Full DSH notes

Package-level reading of DeepSeek Harness, written up as this full cut for people writing DSH plugins. As of about 0.1.5-rc.2.

Why it exists: an agent writing a DSH plugin often finds that an API exists, does not walk the call chain, and then spends turns pulling code and probing the runtime that a written chain would have saved.

Scale: all exports from **238** packages; **71** host services, **60** of them actually mounted this run (**11** not); events **62** · builtins **7**; client slots **61** · client services **8** · theme tokens **13**.

## Thirty-second start

Want to know if `sessionPersistence.inspect` still works:

1. Search [capabilities.md](capabilities.md) for `inspect`
2. Read its status: `available` / `partially available (recipe attached)` / `sealed (gate id attached)`
3. If you do not trust that, run the commands in [verify.md](verify.md)

Those three steps are the whole use of this cut. The other pages unpack them.

## Where to start

To know whether a method still works, pick a layer:

| Layer | How far you can trust it | Where |
|---|---|---|
| Package API tables | All 238 packages; no pure-JS exports (parses `.d.ts` only) | [l2-packages.md](../l2-packages.md) · `docs/harness/api-surface.md` |
| Full capability surface | Includes "declared but not mounted" | [plugin-surface.md](../plugin-surface.md) · [l2-host.md](../l2-host.md) · [l2-client.md](../l2-client.md) |
| Judgement layer | Verbatim errors and triggers; most likely to hold only for one version | [capabilities.md](capabilities.md) · [gates.md](gates.md) |

Three more: [verify.md](verify.md) (you do not trust a conclusion; run it yourself) · [environment.md](environment.md) (directories / hot reload / preset syntax) · [glossary.md](glossary.md) (words). Index: [index.md](index.md). Chinese source: `../`. How to read the five values: capabilities header. "unverified" means this observation did not run it, not that it is unusable.

## Which names to type

These pages describe a **runtime** (DSH 0.1.5-rc.2 plus plugins under `$DSH_HOME`). `@dsh-forge/bundle@0.2.0-preview.1` still ships the older names (`session_*` / `model_*` / `dev_*` / `teams`). If that package is what you installed, call those names; do not copy the `forge_*` names from here. To see what your machine actually has: with the cordis tool surface, `cordis_inspect_query({ platform:'host', provider:'Tool', method:'listTools' })`; on a PTC session, `tool_router({ action:'list' })`. Trust that list.

If this disagrees with your machine: open an issue with your DSH version and the verbatim error.

`$DSH_HOME` is this machine's DSH home.
