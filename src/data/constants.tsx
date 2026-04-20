export type Language = 'en' | 'zh' | 'zh-TW' | 'ja';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'ja', label: '日本語' },
];

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
    <path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0 655.36q0 184.32 184.32-184.32z" fill="#111111"/>
    <path d="M204.27776 670.59712a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V134.35904h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#FF4040"/>
    <path d="M164.92544 631.23456a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V94.99648h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#00F5FF"/>
    <path d="M410.91072 427.58144c-158.8224 20.15232-284.44672 222.72-154.112 405.00224 120.40192 98.47808 373.68832 41.20576 380.70272-171.85792l-0.17408-324.1472a280.7296 280.7296 0 0 0 142.88896 38.62528V261.2224a144.98816 144.98816 0 0 1-72.8064-54.82496 135.23968 135.23968 0 0 1-54.70208-72.45824h-123.66848l-0.08192 561.41824c-0.11264 78.46912-130.9696 106.41408-164.18816 30.2592-83.18976-39.77216-64.37888-190.9248 46.31552-192.57344z" fill="#FFFFFF"/>
  </svg>
);

const storeLinkNames: Record<Language, { tmall: string; jd: string; douyin: string }> = {
  en: { tmall: 'Tmall Flagship', jd: 'JD Flagship', douyin: 'Douyin Flagship' },
  zh: { tmall: '天猫旗舰店', jd: '京东旗舰店', douyin: '抖音旗舰店' },
  'zh-TW': { tmall: '天貓旗艦店', jd: '京東旗艦店', douyin: '抖音旗艦店' },
  ja: { tmall: 'Tmall旗艦店', jd: 'JD旗艦店', douyin: 'Douyin旗艦店' },
};

export const getStoreLinks = (language: Language): StoreLink[] => [
  {
    name: storeLinkNames[language].tmall,
    url: 'https://tmall.com',
    iconSvg: <TmallIcon />,
  },
  {
    name: storeLinkNames[language].jd,
    url: 'https://jd.com',
    iconSvg: <JDIcon />,
  },
  {
    name: storeLinkNames[language].douyin,
    url: 'https://douyin.com',
    iconSvg: <DouyinIcon />,
  },
];

// ── Multi-Language Text Helpers ───────────────────────────────

export type MultiLangText = Record<Language, string>;

export const t = (text: MultiLangText, language: Language): string => text[language];

// ── Hero Section ────────────────────────────────────────────

export const HERO = {
  badge: { en: 'AI-Powered', zh: 'AI 驱动', 'zh-TW': 'AI 驅動', ja: 'AI搭載' },
  headline: { en: 'Memory · Thinking · AI', zh: '记忆 · 思考 · AI', 'zh-TW': '記憶 · 思考 · AI', ja: '記憶 · 思考 · AI' },
  tagline: {
    en: 'Lynse | Spark Card: Capture Every Moment',
    zh: 'Lynse | 灵光记：让灵光记住每一段声音',
    'zh-TW': 'Lynse | 靈光記：讓靈光記住每一段聲音',
    ja: 'Lynse | Spark Card：すべての瞬間を記録',
  },
  ctaBuy: { en: 'Buy Now', zh: '立即购买', 'zh-TW': '立即購買', ja: '今すぐ購入' },
  ctaDownload: { en: 'Download App', zh: '下载应用', 'zh-TW': '下載應用', ja: 'アプリダウンロード' },
  trustBadges: [
    { en: '120+ Languages Supported', zh: '支持 120+ 种语言', 'zh-TW': '支援 120+ 種語言', ja: '120+言語対応' },
    { en: 'Bank-Level Security', zh: '银行级安全', 'zh-TW': '銀行級安全', ja: '銀行レベルのセキュリティ' },
    { en: 'AI Transcription', zh: 'AI 转写', 'zh-TW': 'AI 轉寫', ja: 'AI文字起こし' },
  ],
};

// ── Value Prop Strip ────────────────────────────────────────

