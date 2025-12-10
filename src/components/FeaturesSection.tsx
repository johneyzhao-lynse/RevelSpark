import React from 'react';
import { MessageSquare, Mic, Zap, Share2, Languages, Lock, Wifi, Smartphone } from 'lucide-react';
import BrandName from './ui/BrandName';

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
      className="w-full h-[150px] bg-gradient-to-br from-white/70 to-blue-50/60 backdrop-blur-2xl rounded-xl p-3 shadow-xl border border-white/40 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="flex items-start gap-2 w-full">
        <div className="p-1.5 bg-white/50 rounded-full flex-shrink-0">
          {React.cloneElement(icon as React.ReactElement, { size: 18, className: 'text-primary' })}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 mb-1 truncate">{title}</h3>
          <p className="text-gray-600 text-xs leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ language }) => {
  const features = language === 'en' ? [
    {
      icon: <MessageSquare />,
      title: "Real-time Transcription",
      description: "Convert speech to text instantly with advanced AI algorithms that ensure accuracy even in noisy environments."
    },
    {
      icon: <Mic />,
      title: "Crystal Clear Audio",
      description: "Capture high-quality audio with noise cancellation technology for perfect recordings every time."
    },
    {
      icon: <Zap />,
      title: "Long Battery Life",
      description: "Up to 12 hours of continuous recording on a single charge, so you never miss important moments."
    },
    {
      icon: <Share2 />,
      title: "Seamless Sharing",
      description: "Export and share your recordings and transcriptions to any device or platform with just a tap."
    },
    {
      icon: <Languages />,
      title: "Multilingual Support",
      description: "Transcribe and translate in over 30 languages with impressive accuracy and natural phrasing."
    },
    {
      icon: <Lock />,
      title: "Privacy First",
      description: "Your data stays on the device with optional cloud backup, giving you complete control over your privacy."
    }
  ] : [
    {
      icon: <MessageSquare />,
      title: "实时转写",
      description: "先进的AI算法即时将语音转换为文本，即使在嘈杂的环境中也能确保准确性。"
    },
    {
      icon: <Mic />,
      title: "4+1麦克风阵列",
      description: "采用四个MEMS麦克风和一颗骨传导麦克风，并采用 sweep降噪技术捕捉高质量音频，每次都能获得完美录音。"
    },
    {
      icon: <Zap />,
      title: "超长续航",
      description: "单次充电可持续录制长达30小时，让您永不错过重要时刻。"
    },
    {
      icon: <Share2 />,
      title: "无缝分享",
      description: "只需轻轻一点，即可将录音和转写导出并分享到任何设备或平台。"
    },
    {
      icon: <Languages />,
      title: "多语言支持",
      description: "以令人印象深刻的准确性和自然措辞，转写和翻译超过70种语言。"
    },
    {
      icon: <Lock />,
      title: "隐私优先",
      description: "您的录音文件保存在手机上，通过加密技术传送给大模型，转写后删除，云端不保留任何用户数据。"
    },
    {
      icon: <Wifi />,
      title: "支持蓝牙5.2和wifi",
      description: "通过蓝牙5.2和wifi连接，您可以轻松地将录音传输到您的手机。"
    },
    {
      icon: <Smartphone />,
      title: "配套应用",
      description: "通过灵光闪记APP传送、组织和编辑您的录音，并使用AI功能进行转写、总结和分享。"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-paleblue via-lightblue to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Smart Features for Smart Recording' : '智能录音的智能特性'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Experience the future of audio recording with features designed to transform how you capture and use spoken words.' 
              : '体验录音的未来，这些功能旨在改变您捕捉和使用口语的方式。'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px] mx-auto">
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
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start">
            <div className="bg-gradient-to-br from-white/70 to-blue-50/60 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/40 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 w-[480px] h-[480px] max-w-full mx-auto flex items-center justify-center overflow-visible">
              <img 
                src="./images/recording-card.png" 
                alt={language === 'en' ? 'Lynse AI Recording Card' : 'Lynse AI 闪记卡'}
                className="w-[420px] h-[420px] object-contain rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 bg-transparent"
                style={{
                  filter: 'drop-shadow(0 10px 24px rgba(26, 109, 255, 0.18))',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
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