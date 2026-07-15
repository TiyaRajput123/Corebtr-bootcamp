import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionHeader from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../data/constants';
import './Testimonials.css';

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#f5a623' : '#333' }} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`testimonial-card fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="testimonial-card__top">
        <StarRating rating={testimonial.rating} />
        <span className="testimonial-card__quote" aria-hidden="true">"</span>
      </div>

      <blockquote className="testimonial-card__text">
        "{testimonial.text}"
      </blockquote>

      <footer className="testimonial-card__footer">
        <div
          className="testimonial-card__avatar"
          style={{ background: testimonial.avatarColor }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div className="testimonial-card__info">
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__meta">
            <span className="testimonial-card__rank">{testimonial.rank}</span>
            <span className="testimonial-card__sep" aria-hidden="true">·</span>
            <span className="testimonial-card__batch">{testimonial.batch}</span>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const VISIBLE = 3;
  const maxIndex = TESTIMONIALS.length - VISIBLE;

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setActiveIndex(clamped);
  };

  // Auto-scroll
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
  };

  const handlePrev = () => { goTo(activeIndex - 1); resetAuto(); };
  const handleNext = () => { goTo(activeIndex + 1); resetAuto(); };

  return (
    <section className="testimonials section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeader
          label="Student Success Stories"
          title="Real Doctors, Real Results"
          highlight="Real Results"
          subtitle="Thousands of medical PG aspirants have transformed their preparation with CoreBTR. Here's what they have to say."
        />

        {/* Desktop: grid */}
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="testimonials__slider" aria-label="Testimonials carousel">
          <div
            className="testimonials__track"
            ref={trackRef}
            style={{ transform: `translateX(calc(-${activeIndex * (100 / VISIBLE)}% - ${activeIndex * 16}px))` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="testimonials__slide">
                <TestimonialCard testimonial={t} index={0} />
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <div className="testimonials__controls">
            <button
              className="testimonials__arrow"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`testimonials__dot ${i === activeIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => { goTo(i); resetAuto(); }}
                />
              ))}
            </div>

            <button
              className="testimonials__arrow"
              onClick={handleNext}
              disabled={activeIndex === maxIndex}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Rating summary */}
        <RatingSummary />
      </div>
    </section>
  );
}

function RatingSummary() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`testimonials__summary fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="testimonials__summary-rating">
        <span className="testimonials__summary-score gradient-text">4.7</span>
        <div>
          <div className="testimonials__summary-stars" aria-label="4.7 out of 5 stars">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: '#f5a623' }}>{s}</span>
            ))}
          </div>
          <div className="testimonials__summary-count">Based on 9,600+ ratings</div>
        </div>
      </div>
      <div className="testimonials__summary-divider" aria-hidden="true" />
      <div className="testimonials__summary-stores">
        <div className="testimonials__summary-store">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-text-secondary)" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span>App Store · 4.8★</span>
        </div>
        <div className="testimonials__summary-store">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-text-secondary)" aria-hidden="true">
            <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.28-2.75-2.75-10.84 9.83zM.35 1.12C.13 1.46 0 1.88 0 2.38v19.25c0 .5.13.91.35 1.25l.07.07 10.79-10.79v-.25L.42 1.05l-.07.07zM20.65 10.5l-2.76-1.6-3.08 3.08 3.08 3.08 2.79-1.61c.8-.46.8-1.21-.03-1.95zM3.18.24L15.78 7.52l-2.75 2.75L2.19.44c.3-.2.65-.28.99-.2z" />
          </svg>
          <span>Google Play · 4.6★</span>
        </div>
      </div>
    </div>
  );
}
