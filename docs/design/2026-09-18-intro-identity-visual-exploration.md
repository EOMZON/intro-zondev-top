# intro.zondev.top — Identity Surface 重构与视觉探索计划

> Date: 2026-09-18  
> Repository: `EOMZON/intro-zondev-top`  
> Working branch: `docs/intro-identity-visual-exploration-20260917`  
> Status: design / information architecture / visual exploration brief

## 0. North Star

`intro.zondev.top` 的唯一职责：

**让第一次到访的人，在很少的信息里理解 Zon 是怎样的人、长期在意什么、这些兴趣为什么彼此相关，然后自然前往更深的内容。**

它是 **Personal Identity / About Surface**。

它不是：

- Resume
- Portfolio
- Linktree
- 项目索引
- 求职 Landing Page
- 技能清单
- 数据仪表盘
- “我做过很多事”的证明页

最终只负责引向五个出口：

1. Portfolio
2. All Projects
3. Writing
4. Music
5. Contact

---

## 1. 当前实现与目标之间的差距

当前仓库已经有正确的 identity-first 意识，但首页数据仍然包含大量解释型内容：

- hero
- manifesto
- 5 个 rooms
- process
- rhythm
- lines
- contact

这些内容单独看都成立，但组合在公共 Intro 首页会重新变成“长篇自我证明”。

### 重构原则

**删除信息，比增加设计更重要。**

公共首页只保留：

- 一句 identity statement
- 一小段 manifesto
- 一张兴趣关系图 / constellation
- 一段极短 becoming / timeline
- 五个最终出口

禁止重新加入：

- 项目卡片墙
- 技术栈
- 公司经历
- 求职指标
- hiring value
- metrics / 数字证明
- 工作时间
- async preference
- 详细生活 routine
- 详细 process
- 详细项目说明
- GitHub activity
- “当前正在做的所有事情”

---

## 2. 固定内容骨架

所有视觉实验必须共享同一套内容骨架。视觉实验只能改变呈现，不得通过扩写内容制造差异。

### Section 1 — Identity

目标：3–8 秒建立人物印象。

建议内容形态：

- ZON / ZONDEV
- 一句短 statement
- 1–2 句 supporting copy
- 可选一个非常轻的状态标记

候选语义：

> I build products, software and personal systems around a more human life.

或：

> Product, software, AI, music, movement — different forms of the same curiosity.

不要出现职位标题堆叠。

### Section 2 — Personal Manifesto

只保留 3 个短判断，每条最好 8–20 个中文词或 6–16 个英文词。

方向：

- Systems should serve life.
- Technology should leave room for being human.
- Practice matters more than identity.
- Build things that can keep growing.
- Curiosity compounds when it becomes practice.

不要做长篇宣言。

### Section 3 — Constellation

固定七个主题节点：

- Product
- Software
- AI
- Creative Work
- Music
- Movement
- Personal Systems

重点不是“七项技能”，而是**七件事之间的关系**。

中心语义可以是：

- A More Human Life
- Making Life More Intentional
- Build / Practice / Express
- Human Systems
- A Life That Can Breathe

节点允许轻量交互，但禁止做成 dashboard。

### Section 4 — Becoming

最多 4 个阶段，每个阶段只允许：

- 1 个时间/阶段标签
- 1 个短标题
- 1 句解释

目标不是履历，而是回答：

**为什么现在会同时做 product / software / AI / creative / music / movement / systems。**

建议抽象阶段：

1. Curiosity — computers, making, music
2. Product — people, interaction, systems
3. Building — software, AI, independent tools
4. Integration — body, creativity, personal systems

不出现完整公司列表。

### Section 5 — Explore Further

固定五个出口，不增加第六个主入口：

- Portfolio — Selected work
- All Projects — Everything I build
- Writing — Notes and ideas
- Music — Sounds and experiments
- Contact — Say hello

允许 footer 出现 GitHub 等次级链接，但它们不能抢占主导航。

---

## 3. 三种信息叙事模型

所有风格应至少能适配以下三种结构之一。

### A. Personal Manifesto

