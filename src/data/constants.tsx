export type Language = 'en' | 'zh';

// ── Store Links ──────────────────────────────────────────────

export interface StoreLink {
  name: string;
  url: string;
  iconSvg: React.ReactNode;
}

const TmallIcon = () => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M143.104 1001.216h143.018667c0-78.933333-32-143.018667-71.424-143.018667-39.338667 0-71.68 64-71.68 143.018667z m571.989333 0h143.104c0-78.933333-32.085333-143.018667-71.424-143.018667-39.424 0-71.68 64-71.68 143.018667z" fill="#303030"/>
    <path d="M943.616 647.936c-38.912-7.168-83.2 27.562667-122.112 96.085333-38.997333 68.522667-87.04 113.493333-195.157333 113.493334H374.442667c-108.117333 0-155.733333-44.544-195.072-113.493334C139.946667 675.072 95.914667 640.853333 57.173333 647.936a82.773333 82.773333 0 0 0-57.173333 69.632v140.8c0.170667 51.712 28.245333 99.157333 73.386667 124.16a142.592 142.592 0 0 1 284.16 18.773333h71.424a71.509333 71.509333 0 1 1 143.104 0h71.424a142.592 142.592 0 0 1 284.16-18.944c45.226667-25.002667 73.386667-72.533333 73.557333-124.16V718.677333c-7.68-37.546667-30.037333-65.450667-57.6-70.826666z" fill="#303030"/>
    <path d="M858.197333 0h-715.093333C64 0 0 64 0 143.104v448.938667a123.733333 123.733333 0 0 1 44.458667-19.114667c32.938667-6.485333 117.76-5.973333 196.096 131.498667 25.6 44.544 50.005333 76.8 133.461333 76.8h252.586667c83.370667 0 108.117333-31.829333 133.461333-76.8 78.336-137.301333 163.072-137.984 196.010667-131.413334 15.957333 3.413333 31.061333 9.984 44.544 19.285334V143.104c0-78.762667-63.658667-142.762667-142.506667-143.104zM680.106667 214.528H572.074667v286.122667a71.509333 71.509333 0 1 1-143.104 0V214.528H321.706667a35.84 35.84 0 0 1 0-71.424h357.802666a35.84 35.84 0 0 1 0 71.424h0.682667z" fill="#FF002E"/>
  </svg>
);

const JDIcon = () => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M128 0h768q128 0 128 128v768q0 128-128 128H128Q0 1024 0 896V128Q0 0 128 0z" fill="#F53415"/>
    <path d="M471.253 201.173l-37.333 93.654 112.213 112.426h168.534l64-54.4s9.6-17.92 18.133-37.973l-13.013-56.96-11.734-7.467-117.546-11.733-57.174-71.467z" fill="#414141"/>
    <path d="M269.44 314.027c0 13.653 2.56 27.52 2.987 41.386a67.627 67.627 0 0 1-30.08 61.014 147.627 147.627 0 0 1-52.907 24.32 28.587 28.587 0 0 1-35.2-35.414 136.533 136.533 0 0 1 14.293-36.906 350.507 350.507 0 0 0 34.774-88.96 93.867 93.867 0 0 1 6.186-16.854 21.333 21.333 0 0 1 25.174-11.52A106.667 106.667 0 0 1 256 259.84c10.453 5.333 21.333 11.733 30.933 17.493 6.4-6.613 12.374-13.866 18.987-20.266A274.773 274.773 0 0 1 384 206.293a661.333 661.333 0 0 1 141.013-48.853 573.013 573.013 0 0 1 69.12-9.6c27.52-1.92 55.467-2.987 82.987-2.347a238.08 238.08 0 0 1 104.107 21.334A57.173 57.173 0 0 1 816.853 208a174.72 174.72 0 0 1 0 42.667 232.96 232.96 0 0 1-22.4 68.906 34.773 34.773 0 0 1-15.146 14.08 152.107 152.107 0 0 1-48 16.214 258.773 258.773 0 0 1-138.454-8.534 185.813 185.813 0 0 1-68.266-47.36 33.92 33.92 0 0 0-6.187-6.186c-2.773-1.28-7.04-2.347-8.96 0a10.027 10.027 0 0 0-2.56 8.32 21.333 21.333 0 0 0 5.547 8.96 202.24 202.24 0 0 0 104.533 61.226 265.173 265.173 0 0 0 145.92-5.333 53.333 53.333 0 0 0 8.107-3.2 37.76 37.76 0 0 1 8.746-3.2c-5.333 7.893-10.453 15.787-15.786 23.253a273.707 273.707 0 0 1-145.28 101.12 220.587 220.587 0 0 1-115.414 0A418.773 418.773 0 0 1 329.6 393.6a174.933 174.933 0 0 1-40.96-45.867 87.68 87.68 0 0 1-9.387-21.333c-1.706-6.187-4.053-10.24-9.386-11.733z m466.347-152.96c-7.467 0-15.147 0-22.4 2.133a64 64 0 0 0-31.36 12.8 11.947 11.947 0 0 0 1.92 21.333 53.76 53.76 0 0 0 11.52 4.48 142.507 142.507 0 0 0 54.613 1.494 110.293 110.293 0 0 0 27.307-7.467 15.147 15.147 0 0 0 10.453-14.933c0-7.04-6.187-9.6-11.307-12.16a98.773 98.773 0 0 0-40.746-7.467z m-213.334 82.986a17.92 17.92 0 0 0 19.2-17.066 18.133 18.133 0 0 0-19.2-17.28 17.28 17.28 0 1 0 0 34.346z" fill="#FFFFFF"/>
  </svg>
);

