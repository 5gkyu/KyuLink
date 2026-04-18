const links = [
  {
    "title": "X（旧Twitter）",
    "url": "https://x.com",
    "desc": "【総合SNS】Elon Muskが買収後にTwitterから改名した短文投稿型SNS。テキスト・画像・動画の投稿、リポスト、スペース（音声配信）などを備える。リアルタイム情報拡散力が高く、国内の情報発信の中心的存在。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Instagram",
    "url": "https://www.instagram.com",
    "desc": "【総合SNS】Meta社が運営する写真・動画中心のSNS。フィード投稿・ストーリーズ・リールズ・ライブ配信など多様な投稿形式を持つ。ファッション・料理・旅行などビジュアル系コンテンツが集積している。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Facebook",
    "url": "https://www.facebook.com",
    "desc": "【総合SNS】Meta社が運営する世界最大規模のSNS。実名登録が基本で、グループ・マーケットプレイス・イベント機能を持つ。国内でのアクティブユーザーは減少傾向だが、ビジネス利用や地域コミュニティで現役。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Threads",
    "url": "https://www.threads.net",
    "desc": "【総合SNS】Meta社がXの競合として2023年にローンチしたテキストベースSNS。Instagramアカウントと連携して利用でき、ActivityPub（Fediverse）との相互接続にも対応する。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Bluesky",
    "url": "https://bsky.app",
    "desc": "【総合SNS】Jack Dorseyが立ち上げた分散型SNS。ATプロトコルを基盤に独自サーバー（PDS）の構築が可能。Twitterに近いUIとカスタムフィード機能を持ち、Twitter代替として急速にユーザーを集めている。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Mastodon（日本語公式）",
    "url": "https://joinmastodon.org/ja",
    "desc": "【総合SNS】ActivityPubを使った分散型オープンソースSNSのサーバー一覧・紹介サイト。自分に合ったインスタンス（サーバー）を選んで参加できる。Fediverse最大のプラットフォームの一つ。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Misskey.io",
    "url": "https://misskey.io",
    "desc": "【総合SNS】国産分散型SNS「Misskey」の代表的な大規模サーバー。リアクション・カスタム絵文字・ノートなど独自機能が豊富で、ActivityPubでFediverseとも相互接続できる。国内ユーザーに人気が高い。",
    "tags": ["総合SNS"]
  },
  {
    "title": "mixi2",
    "url": "https://mixi.social",
    "desc": "【総合SNS】mixiが2024年にリリースした新世代SNS。招待制からスタートしたクローズドな雰囲気を持ち、投稿・グループ・フォロー機能を備える。初代mixiの流れを汲むコミュニティ重視の設計。",
    "tags": ["総合SNS"]
  },
  {
    "title": "LinkedIn",
    "url": "https://www.linkedin.com",
    "desc": "【総合SNS】Microsoftが運営するビジネス特化型SNS。職歴・学歴・スキルのプロフィール管理、採用・転職情報の交換、業界ニュースの発信が中心。世界的なプロフェッショナルネットワークとして機能する。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Pinterest",
    "url": "https://www.pinterest.com",
    "desc": "【総合SNS】画像・動画のブックマーク（ピン）を「ボード」にまとめて共有するビジュアルSNS。デザイン・料理・インテリア・ファッションのインスピレーション収集に使われる。検索エンジン的な使われ方も多い。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Tumblr",
    "url": "https://www.tumblr.com",
    "desc": "【総合SNS】テキスト・画像・GIF・音楽など多形式に対応したマイクロブログ型SNS。自由度の高いカスタムテーマ、リブログ文化、アート・サブカル系コンテンツが集積している。",
    "tags": ["総合SNS"]
  },
  {
    "title": "note",
    "url": "https://note.com",
    "desc": "【総合SNS】テキスト・画像・音声・動画を使った記事を投稿できる国産クリエイタープラットフォーム。有料販売・マガジン購読・サークル機能を持ち、個人発信・マーケティングの場として広く使われる。",
    "tags": ["総合SNS", "ブログ・CMS"]
  },
  {
    "title": "はてなブックマーク",
    "url": "https://b.hatena.ne.jp",
    "desc": "【総合SNS】はてなが運営するソーシャルブックマークサービス。URLを登録するとコメントが集まり、話題のページがホットエントリーとしてランキング表示される。国内のテック・時事系のニュース集積地として機能する。",
    "tags": ["総合SNS", "ニュースアグリゲーター"]
  },
  {
    "title": "BeReal",
    "url": "https://bere.al",
    "desc": "【総合SNS】フランス発のSNS。1日1回、ランダムなタイミングで前後カメラの写真を同時撮影して共有するという独自コンセプトでZ世代に人気を集めた。「ありのまま」を重視した非加工文化が特徴。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Snapchat",
    "url": "https://www.snapchat.com",
    "desc": "【総合SNS】送信後に消えるメッセージ・ストーリーを特徴とする写真・動画SNS。ARレンズ・フィルター機能が豊富で、若年層を中心に利用される。スポットライト（ショートムービー）機能も持つ。",
    "tags": ["総合SNS"]
  },
  {
    "title": "VK",
    "url": "https://vk.com",
    "desc": "【総合SNS】ロシア最大のSNSプラットフォーム。投稿・グループ・メッセージ・音楽・動画など多機能を一体化しており、旧ソ連圏を中心に月間5億人以上が利用する。",
    "tags": ["総合SNS"]
  },
  {
    "title": "MeWe",
    "url": "https://mewe.com",
    "desc": "【総合SNS】プライバシー重視を掲げる広告なしのSNS。ターゲティング広告・データ販売を行わないポリシーが特徴で、Facebookの代替として一定の支持を集めている。",
    "tags": ["総合SNS"]
  },
  {
    "title": "Plurk",
    "url": "https://www.plurk.com",
    "desc": "【総合SNS】台湾を中心に東アジアで利用されるマイクロブログSNS。横スクロールのタイムライン表示や「カルマ」スコアシステムが独自。日台のクリエイターやオタク層に旧くからのファンが多い。",
    "tags": ["総合SNS"]
  }
];
export default links;
