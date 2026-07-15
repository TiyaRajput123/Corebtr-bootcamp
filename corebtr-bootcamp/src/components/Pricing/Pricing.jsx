import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionHeader from '../ui/SectionHeader';
import { PRICING_PLANS } from '../../data/constants';
import './Pricing.css';

function PricingCard({ plan, index, annual }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const basePrice = parseInt(plan.price.replace(/[^\d]/g, ''));
  const annualPrice = annual ? Math.round(basePrice * 0.8) : basePrice;
  const displayPrice = `₹${annualPrice.toLocaleString('en-IN')}`;

  return (
    <div
      ref={ref}
      className={`pricing-card fade-up ${isVisible ? 'visible' : ''} ${plan.popular ? 'pricing-card--popular' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      aria-label={`${plan.name} plan`}
    >
      {plan.popular && (
        <div className="pricing-card__badge" aria-label="Most popular plan">
          Most Popular
        </div>
      )}

      {/* Card accent */}
      <div className="pricing-card__accent" style={{ background: plan.color }} aria-hidden="true" />

      <div className="pricing-card__header">
        <div className="pricing-card__name" style={{ color: plan.color }}>{plan.name}</div>
        <div className="pricing-card__price-wrap">
          <div className="pricing-card__price">{displayPrice}</div>
          {annual && (
            <div className="pricing-card__original">{plan.price}</div>
          )}
        </div>
        <div className="pricing-card__duration">/ {plan.duration}</div>
        <p className="pricing-card__desc">{plan.description}</p>
      </div>

      <ul className="pricing-card__features" aria-label="Plan features">
        {plan.features.map((feature) => (
          <li key={feature} className="pricing-card__feature">
            <span
              className="pricing-card__check"
              style={{ color: plan.color, background: `${plan.color}15` }}
              aria-hidden="true"
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`btn pricing-card__cta ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
        style={plan.popular ? {} : { borderColor: `${plan.color}50`, color: plan.color }}
        onClick={(e) => e.preventDefault()}
        aria-label={`${plan.cta} - ${plan.name} plan`}
      >
        {plan.cta}
      </a>

      {plan.popular && (
        <p className="pricing-card__guarantee">
          🔒 7-day money-back guarantee
        </p>
      )}
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing section" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <SectionHeader
          label="Simple Pricing"
          title="Invest in Your Rank"
          highlight="Your Rank"
          subtitle="Choose the plan that fits your preparation timeline. Every plan includes access to the CoreBTR app and Dr. Zainab Vora's proven BTR methodology."
        />

        {/* Billing toggle */}
        <div className="pricing__toggle" role="group" aria-label="Billing period">
          <button
            className={`pricing__toggle-btn ${!annual ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
          >
            Monthly
          </button>
          <button
            className={`pricing__toggle-btn ${annual ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
          >
            Annual
            <span className="pricing__toggle-save" aria-label="Save 20%">Save 20%</span>
          </button>
        </div>

        {/* Pricing grid */}
        <div className="pricing__grid">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} annual={annual} />
          ))}
        </div>

        {/* Bottom note */}
        <PricingNote />
      </div>
    </section>
  );
}

function PricingNote() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`pricing__note fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="pricing__note-items">
        {[
          { icon: '🔒', text: 'Secure payment via Razorpay' },
          { icon: '↩️', text: '7-day money-back guarantee' },
          { icon: '📱', text: 'Instant access on all devices' },
          { icon: '🤝', text: 'Cancel anytime, no questions' },
        ].map((item) => (
          <div key={item.text} className="pricing__note-item">
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
