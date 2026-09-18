import type { CSSProperties } from 'react';

import {
  identityVariants,
  identityVisualCount,
  identityVisualFamilies,
} from '@/experiments/identity-visual/registry';

import styles from './lab-index.module.css';

type PreviewStyle = CSSProperties & {
  [key: string]: string | number | undefined;
};

export default function IdentityVisualLabIndex() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p>INTRO.ZONDEV.TOP / VISUAL LAB</p>
          <h1>18 个视觉家族，54 个受控变体。</h1>
        </div>
        <div className={styles.heroMeta}>
          <span>Production 未修改</span>
          <span>{identityVisualCount} variants</span>
          <span>54 → 18 → 6 → 3 → 1</span>
        </div>
      </header>

      <section className={styles.intro}>
        <p>
          所有候选共享同一份 Identity Truth。这里比较的是视觉语言、构图、关系图几何与信息节奏，
          不是让不同版本各自重写一套“自我介绍”。
        </p>
        <div>
          <strong>固定边界</strong>
          <span>Identity / Manifesto / Constellation / Becoming / 5 Exits</span>
        </div>
      </section>

      <section className={styles.grid} aria-label="Identity visual families">
        {identityVisualFamilies.map((family, familyIndex) => {
          const previewStyle: PreviewStyle = {
            '--preview-bg': family.tokens.bg,
            '--preview-fg': family.tokens.fg,
            '--preview-accent': family.tokens.accent,
            '--preview-line': family.tokens.line,
          };

          return (
            <article className={styles.card} key={family.slug} style={previewStyle}>
              <div className={styles.preview} data-mode={family.mode}>
                <span className={styles.previewIndex}>
                  {String(familyIndex + 1).padStart(2, '0')}
                </span>
                <span className={styles.previewLine} />
                <span className={styles.previewDot} />
                <span className={styles.previewTitle}>{family.label}</span>
              </div>

              <div className={styles.cardBody}>
                <div>
                  <p>{family.chineseLabel}</p>
                  <h2>{family.label}</h2>
                  <span>{family.summary}</span>
                </div>

                <nav className={styles.variants} aria-label={`${family.label} 变体`}>
                  {identityVariants.map((variant) => (
                    <a
                      key={variant.id}
                      href={`/lab/identity/${family.slug}/${variant.id}`}
                    >
                      <strong>{variant.label}</strong>
                      <small>
                        {variant.layout} · {variant.geometry}
                      </small>
                    </a>
                  ))}
                </nav>
              </div>
            </article>
          );
        })}
      </section>

      <footer className={styles.footer}>
        <span>LAB ONLY</span>
        <span>Canonical issue: intro-zondev-top#1</span>
        <a href="/">返回当前 production 首页</a>
      </footer>
    </main>
  );
}
