import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  language: 'en' | 'zh';
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="pb-4 pr-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = language === 'en' ? [
    {
      question: "How accurate is the transcription?",
      answer: "The Lynse AI recording card achieves over 95% accuracy in quiet environments for most languages. Even in noisy environments, our advanced noise cancellation technology helps maintain high accuracy levels. The accuracy can vary slightly depending on accents, speech clarity, and background noise."
    },
    {
      question: "How long does the battery last?",
      answer: "The battery lasts up to 12 hours of continuous recording on a single charge. In standby mode, it can last up to 7 days. Charging from 0 to 100% takes approximately 1.5 hours with the included USB-C charger."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, privacy is our priority. By default, all processing happens on the device itself, with no data sent to the cloud unless you explicitly enable cloud backup. All data transmissions are encrypted, and you maintain full control over your recordings and transcriptions."
    },
    {
      question: "What languages are supported?",
      answer: "The Lynse card currently supports transcription in over 30 languages, including English, Chinese (Simplified and Traditional), Spanish, French, German, Japanese, Korean, Russian, Arabic, Portuguese, and many more. We regularly add new languages through firmware updates."
    },
    {
      question: "Can I use it without a smartphone?",
      answer: "Yes! The Lynse card functions as a standalone device. You can record, and the device will store the audio and transcriptions. However, pairing with our smartphone app provides additional features like organization, editing, translation, and sharing capabilities."
    },
    {
      question: "What's in the box?",
      answer: "The package includes: 1 Lynse AI recording card, 1 USB-C charging cable, 1 protective case, 1 quick start guide, and a warranty card. The companion app is available as a free download for iOS and Android."
    }
  ] : [
    {
      question: "转录的准确性如何？",
      answer: "Lynse AI 录音卡在安静环境下对大多数语言的准确率可达95%以上。即使在嘈杂的环境中，我们先进的降噪技术也有助于保持高准确度。准确性可能会因口音、语音清晰度和背景噪音而略有不同。"
    },
    {
      question: "电池续航时间有多长？",
      answer: "电池在一次充电的情况下可持续录制长达12小时。在待机模式下，可以持续长达7天。使用随附的USB-C充电器从0充电到100%大约需要1.5小时。"
    },
    {
      question: "我的数据是否私密和安全？",
      answer: "是的，隐私是我们的首要任务。默认情况下，所有处理都在设备本身进行，除非您明确启用云备份，否则不会将数据发送到云端。所有数据传输都经过加密，您可以完全控制您的录音和转录。"
    },
    {
      question: "支持哪些语言？",
      answer: "Lynse卡目前支持30多种语言的转录，包括英语、中文（简体和繁体）、西班牙语、法语、德语、日语、韩语、俄语、阿拉伯语、葡萄牙语等。我们通过固件更新定期添加新语言。"
    },
    {
      question: "可以不使用智能手机吗？",
      answer: "是的！Lynse卡可以作为独立设备使用。您可以录制，设备将存储音频和转录内容。但是，与我们的智能手机应用程序配对可提供额外功能，如组织、编辑、翻译和共享功能。"
    },
    {
      question: "包装盒内包含什么？",
      answer: "包装包括：1个Lynse AI录音卡、1根USB-C充电线、1个保护套、1份快速入门指南和一张保修卡。配套应用程序可免费下载，适用于iOS和Android。"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Frequently Asked Questions' : '常见问题'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Find answers to common questions about the Lynse AI recording card.'
              : '查找有关Lynse AI录音卡的常见问题的答案。'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {language === 'en'
                ? "Don't see your question here?"
                : "没有看到您的问题？"}
            </p>
            <a
              href="#contact"
              className="text-blue-600 font-medium hover:underline inline-flex items-center"
            >
              {language === 'en' ? 'Contact us' : '联系我们'} <ChevronDown size={16} className="ml-1 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;