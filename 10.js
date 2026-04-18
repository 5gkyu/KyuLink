const links = [
  {
    "title": "ChatGPT",
    "url": "https://chatgpt.com/",
    "desc": "【AIチャット（汎用）】OpenAI製の汎用AIチャット。GPT-4oを無料利用でき、画像・音声・ファイル入力にも対応。GPTsやカスタム指示による拡張も充実。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Claude",
    "url": "https://claude.ai/",
    "desc": "【AIチャット（汎用）】Anthropic製のAIアシスタント。長文処理・コード生成・文書分析に優れ、安全性を重視した設計。Claude 3.5/3.7系は高い推論能力を持つ。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Gemini",
    "url": "https://gemini.google.com/",
    "desc": "【AIチャット（汎用）】Google製の汎用AIチャット。Google検索・ドキュメント・Gmailとの連携が強み。Gemini 1.5/2.0 Proは長大なコンテキスト処理に対応。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Microsoft Copilot",
    "url": "https://copilot.microsoft.com/",
    "desc": "【AIチャット（汎用）】MicrosoftのAIアシスタント。GPT-4oベースで無料利用可能。Bing検索と統合されリアルタイム情報の取得が得意。Windows・Edge・Officeにも組み込まれている。",
    "tags": ["AIチャット（汎用）", "検索エンジン"]
  },
  {
    "title": "Grok",
    "url": "https://grok.com/",
    "desc": "【AIチャット（汎用）】xAI製のAIチャット。X（旧Twitter）のリアルタイムデータにアクセスでき、時事情報や最新ニュースの参照が得意。ユーモアを交えた応答スタイルも特徴。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Perplexity AI",
    "url": "https://www.perplexity.ai/",
    "desc": "【AIチャット（汎用）】Web検索を内包したAI回答エンジン。情報源のURLを引用しながら回答するため、根拠の確認がしやすい。調査・リサーチ用途に特に有用。",
    "tags": ["AIチャット（汎用）", "検索エンジン"]
  },
  {
    "title": "Meta AI",
    "url": "https://www.meta.ai/",
    "desc": "【AIチャット（汎用）】MetaのLlamaモデルベースのAIチャット。無料で画像生成も可能。WhatsApp・Instagram・Facebook Messangerからも利用できる。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Mistral Le Chat",
    "url": "https://chat.mistral.ai/",
    "desc": "【AIチャット（汎用）】フランスMistral AI製のチャットインターフェース。高速応答が特徴でコーディング・翻訳・要約に強い。オープンウェイトモデルの開発でも知られる。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "DeepSeek Chat",
    "url": "https://chat.deepseek.com/",
    "desc": "【AIチャット（汎用）】中国DeepSeek製のAIチャット。同クラスの他モデルと比べてコスト効率が非常に高く、数学・コーディング・推論に優秀。R1（推論モード）も無料で利用可能。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Qwen Chat",
    "url": "https://chat.qwen.ai/",
    "desc": "【AIチャット（汎用）】AlibabaのTongyi Qianwen（通義千问）AIチャット。多言語対応で日本語も自然。長文コンテキスト・コード生成・画像入力に対応。無料で利用可能。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Kimi",
    "url": "https://kimi.moonshot.cn/",
    "desc": "【AIチャット（汎用）】中国Moonshot AI製のAIチャット。200万トークンの超長文コンテキストに対応し、PDF・文書の読み込みが得意。日本語でも利用可能。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "HuggingChat",
    "url": "https://huggingface.co/chat/",
    "desc": "【AIチャット（汎用）】Hugging Face運営のオープンソースAIチャット。Llama・Mistral・Command R等を無料で切り替えて使える。ログイン不要で手軽に試せる。",
    "tags": ["AIチャット（汎用）", "AIモデル比較・ハブ"]
  },
  {
    "title": "Poe",
    "url": "https://poe.com/",
    "desc": "【AIチャット（汎用）】Quora運営のAIチャットハブ。ChatGPT・Claude・Gemini・Llama等を1つのUIで横断して使える。カスタムボット作成機能も提供。",
    "tags": ["AIチャット（汎用）", "AIモデル比較・ハブ"]
  },
  {
    "title": "You.com",
    "url": "https://you.com/",
    "desc": "【AIチャット（汎用）】Web検索統合型AIアシスタント。チャット・コード生成・画像生成・研究モードを切り替えて使える。検索結果を引用しながら回答する。",
    "tags": ["AIチャット（汎用）", "検索エンジン"]
  },
  {
    "title": "Pi AI",
    "url": "https://pi.ai/",
    "desc": "【AIチャット（汎用）】Inflection AI製の対話型AIアシスタント。共感的で自然な会話スタイルが特徴。メンタルサポートや日常的な雑談・相談に向いている。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Google AI Studio",
    "url": "https://aistudio.google.com/",
    "desc": "【AIチャット（汎用）】GoogleのGeminiモデルをブラウザで直接試せるAI開発ツール。無料でGemini 1.5/2.0 Proを使用でき、システムプロンプト設定・APIキー取得も可能。",
    "tags": ["AIチャット（汎用）", "AIモデル比較・ハブ"]
  },
  {
    "title": "Groq",
    "url": "https://chat.groq.com/",
    "desc": "【AIチャット（汎用）】専用LPUチップによる超高速推論が特徴のAIチャット。Llama・Gemma・Mistral等を無料で利用でき、応答速度は業界最速クラス。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Cohere Coral",
    "url": "https://coral.cohere.com/",
    "desc": "【AIチャット（汎用）】CohereのCommand Rモデルを使ったAIチャット。企業向けRAG・文書検索用途に強く、業務向けユースケースのプロトタイピングに向いている。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Phind",
    "url": "https://www.phind.com/",
    "desc": "【AIチャット（汎用）】開発者向けに特化したAI検索エンジン。コーディング質問に対してWeb検索＋AIコード生成で回答。GitHub等の技術情報ソースを優先して参照する。",
    "tags": ["AIチャット（汎用）", "検索エンジン"]
  },
  {
    "title": "OpenRouter",
    "url": "https://openrouter.ai/chat",
    "desc": "【AIチャット（汎用）】100以上のAIモデルを統一APIで利用できるルーティングサービス。チャットUIからGPT・Claude・Llama等を切り替えて比較できる。APIコスト比較にも便利。",
    "tags": ["AIチャット（汎用）", "AIモデル比較・ハブ"]
  },
  {
    "title": "Venice AI",
    "url": "https://venice.ai/",
    "desc": "【AIチャット（汎用）】会話履歴をサーバーに保存しないプライバシー重視のAIチャット。Llama・Mistral等のオープンモデルを使用。検閲なしでの利用を謳っている。",
    "tags": ["AIチャット（汎用）"]
  },
  {
    "title": "Amazon Q",
    "url": "https://aws.amazon.com/q/",
    "desc": "【AIチャット（汎用）】AmazonのAIアシスタント。AWSサービスとの統合に強く、クラウドインフラ構築・コード生成・ビジネス向けQ&Aに特化。AWSコンソールから直接利用可能。",
    "tags": ["AIチャット（汎用）"]
  }
];
export default links;
