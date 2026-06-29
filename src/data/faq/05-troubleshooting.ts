import { FAQCategory } from './types';

export const troubleshootingCategory: FAQCategory = {
    id: 'troubleshooting',
    title: {
      en: 'Troubleshooting',
      zh: '故障排查',
      'zh-TW': '故障排查',
      ja: 'トラブルシューティング',
    },
    description: {
      en: 'Common issues and solutions',
      zh: '常见问题和解决方案',
      'zh-TW': '常見問題和解決方案',
      ja: '一般的な問題と解決策',
    },
    icon: 'Wrench',
    sections: [
      {
        id: 'device-issues',
        title: {
          en: 'Device Issues',
          zh: '设备问题',
          'zh-TW': '設備問題',
          ja: 'デバイスの問題',
        },
        icon: 'AlertCircle',
        description: {
          en: 'Hardware troubleshooting',
          zh: '硬件故障排查',
          'zh-TW': '硬體故障排查',
          ja: 'ハードウェアのトラブルシューティング',
        },
        items: [
          {
            id: 'device-wont-power-on',
            question: {
              en: 'My device won\'t power on. What should I do?',
              zh: '设备无法开机怎么办？',
              'zh-TW': '設備無法開機怎麼辦？',
              ja: 'デバイスの電源が入りません。どうすればいいですか？',
            },
            answer: {
              en: '1. Charge the device for a while first.\n2. Check if the charging cable and power source are working properly.\n3. Follow the device manual to try powering on or resetting.\n4. If still unable to power on, prepare the device SN code, purchase order, and a video of the issue, then contact official support.',
              zh: '1. 先为设备充电一段时间。\n2. 检查充电线和电源是否正常。\n3. 按设备说明书尝试开机或重置。\n4. 仍无法开机时，请准备设备 SN 码、购买订单和问题视频，联系官方客服。',
              'zh-TW': '1. 先為設備充電一段時間。\n2. 檢查充電線和電源是否正常。\n3. 按設備說明書嘗試開機或重置。\n4. 仍無法開機時，請準備設備 SN 碼、購買訂單和問題視頻，聯繫官方客服。',
              ja: '1. まずデバイスをしばらく充電してください。\n2. 充電ケーブルと電源が正常に動作しているか確認してください。\n3. デバイスの取扱説明書に従って、電源を入れるかリセットを試みてください。\n4. それでも電源が入らない場合は、デバイスのSNコード、購入注文、問題の動画を用意して、公式サポートにお問い合わせください。',
            },
            promoted: true,
          },
          {
            id: 'device-battery-drains',
            question: {
              en: 'My device battery drains quickly. What should I do?',
              zh: '设备耗电快怎么办？',
              'zh-TW': '設備耗電快怎麼辦？',
              ja: 'デバイスのバッテリーが早く減ります。どうすればいいですか？',
            },
            answer: {
              en: 'Check if the device has been in connection, recording, transfer, or standby mode for an extended period. Also check auto-sleep settings and firmware version in device settings. If abnormal battery drain persists, record the usage duration and scenario after a full charge, then contact official support.',
              zh: '请检查设备是否长时间处于连接、录音、传输或待机状态。也可进入设备设置查看自动休眠和固件版本。若耗电异常持续出现，请记录充满电后的使用时长和场景，再联系官方客服。',
              'zh-TW': '請檢查設備是否長時間處於連接、錄音、傳輸或待機狀態。也可進入設備設置查看自動休眠和固件版本。若耗電異常持續出現，請記錄充滿電後的使用時長和場景，再聯繫官方客服。',
              ja: 'デバイスが長時間接続、録音、転送、またはスタンバイ状態になっていないか確認してください。デバイス設定で自動スリープとファームウェアバージョンも確認してください。異常なバッテリー消費が続く場合は、フル充電後の使用時間とシナリオを記録して、公式サポートにお問い合わせください。',
            },
          },
          {
            id: 'device-wont-connect',
            question: {
              en: 'My device won\'t connect. What should I do?',
              zh: '设备连接不上怎么办？',
              'zh-TW': '設備連接不上怎麼辦？',
              ja: 'デバイスが接続できません。どうすればいいですか？',
            },
            answer: {
              en: '1. Confirm phone Bluetooth is turned on.\n2. Confirm the SparkCard has sufficient battery.\n3. Bring the device close to the phone.\n4. Close and reopen the app.\n5. Try searching for the device again.\n6. If still unable to connect, reset the device as prompted or contact support.',
              zh: '1. 确认手机蓝牙已开启。\n2. 确认灵光闪记卡电量充足。\n3. 将设备靠近手机。\n4. 关闭并重新打开 App。\n5. 尝试重新搜索设备。\n6. 仍无法连接时，按页面提示重置设备或联系客服。',
              'zh-TW': '1. 確認手機藍牙已開啟。\n2. 確認靈光閃記卡電量充足。\n3. 將設備靠近手機。\n4. 關閉並重新打開 App。\n5. 嘗試重新搜索設備。\n6. 仍無法連接時，按頁面提示重置設備或聯繫客服。',
              ja: '1. スマホのBluetoothがオンであることを確認します。\n2. SparkCardのバッテリーが十分であることを確認します。\n3. デバイスをスマホに近づけます。\n4. アプリを閉じて再度開きます。\n5. デバイスを再度検索してみます。\n6. それでも接続できない場合は、指示に従ってデバイスをリセットするか、サポートにお問い合わせください。',
            },
          },
          {
            id: 'huawei-screen-off',
            question: {
              en: 'My Huawei phone screen turns off when the device is attached. Why?',
              zh: '华为手机吸附设备后息屏怎么办？',
              'zh-TW': '華為手機吸附設備後息屏怎麼辦？',
              ja: 'Huaweiスマホにデバイスを付けると画面が消えます。なぜですか？',
            },
            answer: {
              en: 'Some Huawei phones may mistakenly trigger the system\'s "smart cover / flip cover mode" when the SparkCard or magnetic accessory is attached to the back, causing the phone to auto-lock or enter a cover-closed state.\n\nTry adjusting the device or magnetic accessory position, check cover mode settings in phone system settings, or avoid placing the device near trigger-prone areas.',
              zh: '部分华为手机在背面吸附灵光闪记卡或磁吸配件后，可能误触发系统的"皮套操作 / 皮套模式"，表现为手机自动息屏、锁屏。\n\n可尝试调整设备或磁吸配件的位置，在手机系统设置中检查皮套模式、智能保护套等相关设置，或暂时避免将设备长时间贴近容易触发的位置。',
              'zh-TW': '部分華為手機在背面吸附靈光閃記卡或磁吸配件後，可能誤觸發系統的"皮套操作 / 皮套模式"，表現為手機自動息屏、鎖屏。\n\n可嘗試調整設備或磁吸配件的位置，在手機系統設置中檢查皮套模式、智能保護套等相關設置，或暫時避免將設備長時間貼近容易觸發的位置。',
              ja: '一部のHuaweiスマホでは、SparkCardやマグネットアクセサリーを背面に付けると、システムの「スマートカバー/フリップカバーモード」が誤ってトリガーされ、スマホが自動ロックやカバー閉じた状態になることがあります。\n\nデバイスやマグネットアクセサリーの位置を調整し、スマホのシステム設定でカバーモードの設定を確認するか、トリガーされやすい場所にデバイスを長時間置かないようにしてください。',
            },
          },
          {
            id: 'device-low-volume',
            question: {
              en: 'My device volume is low or recording quality is poor. What should I do?',
              zh: '设备音量低或录音音质差怎么办？',
              'zh-TW': '設備音量低或錄音音質差怎麼辦？',
              ja: 'デバイスの音量が低い、または録音品質が悪い場合はどうすればいいですか？',
            },
            answer: {
              en: 'Make sure the device is not covered during recording, place it close to the main speaker, and minimize background noise. Transcription accuracy and recording clarity are affected by the environment in multi-person meetings or long-distance recordings.',
              zh: '请确认录音时设备没有被遮挡，设备靠近主要说话人，并尽量减少背景噪声。多人会议或远距离录音时，转写准确度和录音清晰度会受到环境影响。',
              'zh-TW': '請確認錄音時設備沒有被遮擋，設備靠近主要說話人，並盡量減少背景噪聲。多人會議或遠距離錄音時，轉寫準確度和錄音清晰度會受到環境影響。',
              ja: '録音時にデバイスが覆われていないことを確認し、メインの話し手に近づけ、背景ノイズを最小限にしてください。複数人の会議や遠距離録音では、文字起こしの精度と録音の明瞭さが環境の影響を受けます。',
            },
          },
        ],
      },
      {
        id: 'app-issues',
        title: {
          en: 'App Issues',
          zh: 'App 问题',
          'zh-TW': 'App 問題',
          ja: 'アプリの問題',
        },
        icon: 'Smartphone',
        description: {
          en: 'App troubleshooting',
          zh: 'App 故障排查',
          'zh-TW': 'App 故障排查',
          ja: 'アプリのトラブルシューティング',
        },
        items: [
          {
            id: 'upload-import-failed',
            question: {
              en: 'Upload or import failed. What should I do?',
              zh: '上传或导入失败怎么办？',
              'zh-TW': '上傳或導入失敗怎麼辦？',
              ja: 'アップロードまたはインポートに失敗しました。どうすればいいですか？',
            },
            answer: {
              en: 'Please check:\n• Is the phone network stable?\n• Is the audio file corrupted?\n• Is the file format supported?\n• Does the single audio exceed 300 minutes?\n• Does the file title or content trigger sensitive content rules?',
              zh: '请检查：\n• 手机网络是否稳定。\n• 音频文件是否损坏。\n• 文件格式是否受支持。\n• 单次音频是否超过 300 分钟。\n• 文件标题或内容是否触发敏感内容规则。',
              'zh-TW': '請檢查：\n• 手機網絡是否穩定。\n• 音頻文件是否損壞。\n• 文件格式是否受支援。\n• 單次音頻是否超過 300 分鐘。\n• 文件標題或內容是否觸發敏感內容規則。',
              ja: '以下を確認してください：\n• スマホのネットワークは安定していますか？\n• オーディオファイルは破損していませんか？\n• ファイル形式は対応していますか？\n• 1つのオーディオが300分を超えていませんか？\n• ファイルタイトルやコンテンツが機密コンテンツルールに抵触していませんか？',
            },
          },
          {
            id: 'sync-failed',
            question: {
              en: 'Sync or note saving failed. What should I do?',
              zh: '同步失败或笔记保存失败怎么办？',
              'zh-TW': '同步失敗或筆記保存失敗怎麼辦？',
              ja: '同期またはノートの保存に失敗しました。どうすればいいですか？',
            },
            answer: {
              en: 'First check the network status, then re-enter the file details page to see if it recovers. Under poor network or sync failure, the app should retain local changes and allow retry or keep a local copy. If the problem persists, save a screenshot and contact support.',
              zh: '请先检查网络状态，再重新进入文件详情页查看是否恢复。弱网或同步失败时，App 应尽量保留本机修改，并允许重试或保留本机副本。若问题持续，请保存截图并联系客服。',
              'zh-TW': '請先檢查網絡狀態，再重新進入文件詳情頁查看是否恢復。弱網或同步失敗時，App 應盡量保留本機修改，並允許重試或保留本機副本。若問題持續，請保存截圖並聯繫客服。',
              ja: 'まずネットワークの状態を確認し、ファイル詳細ページに再度入って回復するかどうか確認してください。ネットワークが不安定または同期失敗時、アプリはローカルの変更を保持し、再試行またはローカルコピーの保持を許可するはずです。問題が続く場合は、スクリーンショットを保存してサポートにお問い合わせください。',
            },
          },
          {
            id: 'transcription-runs-out',
            question: {
              en: 'I\'ve used up my transcription credits. What can I do?',
              zh: '转写额度用完怎么办？',
              'zh-TW': '轉寫額度用完怎麼辦？',
              ja: '文字起こしのクレジットを使い切りました。どうすればいいですか？',
            },
            answer: {
              en: '• Free User: Bind a SparkCard to become a Standard Member and get monthly credits.\n• Standard or Premium Member: Purchase credit packs or upgrade to a higher membership tier.\n• Elite Member: Unlimited transcription, so this usually doesn\'t apply.',
              zh: '• 普通用户：可按页面提示绑定灵光闪记卡，成为标准会员后获得对应月度积分。\n• 标准会员或高级会员：可购买充电包，或升级更高会员等级。\n• 精英会员：无限转写，通常不存在额度用尽问题。',
              'zh-TW': '• 普通用戶：可按頁面提示綁定靈光閃記卡，成為標準會員後獲得對應月度積分。\n• 標準會員或高級會員：可購買充電包，或升級更高會員等級。\n• 精英會員：無限轉寫，通常不存在額度用盡問題。',
              ja: '• 無料ユーザー：SparkCardをバインドしてスタンダードメンバーになり、月次クレジットを取得します。\n• スタンダードまたはプレミアムメンバー：クレジットパックを購入するか、上位ティアにアップグレードします。\n• エリートメンバー：無制限の文字起こしなので、通常この問題は発生しません。',
            },
          },
          {
            id: 'contact-prepare',
            question: {
              en: 'What should I prepare before contacting support?',
              zh: '联系客服前需要准备什么？',
              'zh-TW': '聯繫客服前需要準備什麼？',
              ja: 'サポートに連絡する前に何を準備すべきですか？',
            },
            answer: {
              en: 'If the problem is not resolved, you can check FAQs, submit feedback, or contact support in the app. Please provide:\n\n• Current login account\n• Phone system and app version\n• Time when the problem occurred\n• Order number or device SN code\n• Screenshots, screen recordings, or error messages\n• Steps you have already tried\n\nFor account appeals, binding issues, order anomalies, or redemption code problems, contact official support via the in-app channel or official email. Do not share verification codes, payment credentials, or account privacy information with unofficial channels.',
              zh: '问题仍未解决时，可在 App 内查看常见问题、提交反馈或联系客服。请提供：\n\n• 当前登录账号\n• 手机系统和 App 版本\n• 问题发生时间\n• 订单号或设备 SN 码\n• 问题截图、录屏或错误提示\n• 已经执行过的处理方式\n\n账号申诉、无法换绑、订单权益异常、兑换码异常等问题，可按页面提示联系官方客服邮箱或在线客服。请不要向非官方渠道提供验证码、支付凭据或账号隐私信息。',
              'zh-TW': '問題仍未解決時，可在 App 內查看常見問題、提交反饋或聯繫客服。請提供：\n\n• 當前登錄賬號\n• 手機系統和 App 版本\n• 問題發生時間\n• 訂單號或設備 SN 碼\n• 問題截圖、錄屏或錯誤提示\n• 已經執行過的處理方式\n\n賬號申訴、無法換綁、訂單權益異常、兌換碼異常等問題，可按頁面提示聯繫官方客服郵箱或在線客服。請不要向非官方渠道提供驗證碼、支付憑據或賬號隱私資訊。',
              ja: '問題が解決しない場合は、アプリ内のFAQを確認するか、フィードバックを送信するか、サポートにお問い合わせください。以下の情報を提供してください：\n\n• 現在のログインアカウント\n• スマホシステムとアプリバージョン\n• 問題が発生した時間\n• 注文番号またはデバイスSNコード\n• 問題のスクリーンショット、画面録画、エラーメッセージ\n• すでに実行した対応手順\n\nアカウント異議申し立て、バインド変更不可、注文異常、交換コード異常などは、アプリ内チャネルまたは公式メールで公式サポートにお問い合わせください。非公式チャネルに認証コード、支払い証明、アカウント情報を提供しないでください。',
            },
          },
        ],
      },
    ],
  };