export const VALUE_PROPS = [
  {
    icon: 'Mic',
    title: { en: 'Record', zh: '录音', 'zh-TW': '錄音', ja: '録音' },
    description: {
      en: 'Capture every word with precision',
      zh: '精准捕捉每一句话',
      'zh-TW': '精準捕捉每一句話',
      ja: '一言一言を精密にキャプチャ',
    },
  },
  {
    icon: 'FileText',
    title: { en: 'Transcribe', zh: '转写', 'zh-TW': '轉寫', ja: '文字起こし' },
    description: {
      en: 'AI-powered real-time transcription',
      zh: 'AI 驱动的实时转写',
      'zh-TW': 'AI 驅動的即時轉寫',
      ja: 'AIによるリアルタイム文字起こし',
    },
  },
  {
    icon: 'Sparkles',
    title: { en: 'Summarize', zh: '总结', 'zh-TW': '總結', ja: '要約' },
    description: {
      en: 'Get intelligent summaries instantly',
      zh: '即刻获得智能摘要',
      'zh-TW': '即刻獲得智能摘要',
      ja: 'スマートな要約を瞬時に取得',
    },
  },
];

// ── Product Showcase Specs ───────────────────────────────────

export const PRODUCT_SPECS = [
  { label: { en: 'Battery', zh: '电池续航', 'zh-TW': '電池續航', ja: 'バッテリー' }, value: { en: '30+ Days', zh: '30+ 天', 'zh-TW': '30+ 天', ja: '30日以上' } },
  { label: { en: 'Weight', zh: '重量', 'zh-TW': '重量', ja: '重量' }, value: { en: '35g', zh: '35g', 'zh-TW': '35g', ja: '35g' } },
  { label: { en: 'Languages', zh: '语言支持', 'zh-TW': '語言支援', ja: '対応言語' }, value: { en: '70+', zh: '70+', 'zh-TW': '70+', ja: '70+' } },
  { label: { en: 'Storage', zh: '存储', 'zh-TW': '儲存', ja: 'ストレージ' }, value: { en: '128GB', zh: '128GB', 'zh-TW': '128GB', ja: '128GB' } },
];

// ── Use Cases ───────────────────────────────────────────────

export const USE_CASES = [
  {
    icon: 'Users',
    title: { en: 'Meeting Intelligence', zh: '会议智能', 'zh-TW': '會議智能', ja: 'ミーティングインテリジェンス' },
    description: {
      en: 'Never miss a key decision. Record meetings, get AI-powered summaries with action items and key takeaways.',
      zh: '不错过任何关键决策。录制会议，获取 AI 驱动的摘要，包含行动项和要点。',
      'zh-TW': '不錯過任何關鍵決策。錄製會議，獲取 AI 驅動的摘要，包含行動項和要點。',
      ja: '重要な決定を見逃しません。会議を録音し、アクションアイテムと要点を含むAI要約を取得。',
    },
    link: '/sparkcard',
  },
  {
    icon: 'Mic',
    title: { en: 'Interview Capture', zh: '访谈记录', 'zh-TW': '訪談記錄', ja: 'インタビュー記録' },
    description: {
      en: 'Capture every insight from interviews and research conversations. Full transcript with speaker identification.',
      zh: '捕捉访谈和研究对话中的每一个洞察。完整转录，支持说话人识别。',
      'zh-TW': '捕捉訪談和研究對話中的每一個洞察。完整轉錄，支援說話人識別。',
      ja: 'インタビューやリサーチ会話のすべてのインサイトをキャプチャ。話者識別付きの完全な文字起こし。',
    },
    link: '/sparkcard',
  },
  {
    icon: 'BookOpen',
    title: { en: 'Personal Knowledge Base', zh: '个人知识库', 'zh-TW': '個人知識庫', ja: '個人ナレッジベース' },
    description: {
      en: 'Build your personal knowledge library. Record lectures, ideas, and notes — all searchable and organized.',
      zh: '构建个人知识库。录制讲座、灵感和笔记，全部可搜索、可整理。',
      'zh-TW': '構建個人知識庫。錄製講座、靈感和筆記，全部可搜索、可整理。',
      ja: '個人ナレッジベースを構築。講義、アイデア、メモを録音し、すべて検索・整理可能。',
    },
    link: '/sparkcard',
  },
];

