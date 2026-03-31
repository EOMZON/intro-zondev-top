import { ArrowUpRight, Github, Layers3, Linkedin, Mail } from 'lucide-react';
import { Cormorant_Garamond, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';

import type { BilingualText, SignalHomeCaseStudy } from '@/data/signal-home-schema';
import { introSignalPersonalDocument } from '@/data/sites/intro-signal-personal';

import styles from './signal-home-renderer.module.css';

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--signal-font-sans',
  weight: ['400', '500', '600', '700'],
});

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--signal-font-serif',
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--signal-font-mono',
  weight: ['400', '500'],
});

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:');
}

function ContactIcon({ label }: { label: string }) {
  if (label.toLowerCase().includes('mail')) {
    return <Mail className={styles.contactIcon} />;
  }

  if (label.toLowerCase().includes('github')) {
    return <Github className={styles.contactIcon} />;
  }

  if (label.toLowerCase().includes('linkedin')) {
    return <Linkedin className={styles.contactIcon} />;
  }

  return <Layers3 className={styles.contactIcon} />;
}

function BilingualInline({
  text,
  className,
  zhClassName,
}: {
  text: BilingualText;
  className?: string;
  zhClassName?: string;
}) {
  return (
    <>
      <span className={className}>{text.en}</span>
      <span className={zhClassName ?? styles.zhInline}>{text.zh}</span>
    </>
  );
}

