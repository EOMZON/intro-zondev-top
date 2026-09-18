import type { CSSProperties } from 'react';

import { identityCore } from '@/data/identity-core';
import {
  getVariantNarrative,
  type IdentityVisualFamily,
  type IdentityVisualVariant,
} from '@/experiments/identity-visual/registry';

import styles from './identity-lab-view.module.css';

type LabStyle = CSSProperties & {
  [key: string]: string | number | undefined;
};

export function IdentityLabView({
  family,
  variant,
}: {
  family: IdentityVisualFamily;
  variant: IdentityVisualVariant;
}) {
  const narrative = getVariantNarrative(family, variant);
  const style: LabStyle = {
    '--lab-bg': family.tokens.bg,
    '--lab-fg': family.tokens.fg,
    '--lab-muted': family.tokens.muted,
    '--lab-accent': family.tokens.accent,
    '--lab-line': family.tokens.line,
    '--lab-panel': family.tokens.panel,
    '--lab-display': family.tokens.display,
    '--lab-body': family.tokens.body,
    '--lab-radius': family.tokens.radius,
    '--lab-tracking': family.tokens.tracking,
  };

  return (
    <div
      className={styles.page}
      style={style}
      data-mode={family.mode}
      data-motif={family.motif}
      data-layout={variant.layout}
      data-geometry={variant.geometry}
      data-scale={variant.scale}
      data-align={variant.align}
      data-narrative={narrative}
    >
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <a className={styles.brand} href="/lab/identity">
            {identityCore.mark}
          </a>
          <div className={styles.meta}>
            <span>{family.label}</span>
            <span>Variant {variant.label}</span>
            <span>{narrative}</span>
          </div>
        </header>

        <main>
          <section className={styles.hero} aria-labelledby="identity-title">
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>PERSONAL IDENTITY / ABOUT</p>
              <h1 id="identity-title">{identityCore.statement}</h1>
              <p className={styles.summary}>{identityCore.summary}</p>
              <div className={styles.heroRule}>
                <span>Product</span>
                <span>Software</span>
                <span>AI</span>
                <span>Creative</span>
                <span>Movement</span>
              </div>
            </div>

            <Constellation />
          </section>

          <section className={styles.manifesto} aria-labelledby="manifesto-title">
            <div className={styles.sectionLabel}>
              <span>01</span>
              <span>Manifesto</span>
            </div>
            <div className={styles.manifestoBody}>
              <h2 id="manifesto-title">一些长期不会轻易改变的判断。</h2>
              <ol>
                {identityCore.manifesto.map((line, index) => (
                  <li key={line}>
                    <span>0{index + 1}</span>
                    <p>{line}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.becoming} aria-labelledby="becoming-title">
            <div className={styles.sectionLabel}>
              <span>02</span>
              <span>Becoming</span>
            </div>
            <div className={styles.becomingBody}>
              <div className={styles.becomingIntro}>
                <h2 id="becoming-title">不是履历，是这些兴趣为什么最后走到一起。</h2>
                <p>不同阶段看起来做了不同的事，真正持续的线索一直是好奇、构建、练习与整合。</p>
              </div>
              <ol className={styles.timeline}>
                {identityCore.becoming.map((stage) => (
                  <li key={stage.id}>
                    <span className={styles.stageEyebrow}>{stage.eyebrow}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.explore} aria-labelledby="explore-title">
            <div className={styles.sectionLabel}>
              <span>03</span>
              <span>Explore further</span>
            </div>
            <div className={styles.exploreBody}>
              <h2 id="explore-title">Intro 到这里就结束。更深的内容去它该在的地方。</h2>
              <nav className={styles.exitGrid} aria-label="继续探索">
                {identityCore.exits.map((item) =>
                  item.href ? (
                    <a key={item.id} href={item.href} className={styles.exitLink}>
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.note}</small>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span
                      key={item.id}
                      className={`${styles.exitLink} ${styles.exitUnresolved}`}
                      aria-disabled="true"
                      title="真实 URL 尚未在仓库证据中确认"
                    >
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.note}</small>
                      </span>
                      <span className={styles.unresolvedMark}>待确认</span>
                    </span>
                  )
                )}
              </nav>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <span>{family.chineseLabel}</span>
          <span>{family.summary}</span>
          <span>LAB ONLY · production unchanged</span>
        </footer>
      </div>
    </div>
  );
}

function Constellation() {
  return (
    <div className={styles.constellation} aria-label="长期兴趣关系图">
      <div className={styles.constellationFrame} aria-hidden="true">
        <span className={styles.orbitOne} />
        <span className={styles.orbitTwo} />
        <span className={styles.axis} />
      </div>
      <div className={styles.center}>
        <span>中心</span>
        <strong>{identityCore.constellation.center}</strong>
      </div>
      <div className={styles.nodes}>
        {identityCore.constellation.nodes.map((node, index) => (
          <div
            className={styles.node}
            key={node.id}
            style={{ '--node-index': String(index) } as LabStyle}
          >
            <span className={styles.nodeDot} aria-hidden="true" />
            <strong>{node.label}</strong>
            <small>{node.note}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
