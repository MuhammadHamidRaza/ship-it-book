import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const parts = [
  { numeral: '00', label: 'Introduction', chapters: '5 chapters', title: 'The Builder Reality Check', desc: 'Why you haven\'t built anything yet, the product gap, the startup myth, and how this book changes everything.', spanClass: 'tocWide', href: '/introduction/' },
  { numeral: 'I', label: 'Part 1', chapters: '2 chapters', title: 'The Builder Mindset', desc: 'Rewire how you think about building. Break the tutorial trap and the perfectionism cycle.', spanClass: '', href: '/part-1-builder-mindset/' },
  { numeral: 'II', label: 'Part 2', chapters: '4 chapters', title: 'Find & Validate the Problem', desc: 'Identify yourself as a builder, read markets, think problem-first, and validate before building.', spanClass: '', href: '/part-2-find-the-problem/' },
  { numeral: 'III', label: 'Part 3', chapters: '3 chapters', title: 'Design the Solution', desc: 'Think in systems, research your domain, and design before you write a single line of code.', spanClass: '', href: '/part-3-design-the-solution/' },
  { numeral: 'IV', label: 'Part 4', chapters: '3 chapters', title: 'Build It', desc: 'Build an MVP, make smart stack decisions, and debug like a thinker, not a guesser.', spanClass: '', href: '/part-4-build-it/' },
  { numeral: 'V', label: 'Part 5', chapters: '3 chapters', title: 'Deploy & Show', desc: 'Ship your first version, get your first real user, and launch on channels that work.', spanClass: '', href: '/part-5-deploy-and-show/' },
  { numeral: 'VI', label: 'Part 6', chapters: '3 chapters', title: 'Listen & Iterate', desc: 'Collect real feedback, know when to pivot, and iterate without breaking things.', spanClass: '', href: '/part-6-listen-and-iterate/' },
  { numeral: 'VII', label: 'Part 7', chapters: '4 chapters', title: 'Build in Public', desc: 'Build on GitHub, grow on Twitter/LinkedIn, find your community, and play the long game.', spanClass: '', href: '/part-7-build-in-public/' },
];

const tickerItems = [
  'Vol. 01', 'Open Source', 'From First Idea to First User',
  '27 Chapters', '8 Parts', 'Free Forever', 'No MBA Required', 'Ship It',
];

function CompassSvg() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="foil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d78c" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#7a5f1f" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#foil)" strokeWidth="0.75">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="88" strokeDasharray="1 3" />
        <circle cx="100" cy="100" r="62" />
        <circle cx="100" cy="100" r="40" strokeWidth="0.4" />
        <path d="M100 12 L108 100 L100 188 L92 100 Z" fill="url(#foil)" stroke="none" opacity="0.85" />
        <path d="M12 100 L100 92 L188 100 L100 108 Z" fill="url(#foil)" stroke="none" opacity="0.55" />
        <path d="M38 38 L100 96 L162 162 L104 104 Z" fill="url(#foil)" stroke="none" opacity="0.3" />
        <path d="M162 38 L104 96 L38 162 L96 104 Z" fill="url(#foil)" stroke="none" opacity="0.3" />
        <circle cx="100" cy="100" r="6" fill="url(#foil)" stroke="none" />
      </g>
      <g fill="#c9a84c" fontFamily="'Instrument Serif', serif" fontSize="9" letterSpacing="3" textAnchor="middle">
        <text x="100" y="54">SHIP</text>
        <text x="100" y="154" fontStyle="italic">it.</text>
      </g>
    </svg>
  );
}

