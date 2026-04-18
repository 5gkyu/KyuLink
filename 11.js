const links = [
  {
    "title": "Rinna",
    "url": "https://rinna.jp/",
    "desc": "【AIチャット・国産】Microsoftと共同開発された日本語特化の会話AIプラットフォーム。テキスト・音声・画像に対応した多様なAIキャラクターを提供する国産サービス。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "ELYZA",
    "url": "https://elyza.ai/",
    "desc": "【AIチャット・国産】東京大学発スタートアップによる日本語特化LLMの研究・開発・商用展開。ELYZA-japanese-Llama-2をはじめとする高精度モデルを提供。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "Cotomo",
    "url": "https://cotomo.ai/",
    "desc": "【AIチャット・国産】Spiral AIが開発した音声会話AIアプリ（iOS/Android）。自然な日本語での雑談・相談に特化したスマートフォン向けサービス。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "ChatSense",
    "url": "https://chatsense.jp/",
    "desc": "【AIチャット・国産】日本語UIに最適化された国産AIチャットサービス。GPT-4oやClaudeなど複数モデルを選択でき、法人利用向けのセキュリティ対応も充実。",
    "tags": ["AIチャット（国産）", "AIモデル比較・ハブ"]
  },
  {
    "title": "LINE AI アシスタント",
    "url": "https://ai.line.me/",
    "desc": "【AIチャット・国産】LINEが提供する生成AIサービス。LINEアプリ内からチャット・画像生成・文章作成を利用でき、月額制で無制限利用が可能。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "miibo",
    "url": "https://miibo.jp/",
    "desc": "【AIチャット・国産】GPTなどを活用した国産AIチャットボット作成プラットフォーム。ノーコードでキャラクターAIや業務チャットボットを構築・公開できる。",
    "tags": ["AIチャット（国産）", "AIエージェント・自動化"]
  },
  {
    "title": "AI Gijiroku",
    "url": "https://aigijiroku.com/",
    "desc": "【AIチャット・国産】AIによる自動議事録生成サービス。会議音声をリアルタイム録音・テキスト化し、要約・アクションアイテム抽出まで自動で行う日本製ツール。",
    "tags": ["AIチャット（国産）", "ビジネスツール"]
  },
  {
    "title": "KARAKURI",
    "url": "https://platform.karakuri.ai/",
    "desc": "【AIチャット・国産】カスタマーサポート向けアーキテクチャに特化した国産AIプラットフォーム。FAQの自動応答・オペレーターへのエスカレーション連携を強みとする。",
    "tags": ["AIチャット（国産）", "AIエージェント・自動化"]
  },
  {
    "title": "AI Shift",
    "url": "https://www.ai-shift.co.jp/",
    "desc": "【AIチャット・国産】サイバーエージェントグループによるAI対話自動化サービス。電話・チャット対応を生成AIでハイブリッド自動化する企業向けプロダクトを提供。",
    "tags": ["AIチャット（国産）", "AIエージェント・自動化"]
  },
  {
    "title": "tsuzumi（NTT）",
    "url": "https://www.rd.ntt/ai/tsuzumi.html",
    "desc": "【AIチャット・国産】NTTが開発した軽量日本語LLM「tsuzumi」。高い日本語理解能力と低コスト運用を両立し、企業向けカスタマイズ利用に対応。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "Fujitsu Kozuchi",
    "url": "https://kozuchi.ai/",
    "desc": "【AIチャット・国産】富士通が提供するAI開発・活用プラットフォーム。日本語特化モデルや業務向けAIアシスタントを中堅・大企業向けに展開。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "CyberAgent AI Lab",
    "url": "https://cyberagent.ai/",
    "desc": "【AIチャット・国産】サイバーエージェントが運営するAI研究・開発組織。国産LLM「CyberAgentLM」を公開し、日本語生成AIの研究を積極的に推進。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "Preferred Networks",
    "url": "https://preferred.jp/",
    "desc": "【AIチャット・国産】ディープラーニング分野で世界トップクラスの評価を受ける日本のAI企業。製造・医療・自動運転など産業分野への応用技術を中心に展開。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "SoftBank AI",
    "url": "https://www.softbank.jp/biz/ai/",
    "desc": "【AIチャット・国産】SoftBankが提供する法人向けAIプラットフォーム群。複数のLLMをセキュアに利用できるゲートウェイや生成AI活用支援サービスを展開。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "ABEJA",
    "url": "https://abeja.io/",
    "desc": "【AIチャット・国産】AIプラットフォームとDX支援を手掛ける国内スタートアップ。深層学習・生成AIを活用した業務自動化・データ分析ソリューションを提供。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "PKSHA Technology",
    "url": "https://pkshatech.com/",
    "desc": "【AIチャット・国産】東大発AI企業。自然言語処理に特化した「PKSHA AI」でカスタマーサポート自動化・社内FAQ検索・対話AIを企業向けに提供。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "Rakuten AI",
    "url": "https://aicompass.rakuten.co.jp/",
    "desc": "【AIチャット・国産】楽天グループが開発した国産LLM「Rakuten AI」。楽天市場・楽天トラベルなど自社サービスへのAI統合を推進し、APIも提供。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "NEC AI",
    "url": "https://www.nec.com/ja/solutions/ai/",
    "desc": "【AIチャット・国産】NECが提供する企業向けAIソリューション群。生体認証・予測分析・自然言語処理など幅広い分野の国産AIサービスを展開。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "Hitachi Lumada AI",
    "url": "https://www.hitachi.co.jp/products/it/lumada/ai/",
    "desc": "【AIチャット・国産】日立が提供するLumadaプラットフォーム上のAIサービス群。製造・インフラ・社会システム分野への生成AI応用を国内最大規模で展開。",
    "tags": ["AIチャット（国産）"]
  },
  {
    "title": "COTOHA（NTTコム）",
    "url": "https://cotoha.com/",
    "desc": "【AIチャット・国産】NTTコミュニケーションズが提供する日本語自然言語処理プラットフォーム。感情分析・要約・Q&A自動応答など多彩なNLP APIを企業向けに提供。",
    "tags": ["AIチャット（国産）"]
  }
];
export default links;
