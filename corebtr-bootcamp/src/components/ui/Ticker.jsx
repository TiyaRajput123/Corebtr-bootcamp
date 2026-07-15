import './Ticker.css';

const TICKER_ITEMS = [
  { emoji: '🎯', text: 'Dr. Priya — NEET PG Rank 42' },
  { emoji: '⭐', text: '4.7★ on App Store & Google Play' },
  { emoji: '🏆', text: 'Dr. Arjun — INI-CET Rank 18' },
  { emoji: '📚', text: '19 Subjects. 120+ Hours of Video' },
  { emoji: '🎓', text: 'Dr. Sneha — NEET PG Rank 156' },
  { emoji: '🔥', text: '70%+ Strike Rate in NEET PG & INI-CET' },
  { emoji: '💊', text: 'Dr. Rahul — NEET PG Rank 89' },
  { emoji: '🚀', text: '50,000+ Active Students' },
  { emoji: '✨', text: 'Dr. Ananya — INI-CET Rank 67' },
  { emoji: '🧠', text: 'Believe. Trust. Revise. — The BTR Way' },
];

export default function Ticker() {
  // Double items so the seamless loop works
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker" aria-label="Student success highlights" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__emoji">{item.emoji}</span>
            <span className="ticker__text">{item.text}</span>
            <span className="ticker__sep">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
