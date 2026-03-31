import type { CSSProperties } from 'react';

import { siteThemeIdSchema, type SiteThemeId } from './site-schema';

export type SiteTheme = {
  id: SiteThemeId;
  label: string;
  description: string;
  mode: 'light' | 'dark';
  themeColor: string;
  previewLabel: string;
  tokens: {
    background: string;
    foreground: string;
    muted: string;
    subtle: string;
    accent: string;
    border: string;
    line: string;
    grid: string;
    panel: string;
    panelStrong: string;
    chip: string;
    buttonBg: string;
    buttonFg: string;
    buttonGhost: string;
    shadow: string;
    washA: string;
    washB: string;
    fontDisplay: string;
    fontBody: string;
    fontLabel: string;
    panelRadius: string;
    pillRadius: string;
    gridSize: string;
    sectionGap: string;
    titleTracking: string;
  };
};

export const siteThemeOrder = siteThemeIdSchema.options;

export const siteThemes: Record<SiteThemeId, SiteTheme> = {
  noir: {
    id: 'noir',
    label: 'Noir Editorial',
    description: '黑底档案风格，适合强调文本与结构的沉浸式阅读。',
    mode: 'dark',
    themeColor: '#090909',
    previewLabel: 'Dark / archival / restrained',
    tokens: {
      background: '#090909',
      foreground: '#f2f2ee',
      muted: '#b8b8b3',
      subtle: '#8f8f8a',
      accent: '#f2f2ee',
      border: 'rgba(242, 242, 238, 0.16)',
      line: 'rgba(242, 242, 238, 0.2)',
      grid: 'rgba(242, 242, 238, 0.06)',
      panel: 'transparent',
      panelStrong: 'rgba(255, 255, 255, 0.03)',
      chip: 'transparent',
      buttonBg: '#f2f2ee',
      buttonFg: '#090909',
      buttonGhost: 'transparent',
      shadow: 'transparent',
      washA: 'transparent',
      washB: 'transparent',
      fontDisplay:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontBody:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontLabel:
        'var(--font-ui-mono), "SFMono-Regular", "JetBrains Mono", ui-monospace, monospace',
      panelRadius: '0px',
      pillRadius: '0px',
      gridSize: '30px',
      sectionGap: '4.5rem',
      titleTracking: '0.12em',
    },
  },
  paper: {
    id: 'paper',
    label: 'Paper Ledger',
    description: '浅色纸面风格，适合阅读型首页与文档型页面。',
    mode: 'light',
    themeColor: '#f5f4ef',
    previewLabel: 'Light / paper / calm',
    tokens: {
      background: '#f5f4ef',
      foreground: '#111111',
      muted: '#4e4e4b',
      subtle: '#757571',
      accent: '#111111',
      border: 'rgba(17, 17, 17, 0.15)',
      line: 'rgba(17, 17, 17, 0.18)',
      grid: 'rgba(17, 17, 17, 0.05)',
      panel: '#ffffff',
      panelStrong: '#ffffff',
      chip: 'transparent',
      buttonBg: '#111111',
      buttonFg: '#f5f4ef',
      buttonGhost: 'transparent',
      shadow: 'transparent',
      washA: 'transparent',
      washB: 'transparent',
      fontDisplay:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontBody:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontLabel:
        'var(--font-ui-mono), "SFMono-Regular", "JetBrains Mono", ui-monospace, monospace',
      panelRadius: '0px',
      pillRadius: '0px',
      gridSize: '32px',
      sectionGap: '4.4rem',
      titleTracking: '0.11em',
    },
  },
  frame: {
    id: 'frame',
    label: 'Mono Frame',
    description: '深色网格风格，强调秩序、边界与模块节奏。',
    mode: 'dark',
    themeColor: '#0f0f0f',
    previewLabel: 'Dark / grid / strict',
    tokens: {
      background: '#0f0f0f',
      foreground: '#f0f0ec',
      muted: '#c0c0bb',
      subtle: '#90908b',
      accent: '#f0f0ec',
      border: 'rgba(240, 240, 236, 0.18)',
      line: 'rgba(240, 240, 236, 0.22)',
      grid: 'rgba(240, 240, 236, 0.08)',
      panel: 'transparent',
      panelStrong: 'rgba(255, 255, 255, 0.03)',
      chip: 'transparent',
      buttonBg: '#f0f0ec',
      buttonFg: '#0f0f0f',
      buttonGhost: 'transparent',
      shadow: 'transparent',
      washA: 'transparent',
      washB: 'transparent',
      fontDisplay:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontBody:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontLabel:
        'var(--font-ui-mono), "SFMono-Regular", "JetBrains Mono", ui-monospace, monospace',
      panelRadius: '0px',
      pillRadius: '0px',
      gridSize: '24px',
      sectionGap: '4.3rem',
      titleTracking: '0.14em',
    },
  },
  folio: {
    id: 'folio',
    label: 'Folio Cover',
    description: '首页封面风格，黑白克制并保留清晰章节层次。',
    mode: 'light',
    themeColor: '#f7f6f2',
    previewLabel: 'Light / cover / structured',
    tokens: {
      background: '#f7f6f2',
      foreground: '#101010',
      muted: '#4d4d4a',
      subtle: '#71716e',
      accent: '#101010',
      border: 'rgba(16, 16, 16, 0.14)',
      line: 'rgba(16, 16, 16, 0.18)',
      grid: 'rgba(16, 16, 16, 0.06)',
      panel: '#ffffff',
      panelStrong: '#ffffff',
      chip: 'transparent',
      buttonBg: '#101010',
      buttonFg: '#f7f6f2',
      buttonGhost: 'transparent',
      shadow: 'transparent',
      washA: 'transparent',
      washB: 'transparent',
      fontDisplay:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontBody:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontLabel:
        'var(--font-ui-mono), "SFMono-Regular", "JetBrains Mono", ui-monospace, monospace',
      panelRadius: '0px',
      pillRadius: '0px',
      gridSize: '28px',
      sectionGap: '4.2rem',
      titleTracking: '0.1em',
    },
  },
  swiss: {
    id: 'swiss',
    label: 'Swiss Grid',
    description: '白底网格风格，强调清晰对齐和极简信息密度。',
    mode: 'light',
    themeColor: '#ffffff',
    previewLabel: 'Light / grid / monochrome',
    tokens: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      muted: '#444444',
      subtle: '#6b6b6b',
      accent: '#0a0a0a',
      border: 'rgba(10, 10, 10, 0.12)',
      line: 'rgba(10, 10, 10, 0.18)',
      grid: 'rgba(10, 10, 10, 0.06)',
      panel: '#ffffff',
      panelStrong: '#ffffff',
      chip: 'transparent',
      buttonBg: '#0a0a0a',
      buttonFg: '#ffffff',
      buttonGhost: 'transparent',
      shadow: 'transparent',
      washA: 'transparent',
      washB: 'transparent',
      fontDisplay:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontBody:
        '"Iowan Old Style", "Palatino Linotype", "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      fontLabel:
        'var(--font-ui-mono), "SFMono-Regular", "JetBrains Mono", ui-monospace, monospace',
      panelRadius: '0px',
      pillRadius: '0px',
      gridSize: '22px',
      sectionGap: '4.2rem',
      titleTracking: '0.12em',
    },
  },
};

