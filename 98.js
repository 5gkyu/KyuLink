const links = [
  {
    "title": "radiko（ラジコ）",
    "url": "https://radiko.jp/",
    "desc": "【ラジオ・ポッドキャスト】民放ラジオ・NHKラジオをインターネットで聴けるサービス。タイムフリーで過去1週間の番組も聴取可能。プレミアム会員で全国局対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "NHKラジオ らじる★らじる",
    "url": "https://www.nhk.or.jp/radio/",
    "desc": "【ラジオ・ポッドキャスト】NHKラジオ第1・第2・FMをネット同時配信。聴き逃し配信で過去番組も聴ける。語学講座も対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Spotify Podcasts",
    "url": "https://podcasters.spotify.com/",
    "desc": "【ラジオ・ポッドキャスト】Spotifyのポッドキャスト配信・視聴プラットフォーム。世界最大級のポッドキャスト数。無料で視聴可能。",
    "tags": ["ラジオ・ポッドキャスト", "音楽ストリーミング"]
  },
  {
    "title": "Apple Podcasts",
    "url": "https://www.apple.com/jp/apple-podcasts/",
    "desc": "【ラジオ・ポッドキャスト】Apple公式のポッドキャストアプリ・ディレクトリ。iPhone/Mac標準搭載。有料サブスクリプション番組にも対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Google Podcasts（YouTube Music移行）",
    "url": "https://music.youtube.com/podcasts",
    "desc": "【ラジオ・ポッドキャスト】Google PodcastsはYouTube Musicに統合。ポッドキャストをYouTube Music内で検索・視聴できる。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Voicy（ボイシー）",
    "url": "https://voicy.jp/",
    "desc": "【ラジオ・ポッドキャスト】国産の音声プラットフォーム。ビジネス・教養系パーソナリティが多数。審査制で質の高い番組が特徴。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "stand.fm",
    "url": "https://stand.fm/",
    "desc": "【ラジオ・ポッドキャスト】誰でも手軽に音声配信できる国産アプリ。ライブ配信・レター機能・収益化にも対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Radiotalk",
    "url": "https://radiotalk.jp/",
    "desc": "【ラジオ・ポッドキャスト】12分以内のトーク番組を手軽に収録・配信できるサービス。ギフト機能で収益化も可能。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "LISTEN",
    "url": "https://listen.style/",
    "desc": "【ラジオ・ポッドキャスト】ポッドキャストの自動文字起こし＆ブログ化サービス。音声を聴きながらテキストも読める。RSSフィード対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "AuDee（オーディー）",
    "url": "https://audee.jp/",
    "desc": "【ラジオ・ポッドキャスト】TOKYO FMグループの音声配信プラットフォーム。ラジオ番組の限定コンテンツやオリジナル番組を配信。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Podcast Addict",
    "url": "https://podcastaddict.com/",
    "desc": "【ラジオ・ポッドキャスト】Android向け定番ポッドキャストアプリ。多機能で再生速度調整・スリープタイマー・OPML入出力に対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Overcast",
    "url": "https://overcast.fm/",
    "desc": "【ラジオ・ポッドキャスト】iOS向けの高品質ポッドキャストプレイヤー。Smart Speed・Voice Boost機能で快適な聴取体験。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Pocket Casts",
    "url": "https://pocketcasts.com/",
    "desc": "【ラジオ・ポッドキャスト】クロスプラットフォーム対応のポッドキャストアプリ。Web版もあり、複数デバイスで同期可能。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Amazon Music ポッドキャスト",
    "url": "https://music.amazon.co.jp/podcasts",
    "desc": "【ラジオ・ポッドキャスト】Amazon Musicで聴けるポッドキャスト。Prime会員なら追加料金なし。Alexa連携でスマートスピーカーからも再生可能。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Anchor by Spotify",
    "url": "https://podcasters.spotify.com/",
    "desc": "【ラジオ・ポッドキャスト】Spotify傘下の無料ポッドキャスト制作・配信ツール。録音から編集・各プラットフォームへの配信まで一括対応。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "ラジオクラウド",
    "url": "https://radiocloud.jp/",
    "desc": "【ラジオ・ポッドキャスト】TBSラジオなど在京局の番組をオンデマンド聴取できるアプリ。ラジオ番組の切り出しコンテンツが充実。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "超!A&G+",
    "url": "https://www.agqr.jp/",
    "desc": "【ラジオ・ポッドキャスト】文化放送のアニメ・ゲーム・声優専門インターネットラジオ。24時間配信。アニラジの定番。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "音泉",
    "url": "https://www.onsen.ag/",
    "desc": "【ラジオ・ポッドキャスト】アニメ・ゲーム・声優系のインターネットラジオ配信サイト。タブリエ・コミュニケーションズ運営。プレミアム会員で過去回も聴取可。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "響 - HiBiKi Radio Station",
    "url": "https://hibiki-radio.jp/",
    "desc": "【ラジオ・ポッドキャスト】ブシロード系列のアニメ・声優ラジオ配信サイト。動画付きラジオも多数。無料で視聴可能。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "ニッポン放送 Podcast Station",
    "url": "https://podcast.1242.com/",
    "desc": "【ラジオ・ポッドキャスト】ニッポン放送の公式ポッドキャスト。オールナイトニッポンなど人気番組のポッドキャスト版を配信。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "TBS Podcast",
    "url": "https://www.tbsradio.jp/podcast/",
    "desc": "【ラジオ・ポッドキャスト】TBSラジオの公式ポッドキャスト。JUNK・アフター6ジャンクションなど人気番組のポッドキャスト配信。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Podcastランキング",
    "url": "https://podcastranking.jp/",
    "desc": "【ラジオ・ポッドキャスト】日本のポッドキャストランキングサイト。Apple Podcasts / Spotifyの人気番組をカテゴリ別に確認できる。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "JAPAN PODCAST AWARDS",
    "url": "https://www.japanpodcastawards.com/",
    "desc": "【ラジオ・ポッドキャスト】日本のポッドキャストアワード公式サイト。年間の優秀ポッドキャストを選出。新番組発掘の参考に。",
    "tags": ["ラジオ・ポッドキャスト"]
  },
  {
    "title": "Spoon（スプーン）",
    "url": "https://www.spooncast.net/jp",
    "desc": "【ラジオ・ポッドキャスト】音声ライブ配信アプリ。LIVE/CAST/TALKの3形態で配信可能。リアルタイムのリスナー交流が特徴。",
    "tags": ["ラジオ・ポッドキャスト"]
  }
];
export default links;
