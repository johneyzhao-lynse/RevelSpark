import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from './ui/Link';

interface HeaderProps {
  language: 'en' | 'zh';
  onLanguageChange: (language: 'en' | 'zh') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            DtingNote
          </span>
          <span className="ml-1 text-sm text-gray-500">谛听记</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#product" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {language === 'en' ? 'Product' : '产品'}
          </Link>
          <Link href="#features" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {language === 'en' ? 'Features' : '特性'}
          </Link>
          <Link href="#specs" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {language === 'en' ? 'Specs' : '规格'}
          </Link>
          <Link href="#testimonials" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {language === 'en' ? 'Reviews' : '评价'}
          </Link>
          <Link href="#faq" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {language === 'en' ? 'FAQ' : '常见问题'}
          </Link>
          <button
            className="flex items-center text-sm font-medium bg-transparent"
            onClick={toggleLanguage}
          >
            <Globe size={16} className={`mr-1 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            <span className={isScrolled ? 'text-gray-800' : 'text-white'}>
              {language === 'en' ? 'EN / 中文' : '中文 / EN'}
            </span>
          </button>
          <Link
            href="#buy"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all"
          >
            {language === 'en' ? 'Buy Now' : '立即购买'}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleLanguage}
            className="mr-4"
            aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
          >
            <Globe size={20} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#product" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {language === 'en' ? 'Product' : '产品'}
            </Link>
            <Link href="#features" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {language === 'en' ? 'Features' : '特性'}
            </Link>
            <Link href="#specs" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {language === 'en' ? 'Specs' : '规格'}
            </Link>
            <Link href="#testimonials" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {language === 'en' ? 'Reviews' : '评价'}
            </Link>
            <Link href="#faq" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {language === 'en' ? 'FAQ' : '常见问题'}
            </Link>
            <Link
              href="#buy"
              className="bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-2 rounded-full transition-all"
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

export default Header