export function getSiteTheme(
  themeId?: string,
  fallbackThemeId: SiteThemeId = 'noir'
): SiteTheme {
  const parsedThemeId = siteThemeIdSchema.safeParse(themeId);
  const parsedFallbackThemeId = siteThemeIdSchema.safeParse(fallbackThemeId);

  return siteThemes[
    parsedThemeId.success
      ? parsedThemeId.data
      : parsedFallbackThemeId.success
        ? parsedFallbackThemeId.data
        : 'noir'
  ];
}

export function getSiteThemeStyle(theme: SiteTheme): CSSProperties {
  return {
    ['--site-bg' as string]: theme.tokens.background,
    ['--site-fg' as string]: theme.tokens.foreground,
    ['--site-muted' as string]: theme.tokens.muted,
    ['--site-subtle' as string]: theme.tokens.subtle,
    ['--site-accent' as string]: theme.tokens.accent,
    ['--site-border' as string]: theme.tokens.border,
    ['--site-line' as string]: theme.tokens.line,
    ['--site-grid' as string]: theme.tokens.grid,
    ['--site-panel' as string]: theme.tokens.panel,
    ['--site-panel-strong' as string]: theme.tokens.panelStrong,
    ['--site-chip' as string]: theme.tokens.chip,
    ['--site-button-bg' as string]: theme.tokens.buttonBg,
    ['--site-button-fg' as string]: theme.tokens.buttonFg,
    ['--site-button-ghost' as string]: theme.tokens.buttonGhost,
    ['--site-shadow' as string]: theme.tokens.shadow,
    ['--site-wash-a' as string]: theme.tokens.washA,
    ['--site-wash-b' as string]: theme.tokens.washB,
    ['--site-font-display' as string]: theme.tokens.fontDisplay,
    ['--site-font-body' as string]: theme.tokens.fontBody,
    ['--site-font-label' as string]: theme.tokens.fontLabel,
    ['--site-panel-radius' as string]: theme.tokens.panelRadius,
    ['--site-pill-radius' as string]: theme.tokens.pillRadius,
    ['--site-grid-size' as string]: theme.tokens.gridSize,
    ['--site-section-gap' as string]: theme.tokens.sectionGap,
    ['--site-title-tracking' as string]: theme.tokens.titleTracking,
    colorScheme: theme.mode,
  };
}