function TickerRow({items, keyPrefix}: {items: string[]; keyPrefix: string}) {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${i}`} className="flex items-center gap-10">
          <span className="ticker-text">{item}</span>
          <span className="ticker-dot" />
        </span>
      ))}
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The Self-Taught Developer's Guide to Building Products and Starting Up"
      wrapperClassName={styles.homepageLayout}>
      <div className="homepage-root">
        {/* HEADER */}
        <header className="homepage-header">
          <div className="homepage-header-inner">
            <a href="#top" className="homepage-logo">
              <span className="homepage-logo-icon">S</span>
              <span className="homepage-logo-text">Ship&nbsp;It</span>
              <span className="homepage-edition">First&nbsp;Edition</span>
            </a>
            <nav className="homepage-nav">
              <a
                href="https://muhammadhamidraza.github.io/ship-it-book/introduction/"
                className="homepage-nav-link"
              >
                Read the book
                <span className="homepage-nav-underline" />
              </a>
              <a
                href="https://github.com/MuhammadHamidRaza"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="homepage-gh-link"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.06c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.06.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.15v3.18c0 .31.21.66.8.55A11.52 11.52 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5Z" />
                </svg>
              </a>
            </nav>
          </div>
          <div className="homepage-header-divider" />
        </header>

        <main>
          {/* HERO */}
          <section id="top" className="paper-grain hero-section">
            <div className="hero-bg-number" aria-hidden="true">01</div>

            <div className="hero-container">
              {/* Meta line */}
              <div className="hero-meta">
                <span className="hero-meta-line" />
                <span>Vol.&nbsp;01 · Open Source · MMXXVI</span>
                <span className="hero-meta-line" />
              </div>

              {/* Two columns */}
              <div className="hero-grid">
                {/* Left: compass + book + author */}
                <div className="hero-left">
                  <div className="hero-compass" style={{animation: 'spinSlow 60s linear infinite'}}>
                    <CompassSvg />
                  </div>
                  <div className="hero-book">
                    <div className="hero-book-overlay" />
                    <div className="hero-book-image" />
                    <span className="hero-corner hero-corner-tl" />
                    <span className="hero-corner hero-corner-tr" />
                    <span className="hero-corner hero-corner-bl" />
                    <span className="hero-corner hero-corner-br" />
                    <div className="hero-plate">Plate I — The Object</div>
                  </div>
                  <div className="author-badge">
                    <div className="author-badge-avatar-wrap">
                      <img
                        src="/ship-it-book/img/myimage.png"
                        alt="Hamid Raza"
                        className="author-badge-img"
                      />
                    </div>
                    <div className="author-badge-info">
                      <div className="author-badge-name">Hamid&nbsp;Raza</div>
                      <div className="author-badge-role">Author · Builder</div>
                    </div>
                  </div>
                </div>

                {/* Right: title + description + CTA */}
                <div className="hero-right">
                  <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    100% Free · Open Source
                  </div>
                  <h1 className="hero-title-block">
                    <span className="hero-title-ship">Ship</span>
                    <span className="hero-title-it gold-foil">it.</span>
                  </h1>
                  <p className="hero-tagline">
                    From <em className="hero-em">first idea</em> to{' '}
                    <em className="hero-em">first user</em>.
                    <span className="hero-tagline-sub">No MBA required.</span>
                  </p>
                  <p className="hero-desc">
                    A field manual for builders. 8 parts. 27 chapters. Written by someone who failed, learned,
                    and shipped again — so you can skip the part where you don't.
                  </p>
                  <div className="hero-cta-row">
                    <Link to="/introduction/" className="hero-cta-primary">
                      <span className="hero-cta-primary-bg" />
                      <span className="hero-cta-primary-text">Start reading</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero-cta-arrow" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href="https://github.com/MuhammadHamidRaza"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-cta-secondary"
                    >
                      Star on GitHub<span className="hero-star">★</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="stats-section">
                <div className="stats-label">
                  <span className="stats-label-line" />
                  The reckoning
                  <span className="stats-label-line" />
                </div>
                <div className="stats-grid">
                  <div className="stats-item">
                    <div className="stats-value gold-foil">90%</div>
                    <p className="stats-desc">of side projects never launch</p>
                  </div>
                  <div className="stats-item">
                    <div className="stats-value gold-foil">70%</div>
                    <p className="stats-desc">of startups fail from no market need</p>
                  </div>
                  <div className="stats-item">
                    <div className="stats-value gold-foil">85%</div>
                    <p className="stats-desc">of developers never ship a personal product</p>
                  </div>
                </div>
                <p className="stats-quote">&ldquo;This book shows you how to build products people actually use.&rdquo;</p>
              </div>
            </div>
          </section>

          {/* MARQUEE */}
          <div className="marquee-wrap">
            <div className="marquee-fade marquee-fade-left" />
            <div className="marquee-fade marquee-fade-right" />
            <div className="marquee-track">
              <TickerRow items={tickerItems} keyPrefix="a" />
              <TickerRow items={tickerItems} keyPrefix="b" />
            </div>
          </div>

          {/* TABLE OF CONTENTS */}
          <section className="toc-section">
            <div className="toc-bg-text" aria-hidden="true">Index</div>

            <div className="toc-container">
              <div className="toc-header">
                <div className="toc-header-left">
                  <div className="toc-header-label">
                    <svg viewBox="0 0 20 20" className="toc-star-icon" fill="currentColor" aria-hidden="true">
                      <path d="M10 0l2.5 7.5L20 10l-7.5 2.5L10 20l-2.5-7.5L0 10l7.5-2.5z" />
                    </svg>
                    Table of contents
                  </div>
                  <h2 className="toc-title">
                    Eight parts. <em className="gold-foil">One mission.</em>
                  </h2>
                </div>
                <p className="toc-subtitle">
                  Twenty-seven chapters of practice, not theory. Read straight through, or open the part you're stuck on.
                </p>
              </div>
              <div className="toc-divider" />
              <div className="toc-grid">
                {parts.map((part, i) => (
                  <a
                    key={i}
                    href={`https://muhammadhamidraza.github.io/ship-it-book${part.href}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`toc-card ${part.spanClass}`}
                  >
                    <span className="toc-card-bg-number" aria-hidden="true">{part.numeral}</span>
                    <div className="toc-card-glow" />
                    <div className="toc-card-header">
                      <div className="toc-card-header-left">
                        <span className="toc-card-numeral">{part.numeral}</span>
                        <div className="toc-card-label">
                          {part.label}
                          <div className="toc-card-chapters">{part.chapters}</div>
                        </div>
                      </div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="toc-card-arrow" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </div>
                    <div className="toc-card-body">
                      <h3 className="toc-card-title">{part.title}</h3>
                      <p className="toc-card-desc">{part.desc}</p>
                    </div>
                    <div className="toc-card-footer">
                      <span>Open chapter</span>
                      <span className="toc-card-line" />
                      <span>{String(i + 1).padStart(2, '0')} / 09</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* AUTHOR */}
          <section className="author-section-bottom">
            <div className="author-container">
              <div className="author-grid">
                <div className="author-left">
                  <div className="author-label">About the author</div>
                  <h3 className="author-name-block">
                    Muhammad <br /><em className="gold-foil">Hamid Raza</em>
                  </h3>
                  <div className="author-links">
                    <a href="https://www.linkedin.com/in/hamid-raza-b249162a8/" target="_blank" rel="noreferrer" className="author-link">
                      <span>LinkedIn</span>
                      <span className="author-link-underline" />
                    </a>
                    <a href="https://www.youtube.com/@BuildWithAIHamid" target="_blank" rel="noreferrer" className="author-link">
                      <span>YouTube</span>
                      <span className="author-link-underline" />
                    </a>
                    <a href="https://github.com/MuhammadHamidRaza" target="_blank" rel="noreferrer" className="author-link">
                      <span>GitHub</span>
                      <span className="author-link-underline" />
                    </a>
                    <a href="https://muhammadhamidraza.vercel.app/" target="_blank" rel="noreferrer" className="author-link">
                      <span>Website</span>
                      <span className="author-link-underline" />
                    </a>
                  </div>
                </div>
                <div className="author-right">
                  <p className="author-quote">
                    &ldquo;Tutorials teach syntax. They don&rsquo;t teach you how to think about what you&rsquo;re building.&rdquo;
                  </p>
                  <p className="author-bio">
                    A developer working at the intersection of product building, startup methodology, and modern web technologies.
                    My work focuses on building real-world products with the tools you already know — React, Node.js, and the rest.
                  </p>
                  <p className="author-bio">
                    This book is the result of building real products, launching startups, failing, learning, and shipping again.
                    The goal is simple: help developers not just write code — but build products that matter.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="homepage-footer-bottom">
          <div className="homepage-footer-inner">
            <div className="homepage-footer-left">
              <span className="homepage-footer-brand">Ship&nbsp;It</span>
              <span className="homepage-footer-dot">·</span>
              Free &amp; open source. Forever.
            </div>
            <div className="homepage-footer-links">
              <a href="https://muhammadhamidraza.github.io/ship-it-book/" target="_blank" rel="noreferrer">Original site</a>
              <a href="https://github.com/MuhammadHamidRaza" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
