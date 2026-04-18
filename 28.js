const links = [
  {
    "title": "piapro（ピアプロ）",
    "url": "https://piapro.jp",
    "desc": "【ボカロ・UTAU】クリプトン公式の創作物共有プラットフォーム。ボカロ楽曲・イラスト・歌詞・3Dモデルを投稿・コラボできる。初音ミク等の二次創作ガイドラインも掲載。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "Kiite",
    "url": "https://kiite.jp",
    "desc": "【ボカロ・UTAU】ボカロ楽曲のレコメンド＆プレイリストサービス。ニコニコ動画の楽曲をAIが自動選曲。「Kiite Cafe」でリアルタイム共有視聴も可能。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "VocaDB",
    "url": "https://vocadb.net",
    "desc": "【ボカロ・UTAU】ボカロ楽曲の包括的データベース。楽曲・アーティスト・アルバム情報を網羅し、YouTube/ニコニコのPVリンクを横断検索できる。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "UtaiteDB",
    "url": "https://utaitedb.net",
    "desc": "【ボカロ・UTAU】歌ってみたアーティスト（歌い手）専門のデータベース。VocaDB姉妹サイトで、歌い手・楽曲・アルバムを体系的にカタログ化。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "TouhouDB",
    "url": "https://touhoudb.com",
    "desc": "【ボカロ・UTAU】東方Project楽曲のデータベース。VocaDB系列で、東方アレンジ楽曲・サークル・アルバム情報を網羅。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "初音ミク公式サイト",
    "url": "https://www.crypton.co.jp/miku",
    "desc": "【ボカロ・UTAU】クリプトン・フューチャー・メディアによる初音ミク公式。キャラクター情報・ライセンス・公式グッズ・イベント情報を掲載。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "VOCALOID公式サイト",
    "url": "https://www.vocaloid.com",
    "desc": "【ボカロ・UTAU】ヤマハのVOCALOID公式。最新のVOCALOID製品・ボイスバンク情報、チュートリアル、アップデート情報を提供。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "VOCALOID SHOP",
    "url": "https://www.vocaloid.com/shop/",
    "desc": "【ボカロ・UTAU】VOCALOID製品の公式オンラインショップ。ボイスバンク・エディタのダウンロード購入が可能。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "Synthesizer V 公式",
    "url": "https://dreamtonics.com/synthesizerv/",
    "desc": "【ボカロ・UTAU】Dreamtonics開発のAI歌声合成ソフト。自然な歌声生成が特徴。無料のBasicエディタと有料のStudioエディタを提供。",
    "tags": ["ボカロ・UTAU", "音声合成・TTS"]
  },
  {
    "title": "CeVIO公式サイト",
    "url": "https://cevio.jp",
    "desc": "【ボカロ・UTAU】CeVIO AI / CeVIO Creative Studio の公式。感情豊かなAI歌声合成＆トーク音声合成ソフト。さとうささら等の人気キャラクター。",
    "tags": ["ボカロ・UTAU", "音声合成・TTS"]
  },
  {
    "title": "NEUTRINO（ニュートリノ）",
    "url": "https://studio-neutrino.com",
    "desc": "【ボカロ・UTAU】無料のAI歌声合成ソフト。楽譜(MusicXML)を入力すると自然な歌声を生成。東北きりたん・MERROW等のモデルに対応。",
    "tags": ["ボカロ・UTAU", "音声合成・TTS"]
  },
  {
    "title": "UTAU公式サイト",
    "url": "http://utau2008.xrea.jp",
    "desc": "【ボカロ・UTAU】フリーの歌声合成ソフトUTAUの公式サイト。ユーザーが自作音源（音声ライブラリ）を作成・共有できる自由度の高さが魅力。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "OpenUtau",
    "url": "https://www.openutau.com",
    "desc": "【ボカロ・UTAU】オープンソースのUTAU互換エディタ。モダンなUIとクロスプラットフォーム対応。UTAU音源をそのまま利用可能。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "UTAU音源配布まとめ Wiki",
    "url": "https://w.atwiki.jp/utauuuta/",
    "desc": "【ボカロ・UTAU】UTAU用音声ライブラリの配布情報をまとめたWiki。キャラクター別に音源DLリンク・利用規約・サンプルを掲載。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "ニコニコ大百科「VOCALOID」",
    "url": "https://dic.nicovideo.jp/a/vocaloid",
    "desc": "【ボカロ・UTAU】ニコニコ大百科のVOCALOID記事。ボカロ文化の歴史・キャラクター・関連用語を網羅的に解説。関連リンクも充実。",
    "tags": ["ボカロ・UTAU", "百科事典・知識"]
  },
  {
    "title": "初音ミク Wiki",
    "url": "https://w.atwiki.jp/hmiku/",
    "desc": "【ボカロ・UTAU】VOCALOIDの楽曲・プロデューサー情報をまとめたWiki。新曲情報、殿堂入り楽曲、ボカロP一覧など膨大なデータを蓄積。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "ボカロPまとめ Wiki",
    "url": "https://w.atwiki.jp/vocaloidp/",
    "desc": "【ボカロ・UTAU】ボカロP（プロデューサー）の情報をまとめたWiki。各ボカロPの代表曲・活動履歴・SNSリンクなどを掲載。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "Vocawall",
    "url": "https://vocawall.com",
    "desc": "【ボカロ・UTAU】ボカロファン向けの壁紙・ファンアート共有サイト。イラストレーターによるハイクオリティなボカロ壁紙が多数。",
    "tags": ["ボカロ・UTAU", "イラスト・アート投稿"]
  },
  {
    "title": "KARENT",
    "url": "https://karent.jp",
    "desc": "【ボカロ・UTAU】クリプトン運営のボカロ楽曲配信レーベル。各種ストリーミングサービスへのボカロ楽曲配信を行い、公式アルバムも販売。",
    "tags": ["ボカロ・UTAU", "音楽ストリーミング"]
  },
  {
    "title": "The VOCALOID Collection（ボカコレ）",
    "url": "https://vocaloid-collection.jp",
    "desc": "【ボカロ・UTAU】ニコニコ動画主催のボカロ楽曲投稿祭。年数回開催され、新曲ランキングやリスナー投票で盛り上がるボカロ界最大級のイベント。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "マジカルミライ公式",
    "url": "https://magicalmirai.com",
    "desc": "【ボカロ・UTAU】初音ミクの公式ライブ＆企画展イベント。毎年開催され、バーチャルライブとクリエイター展示を楽しめる。",
    "tags": ["ボカロ・UTAU", "ライブ・コンサート"]
  },
  {
    "title": "プロセカ公式（プロジェクトセカイ）",
    "url": "https://pjsekai.sega.jp",
    "desc": "【ボカロ・UTAU】セガのボカロ音楽ゲーム公式。初音ミクと各ユニットのオリジナルストーリー＆リズムゲーム。ボカロ名曲も多数収録。",
    "tags": ["ボカロ・UTAU", "スマホゲーム"]
  },
  {
    "title": "Mikufan.com",
    "url": "https://www.mikufan.com",
    "desc": "【ボカロ・UTAU】海外の初音ミク・ボカロファンサイト。英語圏向けのボカロニュース・イベント情報・レビューを掲載。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "VocaSphere",
    "url": "https://vocasphere.net",
    "desc": "【ボカロ・UTAU】英語圏のボカロニュース・レビューサイト。新曲レビュー、アルバム紹介、歌声合成ソフトの解説記事を掲載。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "BOOTH（ボカロ関連）",
    "url": "https://booth.pm/ja/search/ボカロ",
    "desc": "【ボカロ・UTAU】pixivの通販サイトBOOTHでボカロ関連商品を検索。同人CD・イラスト集・MMDモデル・グッズなどクリエイター直販品が豊富。",
    "tags": ["ボカロ・UTAU", "同人・コミック"]
  },
  {
    "title": "Songle（ソングル）",
    "url": "https://songle.jp",
    "desc": "【ボカロ・UTAU】産総研の楽曲解析プラットフォーム。ボカロ曲を中心に、サビ・コード・ビートなどを自動解析。Songle Syncで同期演出も可能。",
    "tags": ["ボカロ・UTAU", "音楽制作・DAW/DTM"]
  },
  {
    "title": "TextAlive",
    "url": "https://textalive.jp",
    "desc": "【ボカロ・UTAU】産総研のWeb上歌詞アニメーション作成サービス。ボカロ楽曲に合わせた歌詞演出を自動生成。プログラミングAPIも公開。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "Songrium（ソングリウム）",
    "url": "https://songrium.jp",
    "desc": "【ボカロ・UTAU】産総研の音楽視聴支援サービス。ボカロ楽曲を中心に、関連動画・派生作品をネットワーク可視化。新曲発見に便利。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "ニコニコ動画 VOCALOIDタグ",
    "url": "https://www.nicovideo.jp/tag/VOCALOID",
    "desc": "【ボカロ・UTAU】ニコニコ動画のVOCALOIDタグページ。ボカロ楽曲の新着・人気動画を一覧できる。ボカロ文化の発祥地。",
    "tags": ["ボカロ・UTAU", "動画配信（国内）"]
  },
  {
    "title": "ニコニコ動画 UTAUタグ",
    "url": "https://www.nicovideo.jp/tag/UTAU",
    "desc": "【ボカロ・UTAU】ニコニコ動画のUTAUタグページ。UTAUオリジナル曲・カバーの新着動画を一覧できる。",
    "tags": ["ボカロ・UTAU", "動画配信（国内）"]
  },
  {
    "title": "ACE Studio",
    "url": "https://www.ace-studio.timedomain.cn",
    "desc": "【ボカロ・UTAU】AI歌声合成ソフト。ディープラーニングベースで極めて自然な歌声を生成。日本語含む多言語対応。無料プランあり。",
    "tags": ["ボカロ・UTAU", "音楽生成AI"]
  },
  {
    "title": "VoiSona（ボイソナ）",
    "url": "https://voisona.com",
    "desc": "【ボカロ・UTAU】テクノスピーチが開発するAI歌声合成。知声(Chis-A)等のボイスを提供。無料トークエディタも利用可能。",
    "tags": ["ボカロ・UTAU", "音声合成・TTS"]
  },
  {
    "title": "VOICEPEAK",
    "url": "https://www.ah-soft.com/voice/peak/",
    "desc": "【ボカロ・UTAU】AHS販売の入力文字読み上げソフト。ナレーション・実況向けで商用利用可。自然な音声合成で動画制作にも人気。",
    "tags": ["ボカロ・UTAU", "音声合成・TTS"]
  },
  {
    "title": "VOICEVOX",
    "url": "https://voicevox.hiroshiba.jp",
    "desc": "【ボカロ・UTAU】無料で使える中品質テキスト読み上げソフト。ずんだもん・四国めたん等の人気キャラクター。解説動画やゲーム実況で広く利用。",
    "tags": ["ボカロ・UTAU", "音声合成・TTS"]
  },
  {
    "title": "MikuMikuDance（MMD）まとめ Wiki",
    "url": "https://w.atwiki.jp/vpvpwiki/",
    "desc": "【ボカロ・UTAU】3DCGアニメーションソフトMMDのまとめWiki。操作方法・モデル配布・エフェクト情報を掲載。ボカロMV制作の定番ツール。",
    "tags": ["ボカロ・UTAU", "3Dモデル・VR"]
  },
  {
    "title": "ボウロのうた Wiki",
    "url": "https://wikiwiki.jp/bou-row/",
    "desc": "【ボカロ・UTAU】ボカロ曲の歌詞・解釈をまとめたWiki。MVの考察や楽曲の世界観を深掘りするファンコミュニティ。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "週刊VOCALOIDとUTAUランキング",
    "url": "https://www.nicovideo.jp/mylist/37594460",
    "desc": "【ボカロ・UTAU】ニコニコ動画で毎週投稿されるボカロ・UTAU楽曲のランキング動画。新曲の注目度や再生数推移を把握できる。",
    "tags": ["ボカロ・UTAU"]
  },
  {
    "title": "ボカロ曲 人気ランキング（YouTube）",
    "url": "https://www.youtube.com/results?search_query=ボカロ+ランキング",
    "desc": "【ボカロ・UTAU】YouTubeでのボカロランキング検索。各種チャンネルが定期的に月間・年間ランキングを投稿している。",
    "tags": ["ボカロ・UTAU", "動画配信（国内）"]
  }
];
export default links;