// ── App Preview Features ─────────────────────────────────────

export const APP_FEATURES = [
  { en: 'Real-time AI transcription in 70+ languages', zh: '70+ 语言实时 AI 转写', 'zh-TW': '70+ 語言即時 AI 轉寫', ja: '70+言語のリアルタイムAI文字起こし' },
  { en: 'Smart summaries with action items', zh: '智能摘要与行动项提取', 'zh-TW': '智能摘要與行動項提取', ja: 'アクションアイテム付きスマート要約' },
  { en: 'Speaker identification and labeling', zh: '说话人识别与标注', 'zh-TW': '說話人識別與標註', ja: '話者識別とラベリング' },
  { en: 'Cloud sync across all your devices', zh: '多设备云端同步', 'zh-TW': '多裝置雲端同步', ja: '全デバイスのクラウド同期' },
  { en: 'Export to PDF, Word, and more', zh: '导出为 PDF、Word 等格式', 'zh-TW': '匯出為 PDF、Word 等格式', ja: 'PDF、Wordなど多彩な形式でエクスポート' },
];

// ── Testimonials (Placeholder) ──────────────────────────────

export const TESTIMONIALS = [
  {
    quote: {
      en: 'SparkCard transformed how I handle meetings. I used to spend hours reconstructing notes — now I have a perfect summary before I leave the room.',
      zh: '灵光记彻底改变了我的会议方式。以前我总要花几个小时整理笔记，现在离开会议室之前就能拿到完美的摘要。',
      'zh-TW': '靈光記徹底改變了我的會議方式。以前我總要花幾個小時整理筆記，現在離開會議室之前就能拿到完美的摘要。',
      ja: 'SparkCardは会議のやり方を一変させました。以前は何時間もかけて議事録を作成していましたが、今は会議室を出る前に完璧な要約が手に入ります。',
    },
    name: { en: 'Sarah Chen', zh: '陈思雨', 'zh-TW': '陳思雨', ja: 'サラ・チェン' },
    role: { en: 'Executive Assistant, Fortune 500', zh: '世界 500 强执行助理', 'zh-TW': '世界 500 強執行助理', ja: 'フォーチュン500企業 エグゼクティブアシスタント' },
  },
  {
    quote: {
      en: 'As a content creator, I interview people daily. SparkCard captures every word accurately. It\'s like having a professional stenographer in my pocket.',
      zh: '作为内容创作者，我每天都在做访谈。灵光记能精准记录每一个字。就像口袋里装了一个专业速记员。',
      'zh-TW': '作為內容創作者，我每天都在做訪談。靈光記能精準記錄每一個字。就像口袋裝了一個專業速記員。',
      ja: 'コンテンツクリエイターとして、毎日インタビューをしています。SparkCardは一言一言を正確に記録します。まるでプロの速記者がポケットに入っているようです。',
    },
    name: { en: 'Michael Wang', zh: '王明远', 'zh-TW': '王明遠', ja: 'マイケル・ワン' },
    role: { en: 'Podcast Host & Journalist', zh: '播客主持人兼记者', 'zh-TW': '播客主持人兼記者', ja: 'ポッドキャストホスト＆ジャーナリスト' },
  },
  {
    quote: {
      en: 'The accuracy is remarkable. Even in noisy conference rooms, SparkCard delivers clean transcriptions. Our team saves 10+ hours per week on meeting notes.',
      zh: '准确度令人惊叹。即使在嘈杂的会议室里，灵光记也能提供清晰的转录。我们团队每周节省超过 10 小时的会议笔记时间。',
      'zh-TW': '準確度令人驚嘆。即使在嘈雜的會議室裡，靈光記也能提供清晰的轉錄。我們團隊每週節省超過 10 小時的會議筆記時間。',
      ja: '精度が驚くほど高いです。騒がしい会議室でも、SparkCardはクリアな文字起こしを提供します。チームは週10時間以上の議事録作成時間を節約しています。',
    },
    name: { en: 'David Liu', zh: '刘大卫', 'zh-TW': '劉大衛', ja: 'デイビッド・リュウ' },
    role: { en: 'COO, Tech Startup', zh: '科技公司 COO', 'zh-TW': '科技公司 COO', ja: 'テックスタートアップ COO' },
  },
];

