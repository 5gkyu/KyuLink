// 01 - 検索エンジン (69件)

const links = [

  // ── 汎用検索エンジン ────────────────────────────────────────────

  {
    "title": "Google",
    "url": "https://www.google.co.jp",
    "desc": "【汎用検索エンジン】世界シェア1位。国内でも圧倒的多数ユーザーを持ち、検索精度・速度ともに最高水準。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Yahoo! Japan",
    "url": "https://www.yahoo.co.jp",
    "desc": "【汎用検索エンジン】国内利用者数2位の総合ポータル。検索エンジンはGoogleを採用しており、ポータル機能も兼ね備える。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Microsoft Bing",
    "url": "https://www.bing.com",
    "desc": "【汎用検索エンジン】Microsoftが提供。AI機能(Copilot)と統合されており、画像・動画・ニュース検索にも対応。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "DuckDuckGo",
    "url": "https://duckduckgo.com",
    "desc": "【汎用検索エンジン】トラッキングなし・プライバシー重視の定番検索エンジン。バングス機能(!g等)で他エンジンへの即時転送が可能。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Brave Search",
    "url": "https://search.brave.com",
    "desc": "【汎用検索エンジン】独自インデックスを持つ唯一のプライバシー特化検索エンジン。GoogleやBingに依存しない完全独立した検索結果を提供。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Startpage",
    "url": "https://www.startpage.com",
    "desc": "【汎用検索エンジン】Google検索結果をプライベートに取得できるプロキシ型検索。IPアドレスをGoogleに送信しない設計で、Googleの精度をプライバシー保護下で利用できる。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Kagi",
    "url": "https://kagi.com",
    "desc": "【汎用検索エンジン】有料・完全広告なしの高品質検索エンジン。月$5〜。ドメインごとの重み付けカスタマイズが可能で、検索結果のノイズを排除できる。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Ecosia",
    "url": "https://www.ecosia.org",
    "desc": "【汎用検索エンジン】収益の一部で植樹活動を行う環境配慮型検索エンジン。バックエンドにBingを採用。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Qwant",
    "url": "https://www.qwant.com",
    "desc": "【汎用検索エンジン】フランス発のGDPR完全準拠プライバシー検索エンジン。EUのデータ保護規制に完全対応し、ユーザーデータを収集・販売しない。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Mojeek",
    "url": "https://www.mojeek.com",
    "desc": "【汎用検索エンジン】独自クロールを持つ英国製の完全独立系検索エンジン。Google/Bingに一切依存しない独自インデックスから結果を返す。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Yandex",
    "url": "https://yandex.com",
    "desc": "【汎用検索エンジン】ロシア最大の検索エンジン。画像・地図・翻訳も充実。旧ソ連圏・ロシア語コンテンツを探す場合に有用。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Naver",
    "url": "https://www.naver.com",
    "desc": "【汎用検索エンジン】韓国最大のポータル・検索サービス。Webtoon・知識iN等の独自コンテンツも豊富で、韓国語コンテンツ検索に強い。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Baidu",
    "url": "https://www.baidu.com",
    "desc": "【汎用検索エンジン】中国最大の検索エンジン。中国語コンテンツを探す場合に有用。中国国内向けの検閲フィルタが存在する点に注意。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Goo 検索",
    "url": "https://search.goo.ne.jp",
    "desc": "【汎用検索エンジン】NTTレゾナント運営の国産検索サービス。日本語コンテンツに強いポータル型検索。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Excite 検索",
    "url": "https://www.excite.co.jp/search",
    "desc": "【汎用検索エンジン】国産ポータルExciteの検索機能。シンプルな日本語検索インターフェースを提供。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "BIGLOBE 検索",
    "url": "https://search.biglobe.ne.jp",
    "desc": "【汎用検索エンジン】NEC系ポータルBIGLOBEの検索機能。シンプルな日本語検索UIを提供。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "SearXNG",
    "url": "https://searx.space",
    "desc": "【汎用検索エンジン】OSSのプライバシー重視メタ検索エンジン。このURLは公開インスタンスの一覧サイトで、自分でホストするか掲載インスタンスを選んで利用する形式。複数の検索エンジンの結果を束ねてトラッキングなしで返す。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "MetaGer",
    "url": "https://metager.org",
    "desc": "【汎用検索エンジン】ドイツの非営利団体SUMA-EVが運営するメタ検索エンジン。匿名プロキシ付きで複数エンジンの結果を統合して返す。",
    "tags": ["検索エンジン"]
  },

  // ── AI回答型 / AI統合検索 ──────────────────────────────────────

  {
    "title": "Perplexity AI",
    "url": "https://www.perplexity.ai",
    "desc": "【AI統合検索】AI回答と引用元付き検索を組み合わせた実用的なAI検索の筆頭格。無料プランあり、日本語対応。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "ChatGPT (SearchGPT)",
    "url": "https://chatgpt.com",
    "desc": "【AI統合検索】ChatGPT内蔵のWeb検索機能(SearchGPT)。GPT-4oと統合されリアルタイム情報に対応。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "Microsoft Copilot",
    "url": "https://copilot.microsoft.com",
    "desc": "【AI統合検索】Bing検索とGPT-4を統合したMicrosoftのAIアシスタント。日本語対応・無料で高度な回答が得られる。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "Google AI Overviews",
    "url": "https://www.google.co.jp",
    "desc": "【AI統合検索】Googleがgeminiを用いて検索結果の上部に表示するAI要約機能。独立したURLは存在せず、通常のGoogle検索ページ(https://www.google.co.jp)と同一URLで動作する。Google検索を使えば自動的に表示される。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "You.com",
    "url": "https://you.com",
    "desc": "【AI統合検索】AI検索とアプリ切替機能(ChatGPT/Claude等を選択可)を組み合わせたサービス。多様なAIモデルを検索と並行して利用できる。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "Phind",
    "url": "https://www.phind.com",
    "desc": "【AI統合検索】開発者向けのAI検索エンジン。コード・技術記事への特化度が高く、回答にコードブロックを含む形で提示する。",
    "tags": ["検索エンジン", "AIチャット（汎用）", "コード管理"]
  },
  {
    "title": "Genspark",
    "url": "https://www.genspark.ai",
    "desc": "【AI統合検索】検索結果をAIが再構成して「Sparkpages」として提示するAI検索サービス。情報をまとめたミニサイト形式で表示する独自フォーマットを持つ。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "Exa",
    "url": "https://exa.ai",
    "desc": "【AI統合検索】AI-firstの検索API（旧Metaphor）。主な用途はLLMアプリへの組み込みで、一般ユーザー向けのUI検索よりもAPIとして利用する開発者向けのサービス。",
    "tags": ["検索エンジン", "API・外部サービス"]
  },
  {
    "title": "Andi Search",
    "url": "https://andisearch.com",
    "desc": "【AI統合検索】会話型のAI検索エンジン。広告なし・プライバシー重視で、チャット形式で検索結果を提示する。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "Komo Search",
    "url": "https://komo.ai",
    "desc": "【AI統合検索】AI検索とコミュニティQ&Aを融合したサービス。検索結果にユーザー投稿のQ&Aを組み合わせて表示する。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "Felo",
    "url": "https://felo.ai",
    "desc": "【AI統合検索】日本語UIで使いやすいAI検索サービス。多言語対応で国内ユーザーに使いやすい設計。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },
  {
    "title": "iAsk.ai",
    "url": "https://iask.ai",
    "desc": "【AI統合検索】シンプルなAI回答型検索エンジン。無料で利用でき、質問に対して引用付きの回答を返す。",
    "tags": ["検索エンジン", "AIチャット（汎用）"]
  },

  // ── 逆画像検索 ──────────────────────────────────────────────────

  {
    "title": "Google Lens",
    "url": "https://lens.google.com",
    "desc": "【逆画像検索】Googleの画像認識AI搭載の逆画像検索。商品・植物識別・テキスト翻訳なども可能な多機能ツール。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Bing Visual Search",
    "url": "https://www.bing.com/visualsearch",
    "desc": "【逆画像検索】Microsoftの逆画像検索機能。類似画像・出典の検出に対応し、画像URLの指定やアップロードが可能。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "TinEye",
    "url": "https://tineye.com",
    "desc": "【逆画像検索】画像の完全一致・出所検索の老舗サービス。改変・トリミングされた画像の改変追跡にも対応。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "SauceNAO",
    "url": "https://saucenao.com",
    "desc": "【逆画像検索】アニメ・イラスト・同人作品に特化した逆画像検索。pixiv/Danbooru等のDBを横断し精度が高い合法ツール。著作権者確認・出典調査用途で広く使われる。",
    "tags": ["検索エンジン", "イラスト・アート投稿"]
  },
  {
    "title": "ASCII2D",
    "url": "https://ascii2d.net",
    "desc": "【逆画像検索】日本製のイラスト特化逆画像検索。色合いや構造から画像を特定するアルゴリズムを持ち、SauceNAOとの併用が推奨される合法ツール。",
    "tags": ["検索エンジン", "イラスト・アート投稿"]
  },
  {
    "title": "IQDB",
    "url": "https://iqdb.org",
    "desc": "【逆画像検索】pixiv・Danbooru等アニメ系DBを横断する合法的な逆画像検索。複数データベースを一度に横断して検索できる。",
    "tags": ["検索エンジン", "イラスト・アート投稿"]
  },
  {
    "title": "trace.moe",
    "url": "https://trace.moe",
    "desc": "【逆画像検索】アニメのスクリーンショットから何話の何秒かを特定できる逆引きツール。著作権コンテンツの出典確認など合法的用途向けのサービス。",
    "tags": ["検索エンジン", "アニメ情報データベース"]
  },
  {
    "title": "Yandex Images",
    "url": "https://yandex.com/images",
    "desc": "【逆画像検索】Yandexの逆画像検索機能。人物・顔画像の逆引き精度が特に高いと評判で、類似画像の探索に優れる。",
    "tags": ["検索エンジン"]
  },

  // ── 専門横断検索（バーティカルサーチ）────────────────────────────

  {
    "title": "Google Scholar",
    "url": "https://scholar.google.com",
    "desc": "【専門横断検索】学術論文・引用・被引用数を無料で検索できるGoogleの学術特化サービス。",
    "tags": ["検索エンジン", "論文・学術"]
  },
  {
    "title": "Google Books",
    "url": "https://books.google.com",
    "desc": "【専門横断検索】書籍の全文・試し読みを検索できるGoogleのサービス。絶版本のデジタルアーカイブも含む。",
    "tags": ["検索エンジン", "読書・電子書籍"]
  },
  {
    "title": "Google News",
    "url": "https://news.google.com",
    "desc": "【専門横断検索】ニュース特化の検索・アグリゲーションサービス。トピック別・地域フィルタで情報を整理して表示。",
    "tags": ["検索エンジン", "ニュースアグリゲーター"]
  },
  {
    "title": "Google Videos",
    "url": "https://www.google.com/videohp",
    "desc": "【専門横断検索】Googleの動画専門検索。YouTube以外の動画プラットフォームも横断して検索可能。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Google Shopping",
    "url": "https://shopping.google.co.jp",
    "desc": "【専門横断検索】Googleの商品比較・最安値検索サービス。複数ECサイトの商品価格を横断して比較できる。",
    "tags": ["検索エンジン", "国内EC総合"]
  },
  {
    "title": "Google Maps",
    "url": "https://www.google.co.jp/maps",
    "desc": "【専門横断検索】Googleの地図・場所検索サービス。店舗・施設・地名の場所検索や口コミ確認に広く使われる。",
    "tags": ["検索エンジン", "地図・ナビ"]
  },
  {
    "title": "Wolfram|Alpha",
    "url": "https://www.wolframalpha.com",
    "desc": "【専門横断検索】数式・統計・単位変換・知識計算エンジン。自然言語での質問に対して計算結果を構造化して返す独自サービス。",
    "tags": ["検索エンジン", "統計・データ"]
  },
  {
    "title": "Internet Archive (Wayback Machine)",
    "url": "https://web.archive.org",
    "desc": "【専門横断検索】過去のWebページのアーカイブを検索・閲覧できるWayback Machine。削除・改変されたページの確認や資料保存に必須のサービス。",
    "tags": ["検索エンジン", "百科事典・知識"]
  },
  {
    "title": "Semantic Scholar",
    "url": "https://www.semanticscholar.org",
    "desc": "【専門横断検索】AI補助の学術論文検索エンジン。引用グラフの可視化と論文要約機能を持つ無料サービス。",
    "tags": ["検索エンジン", "論文・学術"]
  },
  {
    "title": "OpenAlex",
    "url": "https://openalex.org",
    "desc": "【専門横断検索】オープンな学術メタデータを横断検索できる無料サービス。研究者・機関・論文のグラフデータを公開APIでも提供。",
    "tags": ["検索エンジン", "論文・学術"]
  },
  {
    "title": "CORE",
    "url": "https://core.ac.uk",
    "desc": "【専門横断検索】世界中のリポジトリから無料公開されているオープンアクセス論文を横断検索できる学術サービス。",
    "tags": ["検索エンジン", "論文・学術"]
  },
  {
    "title": "BASE Search",
    "url": "https://base-search.net",
    "desc": "【専門横断検索】ドイツ発の学術OAリポジトリ横断検索。3億件以上の学術文書にフリーアクセスで検索可能。",
    "tags": ["検索エンジン", "論文・学術"]
  },

  // ── コード・技術特化検索 ─────────────────────────────────────────

  {
    "title": "GitHub Code Search",
    "url": "https://github.com/search",
    "desc": "【コード特化検索】GitHubリポジトリのコードを全文・正規表現で横断検索できる公式機能。",
    "tags": ["検索エンジン", "コード管理"]
  },
  {
    "title": "grep.app",
    "url": "https://grep.app",
    "desc": "【コード特化検索】OSSコードを正規表現で高速横断検索できるサービス。GitHubの公開リポジトリを対象とする。",
    "tags": ["検索エンジン", "コード管理"]
  },
  {
    "title": "Searchcode",
    "url": "https://searchcode.com",
    "desc": "【コード特化検索】GitHub・GitLab・Bitbucket等複数ホスティングのコードを横断検索できるサービス。",
    "tags": ["検索エンジン", "コード管理"]
  },
  {
    "title": "Sourcegraph",
    "url": "https://sourcegraph.com",
    "desc": "【コード特化検索】大規模コードベース向けのインテリジェントコード検索・ナビゲーションツール。企業向け有料プランも提供。",
    "tags": ["検索エンジン", "コード管理"]
  },
  {
    "title": "Libraries.io",
    "url": "https://libraries.io",
    "desc": "【コード特化検索】320万以上のオープンソースライブラリの依存関係を検索・調査できるサービス。パッケージの依存関係調査・脆弱性確認にも使える。",
    "tags": ["検索エンジン", "パッケージ・ライブラリ"]
  },

  // ── 日本語情報特化検索 ──────────────────────────────────────────

  {
    "title": "Weblio 辞書・百科",
    "url": "https://www.weblio.jp",
    "desc": "【日本語特化検索】辞書・百科・用語集を横断できる日本語情報検索ポータル。和英・専門用語・類語など多様な辞書を一括検索。",
    "tags": ["検索エンジン", "辞書・国語"]
  },
  {
    "title": "Kotobank",
    "url": "https://kotobank.jp",
    "desc": "【日本語特化検索】百科事典・辞書コンテンツを横断検索できる日本語知識サービス。朝日・毎日新聞社のコンテンツも含む。",
    "tags": ["検索エンジン", "百科事典・知識"]
  },
  {
    "title": "ニコニコ大百科",
    "url": "https://dic.nicovideo.jp",
    "desc": "【日本語特化検索】ニコニコ動画発のサブカル・ネット用語に強いWiki型辞典。インターネットスラングや流行語の情報が特に充実。",
    "tags": ["検索エンジン", "百科事典・知識"]
  },
  {
    "title": "ピクシブ百科事典",
    "url": "https://dic.pixiv.net",
    "desc": "【日本語特化検索】同人・オタク文化に特化した用語辞典。pixiv上のタグ・作品・キャラクターに関する情報が充実。",
    "tags": ["検索エンジン", "百科事典・知識"]
  },
  {
    "title": "はてな検索",
    "url": "https://search.hatena.ne.jp",
    "desc": "【日本語特化検索】はてなブックマーク・はてなブログなどはてなサービスを横断して検索できるサービス。",
    "tags": ["検索エンジン", "テキストブログ"]
  },
  {
    "title": "5ch 検索",
    "url": "https://find.5ch.net",
    "desc": "【日本語特化検索】5ch（旧2ちゃんねる）の全スレッドを全文検索できるサービス。現行スレッドと過去ログを横断検索可能。",
    "tags": ["検索エンジン", "匿名掲示板"]
  },
  {
    "title": "まとめ検索",
    "url": "https://uggc.pw",
    "desc": "【日本語特化検索】まとめサイト・ブログを横断検索するサービス。ドメイン名「uggc.pw」はROT13で「http.pw」に対応する一般的でない名称であり、信頼性・安全性に注意が必要。利用は自己責任で。",
    "tags": ["検索エンジン"]
  },

  // ── その他・ユニーク系 ───────────────────────────────────────────

  {
    "title": "Million Short",
    "url": "https://millionshort.com",
    "desc": "【ユニーク検索】上位N件を除外して検索し、SEO最適化された大手サイトに埋もれた結果を発掘するユニークな検索サービス。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Boardreader",
    "url": "https://boardreader.com",
    "desc": "【ユニーク検索】フォーラム・掲示板に特化した横断検索サービス。各種コミュニティ投稿を横断して検索できる。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Shodan",
    "url": "https://www.shodan.io",
    "desc": "【ユニーク検索】インターネットに接続されたデバイスを検索するエンジン。セキュリティリサーチ・脆弱性調査を目的とした合法的なセキュリティツール。不正アクセスや攻撃目的での使用は違法。",
    "tags": ["検索エンジン", "セキュリティ・プライバシー"]
  },
  {
    "title": "Censys",
    "url": "https://search.censys.io",
    "desc": "【ユニーク検索】インターネット上の公開資産・証明書を調査するセキュリティリサーチ向け検索エンジン。自組織の公開資産確認など合法的な用途向け。不正アクセス・攻撃目的での使用は違法。",
    "tags": ["検索エンジン", "セキュリティ・プライバシー"]
  },
  {
    "title": "Common Crawl",
    "url": "https://commoncrawl.org",
    "desc": "【ユニーク検索】Webのオープンクロールデータを提供する非営利組織。一般ユーザー向けの検索UIは存在せず、研究者・企業向けのデータセット提供が主な目的。AI学習データとしても広く使われる。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Wiby",
    "url": "https://wiby.me",
    "desc": "【ユニーク検索】個人サイト・テキスト重視のインディーウェブに特化した検索エンジン。商業サイト・大手メディアは除外され、昔ながらの個人Webページが中心。",
    "tags": ["検索エンジン"]
  },
  {
    "title": "Marginalia",
    "url": "https://search.marginalia.nu",
    "desc": "【ユニーク検索】商業サイト・SEO最適化サイトを除外した小規模・個人サイト特化の検索エンジン。Wibyと並ぶインディーウェブ検索の代表格。",
    "tags": ["検索エンジン"]
  },

];

export default links;
