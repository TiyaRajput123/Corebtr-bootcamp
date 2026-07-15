import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './SectionHeader.css';

export default function SectionHeader({ label, title, subtitle, align = 'center', highlight }) {
  const [ref, isVisible] = useIntersectionObserver();

  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className={`section-header-wrapper fade-up ${isVisible ? 'visible' : ''}`}
      style={{ textAlign: align }}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{renderTitle()}</h2>
      {subtitle && (
        <p className="section-subtitle" style={{ margin: align === 'center' ? '0 auto' : '0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
