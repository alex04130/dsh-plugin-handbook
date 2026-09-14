# 调用没报错，为什么没生效？

闸拒绝会带原文报错，去闸清单对就行。静默失败是另一类：返回值看着合法，走的却是你没要的那条路。没有这页，这种故障会让你把 `.d.ts` 再读一遍，而答案不在类型文件里。

截至 2026-09-14 · DSH CLI 0.1.5-rc.1 · 关键包 0.1.5-rc.2。

## 先跑这一条

`@deepseek-ai/cordis` 这类包名装完 DSH 之后，在任意目录都解析不到。它们住在 `dsh` 安装树里。下面这段用 PATH 里的 `dsh` 定位那棵树，隔离 jsonl，不碰你的 `$DSH_HOME`。

把脚本存成 `07-silent-failures.mjs`（本页同目录有一份），任意目录：

```bash
node 07-silent-failures.mjs
```

2026-09-14 从 `/tmp` 跑出来（`cwd=/tmp`，`dsh` 在 PATH）：

```text
{"openError":null,"handleAccess":"write","appendError":null}
```

没有报错就是这条闸。类型里 `SessionAccess` 只有 `'read' | 'write'`（GATE-003 / CAP-011）。

```js
#!/usr/bin/env node
// 任意目录：node 07-silent-failures.mjs
// 用 PATH 里的 dsh 定位安装树。不依赖当前目录的 node_modules，不碰 $DSH_HOME。
import { mkdtemp, rm } from 'node:fs/promises'
import { realpathSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { execFileSync } from 'node:child_process'

function dshPackageRoot() {
  const found = execFileSync('bash', ['-lc', 'command -v dsh'], { encoding: 'utf8' }).trim()
  if (!found) throw new Error('dsh not in PATH')
  const bin = realpathSync(found)
  return dirname(dirname(bin))
}

const nm = join(dshPackageRoot(), 'node_modules', '@deepseek-ai')
const load = (pkg) => import(pathToFileURL(join(nm, pkg, 'lib/index.js')).href)

const [{ Context }, { default: JsonlSessionPersistence }, { SessionId, SESSION_FORMAT_VERSION }] = await Promise.all([
  load('cordis'),
  load('dsh-session-persistence-jsonl'),
  load('dsh-session'),
])

const tmp = await mkdtemp(join(tmpdir(), 'dsh-silent-'))
const ctx = new Context()
await ctx.plugin(JsonlSessionPersistence, { root: tmp })
const p = ctx.get('sessionPersistence')
if (p === undefined) {
  console.error('sessionPersistence not mounted')
  process.exit(1)
}

const id = SessionId('session-demo-append')
const w = await p.create({
  version: SESSION_FORMAT_VERSION,
  id,
  createdAt: Date.now(),
  cwd: process.cwd(),
  isSeeded: false,
})
await w.flush()
await w.close()

let openError = null
let handleAccess = null
let appendError = null
try {
  const h = await p.open(id, 'append')
  handleAccess = h.access
  try {
    await h.append([{ type: 'turn/start', seq: 0, time: Date.now(), data: { turn: 1 } }])
  } catch (e) {
    appendError = String((e && e.message) || e)
  }
  await h.close()
} catch (e) {
  openError = String((e && e.message) || e)
}

try { await ctx.registry.flush() } catch {}
await rm(tmp, { recursive: true, force: true })

console.log(JSON.stringify({ openError, handleAccess, appendError }))
```

## 一条规律，五个实例

DSH 的接口不校验你给的东西，用合法的空值或默认值表达失败。

| 你给的 | 运行时做什么 |
|---|---|
| 值域外的值 | 静默当成另一个合法值（`append` → `write`） |
| 版本不认识的数据 | 静默折叠成 `undefined` |
| 名字不在可见面 | 静默给 `undefined` |
| 空与失败 | 都用 `count: 0` / 空文件表达 |
| 声明有但没挂 | 目录说有，`ctx.get` 给 `undefined` |

凡是 `undefined` / `0` / 空，先别当成「没有」。先当成可能有一条你没看见的规矩。

闸拒绝（有原文报错）不在这五条里，去闸清单对。

## A · 取值域被改写

症状：调用成功，权限却不是你以为的那个。

文首那条：`open(id, 'append')` 拿到的是 write 句柄，随后 `append` 也成功。jsonl 实现只判断 `access === "read"`，其余一律 `claimWrite`（`dsh-session-persistence-jsonl/lib/index.js:2350`）。TS 能拦 `'append'`，JS 拦不住。

读句柄上再 `append` 才会抛 `SessionReadOnlyError`（GATE-001），那是另一条闸，响亮的。

这条你多半不会在插件里直接撞到。插件该传 `'read'` 或 `'write'`。写它是因为它把失败风格亮出来：非法值没有报错，变成了另一个合法值，还带上写权限。

防：动手前对 `.d.ts` 取值域，不要靠运行时报错发现拼错。

## B · 版本不对当不存在

症状：列表里少一行，没有报错。同一份数据换一条入口，变成 throw。

`foldSubagentDescriptor`：`version !== 3` 返回 `undefined`（`dsh-subagent/lib/index.js:1359`）。迁移 / 读取路径才 throw：

```text
subagent/descriptor <seq> uses unsupported descriptor version <n>
```

跨会话读取一条 v2 会话，动词是 **read**；`sessionController.inspect` 撞同一道闸，动词是 **observe**。两个入口，不是同一个函数换壳。