const DouyinIcon = () => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#111111"/>
    <path d="M204.27776 670.59712a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V134.35904h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#FF4040"/>
    <path d="M164.92544 631.23456a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V94.99648h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#00F5FF"/>
    <path d="M410.91072 427.58144c-158.8224 20.15232-284.44672 222.72-154.112 405.00224 120.40192 98.47808 373.68832 41.20576 380.70272-171.85792l-0.17408-324.1472a280.7296 280.7296 0 0 0 142.88896 38.62528V261.2224a144.98816 144.98816 0 0 1-72.8064-54.82496 135.23968 135.23968 0 0 1-54.70208-72.45824h-123.66848l-0.08192 561.41824c-0.11264 78.46912-130.9696 106.41408-164.18816 30.2592-83.18976-39.77216-64.37888-190.9248 46.31552-192.57344z" fill="#FFFFFF"/>
  </svg>
);

export const getStoreLinks = (language: Language): StoreLink[] => [
  {
    name: language === 'en' ? 'Tmall Flagship' : '天猫旗舰店',
    url: 'https://tmall.com',
    iconSvg: <TmallIcon />,
  },
  {
    name: language === 'en' ? 'JD Flagship' : '京东旗舰店',
    url: 'https://jd.com',
    iconSvg: <JDIcon />,
  },
  {
    name: language === 'en' ? 'Douyin Flagship' : '抖音旗舰店',
    url: 'https://douyin.com',
    iconSvg: <DouyinIcon />,
  },
];

// ── Bilingual Text Helpers ───────────────────────────────────

type BilingualText = { en: string; zh: string };

const t = (text: BilingualText, language: Language): string => text[language];

// ── Hero Section ────────────────────────────────────────────

export const HERO = {
  badge: { en: 'AI-Powered', zh: 'AI 驱动' },
  headline: { en: 'Memory · Thinking · AI', zh: '记忆 · 思考 · AI'},
  tagline: {
    en: 'Lynse | Spark Card: Capture Every Moment',
    zh: 'Lynse | 灵光记：让灵光记住每一段声音',
  },
  ctaBuy: { en: 'Buy Now', zh: '立即购买' },
  ctaDownload: { en: 'Download App', zh: '下载应用' },
  trustBadges: [
    { en: '120+ Languages Supported', zh: '支持 120+ 种语言' },
    { en: 'Bank-Level Security', zh: '银行级安全' },
    { en: 'AI Transcription', zh: 'AI 转写' },
  ],
};

// ── Value Prop Strip ────────────────────────────────────────

