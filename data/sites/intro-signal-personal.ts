import { signalHomeDocumentSchema } from '@/data/signal-home-schema';

const bi = (en: string, zh: string) => ({ en, zh });

export const introSignalPersonalDocument = signalHomeDocumentSchema.parse({
  title: 'Zon · Soul Archive',
  description:
    'A signal frame for an independent LifeOS observer who layers music, movement, and tools into a living story.',
  mark: 'ZON',
  preheader: {
    studio: bi('LifeOS Archive', 'LifeOS 档案'),
    timezone: bi('Asia/Shanghai UTC+8', '亚洲/上海 UTC+8'),
    locations: [bi('Shanghai + homespun remote', '上海 + 弹性远程')],
  },
  masthead: {
    summary: bi(
      'Music · Latin · LifeOS Rituals · Tooling · Independent Work',
      '音乐 · 拉丁 · LifeOS 习惯 · 工具 · 自主实践'
    ),
    nav: [
      { label: bi('Home', '首页'), href: '#top' },
      { label: bi('Vision', '愿景'), href: '/vision' },
      { label: bi('LifeOS', 'LifeOS'), href: '#lifeos' },
      { label: bi('Practices', '习惯'), href: '#practice' },
      { label: bi('Works', '作品'), href: '#case-studies' },
      { label: bi('Contact', '联系'), href: '#contact' },
    ],
    socials: [
      {
        label: bi('Music Board', '音乐板块'),
        href: 'https://music.zondev.top/',
        note: bi('archive of songs & scores', '音乐与创作档案'),
      },
      {
        label: bi('Board', 'Board'),
        href: 'https://board.zondev.top/',
        note: bi('research & personal experiments', '研究与实验记录'),
      },
    ],
  },
  hero: {
    eyebrow: bi('Soul Archive', '灵魂档案'),
    titleLines: ['ZON', 'LIFEOS', 'RHYTHMS', 'SYSTEMS'],
    subtitleRows: [
      [bi('Music-technology hybrid', '音乐 × 技术的结合')],
      [bi('Latin practice sets the body', '拉丁让身体清醒')],
      [bi('Tools keep curiosity grounded', '工具让好奇不至流散')],
    ],
    statement: bi(
      'I treat each day like a LifeOS entry: a mix of sound, movement, and tooling calibrated by calm observation.',
      '我把每一天当成一个 LifeOS 条目：结合声音、身体与工具，在沉稳觉察中调频。'
    ),
    actions: [
      {
        label: bi('Vision', '人生愿景'),
        href: '/vision',
      },
      {
        label: bi('Decision OS', '决策系统'),
        href: '/where-i-win',
      },
      {
        label: bi('Current Rhythm', '当前节奏'),
        href: '#lifeos',
      },
      {
        label: bi('Browse Works', '打开作品'),
        href: '#case-studies',
      },
    ],
    heroMetrics: [
      { label: bi('Pillars', '基石'), value: bi('Health · Latin · Creation', '健康 · 拉丁 · 创作') },
      { label: bi('Pace', '节奏'), value: bi('steady rituals · monthly experiments', '稳定习惯 · 月度实验') },
      { label: bi('Evidence', '证据'), value: bi('journal logs · prototypes', '日志 · 原型') },
      { label: bi('Tone', '语气'), value: bi('honest · calm · process-first', '真实 · 克制 · 过程优先') },
    ],
  },
  spotlight: {
    eyebrow: bi('LifeOS Lens', 'LifeOS 透镜'),
    title: bi(
      'Every signal starts at the daily journal: I trace a week, map the stress, and tune the next move.',
      '所有信号始于每日日志：我跟踪一周节奏、标出压力，再调整下一步。'
    ),
    summary: bi(
      'The archive is less about accomplishments and more about what still feels alive—health, dance, writing, automation.',
      '这个档案不是层级化成果，而是哪些事情仍旧有生命力：健康、舞蹈、写作、自动化。'
    ),
    items: [
      {
        label: bi('Phase', '阶段'),
        detail: bi('From hospital checks to Latin rehearsals to midnight prototyping.', '从体检到拉丁排练再到深夜原型。'),
      },
      {
        label: bi('Signal', '信号'),
        detail: bi('Listening for fatigue, curiosity, the urge to make a short film, or a new script.', '聆听疲惫、好奇、拍短片的冲动或新的剧本灵感。'),
      },
      {
        label: bi('Response', '回应'),
        detail: bi('Course-correct with coffee metrics, new playlists, or an automated publishing loop.', '用咖啡量、歌单、自动发布流程做调整。'),
      },
    ],
    metrics: [
      {
        label: bi('Rhythm checks', '节奏复盘'),
        value: bi('Weekly · journaled & visualized', '每周记录 · 可视化'),
      },
      {
        label: bi('Health notes', '健康记录'),
        value: bi('lab entries · breathing & dance', '化验 + 呼吸与舞动'),
      },
    ],
  },
  caseStudies: {
    eyebrow: bi('Works in Progress', '在做的事'),
    title: bi('Selected archives and experiments that anchor the LifeOS story.', '一些固定在 LifeOS 故事里的档案与实验。'),
    items: [
      {
        slug: 'lifeos-archive',
        index: '01 · LifeOS',
        category: bi('Life Systems', '生命系统'),
        title: bi('LifeOS Archive', 'LifeOS 档案站'),
        summary: bi(
          'Summaries, automations, and dashboards for health, creative projects, and daily decisions.',
          '把健康、创作、日常决策的摘要、自动化与看板都放在一个可追踪的系统里。'
        ),
        hiringValue: bi('Maintains continuity when rhythm is the primary output.', '在节奏即成果的前提下保持连贯。'),
        href: 'https://board.zondev.top/',
        recognitions: [bi('systems attention', '系统意识'), bi('curiosity guardrails', '好奇刹车')],
        scope: [
          bi('journals → experiments → reflection', '日志 → 实验 → 反思'),
          bi('Dataview boards & scripts', 'Dataview 看板与脚本'),
          bi('public-ready summaries', '可对外摘要'),
        ],
        tone: 'linen',
      },
      {
        slug: 'latin-practice',
        index: '02 · Latin',
        category: bi('Body Practice', '身体实践'),
        title: bi('Latin Practice Route', '拉丁实践路径'),
        summary: bi(
          'A growing route for movement practice, dance notes, rhythm awareness, and the long arc of body training.',
          '关于身体练习、舞蹈笔记、节奏意识与长期训练弧线的持续入口。'
        ),
        hiringValue: bi('Shows how the body remains part of the system instead of a side note.', '说明身体不是附属项，而是系统的一部分。'),
        href: 'https://allprojects.zondev.top/projects/latindance',
        recognitions: [bi('body as archive', '身体档案'), bi('steady rehearsal', '持续排练')],
        scope: [
          bi('movement notes & drills', '动作笔记与练习'),
          bi('rhythm → posture → reflection', '节奏 → 姿态 → 反思'),
          bi('future teaching / self-learning system', '未来课程 / 自学体系'),
        ],
        tone: 'oxide',
      },
      {
        slug: 'music-board',
        index: '03 · Music',
        category: bi('Sound Practice', '声音练习'),
        title: bi('Music Board', '音乐板块'),
        summary: bi(
          'Playlists, cover systems, AI music trials, and the songs that help me keep time with myself.',
          '歌单、封面系统、AI 音乐实验，以及那些帮我重新对时的歌。'
        ),
        hiringValue: bi('Keeps the inner soundtrack visible instead of hidden behind work output.', '把内在配乐公开，而不是藏在工作产出背后。'),
        href: 'https://music.zondev.top/',
        recognitions: [bi('playlist thinking', '歌单思维'), bi('sound as memory', '声音即记忆')],
        scope: [
          bi('albums · playlists · mood boards', '专辑 · 歌单 · 情绪板'),
          bi('AI music experiments', 'AI 音乐实验'),
          bi('notes for future releases', '未来发行笔记'),
        ],
        tone: 'mist',
      },
      {
        slug: 'tools-atelier',
        index: '04 · Tools',
        category: bi('Independent Tools', '独立工具'),
        title: bi('Tools Atelier', '工具工坊'),
        summary: bi(
          'Prompt-hubs, dashboards, and publishing loops built to keep curious tasks shipping.',
          '将好奇任务拆成 prompt 板块、看板、发布链路，持续出包。'
        ),
        hiringValue: bi('Proof that tooling can stay light and dependable.', '证明工具既轻量又可靠。'),
        href: 'https://prompt.zondev.top/',
        recognitions: [bi('curious usability', '好奇可用性'), bi('looped publishing', '循环发布')],
        scope: [
          bi('prompt hub · batch dispatch', '提示词中心 · 批量发布'),
          bi('automation glue scripts', '自动化粘合脚本'),
          bi('notes → prototype → publish', '笔记 → 原型 → 发布'),
        ],
        tone: 'graphite',
      },
    ],
    archiveLink: {
      label: bi('Browse the archive', '浏览档案'),
      href: 'https://allprojects.zondev.top/',
      note: bi('All public routes and experiments', '全部公开入口与实验'),
    },
  },
  excerpt: {
    eyebrow: bi('Statement', '声明'),
    statement: bi(
      'I build with the same care I give my body: measured, repeatable, honest.',
      '我对作品的态度跟对身体的照料一样：有度、可复刻、真实。'
    ),
    supporting: bi(
      'This is a place to trace what keeps me grounded rather than a portfolio of accolades.',
      '这里记录的是让我有根的事情，而不是荣耀的展示。'
    ),
  },
  recognitions: {
    eyebrow: bi('Signals', '信号'),
    title: bi('What stays steady when the rest of the world accelerates.', '世界加速时依然平稳的标记。'),
    items: [
      {
        label: bi('Health', '健康'),
        value: bi('scans, movement, restorative pause', '检查 · 身体 · 恢复'),
      },
      {
        label: bi('Autonomy', '自主'),
        value: bi('tools that serve curiosity, not chasing traction', '为好奇服务的工具，而非吸引流量'),
      },
      {
        label: bi('Presence', '在场'),
        value: bi('dance, music, living rooms, notebooks', '舞蹈 · 音乐 · 生活 · 笔记'),
      },
      {
        label: bi('Sharing', '分享'),
        value: bi('useful, non-performative, rooted in the thing itself', '有用、不表演、回到事物本身'),
      },
    ],
    aboutLink: {
      label: bi('Read more LifeOS notes', '阅读更多 LifeOS 记录'),
      href: 'https://board.zondev.top/',
      note: bi('Public notes and experiment logs', '公开笔记与实验日志'),
    },
  },
  practice: {
    eyebrow: bi('Practice', '实践'),
    title: bi('How I work', '我的工作方式'),
    systemNote: bi(
      'Value calibrations, quarterly experiments, daily reflections keep connections between goals and actions alive.',
      '价值校准、季度实验、每日反思确保目标与行动不断联通。'
    ),
    paragraphs: [
      bi(
        'A yearly value ceremony checks which direction feels like “mastery without sacrifice.”',
        '年终价值仪式核查哪些方向是“精进而不损耗”。'
      ),
      bi(
        'Quarterly plans focus on 1–3 actions per pillar and protect buffer time for surprise invitations.',
        '季度计划在每条主线设定 1-3 个关键行动，并保留缓冲时间应对突发。'
      ),
      bi(
        'Process logs replace scoreboard chasing; every entry names what was done, what was learned, how it felt.',
        '用过程日志代替成绩板：记录做了什么、学到什么、感受如何。'
      ),
    ],
    rules: [
      bi('Share when the content is useful, not when the algorithm demands it.', '只有内容本身有价值才分享。'),
      bi('Automate repeated decisions only when they bleed energy from the pillars.', '重复决策只有在消耗核心柱子时才自动化。'),
      bi('Celebrate steady habits; small wins are markers of maintained control.', '庆祝稳定习惯；小胜利就是掌控感的印记。'),
    ],
  },
  timeline: {
    eyebrow: bi('Timeline', '时间线'),
    title: bi('Moments of momentum and recalibration', '推动与校准的节点'),
    entries: [
      {
        period: bi('2025 Mid-Year', '2025 半年复盘'),
        role: bi('LifeOS · health foundations · experiments', 'LifeOS · 健康基建 · 实验'),
        summary: bi(
          'Built dashboards, reflected on health data, and mapped the five pillars ready for stage two.',
          '搭建看板，梳理健康数据，为五大主线的下一阶段打底。'
        ),
      },
      {
        period: bi('August 2025', '2025.08'),
        role: bi('Response to health + dance + autonomy', '回应健康 · 舞蹈 · 自主'),
        summary: bi(
          'Clarified that health is the foundation, dance is the expression, and tools keep the experiments alive.',
          '明确健康是基座，舞蹈是表达，工具让实验延续。'
        ),
      },
      {
        period: bi('2026 Spring', '2026 春'),
        role: bi('LifeOS → works → sharing', 'LifeOS → 作品 → 分享'),
        summary: bi(
          'Connecting LifeOS reflections back into published notes and a calm introduction page.',
          '把 LifeOS 的反思再次连接到公开笔记与这页静谧的介绍。'
        ),
      },
    ],
  },
  contact: {
    eyebrow: bi('Connect', '保持联络'),
    title: bi('Leave a note, share a rhythm, or send a quiet invite.', '留下一封信、交换节奏、送一个静默的邀请。'),
    summary: bi(
      'Email is read first; the rest of the LifeOS lives in the linked boards.',
      '邮件优先，其余 LifeOS 存在于链接的看板里。'
    ),
    cta: {
      label: bi('Email Zon', '发邮件给 Zon'),
      href: 'mailto:zonlily@outlook.com',
      note: bi('Start with what is alive right now', '从此刻真正活着的事情开始'),
    },
    items: [
      {
        label: bi('Email', '邮箱'),
        href: 'mailto:zonlily@outlook.com',
        note: bi('Always read within a day', '一天内响应'),
      },
      {
        label: bi('GitHub', 'GitHub'),
        href: 'https://github.com/EOMZON',
        note: bi('Code, experiments, and public repos', '代码、实验与公开仓库'),
      },
      {
        label: bi('Notebook', 'Board'),
        href: 'https://board.zondev.top/',
        note: bi('Research that stays raw, no filters', '保留原始的研究笔记'),
      },
      {
        label: bi('Music', '音乐'),
        href: 'https://music.zondev.top/',
        note: bi('Share playlists, dance logs', '分享歌单与舞动日志'),
      },
    ],
  },
  footer: {
    note: bi('Soul archive · LifeOS rhythms · calm records', '灵魂档案 · LifeOS 节奏 · 克制记录'),
    links: [
      {
        label: bi('LifeOS Archive', 'LifeOS 档案'),
        href: 'https://board.zondev.top/',
        note: bi('Updated reflections', '更新的反思'),
      },
      {
        label: bi('Latin Route', '拉丁路径'),
        href: 'https://allprojects.zondev.top/projects/latindance',
        note: bi('Movement and rehearsal notes', '动作与排练记录'),
      },
      {
        label: bi('Music Board', '音乐板块'),
        href: 'https://music.zondev.top/',
        note: bi('Playlists & dance notes', '歌单与舞蹈记录'),
      },
      {
        label: bi('Tools Atelier', '工具工坊'),
        href: 'https://prompt.zondev.top/',
        note: bi('Prompt hub & loops', '提示词与流程'),
      },
    ],
  },
});
