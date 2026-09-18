# Intro Identity — Source Delivery Manifest

> 创建：2026-09-18  
> Source branch：`docs/intro-identity-visual-exploration-20260917`  
> Canonical Issue：https://github.com/EOMZON/intro-zondev-top/issues/1  
> Merge Reconciliation Owner：https://github.com/EOMZON/codex-skills-private/issues/29

## 1. Source intent

本 source 只负责：

- Identity Surface 产品定位；
- Visual Atlas 设计规范；
- Target Architecture / Mermaid；
- Current vs Target Gap；
- Canonical Todo；
- Cloud / Local Handoff；
- Worktree / Consumer Gate。

本 source **不负责**：

- production 首页替换；
- main merge；
- deployment；
- local consumer 更新；
- 54 个视觉实现本身。

## 2. Task-owned paths

```text
docs/design/2026-09-18-intro-identity-visual-exploration.md
docs/architecture/2026-09-18-intro-identity-target-architecture.md
docs/analysis/2026-09-18-intro-identity-gap-analysis.md
docs/plan/2026-09-18-intro-identity-todo.md
docs/handoff/2026-09-18-intro-identity-mainline-handoff.md
docs/governance/2026-09-18-intro-identity-source-delivery-manifest.md
```

## 3. Source commits

| 内容 | Commit |
|---|---|
| Visual Atlas / execution brief | `aff778aae836a4b33dd5ac65670debbc23ed4b94` |
| Target Architecture / Mermaid | `76c8e257b1a5503b2c37b2dee336acafc91efda7` |
| Current vs Target Gap | `50491eadf50d16b055e74fd17a3f4b16f6384f1f` |
| Canonical Todo | `bc109e4b52a872765272bca52c40e442dd190a23` |
| Cloud / Local Handoff | `072e700ecfdf57a8e25d0f52bf15fbebfaa47ec3` |

## 4. Required semantic assertions

目标 target 在吸收本 source 后必须仍然能回答：

1. Intro 是 Personal Identity / About surface；
2. Intro 不是 Resume / Portfolio / Linktree；
3. 最终主出口严格是 Portfolio / All Projects / Writing / Music / Contact；
4. Identity 内容预算仍存在；
5. 18 families × 3 variants = 54 的探索约束仍存在；
6. 54→18→6→3→1 的 owner selection 流程仍存在；
7. data / semantic component / style / variant 分离；
8. winner 前不替换 production；
9. merge 后必须 consumer readback；
10. Product Hub 只保存跨仓 pointer，不成为 Intro owner。

任何一条静默丢失，都不能标 `MERGED_EQUIVALENT`。

## 5. Expected target

当前未指定一个已授权的 integration target SHA。

治理上应在执行时重新读：

- latest `main`；
- 是否已经建立长期 `test`；
- active writer；
- 本机 canonical checkout；
- remote branches。

因此这里不预填一个未来会过期的 target SHA。

## 6. Timeline

### 2026-09-18 / T0 — Position locked

完成：

- Personal Identity / About 定位；
- 非 Resume / Portfolio / Linktree 边界；
- 5 个 deeper surfaces。

### 2026-09-18 / T1 — Docs candidate saved

完成：

- Visual Atlas；
- Architecture；
- Gap；
- Todo；
- Handoff；
- Canonical Issue；
- Product Hub context。

当前状态：

```text
SOURCE_SAVED
DOCS_CANDIDATE_SAVED
```

### T2 — Local readiness gate

待完成：

- worktree / branch / dirty / active writer；
- canonical consumer SHA；
- task-owned paths。

### T3 — Visual Lab implementation

待完成：

- minimal identity truth；
- semantic components；
- registry；
- lab routes；
- 54 variants。

### T4 — Owner selection

待完成：

```text
54 → 18 → 6 → 3 → 1
```

### T5 — Winner integration

待完成：

- target reconciliation；
- build / lint / typecheck；
- responsive / accessibility；
- exact target SHA。

### T6 — Consumer acceptance

待完成：

- canonical checkout sync；
- actual local/browser readback；
- final screenshots；
- only then `CONSUMER_VERIFIED`.

## 7. Reconciliation states

当前只能声称：

```text
SOURCE_SAVED = YES
MERGED = NO / NOT AUTHORIZED
SEMANTICALLY_RECONCILED = NO
TARGET_VERIFIED = NO
CONSUMER_UPDATED = UNKNOWN
USER_VISIBLE_VERIFIED = NO
```

## 8. Exit gate

本 source branch / worktree 未来退出前：

- source 有远端 ref；
- 所有 task-owned paths 有 target 去向；
- required semantic assertions 全部 readback；
- target exact SHA 固定；
- target verification 完成；
- consumer state 明确；
- 无 ignored/untracked 唯一资产；
- 无 active writer/process 依赖 source tree。

否则不得只因“已经 merge”或“只剩一个 worktree”退出。
