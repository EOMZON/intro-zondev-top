import { z } from 'zod';

const bilingualTextSchema = z.object({
  en: z.string(),
  zh: z.string(),
});

const signalNavItemSchema = z.object({
  label: bilingualTextSchema,
  href: z.string(),
});

const signalLinkSchema = z.object({
  label: bilingualTextSchema,
  href: z.string(),
  note: bilingualTextSchema.optional(),
});

const signalMetricSchema = z.object({
  label: bilingualTextSchema,
  value: bilingualTextSchema,
});

const signalDetailItemSchema = z.object({
  label: bilingualTextSchema,
  detail: bilingualTextSchema,
});

const signalCaseStudySchema = z.object({
  slug: z.string(),
  index: z.string(),
  category: bilingualTextSchema,
  title: bilingualTextSchema,
  summary: bilingualTextSchema,
  hiringValue: bilingualTextSchema,
  recognitions: z.array(bilingualTextSchema).default([]),
  scope: z.array(bilingualTextSchema).default([]),
  href: z.string(),
  tone: z.enum(['graphite', 'linen', 'oxide', 'mist']).default('graphite'),
});

const signalTimelineEntrySchema = z.object({
  period: bilingualTextSchema,
  role: bilingualTextSchema,
  summary: bilingualTextSchema,
});

const signalContactItemSchema = z.object({
  label: bilingualTextSchema,
  href: z.string(),
  note: bilingualTextSchema,
});

export const signalHomeDocumentSchema = z.object({
  title: z.string(),
  description: z.string(),
  mark: z.string(),
  preheader: z.object({
    studio: bilingualTextSchema,
    timezone: bilingualTextSchema,
    locations: z.array(bilingualTextSchema).min(1),
  }),
  masthead: z.object({
    summary: bilingualTextSchema,
    nav: z.array(signalNavItemSchema).min(1),
    socials: z.array(signalLinkSchema).default([]),
  }),
  hero: z.object({
    eyebrow: bilingualTextSchema,
    titleLines: z.array(z.string()).min(1),
    subtitleRows: z.array(z.array(bilingualTextSchema).min(1)).min(1),
    statement: bilingualTextSchema,
    actions: z.array(signalLinkSchema).min(1),
    heroMetrics: z.array(signalMetricSchema).min(1),
  }),
  spotlight: z.object({
    eyebrow: bilingualTextSchema,
    title: bilingualTextSchema,
    summary: bilingualTextSchema,
    items: z.array(signalDetailItemSchema).min(1),
    metrics: z.array(signalMetricSchema).min(1),
  }),
  caseStudies: z.object({
    eyebrow: bilingualTextSchema,
    title: bilingualTextSchema,
    items: z.array(signalCaseStudySchema).min(1),
    archiveLink: signalLinkSchema,
  }),
  excerpt: z.object({
    eyebrow: bilingualTextSchema,
    statement: bilingualTextSchema,
    supporting: bilingualTextSchema,
  }),
  recognitions: z.object({
    eyebrow: bilingualTextSchema,
    title: bilingualTextSchema,
    items: z.array(signalMetricSchema).min(1),
    aboutLink: signalLinkSchema,
  }),
  practice: z.object({
    eyebrow: bilingualTextSchema,
    title: bilingualTextSchema,
    systemNote: bilingualTextSchema,
    paragraphs: z.array(bilingualTextSchema).min(1),
    rules: z.array(bilingualTextSchema).min(1),
  }),
  timeline: z.object({
    eyebrow: bilingualTextSchema,
    title: bilingualTextSchema,
    entries: z.array(signalTimelineEntrySchema).min(1),
  }),
  contact: z.object({
    eyebrow: bilingualTextSchema,
    title: bilingualTextSchema,
    summary: bilingualTextSchema,
    cta: signalLinkSchema,
    items: z.array(signalContactItemSchema).min(1),
  }),
  footer: z.object({
    note: bilingualTextSchema,
    links: z.array(signalLinkSchema).default([]),
  }),
});

export type BilingualText = z.infer<typeof bilingualTextSchema>;
export type SignalHomeMetric = z.infer<typeof signalMetricSchema>;
export type SignalHomeCaseStudy = z.infer<typeof signalCaseStudySchema>;
export type SignalHomeDocument = z.infer<typeof signalHomeDocumentSchema>;
