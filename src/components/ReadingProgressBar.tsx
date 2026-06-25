import {useEffect, useState} from 'react';

const GOLD = '#dbb155';
const GOLD_SOFT = '#f3d489';
const GOLD_DEEP = '#a47726';

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
      background: 'rgba(219, 177, 85, 0.08)',
    }}>
      <div style={{
        height: '100%',
        width: `${width}%`,
        background: `linear-gradient(90deg, ${GOLD_DEEP}, ${GOLD}, ${GOLD_SOFT})`,
        transition: 'width 0.15s ease-out',
        borderRadius: '0 2px 2px 0',
        boxShadow: `0 0 12px rgba(201, 168, 76, 0.4)`,
      }} />
    </div>
  );
}
