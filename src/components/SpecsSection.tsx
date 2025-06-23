import React from 'react';
import { Battery, Bluetooth, MemoryStick as Memory, Clock, MonitorSmartphone, Globe, Volume2, Cpu } from 'lucide-react';
import BrandName from './ui/BrandName';

interface SpecsSectionProps {
  language: 'en' | 'zh';
}

interface SpecItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const SpecItem: React.FC<SpecItemProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-100 group hover:bg-blue-50 transition-colors rounded-lg">
      <div className="text-blue-600 mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="text-xs font-medium text-gray-600 leading-tight">{title}</h4>
        <p className="text-sm font-bold text-gray-800 leading-snug">{value}</p>
      </div>
    </div>
  );
};

const SpecsSection: React.FC<SpecsSectionProps> = ({ language }) => {
  const specs = language === 'en' ? [
    { icon: <Bluetooth size={20} />, title: "Connectivity", value: "Bluetooth 5.2, USB-C" },
    { icon: <Battery size={20} />, title: "Battery Life", value: "Up to 12 hours recording" },
    { icon: <Memory size={20} />, title: "Storage", value: "32GB internal storage" },
    { icon: <Clock size={20} />, title: "Charging Time", value: "1.5 hours to full charge" },
    { icon: <MonitorSmartphone size={20} />, title: "Compatibility", value: "iOS, Android" },
    { icon: <Globe size={20} />, title: "Languages", value: "30+ languages supported" },
    { icon: <Volume2 size={20} />, title: "Microphone", value: "Dual-array with noise cancellation" },
    { icon: <Cpu size={20} />, title: "Processor", value: "Dedicated AI chip for on-device processing" }
  ] : [
    { icon: <Bluetooth size={20} />, title: "连接方式", value: "蓝牙5.2和WIFI4快速传输" },
    { icon: <Battery size={20} />, title: "电池寿命", value: "最长30+小时录制" },
    { icon: <Memory size={20} />, title: "存储", value: "32GB内部存储，支持 2000+小时录音文件存储" },
    { icon: <Clock size={20} />, title: "充电时间", value: "1.5小时充满" },
    { icon: <MonitorSmartphone size={20} />, title: "兼容性", value: "iOS、Android" },
    { icon: <Globe size={20} />, title: "语言", value: "支持70多种语言" },
    { icon: <Volume2 size={20} />, title: "麦克风", value: "四麦克风阵列，通话/会议模式切换，带降噪功能" },
    { icon: <Cpu size={20} />, title: "处理器", value: "专用AI芯片，用于设备内处理" }
  ];

  return (
    <section id="specs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
            {language === 'en' ? 'Technical Specifications' : '技术规格'}
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Powerful hardware combined with innovative software delivers exceptional performance.'
              : '强大的硬件与创新的软件相结合，提供卓越的性能。'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <h3 className="text-2xl font-bold text-white">
              {language === 'en' ? <><BrandName size="lg">Lynse</BrandName> AI Recording Card</> : <><BrandName size="lg">Lynse</BrandName> AI 闪记卡</>}
            </h3>
            <p className="text-light-secondary opacity-90">
              {language === 'en' ? 'Detailed specifications' : '详细规格'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            {specs.map((spec, index) => (
              <SpecItem
                key={index}
                icon={spec.icon}
                title={spec.title}
                value={spec.value}
              />
            ))}
          </div>
          
          <div className="px-6 pb-6">
            <p className="text-sm text-gray-500">
              {language === 'en'
                ? '* Actual performance may vary depending on usage conditions and settings.'
                : '* 实际性能可能因使用条件和设置而异。'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;