// ── Pre-order CTA ───────────────────────────────────────────

export const PREORDER_CTA = {
  headline: {
    en: 'Ready to never miss a moment?',
    zh: '准备好不错过每一个瞬间了吗？',
    'zh-TW': '準備好不錯過每一個瞬間了嗎？',
    ja: 'すべての瞬間を記録する準備はできましたか？',
  },
  subtext: {
    en: 'Join thousands of professionals who trust SparkCard for their most important conversations.',
    zh: '加入数千位信赖灵光记处理重要对话的专业人士。',
    'zh-TW': '加入數千位信賴靈光記處理重要對話的專業人士。',
    ja: '最も重要な会話をSparkCardに委ねる数千人のプロフェッショナルに参加しましょう。',
  },
  ctaBuy: { en: 'Buy Now', zh: '立即购买', 'zh-TW': '立即購買', ja: '今すぐ購入' },
  ctaDownload: { en: 'Download App', zh: '下载应用', 'zh-TW': '下載應用', ja: 'アプリダウンロード' },
};

// ── Product Page ────────────────────────────────────────────

export const PRODUCT_PAGE = {
  hero: {
    badge: { en: 'AI-Powered', zh: 'AI 驱动', 'zh-TW': 'AI 驅動', ja: 'AI搭載' },
    name: 'SparkCard',
    tagline: { en: 'AI-Powered Recording, Reimagined', zh: 'AI 录音，重新定义', 'zh-TW': 'AI 錄音，重新定義', ja: 'AI録音、再定義' },
    ctaBuy: { en: 'Buy Now', zh: '立即购买', 'zh-TW': '立即購買', ja: '今すぐ購入' },
    ctaLearn: { en: 'Learn More', zh: '了解更多', 'zh-TW': '瞭解更多', ja: '詳しく見る' },
  },
};

// ── Specs Grid (Product Page) ───────────────────────────────

export interface SpecGroup {
  category: MultiLangText;
  items: { label: MultiLangText; value: MultiLangText }[];
}