适合：
- 更成熟
- 更少信息
- 文本气质强
- 第一眼先认识“人”

结构：

1. Identity statement
2. 3-line manifesto
3. 轻量 constellation
4. 5 exits

### B. Constellation

适合：
- 解释跨领域兴趣
- 展示 product / AI / music / movement 的相互关系
- 形成独特视觉记忆点

结构：

1. Identity statement
2. Large constellation
3. 2–3 line manifesto
4. mini becoming
5. 5 exits

### C. Timeline / Becoming

适合：
- 让看起来跨度很大的兴趣变得合理
- 强调长期演化而非项目数量

结构：

1. Identity statement
2. 4-stage becoming
3. constellation as conclusion
4. 5 exits

### 最佳实践

不要一开始决定 A/B/C 谁是最终答案。

视觉探索阶段：
- 每个 style family 自己选择最适合 A/B/C 的主结构；
- 三个 variant 中至少有两个使用不同的信息结构；
- 但全部使用同一 content source。

---

## 4. Visual Atlas — 18 个风格族

每个风格族必须完成 **3 个随机但受控的变体**，总计 54 个方向。

“随机”只允许随机：

- typography pairing
- grid proportion
- hero composition
- constellation geometry
- spacing rhythm
- accent placement
- micro-interaction

禁止随机：

- 核心文案
- 导航目标
- 信息层级
- 产品定位

---

### 01. Quiet Editorial / 温暖编辑感

**关键词**  
quiet luxury, editorial, warm paper, restrained, intelligent, spacious

**视觉**
- warm white / ivory
- 极细灰线
- 大量空白
- Serif display + neutral grotesk
- 图片可以没有，靠 typography 成立

**适合**
A Personal Manifesto

**三个变体随机轴**
1. giant serif hero / left aligned
2. asymmetric magazine composition
3. centered literary cover

**避免**
- 杂志拼贴
- 密集小卡片
- lifestyle stock photo
- 过多斜体

---

### 02. Swiss Modernist / 国际主义网格

**关键词**  
Swiss grid, modernist, rational, typographic, international

**视觉**
- white / off-white
- 12-column grid
- black typography
- 单一克制 accent
- 极强 alignment

**适合**
A / C

**三个变体随机轴**
1. strict grid
2. oversized type
3. micro-label + huge whitespace

**避免**
- corporate deck
- red-black cliché
- 信息过密

---

### 03. Soft Product Minimal / 柔和产品感

**关键词**  
premium product, soft spatial, calm technology, human, polished

**视觉**
- light neutral background
- very subtle tint
- soft radius only where needed
- translucent depth extremely restrained
- precise typography

**适合**
B

**三个变体随机轴**
1. floating constellation
2. spatial hero
3. layered translucent map

**避免**
- SaaS landing page
- feature cards
- pricing-page visual language
- glassmorphism overload

---

### 04. Japanese Ma / 间与留白

**关键词**  
ma, silence, space, asymmetry, tactile, contemplative

**视觉**
- warm white
- generous negative space
- small typography paired with one strong phrase
- subtle ink / graphite line
- soft natural rhythm

**适合**
A

**三个变体随机轴**
1. vertical cadence
2. corner-anchored content
3. center void composition

**避免**
- 伪日式符号
- 樱花、浮世绘等装饰性刻板元素
- 过度 zen 文案

---

### 05. Museum Catalogue / 展览图录

**关键词**  
museum catalogue, curatorial, cultural institution, archival, precise

**视觉**
- object-label typography
- catalog numbering
- strong margins
- minimal dividers
- constellation resembles exhibition diagram

**适合**
B / C

**三个变体随机轴**
1. gallery wall
2. catalogue spread
3. exhibition map

**避免**
- 把兴趣做成“作品展览卡片”
- 太多编号
- 过于学术

---

### 06. Literary Journal / 文学刊物

**关键词**  
literary, intimate, essay, human, quiet confidence

**视觉**
- serif-heavy
- narrow reading measure
- handwritten-feeling accents only if subtle
- chapter-like transitions

**适合**
A / C

