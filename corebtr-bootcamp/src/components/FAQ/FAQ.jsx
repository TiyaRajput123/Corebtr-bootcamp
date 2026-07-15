import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionHeader from '../ui/SectionHeader';
import { FAQ_ITEMS } from '../../data/constants';
import './FAQ.css';

function FAQItem({ item, index, isOpen, onToggle }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`faq-item fade-up ${isVisible ? 'visible' : ''} ${isOpen ? 'faq-item--open' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="faq-item__question">{item.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="faq-item__body"
      >
        <p className="faq-item__answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeader
          label="FAQ"
          title="Got Questions? We've Got Answers."
          highlight="We've Got Answers."
          subtitle="Everything you need to know about the CoreBTR Bootcamp and how it can transform your PG preparation."
        />

        <div className="faq__layout">
          <div
            className="faq__list"
            role="list"
            aria-label="Frequently asked questions"
          >
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={item.question}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>

          <FAQSidebar />
        </div>
      </div>
    </section>
  );
}

function FAQSidebar() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <aside
      ref={ref}
      className={`faq__sidebar fade-up ${isVisible ? 'visible' : ''}`}
      aria-label="Still have questions?"
    >
      <div className="faq__sidebar-card">
        <div className="faq__sidebar-icon" aria-hidden="true">💬</div>
        <h3 className="faq__sidebar-title">Still have questions?</h3>
        <p className="faq__sidebar-text">
          Our team is here to help. Reach out on any channel and we'll get back to you within 24 hours.
        </p>
        <div className="faq__sidebar-contacts">
          <a
            href="https://t.me/corebtr"
            target="_blank"
            rel="noopener noreferrer"
            className="faq__sidebar-contact"
          >
            <span aria-hidden="true">✈️</span>
            Join Telegram Community
          </a>
          <a
            href="mailto:support@corebtr.com"
            className="faq__sidebar-contact"
          >
            <span aria-hidden="true">📧</span>
            support@corebtr.com
          </a>
          <a
            href="https://instagram.com/corebtr"
            target="_blank"
            rel="noopener noreferrer"
            className="faq__sidebar-contact"
          >
            <span aria-hidden="true">📸</span>
            @corebtr on Instagram
          </a>
        </div>
      </div>

      <div className="faq__sidebar-stats">
        <div className="faq__sidebar-stat">
          <span className="faq__sidebar-stat-value gradient-text">{'< 24h'}</span>
          <span className="faq__sidebar-stat-label">Response time</span>
        </div>
        <div className="faq__sidebar-stat">
          <span className="faq__sidebar-stat-value gradient-text">50K+</span>
          <span className="faq__sidebar-stat-label">Happy students</span>
        </div>
      </div>
    </aside>
  );
}
