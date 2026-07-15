import { useScrollProgress } from '../../hooks/useScrollProgress';
import './ScrollProgressBar.css';

export default function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page reading progress"
    >
      <div
        className="scroll-progress__fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