**三个变体随机轴**
1. journal opening page
2. marginalia layout
3. chapter index

**避免**
- 真实手写字体滥用
- blog article feeling
- 太多正文

---

### 07. Constellation Atlas / 星图地图

**关键词**  
constellation, personal universe, orbit, connected interests, elegant data-art

**视觉**
- central semantic core
- seven nodes
- thin orbital lines
- non-dashboard data visualization
- subtle colored nodes

**适合**
B

**三个变体随机轴**
1. circular orbit
2. irregular star map
3. topographic constellation

**避免**
- network graph software screenshot
- node soup
- neon sci-fi
- 可视化图例过多

---

### 08. Scientific Field Notes / 科学观察笔记

**关键词**  
field notes, observation, research, annotated, precise, curious

**视觉**
- off-white paper
- micro annotations
- diagram + short notes
- mono labels + serif body
- date / specimen-like rhythm

**适合**
B / C

**三个变体随机轴**
1. notebook sheet
2. observation board
3. annotated diagram

**避免**
- fake technical complexity
- engineering dashboard
- excessive labels

---

### 09. Generative Orbit / 生成式轨道

**关键词**  
generative geometry, calm computation, procedural, living system

**视觉**
- mathematical curves
- subtle motion
- nodes drift minimally
- layout feels alive but not flashy

**适合**
B

**三个变体随机轴**
1. orbital curves
2. generative field
3. particle-to-word system

**避免**
- crypto aesthetic
- WebGL spectacle
- performance-heavy background
- interaction that hides content

---

### 10. Personal Cartography / 个人地图

**关键词**  
cartography, map of interests, pathways, terrain, long-term journey

**视觉**
- contour lines
- paths and labels
- symbolic map rather than geographic map
- timeline can become route

**适合**
B / C

**三个变体随机轴**
1. contour map
2. transit-like path
3. island / terrain abstraction

**避免**
- metro map cliché
- literal fake geography
- too many legends

---

### 11. Architectural Folio / 建筑图纸式秩序

**关键词**  
architectural, measured, structural, plans, calm rigor

**视觉**
- thin construction lines
- dimension-like marks used sparingly
- modular proportion
- monochrome / pale green accent

**适合**
B / C

**三个变体随机轴**
1. blueprint-light
2. elevation grid
3. plan + annotation

**避免**
- CAD cosplay
- technical clutter
- blueprint blue cliché unless exceptionally restrained

---

### 12. Album Sleeve Minimal / 唱片封套

**关键词**  
album sleeve, sound, identity, minimal art direction, cultural

**视觉**
- one memorable visual gesture
- typography with musical rhythm
- unusual cropping / alignment
- very limited palette

**适合**
A

**三个变体随机轴**
1. monochrome sleeve
2. warm color field
3. typographic record cover

**避免**
- making Music look like the only identity
- concert poster
- loud gradients

---

### 13. Movement / Rhythm / 身体节奏

**关键词**  
movement, rhythm, balance, weight shift, breathing space

**视觉**
- arcs
- alternating left/right weight
- motion path
- responsive spacing rhythm
- understated kinetic transition

**适合**
A / B

**三个变体随机轴**
1. arc-based
2. wave cadence
3. choreographic grid

**避免**
- dance photography dependency
- sports branding
- literal body silhouettes

---

### 14. Soft Color Field / 柔色场

**关键词**  
soft color field, atmospheric, humane, ambient, contemporary

**视觉**
- cream + pale sage / pale blue / fog lavender
- large blurred or flat color fields
- sharp typography over soft atmosphere

**适合**
A / B

**三个变体随机轴**
1. sage field
2. powder blue field
3. neutral + lavender haze

**避免**
- candy pastel
- gradient SaaS
- low contrast accessibility issues

---

### 15. Monochrome Typographic / 黑白文字主导

**关键词**  
typographic identity, black white, confident, graphic, reduced

**视觉**
- no decorative illustration
- scale contrast carries composition
- hard black + soft white
- labels / punctuation as graphic material

**适合**
A

