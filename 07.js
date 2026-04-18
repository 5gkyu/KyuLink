const links = [
  {
    "title": "J-STAGE",
    "url": "https://www.jstage.jst.go.jp/",
    "desc": "【論文・学術】国立研究開発法人科学技術振興機構（JST）が運営する国内最大の電子ジャーナルプラットフォーム。理工学・医学・人文社会科学など幅広い分野の論文を無料で閲覧可能。",
    "tags": ["論文・学術"]
  },
  {
    "title": "CiNii Research",
    "url": "https://cir.nii.ac.jp/",
    "desc": "【論文・学術】国立情報学研究所（NII）が提供する学術情報データベース。論文・図書・研究データ・プロジェクトを横断検索できる。旧CiNii ArticlesとCiNii Booksを統合。",
    "tags": ["論文・学術"]
  },
  {
    "title": "Google Scholar",
    "url": "https://scholar.google.com/",
    "desc": "【論文・学術】Googleが提供する学術論文専用の検索エンジン。論文・書籍・学位論文・特許を横断検索でき、被引用数の確認や関連文献の探索にも利用される。",
    "tags": ["論文・学術", "検索エンジン"]
  },
  {
    "title": "arXiv",
    "url": "https://arxiv.org/",
    "desc": "【論文・学術】コーネル大学が運営するプレプリントサーバー。物理学・数学・統計学・情報科学・経済学などの査読前論文を無料で公開・閲覧できる。最新研究へのアクセスが速い。",
    "tags": ["論文・学術"]
  },
  {
    "title": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/",
    "desc": "【論文・学術】米国国立医学図書館（NLM）が提供する生命科学・医学分野の文献データベース。MEDLINE収録文献を中心に3,700万件以上の論文を収録。",
    "tags": ["論文・学術"]
  },
  {
    "title": "Semantic Scholar",
    "url": "https://www.semanticscholar.org/",
    "desc": "【論文・学術】Allen Institute for AIが運営するAI支援型論文検索エンジン。意味的な類似性に基づく関連文献の推薦や、論文サマリーの自動生成機能を持つ。",
    "tags": ["論文・学術", "検索エンジン"]
  },
  {
    "title": "ResearchGate",
    "url": "https://www.researchgate.net/",
    "desc": "【論文・学術】研究者向けのSNS兼論文共有プラットフォーム。著者が直接全文PDFを公開している場合が多く、著者への質問機能もある。",
    "tags": ["論文・学術"]
  },
  {
    "title": "JSTOR",
    "url": "https://www.jstor.org/",
    "desc": "【論文・学術】人文科学・社会科学・自然科学分野の学術雑誌・書籍・一次資料を収録するデジタルアーカイブ。一部コンテンツは無料アカウントで月数本まで閲覧可能。",
    "tags": ["論文・学術"]
  },
  {
    "title": "IEEE Xplore",
    "url": "https://ieeexplore.ieee.org/",
    "desc": "【論文・学術】電気・電子・コンピュータ・情報通信分野の論文・規格・会議録を収録するIEEEの公式データベース。500万件以上のフルテキスト文書を提供。",
    "tags": ["論文・学術"]
  },
  {
    "title": "ACM Digital Library",
    "url": "https://dl.acm.org/",
    "desc": "【論文・学術】計算機科学・情報技術分野の学術成果を集めたACMの公式デジタルライブラリ。会議録・ジャーナル・書籍・ニュースレターを収録。",
    "tags": ["論文・学術"]
  },
  {
    "title": "ScienceDirect",
    "url": "https://www.sciencedirect.com/",
    "desc": "【論文・学術】Elsevier社が運営する自然科学・医学・工学・社会科学分野の論文データベース。2,500誌以上のジャーナルと4万点以上の書籍を収録。機関契約なしでも抄録は無料閲覧可能。",
    "tags": ["論文・学術"]
  },
  {
    "title": "SpringerLink",
    "url": "https://link.springer.com/",
    "desc": "【論文・学術】Springer社が運営する自然科学・医学・工学分野の論文・書籍データベース。オープンアクセス論文はPDF無料ダウンロード可能。",
    "tags": ["論文・学術"]
  },
  {
    "title": "KAKEN",
    "url": "https://kaken.nii.ac.jp/",
    "desc": "【論文・学術】国立情報学研究所が提供する科学研究費助成事業（科研費）のデータベース。採択課題・研究者・成果論文を横断的に検索できる。",
    "tags": ["論文・学術", "統計・データ"]
  },
  {
    "title": "IRDB（学術機関リポジトリDB）",
    "url": "https://irdb.nii.ac.jp/",
    "desc": "【論文・学術】国内の大学・研究機関が公開する機関リポジトリを横断検索できるNII提供のデータベース。学位論文や紀要など、他DBでは見つかりにくい資料も収録。",
    "tags": ["論文・学術"]
  },
  {
    "title": "bioRxiv",
    "url": "https://www.biorxiv.org/",
    "desc": "【論文・学術】生命科学分野のプレプリントサーバー。Cold Spring Harbor Laboratoryが運営し、査読前の生物学・神経科学・遺伝学などの論文を無料公開。",
    "tags": ["論文・学術"]
  },
  {
    "title": "SSRN",
    "url": "https://www.ssrn.com/",
    "desc": "【論文・学術】社会科学分野に特化したプレプリント・ワーキングペーパー共有プラットフォーム。経済学・法学・経営学などの分野で広く利用される。Elsevier傘下。",
    "tags": ["論文・学術"]
  },
  {
    "title": "BASE（Bielefeld Academic Search Engine）",
    "url": "https://www.base-search.net/",
    "desc": "【論文・学術】ビーレフェルト大学図書館が運営する学術資料の横断検索エンジン。世界中の機関リポジトリ・オープンアクセスジャーナルなど3億件以上のドキュメントを検索可能。",
    "tags": ["論文・学術", "検索エンジン"]
  },
  {
    "title": "OpenAlex",
    "url": "https://openalex.org/",
    "desc": "【論文・学術】完全オープンな学術メタデータプラットフォーム。論文・著者・機関・雑誌・資金提供者のデータを無料APIで提供し、書誌情報の分析・可視化にも利用される。",
    "tags": ["論文・学術", "統計・データ"]
  },
  {
    "title": "国立国会図書館デジタルコレクション",
    "url": "https://dl.ndl.go.jp/",
    "desc": "【論文・学術】国立国会図書館が提供するデジタル資料の閲覧サービス。明治以降の図書・雑誌・古典籍・博士論文など約700万点を公開。一部資料は送信サービスで閲覧可能。",
    "tags": ["論文・学術", "読書・電子書籍"]
  },
  {
    "title": "国立国会図書館サーチ",
    "url": "https://iss.ndl.go.jp/",
    "desc": "【論文・学術】国立国会図書館が運営する総合目録横断検索サービス。図書・雑誌・論文・電子書籍など複数のデータベースを一括検索でき、所蔵機関の確認も可能。",
    "tags": ["論文・学術", "検索エンジン"]
  }
];
export default links;
