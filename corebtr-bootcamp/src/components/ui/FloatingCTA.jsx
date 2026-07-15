import { useScrollProgress } from '../../hooks/useScrollProgress';
import './FloatingCTA.css';

/**
 * Sticky enrollment bar that slides in after the user scrolls past the hero
 * and disappears once they reach the pricing section.
 */
export default function FloatingCTA() {
  const { scrollY } = useScrollProgress();

  // Show after 800px, hide when pricing section is reached
  const pricingEl =
    typeof document !== 'undefined' ? document.getElementById('pricing') : null;
  const pricingTop = pricingEl ? pricingEl.offsetTop - 200 : Infinity;
  const isVisible = scrollY > 800 && scrollY < pricingTop;

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('pricing');
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`floating-cta ${isVisible ? 'floating-cta--visible' : ''}`}
      role="complementary"
      aria-label="Quick enrollment prompt"
      aria-hidden={!isVisible}
    >
      <div className="floating-cta__inner">
        <div className="floating-cta__text">
          <span className="floating-cta__emoji" aria-hidden="true">🎯</span>
          <span className="floating-cta__msg">
            <strong>50,000+ aspirants</strong> are already revising with CoreBTR.
          </span>
        </div>
        <a
          href="#pricing"
          className="floating-cta__btn btn btn-primary"
          onClick={handleClick}
          tabIndex={isVisible ? 0 : -1}
        >
          Enroll Now
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
