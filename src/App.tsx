import React, { useState } from 'react';
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
import DownloadPage from './components/ui/DownloadPage';
import AboutUsPage from './components/AboutUsPage';

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
      <div className="font-sans">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <DownloadPage language={language} />
        <Footer language={language} />
      </div>
    );
  }
  
  if (pathname === '/about') {
    return (
      <div className="font-sans">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <AboutUsPage language={language} />
        <Footer language={language} />
      </div>
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