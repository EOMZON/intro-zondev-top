export type IdentityNarrative = 'manifesto' | 'constellation' | 'becoming';
export type IdentityLayout = 'split' | 'centered' | 'rail';
export type IdentityGeometry = 'orbit' | 'field' | 'path';

export type IdentityVisualFamily = {
  slug: string;
  label: string;
  chineseLabel: string;
  summary: string;
  mode: 'light' | 'dark';
  narrative: IdentityNarrative;
  motif:
    | 'paper'
    | 'grid'
    | 'soft'
    | 'ma'
    | 'catalogue'
    | 'journal'
    | 'stars'
    | 'notes'
    | 'generative'
    | 'map'
    | 'architecture'
    | 'album'
    | 'movement'
    | 'field'
    | 'type'
    | 'signal'
    | 'cinema'
    | 'retro';
  tokens: {
    bg: string;
    fg: string;
    muted: string;
    accent: string;
    line: string;
    panel: string;
    display: string;
    body: string;
    radius: string;
    tracking: string;
  };
};

export type IdentityVisualVariant = {
  id: 'a' | 'b' | 'c';
  label: string;
  layout: IdentityLayout;
  geometry: IdentityGeometry;
  narrativeOffset: 0 | 1 | 2;
  scale: 'quiet' | 'large' | 'graphic';
  align: 'left' | 'center';
};

export const identityVariants: IdentityVisualVariant[] = [
  {
    id: 'a',
    label: 'A',
    layout: 'split',
    geometry: 'orbit',
    narrativeOffset: 0,
    scale: 'large',
    align: 'left',
  },
  {
    id: 'b',
    label: 'B',
    layout: 'centered',
    geometry: 'field',
    narrativeOffset: 1,
    scale: 'quiet',
    align: 'center',
  },
  {
    id: 'c',
    label: 'C',
    layout: 'rail',
    geometry: 'path',
    narrativeOffset: 2,
    scale: 'graphic',
    align: 'left',
  },
];

const serif =
  '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", serif';
const sans =
  'Inter, "SF Pro Display", "Helvetica Neue", "PingFang SC", "Noto Sans SC", sans-serif';
const mono =
  '"SFMono-Regular", "IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace';

