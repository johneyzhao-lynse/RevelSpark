import React, { useState, useEffect, useRef, FC, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from './ui/Link';



interface HeaderProps {
  language: 'en' | 'zh';
  onLanguageChange: (language: 'en' | 'zh') => void;
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 延迟关闭定时器
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // 使用useCallback和防抖优化滚动处理
  const handleScroll = useCallback(() => {
    // 简单的防抖实现
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);
  }, []);

  // 监听滚动事件以更改标题样式
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => onLanguageChange(language === 'en' ? 'zh' : 'en');


  const isAboutPage = window.location.pathname === '/about';

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 border rounded-full px-3 ${isScrolled
        ? 'bg-white/[0.87] backdrop-blur-[1.875rem] border-white/40 py-1.5 shadow-lg'
        : 'bg-white/[0.85] backdrop-blur-[1.875rem] border-white/30 py-1.5 shadow-md'
        } w-fit max-w-[95vw] md:max-w-[90vw] whitespace-nowrap flex justify-center`}
    >
      <div className="w-full flex items-center justify-between gap-2 md:gap-4 px-2">
        {/* Logo - 左侧 */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo/lynse-logo.png"
            alt="Lynse Logo"
            className="h-2.5 md:h-3 w-auto object-contain"
          />
        </Link>

        <React.Fragment>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <div className="flex items-center space-x-5">
              {/* Spark Card Product Directory Dropdown */}
              <div className="relative group">
                <button
                  className="text-black text-base font-semibold hover:text-gray-700 transition-all px-3 py-1.5 rounded-xl hover:bg-gray-50 flex items-center"
                >
                  Spark Card
                  <svg
                    className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-48 bg-white/70 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                  <Link
                    href="/sparkcard"
                    className="block px-4 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'Product' : '产品'}
                  </Link>
                  <Link
                    href="/#use-cases"
                    className="block px-4 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'Features' : '特性'}
                  </Link>
                </div>
              </div>

              <Link href="/download" className="text-black text-base font-semibold hover:text-gray-700 transition-colors duration-300 px-4 py-1.5 rounded-xl hover:bg-gray-50">
                {language === 'en' ? 'Download' : '下载'}
              </Link>
              <Link href="/SupportCenterPage" className="text-black text-base font-semibold hover:text-gray-700 transition-colors duration-300 px-4 py-1.5 rounded-xl hover:bg-gray-50">
                {language === 'en' ? 'Support' : '支持'}
              </Link>
              <Link href="/about" className="text-black text-base font-semibold hover:text-gray-700 transition-colors duration-300 px-4 py-1.5 rounded-xl hover:bg-gray-50">
                {language === 'en' ? 'About' : '关于'}
              </Link>
              <button
                className="flex items-center text-base font-semibold text-gray-600 hover:text-black px-4 py-1.5 rounded-xl hover:bg-gray-50 transition-all duration-300"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
              >
                <Globe size={14} className="mr-1.5" />
                <span>{language === 'en' ? 'EN' : '中文'}</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-xl hover:bg-gray-50 transition-all"
              aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Globe size={18} className="text-black" />
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 rounded-xl hover:bg-gray-50 transition-all">
              {isMenuOpen ? (
                <X size={20} className="text-black" />
              ) : (
                <Menu size={20} className="text-black" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 rounded-b-3xl mt-4">
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-3">
                {isAboutPage ? (
                  <Link href="/" className="text-black text-lg font-semibold px-4 py-3 rounded-xl hover:bg-gray-50" onClick={toggleMenu}>
                    {language === 'en' ? 'Back to Home' : '返回主页'}
                  </Link>
                ) : (
                  <>
                    <div className="px-4 py-3 rounded-xl text-sm font-medium text-black hover:bg-gray-50 cursor-pointer flex justify-between items-center transition-all"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <span>Spark Card</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href="/sparkcard"
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'Product' : '产品'}
                        </Link>
                        <Link
                          href="/#use-cases"
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'Features' : '特性'}
                        </Link>
                      </div>
                    )}
                    <Link
                      href="/download"
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-all"
                      onClick={toggleMenu}
                    >
                      {language === 'en' ? 'Download' : '下载'}
                    </Link>
                    <Link
                      href="/SupportCenterPage"
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-all"
                      onClick={toggleMenu}
                    >
                      {language === 'en' ? 'Support' : '支持'}
                    </Link>
                    <Link href="/about" className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-all" onClick={toggleMenu}>
                      {language === 'en' ? 'About' : '关于'}
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </React.Fragment>
      </div>
    </header>
  );
};

export default Header;