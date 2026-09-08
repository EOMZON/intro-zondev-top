import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';

import styles from './where-i-win.module.css';

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
  title: 'Zon · 我什么时候比较像我自己',
  description: 'Grounded in Zon’s local notes, reviews, and project records.',
};

const heroSources = ['DailyRecord', '半年复盘', '理想工作生活状态', '项目记录'];

const bodyMoments = [
  {
    date: '2025.09.22',
    title: '先去游泳，再去图书馆想工作',
    body:
      '那天 13:30 去游泳，18:02 到社区图书馆梳理岗位收集自动化。对我来说，很多事情不是坐着硬想出来的，是身体先动起来，脑子才会慢慢顺。',
  },
  {
    date: '2026.01.29',
    title: '游完之后，想象力会回来',
    body:
      '12:06 记下“准备去游泳啦”，16:24 又写“刚游泳出来，对肺部吐痰很友好呢”，晚上继续补了一句：“开启了很多关于移动端的想象”。',
  },
  {
    date: '2026.03.31',
    title: '睡乱了，也还是先把身体放前面',
    body:
      '那天失眠，但最后还是决定“先完成游泳，再把拉丁分享构思整理成明确主题”。我做判断时，身体状态不是附属条件，是前提。',
  },
];

const makingMoments = [
  {
    date: '2026.01.23',
    title: '会愿意一整天折腾音乐、拉丁和封面',
    body:
      '这一天从“跑通自动创建歌曲，自动帮我创建拉丁不同风格的歌曲”，到试个人 IP、批量做封面、处理发布流程，基本都在围着同一件事打转。',
  },
  {
    date: '2025.10.14',
    title: '工具、表达、找工作，在我这里常常缠在一起',
    body:
      '那天我一边跑岗位信息收集、更新简历，一边发了“Obsidian 根据历史日记写简历”的小红书。对我来说，做东西和把它说出来，通常不是两条线。',
  },
];

const learningMoments = [
  {
    title: '健康问题搞不清时，我会继续追下去',
    body:
      '2025.09.15 那天，我一边查口腔和鼻腔相关问题，一边想检查路径怎么更高效；看到资料偏旧，又继续追问有没有国外的学术数据源。',
  },
  {
    title: '系统一麻烦，我就会想把它自动化',
    body:
      '同样是 2025.09.15，我已经在写“关于每天都没有处理的 summary，考虑写一个 python 定时任务处理”。后面又反复回到日总结、岗位收集、发布流程的自动化上。',
  },
  {
    title: '我不是先报课的人，是先被问题拽进去的人',
    body:
      '2025.09.22 在想精选岗位怎么收集，2025.10.14 又因为岗位信息格式不符合要求去改数据源和流程。比起“学会某个工具”，我更在意眼前的问题有没有真的被跑通。',
  },
];

const relationMoments = [
  {
    date: '2025.09.07',
    title: '陪 cenn 搞定体检预约',
    body: '这件事甚至直接成了当天最重要的一件事。对我来说，关系不是抽象的“重视”，而是把事情一件件接住。',
  },
  {
    date: '2026.03.03',
    title: 'cenn 回家，做了葱油拌面',
    body: '同一天我也在修播放器、发网易云专辑。生活和项目不是分开的，我会把两边都往前推一点。',
  },
  {
    date: '2026.03.27',
    title: '帮 cenn 处理护照',
    body: '这种记录在日记里并不少见。再加上半年复盘里反复出现的看病、出行、采购、做饭，我更像一个稳定照看的人，而不是热闹型社交选手。',
  },
];

const tensionMoments = [
  '为了环境和谐，一直把真实想法压下去的时候。',
  '固定朝九晚五、必须坐工位、身体没有自由的时候。',
  '事情做了很多，回头却不知道自己到底在做什么的时候。',
  '工作只剩 KPI、绩效和体面，健康和意义被挤到后面的时候。',
];

const workFits = [
  '应用层的 AI 工具、内容工具、自动化系统。',
  '能很快做出东西、很快看到结果的项目。',
  '异步沟通更多、节奏可以自己安排的团队。',
  '把产品判断、实现和表达放在一起的角色。',
];

const workDrains = [
  '固定早班和长时间坐工位。',
  '纯前端工程化，或者长期维护多于创造。',
  '高英语实时会议很多，必须不停解释和表演。',
  '只有汇报链路，没有真实使用反馈。',
];

