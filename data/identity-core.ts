export type IdentityNode = {
  id: 'product' | 'software' | 'ai' | 'creative' | 'music' | 'movement' | 'systems';
  label: string;
  note: string;
};

export type IdentityStage = {
  id: 'curiosity' | 'product' | 'building' | 'integration';
  eyebrow: string;
  title: string;
  summary: string;
};

export type IdentityExit = {
  id: 'portfolio' | 'projects' | 'writing' | 'music' | 'contact';
  label: string;
  note: string;
  href?: string;
  unresolved?: boolean;
};

export const identityCore = {
  mark: 'ZON / INTRO',
  statement: '为更像人的生活，持续构建产品、软件与个人系统。',
  summary:
    'Product、software、AI、creative work、music、movement 与 personal systems，并不是七条分散的兴趣，而是我理解世界、练习生活和持续创造的不同入口。',
  manifesto: [
    '系统应该服务生活，而不是占据生活。',
    '技术应该留下成为人的空间。',
    '比身份更重要的是长期练习。',
  ],
  constellation: {
    center: 'A More Human Life',
    nodes: [
      { id: 'product', label: 'Product', note: '把复杂问题变成可使用的结构。' },
      { id: 'software', label: 'Software', note: '把想法变成可以真实运行的工具。' },
      { id: 'ai', label: 'AI', note: '把能力放大，但不替代人的判断。' },
      { id: 'creative', label: 'Creative Work', note: '把观察变成作品、界面与表达。' },
      { id: 'music', label: 'Music', note: '用声音处理节奏、情绪与空间。' },
      { id: 'movement', label: 'Movement', note: '让身体参与判断，而不是只停留在脑内。' },
      { id: 'systems', label: 'Personal Systems', note: '让长期兴趣真正能持续。' },
    ] satisfies IdentityNode[],
  },
  becoming: [
    {
      id: 'curiosity',
      eyebrow: '01 / CURIOSITY',
      title: '先从好奇开始',
      summary: '电脑、音乐、制作与反复拆解“为什么会这样”。',
    },
    {
      id: 'product',
      eyebrow: '02 / PRODUCT',
      title: '开始理解人与系统',
      summary: '从界面与产品进入真实使用场景，学会在约束中做取舍。',
    },
    {
      id: 'building',
      eyebrow: '03 / BUILDING',
      title: '把想法自己做出来',
      summary: 'Software 与 AI 让我可以更快地把模糊判断变成可运行的东西。',
    },
    {
      id: 'integration',
      eyebrow: '04 / INTEGRATION',
      title: '最后回到完整的生活',
      summary: '身体、创作、音乐与个人系统，开始和产品工作重新汇合。',
    },
  ] satisfies IdentityStage[],
  exits: [
    {
      id: 'portfolio',
      label: 'Portfolio',
      note: 'Selected work',
      unresolved: true,
    },
    {
      id: 'projects',
      label: 'All Projects',
      note: 'Everything I build',
      href: 'https://allprojects.zondev.top/',
    },
    {
      id: 'writing',
      label: 'Writing',
      note: 'Notes and ideas',
      unresolved: true,
    },
    {
      id: 'music',
      label: 'Music',
      note: 'Sounds and experiments',
      href: 'https://music.zondev.top/',
    },
    {
      id: 'contact',
      label: 'Contact',
      note: 'Say hello',
      href: 'mailto:zonlily@outlook.com',
    },
  ] satisfies IdentityExit[],
} as const;
