import React, { useState, useEffect, useRef, FC, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from './ui/Link';

interface HeaderProps {
  language: 'en' | 'zh';
  onLanguageChange: (language: 'en' | 'zh') => void;
  navigate?: (path: string) => void;
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange, navigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsDropdownOpen(false);
  };
  const toggleLanguage = () => onLanguageChange(language === 'en' ? 'zh' : 'en');

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <header
        className={`fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 rounded-full w-fit max-w-[95vw] md:max-w-[90vw] ${
          isScrolled
            ? 'bg-[#FAFAFA]/80 backdrop-blur-2xl border border-black/[0.06] py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : 'bg-white/60 backdrop-blur-xl border border-black/[0.04] py-2 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="w-full flex items-center justify-between gap-3 md:gap-6 px-3 md:px-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" navigate={navigate} onClick={closeMenu}>
            <img
              src="/logo/lynse-logo.png"
              alt="Lynse Logo"
              className="h-3 md:h-3.5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Spark Card Dropdown */}
            <div className="relative group">
              <button className="text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors px-3 py-1.5 rounded-full hover:bg-black/[0.04] flex items-center">
                Spark Card
                <svg className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-44 bg-white/80 backdrop-blur-2xl rounded-2xl border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-1 group-hover:translate-y-0">
                <Link href="/sparkcard" className="block px-4 py-2.5 text-[13px] text-[#525252] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all rounded-xl mx-1" navigate={navigate}>
                  {language === 'en' ? 'Product' : '产品'}
                </Link>
                <Link href="/#use-cases" className="block px-4 py-2.5 text-[13px] text-[#525252] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all rounded-xl mx-1" navigate={navigate}>
                  {language === 'en' ? 'Features' : '特性'}
                </Link>
              </div>
            </div>

            <Link href="/download" className="text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors px-3 py-1.5 rounded-full hover:bg-black/[0.04]" navigate={navigate}>
              {language === 'en' ? 'Download' : '下载'}
            </Link>
            <Link href="/SupportCenterPage" className="text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors px-3 py-1.5 rounded-full hover:bg-black/[0.04]" navigate={navigate}>
              {language === 'en' ? 'Support' : '支持'}
            </Link>
            <Link href="/about" className="text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors px-3 py-1.5 rounded-full hover:bg-black/[0.04]" navigate={navigate}>
              {language === 'en' ? 'About' : '关于'}
            </Link>

            <div className="w-px h-4 bg-black/[0.06] mx-1" />

            <button
              className="flex items-center text-[13px] font-medium text-[#737373] hover:text-[#0A0A0A] px-3 py-1.5 rounded-full hover:bg-black/[0.04] transition-all"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Globe size={13} className="mr-1.5" />
              <span>{language === 'en' ? 'EN' : '中文'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-1">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-black/[0.04] transition-all"
              aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Globe size={16} className="text-[#525252]" />
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 rounded-full hover:bg-black/[0.04] transition-all">
              {isMenuOpen ? <X size={18} className="text-[#0A0A0A]" /> : <Menu size={18} className="text-[#0A0A0A]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - rendered outside header to avoid overflow clipping */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-[999] bg-black/20 backdrop-blur-sm md:hidden" onClick={closeMenu} />
          <div className="fixed top-[60px] left-3 right-3 z-[1001] md:hidden bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.12)] animate-fadeIn">
            <div className="px-4 py-5 flex flex-col gap-1">
              {/* Spark Card */}
              <div className="px-4 py-3 rounded-xl text-[14px] font-medium text-[#525252] hover:text-[#0A0A0A] hover:bg-black/[0.03] cursor-pointer flex justify-between items-center transition-all"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>Spark Card</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {isDropdownOpen && (
                <div className="pl-4 space-y-0.5">
                  <Link href="/sparkcard" className="block px-4 py-2.5 rounded-xl text-[14px] text-[#737373] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all" onClick={closeMenu} navigate={navigate}>
                    {language === 'en' ? 'Product' : '产品'}
                  </Link>
                  <Link href="/#use-cases" className="block px-4 py-2.5 rounded-xl text-[14px] text-[#737373] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all" onClick={closeMenu} navigate={navigate}>
                    {language === 'en' ? 'Features' : '特性'}
                  </Link>
                </div>
              )}
              <Link href="/download" className="block px-4 py-3 rounded-xl text-[14px] font-medium text-[#525252] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all" onClick={closeMenu} navigate={navigate}>
                {language === 'en' ? 'Download' : '下载'}
              </Link>
              <Link href="/SupportCenterPage" className="block px-4 py-3 rounded-xl text-[14px] font-medium text-[#525252] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all" onClick={closeMenu} navigate={navigate}>
                {language === 'en' ? 'Support' : '支持'}
              </Link>
              <Link href="/about" className="block px-4 py-3 rounded-xl text-[14px] font-medium text-[#525252] hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-all" onClick={closeMenu} navigate={navigate}>
                {language === 'en' ? 'About' : '关于'}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
