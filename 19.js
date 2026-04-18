const links = [
  {
    "title": "Netflix",
    "url": "https://www.netflix.com",
    "desc": "【動画配信（海外）】米国発の世界最大級のSVOD。映画・ドラマ・アニメ・ドキュメンタリーをオリジナル作品を含め190以上の国・地域で配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Amazon Prime Video",
    "url": "https://www.primevideo.com",
    "desc": "【動画配信（海外）】Amazonが提供するSVOD。Prime会員特典として映画・ドラマ・アニメを配信。「Primeオリジナル」シリーズも豊富に展開。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Disney+",
    "url": "https://www.disneyplus.com",
    "desc": "【動画配信（海外）】ディズニー・マーベル・スターウォーズ・ピクサー・ナショナルジオグラフィックの作品を集めた公式SVOD。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Hulu（米国）",
    "url": "https://www.hulu.com",
    "desc": "【動画配信（海外）】米国最大級のSVOD。最新ドラマ・映画に加えABC・NBC・FOXなど放送局のライブTV（米国内）も視聴可能。※日本版(hulu.jp)は別サービス。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Apple TV+",
    "url": "https://tv.apple.com",
    "desc": "【動画配信（海外）】Appleが提供するオリジナルコンテンツ特化のSVOD。高予算の映画・ドラマ・ドキュメンタリーを独占配信。Apple One束ね契約にも含まれる。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Paramount+",
    "url": "https://www.paramountplus.com",
    "desc": "【動画配信（海外）】CBS・Paramount PicturesなどバイアコムCBS系コンテンツをまとめたSVOD。スポーツ・ニュースライブも含む。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Max（旧HBO Max）",
    "url": "https://www.max.com",
    "desc": "【動画配信（海外）】HBO・Warner Bros.・DCなどの人気コンテンツを集約したSVOD。「ゲーム・オブ・スローンズ」「サクセッション」など高評価作品が充実。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Peacock",
    "url": "https://www.peacocktv.com",
    "desc": "【動画配信（海外）】NBCUniversalが運営するSVOD。映画・ドラマ・スポーツ・ニュースを配信。一部コンテンツは広告付きで無料視聴可能。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Crunchyroll",
    "url": "https://www.crunchyroll.com",
    "desc": "【動画配信（海外）】アニメ専門の海外向けSVOD。1400作品以上の日本アニメを世界200以上の国・地域で字幕・吹き替え配信。Sony Pictures傘下。",
    "tags": ["動画配信（海外）", "アニメ"]
  },
  {
    "title": "MUBI",
    "url": "https://mubi.com",
    "desc": "【動画配信（海外）】アート系・インディー映画に特化したキュレーション型SVOD。厳選された映画が毎日1本追加され30日間視聴可能。映画祭受賞作も充実。",
    "tags": ["動画配信（海外）", "映画・ドラマ"]
  },
  {
    "title": "BritBox",
    "url": "https://www.britbox.com",
    "desc": "【動画配信（海外）】英国BBC・ITVのコンテンツに特化したSVOD。英国ドラマ・ミステリー・コメディ・ドキュメンタリーを豊富にラインナップ。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Shudder",
    "url": "https://www.shudder.com",
    "desc": "【動画配信（海外）】ホラー・スリラー・サスペンス専門のSVOD（AMC Networks傘下）。クラシックホラーから最新作・オリジナル作品まで幅広く配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "CuriosityStream",
    "url": "https://curiositystream.com",
    "desc": "【動画配信（海外）】科学・歴史・自然・テクノロジー専門のドキュメンタリーSVOD。Discovery Channel創業者が設立。3,000本以上のドキュメンタリーを配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Discovery+",
    "url": "https://www.discoveryplus.com",
    "desc": "【動画配信（海外）】Discovery・TLC・HGTV・Food Networkなど55,000以上のエピソードを配信するSVOD。ドキュメンタリー・リアリティ番組が充実。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Tubi",
    "url": "https://tubitv.com",
    "desc": "【動画配信（海外）】広告付きで無料視聴できるAVOD（Fox Corporation傘下）。映画・ドラマ・アニメなど20,000本以上のコンテンツを無料配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Pluto TV",
    "url": "https://pluto.tv",
    "desc": "【動画配信（海外）】広告付き無料のライブTVとオンデマンドを組み合わせたAVOD（Paramount傘下）。250以上のライブチャンネルと映画・ドラマのVODを提供。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Plex",
    "url": "https://watch.plex.tv",
    "desc": "【動画配信（海外）】個人メディアサーバー機能と無料AVODを兼ね備えたプラットフォーム。広告付き無料映画・ドラマ・ライブTVに加え、自分のメディアを整理・再生できる。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Viki（Rakuten Viki）",
    "url": "https://www.viki.com",
    "desc": "【動画配信（海外）】韓国・中国・日本ドラマを中心としたアジアコンテンツ専門SVOD（楽天グループ運営）。ファンコミュニティによる多言語字幕が充実。",
    "tags": ["動画配信（海外）", "映画・ドラマ"]
  },
  {
    "title": "VIU",
    "url": "https://www.viu.com",
    "desc": "【動画配信（海外）】香港発のアジアコンテンツ専門SVOD。韓国・日本・中国のドラマ・バラエティをアジア16地域で多言語字幕付き配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "iQIYI International（愛奇藝）",
    "url": "https://www.iq.com",
    "desc": "【動画配信（海外）】中国最大の動画プラットフォームiQIYIの国際版。中国ドラマ・バラエティ・映画・アニメを多言語字幕で配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "WeTV",
    "url": "https://wetv.vip",
    "desc": "【動画配信（海外）】テンセント（Tencent Video）の国際版SVOD。中国・韓国・タイのドラマ・バラエティを多言語字幕付きで配信。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "AMC+",
    "url": "https://www.amcplus.com",
    "desc": "【動画配信（海外）】AMC・IFC・Shudder・Sundance TVなど複数チャンネルをバンドルしたSVOD。「ウォーキング・デッド」系など人気作品も視聴可能。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Acorn TV",
    "url": "https://watch.acorn.tv",
    "desc": "【動画配信（海外）】英国・アイルランド・オーストラリア・ニュージーランドのドラマに特化したSVOD。英国ミステリー・コメディが充実。",
    "tags": ["動画配信（海外）"]
  },
  {
    "title": "Criterion Channel",
    "url": "https://www.criterionchannel.com",
    "desc": "【動画配信（海外）】クライテリオン・コレクション関連のアートハウス・クラシック映画専門SVOD。特集プログラムや監督別・テーマ別キュレーションが映画ファンに人気。",
    "tags": ["動画配信（海外）", "映画・ドラマ"]
  }
];

export default links;
