const links = [
  {
    "title": "Midjourney",
    "url": "https://www.midjourney.com",
    "desc": "【画像生成AI】テキストから高品質なアート・イラストを生成できる人気サービス。Discordボットまたは専用WebUIから利用する。月額プランが必要。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "DALL-E 3（ChatGPT経由）",
    "url": "https://chatgpt.com",
    "desc": "【画像生成AI】OpenAIのDALL-E 3はChatGPT Plus/Proから利用可能。自然言語での指示に忠実で、テキスト描写の精度が高い。",
    "tags": ["画像生成AI", "AIチャット（汎用）"]
  },
  {
    "title": "Adobe Firefly",
    "url": "https://firefly.adobe.com",
    "desc": "【画像生成AI】Adobeが提供する商用利用に対応した画像生成AI。著作権的に安全な学習データを使用しており、Photoshopなどとも連携できる。",
    "tags": ["画像生成AI", "デザイン・グラフィック"]
  },
  {
    "title": "Ideogram",
    "url": "https://ideogram.ai",
    "desc": "【画像生成AI】テキスト描写の精度が特に高い画像生成AIサービス。ロゴやポスターなど文字入りデザインの生成が得意。無料枠あり。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Stable Diffusion Online",
    "url": "https://stablediffusionweb.com",
    "desc": "【画像生成AI】Stability AIのStable Diffusionをブラウザから無料で試せる公式デモサイト。登録不要で即利用可能。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Stability AI",
    "url": "https://stability.ai",
    "desc": "【画像生成AI】Stable Diffusionの開発元。Stable Image CoreやStable Diffusion 3などのAPIを提供する企業の公式サイト。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "DreamStudio（Stability AI）",
    "url": "https://dreamstudio.ai",
    "desc": "【画像生成AI】Stability AIが提供するStable Diffusion公式WebUI。クレジット制で細かいパラメータ調整が可能。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Canva AI画像生成",
    "url": "https://www.canva.com/ai-image-generator/",
    "desc": "【画像生成AI】デザインツールCanvaに内蔵された画像生成AI機能。生成した画像をそのままデザインに利用できる。無料プランでも一定数利用可能。",
    "tags": ["画像生成AI", "デザイン・グラフィック"]
  },
  {
    "title": "Leonardo.Ai",
    "url": "https://leonardo.ai",
    "desc": "【画像生成AI】ゲームアセットやキャラクターイラスト生成に強みを持つAIプラットフォーム。カスタムモデルの学習や多彩なスタイル制御が可能。無料枠あり。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Playground AI",
    "url": "https://playground.com",
    "desc": "【画像生成AI】高品質な画像をフォトリアル・イラスト問わず生成できるプラットフォーム。多様なモデルが利用可能で、無料枠も充実している。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "NightCafe Creator",
    "url": "https://creator.nightcafe.studio",
    "desc": "【画像生成AI】複数のAIエンジン（Stable Diffusion・DALL-Eなど）を選択して画像生成できるサービス。コミュニティ機能もあり、作品の共有が可能。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Artbreeder",
    "url": "https://www.artbreeder.com",
    "desc": "【画像生成AI】既存画像を「掛け合わせ」て新しい画像を生成するユニークなAIサービス。顔・風景・キャラクターなど多様なカテゴリに対応。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Craiyon（旧DALL-E Mini）",
    "url": "https://www.craiyon.com",
    "desc": "【画像生成AI】無料・登録不要で利用できる画像生成AIサービス。品質はプレミアム系に劣るが、手軽に試せる入門向けツール。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Bing Image Creator（Designer）",
    "url": "https://www.bing.com/images/create",
    "desc": "【画像生成AI】MicrosoftのBing/DesignerからDALL-E 3を無料で利用できるサービス。Microsoftアカウントがあればすぐに使える。",
    "tags": ["画像生成AI", "AIチャット（汎用）"]
  },
  {
    "title": "Microsoft Designer",
    "url": "https://designer.microsoft.com",
    "desc": "【画像生成AI】Microsoftの画像生成・デザインツール。DALL-E 3ベースの画像生成に加え、SNS投稿用デザインの自動作成機能も備える。",
    "tags": ["画像生成AI", "デザイン・グラフィック"]
  },
  {
    "title": "Gemini（Google）",
    "url": "https://gemini.google.com",
    "desc": "【画像生成AI】GoogleのAIサービスGeminiではImagen 3による画像生成が利用可能。チャット中に自然な日本語で画像生成を指示できる。",
    "tags": ["画像生成AI", "AIチャット（汎用）"]
  },
  {
    "title": "Imagine with Meta AI",
    "url": "https://imagine.meta.com",
    "desc": "【画像生成AI】MetaのAIによる無料画像生成ツール。高解像度の画像をテキストから生成可能。Metaアカウントで利用できる。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Flux（Black Forest Labs）",
    "url": "https://blackforestlabs.ai",
    "desc": "【画像生成AI】高品質・高速な画像生成モデル「FLUX」を開発するBlack Forest Labsの公式サイト。FLUX.1はComfyUIなどでも広く利用されている。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Fal.ai",
    "url": "https://fal.ai",
    "desc": "【画像生成AI】FLUX・Stable Diffusionなど多様なモデルを高速推論APIとして提供するプラットフォーム。Webギャラリーから試すことも可能。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Replicate",
    "url": "https://replicate.com",
    "desc": "【画像生成AI】Stable DiffusionやFLUXなど多数のオープンソースAIモデルをAPIやブラウザから実行できるプラットフォーム。従量課金制。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Hugging Face（Spaces）",
    "url": "https://huggingface.co/spaces",
    "desc": "【画像生成AI】コミュニティが公開する多数の画像生成AIデモをブラウザから無料で試せるスペース一覧。最新モデルをいち早く試したい場合に便利。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Civitai",
    "url": "https://civitai.com",
    "desc": "【画像生成AI】Stable Diffusion用のカスタムモデル・LoRAなどを共有するコミュニティサイト。モデルのダウンロードや画像生成のオンライン実行も可。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Tensor.Art",
    "url": "https://tensor.art",
    "desc": "【画像生成AI】多数のStable Diffusionモデルをクラウド上で無料実行できるサービス。モデルの共有・コミュニティ機能もあり、Civitaiと併用されることが多い。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Seaart.ai",
    "url": "https://www.seaart.ai",
    "desc": "【画像生成AI】Stable Diffusionベースの画像生成をブラウザから利用できる中国発のプラットフォーム。日本語UIに対応しており無料枠が多め。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "PicLumen",
    "url": "https://piclumen.com",
    "desc": "【画像生成AI】FLUX・Stable Diffusionなどを利用した画像生成サービス。商用利用可のモデルも選択でき、日英両対応のUIを備える。無料枠あり。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Kling AI",
    "url": "https://klingai.com",
    "desc": "【画像生成AI】快手（Kuaishou）が開発したKuaishou Kolorsモデルによる画像生成サービス。動画生成機能も備える中国発の総合AIツール。",
    "tags": ["画像生成AI", "動画生成AI"]
  },
  {
    "title": "Recraft",
    "url": "https://www.recraft.ai",
    "desc": "【画像生成AI】SVGベクター画像の生成にも対応した珍しい画像生成AIツール。アイコン・イラスト・フォトリアル画像をシンプルなUIで作成できる。",
    "tags": ["画像生成AI", "デザイン・グラフィック"]
  },
  {
    "title": "Krea AI",
    "url": "https://www.krea.ai",
    "desc": "【画像生成AI】リアルタイム生成機能を持つ画像AIツール。ラフスケッチをリアルタイムでAI画像に変換するライブ生成モードが特徴。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Stablecog",
    "url": "https://stablecog.com",
    "desc": "【画像生成AI】オープンソースで開発されたStable Diffusion系のWebサービス。複数モデル対応でシンプルなUIが特徴。無料枠あり。",
    "tags": ["画像生成AI"]
  },
  {
    "title": "Clipdrop（Stability AI）",
    "url": "https://clipdrop.co",
    "desc": "【画像生成AI】Stability AI傘下のツール群。背景除去・リライト・アップスケール・画像生成など多機能な画像編集AIがウェブから利用できる。",
    "tags": ["画像生成AI"]
  }
];
export default links;
