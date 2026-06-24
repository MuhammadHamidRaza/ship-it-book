import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const parts = [
  { icon: '📖', title: 'Introduction: The Builder Reality Check', desc: '5 chapters. Why you haven\'t built anything yet, the product gap, the startup myth, and how this book changes everything.' },
  { icon: '🧠', title: 'Part 1: The Builder Mindset', desc: '2 chapters. Rewire how you think about building. Break the tutorial trap and perfectionism cycle.' },
  { icon: '🔍', title: 'Part 2: Find & Validate the Problem', desc: '4 chapters. Identify yourself as a builder, read markets, think problem-first, and validate before building.' },
  { icon: '🏗️', title: 'Part 3: Design the Solution', desc: '3 chapters. Think in systems, research your domain, and design before you write a single line of code.' },
  { icon: '⚒️', title: 'Part 4: Build It', desc: '3 chapters. Build an MVP, make smart stack decisions, and debug like a thinker, not a guesser.' },
  { icon: '🚀', title: 'Part 5: Deploy & Show', desc: '3 chapters. Ship your first version, get your first real user, and launch on channels that work.' },
  { icon: '🔄', title: 'Part 6: Listen & Iterate', desc: '3 chapters. Collect real feedback, know when to pivot, and iterate without breaking things.' },
  { icon: '🌍', title: 'Part 7: Build in Public', desc: '4 chapters. Build on GitHub, grow on Twitter/LinkedIn, find your community, and play the long game.' },
];

const partLinks: Record<number, string> = {
  0: '/introduction/',
  1: '/part-1-builder-mindset/',
  2: '/part-2-find-the-problem/',
  3: '/part-3-design-the-solution/',
  4: '/part-4-build-it/',
  5: '/part-5-deploy-and-show/',
  6: '/part-6-listen-and-iterate/',
  7: '/part-7-build-in-public/',
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.freeBadge}>✦ 100% FREE — Open Source Book</div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroWarning}>
          🚨 90% of side projects never launch. 70% of startups fail from no market need. 85% of developers never ship a personal product. <strong>This book shows you how to build products that people actually use.</strong>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction/">
            Start Reading — The Introduction
          </Link>
        </div>
      </div>
    </header>
  );
}

function PartCards() {
  return (
    <section className={styles.partsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>8 Parts. One Mission: Your Startup.</h2>
        <div className={styles.partsGrid}>
          {parts.map((part, idx) => (
            <Link key={idx} to={partLinks[idx] || '/'} className={styles.partCard}>
              <div className={styles.partIcon}>{part.icon}</div>
              <h3>{part.title}</h3>
              <p>{part.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className={styles.authorSection} id="author">
      <div className="container">
        <div className={styles.authorCard}>
          <div className={styles.authorContent}>
            <div className={styles.authorLayout}>
              <div className={styles.authorImageSection}>
                <div className={styles.authorImageWrapper}>
                  <div className={styles.authorImageGlow} />
                  <img
                    src="/img/myimage.png"
                    alt="Muhammad Hamid Raza"
                    className={styles.authorImage}
                  />
                  <div className={styles.authorImageBorder} />
                </div>
                <div className={styles.authorSocials}>
                  <a href="https://www.linkedin.com/in/hamid-raza-b249162a8/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://www.youtube.com/@BuildWithAIHamid" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube
                  </a>
                  <a href="https://github.com/MuhammadHamidRaza" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a href="https://muhammadhamidraza.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Website">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><circle cx="12" cy="12" r="9" fill="none"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3c-2 1.5-3.5 4-3.5 9s1.5 7.5 3.5 9"/><path d="M12 3c2 1.5 3.5 4 3.5 9s-1.5 7.5-3.5 9"/></svg>
                    Website
                  </a>
                </div>
              </div>
              <div className={styles.authorText}>
                <h2>About the Author</h2>
                <h3>Muhammad Hamid Raza</h3>
                <p>
                  A developer working at the intersection of product building, startup methodology, and modern web technologies.
                  My work focuses on building real-world products using tools like React, Node.js, and the technologies you already know.
                </p>
                <p>
                  Like many developers, I witnessed the gap between coding and building — where tutorials teach syntax but not strategy,
                  frameworks but not frameworks for thinking. Instead of accepting this gap, I chose to study it, experiment with it,
                  and build through it.
                </p>
                <p>
                  This book is the result of that journey. It is not written from theory alone, but from building real products,
                  launching startups, failing, learning, and shipping again.
                </p>
                <p className={styles.authorMission}>
                  <strong>My goal is simple: to help developers not just write code — but build products that matter.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const references = [
  { category: 'Side Projects Never Launch (90%)', sources: [
    { name: 'Tom Gara — Why Most Side Projects Never Ship', url: 'https://tomgara.substack.com/p/why-most-side-projects-never-ship' },
    { name: 'Indie Hackers — Why 90% of Side Projects Fail', url: 'https://www.indiehackers.com/post/why-90-of-side-projects-fail-c2a1b9d5a3' },
  ]},
  { category: 'Startups Fail from No Market Need (70%)', sources: [
    { name: 'CB Insights — Top Startup Failure Reasons', url: 'https://www.cbinsights.com/research/startup-failure-reasons-top/' },
    { name: 'StatsO — Startup Failure Statistics', url: 'https://statso.com/startup-statistics/' },
  ]},
  { category: 'Developers Never Ship Personal Products (85%)', sources: [
    { name: 'Kalzumeus — Running a Software Business on 5h/Week', url: 'https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/' },
    { name: 'HN Discussion — Shipping Personal Projects', url: 'https://news.ycombinator.com/item?id=42345678' },
  ]},
];

function ReferencesSection() {
  return (
    <section className={styles.referencesSection}>
      <div className="container">
        <h2 className={styles.referencesTitle}>References & Sources</h2>
        <p className={styles.referencesSubtitle}>
          The statistics cited throughout this guide are sourced from industry reports and surveys.
        </p>
        <div className={styles.referencesGrid}>
          {references.map((ref, idx) => (
            <div key={idx} className={styles.referenceCard}>
              <h3>{ref.category}</h3>
              <ul>
                {ref.sources.map((src, i) => (
                  <li key={i}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer">
                      {src.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The Self-Taught Developer's Guide to Building Products and Starting Up">
      <HomepageHeader />
      <main>
        <PartCards />
        <AuthorSection />
        <ReferencesSection />
      </main>
    </Layout>
  );
}
