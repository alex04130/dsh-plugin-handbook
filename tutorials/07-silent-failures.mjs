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
