const links = [
  {
    "title": "Wikipedia 日本語版",
    "url": "https://ja.wikipedia.org/",
    "desc": "【ウィキメディア】世界最大の無料百科事典・日本語版。誰でも編集可能なオープンな知識集積。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "Wikipedia 英語版",
    "url": "https://en.wikipedia.org/",
    "desc": "【ウィキメディア】記事数・情報量が最大の英語Wikipedia。日本語版にない専門記事も多数。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "Wikimedia Commons",
    "url": "https://commons.wikimedia.org/",
    "desc": "【ウィキメディア】Wikipedia等で使用される画像・音声・動画のフリー素材ライブラリ。CC/PD素材を検索・ダウンロード可能。",
    "tags": ["百科事典・知識", "素材・フリー画像"]
  },
  {
    "title": "Wikidata",
    "url": "https://www.wikidata.org/",
    "desc": "【ウィキメディア】Wikipedia各言語版が共有する構造化データベース。人・場所・概念などのエンティティをSPARQL等で照会できる。",
    "tags": ["百科事典・知識", "統計・データ"]
  },
  {
    "title": "Wikisource 日本語版",
    "url": "https://ja.wikisource.org/",
    "desc": "【ウィキメディア】著作権フリーの文献・原典テキストライブラリ。古典・法令・歴史文書などを収録。",
    "tags": ["百科事典・知識", "読書・電子書籍"]
  },
  {
    "title": "Wikibooks 日本語版",
    "url": "https://ja.wikibooks.org/",
    "desc": "【ウィキメディア】教科書・学習用テキストをオープンに作成・公開するプロジェクト。プログラミング・数学・語学など。",
    "tags": ["百科事典・知識", "プログラミング学習"]
  },
  {
    "title": "Wikiversity 日本語版",
    "url": "https://ja.wikiversity.org/",
    "desc": "【ウィキメディア】学習コース・研究資料を無料公開する高等教育向けWikiプロジェクト。",
    "tags": ["百科事典・知識", "論文・学術"]
  },
  {
    "title": "Wikivoyage 日本語版",
    "url": "https://ja.wikivoyage.org/",
    "desc": "【ウィキメディア】旅行先の知識を無料で集積するWikiトラベルガイド。観光・交通・宿泊情報など。",
    "tags": ["百科事典・知識", "旅行・宿泊予約"]
  },
  {
    "title": "Simple English Wikipedia",
    "url": "https://simple.wikipedia.org/",
    "desc": "【ウィキメディア】基本英単語2000語で書かれた简単な英語版Wikipedia。英語学習や概念の把握に役立つ。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "Britannica",
    "url": "https://www.britannica.com/",
    "desc": "【商用百科事典】ブリタニカ国際大百科事典の英語版。専門家監修の高品質な百科事典記事。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "ジャパンナレッジ",
    "url": "https://japanknowledge.com/",
    "desc": "【商用百科事典】小学館の日本大百科全書・世界大百科事典など170以上の辞典・事典を横断検索できる有料データベース。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "コトバンク（百科事典）",
    "url": "https://kotobank.jp/",
    "desc": "【商用百科事典】ブリタニカ・世界大百科事典・日本大百科全書など複数の百科事典をまとめて無料検索できるサービス。",
    "tags": ["百科事典・知識", "辞書・国語"]
  },
  {
    "title": "Wolfram Alpha",
    "url": "https://www.wolframalpha.com/",
    "desc": "【知識エンジン】数学・科学・統計・暦など構造化された知識をコンピュータが直接計算・回答する計算知識エンジン。",
    "tags": ["百科事典・知識", "検索エンジン"]
  },
  {
    "title": "Encyclopedia.com",
    "url": "https://www.encyclopedia.com/",
    "desc": "【百科事典検索】Columbia Encyclopedia等複数の英語百科事典を一括検索できる無料サービス。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "wikiHow 日本語版",
    "url": "https://ja.wikihow.com/",
    "desc": "【ハウツー知識】「〜するには」形式のハウツー記事を誰でも編集・投稿できるWiki型知識サイト。生活・料理・DIYなど。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "HowStuffWorks",
    "url": "https://www.howstuffworks.com/",
    "desc": "【解説知識】「仕組み」を分かりやすく解説する英語コンテンツサイト。科学・テクノロジー・社会など幅広い分野。",
    "tags": ["百科事典・知識"]
  },
  {
    "title": "Internet Archive",
    "url": "https://archive.org/",
    "desc": "【デジタルアーカイブ】書籍・映像・音楽・ソフトウェア・ウェブページなどを無償で保存・公開する非営利アーカイブ。",
    "tags": ["百科事典・知識", "検索エンジン"]
  },
  {
    "title": "Wayback Machine",
    "url": "https://web.archive.org/",
    "desc": "【デジタルアーカイブ】Internet Archiveのウェブページ履歴サービス。過去のウェブサイトをURL・日時で検索・閲覧できる。",
    "tags": ["百科事典・知識", "検索エンジン"]
  },
  {
    "title": "国立国会図書館デジタルコレクション",
    "url": "https://dl.ndl.go.jp/",
    "desc": "【デジタルアーカイブ】国立国会図書館が所蔵する書籍・雑誌・古文書などのデジタル化資料を無料で閲覧できる公式サービス。",
    "tags": ["百科事典・知識", "論文・学術", "読書・電子書籍"]
  },
  {
    "title": "NHK for School",
    "url": "https://www.nhk.or.jp/school/",
    "desc": "【学習向け】NHKが提供する小中学生向け教育番組・動画の無料配信。理科・社会・国語など教科ごとに整理されている。",
    "tags": ["百科事典・知識", "子ども向け学習"]
  },
  {
    "title": "学研キッズネット",
    "url": "https://kids.gakken.co.jp/",
    "desc": "【学習向け】学研が運営する子ども向け百科・図鑑コンテンツ。調べ学習・自由研究・科学実験など。",
    "tags": ["百科事典・知識", "子ども向け学習"]
  },
  {
    "title": "DBpedia",
    "url": "https://www.dbpedia.org/",
    "desc": "【構造化知識】Wikipediaのテキストを構造化データに変換したLinked Open Dataプロジェクト。SPARQL API経由で機械可読な知識を取得できる。",
    "tags": ["百科事典・知識", "統計・データ"]
  },
  {
    "title": "Fandom（ファンダム）",
    "url": "https://www.fandom.com/",
    "desc": "【ファンWiki】アニメ・ゲーム・映画など各ジャンルのファンが作るWikiサイト群。MediaWikiベースで誰でも編集可能。",
    "tags": ["百科事典・知識", "ゲームデータベース・図鑑", "アニメ情報データベース"]
  },
  {
    "title": "Open Library",
    "url": "https://openlibrary.org/",
    "desc": "【デジタルアーカイブ】Internet Archiveが運営する無料電子書籍ライブラリ。2000万冊以上の書籍情報と一部の電子貸出が可能。",
    "tags": ["百科事典・知識", "読書・電子書籍"]
  }
];
export default links;
