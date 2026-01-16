import React, { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import AppFeaturesSection from './components/AppFeaturesSection';
import FeaturesSection from './components/FeaturesSection';
import SpecsSection from './components/SpecsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Lazy load sub-pages
const DownloadPage = lazy(() => import('./components/ui/DownloadPage'));
const AboutUsPage = lazy(() => import('./components/AboutUsPage'));
const TestQRCode = lazy(() => import('./components/ui/TestQRCode'));
const SolutionsPage = lazy(() => import('./components/SolutionsPage'));
const QuickStartGuidePage = lazy(() => import('./pages/QuickStartGuidePage'));
const SupportCenterPage = lazy(() => import('./pages/SupportCenterPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);


function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  // Update page title based on language
  React.useEffect(() => {
    document.title = language === 'en'
      ? 'Lynse AI MemoCard  - AI Bluetooth Recording Card'
      : 'Lynse AI 闪记卡 - 智能录音转写设备';

    // Add smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [language]);

  const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
    setLanguage(newLanguage);
  };

  // 路由判断
  const pathname = window.location.pathname;
  if (pathname === '/download') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <DownloadPage language={language} />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }

  if (pathname === '/test-qrcode') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <TestQRCode />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }

  if (pathname === '/about') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <AboutUsPage language={language} />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }

  if (pathname === '/solutions') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <SolutionsPage language={language} />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }

  if (pathname === '/SupportCenterPage' || pathname === '/support/support-center.html') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <SupportCenterPage />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }

  if (pathname === '/QuickStartGuidePage' || pathname === '/support/quick-start') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <QuickStartGuidePage />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }



  return (
    <div className="font-sans">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <ProductSection language={language} />
      <AppFeaturesSection language={language} />
      <FeaturesSection language={language} />
      <SpecsSection language={language} />
      <TestimonialsSection language={language} />
      <FAQSection language={language} />
      <CTASection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;