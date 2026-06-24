import {useEffect, useState} from 'react';

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
        border: '1px solid rgba(245, 158, 11, 0.2)',
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(8px)',
        color: '#f59e0b',
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
        e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.5)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 158, 11, 0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.2)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
      }}
    >
      ↑
    </button>
  );
}
