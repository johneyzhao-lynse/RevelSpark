import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
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

type Route = '/' | '/download' | '/sparkcard' | '/about' | '/SupportCenterPage' | 'maintenance';

function getInitialRoute(): Route {
  const path = window.location.pathname;
  if (path === '/sparkcard') return '/sparkcard';
  if (path === '/about') return '/about';
  if (path === '/SupportCenterPage') return '/SupportCenterPage';
  return '/download'; // 主页设计未完成，默认跳转下载页
}

function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  const [route, setRoute] = useState<Route>(getInitialRoute);

  const navigate = useCallback((path: string) => {
    const validRoutes: Record<string, Route> = {
      '/': '/',
      '/download': '/download',
      '/sparkcard': '/sparkcard',
      '/about': '/about',
      '/SupportCenterPage': '/SupportCenterPage',
    };
    const r = validRoutes[path] ?? 'maintenance';
    setRoute(r);
    window.history.pushState({}, '', path);
  }, []);

  // Sync route on browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lenis smooth scrolling - skip on mobile for better performance
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) return;

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

  // Determine page content based on route
  let pageContent: React.ReactNode;

  if (route === '/download') {
    pageContent = (
      <Suspense fallback={<PageLoader />}>
        <Header language={language} onLanguageChange={handleLanguageChange} navigate={navigate} />
        <DownloadPage language={language} />
        <Footer language={language} navigate={navigate} />
      </Suspense>
    );
  } else if (route === '/') {
    pageContent = (
      <>
        <Header language={language} onLanguageChange={handleLanguageChange} navigate={navigate} />
        <HeroSection language={language} />
        <Footer language={language} navigate={navigate} />
      </>
    );
  } else {
    pageContent = (
      <Suspense fallback={<PageLoader />}>
        <Header language={language} onLanguageChange={handleLanguageChange} navigate={navigate} />
        <MaintenancePage language={language} />
        <Footer language={language} navigate={navigate} />
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
