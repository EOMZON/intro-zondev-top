export type IntroWordTone = 'serif' | 'sans' | 'mono';

export type IntroWord = {
  text: string;
  tone: IntroWordTone;
};

export type IntroLink = {
  label: string;
  href: string;
  note?: string;
};

export type IntroRoom = {
  label: string;
  title: string;
  summary: string;
  notes: string[];
  links: IntroLink[];
};

export type IntroProcessStep = {
  step: string;
  title: string;
  body: string;
};

export type IntroFact = {
  label: string;
  value: string;
};

export type IntroLine = {
  period: string;
  title: string;
  body: string;
};

export type IntroContactItem = {
  label: string;
  href: string;
  note: string;
};

export type IntroPersonalDocument = {
  title: string;
  description: string;
  masthead: {
    label: string;
    meta: IntroFact[];
    nav: IntroLink[];
  };
  hero: {
    eyebrow: string;
    statement: IntroWord[][];
    summary: string;
    chips: string[];
    actions: IntroLink[];
  };
  manifesto: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    quote: string;
  };
  rooms: {
    eyebrow: string;
    title: string;
    summary: string;
    items: IntroRoom[];
  };
  process: {
    eyebrow: string;
    title: string;
    summary: string;
    steps: IntroProcessStep[];
  };
  rhythm: {
    eyebrow: string;
    title: string;
    summary: string;
    facts: IntroFact[];
  };
  lines: {
    eyebrow: string;
    title: string;
    summary: string;
    items: IntroLine[];
  };
  contact: {
    eyebrow: string;
    title: string;
    summary: string;
    items: IntroContactItem[];
  };
  footer: {
    note: string;
    links: IntroLink[];
  };
};

