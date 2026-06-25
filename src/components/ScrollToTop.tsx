import {useEffect, useState} from 'react';

const GOLD = '#dbb155';
const GOLD_DIM = 'rgba(219, 177, 85, 0.2)';
const GOLD_HALF = 'rgba(219, 177, 85, 0.5)';
const BG = 'oklch(14% 0 0 / 0.9)';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        border: `1px solid ${GOLD_DIM}`,
        background: BG,
        backdropFilter: 'blur(8px)',
        color: GOLD,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        zIndex: 9998,
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = GOLD_HALF;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 168, 76, 0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = GOLD_DIM;
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
      }}
    >
      ↑
    </button>
  );
}
