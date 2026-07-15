import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionHeader from '../ui/SectionHeader';
import { BTR_FRAMEWORK } from '../../data/constants';
import './BTRFramework.css';

function BTRCard({ item, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`btr-card fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="btr-card__accent" style={{ background: item.color }} />

      <div className="btr-card__header">
        <div
          className="btr-card__letter-wrap"
          style={{ background: `${item.color}18`, border: `1px solid ${item.color}40` }}
        >
          <span className="btr-card__letter" style={{ color: item.color }}>
            {item.letter}
          </span>
        </div>
        <div>
          <div className="btr-card__word" style={{ color: item.color }}>
            {item.word}
          </div>
          <h3 className="btr-card__title">{item.title}</h3>
        </div>
      </div>

      <p className="btr-card__desc">{item.description}</p>

      <ul className="btr-card__points">
        {item.points.map((point) => (
          <li key={point} className="btr-card__point">
            <span
              className="btr-card__check"
              style={{ background: `${item.color}20`, color: item.color }}
              aria-hidden="true"
            >
              ✓
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BTRFramework() {
  return (
    <section className="btr section" id="about" aria-labelledby="btr-heading">
      <div className="container">
        <SectionHeader
          label="The Core Philosophy"
          title="The BTR Framework"
          highlight="BTR Framework"
          subtitle="Three pillars that transform how you prepare for your PG entrance exam. Simple, proven, and designed for results."
        />

        <div className="btr__grid">
          {BTR_FRAMEWORK.map((item, i) => (
            <BTRCard key={item.letter} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <BTRCallout />
      </div>
    </section>
  );
}

function BTRCallout() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`btr__callout fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="btr__callout-content">
        <span className="btr__callout-emoji" aria-hidden="true">🏆</span>
        <div>
          <div className="btr__callout-title">
            70%+ exam topics covered by CoreBTR appear in NEET PG &amp; INI-CET
          </div>
          <div className="btr__callout-sub">
            Proven strike rate. Trusted by thousands of top-rank achievers.
          </div>
        </div>
      </div>
      <a href="#pricing" className="btn btn-primary btr__callout-btn">
        Start with BTR
      </a>
    </div>
  );
}
