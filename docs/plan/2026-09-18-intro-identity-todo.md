# intro.zondev.top — 唯一 Todo / Priority

> 更新时间：2026-09-18  
> Canonical Issue：https://github.com/EOMZON/intro-zondev-top/issues/1  
> Target Architecture：https://github.com/EOMZON/intro-zondev-top/blob/docs/intro-identity-visual-exploration-20260917/docs/architecture/2026-09-18-intro-identity-target-architecture.md  
> Gap Analysis：https://github.com/EOMZON/intro-zondev-top/blob/docs/intro-identity-visual-exploration-20260917/docs/analysis/2026-09-18-intro-identity-gap-analysis.md  
> Visual Atlas：https://github.com/EOMZON/intro-zondev-top/blob/docs/intro-identity-visual-exploration-20260917/docs/design/2026-09-18-intro-identity-visual-exploration.md

## 当前合法状态

```text
DOCS_CANDIDATE_SAVED
VISUAL_LAB_CANDIDATE_SAVED
PRODUCTION_UNCHANGED
BUILD_NOT_VERIFIED
LOCAL_CONSUMER_UNKNOWN
```

## P0 — 先保证不会做偏

- [x] 明确 Personal Identity / About surface
- [x] 明确不是 Resume / Portfolio / Linktree
- [x] 建立 canonical Issue #1
- [x] 建立 cross-repo Context #132
- [x] 建立 18×3 Visual Atlas 规范
- [x] 建立目标架构 Mermaid
- [x] 建立理想 / 现状 Gap
- [ ] 本机核对当前 canonical checkout / common-dir / active branch / dirty tree
- [ ] 本机核对 active writer / 当前 worktree skill 输出
- [ ] 确认 Portfolio / Writing 的真实最终 URL；没有证据则保持 unresolved，不猜域名
- [x] 远端分支事实核对：当前未观察到长期 `test` 分支，不臆造“已进入 test”状态

## P0 — Identity Truth 收敛

- [x] 新建极简 `data/identity-core.ts`
- [ ] 从公开首页移出 work preference / detailed process / project detail
- [x] Lab identity truth：Manifesto ≤3
- [x] Lab identity truth：Constellation 固定 7 nodes
- [x] Lab identity truth：Becoming ≤4 stages
- [x] Lab identity truth：Exits 固定 5（Portfolio / Writing URL 暂保持 unresolved）
- [ ] 保留旧数据作为迁移参考，不直接破坏 production
- [ ] 为新 truth 建 schema / type，避免复用 hiring-oriented schema

## P0 — Worktree / Merge Gate

- [x] docs Source Delivery Manifest 已建立；Visual Lab 单独 manifest 继续补充
- [ ] 一个 integration owner
- [x] task-owned paths 明确：仅新增 identity truth / identity components / visual experiment / lab routes
- [ ] 不与其它 writer 争写共享 target
- [ ] merge 后检查 content / components / styles / routes / tests 是否齐全
- [ ] exact target SHA 固定
- [ ] canonical local checkout 同步
- [ ] local route/browser readback
- [ ] consumer 未验证时禁止标 DONE

关联：
https://github.com/EOMZON/codex-skills-private/issues/29

## P1 — Visual Lab 基础设施

- [x] `components/identity/*`
- [x] `experiments/identity-visual/registry.ts`
- [x] style family tokens
- [x] variant config
- [x] `/lab/identity` index
- [x] `/lab/identity/[style]/[variant]`
- [x] experiment route 与 production root 完全隔离
- [x] 不复制 54 份文案
- [x] 不复制 54 套 JSX

## P1 — 54 个视觉实验

18 families，每个 3 variants。**以下表示代码层第一轮候选已生成并可路由，不代表已完成 browser screenshot / owner review：**

- [x] Quiet Editorial ×3
- [x] Swiss Modernist ×3
- [x] Soft Product Minimal ×3
- [x] Japanese Ma ×3
- [x] Museum Catalogue ×3
- [x] Literary Journal ×3
- [x] Constellation Atlas ×3
- [x] Scientific Field Notes ×3
- [x] Generative Orbit ×3
- [x] Personal Cartography ×3
- [x] Architectural Folio ×3
- [x] Album Sleeve Minimal ×3
- [x] Movement / Rhythm ×3
- [x] Soft Color Field ×3
- [x] Monochrome Typographic ×3
- [x] Black + Pale Green Signal ×3
- [x] Dark Cinematic ×3
- [x] Retro Digital Humanist ×3

## P1 — 视觉证据

- [ ] 1440×900
- [ ] 1440×1200
- [ ] 390×844
- [ ] prefers-reduced-motion
- [ ] keyboard / focus
- [ ] no horizontal overflow
- [ ] contrast baseline
- [ ] no generic SaaS / dashboard drift

## P1 — 筛选

- [ ] 54 → 18
- [ ] 18 → 6
- [ ] 6 → 3
- [ ] 三 finalist 覆盖 Manifesto / Constellation / Becoming
- [ ] owner 选择 winner 或全部 reject
- [ ] winner 前不替换 production

## P2 — Winner Implementation

仅 owner selection 后：

- [ ] 从执行时最新 integration target 派生短期 task branch
- [ ] 建 production composition
- [ ] 删除 lab-only 控件
- [ ] 保留 lab/archive 作为历史证据或按约定归档
- [ ] build
- [ ] lint
- [ ] typecheck
- [ ] responsive QA
- [ ] semantic reconciliation
- [ ] target verification
- [ ] local consumer verification
- [ ] production release PR（需明确授权）
- [ ] deployment readback（需明确授权）

## 不做

- [ ] 不把 Product Hub #98 当 Intro 视觉 owner
- [ ] 不把 Public Portfolio 当 Intro
- [ ] 不增加项目墙
- [ ] 不增加 skill wall
- [ ] 不增加 KPI / achievement
- [ ] 不加 Available for work / Hire me
- [ ] 不在 main 试错
- [ ] 不因为 worktree_count == 1 宣称同步完成
