const links = [
  {
    "title": "Google Play",
    "url": "https://play.google.com/store/games",
    "desc": "【スマホゲーム】Androidスマートフォン・タブレット向けアプリ・ゲームの公式配信プラットフォーム。Google運営で世界最大規模のAndroidアプリストア。",
    "tags": ["スマホゲーム", "ゲームプラットフォーム"]
  },
  {
    "title": "App Store",
    "url": "https://apps.apple.com/jp/genre/ios-games/id6014",
    "desc": "【スマホゲーム】iPhone・iPad向けゲームアプリの公式配信プラットフォーム。Apple運営でiOSデバイス専用の公式アプリストア。",
    "tags": ["スマホゲーム", "ゲームプラットフォーム"]
  },
  {
    "title": "DMM GAMES",
    "url": "https://games.dmm.com/",
    "desc": "【スマホゲーム】PCブラウザ・スマートフォン向けゲームを配信するDMM運営のゲームプラットフォーム。美少女・育成系タイトルが多く、アダルト作品も展開。",
    "tags": ["スマホゲーム", "ゲームプラットフォーム", "ブラウザゲーム"]
  },
  {
    "title": "Cygames",
    "url": "https://www.cygames.co.jp/games/",
    "desc": "【スマホゲーム】グランブルーファンタジー・プリンセスコネクト等を開発するCygames公式サイト。自社タイトルの最新情報・リリース情報をまとめて確認できる。",
    "tags": ["スマホゲーム", "ゲームデベロッパー"]
  },
  {
    "title": "グランブルーファンタジー",
    "url": "https://granbluefantasy.jp/",
    "desc": "【スマホゲーム】Cygames開発のブラウザ・スマートフォン向けRPG。壮大なファンタジー世界を舞台にしたガチャ＋育成ゲームで国内最大規模のソシャゲの一つ。",
    "tags": ["スマホゲーム", "RPG"]
  },
  {
    "title": "プリンセスコネクト！Re:Dive",
    "url": "https://priconne-redive.jp/",
    "desc": "【スマホゲーム】Cygames開発のスマートフォン向けRPG。個性豊かな女性キャラクターとリアルタイムバトルが特徴のガチャ型育成RPG。",
    "tags": ["スマホゲーム", "RPG"]
  },
  {
    "title": "ウマ娘 プリティーダービー",
    "url": "https://umamusume.jp/",
    "desc": "【スマホゲーム】Cygames開発のスマートフォン向け育成シミュレーションゲーム。実在競走馬をモチーフにしたキャラクターを育成するゲームとして大ヒット。",
    "tags": ["スマホゲーム", "育成シミュレーション"]
  },
  {
    "title": "FGO（Fate/Grand Order）",
    "url": "https://www.fate-go.jp/",
    "desc": "【スマホゲーム】TYPE-MOON・DELiGHTWORKS開発のスマートフォン向けRPG。Fateシリーズを原案とした英霊召喚コマンドバトルゲーム。",
    "tags": ["スマホゲーム", "RPG"]
  },
  {
    "title": "モンスターストライク",
    "url": "https://www.monster-strike.com/",
    "desc": "【スマホゲーム】ミクシィ開発のスマートフォン向けアクションRPG。弾き合いのシンプルな操作で最大4人マルチプレイができる人気ソシャゲ。",
    "tags": ["スマホゲーム", "アクションRPG"]
  },
  {
    "title": "パズル＆ドラゴンズ",
    "url": "https://pad.gungho.jp/",
    "desc": "【スマホゲーム】ガンホー開発のスマートフォン向けパズルRPG。落ち物パズルとモンスター育成・バトルを組み合わせた先駆けの国民的ソシャゲ。",
    "tags": ["スマホゲーム", "パズルRPG"]
  },
  {
    "title": "荒野行動",
    "url": "https://knives.happyelements.co.jp/",
    "desc": "【スマホゲーム】NetEase開発のスマートフォン向けバトルロイヤルシューター。100人が島で戦うスマホ版バトルロイヤルゲームの先駆けとして国内でも大人気。",
    "tags": ["スマホゲーム", "シューター"]
  },
  {
    "title": "PUBG MOBILE",
    "url": "https://www.pubgmobile.com/ja-JP/home.html",
    "desc": "【スマホゲーム】Krafton開発のスマートフォン向けバトルロイヤルシューター。PC版PUBGをモバイルに完全移植した世界的タイトル。",
    "tags": ["スマホゲーム", "シューター"]
  },
  {
    "title": "Call of Duty: Mobile",
    "url": "https://www.callofduty.com/mobile",
    "desc": "【スマホゲーム】Activision開発のスマートフォン向けFPS。CoD人気キャラ・マップを収録したモバイル版で、バトルロイヤルモードも搭載。",
    "tags": ["スマホゲーム", "FPS"]
  },
  {
    "title": "原神",
    "url": "https://genshin.hoyoverse.com/ja/",
    "desc": "【スマホゲーム】miHoYo開発のスマートフォン・PC・PS4/5向けオープンワールドRPG。美麗グラフィックとガチャシステムを組み合わせた世界的大ヒット作品。",
    "tags": ["スマホゲーム", "RPG", "オープンワールド"]
  },
  {
    "title": "崩壊：スターレイル",
    "url": "https://hsr.hoyoverse.com/ja-jp/home",
    "desc": "【スマホゲーム】HoYoverse開発のスマートフォン・PC向けターン制RPG。原神の開発元による宇宙を旅するコマンドバトルRPG。",
    "tags": ["スマホゲーム", "RPG"]
  },
  {
    "title": "ゼンレスゾーンゼロ",
    "url": "https://zenless.hoyoverse.com/ja-jp/",
    "desc": "【スマホゲーム】HoYoverse開発のスマートフォン・PC向けアクションRPG。都市型世界を舞台にしたスタイリッシュアクションゲーム。",
    "tags": ["スマホゲーム", "アクションRPG"]
  },
  {
    "title": "ブルーアーカイブ",
    "url": "https://bluearchive.jp/",
    "desc": "【スマホゲーム】Nexon Games開発のスマートフォン向けRPG。学園都市を舞台にした美少女キャラクターとTPS風バトルが特徴のガチャゲーム。",
    "tags": ["スマホゲーム", "RPG"]
  },
  {
    "title": "アークナイツ",
    "url": "https://ak.hypergryph.com/",
    "desc": "【スマホゲーム】Hypergryph開発のスマートフォン向けタワーディフェンスRPG。深いストーリーと戦略性の高いバトルが特徴で世界的に人気のガチャゲーム。",
    "tags": ["スマホゲーム", "タワーディフェンス"]
  },
  {
    "title": "マジックザギャザリング アリーナ（MTG Arena）",
    "url": "https://magic.wizards.com/ja/mtgarena",
    "desc": "【スマホゲーム】Wizards of the Coast開発のデジタルカードゲーム。世界最古のTCGであるMTGをデジタル化したPC・スマホ向け対戦ゲーム。",
    "tags": ["スマホゲーム", "カードゲーム"]
  },
  {
    "title": "マスターデュエル（遊戯王）",
    "url": "https://www.konami.com/yugioh/masterduel/ja/",
    "desc": "【スマホゲーム】コナミ開発の遊戯王OCGデジタル版カードゲーム。本家OCGのルールを再現したスマホ・PC・コンソール向けデジタルカードゲーム。",
    "tags": ["スマホゲーム", "カードゲーム"]
  },
  {
    "title": "シャドウバース",
    "url": "https://shadowverse.jp/",
    "desc": "【スマホゲーム】Cygames開発のスマートフォン向けデジタルカードゲーム。美麗アニメ調のキャラクターとe-sportsとしての競技性を持つTCG。",
    "tags": ["スマホゲーム", "カードゲーム"]
  },
  {
    "title": "ドラゴンクエストウォーク",
    "url": "https://www.dqwalk.jp/",
    "desc": "【スマホゲーム】スクウェア・エニックス・コロプラ共同開発の位置情報RPG。現実の地図と連動してドラクエの世界を歩き回れるスマートフォン向けRPG。",
    "tags": ["スマホゲーム", "位置情報ゲーム", "RPG"]
  },
  {
    "title": "ポケモンGO",
    "url": "https://pokemongolive.com/ja/",
    "desc": "【スマホゲーム】Niantic開発のスマートフォン向け位置情報ゲーム。現実世界でポケモンを捕まえる体験ができる世界的大ヒット位置情報ARゲーム。",
    "tags": ["スマホゲーム", "位置情報ゲーム"]
  },
  {
    "title": "Clash of Clans",
    "url": "https://clashofclans.com/ja",
    "desc": "【スマホゲーム】Supercell開発のスマートフォン向け村建設・クラン対戦ストラテジーゲーム。世界中でロングランヒットを続ける定番モバイルストラテジー。",
    "tags": ["スマホゲーム", "ストラテジー"]
  }
];
export default links;