export const SPECS_GRID: SpecGroup[] = [
  {
    category: { en: 'Hardware', zh: '硬件参数', 'zh-TW': '硬體參數', ja: 'ハードウェア' },
    items: [
      { label: { en: 'Dimensions', zh: '尺寸', 'zh-TW': '尺寸', ja: '寸法' }, value: { en: '85.6 × 54 × 3.2mm', zh: '85.6 × 54 × 3.2mm', 'zh-TW': '85.6 × 54 × 3.2mm', ja: '85.6 × 54 × 3.2mm' } },
      { label: { en: 'Weight', zh: '重量', 'zh-TW': '重量', ja: '重量' }, value: { en: '35g', zh: '35g', 'zh-TW': '35g', ja: '35g' } },
      { label: { en: 'Battery', zh: '电池', 'zh-TW': '電池', ja: 'バッテリー' }, value: { en: '30+ days standby', zh: '30+ 天待机', 'zh-TW': '30+ 天待機', ja: '30日以上待機' } },
      { label: { en: 'Storage', zh: '存储', 'zh-TW': '儲存', ja: 'ストレージ' }, value: { en: '128GB', zh: '128GB', 'zh-TW': '128GB', ja: '128GB' } },
      { label: { en: 'Connectivity', zh: '连接', 'zh-TW': '連接', ja: '接続' }, value: { en: 'Bluetooth 5.3', zh: '蓝牙 5.3', 'zh-TW': '藍牙 5.3', ja: 'Bluetooth 5.3' } },
    ],
  },
  {
    category: { en: 'AI Features', zh: 'AI 功能', 'zh-TW': 'AI 功能', ja: 'AI機能' },
    items: [
      { label: { en: 'Languages', zh: '语言支持', 'zh-TW': '語言支援', ja: '対応言語' }, value: { en: '120+ languages', zh: '120+ 种语言', 'zh-TW': '120+ 種語言', ja: '120+言語' } },
      { label: { en: 'Transcription', zh: '转写', 'zh-TW': '轉寫', ja: '文字起こし' }, value: { en: 'Real-time AI', zh: '实时 AI 转写', 'zh-TW': '即時 AI 轉寫', ja: 'リアルタイムAI' } },
      { label: { en: 'Summarization', zh: '摘要', 'zh-TW': '摘要', ja: '要約' }, value: { en: 'Smart summaries', zh: '智能摘要', 'zh-TW': '智能摘要', ja: 'スマート要約' } },
      { label: { en: 'Speaker ID', zh: '说话人识别', 'zh-TW': '說話人識別', ja: '話者識別' }, value: { en: 'Multi-speaker', zh: '多人识别', 'zh-TW': '多人識別', ja: '複数話者' } },
    ],
  },
  {
    category: { en: 'Design', zh: '设计', 'zh-TW': '設計', ja: 'デザイン' }, items: [
      { label: { en: 'Material', zh: '材质', 'zh-TW': '材質', ja: '材質' }, value: { en: 'Aluminum alloy', zh: '铝合金', 'zh-TW': '鋁合金', ja: 'アルミ合金' } },
      { label: { en: 'Colors', zh: '颜色', 'zh-TW': '顏色', ja: 'カラー' }, value: { en: 'Space Black, Silver', zh: '太空黑、银色', 'zh-TW': '太空黑、銀色', ja: 'スペースブラック、シルバー' } },
      { label: { en: 'Button', zh: '按键', 'zh-TW': '按鍵', ja: 'ボタン' }, value: { en: 'One-touch record', zh: '一键录音', 'zh-TW': '一鍵錄音', ja: 'ワンタッチ録音' } },
    ],
  },
];

