import React from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Apple, Cuboid as Android } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'zh';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                DtingNote
              </span>
              <span className="ml-1 text-sm text-gray-400">谛听记</span>
            </div>
            <p className="text-gray-400 mb-4">
              {language === 'en'
                ? 'Transforming speech into valuable information with AI-powered technology.'
                : '利用AI技术将语音转化为有价值的信息。'}
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
              >
                <Apple size={20} />
                <span>{language === 'en' ? 'App Store' : 'App Store'}</span>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
              >
                <Android size={20} />
                <span>{language === 'en' ? 'Play Store' : '安卓商店'}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Quick Links' : '快速链接'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#product" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Product' : '产品'}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Features' : '特性'}
                </Link>
              </li>
              <li>
                <Link href="#specs" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Specifications' : '规格'}
                </Link>
              </li>
              <li>
                <Link href="#buy" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Pricing' : '价格'}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'FAQ' : '常见问题'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Resources' : '资源'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Support Center' : '支持中心'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'User Guides' : '用户指南'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'API Documentation' : 'API文档'}
                </a>
              </li>
              <li>
                <a href="/public/policy/privacy-policy.html" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {language === 'en' ? 'Terms of Service' : '服务条款'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Contact Us' : '联系我们'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-gray-400 mr-3 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">contact@lynse-ai.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-gray-400 mr-3 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">+1 (86) 15618981688</p>
                </div>
              </div>
            </div>
            <form className="mt-4">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email' : '您的邮箱'}
                className="bg-gray-800 text-white rounded-lg px-4 py-2 w-full mb-2"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full transition-colors">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {year} DtingNote AI. {language === 'en' ? 'All rights reserved.' : '保留所有权利。'}
          </p>
          <div className="flex space-x-6">
            <a href="/policy/privacy-policy.html" className="text-sm text-gray-500 hover:text-gray-400">
              {language === 'en' ? 'Privacy Policy' : '隐私政策'}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
              {language === 'en' ? 'Terms of Service' : '服务条款'}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
              {language === 'en' ? 'Cookie Policy' : 'Cookie政策'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer