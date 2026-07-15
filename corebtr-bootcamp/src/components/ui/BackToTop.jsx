import { useScrollProgress } from '../../hooks/useScrollProgress';
import './BackToTop.css';

export default function BackToTop() {
  const { scrollY } = useScrollProgress();
  const isVisible = scrollY > 500;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