// ── FAQ Items ───────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    question: { en: 'How does SparkCard work?', zh: '灵光记是如何工作的？', 'zh-TW': '靈光記是如何工作的？', ja: 'SparkCardの仕組みは？' },
    answer: {
      en: 'Simply clip SparkCard to your notebook or place it on the table. Press the record button to start capturing audio. The built-in AI transcribes and summarizes in real-time via Bluetooth connection to the companion app.',
      zh: '只需将灵光记夹在笔记本上或放在桌面上。按下录音按钮即可开始录音。内置 AI 通过蓝牙连接配对应用，实时转写和总结。',
      'zh-TW': '只需將靈光記夾在筆記本上或放在桌面上。按下錄音按鈕即可開始錄音。內建 AI 透過藍牙連接配對應用，即時轉寫和總結。',
      ja: 'SparkCardをノートに挟むか、テーブルに置くだけ。録音ボタンを押すと録音が開始されます。内蔵AIがBluetooth経由でコンパニオンアプリに接続し、リアルタイムで文字起こしと要約を行います。',
    },
  },
  {
    question: { en: 'How long does the battery last?', zh: '电池能用多久？', 'zh-TW': '電池能用多久？', ja: 'バッテリーはどのくらい持ちますか？' },
    answer: {
      en: 'SparkCard lasts 30+ days on standby and supports 10+ hours of continuous recording on a single charge. Charging takes about 1 hour via USB-C.',
      zh: '灵光记待机 30+ 天，单次充电支持 10+ 小时连续录音。通过 USB-C 充电，约 1 小时充满。',
      'zh-TW': '靈光記待機 30+ 天，單次充電支援 10+ 小時連續錄音。透過 USB-C 充電，約 1 小時充滿。',
      ja: 'SparkCardは待機時30日以上持ち、フル充電で10時間以上の連続録音が可能です。USB-C経由で約1時間で充電完了します。',
    },
  },
  {
    question: { en: 'What languages does it support?', zh: '支持哪些语言？', 'zh-TW': '支援哪些語言？', ja: '対応言語は？' },
    answer: {
      en: 'SparkCard supports transcription in 120+ languages including English, Chinese (Mandarin and Cantonese), Japanese, Korean, Spanish, French, German, and many more.',
      zh: '灵光记支持 120+ 种语言转写，包括英语、中文（普通话和粤语）、日语、韩语、西班牙语、法语、德语等。',
      'zh-TW': '靈光記支援 120+ 種語言轉寫，包括英語、中文（普通話和粵語）、日語、韓語、西班牙語、法語、德語等。',
      ja: 'SparkCardは英語、中国語（北京語・広東語）、日本語、韓国語、スペイン語、フランス語、ドイツ語など、120以上の言語の文字起こしに対応しています。',
    },
  },
  {
    question: { en: 'Is my data secure?', zh: '我的数据安全吗？', 'zh-TW': '我的資料安全嗎？', ja: 'データは安全ですか？' },
    answer: {
      en: 'Yes. All audio processing happens on-device and encrypted end-to-end. Your recordings are never stored on our servers without your explicit permission. We use bank-level encryption standards.',
      zh: '是的。所有音频处理均在设备端完成，端到端加密。未经您的明确许可，录音绝不会存储在我们的服务器上。我们采用银行级加密标准。',
      'zh-TW': '是的。所有音訊處理均在裝置端完成，端到端加密。未經您的明確許可，錄音絕不會儲存在我們的伺服器上。我們採用銀行級加密標準。',
      ja: 'はい。すべての音声処理はデバイス上で行われ、エンドツーエンドで暗号化されています。お客様の明示的な許可なしに、録音がサーバーに保存されることはありません。銀行レベルの暗号化基準を採用しています。',
    },
  },
  {
    question: { en: 'Do I need to pay for the AI features?', zh: 'AI 功能需要付费吗？', 'zh-TW': 'AI 功能需要付費嗎？', ja: 'AI機能は有料ですか？' },
    answer: {
      en: 'SparkCard includes basic transcription and summary features. Advanced AI features like speaker identification and multi-language translation are available through the premium subscription.',
      zh: '灵光记包含基础的转写和摘要功能。说话人识别和多语言翻译等高级 AI 功能可通过高级订阅使用。',
      'zh-TW': '靈光記包含基礎的轉寫和摘要功能。說話人識別和多語言翻譯等進階 AI 功能可透過進階訂閱使用。',
      ja: 'SparkCardには基本的な文字起こしと要約機能が含まれています。話者識別や多言語翻訳などの高度なAI機能は、プレミアムサブスクリプションでご利用いただけます。',
    },
  },
];

// ── Product Page Use Cases (Deep-Dive) ──────────────────────

