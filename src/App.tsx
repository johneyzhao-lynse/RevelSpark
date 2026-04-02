import React, { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import ValuePropStrip from './components/home/ValuePropStrip';
import ProductShowcase from './components/home/ProductShowcase';
import UseCasesSection from './components/home/UseCasesSection';
import AppPreview from './components/home/AppPreview';
import TrustSection from './components/home/TrustSection';
import PreorderCTA from './components/home/PreorderCTA';
import Footer from './components/Footer';

// Lazy load sub-pages
const DownloadPage = lazy(() => import('./components/ui/DownloadPage'));
const AboutUsPage = lazy(() => import('./components/AboutUsPage'));
const TestQRCode = lazy(() => import('./components/ui/TestQRCode'));
const SolutionsPage = lazy(() => import('./components/SolutionsPage'));
const QuickStartGuidePage = lazy(() => import('./pages/QuickStartGuidePage'));
const SupportCenterPage = lazy(() => import('./pages/SupportCenterPage'));
const SparkCardPage = lazy(() => import('./pages/SparkCardPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);


function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  React.useEffect(() => {
    document.title = language === 'en'
      ? 'Lynse.ai - Capture Every Spark of Inspiration'
      : 'Lynse.ai｜灵光记 - 让灵光记住每一次灵感';
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [language]);

  const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
    setLanguage(newLanguage);
  };

  const pathname = window.location.pathname;

  // Product page
  if (pathname === '/sparkcard') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="font-sans">
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <SparkCardPage language={language} />
          <Footer language={language} />
        </div>
      </Suspense>
    );
  }

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

  // Homepage
  return (
    <div className="font-sans">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <ValuePropStrip language={language} />
      <ProductShowcase language={language} />
      <UseCasesSection language={language} />
      <AppPreview language={language} />
      <TrustSection language={language} />
      <PreorderCTA language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
