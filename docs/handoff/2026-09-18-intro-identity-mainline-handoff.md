# intro.zondev.top — 云端 / 本机执行 Handoff

> 更新时间：2026-09-18  
> Canonical Issue：https://github.com/EOMZON/intro-zondev-top/issues/1  
> Cross-repo Context：https://github.com/EOMZON/creationos-os/issues/132  
> Git Governance：https://github.com/EOMZON/codex-skills-private/blob/9a8e385ccc98f068b0990133f9a2e80681ffa9ec/github-ops/references/test-main-governance.md  
> Merge Reconciliation：https://github.com/EOMZON/codex-skills-private/issues/29

## 1. 云端现在可以安全做什么

适合云端独立推进：

- docs / issue / architecture；
- style family contract；
- identity schema 草案；
- visual registry 设计；
- 静态、完全隔离的实验分支代码；
- 不依赖本地 secret / installed app / runtime 的纯前端实现；
- review / comparison / shortlist 文档。

前提：

- 不直接写 main；
- 不覆盖活跃 shared target；
- 不声称本地 consumer 已更新；
- 不触发生产部署。

## 2. 哪些必须本机确认后再做

以下内容需要本机 worktree / consumer 事实：

- canonical checkout 当前在哪；
- `git rev-parse --show-toplevel`；
- `git rev-parse --git-common-dir`；
- 当前 branch / HEAD；
- dirty / untracked / ignored 唯一资产；
- worktree list；
- 是否有 active writer；
- 本地实际 `intro.zondev.top` 启动来源；
- production/local consumer 当前消费哪个 SHA。

## 3. 单 worktree skill 的真实风险

“只剩一个 worktree”只说明物理目录收敛，不证明成果完整。

必须继续核对：

```text
source branch content
→ target semantic reconciliation
→ exact target validation
→ canonical checkout sync
→ local runtime/browser
```

典型失败：

- merge 解决冲突时只保留一侧；
- squash 后 ancestry 看不到语义丢失；
- target 在测试后继续前进；
- 代码已合但 data/schema/style 没一起迁移；
- 本地 canonical checkout 仍停在旧 SHA；
- 旧进程仍运行旧 build；
- worktree 删除后才发现唯一资产只在本地树。

## 4. 推荐 writer 策略

### 云端 Writer A — Docs / Visual Research

可与其它业务 writer 并行。

只写：

```text
docs/**
issues
isolated visual research artifacts
```

### 本机 Writer B — Visual Lab / Identity Components

开始前先核 worktree。

建议 task-owned paths：

```text
data/identity-core.ts
components/identity/**
experiments/identity-visual/**
app/lab/identity/**
```

避免碰：

```text
production root /
shared unrelated components
unrelated routes
deployment config
```

### Integration Owner

唯一负责：

- 吸收 task branch；
- 处理 target moved；
- semantic reconciliation；
- 运行最终验证；
- 同步 canonical checkout；
- consumer readback。

## 5. 本机第一轮命令目标

不是让本机立刻实现 54 个版本。

第一轮只收事实：

```text
repo root
common dir
HEAD
branch
remote
status
worktree list
active writer
local runtime source
```

确认后再开始 code writer。

## 6. Definition of Ready for Implementation

必须同时满足：

- [ ] 当前本机 branch / worktree 清楚
- [ ] 无未知 dirty 冲突
- [ ] active writer 清楚
- [ ] task-owned paths 明确
- [ ] source delivery manifest 位置明确
- [ ] visual docs 已读
- [ ] canonical Issue #1 已读
- [ ] production stop line 已读

## 7. Definition of Complete

不能只写“代码完成”。

需要：

```text
SOURCE_SAVED
MERGED_EQUIVALENT / SUPERSEDED_WITH_EVIDENCE
TARGET_VERIFIED
CONSUMER_VERIFIED
USER_VISIBLE_VERIFIED
```

截图必须来自实际最终 consumer，而不是仅 source branch 的临时页面。

## 8. 当前建议

目前最适合继续云端做的是：

1. docs / issue / architecture 固化；
2. 视觉 Atlas 的隔离实验基础设施（若确认无人同时写同路径）；
3. 不进入 production winner implementation。

本机下一步只负责先证明“当前到底消费哪一个 SHA”，再开始大规模视觉实现。