**三个变体随机轴**
1. huge type
2. stacked sentences
3. diagonal / offset typography

**避免**
- poster shouting
- brutalism for its own sake
- illegible text

---

### 16. Black + Pale Green Signal / 黑绿信号

**关键词**  
black green, elegant signal, systems, restrained future, high contrast

**视觉**
- deep charcoal
- pale mint / sage signal
- thin borders
- calm mono metadata
- very limited glow

**适合**
B

**三个变体随机轴**
1. signal grid
2. dark constellation
3. quiet terminal/editorial hybrid

**避免**
- Matrix
- hacker
- cyberpunk
- luminous neon

---

### 17. Dark Cinematic / 暗色电影感

**关键词**  
cinematic, quiet night, introspective, premium, atmospheric

**视觉**
- near-black
- soft grey type
- one warm or cool accent
- slow fade / reveal
- large negative space

**适合**
A / C

**三个变体随机轴**
1. title-card
2. dark horizon
3. scene-chapter layout

**避免**
- streaming-service UI
- movie poster clichés
- dramatic portrait dependency

---

### 18. Retro Digital Humanist / 人文数字怀旧

**关键词**  
early web, humane computing, retro digital, personal internet, crafted

**视觉**
- simple web primitives
- mono + humanist sans
- modest bitmap-like detail
- clear hyperlinks
- intentionally personal

**适合**
A / B

**三个变体随机轴**
1. early-web refined
2. personal computer notebook
3. retro UI fragments + editorial spacing

**避免**
- pixel-art gimmick
- Windows/Mac clone
- nostalgic clutter
- geocities parody

---

## 5. 推荐探索优先级

### Tier 1 — 最符合当前 Identity 目标

优先认真比较：

- 01 Quiet Editorial
- 03 Soft Product Minimal
- 04 Japanese Ma
- 07 Constellation Atlas
- 10 Personal Cartography
- 13 Movement / Rhythm
- 14 Soft Color Field
- 16 Black + Pale Green Signal

### Tier 2 — 用于扩大视觉边界

- 02 Swiss Modernist
- 05 Museum Catalogue
- 06 Literary Journal
- 08 Scientific Field Notes
- 11 Architectural Folio
- 12 Album Sleeve Minimal
- 15 Monochrome Typographic
- 17 Dark Cinematic
- 18 Retro Digital Humanist

注意：仍然要完成全部 18 × 3，不得只做 Tier 1。

---

## 6. 54 个版本如何组织

不要复制 54 套业务代码。

建议：

```text
data/
  identity-core.ts

components/
  identity/
    IdentityShell.tsx
    IdentityHero.tsx
    Manifesto.tsx
    Constellation.tsx
    Becoming.tsx
    ExitLinks.tsx

experiments/
  identity-visual/
    registry.ts
    styles/
      quiet-editorial.ts
      swiss-modernist.ts
      ...
    variants/
      generated-seeds.ts

app/
  lab/
    identity/
      page.tsx
      [style]/
        [variant]/
          page.tsx
```

### 数据 / UI / 风格必须分离

- `identity-core.ts`: 唯一事实源
- components: 语义组件
- registry: 风格注册表
- style tokens: 颜色、字体、spacing、layout 参数
- variant: 只保存视觉参数，不保存另一份文案
- lab route: 比较用
- production `/`: 最终只保留获胜版本，不带 style switcher

不得把 54 套 JSX 复制 54 次。

---

## 7. 视觉实验规则

每个版本必须同时截图：

- Desktop: 1440×900
- Desktop tall: 1440×1200
- Mobile: 390×844

每个版本至少检查：

- 3 秒内是否理解“这是一个人，不是一个公司”
- 是否像 Resume
- 是否像 Portfolio
- 是否像 Linktree
- 是否出现信息墙
- constellation 是否是关系而非技能图
- 是否能自然找到五个出口
- mobile 是否仍保持气质
- 动效关闭后是否成立
- `prefers-reduced-motion` 是否正常
- WCAG 基本对比度
- keyboard focus
- no horizontal overflow

---

## 8. 选择方法

