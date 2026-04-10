import React, { useState, useEffect, lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import Footer from './components/Footer';
import MaintenancePage from './pages/MaintenancePage';

// Lazy load sub-pages
const DownloadPage = lazy(() => import('./components/ui/DownloadPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);


function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  // Lenis smooth scrolling
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.title = language === 'en'
      ? 'Lynse.ai - Capture Every Spark of Inspiration'
      : 'Lynse.ai｜灵光记 - 让灵光记住每一次灵感';
  }, [language]);

  const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
    setLanguage(newLanguage);
  };

  const pathname = window.location.pathname;

  // Determine page content based on route
  let pageContent: React.ReactNode;

  if (pathname === '/download') {
    pageContent = (
      <Suspense fallback={<PageLoader />}>
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <DownloadPage language={language} />
        <Footer language={language} />
      </Suspense>
    );
  } else if (pathname === '/') {
    // Homepage - 极简版本：只保留 Hero 和 Footer
    pageContent = (
      <>
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <HeroSection language={language} />
        <Footer language={language} />
      </>
    );
  } else {
    // All other pages are under maintenance
    pageContent = (
      <Suspense fallback={<PageLoader />}>
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <MaintenancePage language={language} />
        <Footer language={language} />
      </Suspense>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="font-sans">
        {pageContent}
      </div>
    </MotionConfig>
  );
}

export default App;
