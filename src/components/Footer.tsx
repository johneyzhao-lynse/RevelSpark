import React, { FC } from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import DownloadButtons from './ui/DownloadButtons';
import BrandName from './ui/BrandName';

interface FooterProps {
  language: 'en' | 'zh';
}

const Footer: FC<FooterProps> = ({ language }) => {
  return (
    <footer id="contact" className="bg-dark-bg text-gray-300 pt-16 pb-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand and Social */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="#" className="mb-4 inline-block">
              <img src="/images/logo.png" alt="Lynse Logo" className="h-8 filter brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-4 text-base">
              <BrandName size="md">Lynse</BrandName> {language === 'en' ? 'AI flash card' : 'AI 闪记卡'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
            <div className="mt-6 pl-0">
              {window.location.pathname !== '/' && window.location.pathname !== '/download' && (
                <DownloadButtons language={language} />
              )}
            </div>
          </div>

          {/* Quick Purchase */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'Quick Purchase' : '产品购买'}
            </h3>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Taobao Store' : '淘宝旗舰店'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'JD Store' : '京东旗舰店'}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'Support' : '服务与支持'}
            </h3>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <a href="/support/support-center.html" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Support Center' : '支持中心'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Contact Service' : '使用说明'}
                </a>
              </li>
              <li>
                <a href="/download" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Related News' : '软件下载'}
                </a>
              </li>
            </ul>
          </div>

          {/* About Lynse */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'About Lynse' : '关于 Lynse'}
            </h3>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'About Us' : '关于我们'}
                </a>
              </li>
              <li>
                <a href="/policy/privacy-policy.html" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Privacy Policy' : '相关资讯'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
             <h3 className="text-xl font-bold mb-4 text-white">
                {language === 'en' ? 'Contact Us' : '联系我们'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="text-gray-400 mr-3 mt-1" size={18} />
                  <p className="text-gray-300">contact@lynse-ai.com</p>
                </div>
                <div className="flex items-start">
                  <Phone className="text-gray-400 mr-3 mt-1" size={18} />
                  <p className="text-gray-300">+1 (86) 15618981688</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 mb-2 text-sm">{language === 'en' ? 'Subscribe to our newsletter' : '订阅我们的新闻通讯'}</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder={language === 'en' ? 'Your email address' : '您的电子邮件地址'}
                    className="bg-gray-700 text-white placeholder-gray-500 rounded-l-md px-4 py-2 w-full focus:ring-2 focus:ring-logo-blue/50 focus:outline-none text-sm"
                  />
                  <button className="bg-gradient-to-r from-logo-blue to-logo-cyan hover:from-accent hover:to-cyanaccent text-white py-2 px-4 rounded-r-md font-bold transition-all shadow-md text-sm">
                    {language === 'en' ? 'Subscribe' : '订阅'}
                  </button>
                </div>
              </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lynse Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/policy/privacy-policy.html" className="text-sm text-gray-500 hover:text-white">
              {language === 'en' ? 'Privacy Policy' : '隐私政策'}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">
              {language === 'en' ? 'Terms of Service' : '服务条款'}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">
              {language === 'en' ? 'Cookie Policy' : 'Cookie 政策'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