export const PRODUCT_USE_CASES = [
  {
    title: { en: 'Meeting Intelligence', zh: '会议智能', 'zh-TW': '會議智能', ja: 'ミーティングインテリジェンス' },
    description: {
      en: 'Record every meeting with a single tap. SparkCard captures discussions, distinguishes between speakers, and delivers structured summaries with action items — so you can focus on the conversation, not the notes.',
      zh: '一键录制每场会议。灵光记捕捉讨论内容，区分说话人，并生成包含行动项的结构化摘要，让您专注于对话而非笔记。',
      'zh-TW': '一鍵錄製每場會議。靈光記捕捉討論內容，區分說話人，並生成包含行動項的結構化摘要，讓您專注於對話而非筆記。',
      ja: 'ワンタップで毎回の会議を録音。SparkCardは議論をキャプチャし、話者を区別し、アクションアイテム付きの構造化された要約を提供します。',
    },
    features: [
      { en: 'Automatic action item extraction', zh: '自动提取行动项', 'zh-TW': '自動提取行動項', ja: '自動アクションアイテム抽出' },
      { en: 'Speaker identification', zh: '说话人识别', 'zh-TW': '說話人識別', ja: '話者識別' },
      { en: 'Searchable meeting archive', zh: '可搜索的会议存档', 'zh-TW': '可搜索的會議存檔', ja: '検索可能な会議アーカイブ' },
    ],
  },
  {
    title: { en: 'Interview & Research', zh: '访谈与研究', 'zh-TW': '訪談與研究', ja: 'インタビュー＆リサーチ' },
    description: {
      en: 'Whether it\'s a job interview, user research session, or journalistic interview — SparkCard ensures every word is captured accurately. Get full transcripts with timestamps for easy reference.',
      zh: '无论是求职面试、用户研究还是新闻访谈，灵光记确保每个字都被精准记录。获取带时间戳的完整转录，方便随时查阅。',
      'zh-TW': '無論是求職面試、使用者研究還是新聞訪談，靈光記確保每個字都被精準記錄。獲取帶時間戳的完整轉錄，方便隨時查閱。',
      ja: '就職面接、ユーザーリサーチ、ジャーナリスティックインタビューなど、SparkCardはすべての言葉を正確にキャプチャします。タイムスタンプ付きの完全な文字起こしで簡単に参照できます。',
    },
    features: [
      { en: 'Timestamped transcription', zh: '带时间戳的转录', 'zh-TW': '帶時間戳的轉錄', ja: 'タイムスタンプ付き文字起こし' },
      { en: 'Noise reduction for clear audio', zh: '降噪处理确保清晰音质', 'zh-TW': '降噪處理確保清晰音質', ja: 'ノイズリダクションでクリアな音質' },
      { en: 'Export to multiple formats', zh: '支持多种格式导出', 'zh-TW': '支援多種格式匯出', ja: '複数フォーマットでエクスポート' },
    ],
  },
  {
    title: { en: 'Personal Knowledge Management', zh: '个人知识管理', 'zh-TW': '個人知識管理', ja: '個人ナレッジマネジメント' },
    description: {
      en: 'Build your second brain. Record lectures, capture ideas on the go, and let AI organize everything into a searchable knowledge base. Never lose a thought again.',
      zh: '构建你的第二大脑。录制讲座、随时记录灵感，让 AI 将一切整理为可搜索的知识库。再也不丢失任何想法。',
      'zh-TW': '構建你的第二大腦。錄製講座、隨時記錄靈感，讓 AI 將一切整理為可搜索的知識庫。再也不丟失任何想法。',
      ja: 'セカンドブレインを構築。講義を録音し、アイデアをその場でキャプチャし、AIがすべてを検索可能なナレッジベースに整理します。',
    },
    features: [
      { en: 'AI-powered categorization', zh: 'AI 驱动的自动分类', 'zh-TW': 'AI 驅動的自動分類', ja: 'AIによる自動分類' },
      { en: 'Full-text search across recordings', zh: '跨录音全文搜索', 'zh-TW': '跨錄音全文搜索', ja: '録音全体の全文検索' },
      { en: 'Cloud sync across devices', zh: '多设备云端同步', 'zh-TW': '多裝置雲端同步', ja: '全デバイスのクラウド同期' },
    ],
  },
];

// ── Section titles ──────────────────────────────────────────

export const SECTION_TITLES = {
  valueProps: { en: 'How It Works', zh: '工作原理', 'zh-TW': '工作原理', ja: '仕組み' },
  showcase: { en: 'Precision in Every Detail', zh: '每个细节都精益求精', 'zh-TW': '每個細節都精益求精', ja: '細部へのこだわり' },
  useCases: { en: 'Built for Professionals', zh: '为专业人士打造', 'zh-TW': '為專業人士打造', ja: 'プロフェッショナルのために' },
  appPreview: { en: 'Your Companion App', zh: '您的专属应用', 'zh-TW': '您的專屬應用', ja: 'あなたのコンパニオンアプリ' },
  trust: { en: 'Trusted by Thousands', zh: '数千专业人士信赖', 'zh-TW': '數千專業人士信賴', ja: '数千人のプロが信頼' },
  specs: { en: 'Technical Specifications', zh: '技术参数', 'zh-TW': '技術參數', ja: '技術仕様' },
  useCaseDeep: { en: 'Use Cases', zh: '使用场景', 'zh-TW': '使用場景', ja: 'ユースケース' },
  faq: { en: 'Frequently Asked Questions', zh: '常见问题', 'zh-TW': '常見問題', ja: 'よくある質問' },
};
