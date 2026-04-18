const links = [
  {
    "name": "DOVA-SYNDROME",
    "url": "https://dova-s.jp/",
    "desc": "完全無料のBGM・効果音素材サイト。商用利用可、クレジット不要の楽曲・SEを多数配布。ゲーム・動画制作に広く利用される。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "効果音ラボ",
    "url": "https://soundeffect-lab.info/",
    "desc": "無料の効果音素材サイト。自然音・環境音・人の声など多ジャンルのSEを配布。商用・個人利用ともに無料。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "魔王魂",
    "url": "https://maoudamashii.jokersounds.com/",
    "desc": "無料のBGM・効果音素材サイト。ゲーム・動画向けの楽曲やSEを豊富に配布。個人・商用問わず無料で使用可能。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Freesound",
    "url": "https://freesound.org/",
    "desc": "世界最大級のクリエイティブ・コモンズ効果音コミュニティ。50万件以上のSEをユーザーが投稿・共有。ライセンスを確認して使用。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Zapsplat",
    "url": "https://www.zapsplat.com/",
    "desc": "15万件以上の無料効果音・BGMを提供する大規模サイト。無料会員登録でダウンロード可能。商用利用可のロイヤリティフリー素材。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "OtoLogic",
    "url": "https://otologic.jp/",
    "desc": "無料BGM・効果音素材サイト。動画・ゲーム向けの音楽・SEをCC BY 4.0またはCC0で配布。クオリティの高い素材が揃う。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "音楽の卵",
    "url": "https://ontama-m.com/",
    "desc": "無料BGM素材サイト。ゲーム・動画・商用利用可能な楽曲を配布。クレジット表記なしで使用できる素材も多数。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "フリーBGM DOVA",
    "url": "https://dova-s.jp/bgm/",
    "desc": "DOVA-SYNDROMEのBGM専用ページ。ジャンル・雰囲気・楽器編成等で絞り込み検索が可能。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "soundsnap",
    "url": "https://www.soundsnap.com/",
    "desc": "30万件以上の効果音を収録したロイヤリティフリー音源サービス。一部無料、フルアクセスはサブスクリプション制。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "BBC Sound Effects",
    "url": "https://sound-effects.bbcrewind.co.uk/",
    "desc": "BBC公式の効果音ライブラリ。1万6千件以上のSEを個人・研究・教育目的で非商用利用可。BBC RemArc Licenseに準拠。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Free Music Archive",
    "url": "https://freemusicarchive.org/",
    "desc": "ライセンス明示のフリー音楽アーカイブ。CC BY・CC0など多様なライセンスの楽曲を検索・ダウンロード可能。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "ccMixter",
    "url": "https://ccmixter.org/",
    "desc": "クリエイティブ・コモンズ音楽のコミュニティ。トラック・ア・カペラ・サンプルなどをリミックス・ダウンロード可能。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "incompetech",
    "url": "https://incompetech.com/music/royalty-free/",
    "desc": "作曲家Kevin MacLeodによるロイヤリティフリーBGM集。CC BY 4.0でクレジット表記のみで商用利用可。膨大なジャンル数。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "YouTube Audio Library",
    "url": "https://www.youtube.com/audiolibrary",
    "desc": "YouTube公式のフリーBGM・効果音ライブラリ。YouTube動画での使用に最適化。クレジット不要の素材も多数収録。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Pixabay Music",
    "url": "https://pixabay.com/music/",
    "desc": "Pixabayの音楽・効果音カテゴリ。商用利用可、帰属表示不要のロイヤリティフリー楽曲をダウンロード可能。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Mixkit",
    "url": "https://mixkit.co/free-sound-effects/",
    "desc": "高品質な無料効果音・音楽を提供するEnvato運営サービス。商用利用可のMixkit Sound Effects Free Licenseで配布。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "SoundBible",
    "url": "https://soundbible.com/",
    "desc": "無料の効果音・サウンドクリップのアーカイブ。CC・パブリックドメインのSEをMP3・WAV形式で配布。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "効果音辞典",
    "url": "https://sounddictionary.info/",
    "desc": "日本語対応の効果音素材サイト。カテゴリ別に整理されたSEを無料配布。商用利用可のライセンス付き素材も収録。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "無料効果音で遊ぼう！",
    "url": "https://taira-komori.jpn.org/",
    "desc": "個人運営の無料効果音素材サイト。日常音・環境音・体の音など独自ジャンルのSEを豊富に配布。商用利用も無料。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "甘茶の音楽工房",
    "url": "https://amachamusic.chagasi.com/",
    "desc": "無料BGM素材サイト。ポップ・ジャズ・クラシック系の楽曲を配布。商用・非商用問わず無料、クレジット不要。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "H/MIX GALLERY",
    "url": "https://www.hmix.net/",
    "desc": "無料BGM配布サイト。多ジャンルの楽曲を収録。商用・非商用ともに無料で利用可能。定期的に新曲が追加される。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "フリーBGM・音楽素材MusMus",
    "url": "https://musmus.main.jp/",
    "desc": "無料BGM・音楽素材サイト。ゲーム・動画・商用利用もOK。クレジット表記なしで利用できる楽曲を多数提供。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Bensound",
    "url": "https://www.bensound.com/",
    "desc": "クリエイティブ・コモンズのロイヤリティフリーBGMサイト。動画・ポッドキャスト・スライド用に最適。クレジット表記で無料利用可。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Audionautix",
    "url": "https://audionautix.com/",
    "desc": "CC BY 4.0ライセンスの無料音楽素材サイト。テンポ・気分・ジャンルで絞り込み検索が可能。商用利用可。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "SoundsCrate",
    "url": "https://sfx.producer.io/",
    "desc": "プロデューサー向けの無料効果音・サンプル素材サービス。ヒップホップ・EDM系のサンプルやSFXを配布。",
    "tags": ["フリー素材（音声・効果音）"]
  },
  {
    "name": "Looperman",
    "url": "https://www.looperman.com/",
    "desc": "ループ素材・アカペラ・サンプルを共有するコミュニティ。ユーザー投稿のロイヤリティフリー音楽素材を無料でダウンロード可能。",
    "tags": ["フリー素材（音声・効果音）"]
  }
];
export default links;