export const VALUE_PROPS = [
  {
    icon: 'Mic',
    title: { en: 'Record', zh: '录音' },
    description: {
      en: 'Capture every word with precision',
      zh: '精准捕捉每一句话',
    },
  },
  {
    icon: 'FileText',
    title: { en: 'Transcribe', zh: '转写' },
    description: {
      en: 'AI-powered real-time transcription',
      zh: 'AI 驱动的实时转写',
    },
  },
  {
    icon: 'Sparkles',
    title: { en: 'Summarize', zh: '总结' },
    description: {
      en: 'Get intelligent summaries instantly',
      zh: '即刻获得智能摘要',
    },
  },
];

// ── Product Showcase Specs ───────────────────────────────────

export const PRODUCT_SPECS = [
  { label: { en: 'Battery', zh: '电池续航' }, value: { en: '30+ Days', zh: '30+ 天' } },
  { label: { en: 'Weight', zh: '重量' }, value: { en: '35g', zh: '35g' } },
  { label: { en: 'Languages', zh: '语言支持' }, value: { en: '70+', zh: '70+' } },
  { label: { en: 'Storage', zh: '存储' }, value: { en: '128GB', zh: '128GB' } },
];

// ── Use Cases ───────────────────────────────────────────────

export const USE_CASES = [
  {
    icon: 'Users',
    title: { en: 'Meeting Intelligence', zh: '会议智能' },
    description: {
      en: 'Never miss a key decision. Record meetings, get AI-powered summaries with action items and key takeaways.',
      zh: '不错过任何关键决策。录制会议，获取 AI 驱动的摘要，包含行动项和要点。',
    },
    link: '/sparkcard',
  },
  {
    icon: 'Mic',
    title: { en: 'Interview Capture', zh: '访谈记录' },
    description: {
      en: 'Capture every insight from interviews and research conversations. Full transcript with speaker identification.',
      zh: '捕捉访谈和研究对话中的每一个洞察。完整转录，支持说话人识别。',
    },
    link: '/sparkcard',
  },
  {
    icon: 'BookOpen',
    title: { en: 'Personal Knowledge Base', zh: '个人知识库' },
    description: {
      en: 'Build your personal knowledge library. Record lectures, ideas, and notes — all searchable and organized.',
      zh: '构建个人知识库。录制讲座、灵感和笔记，全部可搜索、可整理。',
    },
    link: '/sparkcard',
  },
];

// ── App Preview Features ─────────────────────────────────────

export const APP_FEATURES = [
  { en: 'Real-time AI transcription in 70+ languages', zh: '70+ 语言实时 AI 转写' },
  { en: 'Smart summaries with action items', zh: '智能摘要与行动项提取' },
  { en: 'Speaker identification and labeling', zh: '说话人识别与标注' },
  { en: 'Cloud sync across all your devices', zh: '多设备云端同步' },
  { en: 'Export to PDF, Word, and more', zh: '导出为 PDF、Word 等格式' },
];

// ── Testimonials (Placeholder) ──────────────────────────────

export const TESTIMONIALS = [
  {
    quote: {
      en: 'SparkCard transformed how I handle meetings. I used to spend hours reconstructing notes — now I have a perfect summary before I leave the room.',
      zh: '灵光记彻底改变了我的会议方式。以前我总要花几个小时整理笔记，现在离开会议室之前就能拿到完美的摘要。',
    },
    name: { en: 'Sarah Chen', zh: '陈思雨' },
    role: { en: 'Executive Assistant, Fortune 500', zh: '世界 500 强执行助理' },
  },
  {
    quote: {
      en: 'As a content creator, I interview people daily. SparkCard captures every word accurately. It\'s like having a professional stenographer in my pocket.',
      zh: '作为内容创作者，我每天都在做访谈。灵光记能精准记录每一个字。就像口袋里装了一个专业速记员。',
    },
    name: { en: 'Michael Wang', zh: '王明远' },
    role: { en: 'Podcast Host & Journalist', zh: '播客主持人兼记者' },
  },
  {
    quote: {
      en: 'The accuracy is remarkable. Even in noisy conference rooms, SparkCard delivers clean transcriptions. Our team saves 10+ hours per week on meeting notes.',
      zh: '准确度令人惊叹。即使在嘈杂的会议室里，灵光记也能提供清晰的转录。我们团队每周节省超过 10 小时的会议笔记时间。',
    },
    name: { en: 'David Liu', zh: '刘大卫' },
    role: { en: 'COO, Tech Startup', zh: '科技公司 COO' },
  },
];

