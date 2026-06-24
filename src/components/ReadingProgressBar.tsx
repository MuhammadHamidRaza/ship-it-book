import {useEffect, useState} from 'react';

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      zIndex: 9999,
      background: 'rgba(139, 92, 246, 0.1)',
    }}>
      <div style={{
        height: '100%',
        width: `${width}%`,
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        transition: 'width 0.15s ease-out',
        borderRadius: '0 2px 2px 0',
        boxShadow: '0 0 12px rgba(139, 92, 246, 0.4)',
      }} />
    </div>
  );
}