export const identityVisualFamilies: IdentityVisualFamily[] = [
  {
    slug: 'quiet-editorial',
    label: 'Quiet Editorial',
    chineseLabel: '温暖编辑感',
    summary: '温暖纸面、克制排版、大量留白，让人物气质先于功能出现。',
    mode: 'light',
    narrative: 'manifesto',
    motif: 'paper',
    tokens: {
      bg: '#f5f1e9',
      fg: '#171715',
      muted: '#747068',
      accent: '#789884',
      line: 'rgba(23,23,21,.16)',
      panel: 'rgba(255,255,255,.40)',
      display: serif,
      body: sans,
      radius: '2px',
      tracking: '-0.035em',
    },
  },
  {
    slug: 'swiss-modernist',
    label: 'Swiss Modernist',
    chineseLabel: '国际主义网格',
    summary: '严格网格、黑白对齐与微型标签，用结构本身建立识别。',
    mode: 'light',
    narrative: 'becoming',
    motif: 'grid',
    tokens: {
      bg: '#fbfbf8',
      fg: '#0c0c0b',
      muted: '#5d5d59',
      accent: '#274ad8',
      line: 'rgba(12,12,11,.18)',
      panel: '#ffffff',
      display: sans,
      body: sans,
      radius: '0px',
      tracking: '-0.055em',
    },
  },
  {
    slug: 'soft-product-minimal',
    label: 'Soft Product Minimal',
    chineseLabel: '柔和产品感',
    summary: '现代产品的精度，但去掉 SaaS 销售气息，强调人和空间。',
    mode: 'light',
    narrative: 'constellation',
    motif: 'soft',
    tokens: {
      bg: '#f2f6f2',
      fg: '#152019',
      muted: '#657269',
      accent: '#7da38a',
      line: 'rgba(21,32,25,.12)',
      panel: 'rgba(255,255,255,.62)',
      display: sans,
      body: sans,
      radius: '24px',
      tracking: '-0.045em',
    },
  },
  {
    slug: 'japanese-ma',
    label: 'Japanese Ma',
    chineseLabel: '间与留白',
    summary: '让空白成为结构，让信息像呼吸一样出现，而不是填满屏幕。',
    mode: 'light',
    narrative: 'manifesto',
    motif: 'ma',
    tokens: {
      bg: '#f5f2ea',
      fg: '#24211d',
      muted: '#817b71',
      accent: '#8e9b7b',
      line: 'rgba(36,33,29,.13)',
      panel: 'transparent',
      display: serif,
      body: sans,
      radius: '0px',
      tracking: '-0.02em',
    },
  },
  {
    slug: 'museum-catalogue',
    label: 'Museum Catalogue',
    chineseLabel: '展览图录',
    summary: '像策展图录一样给不同长期兴趣建立精确而克制的关系。',
    mode: 'light',
    narrative: 'constellation',
    motif: 'catalogue',
    tokens: {
      bg: '#f2efe7',
      fg: '#1a1916',
      muted: '#77736b',
      accent: '#986c54',
      line: 'rgba(26,25,22,.18)',
      panel: '#f7f4ed',
      display: serif,
      body: sans,
      radius: '0px',
      tracking: '-0.03em',
    },
  },
  {
    slug: 'literary-journal',
    label: 'Literary Journal',
    chineseLabel: '文学刊物',
    summary: '更私人、更像一篇被设计过的自我介绍，而不是商业首页。',
    mode: 'light',
    narrative: 'manifesto',
    motif: 'journal',
    tokens: {
      bg: '#f7f2e8',
      fg: '#221d18',
      muted: '#7a7067',
      accent: '#8b5d4a',
      line: 'rgba(34,29,24,.14)',
      panel: 'transparent',
      display: serif,
      body: serif,
      radius: '0px',
      tracking: '-0.015em',
    },
  },
  {
    slug: 'constellation-atlas',
    label: 'Constellation Atlas',
    chineseLabel: '星图地图',
    summary: '把七个长期兴趣变成一张个人宇宙图，关系比分类更重要。',
    mode: 'dark',
    narrative: 'constellation',
    motif: 'stars',
    tokens: {
      bg: '#101311',
      fg: '#f1f3ed',
      muted: '#a2aaa3',
      accent: '#a8c8af',
      line: 'rgba(241,243,237,.16)',
      panel: 'rgba(255,255,255,.025)',
      display: serif,
      body: sans,
      radius: '999px',
      tracking: '-0.03em',
    },
  },
  {
    slug: 'scientific-field-notes',
    label: 'Scientific Field Notes',
    chineseLabel: '科学观察笔记',
    summary: '像长期观察自己的研究记录：精确、好奇，但不伪装技术复杂度。',
    mode: 'light',
    narrative: 'becoming',
    motif: 'notes',
    tokens: {
      bg: '#f1efe7',
      fg: '#17201b',
      muted: '#667069',
      accent: '#49715b',
      line: 'rgba(23,32,27,.18)',
      panel: 'rgba(255,255,255,.32)',
      display: serif,
      body: mono,
      radius: '0px',
      tracking: '-0.02em',
    },
  },
  {
    slug: 'generative-orbit',
    label: 'Generative Orbit',
    chineseLabel: '生成式轨道',
    summary: '以程序化曲线和轻微运动表达一个仍在生长的个人系统。',
    mode: 'dark',
    narrative: 'constellation',
    motif: 'generative',
    tokens: {
      bg: '#111514',
      fg: '#eef4ef',
      muted: '#98aaa0',
      accent: '#76b28e',
      line: 'rgba(238,244,239,.14)',
      panel: 'rgba(255,255,255,.035)',
      display: sans,
      body: sans,
      radius: '18px',
      tracking: '-0.05em',
    },
  },
  {
    slug: 'personal-cartography',
    label: 'Personal Cartography',
    chineseLabel: '个人地图',
    summary: '用路径、地形和方向感表达长期兴趣如何汇合。',
    mode: 'light',
    narrative: 'becoming',
    motif: 'map',
    tokens: {
      bg: '#f0f2e9',
      fg: '#1d241e',
      muted: '#6e786f',
      accent: '#7f9b72',
      line: 'rgba(29,36,30,.15)',
      panel: 'rgba(255,255,255,.30)',
      display: serif,
      body: sans,
      radius: '10px',
      tracking: '-0.025em',
    },
  },
  {
    slug: 'architectural-folio',
    label: 'Architectural Folio',
    chineseLabel: '建筑图纸式秩序',
    summary: '用比例、构造线与留白表现系统感，而不是工程仪表盘。',
    mode: 'light',
    narrative: 'constellation',
    motif: 'architecture',
    tokens: {
      bg: '#f4f4ef',
      fg: '#151715',
      muted: '#6d716c',
      accent: '#7c9c8a',
      line: 'rgba(21,23,21,.18)',
      panel: 'transparent',
      display: sans,
      body: mono,
      radius: '0px',
      tracking: '-0.055em',
    },
  },
  {
    slug: 'album-sleeve-minimal',
    label: 'Album Sleeve Minimal',
    chineseLabel: '唱片封套',
    summary: '用一个强但安静的构图动作建立文化感，而不把 Music 变成唯一身份。',
    mode: 'dark',
    narrative: 'manifesto',
    motif: 'album',
    tokens: {
      bg: '#1b1715',
      fg: '#f2ece4',
      muted: '#b2a8a0',
      accent: '#d09a69',
      line: 'rgba(242,236,228,.16)',
      panel: 'rgba(255,255,255,.025)',
      display: serif,
      body: sans,
      radius: '0px',
      tracking: '-0.025em',
    },
  },
  {
    slug: 'movement-rhythm',
    label: 'Movement / Rhythm',
    chineseLabel: '身体节奏',
    summary: '用重心、弧线和节拍建立页面节奏，身体不是装饰图。',
    mode: 'light',
    narrative: 'manifesto',
    motif: 'movement',
    tokens: {
      bg: '#f3efe7',
      fg: '#201d1a',
      muted: '#7d756d',
      accent: '#9c8cb0',
      line: 'rgba(32,29,26,.14)',
      panel: 'transparent',
      display: serif,
      body: sans,
      radius: '32px',
      tracking: '-0.035em',
    },
  },
  {
    slug: 'soft-color-field',
    label: 'Soft Color Field',
    chineseLabel: '柔色场',
    summary: '用浅绿、浅蓝和雾感色场承载锐利文字，让页面柔和但不甜。',
    mode: 'light',
    narrative: 'constellation',
    motif: 'field',
    tokens: {
      bg: '#eff3ef',
      fg: '#1d2420',
      muted: '#69736d',
      accent: '#9aabc8',
      line: 'rgba(29,36,32,.12)',
      panel: 'rgba(255,255,255,.36)',
      display: sans,
      body: sans,
      radius: '28px',
      tracking: '-0.05em',
    },
  },
  {
    slug: 'monochrome-typographic',
    label: 'Monochrome Typographic',
    chineseLabel: '黑白文字主导',
    summary: '不依赖插图，只用尺度、断行、标点和黑白关系建立人物记忆。',
    mode: 'light',
    narrative: 'manifesto',
    motif: 'type',
    tokens: {
      bg: '#fafafa',
      fg: '#080808',
      muted: '#656565',
      accent: '#080808',
      line: 'rgba(8,8,8,.18)',
      panel: '#ffffff',
      display: sans,
      body: sans,
      radius: '0px',
      tracking: '-0.07em',
    },
  },
  {
    slug: 'black-pale-green-signal',
    label: 'Black + Pale Green Signal',
    chineseLabel: '黑绿信号',
    summary: '深色系统感与淡绿色信号，但保持安静，避开 Hacker / Matrix。',
    mode: 'dark',
    narrative: 'constellation',
    motif: 'signal',
    tokens: {
      bg: '#0e1110',
      fg: '#edf2ec',
      muted: '#9da89f',
      accent: '#b6d6bd',
      line: 'rgba(182,214,189,.20)',
      panel: 'rgba(182,214,189,.035)',
      display: sans,
      body: mono,
      radius: '8px',
      tracking: '-0.045em',
    },
  },
  {
    slug: 'dark-cinematic',
    label: 'Dark Cinematic',
    chineseLabel: '暗色电影感',
    summary: '像安静的片头与章节，不靠人物大图也能形成情绪。',
    mode: 'dark',
    narrative: 'becoming',
    motif: 'cinema',
    tokens: {
      bg: '#11100f',
      fg: '#f0ede8',
      muted: '#aaa39b',
      accent: '#9eaeb8',
      line: 'rgba(240,237,232,.13)',
      panel: 'transparent',
      display: serif,
      body: sans,
      radius: '0px',
      tracking: '-0.025em',
    },
  },
  {
    slug: 'retro-digital-humanist',
    label: 'Retro Digital Humanist',
    chineseLabel: '人文数字怀旧',
    summary: '借早期个人互联网的直接感，做成今天仍然克制、清晰的个人空间。',
    mode: 'light',
    narrative: 'becoming',
    motif: 'retro',
    tokens: {
      bg: '#eeefe5',
      fg: '#171916',
      muted: '#6e746a',
      accent: '#5b7184',
      line: 'rgba(23,25,22,.18)',
      panel: '#f8f8ef',
      display: mono,
      body: sans,
      radius: '4px',
      tracking: '-0.02em',
    },
  },
];

const narratives: IdentityNarrative[] = ['manifesto', 'constellation', 'becoming'];

export function getIdentityVisualFamily(slug: string) {
  return identityVisualFamilies.find((family) => family.slug === slug);
}

export function getIdentityVisualVariant(id: string) {
  return identityVariants.find((variant) => variant.id === id);
}

export function getVariantNarrative(
  family: IdentityVisualFamily,
  variant: IdentityVisualVariant
): IdentityNarrative {
  const familyIndex = narratives.indexOf(family.narrative);
  return narratives[(familyIndex + variant.narrativeOffset) % narratives.length];
}

export const identityVisualCount =
  identityVisualFamilies.length * identityVariants.length;

export { mono, sans, serif };
