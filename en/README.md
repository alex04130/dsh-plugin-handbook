# Community notes: DSH capabilities and gates (unofficial)

This is a **community observation**. It is not DeepSeek Harness official documentation and does not speak for the DSH project. It comes from the installed packages (about 0.1.5-rc.2) and from runtime behaviour we measured. Your build may differ — read the version stamp, then run the commands in `verify.md`.

Audience: people writing DSH plugins. Test: after reading, can you say what this is and what you can do with it.

| File | What it is for |
|---|---|
| [capabilities.md](capabilities.md) | Can I still use this (five-value status + evidence + recipe) |
| [gates.md](gates.md) | Gates: criterion / trigger / verbatim error / bypass |
| [environment.md](environment.md) | Directories, hot reload, preset syntax, presentation mode, service names and event names |
| [glossary.md](glossary.md) | Terms |
| [verify.md](verify.md) | How to falsify a conclusion yourself |
| [index.md](index.md) | Script-generated entry index (optional) |
| [l2-host.md](../l2-host.md) | Full host: install-tree 108/94; inspect catalog service 71 / event 62 / builtin 7; runtime ctx.get 60 mounted / 11 not mounted. Chinese source; identifier tables not re-translated |
| [l2-client.md](../l2-client.md) | Full client: runtime slots 61 + inspect-catalog services 8 + tokens 13; install-tree Context keys 12. Chinese source |
| [plugin-surface.md](../plugin-surface.md) | What a plugin can hang on (host catalog 71 including runtime 60/11 + events 62 + builtins 7 + client 8/61/13). Chinese source |
| [l2-packages.md](../l2-packages.md) | Index of 238 packages. Chinese source |

License / language / channel: undecided. Secrets and credentials do not go in this cut.

Path placeholders: `$DSH_HOME` = this machine's DSH home; shipped packages live under `node_modules/@deepseek-ai/<pkg>/`.

If `project-memory/` shows up in the environment notes, that is a community-plugin directory convention, **not shipped with DSH**. `tool_router` is a runtime meta-tool (list/describe/call). In this observation it is on the visible surface of a PTC session; whether a given install mounts it by default is up to that install.

Chinese source: `../` (same filenames). Terms: freeze table in the Chinese merge tree, `GLOSSARY-EN.md`.
