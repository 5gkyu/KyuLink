// 49 - ゲームプラットフォーム (24件)

const links = [

  // ── PCゲームプラットフォーム ────────────────────────────────────

  {
    "title": "Steam",
    "url": "https://store.steampowered.com",
    "desc": "【PCゲームプラットフォーム】世界最大のPCゲーム配信ストア。膨大なタイトル数と実績・フレンド機能を持つ。Valve運営。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Epic Games Store",
    "url": "https://store.epicgames.com",
    "desc": "【PCゲームプラットフォーム】Fortnite開発元Epicが運営するPCゲームストア。無料配布が定期的に行われることで知られる。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "GOG.com",
    "url": "https://www.gog.com",
    "desc": "【PCゲームプラットフォーム】DRMフリーのPCゲームストア。The Witcher開発元CD Projekt運営。レトロゲームも多数取り扱う。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "itch.io",
    "url": "https://itch.io",
    "desc": "【PCゲームプラットフォーム】インディーゲームに特化したダウンロード販売プラットフォーム。無料作品も豊富で開発者フレンドリー。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Humble Bundle",
    "url": "https://www.humblebundle.com",
    "desc": "【PCゲームプラットフォーム】バンドル販売形式のゲームストア。購入額の一部が慈善団体に寄付される仕組みが特徴。",
    "tags": ["ゲームプラットフォーム"]
  },

  // ── コンソールゲームプラットフォーム ────────────────────────────

  {
    "title": "Nintendo eShop",
    "url": "https://www.nintendo.com/jp/software/switch",
    "desc": "【コンソールゲームプラットフォーム】任天堂公式のダウンロード販売サイト。Nintendo Switch向けタイトルを網羅。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "PlayStation Store",
    "url": "https://store.playstation.com/ja-jp",
    "desc": "【コンソールゲームプラットフォーム】Sony公式のPS4/PS5向けゲーム・DLCダウンロードストア。定期セールも充実。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Xbox ゲームストア",
    "url": "https://www.xbox.com/ja-JP/microsoft-store",
    "desc": "【コンソールゲームプラットフォーム】Microsoft公式のXbox/PC向けゲームストア。Game Pass と連携しサブスク制も利用可能。",
    "tags": ["ゲームプラットフォーム"]
  },

  // ── ゲームサブスクリプション ─────────────────────────────────────

  {
    "title": "Xbox Game Pass",
    "url": "https://www.xbox.com/ja-JP/xbox-game-pass",
    "desc": "【ゲームサブスクリプション】月額制でXbox/PC向け数百タイトルが遊び放題。EA Play も含むUltimateプランが人気。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "PlayStation Plus",
    "url": "https://www.playstation.com/ja-jp/ps-plus",
    "desc": "【ゲームサブスクリプション】Sony公式のPS向けサブスク。Essential/Extra/Premiumの3段階でクラウドゲームやカタログにアクセス可能。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Nintendo Switch Online",
    "url": "https://www.nintendo.com/jp/hardware/switch/onlineservice",
    "desc": "【ゲームサブスクリプション】任天堂公式のオンラインサービス。ファミコン/スーファミ/64タイトルが遊び放題でオンライン対戦も可能。",
    "tags": ["ゲームプラットフォーム"]
  },

  // ── ゲーム情報・攻略 ─────────────────────────────────────────────

  {
    "title": "4Gamer.net",
    "url": "https://www.4gamer.net",
    "desc": "【ゲーム情報】国内最大級のゲーム専門メディア。新作情報・レビュー・攻略・e-Sports情報が充実。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Game*Spark",
    "url": "https://www.gamespark.jp",
    "desc": "【ゲーム情報】海外ゲームニュースを中心に速報・レビューを掲載するゲームメディア。洋ゲー情報に強い。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "電ファミニコゲーマー",
    "url": "https://news.denfaminicogamer.jp",
    "desc": "【ゲーム情報】ゲーム業界の深掘りインタビューや考察記事が充実した国内メディア。クリエイターへの長文取材が特徴。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "IGN Japan",
    "url": "https://jp.ign.com",
    "desc": "【ゲーム情報】世界的ゲームメディアIGNの日本版。海外最新情報の翻訳記事と独自レビューを掲載。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "GameFAQs",
    "url": "https://gamefaqs.gamespot.com",
    "desc": "【ゲーム攻略】ユーザー投稿型の攻略wiki・FAQ集。レトロゲームから最新作まで幅広いタイトルの攻略情報を収録。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Metacritic（ゲーム）",
    "url": "https://www.metacritic.com/game",
    "desc": "【ゲームレビュー集約】メディアスコアとユーザースコアを集約し、ゲームの総合評価を確認できるサイト。",
    "tags": ["ゲームプラットフォーム"]
  },

  // ── ゲームDB・実績管理 ───────────────────────────────────────────

  {
    "title": "How Long To Beat",
    "url": "https://howlongtobeat.com",
    "desc": "【ゲームDB】ゲームのクリアにかかる時間を調査できるサイト。メインストーリーと実績コンプリートの目安時間も確認可能。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "RAWG",
    "url": "https://rawg.io",
    "desc": "【ゲームDB】50万件以上のゲームを収録するデータベース。プレイ記録やウィッシュリスト管理もできる。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "IsThereAnyDeal",
    "url": "https://isthereanydeal.com",
    "desc": "【ゲームセール情報】Steamや各ストアのゲームセール・最安値を横断検索できる比較サイト。ウィッシュリスト連携機能あり。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "SteamDB",
    "url": "https://steamdb.info",
    "desc": "【ゲームDB】Steamゲームの価格推移・セール履歴・同時接続数などの統計情報を確認できる非公式ツール。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "ProtonDB",
    "url": "https://www.protondb.com",
    "desc": "【ゲームDB】LinuxおよびSteam DeckでのWindowsゲーム動作報告を集めたコミュニティサイト。Proton互換性を確認できる。",
    "tags": ["ゲームプラットフォーム"]
  },

  // ── ゲームストリーミング ─────────────────────────────────────────

  {
    "title": "NVIDIA GeForce NOW",
    "url": "https://www.nvidia.com/ja-jp/geforce-now",
    "desc": "【ゲームストリーミング】NVIDIAのクラウドゲームサービス。所有済みのSteam/Epic Gamesタイトルをクラウドでプレイ可能。",
    "tags": ["ゲームプラットフォーム"]
  },
  {
    "title": "Xbox Cloud Gaming",
    "url": "https://www.xbox.com/ja-JP/play",
    "desc": "【ゲームストリーミング】MicrosoftのGame Pass Ultimateに含まれるクラウドゲームサービス。ブラウザやスマホからプレイ可能。",
    "tags": ["ゲームプラットフォーム"]
  }

];

export default links;
