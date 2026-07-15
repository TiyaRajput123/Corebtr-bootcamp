import { useState, useEffect } from 'react';
import { EXAM_TARGETS } from '../../data/constants';
import './Hero.css';

export default function Hero() {
  const [currentExam, setCurrentExam] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentExam((prev) => (prev + 1) % EXAM_TARGETS.length);
        setAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Background elements */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-glow hero__bg-glow--1" />
        <div className="hero__bg-glow hero__bg-glow--2" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot" aria-hidden="true" />
            Trusted by 50,000+ Medical PG Aspirants
          </div>

          {/* Headline */}
          <h1 className="hero__title">
            <span className="hero__title-line">The Only Revision</span>
            <span className="hero__title-line">Platform You Need</span>
            <span className="hero__title-line hero__title-line--accent">
              for{' '}
              <span
                className={`hero__exam-rotator ${animating ? 'hero__exam-rotator--exit' : 'hero__exam-rotator--enter'}`}
                aria-live="polite"
              >
                {EXAM_TARGETS[currentExam]}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero__subtitle">
            CoreBTR is the official revision platform by{' '}
            <strong>Dr. Zainab Vora</strong> — engineered for medical PG aspirants
            who want to turn hard work into a{' '}
            <span className="gradient-text">top rank</span>. Follow the proven
            BTR framework and stop leaving your rank to chance.
          </p>

          {/* BTR Pills */}
          <div className="hero__btr-pills" aria-label="BTR Framework pillars">
            {[
              { letter: 'B', word: 'Believe', color: '#e84c1e' },
              { letter: 'T', word: 'Trust', color: '#f5a623' },
              { letter: 'R', word: 'Revise', color: '#22c55e' },
            ].map((item) => (
              <div key={item.letter} className="hero__btr-pill">
                <span
                  className="hero__btr-letter"
                  style={{ color: item.color, borderColor: `${item.color}40` }}
                >
                  {item.letter}
                </span>
                <span className="hero__btr-word">{item.word}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <a href="#pricing" className="btn btn-primary btn-lg hero__cta-primary">
              Start Your Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="btn btn-outline btn-lg hero__cta-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
              Watch Intro
            </a>
          </div>

          {/* Social proof row */}
          <div className="hero__social-proof">
            <div className="hero__avatars" aria-hidden="true">
              {['PS', 'AM', 'RG', 'SV', 'AN'].map((initials, i) => (
                <div
                  key={initials}
                  className="hero__avatar"
                  style={{ zIndex: 5 - i, marginLeft: i === 0 ? 0 : '-10px' }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="hero__social-text">
              <div className="hero__stars" aria-label="4.7 out of 5 stars">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} style={{ color: i < 5 ? '#f5a623' : '#444' }}>{s}</span>
                ))}
              </div>
              <span>4.7/5 from 9,600+ ratings</span>
            </div>
          </div>
        </div>

        {/* Hero Visual / App Mockup */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__phone-mockup">
            <div className="hero__phone-screen">
              {/* Status bar */}
              <div className="hero__phone-statusbar">
                <span>9:41</span>
                <div className="hero__phone-icons">
                  <span>●●●</span>
                </div>
              </div>

              {/* App header */}
              <div className="hero__phone-header">
                <div className="hero__phone-logo">⚡ CoreBTR</div>
                <div className="hero__phone-greeting">Welcome back, Doctor 👋</div>
              </div>

              {/* Progress card */}
              <div className="hero__phone-card hero__phone-card--progress">
                <div className="hero__phone-card-label">Today's Progress</div>
                <div className="hero__phone-progress-bar">
                  <div className="hero__phone-progress-fill" style={{ width: '72%' }} />
                </div>
                <div className="hero__phone-progress-text">72% Complete · Pharmacology</div>
              </div>

              {/* Subject pills */}
              <div className="hero__phone-subjects">
                {['Anatomy', 'Physiology', 'Pathology', 'Surgery'].map((s, i) => (
                  <div
                    key={s}
                    className={`hero__phone-subject ${i === 1 ? 'hero__phone-subject--active' : ''}`}
                  >
                    {s}
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="hero__phone-stats">
                <div className="hero__phone-stat">
                  <div className="hero__phone-stat-val">19</div>
                  <div className="hero__phone-stat-lbl">Subjects</div>
                </div>
                <div className="hero__phone-stat">
                  <div className="hero__phone-stat-val">120h</div>
                  <div className="hero__phone-stat-lbl">Videos</div>
                </div>
                <div className="hero__phone-stat">
                  <div className="hero__phone-stat-val">4.7★</div>
                  <div className="hero__phone-stat-lbl">Rating</div>
                </div>
              </div>

              {/* CTA button inside phone */}
              <div className="hero__phone-btn">Continue Revising →</div>
            </div>

            {/* Floating badges */}
            <div className="hero__floating-badge hero__floating-badge--1">
              <span>🎯</span>
              <div>
                <div className="hero__floating-title">Rank Secured!</div>
                <div className="hero__floating-sub">Dr. Priya · Rank 42</div>
              </div>
            </div>
            <div className="hero__floating-badge hero__floating-badge--2">
              <span>📚</span>
              <div>
                <div className="hero__floating-title">19 Subjects</div>
                <div className="hero__floating-sub">Complete Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