第一轮不要直接选最终稿。

### Round 1 — 删除明显错误方向

54 → 18

每个 style family 留 1 个。

### Round 2 — 跨风格比较

18 → 6

保留真正有“人物感”的版本，而不是最炫的版本。

### Round 3 — 深化

6 → 3

三个 finalist 至少分别代表：

- text / manifesto-first
- constellation-first
- becoming-first

### Round 4 — production

3 → 1

最终生产稿：
- 删除所有 lab-only 控件
- 删除视觉切换器
- 删除 debug metadata
- production 首页只保留一个明确版本

---

## 9. 评估维度

每项 1–5 分，只用于设计比较，不作为人的评价。

- Identity clarity
- Distinctiveness
- Emotional resonance
- Cross-domain coherence
- Restraint
- Readability
- Navigation clarity
- Mobile quality
- Performance
- Maintainability

额外一票否决问题：

> 如果把名字遮掉，这是不是又变成一个通用 AI/SaaS 模板？

如果答案是“是”，淘汰。

---

## 10. 不可违反的 Anti-patterns

禁止：

- Bento dashboard
- 项目卡片瀑布流
- 技术栈 logo wall
- Resume timeline
- 统计数字
- achievement metrics
- “Available for work”
- current job-search language
- hire me CTA
- testimonial
- giant avatar as the only identity device
- fake 3D
- random glowing sphere
- excessive glassmorphism
- neon cyberpunk
- generic purple AI gradient
- generic SaaS hero
- 过多 icon
- 过多 chips
- 过多 hover toy
- 每个 section 都装进 card
- 用不同内容伪造“视觉差异”

---

## 11. Execution Prompt

本文件的绝对 GitHub 链接：

https://github.com/EOMZON/intro-zondev-top/blob/docs/intro-identity-visual-exploration-20260917/docs/design/2026-09-18-intro-identity-visual-exploration.md

复制以下提示词给执行 AI：

