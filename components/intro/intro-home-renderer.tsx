import { ArrowUpRight } from 'lucide-react';

import {
  type IntroPersonalDocument,
  type IntroWordTone,
} from '@/data/sites/intro-personal';

import styles from './intro-home-renderer.module.css';

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

export function IntroHomeRenderer({
  document,
}: {
  document: IntroPersonalDocument;
}) {
  const toneClassMap: Record<IntroWordTone, string> = {
    serif: styles.wordSerif,
    sans: styles.wordSans,
    mono: styles.wordMono,
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerLabel}>{document.masthead.label}</div>

          <nav className={styles.navGrid}>
            {document.masthead.nav.map((item, index) => {
              const external = isExternalHref(item.href);

              return (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={styles.navItem}
                >
                  <span className={styles.navText}>
                    {index === 0 ? <span className={styles.navDot} /> : null}
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </header>

        <main className={styles.main}>
          <section id="home" className={styles.hero}>
            <div className={styles.heroMeta}>
              <div>
                <p className={styles.eyebrow}>{document.hero.eyebrow}</p>
              </div>
              <div className={styles.metaGrid}>
                {document.masthead.meta.map((item) => (
                  <div key={`${item.label}-${item.value}`} className={styles.metaItem}>
                    <div className={styles.metaLabel}>{item.label}</div>
                    <div className={styles.metaValue}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroHeading}>
              {document.hero.statement.map((row, index) => (
                <div key={`row-${index}`} className={styles.heroRow}>
                  {row.map((word) => (
                    <span
                      key={`${index}-${word.text}`}
                      className={`${styles.word} ${toneClassMap[word.tone]}`}
                    >
                      {word.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.heroLower}>
              <p className={styles.heroSummary}>{document.hero.summary}</p>

              <div className={styles.chipRow}>
                {document.hero.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>

              <div className={styles.actionRow}>
                {document.hero.actions.map((action, index) => {
                  const external = isExternalHref(action.href);

                  return (
                    <a
                      key={`${action.label}-${action.href}`}
                      href={action.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className={index === 0 ? styles.primaryAction : styles.secondaryAction}
                    >
                      <span>{action.label}</span>
                      <span className={styles.actionNote}>{action.note}</span>
                      <ArrowUpRight className={styles.actionArrow} />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="about" className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{document.manifesto.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{document.manifesto.title}</h2>
            </div>

            <div className={styles.manifestoGrid}>
              <div className={styles.quoteBlock}>{document.manifesto.quote}</div>
              <div className={styles.copyColumn}>
                {document.manifesto.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.bodyCopy}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section id="rooms" className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{document.rooms.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{document.rooms.title}</h2>
              <p className={styles.sectionSummary}>{document.rooms.summary}</p>
            </div>

            <div className={styles.roomsGrid}>
              {document.rooms.items.map((item) => (
                <article key={item.label} className={styles.roomCard}>
                  <div className={styles.roomLabel}>{item.label}</div>
                  <h3 className={styles.roomTitle}>{item.title}</h3>
                  <p className={styles.bodyCopy}>{item.summary}</p>

                  <ul className={styles.noteList}>
                    {item.notes.map((note) => (
                      <li key={note} className={styles.noteItem}>
                        {note}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.roomLinks}>
                    {item.links.map((link) => {
                      const external = isExternalHref(link.href);

                      return (
                        <a
                          key={`${link.label}-${link.href}`}
                          href={link.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className={styles.inlineLink}
                        >
                          {link.label}
                          <ArrowUpRight className={styles.inlineArrow} />
                        </a>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{document.process.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{document.process.title}</h2>
              <p className={styles.sectionSummary}>{document.process.summary}</p>
            </div>

            <div className={styles.processGrid}>
              {document.process.steps.map((step) => (
                <article key={`${step.step}-${step.title}`} className={styles.processCard}>
                  <div className={styles.processStep}>{step.step}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.bodyCopy}>{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{document.rhythm.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{document.rhythm.title}</h2>
              <p className={styles.sectionSummary}>{document.rhythm.summary}</p>
            </div>

            <div className={styles.factGrid}>
              {document.rhythm.facts.map((fact) => (
                <article key={`${fact.label}-${fact.value}`} className={styles.factCard}>
                  <div className={styles.factLabel}>{fact.label}</div>
                  <div className={styles.factValue}>{fact.value}</div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{document.lines.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{document.lines.title}</h2>
              <p className={styles.sectionSummary}>{document.lines.summary}</p>
            </div>

            <div className={styles.timeline}>
              {document.lines.items.map((item) => (
                <article key={`${item.period}-${item.title}`} className={styles.timelineRow}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.bodyCopy}>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>{document.contact.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{document.contact.title}</h2>
              <p className={styles.sectionSummary}>{document.contact.summary}</p>
            </div>

            <div className={styles.contactGrid}>
              {document.contact.items.map((item) => {
                const external = isExternalHref(item.href);

                return (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={styles.contactCard}
                  >
                    <div>
                      <div className={styles.contactLabel}>{item.label}</div>
                      <p className={styles.contactNote}>{item.note}</p>
                    </div>
                    <ArrowUpRight className={styles.contactArrow} />
                  </a>
                );
              })}
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p className={styles.footerNote}>{document.footer.note}</p>
          <div className={styles.footerLinks}>
            {document.footer.links.map((item) => {
              const external = isExternalHref(item.href);

              return (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={styles.footerLink}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
}
