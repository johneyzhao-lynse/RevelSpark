import React, { useState, useEffect, FC } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from './ui/Link';

interface HeaderProps {
  language: 'en' | 'zh';
  onLanguageChange: (language: 'en' | 'zh') => void;
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => onLanguageChange(language === 'en' ? 'zh' : 'en');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 shadow-lg backdrop-blur-xl border-b border-lightblue py-2' : 'bg-gradient-to-b from-lightblue to-white/80 py-6'
      }`}
      style={{ boxShadow: isScrolled ? '0 4px 24px 0 rgba(26,109,255,0.08)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center select-none">
          <img src="/images/logo.png" alt="lynse logo" className="max-w-[150px] h-[45px] w-auto object-contain mr-3" />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="#product" className="text-primary text-lg font-semibold hover:text-secondary hover:underline underline-offset-8 decoration-2 decoration-secondary transition-all px-2 py-1 rounded-lg hover:bg-lightblue/60">
            {language === 'en' ? 'Product' : '产品'}
          </Link>
          <Link href="#features" className="text-primary text-lg font-semibold hover:text-secondary hover:underline underline-offset-8 decoration-2 decoration-secondary transition-all px-2 py-1 rounded-lg hover:bg-lightblue/60">
            {language === 'en' ? 'Features' : '特性'}
          </Link>
          <Link href="#specs" className="text-primary text-lg font-semibold hover:text-secondary hover:underline underline-offset-8 decoration-2 decoration-secondary transition-all px-2 py-1 rounded-lg hover:bg-lightblue/60">
            {language === 'en' ? 'Specs' : '规格'}
          </Link>
          <Link href="#testimonials" className="text-primary text-lg font-semibold hover:text-secondary hover:underline underline-offset-8 decoration-2 decoration-secondary transition-all px-2 py-1 rounded-lg hover:bg-lightblue/60">
            {language === 'en' ? 'Reviews' : '评价'}
          </Link>
          <Link href="#faq" className="text-primary text-lg font-semibold hover:text-secondary hover:underline underline-offset-8 decoration-2 decoration-secondary transition-all px-2 py-1 rounded-lg hover:bg-lightblue/60">
            {language === 'en' ? 'FAQ' : '常见问题'}
          </Link>
          <button
            className="flex items-center text-base font-medium bg-transparent px-2 py-1 rounded-lg hover:bg-lightblue/60 transition-all"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
          >
            <Globe size={18} className="mr-1 text-primary" />
            <span className="text-primary">{language === 'en' ? 'EN / 中文' : '中文 / EN'}</span>
          </button>
          <Link
            href="#buy"
            className="bg-gradient-to-r from-logo-blue to-logo-cyan hover:from-accent hover:to-cyanaccent text-white px-7 py-2 rounded-full text-lg font-bold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-logo-blue"
          >
            {language === 'en' ? 'Buy Now' : '立即购买'}
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleLanguage}
            className="mr-2 p-2 rounded-full hover:bg-lightblue/60 transition-all"
            aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
          >
            <Globe size={22} className="text-primary" />
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 rounded-full hover:bg-lightblue/60 transition-all">
            {isMenuOpen ? (
              <X size={28} className="text-primary" />
            ) : (
              <Menu size={28} className="text-primary" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-xl backdrop-blur-md rounded-b-2xl">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link href="#product" className="text-primary text-lg font-semibold" onClick={toggleMenu}>
              {language === 'en' ? 'Product' : '产品'}
            </Link>
            <Link href="#features" className="text-primary text-lg font-semibold" onClick={toggleMenu}>
              {language === 'en' ? 'Features' : '特性'}
            </Link>
            <Link href="#specs" className="text-primary text-lg font-semibold" onClick={toggleMenu}>
              {language === 'en' ? 'Specs' : '规格'}
            </Link>
            <Link href="#testimonials" className="text-primary text-lg font-semibold" onClick={toggleMenu}>
              {language === 'en' ? 'Reviews' : '评价'}
            </Link>
            <Link href="#faq" className="text-primary text-lg font-semibold" onClick={toggleMenu}>
              {language === 'en' ? 'FAQ' : '常见问题'}
            </Link>
            <Link
              href="#buy"
              className="bg-gradient-to-r from-logo-blue to-logo-cyan text-white text-center px-7 py-2 rounded-full text-lg font-bold shadow-md transition-all"
              onClick={toggleMenu}
            >
              {language === 'en' ? 'Buy Now' : '立即购买'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;