// ── Pre-order CTA ───────────────────────────────────────────

export const PREORDER_CTA = {
  headline: {
    en: 'Ready to never miss a moment?',
    zh: '准备好不错过每一个瞬间了吗？',
  },
  subtext: {
    en: 'Join thousands of professionals who trust SparkCard for their most important conversations.',
    zh: '加入数千位信赖灵光记处理重要对话的专业人士。',
  },
  ctaBuy: { en: 'Buy Now', zh: '立即购买' },
  ctaDownload: { en: 'Download App', zh: '下载应用' },
};

// ── Product Page ────────────────────────────────────────────

export const PRODUCT_PAGE = {
  hero: {
    badge: { en: 'AI-Powered', zh: 'AI 驱动' },
    name: 'SparkCard',
    tagline: { en: 'AI-Powered Recording, Reimagined', zh: 'AI 录音，重新定义' },
    ctaBuy: { en: 'Buy Now', zh: '立即购买' },
    ctaLearn: { en: 'Learn More', zh: '了解更多' },
  },
};

// ── Specs Grid (Product Page) ───────────────────────────────

export interface SpecGroup {
  category: BilingualText;
  items: { label: BilingualText; value: BilingualText }[];
}

export const SPECS_GRID: SpecGroup[] = [
  {
    category: { en: 'Hardware', zh: '硬件参数' },
    items: [
      { label: { en: 'Dimensions', zh: '尺寸' }, value: { en: '85.6 × 54 × 3.2mm', zh: '85.6 × 54 × 3.2mm' } },
      { label: { en: 'Weight', zh: '重量' }, value: { en: '35g', zh: '35g' } },
      { label: { en: 'Battery', zh: '电池' }, value: { en: '30+ days standby', zh: '30+ 天待机' } },
      { label: { en: 'Storage', zh: '存储' }, value: { en: '128GB', zh: '128GB' } },
      { label: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth 5.3', zh: '蓝牙 5.3' } },
    ],
  },
  {
    category: { en: 'AI Features', zh: 'AI 功能' },
    items: [
      { label: { en: 'Languages', zh: '语言支持' }, value: { en: '120+ languages', zh: '120+ 种语言' } },
      { label: { en: 'Transcription', zh: '转写' }, value: { en: 'Real-time AI', zh: '实时 AI 转写' } },
      { label: { en: 'Summarization', zh: '摘要' }, value: { en: 'Smart summaries', zh: '智能摘要' } },
      { label: { en: 'Speaker ID', zh: '说话人识别' }, value: { en: 'Multi-speaker', zh: '多人识别' } },
    ],
  },
  {
    category: { en: 'Design', zh: '设计' }, items: [
      { label: { en: 'Material', zh: '材质' }, value: { en: 'Aluminum alloy', zh: '铝合金' } },
      { label: { en: 'Colors', zh: '颜色' }, value: { en: 'Space Black, Silver', zh: '太空黑、银色' } },
      { label: { en: 'Button', zh: '按键' }, value: { en: 'One-touch record', zh: '一键录音' } },
    ],
  },
];

// ── FAQ Items ───────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    question: { en: 'How does SparkCard work?', zh: '灵光记是如何工作的？' },
    answer: {
      en: 'Simply clip SparkCard to your notebook or place it on the table. Press the record button to start capturing audio. The built-in AI transcribes and summarizes in real-time via Bluetooth connection to the companion app.',
      zh: '只需将灵光记夹在笔记本上或放在桌面上。按下录音按钮即可开始录音。内置 AI 通过蓝牙连接配对应用，实时转写和总结。',
    },
  },
  {
    question: { en: 'How long does the battery last?', zh: '电池能用多久？' },
    answer: {
      en: 'SparkCard lasts 30+ days on standby and supports 10+ hours of continuous recording on a single charge. Charging takes about 1 hour via USB-C.',
      zh: '灵光记待机 30+ 天，单次充电支持 10+ 小时连续录音。通过 USB-C 充电，约 1 小时充满。',
    },
  },
  {
    question: { en: 'What languages does it support?', zh: '支持哪些语言？' },
    answer: {
      en: 'SparkCard supports transcription in 120+ languages including English, Chinese (Mandarin and Cantonese), Japanese, Korean, Spanish, French, German, and many more.',
      zh: '灵光记支持 120+ 种语言转写，包括英语、中文（普通话和粤语）、日语、韩语、西班牙语、法语、德语等。',
    },
  },
  {
    question: { en: 'Is my data secure?', zh: '我的数据安全吗？' },
    answer: {
      en: 'Yes. All audio processing happens on-device and encrypted end-to-end. Your recordings are never stored on our servers without your explicit permission. We use bank-level encryption standards.',
      zh: '是的。所有音频处理均在设备端完成，端到端加密。未经您的明确许可，录音绝不会存储在我们的服务器上。我们采用银行级加密标准。',
    },
  },
  {
    question: { en: 'Do I need to pay for the AI features?', zh: 'AI 功能需要付费吗？' },
    answer: {
      en: 'SparkCard includes basic transcription and summary features. Advanced AI features like speaker identification and multi-language translation are available through the premium subscription.',
      zh: '灵光记包含基础的转写和摘要功能。说话人识别和多语言翻译等高级 AI 功能可通过高级订阅使用。',
    },
  },
];

