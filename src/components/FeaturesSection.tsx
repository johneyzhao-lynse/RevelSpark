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
      className="w-full h-[150px] bg-white border border-gray-200 rounded-2xl p-6 flex items-center group cursor-pointer hover:shadow-md hover:border-gray-300 transition-all duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="flex items-start gap-4 w-full">
        <div className="p-3 bg-gray-50 rounded-xl flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
          {React.cloneElement(icon as React.ReactElement, { size: 20, className: 'text-gray-900' })}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 mb-1.5 truncate group-hover:text-black transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 text-sm leading-snug line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
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
      description: "通过灵光记传送、组织和编辑您的录音，并使用AI功能进行转写、总结和分享。"
    }
  ];

  return (
    <section id="features" className="py-32 bg-gray-50 relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up opacity-0-initial">
            {language === 'en' ? 'Smart Features for Smart Recording' : '灵光闪记卡的特性'}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up opacity-0-initial delay-200">
            {language === 'en'
              ? 'Experience the future of audio recording with features designed to transform how you capture and use spoken words.'
              : '体验录音的未来，这些功能旨在改变您捕捉和使用口语的方式。'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px] mx-auto">
              {features.map((feature, index) => (
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
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Background decoration - 极简 */}
              <div className="absolute inset-0 bg-gray-100/50 rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] border border-gray-200 rounded-full animate-[spin_40s_linear_infinite]"></div>
              </div>

              {/* Product card - 极简 */}
              <div className="relative bg-white p-8 rounded-3xl w-[480px] h-[480px] max-w-full mx-auto flex items-center justify-center shadow-sm border border-gray-200">
                <img
                  src="./images/recording-card.webp"
                  alt={language === 'en' ? 'Lynse Spark Note' : 'Lynse 灵光记'}
                  className="w-[420px] h-[420px] object-contain transition-transform duration-500 hover:scale-105 animate-float"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))',
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;