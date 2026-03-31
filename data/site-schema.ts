import { z } from 'zod';

export const siteThemeIds = ['noir', 'paper', 'frame', 'folio', 'swiss'] as const;

export const siteThemeIdSchema = z.enum(siteThemeIds);

export const actionLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  note: z.string().optional(),
});

export const metricSchema = z.object({
  label: z.string(),
  value: z.string(),
  note: z.string().optional(),
});

const sectionBaseSchema = z.object({
  id: z.string(),
  kicker: z.string(),
  title: z.string(),
  summary: z.string().optional(),
});

export const narrativeSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('narrative'),
  paragraphs: z.array(z.string()).min(1),
  aside: z.array(metricSchema).optional(),
});

export const metricsSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('metrics'),
  items: z.array(metricSchema).min(1),
});

export const cardsSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('cards'),
  columns: z.union([z.literal(2), z.literal(3)]).default(3),
  cards: z
    .array(
      z.object({
        eyebrow: z.string().optional(),
        title: z.string(),
        body: z.string(),
        meta: z.string().optional(),
        href: z.string().optional(),
      })
    )
    .min(1),
});

export const timelineSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('timeline'),
  entries: z
    .array(
      z.object({
        period: z.string(),
        title: z.string(),
        org: z.string(),
        body: z.string(),
        bullets: z.array(z.string()).default([]),
      })
    )
    .min(1),
});

export const stepsSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('steps'),
  steps: z
    .array(
      z.object({
        title: z.string(),
        body: z.string(),
      })
    )
    .min(1),
});

export const quoteSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('quote'),
  quote: z.string(),
  attribution: z.string().optional(),
  note: z.string().optional(),
});

export const linksSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('links'),
  links: z.array(actionLinkSchema).min(1),
  note: z.string().optional(),
});

export const comparisonSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('comparison'),
  columns: z.tuple([z.string(), z.string()]),
  rows: z
    .array(
      z.object({
        topic: z.string(),
        left: z.string(),
        right: z.string(),
      })
    )
    .min(1),
});

export const faqSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('faq'),
  items: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .min(1),
});

export const spotlightSectionSchema = sectionBaseSchema.extend({
  kind: z.literal('spotlight'),
  eyebrow: z.string().optional(),
  body: z.string(),
  actions: z.array(actionLinkSchema).default([]),
  metrics: z.array(metricSchema).default([]),
});

export const siteSectionSchema = z.discriminatedUnion('kind', [
  narrativeSectionSchema,
  metricsSectionSchema,
  cardsSectionSchema,
  timelineSectionSchema,
  stepsSectionSchema,
  quoteSectionSchema,
  linksSectionSchema,
  comparisonSectionSchema,
  faqSectionSchema,
  spotlightSectionSchema,
]);

export const siteDocumentSchema = z.object({
  slug: z.string(),
  path: z.string(),
  title: z.string(),
  description: z.string(),
  privacy: z.enum(['private', 'public']).default('public'),
  defaultTheme: siteThemeIdSchema,
  themeOptions: z.array(siteThemeIdSchema).default(['noir', 'paper', 'frame']),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    body: z.string(),
    tags: z.array(z.string()).default([]),
    actions: z.array(actionLinkSchema).min(1),
    stats: z.array(metricSchema).default([]),
    note: z.string().optional(),
  }),
  sections: z.array(siteSectionSchema).min(1),
  footer: z.object({
    note: z.string(),
    links: z.array(actionLinkSchema).default([]),
  }),
});

export type SiteThemeId = z.infer<typeof siteThemeIdSchema>;
export type ActionLink = z.infer<typeof actionLinkSchema>;
export type Metric = z.infer<typeof metricSchema>;
export type NarrativeSection = z.infer<typeof narrativeSectionSchema>;
export type MetricsSection = z.infer<typeof metricsSectionSchema>;
export type CardsSection = z.infer<typeof cardsSectionSchema>;
export type TimelineSection = z.infer<typeof timelineSectionSchema>;
export type StepsSection = z.infer<typeof stepsSectionSchema>;
export type QuoteSection = z.infer<typeof quoteSectionSchema>;
export type LinksSection = z.infer<typeof linksSectionSchema>;
export type ComparisonSection = z.infer<typeof comparisonSectionSchema>;
export type FaqSection = z.infer<typeof faqSectionSchema>;
export type SpotlightSection = z.infer<typeof spotlightSectionSchema>;
export type SiteSection = z.infer<typeof siteSectionSchema>;
export type SiteDocument = z.infer<typeof siteDocumentSchema>;
