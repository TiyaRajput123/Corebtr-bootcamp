import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionHeader from '../ui/SectionHeader';
import { SUBJECTS } from '../../data/constants';
import './Curriculum.css';

function SubjectCard({ subject, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`subject-card fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <span
        className="subject-card__icon"
        style={{ background: `${subject.color}15`, border: `1px solid ${subject.color}30` }}
        aria-hidden="true"
      >
        {subject.icon}
      </span>
      <span className="subject-card__name">{subject.name}</span>
      <span
        className="subject-card__dot"
        style={{ background: subject.color }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function Curriculum() {
  const [expanded, setExpanded] = useState(false);
  const visibleSubjects = expanded ? SUBJECTS : SUBJECTS.slice(0, 12);

  return (
    <section className="curriculum section" id="curriculum" aria-labelledby="curriculum-heading">
      <div className="container">
        <SectionHeader
          label="Complete Curriculum"
          title="19 Subjects. Zero Gaps."
          highlight="Zero Gaps."
          subtitle="CoreBTR covers the complete medical PG syllabus — every high-yield topic across all 19 subjects, engineered for NEET PG, INI-CET, and FMGE."
        />

        {/* Subject grid */}
        <div className="curriculum__grid">
          {visibleSubjects.map((subject, i) => (
            <SubjectCard key={subject.name} subject={subject} index={i} />
          ))}
        </div>

        {/* Show more / less toggle */}
        {!expanded && SUBJECTS.length > 12 && (
          <div className="curriculum__expand">
            <button
              className="curriculum__expand-btn"
              onClick={() => setExpanded(true)}
              aria-label="Show all subjects"
            >
              Show all {SUBJECTS.length} subjects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Info strip */}
        <CurriculumInfoStrip />
      </div>
    </section>
  );
}

function CurriculumInfoStrip() {
  const [ref, isVisible] = useIntersectionObserver();
  const items = [
    { icon: '🎯', text: 'High-yield focus — only exam-relevant content' },
    { icon: '🔄', text: 'Updated for latest exam patterns' },
    { icon: '📱', text: 'Access on all devices, anytime' },
    { icon: '⚡', text: 'Revision-first approach for faster recall' },
  ];

  return (
    <div ref={ref} className={`curriculum__info-strip fade-up ${isVisible ? 'visible' : ''}`}>
      {items.map((item) => (
        <div key={item.text} className="curriculum__info-item">
          <span className="curriculum__info-icon" aria-hidden="true">{item.icon}</span>
          <span className="curriculum__info-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
