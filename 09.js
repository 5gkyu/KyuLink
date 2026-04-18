const links = [
  {
    "title": "J-PlatPat",
    "url": "https://www.j-platpat.inpit.go.jp/",
    "desc": "【特許・知財】特許庁が提供する無料の産業財産権情報検索サービス。特許・実用新案・意匠・商標を日本語で横断的に検索できる国内最重要ツール。",
    "tags": ["特許・知財", "政府・行政"]
  },
  {
    "title": "特許庁（JPO）",
    "url": "https://www.jpo.go.jp/",
    "desc": "【特許・知財】日本の特許行政を担う経済産業省外局。特許・商標・意匠・実用新案の制度解説、出願手続き案内、法改正情報などを公式公開。",
    "tags": ["特許・知財", "政府・行政"]
  },
  {
    "title": "INPIT（工業所有権情報・研修館）",
    "url": "https://www.inpit.go.jp/",
    "desc": "【特許・知財】特許庁所管の独立行政法人。知財相談窓口、特許流通支援、人材育成研修、中小企業向け知財サポートを提供。",
    "tags": ["特許・知財", "政府・行政"]
  },
  {
    "title": "Google Patents",
    "url": "https://patents.google.com/",
    "desc": "【特許・知財】Googleが提供する世界最大規模の特許全文検索サービス。日本・米国・欧州・中国など多国の特許をキーワード・類似文章・図面で検索可能。",
    "tags": ["特許・知財", "検索エンジン"]
  },
  {
    "title": "Espacenet（欧州特許庁）",
    "url": "https://worldwide.espacenet.com/",
    "desc": "【特許・知財】欧州特許庁（EPO）が無料公開する特許データベース。1億件以上の特許文書を収録し、機械翻訳付きで多言語閲覧に対応。",
    "tags": ["特許・知財"]
  },
  {
    "title": "WIPO PATENTSCOPE",
    "url": "https://patentscope.wipo.int/",
    "desc": "【特許・知財】世界知的所有権機関（WIPO）が提供するPCT国際出願の公式検索サービス。110か国以上の出願データを横断検索できる。",
    "tags": ["特許・知財"]
  },
  {
    "title": "USPTO（米国特許商標庁）",
    "url": "https://www.uspto.gov/",
    "desc": "【特許・知財】米国の特許・商標を管轄する連邦機関。PatFT・AppFTによる米国特許の全文検索、商標検索（TESS）を無料で提供。",
    "tags": ["特許・知財"]
  },
  {
    "title": "EPO（欧州特許庁）",
    "url": "https://www.epo.org/",
    "desc": "【特許・知財】欧州特許条約に基づき設立された欧州特許審査機関。審査ガイドライン、技術動向レポート、統計データを公開。",
    "tags": ["特許・知財"]
  },
  {
    "title": "WIPO（世界知的所有権機関）",
    "url": "https://www.wipo.int/",
    "desc": "【特許・知財】国連専門機関として知的財産の国際的保護を推進。マドリッド商標、ハーグ意匠、PCT特許の国際出願窓口でもある。",
    "tags": ["特許・知財"]
  },
  {
    "title": "J-GLOBAL（JST）",
    "url": "https://jglobal.jst.go.jp/",
    "desc": "【特許・知財】科学技術振興機構（JST）の横断検索サービス。特許・論文・研究者・機関・化学物質を一括で検索でき、技術調査に有用。",
    "tags": ["特許・知財", "論文・学術"]
  },
  {
    "title": "Lens.org",
    "url": "https://www.lens.org/",
    "desc": "【特許・知財】オープンアクセスの特許・学術論文統合検索プラットフォーム。世界1億件超の特許と学術文献をリンクして分析できる無料ツール。",
    "tags": ["特許・知財", "論文・学術"]
  },
  {
    "title": "FreePatentsOnline",
    "url": "https://www.freepatentsonline.com/",
    "desc": "【特許・知財】米国・欧州・日本などの特許をまとめて無料検索できるサービス。PDFダウンロード、引用関係の閲覧にも対応。",
    "tags": ["特許・知財"]
  },
  {
    "title": "IP Force",
    "url": "https://ip.force.co.jp/",
    "desc": "【特許・知財】日本の特許・実用新案公報を無料で全文閲覧できるサービス。J-PlatPatより画面が見やすく、個人調査に広く利用されている。",
    "tags": ["特許・知財"]
  },
  {
    "title": "J-STORE（特許流通データベース）",
    "url": "https://j-store.inpit.go.jp/",
    "desc": "【特許・知財】大学・公的研究機関が保有する未活用特許を検索・ライセンス交渉できるINPIT運営のデータベース。技術移転・事業化検討に活用できる。",
    "tags": ["特許・知財"]
  },
  {
    "title": "文化庁 著作権",
    "url": "https://www.bunka.go.jp/seisaku/chosakuken/",
    "desc": "【特許・知財】著作権法・制度の公式情報を提供する文化庁のページ。権利の範囲、許諾手続き、教育・AIと著作権など最新の法改正動向も掲載。",
    "tags": ["特許・知財", "政府・行政"]
  },
  {
    "title": "CRIC（著作権情報センター）",
    "url": "https://www.cric.or.jp/",
    "desc": "【特許・知財】著作権の普及・啓発を行う公益社団法人。著作権テキスト、Q&A、著作権法全文、相談窓口案内など実務に役立つ情報を無料公開。",
    "tags": ["特許・知財"]
  },
  {
    "title": "CNIPA（中国国家知識産権局）",
    "url": "https://www.cnipa.gov.cn/",
    "desc": "【特許・知財】中国の特許・商標・意匠を管轄する政府機関。中国市場進出や競合調査の際に、中国語での特許出願状況を確認できる公式サイト。",
    "tags": ["特許・知財", "政府・行政"]
  }
];
export default links;
