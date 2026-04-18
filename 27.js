const links = [
  {
    "title": "Uta-Net（歌ネット）",
    "url": "https://www.uta-net.com",
    "desc": "邦楽歌詞の定番サイト。J-POP・アニソン・演歌など幅広いジャンルの歌詞を大量収録。アーティスト・楽曲名から検索可能。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "うたてん",
    "url": "https://utaten.com",
    "desc": "歌詞の意味・解説付きで楽しめる邦楽歌詞検索サービス。フリガナ表示・歌詞コピーにも対応。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "J-Lyric.net",
    "url": "https://j-lyric.net",
    "desc": "邦楽歌詞を幅広く収録したデータベースサイト。アーティスト・タイトル・歌詞の一部からイキドオリ検索できる。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "歌詞GET",
    "url": "https://www.kget.jp",
    "desc": "J-POPを中心に邦楽歌詞を収録。アーティスト・アルバム情報や試聴リンクも掲載。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "Lyrical Nonsense",
    "url": "https://www.lyrical-nonsense.com",
    "desc": "アニメ・ゲーム・ボカロ楽曲の歌詞を専門に収録。ローマ字・英訳付きで海外ファンにも人気。",
    "tags": ["邦楽特化・歌詞", "ボカロ・UTAU"]
  },
  {
    "title": "KasiTime",
    "url": "https://www.kasi-time.com",
    "desc": "邦楽歌詞カラオケサービス。楽曲に合わせた歌詞のタイミング表示が特徴。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "JOYSOUND 歌詞検索",
    "url": "https://www.joysound.com/web/search/song",
    "desc": "カラオケ大手JOYSOUNDによる楽曲・歌詞検索。収録曲数が多く、歌詞・キー情報も確認できる。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "DAM（クラブDAM）",
    "url": "https://www.clubdam.com",
    "desc": "カラオケDAMの公式ウェブサービス。歌詞確認・精密採点の練習・マイ採点履歴確認が可能。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "LINE MUSIC",
    "url": "https://music.line.me",
    "desc": "LINEが提供する邦楽に強い音楽ストリーミングサービス。LINEのプロフィールとの連携が特徴。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "AWA",
    "url": "https://awa.fm",
    "desc": "邦楽・洋楽を網羅する国内発の音楽ストリーミング。独自のプレイリスト機能やSNS共有が充実。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "楽天ミュージック",
    "url": "https://music.rakuten.co.jp",
    "desc": "楽天が提供する音楽ストリーミングサービス。楽天ポイントとの連携、邦楽コンテンツが充実。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "mora",
    "url": "https://mora.jp",
    "desc": "ハイレゾ音源に強い邦楽ダウンロードサービス。Sony Music系のレーベルを中心に高品質音源を提供。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "レコチョク",
    "url": "https://recochoku.jp",
    "desc": "国内最大手の音楽ダウンロード・ストリーミングサービス。シングル単位購入やハイレゾ対応が強み。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "dヒッツ",
    "url": "https://dhits.docomo.ne.jp",
    "desc": "ドコモが提供する定額音楽ストリーミング。国内アーティストを中心に豊富なラジオチャンネルを配信。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "KKBOX Japan",
    "url": "https://www.kkbox.com/jp",
    "desc": "アジア圏の音楽に強いストリーミングサービス。台湾発で邦楽・K-POPのラインナップが充実。",
    "tags": ["邦楽特化・歌詞", "音楽ストリーミング"]
  },
  {
    "title": "ORICON",
    "url": "https://www.oricon.co.jp",
    "desc": "邦楽チャートの代名詞。シングル・アルバムランキング、音楽ニュース、アーティスト情報を網羅。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "Billboard Japan",
    "url": "https://www.billboard-japan.com",
    "desc": "国内外の音楽チャートを掲載。Hot 100 Japan、Stream Chartなど複数のランキングを提供。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "ミュージックナタリー",
    "url": "https://natalie.mu/music",
    "desc": "邦楽アーティストのニュース・インタビュー・ライブレポートを中心に扱うカルチャーメディア。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "CDJournal",
    "url": "https://www.cdjournal.com",
    "desc": "CDレビュー・音楽情報誌のウェブ版。新譜情報・インタビュー・ランキングを幅広く掲載。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "TOWER RECORDS",
    "url": "https://tower.jp",
    "desc": "CD・LP・グッズを扱う老舗音楽ショップ。国内アーティストの新譜・限定盤に強くイベント情報も充実。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "HMV Japan",
    "url": "https://www.hmv.co.jp",
    "desc": "CD・Blu-ray・グッズを扱うエンターテインメント通販。試聴サービスとレビューが充実。",
    "tags": ["邦楽特化・歌詞"]
  },
  {
    "title": "disk union",
    "url": "https://diskunion.net",
    "desc": "レコード・CDの新品・中古専門店。ジャズ・ロック・邦楽など幅広いジャンルの希少盤も豊富。",
    "tags": ["邦楽特化・歌詞"]
  }
];
export default links;