function CaseStudyRow({ item }: { item: SignalHomeCaseStudy }) {
  return (
    <a
      href={item.href}
      target={isExternalHref(item.href) ? '_blank' : undefined}
      rel={isExternalHref(item.href) ? 'noopener noreferrer' : undefined}
      className={`${styles.caseRow} ${styles[`tone${item.tone[0].toUpperCase()}${item.tone.slice(1)}`]}`}
    >
      <div className={styles.caseIndex}>{item.index}</div>
      <div className={styles.caseCategory}>
        <span>{item.category.en}</span>
        <span>{item.category.zh}</span>
      </div>

      <div className={styles.caseTitleBlock}>
        <h3 className={styles.caseTitleEn}>{item.title.en}</h3>
        <p className={styles.caseTitleZh}>{item.title.zh}</p>
      </div>

      <div className={styles.caseArrow}>
        <span>Open</span>
        <ArrowUpRight className={styles.arrowIcon} />
      </div>

      <div className={styles.caseMeta}>
        <div className={styles.caseMetaGroup}>
          <div className={styles.caseMetaLabel}>
            <span>Notable recognitions</span>
            <span>关键识别</span>
          </div>
          <div className={styles.caseMetaList}>
            {item.recognitions.map((recognition) => (
              <div key={`${item.slug}-${recognition.en}`} className={styles.caseMetaItem}>
                <span>{recognition.en}</span>
                <span>{recognition.zh}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.caseMetaGroup}>
          <div className={styles.caseMetaLabel}>
            <span>Project scope</span>
            <span>项目范围</span>
          </div>
          <div className={styles.caseScopeList}>
            {item.scope.map((scope) => (
              <div key={`${item.slug}-${scope.en}`} className={styles.caseScopeItem}>
                <span>{scope.en}</span>
                <span>{scope.zh}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.caseSummaryEn}>{item.summary.en}</p>
        <p className={styles.caseSummaryZh}>{item.summary.zh}</p>
        <p className={styles.caseHiringValue}>{item.hiringValue.en}</p>
        <p className={styles.caseHiringValueZh}>{item.hiringValue.zh}</p>
      </div>

      <div className={styles.poster}>
        <div className={styles.posterInner}>
          <div className={styles.posterLabel}>{item.index}</div>
          <div className={styles.posterTitle}>{item.title.en}</div>
          <div className={styles.posterTitleZh}>{item.title.zh}</div>
        </div>
      </div>
    </a>
  );
}

export function SignalHomeRenderer() {
  const document = introSignalPersonalDocument;

  return (
    <div className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`} id="top">
      <nav className={styles.menu} aria-label="Primary">
        {document.masthead.nav.map((item) => (
          <a key={`${item.label.en}-${item.href}`} href={item.href} className={styles.menuButton}>
            <span>{item.label.en}</span>
            <span>{item.label.zh}</span>
          </a>
        ))}

        <div className={styles.menuSocials}>
          {document.masthead.socials.map((item) => (
            <a
              key={`${item.label.en}-${item.href}`}
              href={item.href}
              target={isExternalHref(item.href) ? '_blank' : undefined}
              rel={isExternalHref(item.href) ? 'noopener noreferrer' : undefined}
              className={styles.menuButton}
            >
              <span>{item.label.en}</span>
              <span>{item.note?.zh ?? item.label.zh}</span>
            </a>
          ))}
        </div>
      </nav>

      <header className={styles.mobileHeader}>
        <a href="#top" className={styles.mobileBrand}>
          <span>{document.mark}</span>
          <span>{document.hero.eyebrow.zh}</span>
        </a>
        <div className={styles.mobileNavLinks}>
          <a href="#lifeos">LifeOS</a>
          <a href="#case-studies">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.preheader}>
          <div className={styles.preheaderBlock}>
            <div className={styles.microLabel}>{document.preheader.studio.en}</div>
            <div className={styles.microLabelZh}>{document.preheader.studio.zh}</div>
          </div>
          <div className={styles.preheaderMeta}>
            <div className={styles.metaPair}>
              <span>{document.preheader.timezone.en}</span>
              <span>{document.preheader.timezone.zh}</span>
            </div>
            <div className={styles.metaPair}>
              {document.preheader.locations.map((location) => (
                <div key={location.en} className={styles.locationItem}>
                  <span>{location.en}</span>
                  <span>{location.zh}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.hero}>
          <div className={styles.wordmarkPanel}>
            <div className={styles.heroEyebrow}>
              <span>{document.hero.eyebrow.en}</span>
              <span>{document.hero.eyebrow.zh}</span>
            </div>

            <div className={styles.wordmark}>
              {document.hero.titleLines.map((line) => (
                <div key={line} className={styles.wordmarkLine}>
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroSummary}>
            <div className={styles.heroMeta}>
              <div className={styles.summaryEn}>{document.masthead.summary.en}</div>
              <div className={styles.summaryZh}>{document.masthead.summary.zh}</div>
            </div>

            <div className={styles.subtitleRows}>
              {document.hero.subtitleRows.map((row, index) => (
                <div key={`subtitle-${index}`} className={styles.subtitleRow}>
                  {row.map((item) => (
                    <div key={`${item.en}-${item.zh}`} className={styles.subtitleToken}>
                      <span>{item.en}</span>
                      <span>{item.zh}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.statementBox}>
              <p className={styles.statementEn}>{document.hero.statement.en}</p>
              <p className={styles.statementZh}>{document.hero.statement.zh}</p>
            </div>
          </div>
        </section>

        <section className={styles.showreelSection} id="lifeos">
          <div className={styles.showreelCard}>
            <div className={styles.showreelHead}>
              <span>Intro Capsule</span>
              <span>2026</span>
            </div>
            <div className={styles.showreelBody}>
              <div className={styles.showreelVisual} aria-hidden="true">
                <div className={styles.signalOrb} />
                <div className={styles.signalGrid}>
                  {document.hero.heroMetrics.map((metric) => (
                    <div key={metric.label.en} className={styles.signalMetric}>
                      <div className={styles.signalMetricLabel}>{metric.label.en}</div>
                      <div className={styles.signalMetricZh}>{metric.label.zh}</div>
                      <div className={styles.signalMetricValue}>{metric.value.en}</div>
                      <div className={styles.signalMetricValueZh}>{metric.value.zh}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.actionRail}>
                {document.hero.actions.map((action) => (
                  <a
                    key={`${action.label.en}-${action.href}`}
                    href={action.href}
                    target={isExternalHref(action.href) ? '_blank' : undefined}
                    rel={isExternalHref(action.href) ? 'noopener noreferrer' : undefined}
                    className={styles.actionLink}
                  >
                    <div>
                      <div className={styles.actionLabel}>{action.label.en}</div>
                      <div className={styles.actionLabelZh}>{action.label.zh}</div>
                    </div>
                    <ArrowUpRight className={styles.arrowIcon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className={styles.spotlightCard}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.spotlight.eyebrow} />
            </div>
            <h2 className={styles.sectionTitle}>{document.spotlight.title.en}</h2>
            <p className={styles.sectionTitleZh}>{document.spotlight.title.zh}</p>
            <p className={styles.sectionBody}>{document.spotlight.summary.en}</p>
            <p className={styles.sectionBodyZh}>{document.spotlight.summary.zh}</p>

            <div className={styles.spotlightItems}>
              {document.spotlight.items.map((item) => (
                <div key={item.label.en} className={styles.spotlightItem}>
                  <div className={styles.spotlightLabel}>{item.label.en}</div>
                  <div className={styles.spotlightLabelZh}>{item.label.zh}</div>
                  <div className={styles.spotlightDetail}>{item.detail.en}</div>
                  <div className={styles.spotlightDetailZh}>{item.detail.zh}</div>
                </div>
              ))}
            </div>

            <div className={styles.spotlightMetrics}>
              {document.spotlight.metrics.map((metric) => (
                <div key={metric.label.en} className={styles.spotlightMetric}>
                  <div className={styles.spotlightMetricLabel}>{metric.label.en}</div>
                  <div className={styles.spotlightMetricLabelZh}>{metric.label.zh}</div>
                  <div className={styles.spotlightMetricValue}>{metric.value.en}</div>
                  <div className={styles.spotlightMetricValueZh}>{metric.value.zh}</div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.caseStudiesSection} id="case-studies">
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.caseStudies.eyebrow} />
            </div>
            <h2 className={styles.sectionTitle}>{document.caseStudies.title.en}</h2>
            <p className={styles.sectionTitleZh}>{document.caseStudies.title.zh}</p>
          </div>

          <div className={styles.caseList}>
            {document.caseStudies.items.map((item) => (
              <CaseStudyRow key={item.slug} item={item} />
            ))}
          </div>

          <a
            href={document.caseStudies.archiveLink.href}
            target={isExternalHref(document.caseStudies.archiveLink.href) ? '_blank' : undefined}
            rel={isExternalHref(document.caseStudies.archiveLink.href) ? 'noopener noreferrer' : undefined}
            className={styles.archiveLink}
          >
            <div>
              <div>{document.caseStudies.archiveLink.label.en}</div>
              <div>{document.caseStudies.archiveLink.label.zh}</div>
            </div>
            <ArrowUpRight className={styles.arrowIcon} />
          </a>
        </section>

        <section className={styles.excerptSection}>
          <div className={styles.excerptHeading}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.excerpt.eyebrow} />
            </div>
            <h2 className={styles.excerptStatement}>{document.excerpt.statement.en}</h2>
            <p className={styles.excerptStatementZh}>{document.excerpt.statement.zh}</p>
          </div>
          <div className={styles.excerptSupport}>
            <p>{document.excerpt.supporting.en}</p>
            <p>{document.excerpt.supporting.zh}</p>
          </div>
        </section>

        <section className={styles.recognitionsSection} id="signals">
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.recognitions.eyebrow} />
            </div>
            <h2 className={styles.sectionTitle}>{document.recognitions.title.en}</h2>
            <p className={styles.sectionTitleZh}>{document.recognitions.title.zh}</p>
          </div>

          <div className={styles.recognitionTable}>
            {document.recognitions.items.map((item) => (
              <div key={item.label.en} className={styles.recognitionRow}>
                <div className={styles.recognitionLabel}>
                  <span>{item.label.en}</span>
                  <span>{item.label.zh}</span>
                </div>
                <div className={styles.recognitionValue}>
                  <span>{item.value.en}</span>
                  <span>{item.value.zh}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href={document.recognitions.aboutLink.href}
            target={isExternalHref(document.recognitions.aboutLink.href) ? '_blank' : undefined}
            rel={isExternalHref(document.recognitions.aboutLink.href) ? 'noopener noreferrer' : undefined}
            className={styles.archiveLink}
          >
            <div>
              <div>{document.recognitions.aboutLink.label.en}</div>
              <div>{document.recognitions.aboutLink.label.zh}</div>
            </div>
            <ArrowUpRight className={styles.arrowIcon} />
          </a>
        </section>

        <section className={styles.methodSection} id="practice">
          <article className={styles.practiceCard}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.practice.eyebrow} />
            </div>
            <h2 className={styles.sectionTitle}>{document.practice.title.en}</h2>
            <p className={styles.sectionTitleZh}>{document.practice.title.zh}</p>
            <div className={styles.systemNote}>
              <p>{document.practice.systemNote.en}</p>
              <p>{document.practice.systemNote.zh}</p>
            </div>

            <div className={styles.practiceParagraphs}>
              {document.practice.paragraphs.map((paragraph) => (
                <div key={paragraph.en} className={styles.practiceParagraph}>
                  <p>{paragraph.en}</p>
                  <p>{paragraph.zh}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className={styles.rulesCard}>
            <div className={styles.rulesHeader}>
              <span>Working Rules</span>
              <span>工作规则</span>
            </div>
            <div className={styles.ruleList}>
              {document.practice.rules.map((rule) => (
                <div key={rule.en} className={styles.ruleItem}>
                  <span className={styles.ruleDot} />
                  <div>
                    <p>{rule.en}</p>
                    <p>{rule.zh}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.timelineSection}>
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.timeline.eyebrow} />
            </div>
            <h2 className={styles.sectionTitle}>{document.timeline.title.en}</h2>
            <p className={styles.sectionTitleZh}>{document.timeline.title.zh}</p>
          </div>

          <div className={styles.timelineList}>
            {document.timeline.entries.map((entry) => (
              <div key={entry.period.en} className={styles.timelineRow}>
                <div className={styles.timelinePeriod}>
                  <span>{entry.period.en}</span>
                  <span>{entry.period.zh}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h3>{entry.role.en}</h3>
                  <p>{entry.role.zh}</p>
                  <div className={styles.timelineSummary}>
                    <span>{entry.summary.en}</span>
                    <span>{entry.summary.zh}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactIntro}>
            <div className={styles.sectionEyebrow}>
              <BilingualInline text={document.contact.eyebrow} />
            </div>
            <h2 className={styles.sectionTitle}>{document.contact.title.en}</h2>
            <p className={styles.sectionTitleZh}>{document.contact.title.zh}</p>
            <div className={styles.contactSummary}>
              <p>{document.contact.summary.en}</p>
              <p>{document.contact.summary.zh}</p>
            </div>

            <a
              href={document.contact.cta.href}
              target={isExternalHref(document.contact.cta.href) ? '_blank' : undefined}
              rel={isExternalHref(document.contact.cta.href) ? 'noopener noreferrer' : undefined}
              className={styles.discoveryLink}
            >
              <div>
                <div>{document.contact.cta.label.en}</div>
                <div>{document.contact.cta.label.zh}</div>
              </div>
              <ArrowUpRight className={styles.arrowIcon} />
            </a>
          </div>

          <div className={styles.contactGrid}>
            {document.contact.items.map((item) => (
              <a
                key={item.label.en}
                href={item.href}
                target={isExternalHref(item.href) ? '_blank' : undefined}
                rel={isExternalHref(item.href) ? 'noopener noreferrer' : undefined}
                className={styles.contactCard}
              >
                <div className={styles.contactTop}>
                  <ContactIcon label={item.label.en} />
                  <div className={styles.contactLabel}>
                    <span>{item.label.en}</span>
                    <span>{item.label.zh}</span>
                  </div>
                </div>
                <div className={styles.contactNote}>
                  <span>{item.note.en}</span>
                  <span>{item.note.zh}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerNote}>
            <p>{document.footer.note.en}</p>
            <p>{document.footer.note.zh}</p>
          </div>
          <div className={styles.footerLinks}>
            {document.footer.links.map((item) => (
              <a
                key={`${item.label.en}-${item.href}`}
                href={item.href}
                target={isExternalHref(item.href) ? '_blank' : undefined}
                rel={isExternalHref(item.href) ? 'noopener noreferrer' : undefined}
                className={styles.footerLink}
              >
                <span>{item.label.en}</span>
                <span>{item.label.zh}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            <span>Zon · Soul Archive · LifeOS · Music · Latin · Independent Tools · calm records ·</span>
            <span>Zon · Soul Archive · LifeOS · Music · Latin · Independent Tools · calm records ·</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