// ── Product Page Use Cases (Deep-Dive) ──────────────────────

export const PRODUCT_USE_CASES = [
  {
    title: { en: 'Meeting Intelligence', zh: '会议智能' },
    description: {
      en: 'Record every meeting with a single tap. SparkCard captures discussions, distinguishes between speakers, and delivers structured summaries with action items — so you can focus on the conversation, not the notes.',
      zh: '一键录制每场会议。灵光记捕捉讨论内容，区分说话人，并生成包含行动项的结构化摘要，让您专注于对话而非笔记。',
    },
    features: [
      { en: 'Automatic action item extraction', zh: '自动提取行动项' },
      { en: 'Speaker identification', zh: '说话人识别' },
      { en: 'Searchable meeting archive', zh: '可搜索的会议存档' },
    ],
  },
  {
    title: { en: 'Interview & Research', zh: '访谈与研究' },
    description: {
      en: 'Whether it\'s a job interview, user research session, or journalistic interview — SparkCard ensures every word is captured accurately. Get full transcripts with timestamps for easy reference.',
      zh: '无论是求职面试、用户研究还是新闻访谈，灵光记确保每个字都被精准记录。获取带时间戳的完整转录，方便随时查阅。',
    },
    features: [
      { en: 'Timestamped transcription', zh: '带时间戳的转录' },
      { en: 'Noise reduction for clear audio', zh: '降噪处理确保清晰音质' },
      { en: 'Export to multiple formats', zh: '支持多种格式导出' },
    ],
  },
  {
    title: { en: 'Personal Knowledge Management', zh: '个人知识管理' },
    description: {
      en: 'Build your second brain. Record lectures, capture ideas on the go, and let AI organize everything into a searchable knowledge base. Never lose a thought again.',
      zh: '构建你的第二大脑。录制讲座、随时记录灵感，让 AI 将一切整理为可搜索的知识库。再也不丢失任何想法。',
    },
    features: [
      { en: 'AI-powered categorization', zh: 'AI 驱动的自动分类' },
      { en: 'Full-text search across recordings', zh: '跨录音全文搜索' },
      { en: 'Cloud sync across devices', zh: '多设备云端同步' },
    ],
  },
];

// ── Section titles ──────────────────────────────────────────

export const SECTION_TITLES = {
  valueProps: { en: 'How It Works', zh: '工作原理' },
  showcase: { en: 'Precision in Every Detail', zh: '每个细节都精益求精' },
  useCases: { en: 'Built for Professionals', zh: '为专业人士打造' },
  appPreview: { en: 'Your Companion App', zh: '您的专属应用' },
  trust: { en: 'Trusted by Thousands', zh: '数千专业人士信赖' },
  specs: { en: 'Technical Specifications', zh: '技术参数' },
  useCaseDeep: { en: 'Use Cases', zh: '使用场景' },
  faq: { en: 'Frequently Asked Questions', zh: '常见问题' },
};