写子代理列表的插件会间接撞到：fold 把旧描述符收成 `undefined`，面板少一行。你多半不会手写 `descriptor.version`。写这条，是因为「列表是空的」不等于「没有子代理」。

防：同一条数据走两条入口（fold 与 read）。对不上，就不是「没有」。

## C · 名字不在可见面

症状：插件 `apply` 成功，零报错，你以为注册上的工具模型看不见。

```js
export default class MyPlugin {
  apply(ctx) {
    const tools = ctx.get('tool') // 真名 tools；undefined，不抛
    if (!tools) return            // 下面的 register 没跑到
    tools.register({ name: 'my_probe', /* ... */ })
  }
}
```

日常形状：你以为注册了一个工具，模型看不见。注册代码被 `if (!svc) return` 吃掉了。`ctx.get` 对不在可见面的键返回 `undefined`（ENV-010）。

点属性会响亮地抛（GATE-052），换 `ctx.get` 就变静默：

```text
cannot get property "systemPrompt" without inject
```

没声明 `inject: ['systemPrompt']` 时，`ctx.systemPrompt` 抛上面这句；`ctx.get('systemPrompt')` 可能只拿到 `undefined`，`apply` 照样成功。动态插件里：handler 注册成功，菜单转圈，界面不动。

写插件的人会在这里撞到它。服务名从该包 `lib/types/index.d.ts` 的 `interface Context` 抄，`inject` 声明过再点属性。常用错名：

| 错 | 对 |
|---|---|
| `tool` | `tools` |
| `presets` | `agentPresets` |
| `persist` / `persistence` | `sessionPersistence` |
| `workspaces`（host） | `workspaceRegistry` |

## D · 空和失败长一个样

症状：你得到 `0` 或空文件，无法区分「真的没有」和「读错了地方」。

本机会话日志两代并存：`session.jsonl.zstd`（generation 0）和 `session.v3.jsonl.zstd`（generation 3）。按旧文件名直读已迁走的会话，解压得到 0 行，没有报错（ENV-003）。服务对「无事件」和「读不到」都可以回 `count: 0`。

这条你多半不会在插件里按文件名直读。写它是因为同等形状会出现在你自己的 API 上：list / count 对失败和空返回同一个 0，调用方无法分辨。

防：结论性「没有」之前做正控。用一条已知存在的样本跑你的读取路径，打出非零或原文报错，再扫未知样本。

## E · 声明面当成运行面

症状：目录上有这个服务，`ctx.get` 得到 `undefined`，没有报错。

`Service.listService` 是检视目录：本版本允许哪些接口。提供方原文：

> The Service/Event Catalog describes which interfaces this version permits; it does not guarantee that a Service is currently mounted.

本观察，宿主层插件 ctx：目录 **71**，逐个 `ctx.get` **60 挂 / 11 未挂**。未挂包括 `planMode`、`e2b`、`lsp`、`compaction`、`agentTeams` 等（完整 11 个在插件面清单）。你按目录写了 `ctx.get('planMode')`，得到 `undefined`。

探针作用域是宿主层插件 ctx。只在别的 isolate 里挂的服务，对插件作者等于拿不到。换一个作用域照抄探针，数字会对不上。

`.d.ts` 里曾经有的 `sessionPersistence.inspect` 已经没了（GATE-002）。那条调用是响亮的：`is not a function`。E 的静默面是目录有、这次没挂。

写插件的人会在这里撞到它。能不能拿 = 运行面 `ctx.get` 是不是 `undefined`，不是目录有没有这一行。怎么确认挂上了：这一节待补。

## 怎么证明你真的测到了

上面五条是现象。下面是方法：报「0 / 没有 / 通过」之前，先用一条已知会响的样本跑你的检查。量尺没拿被测对象试过，0 命中是假的。

| 尺子做了什么 | 假绿长什么样 | 出处 |
|---|---|---|
| 检查器：文件格式不对、识别 0 条 | 仍报通过、exit 0。缺参数时实际扫 0 个文件 | 写作时发生过 |
| 扫描器的含病样本漏了一类病 | 那一类的 0 命中没被验到（本例漏的是破折号） | 写作时发生过 |
| `cmd \| tail` 之后读 `$?` | 读到的是 `tail` 的码，命令失败也是 0 | 当时没记下来 |
| 两边条数相等 | 报 N = N，集合少 2 条多 1 条 | 当时没记下来 |

后一篇教程要宣布「没有 / 全绿」时，把这张表当检查单用，不必重写。

## 排查顺序

零报错但没动作，按这个顺序过一遍：

1. 没 inject（点属性会抛 GATE-052；`ctx.get` 可能只给 `undefined`）
2. 名字不在可见面（错键；`ctx.get` 给 `undefined`）
3. 值域或形状不对（传了类型没有的值，被收成另一个合法值）
4. 空与失败同形（`0` / 空文件先做正控）
5. 拿的是声明不是运行时（目录有 ≠ `ctx.get` 拿得到）

## 另见

- 闸：GATE-003、GATE-010、GATE-052、GATE-002、GATE-001（[gates.md](../gates.md)）
- 能力：CAP-011、CAP-042、CAP-055、CAP-010（[capabilities.md](../capabilities.md)）
- 环境：ENV-003、ENV-010（[environment.md](../environment.md)）
- 目录 vs 挂载：[l2-host.md](../l2-host.md)、[plugin-surface.md](../plugin-surface.md)
- 正控怎么做：[verify.md](../verify.md)
