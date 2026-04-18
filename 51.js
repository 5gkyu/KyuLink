const links = [
  {
    "title": "Liquipedia",
    "url": "https://liquipedia.net/",
    "desc": "【eスポーツ】世界最大級のeスポーツ情報wiki。CS2・LoL・Dota2・Valorant・R6Sなど多数タイトルの大会結果・選手・チーム情報を網羅。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "HLTV.org",
    "url": "https://www.hltv.org/",
    "desc": "【eスポーツ】CS2（旧CS:GO）専門の世界トップESportsメディア。ランキング・マッチ結果・デモ・統計を提供。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Challonge",
    "url": "https://challonge.com/",
    "desc": "【eスポーツ】トーナメントブラケット作成・管理サービス。アマチュアからコミュニティ大会まで幅広く利用されている。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Battlefy",
    "url": "https://battlefy.com/",
    "desc": "【eスポーツ】eスポーツトーナメントプラットフォーム。大会の作成・参加・観戦が一体化したサービス。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "ESL Gaming",
    "url": "https://www.eslgaming.com/",
    "desc": "【eスポーツ】世界最大規模のeスポーツ主催団体ESLの公式サイト。IEM・ESL Proリーグなど主要大会情報を掲載。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "FACEIT",
    "url": "https://www.faceit.com/",
    "desc": "【eスポーツ】CS2・LoLなどのオンライン競技マッチング・ランキングプラットフォーム。アンチチート環境でのラダーマッチを提供。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "op.gg",
    "url": "https://op.gg/",
    "desc": "【eスポーツ】League of Legends のプレイヤー統計・ランキング・チャンピオン分析サイト。世界中のソロランクデータを閲覧できる。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "u.gg",
    "url": "https://u.gg/",
    "desc": "【eスポーツ】LoL・Valorantなど向けのティアリスト・ビルド・メタ分析サービス。AIを活用したチャンピオン推奨機能あり。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "tracker.gg",
    "url": "https://tracker.gg/",
    "desc": "【eスポーツ】Valorant・Apex・Fortnite・CoD等多タイトル対応のプレイヤー統計・ランキングトラッカー。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Overwolf",
    "url": "https://www.overwolf.com/",
    "desc": "【eスポーツ】ゲーム内オーバーレイアプリプラットフォーム。リアルタイム統計・ビルドガイドなどのアプリを配信。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "VSPO公式サイト",
    "url": "https://vspo.jp/",
    "desc": "【eスポーツ】日本のeスポーツVtuberグループ「VSPO（ぶいすぽっ！）」公式サイト。メンバー情報・大会・グッズ情報を掲載。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "OPENREC.tv",
    "url": "https://www.openrec.tv/",
    "desc": "【eスポーツ】CyberZが運営する日本のゲーム・eスポーツ特化ライブ配信・動画プラットフォーム。国内大会の中継が充実。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "VALORANT 公式（日本）",
    "url": "https://playvalorant.com/ja-jp/",
    "desc": "【eスポーツ】Riotが開発・運営する5v5タクティカルシューターVALORANT公式サイト。パッチノート・大会情報・エージェント情報を掲載。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "VCT（Valorant Champions Tour）",
    "url": "https://valorantesports.com/",
    "desc": "【eスポーツ】Valorantの公式国際競技プログラム。VCT Pacific・Americas・EMEAの大会情報・スタンディングを確認できる。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "LoL Esports",
    "url": "https://lolesports.com/",
    "desc": "【eスポーツ】League of Legends公式esportsサイト。LCK・LEC・LCS・LJL等のリーグ情報・試合結果・VODを掲載。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "The Global Esports Federation",
    "url": "https://www.globalesports.org/",
    "desc": "【eスポーツ】eスポーツの国際競技団体。各国連盟・競技基準・選手資格等のeスポーツガバナンス情報を公開。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "JeSU（日本eスポーツ連合）",
    "url": "https://jesu.or.jp/",
    "desc": "【eスポーツ】日本のeスポーツ競技統括団体。プロライセンス・公認大会情報・選手登録制度を運営。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Esports Charts",
    "url": "https://escharts.com/",
    "desc": "【eスポーツ】eスポーツ大会の視聴者数・ピーク同接・配信統計を集計するデータサイト。各タイトル・大会の人気推移を閲覧できる。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Strafe Esports",
    "url": "https://strafe.com/",
    "desc": "【eスポーツ】eスポーツの試合スケジュール・結果・オッズを一覧表示するアグリゲーターサイト。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "PandaScore",
    "url": "https://pandascore.co/",
    "desc": "【eスポーツ】eスポーツのライブスコア・試合データ・予測APIを提供するプラットフォーム。開発者向けAPI公開。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Tonamel",
    "url": "https://tonamel.com/",
    "desc": "【eスポーツ】国内向けゲーム大会・オフ会の作成・参加管理サービス。アマチュア・コミュニティ大会に広く利用されている。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "smash.gg（start.gg）",
    "url": "https://www.start.gg/",
    "desc": "【eスポーツ】格闘ゲームを中心とした大会管理プラットフォーム。Smash Bros・ストリートファイター等の国内外トーナメントを掲載。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "Afreeca Freecs（DRX）",
    "url": "https://drx.gg/",
    "desc": "【eスポーツ】韓国発の総合eスポーツチームDRX公式サイト。LoL・Valorant等のチーム情報・試合結果を掲載。",
    "tags": ["eスポーツ"]
  },
  {
    "title": "ZETA DIVISION",
    "url": "https://zetadivision.com/",
    "desc": "【eスポーツ】日本拠点の総合eスポーツチーム。Valorant・CS2・Fortnite等に参戦し国際大会でも活躍。公式サイトで選手・試合情報を公開。",
    "tags": ["eスポーツ"]
  }
];
export default links;
