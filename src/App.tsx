import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { Language } from './data/constants';
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

// Map country code to language
function countryToLanguage(country: string): Language {
  const map: Record<string, Language> = {
    CN: 'zh',
    TW: 'zh-TW',
    HK: 'zh-TW',
    MO: 'zh-TW',
    JP: 'ja',
  };
  return map[country.toUpperCase()] || 'en';
}

// Instant initial guess from browser language
function guessLanguageFromBrowser(): Language {
  const lang = navigator.language || '';
  if (lang.startsWith('zh-CN') || lang === 'zh') return 'zh';
  if (lang.startsWith('zh-TW') || lang.startsWith('zh-HK')) return 'zh-TW';
  if (lang.startsWith('ja')) return 'ja';
  return 'en';
}

// Detect language: check saved preference, then IP geolocation
function detectLanguage(): Language {
  const saved = localStorage.getItem('lynse-lang');
  if (saved && ['en', 'zh', 'zh-TW', 'ja'].includes(saved)) {
    return saved as Language;
  }
  return guessLanguageFromBrowser();
}

function getInitialRoute(): Route {
  const path = window.location.pathname;
  if (path === '/sparkcard') return '/sparkcard';
  if (path === '/about') return '/about';
  if (path === '/SupportCenterPage') return '/SupportCenterPage';
  return '/download'; // 主页设计未完成，默认跳转下载页
}

function App() {
  const [language, setLanguage] = useState<Language>(detectLanguage);
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
    const titles: Record<Language, string> = {
      en: 'Lynse.ai - Capture Every Spark of Inspiration',
      zh: 'Lynse.ai｜灵光记 - 让灵光记住每一次灵感',
      'zh-TW': 'Lynse.ai｜靈光記 - 讓靈光記住每一次靈感',
      ja: 'Lynse.ai｜Spark Card - すべてのインスピレーションを記録',
    };
    document.title = titles[language];
  }, [language]);

  const handleLanguageChange = (newLanguage: Language) => {
    localStorage.setItem('lynse-lang', newLanguage);
    setLanguage(newLanguage);
  };

  // IP geolocation detection (async, runs once if no saved preference)
  useEffect(() => {
    if (localStorage.getItem('lynse-lang')) return;
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country) {
          const lang = countryToLanguage(data.country);
          setLanguage(lang);
        }
      })
      .catch(() => {});
  }, []);

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
