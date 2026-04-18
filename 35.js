const links = [
  {
    "title": "5ちゃんねる（5ch）",
    "url": "https://5ch.net",
    "desc": "【匿名掲示板】日本最大の匿名掲示板。ニュース・趣味・専門分野など数千の板に分かれ、リアルタイムの情報交換が行われる。旧2ちゃんねる。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "5ちゃんねる スマホ版",
    "url": "https://itest.5ch.net",
    "desc": "【匿名掲示板】5chのスマートフォン向けインターフェース。モバイル環境からの閲覧・書き込みに最適化されたUI。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "おーぷん2ちゃんねる",
    "url": "https://open2ch.net",
    "desc": "【匿名掲示板】5chとは別運営の匿名掲示板。転載自由のルールでまとめサイトとの親和性が高い。比較的穏やかな雰囲気。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "2ch.sc",
    "url": "https://2ch.sc",
    "desc": "【匿名掲示板】西村博之氏が運営する掲示板。5chのログをミラーリングしつつ独自の書き込みも可能。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "したらば掲示板",
    "url": "https://rentalbbs.shitaraba.com",
    "desc": "【匿名掲示板】無料レンタル掲示板サービス。個人や団体が独自の掲示板を作成・運営できる。ゲーム攻略や趣味コミュニティに人気。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "まちBBS",
    "url": "https://machi.to",
    "desc": "【匿名掲示板】地域密着型の匿名掲示板。都道府県・市区町村別に板が分かれ、地元の話題や生活情報を交換できる。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "爆サイ.com",
    "url": "https://bakusai.com",
    "desc": "【匿名掲示板】地方・ローカル情報に特化した掲示板。地域別の雑談・求人・グルメ情報など生活に密着した話題が多い。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "ガールズちゃんねる",
    "url": "https://girlschannel.net",
    "desc": "【匿名掲示板】女性向け匿名掲示板。恋愛・美容・仕事・エンタメなど女性の関心が高いトピックについて活発に議論される。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "ママスタコミュニティ",
    "url": "https://mamastar.jp",
    "desc": "【匿名掲示板】ママ向け匿名掲示板。育児・教育・家庭の悩み・ママ友関連などの話題を匿名で相談・議論できる。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "発言小町",
    "url": "https://komachi.yomiuri.co.jp",
    "desc": "【匿名掲示板】読売新聞運営の人生相談掲示板。仕事・恋愛・家族問題などの相談に多数の回答が集まる。モデレーションが厳格。",
    "tags": ["匿名掲示板", "質問・Q&A"]
  },
  {
    "title": "Reddit",
    "url": "https://www.reddit.com",
    "desc": "【匿名掲示板】世界最大の英語圏掲示板。Subredditと呼ばれるテーマ別コミュニティが無数に存在。投票システムで良質な投稿が浮上する。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "Reddit 日本語コミュニティ r/japan",
    "url": "https://www.reddit.com/r/japan/",
    "desc": "【匿名掲示板】Redditの日本関連英語サブレディット。日本のニュース・文化・旅行・生活について海外ユーザーが議論する。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "Reddit r/newsokur",
    "url": "https://www.reddit.com/r/newsokur/",
    "desc": "【匿名掲示板】Redditの日本語ニュース速報サブレディット。日本語でニュースや時事問題を議論するコミュニティ。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "4chan",
    "url": "https://www.4chan.org",
    "desc": "【匿名掲示板】英語圏の画像掲示板。アニメ・ゲーム・テクノロジーなど多数の板がある。匿名文化の象徴的サイト。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "ふたば☆ちゃんねる",
    "url": "https://www.2chan.net",
    "desc": "【匿名掲示板】日本の画像掲示板。アニメ・ゲーム・特撮などサブカルチャー系の話題が中心。4chanのモデルとなったサイト。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "あにまん掲示板",
    "url": "https://bbs.animanch.com",
    "desc": "【匿名掲示板】アニメ・漫画・ゲーム特化の匿名掲示板。作品ごとのスレッドで感想・考察を語り合える。比較的穏やかな雰囲気。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "おんJ（おんでぃーじぇい）",
    "url": "https://hayabusa.open2ch.net/livejupiter/",
    "desc": "【匿名掲示板】おーぷん2ch内の実況系板。野球実況を中心に雑談・ネタスレが活発。なんJ文化の派生コミュニティ。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "Talk（トーク）",
    "url": "https://talk.jp",
    "desc": "【匿名掲示板】5chから派生した新しい匿名掲示板。JaneStyle等の専用ブラウザからアクセス可能。5chに近い板構成。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "Lemmy",
    "url": "https://join-lemmy.org",
    "desc": "【匿名掲示板】オープンソース・分散型のReddit代替。ActivityPub対応でFediverseに参加。各インスタンス間でコミュニティを共有できる。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "Hacker News",
    "url": "https://news.ycombinator.com",
    "desc": "【匿名掲示板】Y Combinator運営のテクノロジー系掲示板。スタートアップ・プログラミング・科学の話題が中心。質の高い議論で知られる。",
    "tags": ["匿名掲示板", "テクノロジー・ITニュース"]
  },
  {
    "title": "Lobsters",
    "url": "https://lobste.rs",
    "desc": "【匿名掲示板】招待制のテクノロジー系掲示板。プログラミング・OS・セキュリティなど技術トピックに特化。Hacker Newsより技術寄り。",
    "tags": ["匿名掲示板", "テクノロジー・ITニュース"]
  },
  {
    "title": "Tildes",
    "url": "https://tildes.net",
    "desc": "【匿名掲示板】非営利・オープンソースのReddit代替。招待制で質の高い議論を重視。広告なし・トラッキングなしのクリーンな設計。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "5chブラウザ JaneStyle",
    "url": "https://janestyle.net",
    "desc": "【匿名掲示板】5ch / Talk 対応の専用掲示板ブラウザ。スレッドの高速閲覧・NGワードフィルタ・画像プレビュー等の便利機能を搭載。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "ChMate",
    "url": "https://play.google.com/store/apps/details?id=jp.co.airfront.android.a2chMate",
    "desc": "【匿名掲示板】Android向け5ch専用ブラウザ。軽快な動作とカスタマイズ性で人気。スレッド取得・画像閲覧・NG設定に対応。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "BB2C",
    "url": "https://apps.apple.com/jp/app/bb2c/id298820042",
    "desc": "【匿名掲示板】iOS向けの5ch専用ブラウザ。シンプルなUIでiPhoneからの掲示板閲覧に特化。長年利用されている定番アプリ。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "5chまとめ Togetter風まとめ",
    "url": "https://togetter.com",
    "desc": "【匿名掲示板】Xの投稿をまとめるサービスだが、5chスレの話題がX経由でまとめられることも多い。ネット上の議論を整理して閲覧可能。",
    "tags": ["匿名掲示板", "総合SNS"]
  },
  {
    "title": "暇つぶし2ch",
    "url": "https://himatubushi2ch.com",
    "desc": "【匿名掲示板】5ch / おーぷん2chのスレッドをジャンル別にまとめたアンテナサイト。話題のスレッドを素早くチェックできる。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "ログ速",
    "url": "https://www.logsoku.com",
    "desc": "【匿名掲示板】5chの過去ログ検索・閲覧サービス。DAT落ちしたスレッドも閲覧可能。キーワード検索で過去の議論を掘り起こせる。",
    "tags": ["匿名掲示板"]
  },
  {
    "title": "みみずん検索",
    "url": "https://mimizun.com",
    "desc": "【匿名掲示板】2ch/5chの過去ログアーカイブ＆全文検索エンジン。古い時代のスレッドも大量に保存されており、歴史的な議論の調査に有用。",
    "tags": ["匿名掲示板"]
  }
];
export default links;
