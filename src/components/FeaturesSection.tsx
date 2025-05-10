import React from 'react';
import { MessageSquare, Mic, Zap, Share2, Languages, Lock, Wifi, Smartphone } from 'lucide-react';

interface FeaturesSectionProps {
  language: 'en' | 'zh';
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="relative group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl text-white">
        {icon}
      </div>
      <div className="ml-2 mt-2">
        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-3 leading-snug">{title}</h3>
        <p className="text-gray-700 leading-normal">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ language }) => {
  const features = language === 'en' ? [
    {
      icon: <MessageSquare size={20} />,
      title: "Real-time Transcription",
      description: "Convert speech to text instantly with advanced AI algorithms that ensure accuracy even in noisy environments."
    },
    {
      icon: <Mic size={20} />,
      title: "Crystal Clear Audio",
      description: "Capture high-quality audio with noise cancellation technology for perfect recordings every time."
    },
    {
      icon: <Zap size={20} />,
      title: "Long Battery Life",
      description: "Up to 12 hours of continuous recording on a single charge, so you never miss important moments."
    },
    {
      icon: <Share2 size={20} />,
      title: "Seamless Sharing",
      description: "Export and share your recordings and transcriptions to any device or platform with just a tap."
    },
    {
      icon: <Languages size={20} />,
      title: "Multilingual Support",
      description: "Transcribe and translate in over 30 languages with impressive accuracy and natural phrasing."
    },
    {
      icon: <Lock size={20} />,
      title: "Privacy First",
      description: "Your data stays on the device with optional cloud backup, giving you complete control over your privacy."
    }
  ] : [
    {
      icon: <MessageSquare size={20} />,
      title: "实时转写",
      description: "先进的AI算法即时将语音转换为文本，即使在嘈杂的环境中也能确保准确性。"
    },
    {
      icon: <Mic size={20} />,
      title: "内置多麦克风降噪算法",
      description: "采用降噪技术捕捉高质量音频，每次都能获得完美录音。"
    },
    {
      icon: <Zap size={20} />,
      title: "超长电池寿命",
      description: "单次充电可持续录制长达30小时，让您永不错过重要时刻。"
    },
    {
      icon: <Share2 size={20} />,
      title: "无缝分享",
      description: "只需轻轻一点，即可将录音和转写导出并分享到任何设备或平台。"
    },
    {
      icon: <Languages size={20} />,
      title: "多语言支持",
      description: "以令人印象深刻的准确性和自然措辞，转写和翻译超过70种语言。"
    },
    {
      icon: <Lock size={20} />,
      title: "隐私优先",
      description: "您的数据保存在设备上，可选择云备份，让您完全控制自己的隐私。"
    },
    {
      icon: <Wifi size={20} />,
      title: "蓝牙5.2",
      description: "最新的蓝牙技术确保稳定连接和更低的功耗。"
    },
    {
      icon: <Smartphone size={20} />,
      title: "配套应用",
      description: "通过我们直观的移动应用程序控制、组织和编辑您的录音。"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
            {language === 'en' ? 'Smart Features for Smart Recording' : '智能录音的智能特性'}
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Experience the future of audio recording with features designed to transform how you capture and use spoken words.' 
              : '体验录音的未来，这些功能旨在改变您捕捉和使用口语的方式。'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(0, 6).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 sticky top-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/dist/images/recording-card.png" 
                alt={language === 'en' ? 'Lynse AI Recording Card' : 'Lynse AI 录音卡'}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
      </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;