export const introPersonalDocument: IntroPersonalDocument = {
  title: 'Zon · Intro',
  description:
    'Identity-first introduction for Zon: body practice, health, AI-native building, long-form expression, and the systems that hold them together.',
  masthead: {
    label: '( ZON / INTRO )',
    meta: [
      { label: 'UTC/GMT +8', value: 'Shanghai' },
      { label: 'Mode', value: 'Async-first / quiet spaces' },
      { label: 'Window', value: '12:00-20:00' },
    ],
    nav: [
      { label: 'HOME', href: '#home' },
      { label: 'ABOUT', href: '#about' },
      { label: 'ROOMS', href: '#rooms' },
      { label: 'PROCESS', href: '#process' },
      { label: 'CONTACT', href: '#contact' },
      { label: 'FOLLOW', href: 'https://github.com/EOMZON' },
    ],
  },
  hero: {
    eyebrow: 'Not a resume. A soul-level introduction.',
    statement: [
      [
        { text: 'ZON', tone: 'serif' },
        { text: 'IS', tone: 'serif' },
        { text: 'A', tone: 'serif' },
        { text: 'SYSTEMS-DRIVEN', tone: 'sans' },
      ],
      [
        { text: 'BODY-AWARE', tone: 'serif' },
        { text: 'AI-NATIVE', tone: 'sans' },
        { text: 'CREATOR', tone: 'serif' },
      ],
      [
        { text: 'BUILDING', tone: 'sans' },
        { text: 'DIGITAL', tone: 'serif' },
        { text: 'ROOMS', tone: 'sans' },
        { text: 'FOR', tone: 'serif' },
        { text: 'A', tone: 'serif' },
        { text: 'LIFE', tone: 'sans' },
      ],
      [
        { text: 'THAT', tone: 'serif' },
        { text: 'CAN', tone: 'serif' },
        { text: 'BREATHE.', tone: 'sans' },
      ],
    ],
    summary:
      '这不是求职页，而是我的主线说明书。健康是底座，身体给我节奏，AI 和系统给我杠杆，写作、音乐和公开发布让我持续成为自己。',
    chips: [
      'HEALTH IS THE BASE',
      'SYSTEMS SHOULD SERVE LIFE',
      'PRACTICE BEFORE IDENTITY',
      'ARCHIVE WHAT MATTERS',
    ],
    actions: [
      {
        label: 'Open All Projects',
        href: 'https://allprojects.zondev.top',
        note: 'proof layer',
      },
      {
        label: 'Open Board',
        href: 'https://board.zondev.top/',
        note: 'archive / research',
      },
      {
        label: 'Email Me',
        href: 'mailto:zonlily@outlook.com',
        note: 'direct line',
      },
    ],
  },
  manifesto: {
    eyebrow: 'About',
    title: '我想把人生过成一套可以继续生长的系统。',
    paragraphs: [
      '在有限人生中，以健康为基石，以热爱为驱动，在创造与分享中构建自主价值。',
      '我不追求无拘无束的自由，而是珍视在责任框架内对生命方向的掌控。系统对我不是控制世界，而是给生活留下更多呼吸空间。',
      '我长期在做三件事: 用身体训练校正自己，用网页与工具整理复杂性，用内容、音乐和公开发布把观察变成可回看的长期资产。',
      '如果一定要浓缩成一句话，那就是: 以觉察为核心，以创造为表达，以系统为方法，以自由为信念。',
    ],
    quote: 'NOT A RESUME. A MAP OF HOW I WANT TO LIVE.',
  },
  rooms: {
    eyebrow: 'Rooms',
    title: '我现在持续生活在这 5 个房间里。',
    summary:
      '这五条线不是并列爱好，而是彼此供养的结构。身体给节奏，健康给底座，AI 和系统给放大器，公开表达把一切固定成可以继续复用的东西。',
    items: [
      {
        label: '01 / BODY PRACTICE',
        title: 'Latin, rhythm, and a body that stays awake.',
        summary:
          '拉丁舞、游泳、力量和身体训练不是边线。它们决定了我的节拍、耐心、重心，也直接塑造我做设计和做产品的方式。',
        notes: [
          '身体不是附属品，而是审美与判断力的来源。',
          '我希望未来把这条线慢慢长成成人拉丁舞自学体系。',
        ],
        links: [
          {
            label: 'Latin Dance',
            href: 'https://allprojects.zondev.top/projects/latindance',
          },
        ],
      },
      {
        label: '02 / HEALTH OS',
        title: 'Health as infrastructure, not self-optimization theater.',
        summary:
          '我想拥有长期可持续的饮食、运动与作息结构。记录指标、理解体检、整理健康认知，本质上是在为创造力修地基。',
        notes: [
          '掌控感来自对身体与生活真实状态的清醒认知。',
          '健康工程的目的不是焦虑，而是让生命更有能量。',
        ],
        links: [
          {
            label: 'Health AI',
            href: 'https://healthai.zondev.top',
          },
        ],
      },
      {
        label: '03 / AI PRODUCTS',
        title: 'Independent AI tools that can grow into income.',
        summary:
          '未来三年，我会把独立开发 AI 应用当作主要收入实验方向。不是为了追风口，而是为了建立真正属于自己的产品能力与长期资产。',
        notes: [
          '我更在意可持续订阅，而不是一次性热度。',
          '我会保留失败记录和实验归档，方便下一次迭代。',
        ],
        links: [
          {
            label: 'Projects',
            href: 'https://allprojects.zondev.top/projects/creation',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/EOMZON',
          },
        ],
      },
      {
        label: '04 / ARCHIVE + MEDIA',
        title: 'Writing, boards, pages, sound, and public release.',
        summary:
          '我习惯把观察、判断和过程做成可以回看的页面、研究看板、文章、音乐和公开记录。内容对我来说不是营销壳，而是思考的外部器官。',
        notes: [
          '持续发布比一次性表达更重要。',
          '我想形成围绕 AI 创作、个人 OS、身体实践的清晰个人 IP。',
        ],
        links: [
          {
            label: 'Board',
            href: 'https://board.zondev.top/',
          },
          {
            label: 'Music',
            href: 'https://music.zondev.top/',
          },
        ],
      },
      {
        label: '05 / PERSONAL OS',
        title: 'Automation and personal infrastructure that keeps life coherent.',
        summary:
          'Obsidian、脚手架、自动化和工作流，是我处理复杂生活的方式。工具不是目标，目标是让健康、创作、表达和收入实验都能更稳定地持续。',
        notes: [
          '系统的意义是承载生命，而不是定义生命。',
          '我偏爱把高频问题收成可以长期维护的结构。',
        ],
        links: [
          {
            label: 'All Projects',
            href: 'https://allprojects.zondev.top/',
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: '我的工作方式更像一套长期运行的 studio rhythm。',
    summary:
      '无论做网页、做工具、做研究还是做音乐，我最后都会回到同一条工作链路上: 先观察，再命名，再原型，再练习，再发布，再归档。',
    steps: [
      {
        step: 'A',
        title: 'Observe',
        body: '先看什么在反复发生，什么欲望值得长期投入，什么问题真的影响生活质量。',
      },
      {
        step: 'B',
        title: 'Name',
        body: '给模糊感受命名，区分目标与途径，把“想做”收束成能落地的主线。',
      },
      {
        step: 'C',
        title: 'Prototype',
        body: '用网页、脚本、板子、笔记或 demo 先做出最小可运行的版本，不等待完美。',
      },
      {
        step: 'D',
        title: 'Practice',
        body: '让身体、节奏和日常把概念磨实。真正有效的东西会在重复里留下来。',
      },
      {
        step: 'E',
        title: 'Publish',
        body: '持续公开发布，让作品进入现实，而不是停留在本地文件夹或脑内高潮。',
      },
      {
        step: 'F',
        title: 'Archive',
        body: '把结果、失败、判断和上下文一起归档，变成下一次复用的资产。',
      },
    ],
  },
  rhythm: {
    eyebrow: 'Rhythm',
    title: '我适合在有节奏感的自由里工作。',
    summary:
      '我的理想工作状态不是更高压，而是更可持续: 远程或弹性、异步优先、安静有美感的空间、能穿插运动和外出的日常。生活节奏优先，身体与心理健康其次，创造与成长感再往前推。',
    facts: [
      { label: 'Schedule', value: '12:00-20:00 / late-start' },
      { label: 'Communication', value: 'Async-first / text before call' },
      { label: 'Environment', value: 'quiet / beautiful / light social' },
      { label: 'Bias', value: 'long-term assets over short bursts' },
    ],
  },
  lines: {
    eyebrow: 'Lines',
    title: '这些线索比任何单一头衔都更接近真实的我。',
    summary:
      '我不是只想被解释成某一个岗位的人。更准确的说法是，我正在把身体、健康、AI、表达和系统，组织成一种可持续的生活方式。',
    items: [
      {
        period: 'NOW',
        title: 'AI applications / personal OS / workflow',
        body: '持续把网页、工具、数据和记录组织成更顺手的个人系统，并验证哪些东西能长成真正的产品。',
      },
      {
        period: 'LONG-TERM',
        title: 'Latin dance / body training / rhythm',
        body: '身体实践塑造我的节奏感、审美和耐心，也是我抵抗抽象化生活的方式。',
      },
      {
        period: 'ONGOING',
        title: 'Writing / boards / music / public expression',
        body: '持续把观察和感受做成能被反复阅读、再次使用、还能继续生长的内容入口。',
      },
      {
        period: 'NORTH STAR',
        title: 'Turn interests into long-term personal assets',
        body: '不靠一次爆发定义自己，而是把反复在意的主题做成可以长期复利的系统与作品。',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: '如果你想看作品 proof layer，去看板和项目索引。如果你想联系我本人，从这里开始。',
    summary:
      '这个页面给的是灵魂层和方法层。更具体的项目、实验和公开归档，都在下面这些入口里继续展开。',
    items: [
      {
        label: 'Email',
        href: 'mailto:zonlily@outlook.com',
        note: 'zonlily@outlook.com',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/EOMZON',
        note: 'github.com/EOMZON',
      },
      {
        label: 'Board',
        href: 'https://board.zondev.top/',
        note: 'research / archive / long-term notes',
      },
      {
        label: 'All Projects',
        href: 'https://allprojects.zondev.top/',
        note: 'the proof layer and live outputs',
      },
    ],
  },
  footer: {
    note: 'Health. Body. Systems. Expression.',
    links: [
      { label: 'All Projects', href: 'https://allprojects.zondev.top/' },
      { label: 'Board', href: 'https://board.zondev.top/' },
      { label: 'Music', href: 'https://music.zondev.top/' },
      { label: 'GitHub', href: 'https://github.com/EOMZON' },
    ],
  },
};
