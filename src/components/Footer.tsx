import React, { FC } from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Apple, Cuboid as Android } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'zh';
}

const Footer: FC<FooterProps> = ({ language }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-b from-lightblue via-paleblue to-white/80 text-primary pt-16 pb-8 border-t border-paleblue backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 select-none">
              <img src="/images/logo.png" alt="lynse logo" className="max-w-[60px] h-[36px] w-auto object-contain mr-3" />
            </div>
            <p className="text-logo-blue mb-4 text-base">
              {language === 'en'
                ? 'Transforming speech into valuable information with AI-powered technology.'
                : '利用AI技术将语音转化为有价值的信息。'}
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors"><Linkedin size={20} /></a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-lightblue hover:bg-paleblue transition-colors px-4 py-2 rounded-xl"
              >
                <Apple size={20} className="text-logo-blue" />
                <span className="text-logo-blue">{language === 'en' ? 'App Store' : 'App Store'}</span>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-lightblue hover:bg-paleblue transition-colors px-4 py-2 rounded-xl"
              >
                <Android size={20} className="text-logo-blue" />
                <span className="text-logo-blue">{language === 'en' ? 'Play Store' : '安卓商店'}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-logo-blue">
              {language === 'en' ? 'Quick Links' : '快速链接'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#product" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Product' : '产品'}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Features' : '特性'}
                </Link>
              </li>
              <li>
                <Link href="#specs" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Specifications' : '规格'}
                </Link>
              </li>
              <li>
                <Link href="#buy" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Pricing' : '价格'}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'FAQ' : '常见问题'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-logo-blue">
              {language === 'en' ? 'Resources' : '资源'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Support Center' : '支持中心'}
                </a>
              </li>
              <li>
                <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'User Guides' : '用户指南'}
                </a>
              </li>
              <li>
                <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'API Documentation' : 'API文档'}
                </a>
              </li>
              <li>
                <a href="/policy/privacy-policy.html" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                </a>
              </li>
              <li>
                <a href="#" className="text-logo-blue hover:text-logo-cyan transition-colors">
                  {language === 'en' ? 'Terms of Service' : '服务条款'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-logo-blue">
              {language === 'en' ? 'Contact Us' : '联系我们'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-logo-blue mr-3 mt-1" size={18} />
                <div>
                  <p className="text-logo-blue">contact@lynse-ai.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-logo-blue mr-3 mt-1" size={18} />
                <div>
                  <p className="text-logo-blue">+1 (86) 15618981688</p>
                </div>
              </div>
            </div>
            <form className="mt-4">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email' : '您的邮箱'}
                className="bg-lightblue text-logo-blue rounded-xl px-4 py-2 w-full mb-2 border border-paleblue focus:ring-2 focus:ring-logo-blue/20 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-logo-blue to-logo-cyan hover:from-accent hover:to-cyanaccent text-white py-2 px-4 rounded-xl w-full font-bold transition-all shadow-md">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </form>
          </div>
        </div>

        <hr className="border-paleblue mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-logo-blue mb-4 md:mb-0">
            © {year} lynse AI. {language === 'en' ? 'All rights reserved.' : '保留所有权利。'}
          </p>
          <div className="flex space-x-6">
            <a href="/policy/privacy-policy.html" className="text-sm text-logo-blue hover:text-logo-cyan">
              {language === 'en' ? 'Privacy Policy' : '隐私政策'}
            </a>
            <a href="#" className="text-sm text-logo-blue hover:text-logo-cyan">
              {language === 'en' ? 'Terms of Service' : '服务条款'}
            </a>
            <a href="#" className="text-sm text-logo-blue hover:text-logo-cyan">
              {language === 'en' ? 'Cookie Policy' : 'Cookie政策'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer