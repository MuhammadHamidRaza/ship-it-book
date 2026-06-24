import React from 'react';
import ReadingProgressBar from '../components/ReadingProgressBar';
import ScrollToTop from '../components/ScrollToTop';

export default function Root({children}) {
  return (
    <>
      <ReadingProgressBar />
      <ScrollToTop />
      {children}
    </>
  );
}
