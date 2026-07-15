import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/constants';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="container navbar__inner">
          {/* Logo */}
          <a
            href="#"
            className="navbar__logo"
            aria-label="CoreBTR Home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="navbar__logo-icon">⚡</span>
            <span className="navbar__logo-text">
              Core<span className="gradient-text">BTR</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="navbar__cta">
            <a
              href="#pricing"
              className="btn btn-primary btn-sm navbar__cta-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }}
            >
              Enroll Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-overlay ${menuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                className={`navbar__mobile-item ${menuOpen ? 'navbar__mobile-item--visible' : ''}`}
              >
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : '0ms' }}
              className={`navbar__mobile-item ${menuOpen ? 'navbar__mobile-item--visible' : ''}`}
            >
              <a
                href="#pricing"
                className="btn btn-primary btn-lg navbar__mobile-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }}
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
