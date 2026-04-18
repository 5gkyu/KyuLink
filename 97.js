const links = [
  {
    "title": "Kindle（Amazon電子書籍）",
    "url": "https://www.amazon.co.jp/kindle-dbs/hz/subscribe/ku",
    "desc": "【読書・電子書籍】Amazonの電子書籍サービス。Kindle Unlimited で200万冊以上が読み放題。専用アプリやKindle端末で快適に読書できる。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "楽天Kobo",
    "url": "https://books.rakuten.co.jp/e-book/",
    "desc": "【読書・電子書籍】楽天の電子書籍ストア。楽天ポイントが貯まる・使える。約400万冊の品揃え。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "BookLive!",
    "url": "https://booklive.jp/",
    "desc": "【読書・電子書籍】国内最大級の電子書籍ストア。毎日クーポン配布、無料作品も多数。マンガ・ラノベ・一般書幅広く対応。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "honto",
    "url": "https://honto.jp/",
    "desc": "【読書・電子書籍】丸善・ジュンク堂・文教堂と連携する書籍通販＆電子書籍サービス。紙と電子のハイブリッド型。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "青空文庫",
    "url": "https://www.aozora.gr.jp/",
    "desc": "【読書・電子書籍】著作権切れの日本文学作品を無料公開するデジタルライブラリ。夏目漱石・太宰治など名作多数。ボランティア運営。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "BOOK☆WALKER",
    "url": "https://bookwalker.jp/",
    "desc": "【読書・電子書籍】KADOKAWAグループの電子書籍ストア。ラノベ・マンガ・アニメ関連書籍に強い。読み放題プランあり。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "紀伊國屋書店ウェブストア",
    "url": "https://www.kinokuniya.co.jp/",
    "desc": "【読書・電子書籍】紀伊國屋書店の公式通販。紙書籍の在庫検索・取り寄せに加え電子書籍（Kinoppy）も展開。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "コミックシーモア",
    "url": "https://www.cmoa.jp/",
    "desc": "【読書・電子書籍】NTTソルマーレ運営のマンガ・電子書籍サイト。読み放題・レンタル・購入と多彩な利用形態。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "ebookjapan",
    "url": "https://ebookjapan.yahoo.co.jp/",
    "desc": "【読書・電子書籍】Yahoo! JAPAN運営の電子書籍ストア。マンガに特化、PayPayポイント還元が魅力。無料試し読み充実。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "DMMブックス",
    "url": "https://book.dmm.com/",
    "desc": "【読書・電子書籍】DMM運営の電子書籍ストア。マンガ・ラノベ・写真集など幅広いジャンル。セール・クーポンが頻繁。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "Reader Store（ソニー）",
    "url": "https://ebookstore.sony.jp/",
    "desc": "【読書・電子書籍】ソニー運営の電子書籍ストア。文芸・ビジネス書・コミックなど幅広い品揃え。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "dブック",
    "url": "https://dbook.docomo.ne.jp/",
    "desc": "【読書・電子書籍】NTTドコモの電子書籍サービス。dポイントで購入可能。マンガ・雑誌・小説に対応。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "U-NEXT（書籍）",
    "url": "https://video.unext.jp/book",
    "desc": "【読書・電子書籍】動画配信U-NEXTの電子書籍機能。毎月付与のポイントで書籍購入可能。雑誌読み放題も付属。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "マガジンウォーカー",
    "url": "https://magazinewalker.jp/",
    "desc": "【読書・電子書籍】KADOKAWAの雑誌読み放題サービス。アニメ・ゲーム・IT系雑誌が充実。月額定額制。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "dマガジン",
    "url": "https://dmagazine.docomo.ne.jp/",
    "desc": "【読書・電子書籍】NTTドコモの雑誌読み放題サービス。1,200誌以上が月額定額で読み放題。バックナンバーも閲覧可。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "楽天マガジン",
    "url": "https://magazine.rakuten.co.jp/",
    "desc": "【読書・電子書籍】楽天の雑誌読み放題サービス。1,600誌以上が月額418円。楽天ポイントで支払い可能。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "Renta!",
    "url": "https://renta.papy.co.jp/",
    "desc": "【読書・電子書籍】マンガ・コミックのレンタル特化型電子書籍サイト。48時間レンタルで安価に読める。TL・BL作品も充実。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "めちゃコミック",
    "url": "https://mechacomic.jp/",
    "desc": "【読書・電子書籍】話売りに対応したマンガサイト。1話単位で購入でき少額から楽しめる。オリジナル作品も多い。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "Google Play ブックス",
    "url": "https://play.google.com/store/books",
    "desc": "【読書・電子書籍】Googleの電子書籍ストア。Android/iOS/Web対応。洋書の品揃えも豊富。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "Apple Books",
    "url": "https://www.apple.com/jp/apple-books/",
    "desc": "【読書・電子書籍】Apple公式の電子書籍アプリ。iPhone/iPad/Macで利用可能。オーディオブックにも対応。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "Audible（オーディブル）",
    "url": "https://www.audible.co.jp/",
    "desc": "【読書・電子書籍】Amazon系のオーディオブックサービス。プロのナレーターによる朗読で耳から読書。月額定額聴き放題。",
    "tags": ["読書・電子書籍", "ラジオ・ポッドキャスト"]
  },
  {
    "title": "audiobook.jp",
    "url": "https://audiobook.jp/",
    "desc": "【読書・電子書籍】オトバンク運営のオーディオブックサービス。ビジネス書・自己啓発書を中心に聴き放題プランあり。",
    "tags": ["読書・電子書籍", "ラジオ・ポッドキャスト"]
  },
  {
    "title": "版元ドットコム",
    "url": "https://www.hanmoto.com/",
    "desc": "【読書・電子書籍】出版社横断の書誌データベース。新刊情報・近刊情報の確認や、書店在庫検索に活用できる。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "新刊.net",
    "url": "https://sinkan.net/",
    "desc": "【読書・電子書籍】新刊書籍の発売日・予約情報を網羅的に確認できるサイト。ジャンル別・著者別に検索可能。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "カーリル",
    "url": "https://calil.jp/",
    "desc": "【読書・電子書籍】全国の図書館の蔵書を横断検索できるサービス。最寄り図書館の貸出状況もリアルタイムで確認可能。",
    "tags": ["読書・電子書籍", "読書コミュニティ・読書記録"]
  },
  {
    "title": "国立国会図書館デジタルコレクション",
    "url": "https://dl.ndl.go.jp/",
    "desc": "【読書・電子書籍】国立国会図書館が所蔵するデジタル化資料を閲覧できる。個人送信サービスで自宅からも利用可能。",
    "tags": ["読書・電子書籍", "論文・学術"]
  },
  {
    "title": "Project Gutenberg",
    "url": "https://www.gutenberg.org/",
    "desc": "【読書・電子書籍】英語圏を中心とした著作権切れ書籍の無料電子図書館。7万冊以上のePub/PDF/HTML形式を提供。",
    "tags": ["読書・電子書籍"]
  },
  {
    "title": "flier（フライヤー）",
    "url": "https://www.flierinc.com/",
    "desc": "【読書・電子書籍】ビジネス書の要約サービス。1冊10分で読める要約を提供。話題のビジネス書を効率的にキャッチアップ。",
    "tags": ["読書・電子書籍"]
  }
];
export default links;