const evidenceChips = [
  '232 daily entries',
  '413,456 字符',
  '游泳 50 / 拉丁 41 / 小说 45 / prompt 36',
  '数字只放这里，不放正文',
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className={styles.sectionHeading}>
      <span>{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function MomentCard({
  date,
  title,
  body,
}: {
  date: string;
  title: string;
  body: string;
}) {
  return (
    <article className={styles.momentCard}>
      <span className={styles.cardDate}>{date}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default function WhereIWinPage() {
  return (
    <div className={`${styles.page} ${sans.variable} ${mono.variable}`}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>只基于本地记录，不补故事</p>
        <h1>我很多次是先去游泳，再去想事情。</h1>
        <div className={styles.heroCopy}>
          <p>
            我不太把自己定义成某个岗位的人。更像是在反复找一种状态：身体是顺的，脑子是清的，手上做的东西也是真的。
          </p>
          <p>
            很多时候，我不是坐着想清楚事情的，是先去游泳、先换个地方、先把一个小东西做出来，然后才慢慢知道自己到底想要什么。
          </p>
        </div>
        <div className={styles.heroSources}>
          {heroSources.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <SectionHeading label="身体" title="身体先顺，我才会顺" />
          <p className={styles.intro}>
            这不是一句好听的话，是日记里反复出现的生活顺序。很多次，我都是先下水、先走出去，回来以后事情才开始清楚。
          </p>
          <div className={styles.momentGrid}>
            {bodyMoments.map((item) => (
              <MomentCard key={item.date} {...item} />
            ))}
          </div>
          <p className={styles.outro}>
            所以“健康”对我不是一个泛泛的主题，它直接影响我的判断力、想象力和能不能把事情做下去。
          </p>
        </section>

        <section className={styles.section}>
          <SectionHeading label="创作" title="我会反复回到这些事情上" />
          <p className={styles.intro}>
            不一定因为它们最赚钱，也不一定因为我已经想得特别清楚。只是我会一次又一次回到这些事情上，愿意为它们花时间。
          </p>
          <div className={styles.momentGrid}>
            {makingMoments.map((item) => (
              <MomentCard key={item.date} {...item} />
            ))}
          </div>
          <p className={styles.outro}>
            音乐、拉丁、内容、工具、自动化，看起来分散，其实都是同一路子：把感受变成能被看见、能被使用的东西。
          </p>
        </section>

        <section className={styles.section}>
          <SectionHeading label="学习" title="我不是为了学而学，我是被问题拽着走" />
          <p className={styles.intro}>
            我不是那种会先报一门课、再慢慢开始的人。大多数时候，是问题先把我拽进去，我才一路往下挖。
          </p>
          <div className={styles.detailList}>
            {learningMoments.map((item) => (
              <article key={item.title} className={styles.detailItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className={styles.outro}>
            这也解释了为什么我比较适合处理真实又有点乱的问题，而不是长期停留在纯理论、纯流程、纯维护里。
          </p>
        </section>

        <section className={styles.section}>
          <SectionHeading label="关系" title="我不算热闹，但我很会陪人过日子" />
          <p className={styles.intro}>
            我给别人的东西，通常不是场面感，而是稳定、具体、肯照看。关系这件事，在我的记录里也一直是落在行动上的。
          </p>
          <div className={styles.momentGrid}>
            {relationMoments.map((item) => (
              <MomentCard key={item.date} {...item} />
            ))}
          </div>
          <p className={styles.outro}>
            半年复盘里反复出现的也是这些事：一起生活、看病、做饭、采购、出行。相比“认识很多人”，我更像是能把日子一起过下去的人。
          </p>
        </section>

        <section className={styles.section}>
          <SectionHeading label="拧巴" title="我不对劲的时候，也有很清楚的样子" />
          <blockquote className={styles.quote}>
            <span>2025.09.15</span>
            <p>比起找不到更好的工作，我更恐惧的是忙忙碌碌地做了很多事，回头却发现自己都不知道自己在做什么。</p>
          </blockquote>
          <div className={styles.detailList}>
            {tensionMoments.map((item) => (
              <article key={item} className={styles.detailItem}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionHeading label="工作" title="放到工作上，我大概适合什么" />
          <div className={styles.workLead}>
            <p>
              我做过两三年前端，也有半年企业级落地经验。只是我真正兴奋的，不是把前端工程化本身做得多深，而是用前端和 AI 很快把一个真实想法做出来。
            </p>
            <p>
              2025.10.14 那篇“理想工作生活状态”里我也写得很直接：我不喜欢朝九晚五、固定坐工位，想要下午能去游泳、换地方工作，远程和异步更适合我；同时，英语实时沟通现在也确实还是摩擦。
            </p>
          </div>
          <div className={styles.workGrid}>
            <article className={styles.workCard}>
              <span>更可能让我做得久</span>
              <ul>
                {workFits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className={styles.workCard}>
              <span>会让我越来越不对劲</span>
              <ul>
                {workDrains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className={styles.outro}>
            所以如果一定要说“优势”是什么，我觉得不是某一个岗位名，而是我会自己发现问题，会愿意长期浸在真正在意的题目里，也会把零散感受慢慢做成能复用的东西。
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>底稿来源：DailyRecord / 半年复盘 / 理想工作生活状态 / 人生愿景 / 项目记录</p>
        <div className={styles.evidenceChips}>
          {evidenceChips.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
