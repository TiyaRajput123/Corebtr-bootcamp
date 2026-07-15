import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { STATS } from '../../data/constants';
import './StatsBar.css';

export default function StatsBar() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="statsbar" aria-label="Key statistics" id="about">
      <div className="container">
        <div
          ref={ref}
          className={`statsbar__inner fade-up ${isVisible ? 'visible' : ''}`}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="statsbar__item"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="statsbar__value gradient-text">{stat.value}</div>
              <div className="statsbar__label">{stat.label}</div>
              {i < STATS.length - 1 && (
                <div className="statsbar__divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
