# Intro Identity Visual Lab — Source Delivery Manifest

> 创建：2026-09-18  
> Source branch：`feat/intro-identity-visual-lab-20260918`  
> Base：`docs/intro-identity-visual-exploration-20260917@72b82b63b6598c77d1909da7f4e41360718c7158`  
> Canonical Issue：https://github.com/EOMZON/intro-zondev-top/issues/1  
> Cross-repo Context：https://github.com/EOMZON/creationos-os/issues/132  
> Merge Reconciliation：https://github.com/EOMZON/codex-skills-private/issues/29

## 1. 本分支目的

建立 **与 production 完全隔离** 的 Identity Visual Lab 第一轮代码候选。

本分支不会：

- 修改 `app/page.tsx`；
- 替换当前 production renderer；
- 合 main；
- 部署；
- 声称本机 consumer 已更新。

## 2. Task-owned paths

```text
data/identity-core.ts
experiments/identity-visual/registry.ts
components/identity/identity-lab-view.tsx
components/identity/identity-lab-view.module.css
app/lab/identity/page.tsx
app/lab/identity/lab-index.module.css
app/lab/identity/[style]/[variant]/page.tsx
docs/plan/2026-09-18-intro-identity-todo.md
docs/governance/2026-09-18-intro-identity-visual-lab-delivery-manifest.md
```

## 3. 交付内容

### Identity Truth

`data/identity-core.ts`

包含：

- 1 identity statement；
- 3 manifesto；
- 7-node constellation；
- 4-stage becoming；
- 5 exits。

Portfolio / Writing 的真实 URL 暂无仓库证据，因此保持 unresolved，不编造域名。

### Visual Registry

`experiments/identity-visual/registry.ts`

包含：

- 18 style families；
- 3 controlled variants；
- 54 addressable combinations；
- narrative / layout / geometry 分离；
- family tokens；
- variant config。

### Semantic Renderer

`components/identity/identity-lab-view.tsx`

同一组件消费：

```text
identityCore
+ visual family
+ variant
```

没有复制 54 套 JSX。

### Visual Grammar

`components/identity/identity-lab-view.module.css`

负责：

- family motif；
- layout differences；
- constellation geometry；
- responsive；
- focus；
- reduced motion。

### Lab Routes

```text
/lab/identity
/lab/identity/[style]/[variant]
```

只作为实验入口。

## 4. 代码提交

| 内容 | Commit |
|---|---|
| minimal identity truth | `b654ba342441741c86401239d5a9038e960e0778` |
| visual family registry | `5ad45c4b4102ab209c5d33098fd4886d537e2c34` |
| reusable lab renderer | `eb03d5650d3ad0c9b778c2124a7023eab675b668` |
| visual grammar CSS | `2d33d8f1c0c1a19b3ec137b72765246c57d46053` |
| lab index | `2fde5fa76f88f36340fa65b6f1c602032ec79c12` |
| lab index styles | `34383e7c16671c3c7695fa837fff451fe99a8360` |
| 54 dynamic routes | `a050cebb9bdff5c0eb9710aca2f798fb6dcc16b6` |
| todo progress/state | `9d7b7c90f691896818ca26ed173e73a8418c0e2d` |

## 5. Compare 证据

相对 docs base：

```text
status: ahead
ahead_by: 7   （更新 Todo 前的 compare 读回）
behind_by: 0
```

新增代码路径只在 Lab / Identity 隔离范围，未修改 production `app/page.tsx`。

## 6. 当前验证状态

### 已验证

- GitHub 远端文件存在；
- 分支与 docs base 有明确 lineage；
- 18 families 数据存在；
- 3 variants config 存在；
- dynamic route 由 family × variant 生成；
- production root 未修改；
- task-owned paths 明确。

### 未验证

当前执行环境无法解析 `github.com`，无法 clone 远端仓库并启动 Next.js，因此本轮**没有**冒充完成：

- `pnpm build`；
- `pnpm lint`；
- TypeScript full project check；
- browser runtime；
- 1440×900 screenshot；
- 1440×1200 screenshot；
- 390×844 screenshot；
- local canonical consumer readback。

状态：

```text
SOURCE_SAVED = YES
REMOTE_STRUCTURE_VERIFIED = YES
BUILD_VERIFIED = NO
BROWSER_VERIFIED = NO
MERGED = NO
TARGET_VERIFIED = NO
CONSUMER_VERIFIED = NO
```

## 7. 本机验收前置

本机先读取：

- repo root；
- common-dir；
- branch / HEAD；
- dirty / untracked；
- worktree list；
- active writer；
- canonical consumer source。

然后再决定：

1. 是否直接 checkout 本 source branch；
2. 是否为本任务创建独立 worktree；
3. 是否从最新 integration target 重放本 coherent set。

不要仅因 source branch 存在就直接 merge。

## 8. Semantic Reconciliation Assertions

最终 target 必须 readback：

- `identityCore.manifesto.length === 3`
- `identityCore.constellation.nodes.length === 7`
- `identityCore.becoming.length === 4`
- `identityCore.exits.length === 5`
- `identityVisualFamilies.length === 18`
- `identityVariants.length === 3`
- `identityVisualCount === 54`
- `/lab/identity` 存在；
- dynamic variant route 存在；
- production `app/page.tsx` 未被实验阶段替换；
- Portfolio / Writing unresolved URL 没被擅自编造。

## 9. 下一安全动作

本机只需做：

```text
worktree/readback
→ checkout isolated source
→ pnpm install（若需要）
→ pnpm build
→ pnpm lint
→ browser screenshots
→ report exact SHA
```

若 build / browser 发现问题，继续修本 source branch，不要直接去 main 修。
