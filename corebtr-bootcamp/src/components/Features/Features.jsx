import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionHeader from '../ui/SectionHeader';
import { FEATURES } from '../../data/constants';
import './Features.css';

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`feature-card fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="feature-card__icon" aria-hidden="true">
        {feature.icon}
      </div>
      <div className="feature-card__body">
        <h3 className="feature-card__title">{feature.title}</h3>
        <p className="feature-card__desc">{feature.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features section" id="features" aria-labelledby="features-heading">
      <div className="container">
        <SectionHeader
          label="App Features"
          title="Everything You Need to Crack Your PG Exam"
          highlight="Crack Your PG Exam"
          subtitle="One platform. All the tools. Zero noise. CoreBTR bundles every revision resource a serious aspirant needs."
        />

        <div className="features__grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* App Store CTA */}
        <AppStoreCTA />
      </div>
    </section>
  );
}

function AppStoreCTA() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`features__app-cta fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="features__app-cta-text">
        <h3 className="features__app-cta-title">Download the CoreBTR App</h3>
        <p className="features__app-cta-sub">Available on iOS and Android. Start your revision journey today.</p>
      </div>
      <div className="features__store-btns">
        <a
          href="https://apps.apple.com/in/app/corebtr/id6760164235"
          target="_blank"
          rel="noopener noreferrer"
          className="features__store-btn"
          aria-label="Download on the App Store"
        >
          <span className="features__store-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </span>
          <div>
            <div className="features__store-top">Download on the</div>
            <div className="features__store-bottom">App Store</div>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.corebtr"
          target="_blank"
          rel="noopener noreferrer"
          className="features__store-btn"
          aria-label="Get it on Google Play"
        >
          <span className="features__store-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.28-2.75-2.75-10.84 9.83zM.35 1.12C.13 1.46 0 1.88 0 2.38v19.25c0 .5.13.91.35 1.25l.07.07 10.79-10.79v-.25L.42 1.05l-.07.07zM20.65 10.5l-2.76-1.6-3.08 3.08 3.08 3.08 2.79-1.61c.8-.46.8-1.21-.03-1.95zM3.18.24L15.78 7.52l-2.75 2.75L2.19.44c.3-.2.65-.28.99-.2z"/>
            </svg>
          </span>
          <div>
            <div className="features__store-top">Get it on</div>
            <div className="features__store-bottom">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  );
}
