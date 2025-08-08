import React from 'react';
import { Link } from './ui/Link';
import { FaPhone } from 'react-icons/fa';

interface AboutUsPageProps {
  language: 'en' | 'zh';
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ language }) => {
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
      addressDetail: "Room 1608, Yishang Creative Technology Building, No. 22 Jia'an South Road, Haibin Community, Xin'an Street, Bao'an District, Shenzhen"
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
      addressDetail: "深圳市宝安区新安街道海滨社区甲岸南路22号易尚创意科技大厦1608"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-white to-cyan-50 transition-all duration-1000 ease-in-out">
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50 blur-xl transition-all duration-1000 ease-in-out"></div>
                
                {/* Enhanced 3D Logo Representation */}
                <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center transform transition-all duration-700 hover:rotate-6">
                  {/* Outer rings */}
                  <div className="absolute w-full h-full rounded-full border-4 border-blue-300 opacity-70 animate-pulse transition-all duration-1000 ease-in-out" style={{ transform: 'scale(0.8) rotate(45deg)' }}></div>
                  <div className="absolute w-full h-full rounded-full border-4 border-cyan-300 opacity-70 animate-pulse transition-all duration-1000 ease-in-out" style={{ transform: 'scale(0.9) rotate(-45deg)' }}></div>
                  
                  {/* Middle rings */}
                  <div className="absolute w-3/4 h-3/4 rounded-full border-3 border-blue-400 opacity-80 transition-all duration-700 ease-in-out" style={{ transform: 'scale(0.9) rotate(15deg)' }}></div>
                  <div className="absolute w-3/4 h-3/4 rounded-full border-3 border-cyan-400 opacity-80 transition-all duration-700 ease-in-out" style={{ transform: 'scale(0.9) rotate(-15deg)' }}></div>
                  
                  {/* Inner core */}
                  <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110">
                    <span className="text-white font-bold text-lg sm:text-xl">LA</span>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(0deg)' }}></div>
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(60deg)' }}></div>
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(120deg)' }}></div>
                  
                  {/* Transparent base */}
                  <div className="absolute bottom-0 w-24 h-3 sm:w-32 sm:h-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-60 transition-all duration-1000 ease-in-out" style={{ transform: 'translateY(50%)' }}></div>
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
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {currentContent.address}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {currentContent.addressDetail}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaPhone className="w-5 h-5 text-primary" />
                  <span>电话：17621502813 赵先生</span>
                </div>
                <a 
                  href="mailto:support@lynse-ai.com" 
                  className="bg-gradient-to-r from-logo-blue to-logo-cyan hover:from-accent hover:to-cyanaccent text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 text-center"
                >
                  support@lynse-ai.com
                </a>
                <Link 
                  href="/" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all text-center"
                >
                  返回主页
                </Link>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-2xl p-4 shadow-lg h-96">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <iframe
                  src="https://uri.amap.com/marker?position=113.884964,22.549949&name=易尚创意科技大厦&src=l Lynse AI&coordinate=gaode&callnative=0"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="深圳市易尚创意科技大厦"
                  className="transition-opacity duration-300"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;