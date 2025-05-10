import React from 'react';
import { FileText, ListChecks, Sparkles, Download } from 'lucide-react';

interface AppFeaturesSectionProps {
  language: 'en' | 'zh';
}

const AppFeaturesSection: React.FC<AppFeaturesSectionProps> = ({ language }) => {
  const features = language === 'en' ? [
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Speech to Text",
      description: "Advanced AI-powered transcription with support for 30+ languages and real-time processing.",
      screenshot: "./images/features/stt-demo.png"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Smart Synopsis",
      description: "Get intelligent overviews of long recordings, with important topics and discussions highlighted.",
      screenshot: "./images/features/summary-demo.png"
    },
    {
      icon: <ListChecks className="w-12 h-12 text-blue-600" />,
      title: "Action Items Extraction",
      description: "Automatically identify and list action items, deadlines, and assignments from your recordings.",
      screenshot: "./images/features/stt-demo.png"
    }
  ] : [
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "语音转文字",
      description: "支持30多种语言的高级AI驱动转录，实时处理。",
      screenshot: "./images/features/stt-demo.png"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "智能概要",
      description: "获取长录音的智能概览，突出显示重要主题和讨论。",
      screenshot: "./images/features/summary-demo.png"
    },
    {
      icon: <ListChecks className="w-12 h-12 text-blue-600" />,
      title: "行动项目提取",
      description: "自动识别并列出录音中的行动项目、截止日期和任务分配。",
      screenshot: "./images/features/stt-demo.png"
    }
  ];

  return (
    <section id="app-features" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Powerful AI Features' : '强大的AI功能'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Transform your recordings into actionable insights with our advanced AI features.'
              : '使用我们的高级AI功能将录音转化为可操作的见解。'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={feature.screenshot} 
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Download Our App' : '下载我们的应用'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Get started with DtingNote today and experience the future of audio recording.'
                : '立即开始使用谛听记，体验录音的未来。'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Download size={20} />
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors"
            >
              <Download size={20} />
              <span>{language === 'en' ? 'Google Play' : '安卓商店'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;