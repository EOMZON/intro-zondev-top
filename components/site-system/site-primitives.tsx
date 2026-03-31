import type { ReactNode } from 'react';

import { ArrowUpRight } from 'lucide-react';

import { type SiteThemeId } from '@/data/site-schema';
import { siteThemes } from '@/data/site-themes';
import { cn } from '@/lib/utils';

export function isExternalHref(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:')
  );
}

export function SiteActionLink({
  href,
  label,
  className,
  labelClassName,
  icon,
}: {
  href: string;
  label: string;
  className?: string;
  labelClassName?: string;
  icon?: ReactNode;
}) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      <span className={labelClassName}>{label}</span>
      {icon ?? <ArrowUpRight className="h-4 w-4" />}
    </a>
  );
}

export function SiteSectionHeading({
  eyebrow,
  title,
  summary,
  className,
  eyebrowClassName,
  titleClassName,
  summaryClassName,
}: {
  eyebrow: string;
  title: string;
  summary?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  summaryClassName?: string;
}) {
  return (
    <div className={className}>
      <div className={eyebrowClassName}>{eyebrow}</div>
      <h2 className={titleClassName}>{title}</h2>
      {summary ? <p className={summaryClassName}>{summary}</p> : null}
    </div>
  );
}

export function SiteThemeSwitch({
  themeOptions,
  activeThemeId,
  getHref,
  className,
  linkClassName,
  activeLinkClassName,
}: {
  themeOptions: SiteThemeId[];
  activeThemeId: SiteThemeId;
  getHref: (themeId: SiteThemeId) => string;
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
}) {
  return (
    <div className={className}>
      {themeOptions.map((themeId) => {
        const option = siteThemes[themeId];

        return (
          <a
            key={option.id}
            href={getHref(option.id)}
            className={cn(
              linkClassName,
              option.id === activeThemeId ? activeLinkClassName : undefined
            )}
          >
            {option.label}
          </a>
        );
      })}
    </div>
  );
}

export function SiteMetricCard({
  label,
  value,
  note,
  className,
  labelClassName,
  valueClassName,
  noteClassName,
}: {
  label: string;
  value: string;
  note?: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  noteClassName?: string;
}) {
  return (
    <article className={className}>
      <div className={labelClassName}>{label}</div>
      <div className={valueClassName}>{value}</div>
      {note ? <p className={noteClassName}>{note}</p> : null}
    </article>
  );
}
