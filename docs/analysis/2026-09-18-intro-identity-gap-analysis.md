# intro.zondev.top — 理想 / 现状 / Gap 对比

> 更新时间：2026-09-18  
> Canonical Issue：https://github.com/EOMZON/intro-zondev-top/issues/1  
> Target Architecture：https://github.com/EOMZON/intro-zondev-top/blob/docs/intro-identity-visual-exploration-20260917/docs/architecture/2026-09-18-intro-identity-target-architecture.md

## 1. 结论

当前不是“完全错误”，而是**产品定位已经转向 Identity-first，但内容模型和展示密度还没有完全跟上**。

最主要的风险不是视觉不够漂亮，而是：

> 一边说 Not a Resume，一边仍然用大量 sections 解释经历、方法、项目和工作状态。

因此优先级是：

```text
信息职责收紧
> content source 收敛
> semantic component 边界
> visual exploration
> winner implementation
> consumer verification
```

## 2. 现状 vs 理想

| 维度 | 当前 | 理想 | Gap | 优先级 |
|---|---|---|---|---|
| 产品职责 | identity-first 意识已存在 | 只负责认识“人”并分流 | 仍有大量解释型内容 | P0 |
| Hero | “Not a resume” + 大量 identity copy | 一句 statement + 极短 supporting | 信息过多 | P0 |
| Manifesto | 较长段落 | ≤3 条短判断 | 需要压缩 | P0 |
| 兴趣表达 | 5 Rooms 分区解释 | 7-node relationship map | 更像分类说明，不像关系 | P0 |
| Timeline | Lines / current-long-term-ongoing | ≤4-stage Becoming | 仍偏状态/履历式解释 | P1 |
| Projects | 多处 deep link / rooms | 首页不出现项目名 | 仍可滑向 Portfolio | P0 |
| Work preference | schedule / async / environment | 不属于公开 identity 主线 | 应移出首页 | P0 |
| Contact | 多入口 | 5 个最终出口 | 需统一信息层级 | P1 |
| 数据模型 | 存在旧 proof/projects/hiringValue 等 schema | 极简 identity schema | 语义债务 | P0 |
| 视觉系统 | 已有 noir/paper/frame/folio/swiss | 18 families × 3 controlled variants | 现有 theme 是换皮层，不够表达不同视觉世界 | P1 |
| 实验架构 | 生产 renderer 直接承载现有内容 | lab 与 production 隔离 | 缺 Visual Lab | P1 |
| 选择机制 | 无系统 shortlist | 54→18→6→3→1 | 缺 owner-selection pipeline | P1 |
| Git | docs branch 已建立 | task/test/main + reconciliation | 尚未与本地 consumer 对齐 | P0 |
| Consumer | 远端有 branch/docs | 本地实际 route/browser 可验证 | 当前 UNKNOWN | P0 |

## 3. 当前可复用资产

可以保留：

- Next.js 基础工程；
- `app/page.tsx` 的 renderer 入口形式；
- 现有数据 / UI 分离意识；
- theme token 思路；
- `/vision` 等独立页面；
- 已有 typography / responsive 基础；
- 当前独立 docs branch。

不应直接沿用为新 Identity 模型：

- 旧 `proof / projects / hiringValue / metrics / background` schema；
- 5 Rooms 作为公开首页主结构；
- Schedule / Async / Environment 等工作偏好；
- 通过更多内容“证明自己”的方式；
- 仅靠 palette/token 切换生成不同“风格”。

## 4. 最小目标状态

### P0 产品层

```text
Identity Statement
+ 3 Manifesto
+ 7-node Constellation
+ ≤4 Becoming
+ 5 Exits
```

### P0 工程层

```text
single identity truth
+ semantic components
+ style registry
+ variant config
+ lab route
+ production isolation
```

### P1 视觉层

```text
18 families
× 3 variants
= 54
→ screenshots
→ 18
→ 6
→ 3
→ owner winner
```

### P0 交付层

```text
source saved
→ semantically reconciled
→ target verified
→ local consumer updated
→ user visible verified
```

## 5. 当前状态

截至 2026-09-18：

- 产品定位：已明确；
- Visual Atlas 规范：已提交；
- Canonical Issue：已建立；
- Cross-repo Context：已建立；
- Target Architecture：本分支已建立；
- Gap Analysis：本文件；
- Visual Lab：未实现；
- 54 variants：未实现；
- owner shortlist：未开始；
- production winner：未选择；
- main merge：未授权；
- deployment：未授权；
- local consumer：未验证。

因此当前合法状态：

```text
DOCS_CANDIDATE_SAVED
VISUAL_EXPLORATION_NOT_STARTED
PRODUCTION_UNCHANGED
CONSUMER_UNKNOWN
```
