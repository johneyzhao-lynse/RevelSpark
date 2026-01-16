import React, { useState } from 'react';
import { Link } from './ui/Link';
import { FaPhone } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';

interface AboutUsPageProps {
  language: 'en' | 'zh';
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError('请输入正确的邮箱地址');
      setSubscribeSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('请输入正确的邮箱地址');
      setSubscribeSuccess(false);
      return;
    }

    // In a real application, you would send this to your backend
    // For now, we'll just log it and show an alert
    console.log('Subscribing email:', email);
    // alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
    setEmailError('');
    setSubscribeSuccess(true);
  };

  const content = {
    en: {
      title: "About Us",
      subtitle: "Hello, we are Lynse AI",
      description: "Lynse AI is a cutting-edge technology company focused on creating truly practical human-computer interaction solutions. We are committed to developing high-quality products that are 'emotionally intelligent, personalized, and multi-modal interactive' that truly solve user problems.",
      mission: "Our Mission",
      missionText: "To bring the future of intelligent interaction to everyone through advanced technology, making technology more accessible and human-centered.",
      vision: "Our Vision",
      visionText: "To become the world's leading provider of AI-powered personal productivity tools, transforming how people capture, process, and utilize information in their daily lives.",
      values: "Our Values",
      valuesList: [
        "User-Centric Design: Every feature is built with the user experience in mind",
        "Innovation First: We continuously push the boundaries of what's possible with AI",
        "Privacy & Security: We protect user data with enterprise-grade security",
        "Accessibility: Technology should be available to everyone, everywhere"
      ],
      team: "Our Team",
      teamText: "Founded by a group of passionate engineers and designers, our team brings together expertise from leading tech companies and research institutions. We believe that the best products come from diverse perspectives and collaborative innovation.",
      contact: "Get in Touch",
      contactText: "We'd love to hear from you! Reach out to us at",
      address: "Address",
      addressDetail: "Shanghai RevelSpark Technologies Co., Ltd."
    },
    zh: {
      title: "关于我们",
      subtitle: "你好，我们是 Lynse AI",
      description: "Lynse AI 是一家专注于打造真正实用的人机交互体验的科技新消费品公司。我们始终致力于创造\"具有情感和个性化、多模态混合交互、真正能解决用户问题\"的高品质产品，把我们心中对未来的期许通过科技手段带到现实，让每个人都能感受未来智能的美好。",
      mission: "我们的使命",
      missionText: "通过先进的AI技术，让每个人都能享受到智能交互带来的便利，让科技更加人性化和普及化。",
      vision: "我们的愿景",
      visionText: "成为全球领先的AI个人生产力工具提供商，改变人们日常生活中捕获、处理和利用信息的方式。",
      values: "我们的价值观",
      valuesList: [
        "以用户为中心的设计：每个功能都以用户体验为核心",
        "创新优先：我们不断突破AI的可能性边界",
        "隐私与安全：我们用企业级安全保护用户数据",
        "普惠科技：让每个人都能随时随地使用先进技术"
      ],
      team: "我们的团队",
      teamText: "由一群充满激情的工程师和设计师创立，我们的团队汇集了来自领先科技公司和研究机构的专家。我们相信，最好的产品来自多元化的视角和协作创新。",
      contact: "联系我们",
      contactText: "我们很乐意听取您的意见！请通过以下方式联系我们：",
      address: "公司地址：",
      addressDetail: "上海市徐汇区虹漕路25-1号2楼，邮编：200233"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-50">
      <Header language={language} onLanguageChange={() => { }} />
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 via-white to-gray-100 transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 animate-fade-in-up">
            {/* Left Text Area */}
            <div className="flex-1 text-left transform transition-all duration-700 hover:scale-105">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-sans transition-all duration-500">
                {currentContent.title}
              </h1>
              <p className="text-xl sm:text-2xl text-orange-500 font-semibold mb-6 font-sans transition-all duration-500 delay-100">
                {currentContent.subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl transition-all duration-500 delay-200">
                {currentContent.description}
              </p>
            </div>

            {/* Right Visual Area */}
            <div className="flex-1 flex justify-center transform transition-all duration-700 hover:scale-105">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Abstract curve background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-50 blur-xl transition-all duration-1000 ease-in-out"></div>

                {/* Enhanced 3D Logo Representation */}
                <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center transform transition-all duration-700 hover:rotate-6">
                  {/* Outer rings */}
                  <div className="absolute w-full h-full rounded-full border-4 border-gray-400 opacity-70 animate-pulse transition-all duration-1000 ease-in-out" style={{ transform: 'scale(0.8) rotate(45deg)' }}></div>
                  <div className="absolute w-full h-full rounded-full border-4 border-cyan-300 opacity-70 animate-pulse transition-all duration-1000 ease-in-out" style={{ transform: 'scale(0.9) rotate(-45deg)' }}></div>

                  {/* Middle rings */}
                  <div className="absolute w-3/4 h-3/4 rounded-full border-3 border-blue-400 opacity-80 transition-all duration-700 ease-in-out" style={{ transform: 'scale(0.9) rotate(15deg)' }}></div>
                  <div className="absolute w-3/4 h-3/4 rounded-full border-3 border-cyan-400 opacity-80 transition-all duration-700 ease-in-out" style={{ transform: 'scale(0.9) rotate(-15deg)' }}></div>

                  {/* Inner core */}
                  <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110">
                    <span className="text-white font-bold text-lg sm:text-xl">LA</span>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(0deg)' }}></div>
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(60deg)' }}></div>
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(120deg)' }}></div>

                  {/* Transparent base */}
                  <div className="absolute bottom-0 w-24 h-3 sm:w-32 sm:h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-60 transition-all duration-1000 ease-in-out" style={{ transform: 'translateY(50%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {currentContent.mission}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {currentContent.missionText}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {currentContent.vision}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {currentContent.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {currentContent.contact}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {currentContent.contactText}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info with Newsletter */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {language === 'en' ? 'Contact Us' : '联系我们'}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaPhone className="w-5 h-5 text-primary" />
                    <span>{language === 'en' ? 'Phone: 17621502813 Mr. Zhao' : '电话：17621502813 赵先生'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>contact@lynse.ai</span>
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {language === 'en' ? 'Subscribe to our newsletter' : '订阅我们的邮件'}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === 'en' ? 'Get the latest updates and news about Lynse AI.' : '获取关于Lynse AI的最新更新和资讯。'}
                  </p>
                  <div className="relative flex flex-col">
                    <div className="flex">
                      <input
                        type="email"
                        placeholder={language === 'en' ? 'Your email address' : '您的邮箱地址'}
                        className="border border-gray-300 rounded-l-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          // Show error message in real-time during input
                          if (e.target.value && !validateEmail(e.target.value)) {
                            setEmailError('请输入正确的邮箱地址');
                          } else {
                            setEmailError('');
                          }
                          if (subscribeSuccess) setSubscribeSuccess(false);
                        }}
                        onBlur={() => {
                          // Hide success message when user leaves the input field
                          if (subscribeSuccess) setSubscribeSuccess(false);
                        }}
                      />
                      <button
                        className="bg-black hover:bg-black-dark text-white px-4 rounded-r-lg font-medium transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleSubscribe}
                        disabled={!email}
                      >
                        {language === 'en' ? 'Subscribe' : '订阅'}
                      </button>
                    </div>
                    {emailError && (
                      <p className="text-red-500 text-sm mt-2">{emailError}</p>
                    )}
                    {subscribeSuccess && (
                      <p className="text-green-500 text-sm mt-2">订阅成功</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  <a
                    href="mailto:support@lynse.ai"
                    className="bg-gradient-to-r from-logo-blue to-logo-cyan hover:from-accent hover:to-cyanaccent text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 text-center block"
                  >
                    {language === 'en' ? 'Support Email: support@lynse.ai' : '支持邮箱：support@lynse.ai'}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {language === 'en' ? 'Our Location' : '我们的位置'}
              </h3>
              <div className="h-96 overflow-hidden rounded-lg">
                <div className="w-full h-full relative">
                  <img
                    src="/images/address.webp"
                    alt="深圳市易尚创意科技大厦"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;