```text
开目标模式完成所有风格尝试 每个三种随机风格

目标仓库：
https://github.com/EOMZON/intro-zondev-top

必须先完整阅读并严格遵守：
https://github.com/EOMZON/intro-zondev-top/blob/docs/intro-identity-visual-exploration-20260917/docs/design/2026-09-18-intro-identity-visual-exploration.md

当前产品定位：
重构 intro.zondev.top。

这是 Personal Identity / About surface。
不是 Resume。
不是 Portfolio。
不是 Linktree。
不是求职 landing page。
不是项目目录。

核心目标：
让访问者用很少的信息理解这个人的长期兴趣交汇：
- product
- software
- AI
- creative work
- music
- movement
- personal systems

最终页面只负责把访问者引向：
- Portfolio
- All Projects
- Writing
- Music
- Contact

不要重新列所有项目。

====================
一、先做现状审计
====================

1. 阅读 README、app/page.tsx、当前首页 renderer、data/sites/intro-personal.ts、相关 schema/theme。
2. 查看最近提交，理解当前数据/UI/主题分离方式。
3. 不要因为现有实现已经写了 “Not a resume” 就假设信息架构已正确。
4. 特别检查并标记仍带 Resume / Portfolio / 求职语义的结构，例如：
   - proof
   - projects
   - hiringValue
   - metrics
   - background
   - work preference
   - detailed process
5. 在不破坏现有生产首页的前提下开展视觉实验。
6. 不要直接在 main 上大改。
7. 使用独立分支，保留清晰 commit history。

====================
二、先冻结 Identity Content
====================

创建单一、极简的 identity content source。

内容只允许：
1. identity statement
2. 3 条以内 manifesto
3. 七节点 constellation
4. 最多四阶段 becoming
5. 五个 primary exits
6. 极少 footer metadata

七节点固定：
Product
Software
AI
Creative Work
Music
Movement
Personal Systems

不得为不同视觉版本复制或改写不同文案。
视觉测试必须比较视觉，而不是比较不同内容。

如果 Portfolio / Writing 等最终 URL 在仓库里没有证据：
不要编造域名。
把 destination 配置成显式 TODO / unresolved config，并记录待确认项。

====================
三、数据、组件、视觉参数分离
====================

按最佳实践组织：

- content/data = identity truth
- semantic components = reusable structure
- style registry = visual family
- variant config = controlled randomization
- lab routes = exploration only
- production root = final chosen design only

不要复制 54 套 JSX。
不要创建 54 份 content。
不要把大量 style 条件 if/else 塞进单一组件。

优先形成类似：

data/identity-core.ts

components/identity/
  IdentityShell
  IdentityHero
  Manifesto
  Constellation
  Becoming
  ExitLinks

experiments/identity-visual/
  registry
  style tokens
  variant configs

app/lab/identity/[style]/[variant]

如果现有架构有更合理命名，可以调整，但必须保持：
数据 / 语义组件 / 风格 / variant 分离。

====================
四、完成全部视觉风格探索
====================

必须完成规范文件定义的全部 18 个 style family：

01 Quiet Editorial
02 Swiss Modernist
03 Soft Product Minimal
04 Japanese Ma
05 Museum Catalogue
06 Literary Journal
07 Constellation Atlas
08 Scientific Field Notes
09 Generative Orbit
10 Personal Cartography
11 Architectural Folio
12 Album Sleeve Minimal
13 Movement / Rhythm
14 Soft Color Field
15 Monochrome Typographic
16 Black + Pale Green Signal
17 Dark Cinematic
18 Retro Digital Humanist

每个 family 必须做 3 个随机但受约束的变体。
总计 54 个。

随机只用于：
- typography pairing
- grid proportion
- hero composition
- constellation geometry
- spacing rhythm
- accent placement
- micro interaction

禁止随机：
- 核心内容
- 导航结构
- 产品定位
- 主出口
- 信息优先级

每个 family 的 3 个版本必须肉眼明显不同，但仍能看出属于同一个风格家族。

尽量让三个版本覆盖不同叙事：
A Personal Manifesto
B Constellation
C Timeline / Becoming

不要为了完成数量做 3 个几乎一样的换色版本。

====================
五、视觉总原则
====================

目标气质：
- refined
- international
- fashion-aware but not magazine collage
- calm
- intelligent
- personal
- warm
- contemporary
- restrained
- high craft

需要：
- 大量有意图的留白
- 清晰 typographic hierarchy
- 大标题，但避免营销感
- 细边界 / 细线
- 少阴影
- 少卡片
- meaningful motion only
- desktop 与 mobile 都完整
- 默认不过度使用图片
- 图形必须帮助表达“兴趣之间的关系”

特别偏好可以探索：
- 黑白 + 淡绿色
- warm ivory + graphite
- very pale blue
- sage
- near-black + pale signal green

不要：
- 大红色
- 通用紫色 AI gradient
- neon cyberpunk
- generic SaaS
- Bento card wall
- dashboard
- excessive rounded cards
- glassmorphism overload
- emoji
- tech-logo wall
- 视觉噪音
- “每一块都一个容器”

====================
六、Constellation 要求
====================

Constellation 是个人兴趣地图，不是 skill graph。

必须表达：
Product ↔ Software ↔ AI
Creative Work ↔ Music
Movement ↔ body / rhythm
Personal Systems ↔ all of the above

中心语义可以探索：
- A More Human Life
- Human Systems
- Build / Practice / Express
- A Life That Can Breathe

允许：
- orbit
- paths
- contour
- nodes
- editorial diagram
- restrained generative motion

禁止：
- force-directed graph 乱跳
- dashboard legend
- 节点过多
- skill percentage
- scoring

====================
七、Timeline / Becoming 要求
====================

它不是 Resume 时间线。

最多四阶段：
1. curiosity
2. product
3. building
4. integration

只解释“为什么成为现在这个人”。

不要：
- 完整公司名
- 完整职位
- 工作年份堆叠
- 项目业绩
- KPI

====================
八、交互与工程质量
====================

所有实验必须：
- semantic HTML
- responsive
- keyboard usable
- focus visible
- prefers-reduced-motion
- no horizontal overflow
- avoid hydration hacks
- avoid unnecessary client components
- avoid heavy animation libraries unless justified
- no production dependency explosion
- reasonable Lighthouse performance

动效原则：
slow / quiet / purposeful

例如：
- constellation line draw
- node drift 1–3px
- subtle parallax
- staggered text reveal
- hover relation highlight

不要：
- bouncing
- spring toy motion everywhere
- cursor gimmicks
- scroll hijacking

====================
九、截图与视觉评审
====================

每一个候选至少截图：
- 1440×900
- 1440×1200
- 390×844

建立 visual index 页面：
能同时看到 54 个缩略图或清晰入口，
支持按 style family 查看 3 variants，
但不要把这个 index 合到正式首页。

为每个 variant 标明：
- family
- variant
- content model A/B/C
- light/dark
- key visual idea

第一轮从每个 family 留 1 个：54 → 18。
第二轮：18 → 6。
第三轮深化：6 → 3。
最后才决定 production 版本。

不要一开始自行挑一个然后停止其余探索。

====================
十、判断标准
====================

核心问题：

1. 第一次打开 3 秒内，能否感到“这是一个人”？
2. 是否理解这个人长期关心的是 product / software / AI / creativity / music / movement / personal systems 的交汇？
3. 是否没有 Resume 感？
4. 是否没有 Portfolio 项目墙感？
5. 是否没有 Linktree 感？
6. 是否克制？
7. 是否具有个人记忆点？
8. 是否自然引向五个 deeper surfaces？
9. mobile 是否仍然高级？
10. 如果遮掉名字，是否会退化成通用 AI/SaaS 模板？

最后一条如果答案为“会”，该方案淘汰。

====================
十一、版本治理
====================

建议提交至少拆为：

1. docs: capture identity surface redesign brief
2. refactor: isolate minimal identity content model
3. feat: add identity visual experiment registry
4. feat: add first style families
5. feat: complete visual atlas variants
6. test: add responsive/accessibility checks
7. docs: add visual comparison index and findings
8. refine: shortlist 18
9. refine: shortlist 6
10. refine: finalist 3

不要把所有内容压成一个巨大 commit。

不要直接删除旧版本。
先保留可回退点 / tag / branch history。

====================
十二、完成定义
====================

只有以下全部满足才算完成本轮：

- 18 个 family 全部存在
- 每个 family 3 个 variant
- 共 54 个视觉尝试
- 所有版本共享同一 identity source
- 有 visual index
- 有 desktop + mobile 截图
- 有 54→18 初筛
- 有 18→6 二筛
- 有 6→3 finalist
- 有评审理由
- 没有把 production 首页提前替换成未经选择的随机方案
- build / lint / typecheck 通过
- 关键响应式和可访问性检查通过
- 提交历史清晰
- 文档更新
- 最终输出所有 GitHub 文件链接、commit 链接、截图证据

执行时持续对照最初定位：
Personal Identity / About surface。
不是 Resume。
不是 Portfolio。
不是 Linktree。

内容必须少。
不要因为实现能力强就把页面再次做复杂。
```

---

## 12. Production 内容预算

为了防止重构过程中再次膨胀，正式首页建议设硬预算：

- hero supporting copy: ≤ 45 English words 或 ≤ 80 中文字
- manifesto: ≤ 3 条
- constellation: 7 nodes exactly
- timeline: ≤ 4 stages
- primary exits: 5 exactly
- main page primary CTA buttons: ≤ 2
- major sections: ≤ 5
- cards: 尽量 0；必要时 ≤ 5
- visible project names: 0
- visible employer names: 0
- visible KPI: 0

---

## 13. 最终判断

这次重构成功的标志不是“页面更漂亮”。

而是：

> 访问者不需要看完很多项目，就已经对这个人形成清晰、独特、可继续探索的印象。

Intro 负责 Identity。

Portfolio 负责 selected proof。

All Projects 负责 breadth。

Writing 负责 thinking。

Music 负责 sound / creative expression。

Contact 负责 conversation。

边界越清楚，整个 `zondev.top` 体系越高级。
