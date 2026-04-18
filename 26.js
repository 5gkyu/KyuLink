const links = [
  {
    "title": "Spotify",
    "url": "https://open.spotify.com",
    "desc": "【音楽ストリーミング】世界最大級の音楽配信サービス。1億曲以上を無料（広告付き）またはPremiumで再生。パーソナライズされたプレイリストやポッドキャストも充実。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Apple Music",
    "url": "https://music.apple.com",
    "desc": "【音楽ストリーミング】Apple提供の音楽配信サービス。1億曲以上をロスレス・空間オーディオで配信。Apple製品との連携が強み。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Amazon Music Unlimited",
    "url": "https://music.amazon.co.jp",
    "desc": "【音楽ストリーミング】Amazonの音楽配信。Prime会員はAmazon Music Primeを追加料金なしで利用可。Unlimitedで1億曲HD/Ultra HD再生対応。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "YouTube Music",
    "url": "https://music.youtube.com",
    "desc": "【音楽ストリーミング】Google提供。公式音源に加え、YouTubeのライブ音源やカバーも聴ける独自の強み。YouTube Premiumに含まれる。",
    "tags": ["音楽ストリーミング", "動画配信（国内）"]
  },
  {
    "title": "LINE MUSIC",
    "url": "https://music.line.me",
    "desc": "【音楽ストリーミング】LINEと連携した国内サービス。LINEのBGMやプロフィール設定に楽曲を使える。邦楽に強く1億曲以上配信。",
    "tags": ["音楽ストリーミング", "邦楽特化・歌詞"]
  },
  {
    "title": "AWA",
    "url": "https://awa.fm",
    "desc": "【音楽ストリーミング】国産の音楽配信サービス。1億曲以上配信。ユーザー作成プレイリストのコミュニティ機能が特徴。無料プランあり。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Rakuten Music（楽天ミュージック）",
    "url": "https://music.rakuten.co.jp",
    "desc": "【音楽ストリーミング】楽天の音楽配信。1億曲以上。楽天ポイントが貯まる・使える。楽天モバイルユーザー向け割引あり。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "TOWER RECORDS MUSIC",
    "url": "https://music.tower.jp",
    "desc": "【音楽ストリーミング】タワレコの音楽配信。邦楽・洋楽1億曲以上。CDレンタル感覚のラインナップとスタッフセレクトが特徴。",
    "tags": ["音楽ストリーミング", "邦楽特化・歌詞"]
  },
  {
    "title": "KKBOX",
    "url": "https://www.kkbox.com/jp/ja",
    "desc": "【音楽ストリーミング】台湾発の音楽配信。アジア圏の楽曲に強く、K-POP・C-POP・J-POPが充実。リアルタイム歌詞表示対応。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Deezer",
    "url": "https://www.deezer.com",
    "desc": "【音楽ストリーミング】フランス発の世界的音楽配信。1億2000万曲以上。FLAC品質のHiFiプラン、SongCatcher（曲認識）機能あり。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "TIDAL",
    "url": "https://tidal.com",
    "desc": "【音楽ストリーミング】高音質に特化した音楽配信。Master品質（MQA）やDolby Atmosに対応。アーティストへの還元率の高さも特徴。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Qobuz",
    "url": "https://www.qobuz.com",
    "desc": "【音楽ストリーミング】フランス発の高音質ストリーミング。最大24bit/192kHzのハイレゾ配信。クラシック・ジャズのカタログが特に充実。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "SoundCloud",
    "url": "https://soundcloud.com",
    "desc": "【音楽ストリーミング】インディーアーティスト・クリエイター向けの音楽共有プラットフォーム。誰でもアップロード可能。リミックスやDJミックスも多数。",
    "tags": ["音楽ストリーミング", "音楽制作・DAW/DTM"]
  },
  {
    "title": "Bandcamp",
    "url": "https://bandcamp.com",
    "desc": "【音楽ストリーミング】アーティスト直販型の音楽プラットフォーム。楽曲のストリーミング試聴＆購入が可能。インディー音楽の宝庫。",
    "tags": ["音楽ストリーミング", "SoundCloud / Bandcamp"]
  },
  {
    "title": "Spotify for Artists",
    "url": "https://artists.spotify.com",
    "desc": "【音楽ストリーミング】Spotifyのアーティスト向けダッシュボード。再生数・リスナー統計の確認、プロフィール編集、楽曲ピッチが可能。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Apple Music for Artists",
    "url": "https://artists.apple.com",
    "desc": "【音楽ストリーミング】Apple Musicのアーティスト向け分析ツール。再生数・Shazam検索数・リスナー属性などの統計を確認できる。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Audiomack",
    "url": "https://audiomack.com",
    "desc": "【音楽ストリーミング】無料で音楽をアップロード・ストリーミングできるプラットフォーム。ヒップホップ・アフロビーツ・レゲエに強い。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Pandora",
    "url": "https://www.pandora.com",
    "desc": "【音楽ストリーミング】米国発のインターネットラジオ＆音楽ストリーミング。Music Genome Projectによるパーソナライズ選曲が特徴。米国中心。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "iHeartRadio",
    "url": "https://www.iheart.com",
    "desc": "【音楽ストリーミング】米国最大級のラジオ＆音楽ストリーミング。数千のライブラジオ局＋オンデマンド音楽・ポッドキャストを配信。",
    "tags": ["音楽ストリーミング", "ラジオ・ポッドキャスト"]
  },
  {
    "title": "Gaana",
    "url": "https://gaana.com",
    "desc": "【音楽ストリーミング】インド最大級の音楽配信。ボリウッド・インディポップ・各地域言語の楽曲を豊富に配信。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "JioSaavn",
    "url": "https://www.jiosaavn.com",
    "desc": "【音楽ストリーミング】インド発の音楽配信サービス。ヒンディー語・タミル語・パンジャブ語など多言語の楽曲を配信。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Anghami",
    "url": "https://www.anghami.com",
    "desc": "【音楽ストリーミング】中東・北アフリカ発の音楽配信。アラビア語楽曲のカタログが圧倒的。洋楽も含め1億曲以上。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Melon",
    "url": "https://www.melon.com",
    "desc": "【音楽ストリーミング】韓国最大の音楽配信サービス。K-POPチャートの基準として業界標準。韓国の音楽トレンドを知るならここ。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Bugs!",
    "url": "https://music.bugs.co.kr",
    "desc": "【音楽ストリーミング】韓国の音楽配信。FLAC高音質再生対応。K-POP・韓国インディーに強く、歌詞表示も充実。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Spotify Charts",
    "url": "https://charts.spotify.com",
    "desc": "【音楽ストリーミング】Spotifyの公式チャートサイト。世界各国のデイリー/ウィークリーランキング、バイラルチャートを確認できる。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "mora",
    "url": "https://mora.jp",
    "desc": "【音楽ストリーミング】ソニー系のハイレゾ音源配信。DSD・FLAC形式で高品質な音源をダウンロード購入できる。邦楽ハイレゾに強い。",
    "tags": ["音楽ストリーミング", "邦楽特化・歌詞"]
  },
  {
    "title": "e-onkyo music",
    "url": "https://www.e-onkyo.com/music/",
    "desc": "【音楽ストリーミング】国内老舗のハイレゾ音源ダウンロード販売。DSD 11.2MHzまで対応。クラシック・ジャズ・J-POPの高音質カタログ。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Spotify Web Player",
    "url": "https://open.spotify.com",
    "desc": "【音楽ストリーミング】Spotifyのブラウザ版プレーヤー。インストール不要でPC/スマホのブラウザから直接再生可能。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Last.fm",
    "url": "https://www.last.fm",
    "desc": "【音楽ストリーミング】音楽再生履歴（Scrobble）を記録・可視化するサービス。Spotify等と連携し、リスニング傾向の分析やレコメンドを提供。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "ListenBrainz",
    "url": "https://listenbrainz.org",
    "desc": "【音楽ストリーミング】MusicBrainz系列のオープンソース版Scrobbleサービス。再生履歴を記録し、統計やレコメンドを提供。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Songlink / Odesli",
    "url": "https://odesli.co",
    "desc": "【音楽ストリーミング】楽曲リンクを各ストリーミングサービス横断で変換。Spotify→Apple Music等のリンク共有に便利。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "TuneMyMusic",
    "url": "https://www.tunemymusic.com",
    "desc": "【音楽ストリーミング】プレイリストを異なるストリーミングサービス間で移行するツール。Spotify↔Apple Music↔YouTube Music等に対応。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Soundiiz",
    "url": "https://soundiiz.com",
    "desc": "【音楽ストリーミング】プレイリスト・お気に入りを各音楽サービス間で同期・移行。45以上のサービスに対応。自動同期機能もあり。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Shazam",
    "url": "https://www.shazam.com",
    "desc": "【音楽ストリーミング】楽曲認識サービス。周囲で流れている曲を数秒で特定。Apple Music連携でそのまま再生可能。Web版でも利用可。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "AudD",
    "url": "https://audd.io",
    "desc": "【音楽ストリーミング】音楽認識API。録音やハミングから楽曲を特定。開発者向けAPIとしても利用でき、アプリ組み込みに対応。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Apple Music リプレイ",
    "url": "https://replay.music.apple.com",
    "desc": "【音楽ストリーミング】Apple Musicの年間リスニング統計。よく聴いたアーティスト・楽曲・ジャンルをビジュアルで振り返れる。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Spotify Wrapped（年末まとめ）",
    "url": "https://www.spotify.com/wrapped/",
    "desc": "【音楽ストリーミング】Spotifyの年間リスニングまとめ。毎年12月に公開され、再生回数トップの楽曲やアーティストをシェアできる。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Rate Your Music",
    "url": "https://rateyourmusic.com",
    "desc": "【音楽ストリーミング】音楽レビュー・評価コミュニティ。アルバム・楽曲のユーザー評価とランキング。ジャンル分類が非常に細かい。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Album of the Year",
    "url": "https://www.albumoftheyear.org",
    "desc": "【音楽ストリーミング】音楽アルバムのレビュー集約サイト。メディア/ユーザー評価をスコア化。新譜情報や年間ベストの確認に便利。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Discogs",
    "url": "https://www.discogs.com",
    "desc": "【音楽ストリーミング】世界最大の音楽データベース＆マーケットプレイス。レコード・CDのカタログ管理と中古売買。リリース情報が詳細。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "MusicBrainz",
    "url": "https://musicbrainz.org",
    "desc": "【音楽ストリーミング】オープンソースの音楽メタデータベース。楽曲・アーティスト・リリース情報を網羅。音楽アプリのタグ情報源として広く利用。",
    "tags": ["音楽ストリーミング"]
  },
  {
    "title": "Genius",
    "url": "https://genius.com",
    "desc": "【音楽ストリーミング】歌詞＋注釈コミュニティ。歌詞の意味や背景をユーザーが解説。アーティスト本人の解説（Verified）もあり。",
    "tags": ["音楽ストリーミング", "邦楽特化・歌詞"]
  },
  {
    "title": "Musixmatch",
    "url": "https://www.musixmatch.com",
    "desc": "【音楽ストリーミング】世界最大の歌詞データベース。Spotify等と連携しリアルタイム歌詞を表示。翻訳歌詞もコミュニティが提供。",
    "tags": ["音楽ストリーミング", "邦楽特化・歌詞"]
  },
  {
    "title": "Setlist.fm",
    "url": "https://www.setlist.fm",
    "desc": "【音楽ストリーミング】ライブ・コンサートのセットリスト共有サイト。過去の公演で演奏された楽曲を検索・閲覧できる。",
    "tags": ["音楽ストリーミング", "ライブ・コンサート"]
  },
  {
    "title": "Songkick",
    "url": "https://www.songkick.com",
    "desc": "【音楽ストリーミング】ライブ・コンサート情報の検索。好きなアーティストの公演日程を追跡し、チケット発売時に通知を受け取れる。",
    "tags": ["音楽ストリーミング", "ライブ・コンサート"]
  },
  {
    "title": "Spotify Podcasts",
    "url": "https://podcasters.spotify.com",
    "desc": "【音楽ストリーミング】Spotifyのポッドキャスト配信プラットフォーム（旧Anchor）。録音・編集・配信を無料で行え、各サービスに自動配信。",
    "tags": ["音楽ストリーミング", "ラジオ・ポッドキャスト"]
  },
  {
    "title": "everynoise.com",
    "url": "https://everynoise.com",
    "desc": "【音楽ストリーミング】Spotifyデータに基づく音楽ジャンルマップ。6000以上のジャンルを可視化し、サンプル試聴で新しい音楽を発見できる。",
    "tags": ["音楽ストリーミング"]
  }
];
export default links;
