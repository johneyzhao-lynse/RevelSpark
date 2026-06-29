import { FAQCategory } from './types';

export const appServicesCategory: FAQCategory = {
    id: 'app-services',
    title: {
      en: 'App & Services',
      zh: 'App 与服务',
      'zh-TW': 'App 與服務',
      ja: 'アプリとサービス',
    },
    description: {
      en: 'Recording, transcription, AI features and file management',
      zh: '录音、转写、AI 功能和文件管理',
      'zh-TW': '錄音、轉寫、AI 功能和文件管理',
      ja: '録音、文字起こし、AI機能、ファイル管理',
    },
    icon: 'Smartphone',
    sections: [
      {
        id: 'recording-import',
        title: {
          en: 'Recording & Import',
          zh: '录音与导入',
          'zh-TW': '錄音與導入',
          ja: '録音とインポート',
        },
        icon: 'Mic',
        description: {
          en: 'How to record and import audio',
          zh: '如何录音和导入音频',
          'zh-TW': '如何錄音和導入音頻',
          ja: '録音とオーディオのインポート方法',
        },
        items: [
          {
            id: 'recording-methods',
            question: {
              en: 'What recording methods does Lynse support?',
              zh: '灵光记支持哪些录音方式？',
              'zh-TW': '靈光記支援哪些錄音方式？',
              ja: 'Lynseはどのような録音方法に対応していますか？',
            },
            answer: {
              en: 'Lynse supports three recording methods:\n\n• Phone Recording: Use your phone\'s microphone. Suitable for temporary notes, meetings, classes, and ideas.\n• Device Recording: Use the SparkCard, sync to app after connection. Suitable for long meetings, interviews, and offline communication.\n• Import Audio: Import existing audio files. Suitable for organizing historical recordings and external audio.\n\nDevice recording and phone recording can be used simultaneously without interfering with each other.',
              zh: '灵光记支持三种录音方式：\n\n• 手机录音：使用手机麦克风录音。适合临时记录、会议、课堂、灵感。\n• 设备录音：使用灵光闪记卡录音，连接手机后同步到 App。适合长会议、采访、线下沟通。\n• 导入音频：从手机文件入口导入已有音频。适合整理历史录音、外部音频。\n\n设备录音和手机录音可以同时进行，互不影响。',
              'zh-TW': '靈光記支援三種錄音方式：\n\n• 手機錄音：使用手機麥克風錄音。適合臨時記錄、會議、課堂、靈感。\n• 設備錄音：使用靈光閃記卡錄音，連接手機後同步到 App。適合長會議、採訪、線下溝通。\n• 導入音頻：從手機文件入口導入已有音頻。適合整理歷史錄音、外部音頻。\n\n設備錄音和手機錄音可以同時進行，互不影響。',
              ja: 'Lynseは3つの録音方法に対応：\n\n• スマホ録音：スマホのマイクを使用。一時的なメモ、会議、授業、アイデアに。\n• デバイス録音：SparkCardで録音、接続後にアプリに同期。長時間の会議、インタビュー、オフラインコミュニケーションに。\n• オーディオインポート：既存のオーディオファイルをインポート。過去の録音や外部オーディオの整理に。\n\nデバイス録音とスマホ録音は同時に使用可能で、互いに干渉しません。',
            },
            promoted: true,
          },
          {
            id: 'recording-limit',
            question: {
              en: 'Is there a limit on single recording or transcription?',
              zh: '单次录音或转写有上限吗？',
              'zh-TW': '單次錄音或轉寫有上限嗎？',
              ja: '1回の録音や文字起こしに上限はありますか？',
            },
            answer: {
              en: 'Yes. The limit for a single recording, import, or transcription is 300 minutes (5 hours). Audio exceeding this limit should be processed in segments.',
              zh: '有。单次录音、导入或转写上限为 300 分钟（5 小时）。超过上限的音频建议分段处理。',
              'zh-TW': '有。單次錄音、導入或轉寫上限為 300 分鐘（5 小時）。超過上限的音頻建議分段處理。',
              ja: 'はい。1回の録音、インポート、または文字起こしの上限は300分（5時間）です。上限を超えるオーディオは分割して処理することをお勧めします。',
            },
          },
          {
            id: 'how-to-import',
            question: {
              en: 'How do I import existing audio?',
              zh: '如何导入已有音频？',
              'zh-TW': '如何導入已有音頻？',
              ja: '既存のオーディオをどうインポートしますか？',
            },
            answer: {
              en: 'Use the import function in the app, or import audio from system files, photo library, voice memos, or third-party app sharing. Common supported formats include MP3, WAV, M4A, etc. After importing, audio can be transcribed and summarized like regular recordings.',
              zh: '在 App 中使用导入入口，或从系统文件、相册、录音备忘录、第三方 App 的分享入口导入音频。支持格式以页面展示为准，常见格式包括 MP3、WAV、M4A 等。导入后，音频可像普通录音一样发起转写、总结和模板生成。',
              'zh-TW': '在 App 中使用導入入口，或從系統文件、相冊、錄音備忘錄、第三方 App 的分享入口導入音頻。支援格式以頁面展示為準，常見格式包括 MP3、WAV、M4A 等。導入後，音頻可像普通錄音一樣發起轉寫、總結和模板生成。',
              ja: 'アプリ内のインポート機能を使用するか、システムファイル、フォトアルバム、ボイスメモ、サードパーティアプリの共有からオーディオをインポートします。対応形式はMP3、WAV、M4Aなどです。インポート後、通常の録音と同様に文字起こしや要約を行えます。',
            },
          },
          {
            id: 'phone-recording',
            question: {
              en: 'How do I use phone recording?',
              zh: '手机录音怎么用？',
              'zh-TW': '手機錄音怎麼用？',
              ja: 'スマホ録音の使い方は？',
            },
            answer: {
              en: 'When using phone recording for the first time, you need to grant the system microphone permission. After starting recording, you can pause, resume, stop, cancel, or complete the file as supported by the page.\n\nIt\'s recommended to keep the app running normally during recording and avoid system permission or background restrictions affecting the recording.',
              zh: '首次使用手机录音时，需要授予系统麦克风权限。开始录音后，可按页面支持的操作暂停、继续、停止、取消或完成生成文件。\n\n录音过程中建议保持 App 正常运行，并避免系统权限或后台限制影响录制。',
              'zh-TW': '首次使用手機錄音時，需要授予系統麥克風權限。開始錄音後，可按頁面支援的操作暫停、繼續、停止、取消或完成生成文件。\n\n錄音過程中建議保持 App 正常運行，並避免系統權限或後台限制影響錄製。',
              ja: 'スマホ録音を初めて使用する際は、システムのマイク権限を付与する必要があります。録音開始後、ページでサポートされている操作で一時停止、再開、停止、キャンセル、またはファイルの完了ができます。\n\n録音中はアプリを正常に動作させ、システムの権限やバックグラウンド制限の影響を避けてください。',
            },
          },
          {
            id: 'dual-recording',
            question: {
              en: 'Can device recording and phone recording be used simultaneously?',
              zh: '设备录音和手机录音可以同时进行吗？',
              'zh-TW': '設備錄音和手機錄音可以同時進行嗎？',
              ja: 'デバイス録音とスマホ録音は同時に使用できますか？',
            },
            answer: {
              en: 'Yes. Device recording and phone recording can be used simultaneously without interfering with each other. Each saves independently after completion.',
              zh: '可以。设备录音和手机录音可以同时进行，互不影响，完成后分别保存。',
              'zh-TW': '可以。設備錄音和手機錄音可以同時進行，互不影響，完成後分別保存。',
              ja: 'はい。デバイス録音とスマホ録音は同時に使用可能で、互いに干渉せず、完了後にそれぞれ保存されます。',
            },
          },
        ],
      },
      {
        id: 'ai-transcription-summary',
        title: {
          en: 'AI Transcription & Summary',
          zh: 'AI 转写与总结',
          'zh-TW': 'AI 轉寫與總結',
          ja: 'AI文字起こしと要約',
        },
        icon: 'Sparkles',
        description: {
          en: 'Transcription, summary, and AI features',
          zh: '转写、总结和 AI 功能',
          'zh-TW': '轉寫、總結和 AI 功能',
          ja: '文字起こし、要約、AI機能',
        },
        items: [
          {
            id: 'ai-features-after-recording',
            question: {
              en: 'What can the AI do after recording?',
              zh: '录音后 AI 可以做什么？',
              'zh-TW': '錄音後 AI 可以做什麼？',
              ja: '録音後にAIは何ができますか？',
            },
            answer: {
              en: 'After recording or importing audio, Lynse can generate:\n\n• Transcription: Convert audio to text.\n• AI Summary: Organize into structured notes using templates.\n• To-Do Items: Extract tasks, responsible persons, and deadlines.\n• Mind Map: Organize long content into hierarchical structure.\n• LynClaw Follow-up: Continue asking questions about the current file, tags, or all files.',
              zh: '录音或导入音频后，灵光记可生成：\n\n• 转写文本：将音频转换为文字。\n• AI 总结：按模板整理成结构化笔记。\n• 待办事项：从内容中提取任务、负责人和截止时间。\n• 思维导图：将长内容整理为层级结构。\n• LynClaw 追问：继续围绕当前文件、标签或全部文件提问。',
              'zh-TW': '錄音或導入音頻後，靈光記可生成：\n\n• 轉寫文本：將音頻轉換為文字。\n• AI 總結：按模板整理成結構化筆記。\n• 待辦事項：從內容中提取任務、負責人和截止時間。\n• 思維導圖：將長內容整理成層級結構。\n• LynClaw 追問：繼續圍繞當前文件、標籤或全部文件提問。',
              ja: '録音またはオーディオインポート後、Lynseは以下を生成できます：\n\n• 文字起こし：オーディオをテキストに変換。\n• AI要約：テンプレートを使用して構造化ノートに整理。\n• TODO項目：タスク、担当者、期限を抽出。\n• マインドマップ：長いコンテンツを階層構造に整理。\n• LynClawフォローアップ：現在のファイル、タグ、または全ファイルについて質問を続ける。',
            },
            promoted: true,
          },
          {
            id: 'auto-vs-manual-generation',
            question: {
              en: 'What\'s the difference between auto and manual generation?',
              zh: '自动生成和手动生成有什么区别？',
              'zh-TW': '自動生成和手動生成有什麼區別？',
              ja: '自動生成と手動生成の違いは何ですか？',
            },
            answer: {
              en: 'Auto generation is suitable for quick default results — the system generates transcription, summary, or related content with current settings. Manual generation is for when you want to choose your own summary template, audio language, AI model, or other options.\n\nIf the result doesn\'t meet expectations, try changing the template, language, or model and regenerate. Regeneration may overwrite current results.',
              zh: '自动生成适合快速获得默认结果，系统会按当前配置生成转写、总结或相关内容。手动生成适合你希望自己选择总结模板、音频语言、AI 模型或其他选项的场景。\n\n如果生成结果不符合预期，可尝试更换模板、语言或模型后重新生成。重新生成可能覆盖或替换当前结果。',
              'zh-TW': '自動生成適合快速獲得預設結果，系統會按當前配置生成轉寫、總結或相關內容。手動生成適合你希望自己選擇總結模板、音頻語言、AI 模型或其他選項的場景。\n\n如果生成結果不符合預期，可嘗試更換模板、語言或模型後重新生成。重新生成可能覆蓋或替換當前結果。',
              ja: '自動生成は現在の設定でデフォルト結果を素早く得たい場合に適しています。手動生成は、要約テンプレート、オーディオ言語、AIモデルなどを自分で選択したい場合に適しています。\n\n結果が期待に沿わない場合は、テンプレート、言語、モデルを変更して再生成してください。再生成は現在の結果を上書きする場合があります。',
            },
          },
          {
            id: 'transcription-accuracy',
            question: {
              en: 'What affects transcription accuracy?',
              zh: '转写准确度受什么影响？',
              'zh-TW': '轉寫準確度受什麼影響？',
              ja: '文字起こしの精度に影響する要因は何ですか？',
            },
            answer: {
              en: 'Transcription accuracy is affected by recording environment, speaker distance, accent, speech speed, overlapping speakers, background noise, microphone position, and industry terminology.\n\nFor better results, place the device close to the main speaker, minimize background noise, and use the dictionary feature for professional terminology.',
              zh: '转写准确度会受到录音环境、说话人距离、口音、语速、重叠说话、背景噪声、设备麦克风位置和行业术语影响。\n\n建议录音时让设备靠近主要说话人，尽量减少背景噪声，并在需要时使用词库提升专业术语识别效果。',
              'zh-TW': '轉寫準確度會受到錄音環境、說話人距離、口音、語速、重疊說話、背景噪聲、設備麥克風位置和行業術語影響。\n\n建議錄音時讓設備靠近主要說話人，盡量減少背景噪聲，並在需要使用時詞庫提升專業術語識別效果。',
              ja: '文字起こしの精度は、録音環境、話者との距離、アクセント、話す速度、話者の重なり、背景ノイズ、マイクの位置、業界用語に影響されます。\n\nより良い結果を得るために、デバイスをメインの話し手に近づけ、背景ノイズを最小限にし、専門用語には辞書機能を使用してください。',
            },
          },
          {
            id: 'credits-for-transcription',
            question: {
              en: 'How are credits deducted for AI transcription?',
              zh: 'AI 转写怎么扣积分？',
              'zh-TW': 'AI 轉寫怎麼扣積分？',
              ja: 'AI文字起こしのクレジットはどう引かれますか？',
            },
            answer: {
              en: 'Transcription is charged by credits: 1 credit = 1 minute of transcription. Less than 1 minute is charged as 1 credit. The single recording/transcription limit is 300 minutes (5 hours). Elite members enjoy unlimited transcription.',
              zh: '转写按积分扣费，通常 1 积分 = 1 分钟转写时长，不足 1 分钟按 1 积分扣除。单次录音或转写上限为 300 分钟（5 小时）。精英会员为无限转写。',
              'zh-TW': '轉寫按積分扣費，通常 1 積分 = 1 分鐘轉寫時長，不足 1 分鐘按 1 積分扣除。單次錄音或轉寫上限為 300 分鐘（5 小時）。精英會員為無限轉寫。',
              ja: '文字起こしはクレジットで課金されます：1クレジット＝1分の文字起こし。1分未満は1クレジットとして課金。1回の録音/文字起こしの上限は300分（5時間）です。エリートメンバーは無制限の文字起こしを利用できます。',
            },
          },
          {
            id: 'mind-map',
            question: {
              en: 'Where can I view the mind map? Can I edit it?',
              zh: '思维导图在哪里看？可以编辑吗？',
              'zh-TW': '思維導圖在哪裡看？可以編輯嗎？',
              ja: 'マインドマップはどこで見られますか？編集できますか？',
            },
            answer: {
              en: 'The mind map is generated based on transcription and summary, and is usually displayed on the file details page or summary area. If the content is inaccurate, adjust the transcription, summary, or template first, then regenerate. Whether direct editing is supported depends on the current app version.',
              zh: '思维导图通常基于转写和总结生成，用来快速查看主题层级和重点关系。它一般会出现在文件详情页或总结相关区域。如果思维导图内容不准确，通常需要先调整转写、总结或模板后重新生成。是否支持直接编辑，以当前 App 页面为准。',
              'zh-TW': '思維導圖通常基於轉寫和總結生成，用來快速查看主題層級和重點關係。它一般會出現在文件詳情頁或總結相關區域。如果思維導圖內容不準確，通常需要先調整轉寫、總結或模板後重新生成。是否支援直接編輯，以當前 App 頁面為準。',
              ja: 'マインドマップは文字起こしと要約に基づいて生成され、通常ファイル詳細ページまたは要約エリアに表示されます。内容が不正確な場合は、まず文字起こし、要約、またはテンプレートを調整してから再生成してください。直接編集の対応は、現在のアプリバージョンにより異なります。',
            },
          },
          {
            id: 'summary-failed',
            question: {
              en: 'What if summary generation fails?',
              zh: '生成总结失败怎么办？',
              'zh-TW': '生成總結失敗怎麼辦？',
              ja: '要約の生成に失敗した場合はどうすればいいですか？',
            },
            answer: {
              en: 'Please check:\n1. Is the network stable?\n2. Has the audio been fully uploaded or synced?\n3. Does the current account have available credits or membership benefits?\n4. Is the file length within the single limit?\n5. Does the file title, import title, or content trigger sensitive content rules?\n\nIf the recording or transcription text triggers sensitive content, transcription may complete normally, but summary or note generation may show a violation prompt.',
              zh: '请先检查：\n1. 网络是否稳定。\n2. 音频是否已经完成上传或同步。\n3. 当前账号是否有可用积分或会员权益。\n4. 文件长度是否超过单次上限。\n5. 文件标题、导入标题或内容是否触发敏感内容规则。\n\n如果录音或转写文本命中敏感内容，转写可能正常完成，但生成总结或笔记时可能提示"您的转写内容中有违规内容"。',
              'zh-TW': '請先檢查：\n1. 網絡是否穩定。\n2. 音頻是否已經完成上傳或同步。\n3. 當前賬號是否有可用積分或會員權益。\n4. 文件長度是否超過單次上限。\n5. 文件標題、導入標題或內容是否觸發敏感內容規則。\n\n如果錄音或轉寫文本命中敏感內容，轉寫可能正常完成，但生成總結或筆記時可能提示"您的轉寫內容中有違規內容"。',
              ja: '以下を確認してください：\n1. ネットワークは安定していますか？\n2. オーディオは完全にアップロードまたは同期されていますか？\n3. 現在のアカウントに利用可能なクレジットまたはメンバーシップ特典がありますか？\n4. ファイルの長さが1回の上限内ですか？\n5. ファイルタイトル、インポートタイトル、またはコンテンツが機密コンテンツルールに抵触していませんか？',
            },
          },
          {
            id: 'sensitive-word',
            question: {
              en: 'What should I do when I see a sensitive content prompt?',
              zh: '遇到敏感词提示怎么办？',
              'zh-TW': '遇到敏感詞提示怎麼辦？',
              ja: '機密コンテンツの警告が出たらどうすればいいですか？',
            },
            answer: {
              en: 'Different scenarios have different prompts:\n\n• When uploading or importing audio with a sensitive title, the upload or import may fail.\n• When recording or transcription text triggers sensitive words, transcription may complete normally, but summary or note generation may show "Your transcription contains prohibited content".\n• When editing notes and auto-syncing, sensitive parts may be replaced with *** and prompt "Sensitive words detected in transcription".',
              zh: '不同场景的提示不同：\n\n• 上传录音文件或导入音频标题命中敏感词时，上传或导入可能失败。\n• 录音或转写文本命中敏感词时，转写可能正常完成，但生成总结或笔记时可能提示"您的转写内容中有违规内容"。\n• 编辑笔记并自动同步时，如果命中敏感词，敏感部分可能被替换为 ***，并提示"检测到转写中有敏感词"。',
              'zh-TW': '不同場景的提示不同：\n\n• 上傳錄音文件或導入音頻標題命中敏感詞時，上傳或導入可能失敗。\n• 錄音或轉寫文本命中敏感詞時，轉寫可能正常完成，但生成總結或筆記時可能提示"您的轉寫內容中有違規內容"。\n• 編輯筆記並自動同步時，如果命中敏感詞，敏感部分可能被替換為 ***，並提示"檢測到轉寫中有敏感詞"。',
              ja: 'シナリオによって警告が異なります：\n\n• 機密タイトルを含むオーディオのアップロードまたはインポート時、アップロードまたはインポートが失敗する場合があります。\n• 録音や文字起こしテキストが機密ワードにヒットした場合、文字起こしは正常に完了する場合がありますが、要約やノートの生成時に「文字起こし内容に違反内容があります」と表示される場合があります。\n• ノートを編集して自動同期する際、機密ワードにヒットした場合、機密部分が *** に置き換えられ、「文字起こしに機密ワードが検出されました」と表示される場合があります。',
            },
          },
        ],
      },
      {
        id: 'lynclaw-ai',
        title: {
          en: 'LynClaw AI Assistant',
          zh: 'LynClaw AI 助手',
          'zh-TW': 'LynClaw AI 助手',
          ja: 'LynClaw AIアシスタント',
        },
        icon: 'Bot',
        description: {
          en: 'AI-powered Q&A assistant',
          zh: 'AI 对话助手',
          'zh-TW': 'AI 對話助手',
          ja: 'AI搭載Q&Aアシスタント',
        },
        items: [
          {
            id: 'what-is-lynclaw',
            question: {
              en: 'What is LynClaw?',
              zh: 'LynClaw 是什么？',
              'zh-TW': 'LynClaw 是什麼？',
              ja: 'LynClawとは何ですか？',
            },
            answer: {
              en: 'LynClaw is the built-in AI conversation assistant in Lynse that helps you ask follow-up questions based on recordings, notes, and tags.\n\n• Without opening a specific file: defaults to asking about all files.\n• When opened in a specific file: defaults to asking about the current file.\n• When opened under a tag: defaults to asking about the current tag.\n• Use @ to select a file (1 file at a time).\n• Use # to select tags (up to 3 tags).',
              zh: 'LynClaw 是灵光记内置的 AI 对话助手，可以帮助你基于录音、笔记和标签继续提问。\n\n• 未打开具体文件时，默认基于全部文件提问。\n• 在具体文件中呼出时，默认基于当前文件提问。\n• 在标签下呼出时，默认基于当前标签提问。\n• 使用 @ 可选择文件，单次选择 1 个文件。\n• 使用 # 可选择标签，最多选择 3 个标签。',
              'zh-TW': 'LynClaw 是靈光記內置的 AI 對話助手，可以幫助你基於錄音、筆記和標籤繼續提問。\n\n• 未打開具體文件時，預設基於全部文件提問。\n• 在具體文件中呼出時，預設基於當前文件提問。\n• 在標籤下呼出時，預設基於當前標籤提問。\n• 使用 @ 可選擇文件，單次選擇 1 個文件。\n• 使用 # 可選擇標籤，最多選擇 3 個標籤。',
              ja: 'LynClawは、Lynseに内蔵されたAI会話アシスタントで、録音、ノート、タグに基づいてフォローアップの質問をすることができます。\n\n• 特定のファイルを開いていない場合：すべてのファイルについて質問します。\n• 特定のファイル内で開いた場合：現在のファイルについて質問します。\n• タグの下で開いた場合：現在のタグについて質問します。\n• @ を使用してファイルを選択（1回に1つ）。\n• # を使用してタグを選択（最大3つ）。',
            },
            promoted: true,
          },
          {
            id: 'single-vs-all-files',
            question: {
              en: 'What\'s the difference between asking about a single file vs. all files?',
              zh: '基于单个文件提问和基于全部文件提问有什么区别？',
              'zh-TW': '基於單個文件提問和基於全部文件提問有什麼區別？',
              ja: '単一ファイルと全ファイルの質問の違いは何ですか？',
            },
            answer: {
              en: 'When asking about a single file, LynClaw focuses on the current recording, transcription, and summary — suitable for deep-diving into a meeting, interview, or class. When asking about all files, LynClaw searches across available files — suitable for recalling past events, cross-project research, or summarizing content across multiple files.\n\nIf you know which recording contains the answer, ask within that file. If you\'re unsure, ask from all files or by tag.',
              zh: '基于单个文件提问时，LynClaw 会更聚焦当前录音、转写和总结，适合深挖一次会议、访谈或课堂内容。基于全部文件提问时，LynClaw 会在可用文件范围内查找信息，适合回忆过去某个事项、跨项目查找线索或汇总多个文件中的内容。\n\n如果你已经知道问题来自哪一份录音，优先在该文件内提问；如果不确定答案在哪个文件里，可以从全部文件或标签范围提问。',
              'zh-TW': '基於單個文件提問時，LynClaw 會更聚焦當前錄音、轉寫和總結，適合深挖一次會議、訪談或課堂內容。基於全部文件提問時，LynClaw 會在可用文件範圍內查找資訊，適合回憶過去某個事項、跨項目查找線索或匯總多個文件中的內容。\n\n如果你已經知道問題來自哪一份錄音，優先在該文件內提問；如果不確定答案在哪個文件裡，可以從全部文件或標籤範圍提問。',
              ja: '単一ファイルについて質問する場合、LynClawは現在の録音、文字起こし、要約に焦点を当てます — 会議、インタビュー、授業の内容を深掘りするのに適しています。全ファイルについて質問する場合、利用可能なファイル全体を検索します — 過去の出来事を思い出したり、プロジェクト横断的な調査、複数ファイルの内容をまとめるのに適しています。',
            },
          },
          {
            id: 'input-limits',
            question: {
              en: 'What are the input limits for LynClaw?',
              zh: 'LynClaw 输入有什么限制？',
              'zh-TW': 'LynClaw 輸入有什麼限制？',
              ja: 'LynClawの入力制限は何ですか？',
            },
            answer: {
              en: '• Text input: up to 1000 characters, input box shows up to 8 lines.\n• Voice input: up to 1 minute per input.\n• You can stop generation at any time and then enter a new question.\n• Long press user questions to copy or edit them. Editing regenerates subsequent answers.',
              zh: '• 文本输入最多 1000 字，输入框最多显示 8 行。\n• 单次语音输入上限为 1 分钟。\n• AI 输出未完成时，可以停止生成，再重新输入问题。\n• 长按用户问题进行复制或修改。修改历史问题后，后续回答会被舍弃并重新生成。',
              'zh-TW': '• 文本輸入最多 1000 字，輸入框最多顯示 8 行。\n• 單次語音輸入上限為 1 分鐘。\n• AI 輸出未完成時，可以停止生成，再重新輸入問題。\n• 長按用戶問題進行複製或修改。修改歷史問題後，後續回答會被捨棄並重新生成。',
              ja: '• テキスト入力：最大1000文字、入力ボックスは最大8行表示。\n• 音声入力：1回あたり最大1分。\n• AI出力が完了していない場合、生成を停止して新しい質問を入力できます。\n• ユーザーの質問を長押ししてコピーまたは編集できます。編集すると、後続の回答は破棄され再生成されます。',
            },
          },
        ],
      },
      {
        id: 'file-management-export',
        title: {
          en: 'File Management & Export',
          zh: '文件管理与导出',
          'zh-TW': '文件管理與匯出',
          ja: 'ファイル管理とエクスポート',
        },
        icon: 'Folder',
        description: {
          en: 'Manage, export, and share your files',
          zh: '管理、导出和分享文件',
          'zh-TW': '管理、匯出和分享文件',
          ja: 'ファイルの管理、エクスポート、共有',
        },
        items: [
          {
            id: 'export-formats',
            question: {
              en: 'What export formats are supported?',
              zh: '支持哪些导出格式？',
              'zh-TW': '支援哪些匯出格式？',
              ja: 'どのようなエクスポート形式に対応していますか？',
            },
            answer: {
              en: 'Common export formats include:\n\n• Audio: MP3, WAV, M4A, etc.\n• Transcription: TXT, SRT, PDF\n• Summary: TXT, Markdown, PDF\n• Mind Map: As supported by the current page\n\nExport options may include timestamps and speaker identification. Supported formats may vary by platform and version.',
              zh: '常见导出格式包括：\n\n• 音频：MP3、WAV、M4A 等\n• 转写文字：TXT、SRT、PDF\n• 总结：TXT、Markdown、PDF\n• 思维导图：以页面支持格式为准\n\n导出时可能支持包含时间戳、区分说话人等选项。不同平台和版本支持的格式可能不同。',
              'zh-TW': '常見匯出格式包括：\n\n• 音頻：MP3、WAV、M4A 等\n• 轉寫文字：TXT、SRT、PDF\n• 總結：TXT、Markdown、PDF\n• 思維導圖：以頁面支援格式為準\n\n匯出時可能支援包含時間戳、區分說話人等選項。不同平台和版本支援的格式可能不同。',
              ja: '一般的なエクスポート形式：\n\n• オーディオ：MP3、WAV、M4Aなど\n• 文字起こし：TXT、SRT、PDF\n• 要約：TXT、Markdown、PDF\n• マインドマップ：現在のページでサポートされている形式\n\nエクスポートオプションにはタイムスタンプや話者識別が含まれる場合があります。対応形式はプラットフォームやバージョンにより異なる場合があります。',
            },
          },
          {
            id: 'tags-usage',
            question: {
              en: 'How do I use tags?',
              zh: '标签怎么用？',
              'zh-TW': '標籤怎麼用？',
              ja: 'タグの使い方は？',
            },
            answer: {
              en: 'Tags are used to categorize files, displayed as #tagname. You can use tags to organize meetings, courses, clients, projects, or topics. You can also let LynClaw ask questions within a specific tag scope.',
              zh: '标签用于给文件归类，常见展示格式为 #标签名称。你可以用标签管理会议、课程、客户、项目或主题，也可以让 LynClaw 基于指定标签范围提问。',
              'zh-TW': '標籤用於給文件歸類，常見展示格式為 #標籤名稱。你可以用標籤管理會議、課程、客戶、項目或主題，也可以讓 LynClaw 基於指定標籤範圍提問。',
              ja: 'タグはファイルを分類するために使用され、#タグ名 の形式で表示されます。会議、コース、クライアント、プロジェクト、トピックをタグで管理できます。LynClawに特定のタグ範囲内で質問させることもできます。',
            },
          },
          {
            id: 'cloud-sync',
            question: {
              en: 'What happens to files if I turn off cloud sync?',
              zh: '关闭云同步后文件会怎样？',
              'zh-TW': '關閉雲同步後文件會怎樣？',
              ja: 'クラウド同期をオフにするとファイルはどうなりますか？',
            },
            answer: {
              en: 'Turning off cloud sync does not automatically delete recordings. Different types of data may exist separately in the app local, device, and cloud. Before deleting files, cleaning device storage, or turning off sync, please read the page prompts carefully.\n\nRegardless of whether cloud sync is enabled, notes and transcriptions may need to be uploaded to the cloud for AI processing and multi-device visibility.',
              zh: '当前版本默认开启云同步，暂不提供关闭云同步的开关。后续版本会提供可关闭云同步的离线模式。\n\n关闭云同步不等于自动删除录音。不同类型的数据可能分别存在于 App 本地、设备端和云端。删除文件、清理设备存储或调整同步设置前，请认真阅读页面提示。\n\n笔记和转写内容可能需要上传云端以完成 AI 处理和多设备可见。',
              'zh-TW': '關閉雲同步不等於自動刪除錄音。不同類型的數據可能分別存在於 App 本地、設備端和雲端。刪除文件、清理設備儲存或關閉同步前，請認真閱讀頁面提示。\n\n無論是否開啟雲同步，筆記和轉寫內容可能需要上傳雲端以完成 AI 處理和多設備可見。',
              ja: 'クラウド同期をオフにしても、録音は自動的に削除されません。異なるタイプのデータは、アプリローカル、デバイス側、クラウドにそれぞれ存在する場合があります。ファイルの削除、デバイスストレージのクリーニング、または同期のオフを行う前に、ページのプロンプトをよくお読みください。',
            },
          },
          {
            id: 'note-editing',
            question: {
              en: 'Can I directly edit notes?',
              zh: '笔记可以直接编辑吗？',
              'zh-TW': '筆記可以直接編輯嗎？',
              ja: 'ノートを直接編集できますか？',
            },
            answer: {
              en: 'Yes. The notes page is editable by default. You can directly tap content to modify it, and the system will auto-sync according to current rules.\n\nThe notes toolbar usually includes font size, font style, numbering, quotes, images, undo, etc. Regenerating the summary may replace existing note content. If you have manually edited notes, check the page prompt before regenerating.',
              zh: '取决于笔记格式。Markdown 格式模板生成的笔记默认可以编辑，你可以直接点按内容进行修改，系统会按当前规则自动同步。\n\n部分模板生成的笔记是 HTML 格式，暂不支持直接编辑。重新生成总结可能替换已有笔记内容，如果你已经手动编辑过笔记，重新生成前建议先确认页面提示。',
              'zh-TW': '可以。筆記頁預設可編輯，不設置獨立查看/編輯模式。你可以直接點按內容進行修改，系統會按當前規則自動同步。\n\n筆記工具欄通常包含字號、字體、序號、引用、圖片、撤回等入口。重新生成總結可能替換已有筆記內容。如果你已經手動編輯過筆記，重新生成前建議先確認頁面提示。',
              ja: 'はい。ノートページはデフォルトで編集可能です。コンテンツを直接タップして修正でき、システムは現在のルールに従って自動同期します。\n\nノートツールバーには通常、フォントサイズ、フォントスタイル、番号付け、引用、画像、元に戻すなどが含まれます。要約の再生成は既存のノート内容を置換する場合があります。',
            },
          },
          {
            id: 'share-vs-export',
            question: {
              en: 'What\'s the difference between sharing and exporting?',
              zh: '分享链接和导出有什么区别？',
              'zh-TW': '分享鏈接和匯出有什麼區別？',
              ja: '共有とエクスポートの違いは何ですか？',
            },
            answer: {
              en: 'Exporting usually generates a file to send to others. Sharing a link allows others to view the content via a link — whether an account is required, and whether downloading or editing is allowed, depends on the current sharing settings.\n\nSharing involves privacy risks. For sensitive content such as client, meeting, medical, legal, or financial information, choose sharing scope carefully.',
              zh: '导出通常是生成文件后发送给他人。分享链接通常是让他人通过链接查看内容。\n\n分享包含隐私风险。涉及客户、会议、医疗、法律、财务等敏感内容时，请谨慎选择公开链接。',
              'zh-TW': '匯出通常是生成文件後發送給他人。分享鏈接通常是讓他人通過鏈接查看內容，是否需要賬號、是否可下載或編輯，以 App 當前分享頁設置為準。\n\n分享包含隱私風險。涉及客戶、會議、醫療、法律、財務等敏感內容時，請謹慎選擇公開鏈接或邀請範圍。',
              ja: 'エクスポートは通常、ファイルを生成して他人に送信します。リンク共有は通常、リンクを通じてコンテンツを閲覧させます — アカウントが必要かどうか、ダウンロードや編集が可能かどうかは、現在の共有設定によります。\n\n共有にはプライバシーリスクが伴います。クライアント、会議、医療、法律、財務などの機密コンテンツの場合は、共有範囲を慎重に選択してください。',
            },
          },
          {
            id: 'todo-usage',
            question: {
              en: 'How do I use to-do items?',
              zh: '待办事项怎么用？',
              'zh-TW': '待辦事項怎麼用？',
              ja: 'TODO項目の使い方は？',
            },
            answer: {
              en: 'Lynse can automatically extract to-dos from recording summaries and sync them to the to-do list. To-dos are de-duplicated and may be grouped by this week, this month, over one month, overdue, or no date.\n\nTo-dos typically support viewing, completing, restoring, or deleting. Due date reminders and other features depend on the current app version.',
              zh: '灵光记可从录音总结中自动提取待办，并同步到待办列表。待办会尽量去重，并可按本周、本月、超过一个月、已过期、无日期等分组。\n\n待办通常支持查看、完成、恢复或删除。到期提醒等能力以 App 当前版本为准。',
              'zh-TW': '靈光記可從錄音總結中自動提取待辦，並同步到待辦列表。待辦會盡量去重，並可按本週、本月、超過一個月、已過期、無日期等分組。\n\n待辦通常支援查看、完成、恢復或刪除。到期提醒等能力以 App 當前版本為準。',
              ja: 'Lynseは録音要約からTODOを自動抽出し、TODOリストに同期できます。TODOは重複排除され、今週、今月、1ヶ月超過、期限切れ、日付なしなどでグループ分けされます。\n\nTODOは通常、表示、完了、復元、削除をサポートします。期限リマインダーなどの機能は現在のアプリバージョンによります。',
            },
          },
        ],
      },
    ],
  };

