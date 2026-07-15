import { useEffect, useState } from 'react';

/**
 * Tracks the vertical scroll progress of the page (0–100).
 * Used to drive the reading-progress bar and back-to-top visibility.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      setScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialise
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, scrollY };
}
