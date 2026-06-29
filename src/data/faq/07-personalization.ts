import { FAQCategory } from './types';

export const personalizationCategory: FAQCategory = {
    id: 'personalization',
    title: {
      en: 'Templates & Industry Dictionaries',
      zh: '个性化体验',
      'zh-TW': '模板與行業詞庫',
      ja: 'テンプレートと業界辞書',
    },
    description: {
      en: 'Official templates, custom templates and industry dictionaries',
      zh: '模板、行业词库和常用输出方式',
      'zh-TW': '官方模板、自定義模板和行業詞庫',
      ja: '公式テンプレート、カスタムテンプレート、業界辞書',
    },
    icon: 'Settings',
    sections: [
      {
        id: 'personalization-settings',
        title: {
          en: 'Templates & Industry Dictionaries',
          zh: '个性化体验',
          'zh-TW': '模板與行業詞庫',
          ja: 'テンプレートと業界辞書',
        },
        icon: 'Sliders',
        description: {
          en: 'Note templates and industry dictionaries',
          zh: '模板、行业词库和常用输出方式',
          'zh-TW': '筆記模板和行業詞庫',
          ja: 'ノートテンプレートと業界辞書',
        },
        items: [
          {
            id: 'what-are-industry-dictionaries',
            question: {
              en: 'What are industry dictionaries?',
              zh: '行业词库是什么？',
              'zh-TW': '行業詞庫是什麼？',
              ja: '業界辞書とは何ですか？',
            },
            answer: {
              en: 'Industry dictionaries help improve recognition of terms in specific fields, such as finance, law, medical care, sales, education, and consulting.\n\nThey mainly affect transcription recognition. Existing recordings, notes, and transcription text will not be changed.',
              zh: '行业词库用于提升特定领域术语的识别效果，例如金融、法律、医疗、销售、教育、咨询等。\n\n它主要影响转写识别。已有录音、笔记和转写文本不会因此改变。',
              'zh-TW': '行業詞庫用於提升特定領域術語的識別效果，例如金融、法律、醫療、銷售、教育、諮詢等。\n\n它主要影響轉寫識別。已有錄音、筆記和轉寫文本不會因此改變。',
              ja: '業界辞書は、金融、法律、医療、営業、教育、コンサルティングなど、特定分野の用語認識を高めるためのものです。\n\n主に文字起こし認識に影響します。既存の録音、ノート、文字起こしテキストは変更されません。',
            },
          },
          {
            id: 'template-difference',
            question: {
              en: 'What do templates do?',
              zh: '模板有什么用？',
              'zh-TW': '模板有什麼用？',
              ja: 'テンプレートは何に使いますか？',
            },
            answer: {
              en: 'Templates determine the structure and output style of AI summaries. Different templates are suitable for different scenarios, such as meetings, calls, classes, interviews, sales reviews, and legal consultations.\n\nChanging a template usually affects future note generation only and does not modify recordings, existing notes, or transcription text.',
              zh: '模板决定 AI 总结的结构和输出样式。不同模板适合不同场景，例如会议、通话、课堂、访谈、销售复盘、法律咨询等。\n\n更换或编辑模板通常只影响后续生成的笔记，不会修改录音、已有笔记或转写文本。',
              'zh-TW': '模板決定 AI 總結的結構和輸出樣式。不同模板適合不同場景，例如會議、通話、課堂、訪談、銷售復盤、法律諮詢等。\n\n更換或編輯模板通常只影響後續生成的筆記，不會修改錄音、已有筆記或轉寫文本。',
              ja: 'テンプレートはAI要約の構造と出力スタイルを決めるものです。会議、通話、授業、インタビュー、営業レビュー、法律相談など、場面に合わせて使い分けられます。\n\nテンプレートの変更は通常、今後のノート生成にのみ影響し、録音、既存ノート、文字起こしテキストは変更しません。',
            },
          },
          {
            id: 'official-templates',
            question: {
              en: 'What official templates are available?',
              zh: '官方模板有哪些？',
              'zh-TW': '官方模板有哪些？',
              ja: '公式テンプレートにはどのようなものがありますか？',
            },
            answer: {
              en: 'Official templates cover meetings, calls, classes, speeches, interviews, recruitment, investment, sales, legal, medical, and more.\n\nCommon templates include complete transcription, meeting secretary, general meeting, weekly meeting, project progress meeting, business call summary, keynote speech summary, class recording, podcast interview, user research interview, recruitment interview (6D), investment meeting, business visit, sales opportunity assessment (BANT), and medical SOAP notes. Available templates may vary by app version.',
              zh: '官方模板覆盖会议、通话、课堂、演讲、访谈、面试、投融资、销售、法律、医疗等场景。\n\n常见模板包括完整转录、会议秘书、通用会议、例会周会、项目推进会、商务通话总结、主题演讲摘要、课堂录音、播客访谈、用户研究访谈、招聘面试（6D）、投融资会议、商务拜访、销售商机评估（BANT）、医疗 SOAP 记录。具体可用模板以 App 内展示为准。',
              'zh-TW': '官方模板覆蓋會議、通話、課堂、演講、訪談、面試、投融資、銷售、法律、醫療等場景。\n\n常見模板包括完整轉錄、會議秘書、通用會議、例會週會、項目推進會、商務通話總結、主題演講摘要、課堂錄音、播客訪談、用戶研究訪談、招聘面試（6D）、投融資會議、商務拜訪、銷售商機評估（BANT）、醫療 SOAP 記錄。具體可用模板以 App 內展示為準。',
              ja: '公式テンプレートは会議、通話、授業、スピーチ、インタビュー、採用面接、投資、営業、法律、医療などをカバーします。\n\n主なテンプレートには、完全文字起こし、会議秘書、汎用会議、週次会議、プロジェクト進行会議、ビジネス通話要約、基調講演要約、授業録音、ポッドキャストインタビュー、ユーザーリサーチインタビュー、採用面接（6D）、投資会議、商談訪問、営業機会評価（BANT）、医療 SOAP 記録があります。利用可能なテンプレートはアプリのバージョンによって異なる場合があります。',
            },
          },
          {
            id: 'custom-template',
            question: {
              en: 'How do I create a custom template?',
              zh: '如何创建自定义模板？',
              'zh-TW': '如何創建自定義模板？',
              ja: 'カスタムテンプレートはどう作成しますか？',
            },
            answer: {
              en: 'Custom templates let you define how a note should be summarized for your own recurring scenarios. You can write the structure you want, such as action items, key numbers, customer intent, risks, decisions, or follow-up questions.\n\nAfter saving, the template will appear in your template list for future note generation.',
              zh: '自定义模板用于固定自己的总结方式。你可以根据常用场景编写想要的输出结构，例如待办事项、关键数据、客户意图、风险点、会议决策或后续问题。\n\n保存后，模板会进入你的模板列表，用于后续笔记生成。',
              'zh-TW': '自定義模板用於固定自己的總結方式。你可以根據常用場景編寫想要的輸出結構，例如待辦事項、關鍵數據、客戶意圖、風險點、會議決策或後續問題。\n\n保存後，模板會進入你的模板列表，用於後續筆記生成。',
              ja: 'カスタムテンプレートでは、よく使うシーンに合わせてノートの要約方法を指定できます。アクション項目、重要な数値、顧客の意図、リスク、会議の決定事項、次に確認する質問など、必要な出力構造を書けます。\n\n保存したテンプレートはテンプレート一覧に追加され、以後のノート生成に使えます。',
            },
          },
        ],
      },
    ],
  };

