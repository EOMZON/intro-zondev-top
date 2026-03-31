import { z } from 'zod';

import {
  actionLinkSchema,
  metricSchema,
  siteThemeIdSchema,
} from './site-schema';

const introNavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const introSnapshotItemSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const introProofItemSchema = z.object({
  label: z.string(),
  detail: z.string(),
});

const introProjectSchema = z.object({
  title: z.string(),
  fit: z.string(),
  summary: z.string(),
  hiringValue: z.string(),
  href: z.string(),
});

const introBackgroundEntrySchema = z.object({
  period: z.string(),
  role: z.string(),
  summary: z.string(),
});

const introContactItemSchema = actionLinkSchema.extend({
  icon: z.enum(['mail', 'github', 'linkedin', 'stack']).default('stack'),
});

export const introHomeDocumentSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  defaultTheme: siteThemeIdSchema,
  themeOptions: z.array(siteThemeIdSchema).default(['folio', 'paper', 'noir']),
  masthead: z.object({
    mark: z.string(),
    eyebrow: z.string(),
    meta: z.string(),
    nav: z.array(introNavItemSchema).min(1),
  }),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    body: z.string(),
    signals: z.array(metricSchema).min(1),
    actions: z.array(actionLinkSchema).min(1),
  }),
  snapshot: z.object({
    title: z.string(),
    items: z.array(introSnapshotItemSchema).min(1),
  }),
  systemNote: z.object({
    title: z.string(),
    body: z.string(),
  }),
  proof: z.object({
    id: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    summary: z.string(),
    items: z.array(introProofItemSchema).min(1),
    metrics: z.array(metricSchema).min(1),
  }),
  projects: z.object({
    id: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    summary: z.string(),
    items: z.array(introProjectSchema).min(1),
  }),
  approach: z.object({
    id: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    summary: z.string(),
    paragraphs: z.array(z.string()).min(1),
    bullets: z.array(z.string()).min(1),
  }),
  background: z.object({
    id: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    summary: z.string(),
    entries: z.array(introBackgroundEntrySchema).min(1),
  }),
  contact: z.object({
    id: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    summary: z.string(),
    items: z.array(introContactItemSchema).min(1),
  }),
  footer: z.object({
    note: z.string(),
    links: z.array(actionLinkSchema).default([]),
  }),
});

export type IntroNavItem = z.infer<typeof introNavItemSchema>;
export type IntroSnapshotItem = z.infer<typeof introSnapshotItemSchema>;
export type IntroProofItem = z.infer<typeof introProofItemSchema>;
export type IntroProject = z.infer<typeof introProjectSchema>;
export type IntroBackgroundEntry = z.infer<typeof introBackgroundEntrySchema>;
export type IntroContactItem = z.infer<typeof introContactItemSchema>;
export type IntroHomeDocument = z.infer<typeof introHomeDocumentSchema>;
