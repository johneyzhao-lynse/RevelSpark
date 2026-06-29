import { FAQCategory } from './types';

export const deviceSupportCategory: FAQCategory = {
    id: 'device-support',
    title: {
      en: 'Device Support',
      zh: '设备支持',
      'zh-TW': '設備支援',
      ja: 'デバイスサポート',
    },
    description: {
      en: 'Learn about Lynse SparkCard setup and usage',
      zh: '了解灵光闪记卡的设置和使用',
      'zh-TW': '瞭解靈光閃記卡的設置和使用',
      ja: 'Lynse SparkCardのセットアップと使用方法',
    },
    icon: 'CreditCard',
    sections: [
      {
        id: 'device-basics',
        title: {
          en: 'Device Basics',
          zh: '设备基础',
          'zh-TW': '設備基礎',
          ja: 'デバイス基本',
        },
        icon: 'Info',
        description: {
          en: 'Essential device information',
          zh: '设备基本信息',
          'zh-TW': '設備基本資訊',
          ja: 'デバイスの基本情報',
        },
        items: [
          {
            id: 'what-is-sparkcard',
            question: {
              en: 'What is the Lynse SparkCard?',
              zh: '灵光闪记卡是什么？',
              'zh-TW': '靈光閃記卡是什麼？',
              ja: 'Lynse SparkCardとは何ですか？',
            },
            answer: {
              en: 'The Lynse SparkCard is a companion AI recording card device for the Lynse app. It can record locally, and after connecting to the app, it syncs recordings and generates transcriptions, summaries, and notes.',
              zh: '灵光闪记卡（Lynse SparkCard）是灵光记配套的 AI 录音卡片设备。它可以本地录音，连接 App 后同步录音并生成转写、总结和笔记。',
              'zh-TW': '靈光閃記卡（Lynse SparkCard）是靈光記配套的 AI 錄音卡片設備。它可以本地錄音，連接 App 後同步錄音並生成轉寫、總結和筆記。',
              ja: 'Lynse SparkCardは、Lynseアプリと連携するAI録音カードデバイスです。ローカルで録音でき、アプリに接続後は録音を同期し、文字起こし、要約、ノートを生成します。',
            },
            promoted: true,
          },
          {
            id: 'package-contents',
            question: {
              en: 'What\'s in the box?',
              zh: '包装里通常有什么？',
              'zh-TW': '包裝裡通常有什麼？',
              ja: 'パッケージには何が入っていますか？',
            },
            answer: {
              en: 'The package may vary by version and promotion. Common contents include the Lynse SparkCard, magnetic leather case, magnetic ring, charging cable, and user manual/warranty card. Please refer to the product details page and actual packaging.',
              zh: '电商套装可能因版本和活动不同而变化。常见包装包含灵光闪记卡、磁吸皮套、磁吸环、充电线、说明书或保修卡。请以商品详情页和实际包装为准。',
              'zh-TW': '電商套裝可能因版本和活動不同而變化。常見包裝包含靈光閃記卡、磁吸皮套、磁吸環、充電線、說明書或保修卡。請以商品詳情頁和實際包裝為準。',
              ja: 'パッケージはバージョンやプロモーションにより異なる場合があります。一般的な内容物は、Lynse SparkCard、マグネットレザーケース、マグネットリング、充電ケーブル、取扱説明書/保証書です。',
            },
          },
          {
            id: 'how-to-connect',
            question: {
              en: 'How do I connect the SparkCard?',
              zh: '如何连接灵光闪记卡？',
              'zh-TW': '如何連接靈光閃記卡？',
              ja: 'SparkCardをどう接続しますか？',
            },
            answer: {
              en: '1. Open the Lynse app and go to the device page.\n2. Tap "Add Device".\n3. Turn on Bluetooth as prompted and bring the device close to your phone.\n4. Select the device to connect.\n5. Complete the binding as prompted.\n6. After connecting, view the device status on the device page.\n\nBinding the SparkCard automatically grants Standard Membership with corresponding monthly credits and benefits.',
              zh: '1. 打开灵光记 App，进入设备页面。\n2. 点击添加设备。\n3. 按页面提示开启蓝牙，并将设备靠近手机。\n4. 选择要连接的设备。\n5. 按提示完成绑定。\n6. 连接成功后，在设备页面查看设备状态。\n\n绑定灵光闪记卡后，账号会成为标准会员，获得对应月度积分和权益。',
              'zh-TW': '1. 打開靈光記 App，進入設備頁面。\n2. 點擊添加設備。\n3. 按頁面提示開啟藍牙，並將設備靠近手機。\n4. 選擇要連接的設備。\n5. 按提示完成綁定。\n6. 連接成功後，在設備頁面查看設備狀態。\n\n綁定靈光閃記卡後，賬號會成為標準會員，獲得對應月度積分和權益。',
              ja: '1. Lynseアプリを開き、デバイスページに移動します。\n2. 「デバイスを追加」をタップします。\n3. 指示に従ってBluetoothをオンにし、デバイスをスマホに近づけます。\n4. 接続するデバイスを選択します。\n5. 指示に従ってバインドを完了します。\n6. 接続後、デバイスページでデバイスステータスを確認します。\n\nSparkCardをバインドすると、自動的にスタンダードメンバーシップが付与されます。',
            },
          },
          {
            id: 'device-storage-battery',
            question: {
              en: 'How do I check device storage, battery, and SN?',
              zh: '如何查看设备存储、电量和 SN 码？',
              'zh-TW': '如何查看設備儲存、電量和 SN 碼？',
              ja: 'デバイスのストレージ、バッテリー、SNを確認するには？',
            },
            answer: {
              en: 'Go to the device details page to view the SN code, firmware version, battery level, storage space, remaining recording time, and auto-sleep settings.',
              zh: '进入设备详情页，可查看 SN 码、固件版本、电量、存储空间、剩余可录制时长和自动休眠设置等信息。',
              'zh-TW': '進入設備詳情頁，可查看 SN 碼、固件版本、電量、儲存空間、剩餘可錄製時長和自動休眠設置等資訊。',
              ja: 'デバイスの詳細ページで、SNコード、ファームウェアバージョン、バッテリーレベル、ストレージ容量、残り録音時間、自動スリープ設定などを確認できます。',
            },
          },
          {
            id: 'firmware-update',
            question: {
              en: 'How do I update the device firmware?',
              zh: '如何升级设备固件？',
              'zh-TW': '如何升級設備固件？',
              ja: 'デバイスのファームウェアを更新するには？',
            },
            answer: {
              en: 'When a firmware update is available, the app may push an upgrade notification. You can also manually check for updates on the device details page.\n\nBefore updating, ensure:\n• Device battery is above 30%\n• Device is not currently recording\n• Phone network is stable\n• Device is close to the phone\n\nDevices below 30% battery or currently recording cannot be upgraded. Do not close the app or operate the device during the update.',
              zh: '当设备有可用固件时，App 会展示升级提醒；也可在设备详情页手动检查更新。\n\n升级前请确认：\n• 设备电量充足（不低于 30%）\n• 设备没有正在录音\n• 手机网络稳定\n• 设备靠近手机\n\n低于 30% 电量或正在录音时，不可升级。升级过程中请不要关闭 App 或操作设备。',
              'zh-TW': '當設備有可用固件時，App 會展示升級提醒；也可在設備詳情頁手動檢查更新。\n\n升級前請確認：\n• 設備電量充足（不低於 30%）\n• 設備沒有正在錄音\n• 手機網絡穩定\n• 設備靠近手機\n\n低於 30% 電量或正在錄音時，不可升級。升級過程中請不要關閉 App 或操作設備。',
              ja: 'ファームウェア更新が利用可能な場合、アプリからアップグレード通知が表示されます。デバイスの詳細ページで手動で更新を確認することもできます。\n\n更新前に確認：\n• デバイスのバッテリーが30%以上であること\n• デバイスが録音中でないこと\n• スマホのネットワークが安定していること\n• デバイスがスマホの近くにあること\n\nバッテリー30%未満または録音中はアップグレードできません。更新中はアプリを閉じたり、デバイスを操作しないでください。',
            },
          },
          {
            id: 'file-sync-after-transfer',
            question: {
              en: 'Are recordings still on the device after syncing to the app?',
              zh: '文件传输到 App 后，设备端录音还在吗？',
              'zh-TW': '文件傳輸到 App 後，設備端錄音還在嗎？',
              ja: 'アプリに同期後、デバイス側の録音はまだ残っていますか？',
            },
            answer: {
              en: 'Recordings are first saved locally on the SparkCard, then synced to the app after connecting. When syncing, deleting, or cleaning device storage, please follow the page prompts: the file list, device file management page, and cloud sync status may affect deletion scope across the app local, device, and cloud.',
              zh: '设备录音会先保存在灵光闪记卡本地，连接手机后同步到 App。同步、删除和清理设备存储时，请以页面提示为准：文件列表、设备文件管理页、云同步状态不同，可能影响 App 本地、设备端和云端的删除范围。',
              'zh-TW': '設備錄音會先保存在靈光閃記卡本地，連接手機後同步到 App。同步、刪除和清理設備儲存時，請以頁面提示為準：文件列表、設備文件管理頁、雲同步狀態不同，可能影響 App 本地、設備端和雲端的刪除範圍。',
              ja: '録音はまずSparkCardのローカルに保存され、接続後にアプリに同期されます。同期、削除、デバイスストレージのクリーニング時は、ページのプロンプトに従ってください。ファイルリスト、デバイスファイル管理ページ、クラウド同期の状態により、アプリローカル、デバイス側、クラウドの削除範囲が変わる場合があります。',
            },
          },
          {
            id: 'device-power-charge',
            question: {
              en: 'How do I power on, power off, and charge the device?',
              zh: '如何开启、关闭和充电？',
              'zh-TW': '如何開啟、關閉和充電？',
              ja: 'デバイスの電源オン、オフ、充電方法は？',
            },
            answer: {
              en: 'Follow the device manual or app page prompts to operate the device buttons. Use the charging cable provided with the package or a compatible charger. You can check the battery status on the device details page in the app.\n\nIf the device fails to power on after a long time, charge it for a while first, then try reconnecting to the app.',
              zh: '请按设备说明书或 App 页面提示操作设备按键。充电时使用随包装提供的充电线或符合规格的充电设备，充电过程中可在 App 设备详情页查看电量状态。\n\n如果设备长时间无法开机，请先充电一段时间，再尝试重新连接 App。',
              'zh-TW': '請按設備說明書或 App 頁面提示操作設備按鍵。充電時使用隨包裝提供的充電線或符合規格的充電設備，充電過程中可在 App 設備詳情頁查看電量狀態。\n\n如果設備長時間無法開機，請先充電一段時間，再嘗試重新連接 App。',
              ja: 'デバイスの取扱説明書またはアプリのページに従ってデバイスのボタンを操作してください。充電時はパッケージに付属の充電ケーブルまたは互換性のある充電器を使用してください。アプリのデバイス詳細ページでバッテリー状態を確認できます。\n\n長時間電源が入らない場合は、まずしばらく充電してから、アプリへの再接続を試みてください。',
            },
          },
          {
            id: 'device-not-visible',
            question: {
              en: 'Why can\'t I see nearby devices in "My Devices"?',
              zh: '"我的设备"里为什么看不到附近设备？',
              'zh-TW': '"我的設備"裡為什麼看不到附近設備？',
              ja: '「マイデバイス」に近くのデバイスが表示されないのはなぜですか？',
            },
            answer: {
              en: 'The "My Devices" page only shows devices that have been connected to the current phone, not nearby unknown devices. To bind a new device, use the "Add Device" entry.',
              zh: '"我的设备"页只展示已经连接过当前手机的设备，不展示周围陌生设备。若要绑定新设备，请使用添加设备入口。',
              'zh-TW': '"我的設備"頁只展示已經連接過當前手機的設備，不展示周圍陌生設備。若要綁定新設備，請使用添加設備入口。',
              ja: '「マイデバイス」ページは、現在のスマホに接続されたことのあるデバイスのみを表示し、周囲の未接続デバイスは表示しません。新しいデバイスをバインドするには、「デバイスを追加」入口を使用してください。',
            },
          },
          {
            id: 'connected-vs-unconnected',
            question: {
              en: 'What\'s the difference between connected and unconnected devices?',
              zh: '已连接和未连接有什么区别？',
              'zh-TW': '已連接和未連接有什麼區別？',
              ja: '接続済みと未接続の違いは何ですか？',
            },
            answer: {
              en: '• Connected: Tap to enter the device details page.\n• Unconnected: Can be removed from the list. Removing a device clears the binding between the current account and that device — other accounts can then rebind it.\n\nThe system will show a confirmation prompt before removing an unconnected device.',
              zh: '• 已连接：点击后可进入当前设备的设备详情页。\n• 未连接：可从列表删除；删除后会清除当前账号与该设备的绑定状态，其他账号可重新绑定该设备。\n\n删除未连接设备时，系统会进行二次确认。',
              'zh-TW': '• 已連接：點擊後可進入當前設備的設備詳情頁。\n• 未連接：可從列表刪除；刪除後會清除當前賬號與該設備的綁定狀態，其他賬號可重新綁定該設備。\n\n刪除未連接設備時，系統會進行二次確認。',
              ja: '• 接続済み：タップすると現在のデバイスの詳細ページに入ります。\n• 未接続：リストから削除可能。削除すると現在のアカウントとデバイスのバインドが解除され、他のアカウントで再バインドできます。\n\n未接続デバイスの削除時、システムは確認ダイアログを表示します。',
            },
          },
        ],
      },
    ],
  };

