import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';

import styles from './vision.module.css';

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--signal-font-sans',
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--signal-font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Zon · 人生愿景（Vision）',
  description: '长期目标与五大主线：用来指导取舍、资源配置与日常节奏。',
};

const visionStatement =
  '在有限人生中，以健康为基石，以热爱为驱动，在创造与分享中构建自主价值。';

const visionPrinciples = [
  '不追求无拘无束的自由，而是珍视在责任框架内对生命方向的掌控。',
  '允许计划流动，接纳意外馈赠，让每个独立生长的目标交织成滋养生命的网络。',
  '十年后，我将成为一个身体灵动、创造丰盈、内心笃定的人，用行动证明：掌控感源于对自我价值的清醒认知与持续践行。',
];

const goalVsMeans = {
  goal:
    '「目标」是 OKR 支柱 / 愿景主线：它决定我把时间、注意力和资源长期投向哪里。',
  means:
    '「途径」是横向手段：只有当它明确服务于某条主线时才算推进；学习/研究不作为独立目标。',
};

const northStar = {
  tenYears:
    '以拉丁舞与整体健康为终身实践，让身体灵动、舞台感与能量成为一切创造的底座；以 AI 创造、个人 OS 与内容分享为主要表达方式，持续构建自主价值与影响力。',
  threeYears:
    '收入主线：独立开发 AI 应用、AI 辅助创作（如小说流水线）、自媒体与自动化服务的可持续模型；拉丁舞阶段性不承担主要收入压力，但保持稳定训练与内容沉淀，为未来课程/活动/教学打基础。',
};

const pillars = [
  {
    title: '拉丁舞',
    tag: '终身实践',
    summary: '让身体灵动、节奏清醒、舞台感持续在线。',
    actions: ['每周稳定练舞 ≥2 次（配合游泳/力量/有氧）', '每月至少 1 支练习/复盘视频', '逐步梳理成人拉丁自学体系原型'],
  },
  {
    title: '健康',
    tag: '基石',
    summary: '长期可持续的饮食 + 运动 + 作息结构，让判断力与想象力有底座。',
    actions: ['每周至少 3 次运动（含拉丁/游泳/球类等）', '记录体重/体脂/体能指标并按季度复盘', '把健康管理工程化：可追踪、可优化、可复盘'],
  },
  {
    title: '独立开发 AI 应用',
    tag: '收入实验',
    summary: '用产品化与工程化把想法做成可复用的工具，并形成可持续的收入模型。',
    actions: ['围绕少数核心产品线持续迭代（如 prompt-hub / 任务看板 / 小说流水线）', '保留失败归档与实验记录，支持长期迭代', '目标：至少 1 个产品具备稳定订阅用户'],
  },
  {
    title: '自媒体',
    tag: '表达与影响力',
    summary: '围绕「AI 创作 + 个人 OS + 拉丁/身体实践」形成清晰的个人叙事与受众连接。',
    actions: ['长期累计 500+ 内容（图文/短视频/课程/播客/AI短剧/AI音乐等）', '建立稳定受众（任一平台 ≥10,000 粉）', '形成基础商业化路径（订阅/课程/工具/咨询）'],
  },
  {
    title: '效率 / 自动化',
    tag: '个人 OS（为主线服务）',
    summary: '把重复决策与非核心任务系统化，让时间主权真的落地。',
    actions: ['为创作方向建立自动化发布/管理流程', '自动追踪健康/拉丁/创造/分享时间占比并提醒偏离', '所有非核心任务尽量委托或标准化工具化'],
  },
];

export default function VisionPage() {
  return (
    <div className={`${styles.page} ${sans.variable} ${mono.variable}`}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <a href="/" className={styles.brand}>
            <span>ZON</span>
            <span>Intro · 人生愿景</span>
          </a>
          <div className={styles.meta}>VISION · LONG-TERM ORIENTATION</div>
        </header>

        <section className={styles.hero}>
          <div className={styles.eyebrow}>纯中文 · 用来指导取舍，而不是讲故事</div>
          <h1 className={styles.h1}>{visionStatement}</h1>
          <p className={styles.lede}>
            这页不是自我介绍，也不是经历汇总。它的用途只有一个：当我不确定该做什么、该拒绝什么、该把注意力放在哪里时，回到这里。
          </p>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>愿景补充</h2>
              <span>principles</span>
            </div>
            <div className={styles.rule}>
              {visionPrinciples.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>LifeOS 口径：目标 vs 途径</h2>
              <span>definition</span>
            </div>
            <div className={styles.rule}>
              <p>
                <strong>目标：</strong>
                {goalVsMeans.goal}
              </p>
              <p>
                <strong>途径：</strong>
                {goalVsMeans.means}
              </p>
            </div>
          </article>
        </section>

        <section className={styles.grid} style={{ marginTop: 18 }}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>北极星（10 年）</h2>
              <span>north star</span>
            </div>
            <div className={styles.dual}>
              <div className={styles.dualBlock}>
                <span>十年主线</span>
                <p>{northStar.tenYears}</p>
              </div>
              <div className={styles.dualBlock}>
                <span>三年收入主线</span>
                <p>{northStar.threeYears}</p>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>五大主线</h2>
              <span>pillars</span>
            </div>
            <ul className={styles.pillars}>
              {pillars.map((pillar) => (
                <li key={pillar.title} className={styles.pillar}>
                  <div className={styles.pillarTop}>
                    <h3>{pillar.title}</h3>
                    <div className={styles.pillarTag}>{pillar.tag}</div>
                  </div>
                  <p>{pillar.summary}</p>
                  <div className={styles.actions}>
                    <ul>
                      {pillar.actions.map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <footer className={styles.footer}>
          <div>
            来源：本地 LifeOS 笔记《人生愿景》（/6 Obsidian/myObsidian/00-LifeOS/人生愿景.md）。
          </div>
          <div>
            相关：<a href="/where-i-win">我什么时候比较像我自己</a>（从日常证据回看状态）。
          </div>
        </footer>
      </div>
    </div>
  );
}
