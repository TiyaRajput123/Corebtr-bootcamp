import { NAV_LINKS, SOCIAL_LINKS, EXAM_TARGETS } from '../../data/constants';
import './Footer.css';

const FOOTER_LINKS = {
  Platform: [
    { label: 'Features', href: '#features' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download App', href: 'https://apps.apple.com/in/app/corebtr/id6760164235' },
  ],
  Exams: EXAM_TARGETS.map((e) => ({ label: e, href: '#' })),
  Company: [
    { label: 'About Dr. Zainab Vora', href: '#' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'mailto:support@corebtr.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

function SocialIcon({ type }) {
  switch (type) {
    case 'instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'telegram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21.99 4.21L2.82 11.56c-1.3.52-1.29 1.26-.24 1.58l4.92 1.54 11.41-7.18c.54-.33 1.03-.15.62.21l-9.21 8.32-.35 5.12c.51 0 .74-.23 1.02-.5l2.45-2.38 5.08 3.76c.94.52 1.61.25 1.84-.87L23 5.37c.32-1.27-.49-1.85-1.01-1.16z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* CTA Banner */}
      <div className="footer__cta-banner">
        <div className="container footer__cta-inner">
          <div className="footer__cta-text">
            <h2 className="footer__cta-title">
              Ready to Secure Your{' '}
              <span className="gradient-text">Dream Rank?</span>
            </h2>
            <p className="footer__cta-sub">
              Join 50,000+ medical PG aspirants already preparing smarter with CoreBTR.
            </p>
          </div>
          <div className="footer__cta-actions">
            <a
              href="#pricing"
              className="btn btn-primary btn-lg"
              onClick={(e) => handleNavClick(e, '#pricing')}
            >
              Enroll in CoreBTR Bootcamp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="footer__cta-note">
              <span>🔒</span> 7-day money-back guarantee
            </div>
          </div>
        </div>
        <div className="footer__cta-glow" aria-hidden="true" />
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__main-inner">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="footer__logo-icon">⚡</span>
              <span className="footer__logo-text">
                Core<span className="gradient-text">BTR</span>
              </span>
            </a>
            <p className="footer__brand-tagline">
              Believe. Trust. Revise.
            </p>
            <p className="footer__brand-desc">
              The official revision platform by Dr. Zainab Vora — engineered for NEET PG, INI-CET, and FMGE aspirants who are serious about a top rank.
            </p>

            {/* Social links */}
            <div className="footer__social" aria-label="Social media links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={`Follow us on ${link.label}`}
                >
                  <SocialIcon type={link.icon} />
                </a>
              ))}
            </div>

            {/* App Store badges */}
            <div className="footer__store-links">
              <a
                href="https://apps.apple.com/in/app/corebtr/id6760164235"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__store-badge"
                aria-label="Download on the App Store"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.corebtr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__store-badge"
                aria-label="Get it on Google Play"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.28-2.75-2.75-10.84 9.83zM.35 1.12C.13 1.46 0 1.88 0 2.38v19.25c0 .5.13.91.35 1.25l.07.07 10.79-10.79v-.25L.42 1.05l-.07.07zM20.65 10.5l-2.76-1.6-3.08 3.08 3.08 3.08 2.79-1.61c.8-.46.8-1.21-.03-1.95zM3.18.24L15.78 7.52l-2.75 2.75L2.19.44c.3-.2.65-.28.99-.2z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="footer__col">
              <h3 className="footer__col-title">{category}</h3>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__col-link"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {currentYear} CoreBTR by SABRSHUKR COCARE PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link" onClick={(e) => e.preventDefault()}>Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__bottom-link" onClick={(e) => e.preventDefault()}>Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__bottom-link" onClick={(e) => e.preventDefault()}>Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
