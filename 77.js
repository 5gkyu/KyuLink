const links = [
  {
    "title": "tenki.jp",
    "url": "https://tenki.jp/",
    "desc": "【天気・気象】日本気象協会公式の天気予報サイト。10日間予報・1時間天気・雨雲レーダー・花粉・PM2.5情報など生活に密着した気象情報を網羅。",
    "tags": ["天気・気象"]
  },
  {
    "title": "気象庁",
    "url": "https://www.jma.go.jp/",
    "desc": "【天気・気象】日本の気象行政を担う政府機関の公式サイト。天気予報・警報注意報・地震津波情報・過去の気象データなど一次情報を提供。",
    "tags": ["天気・気象"]
  },
  {
    "title": "ウェザーニュース",
    "url": "https://weathernews.jp/",
    "desc": "【天気・気象】世界最大級の民間気象情報会社。独自の観測網と1kmメッシュ予報で高精度な天気予報を提供。ライブ配信番組も人気。",
    "tags": ["天気・気象"]
  },
  {
    "title": "Windy.com",
    "url": "https://www.windy.com/",
    "desc": "【天気・気象】風・気温・雲・降水量などをインタラクティブなアニメーション地図で可視化。複数の気象モデル（ECMWF・GFSなど）を切り替え比較できる。",
    "tags": ["天気・気象", "地図・ナビ"]
  },
  {
    "title": "Yahoo!天気・災害",
    "url": "https://weather.yahoo.co.jp/",
    "desc": "【天気・気象】Yahoo! JAPANの天気予報サービス。雨雲レーダー・台風情報・地震情報・避難情報をまとめて確認できる。",
    "tags": ["天気・気象"]
  },
  {
    "title": "気象庁 雨雲の動き（高解像度降水ナウキャスト）",
    "url": "https://www.jma.go.jp/bosai/nowc/",
    "desc": "【天気・気象】気象庁の高解像度レーダー。250mメッシュで降水の実況と60分先までの予測を地図表示。ゲリラ豪雨の把握に便利。",
    "tags": ["天気・気象"]
  },
  {
    "title": "SCW天気予報（GPV気象予報）",
    "url": "https://supercweather.com/",
    "desc": "【天気・気象】気象数値予報モデルの結果を詳細に可視化するサイト。雲量・降水・気温・風の予報図を時刻別に確認できる。",
    "tags": ["天気・気象"]
  },
  {
    "title": "雨雲レーダー（tenki.jp）",
    "url": "https://tenki.jp/radar/",
    "desc": "【天気・気象】tenki.jpの雨雲レーダーページ。過去の雨雲の動きと6時間先までの予測をアニメーション表示。",
    "tags": ["天気・気象"]
  },
  {
    "title": "NHK あなたの天気・防災",
    "url": "https://www.nhk.or.jp/kishou-saigai/",
    "desc": "【天気・気象】NHK公式の気象・防災情報サイト。地域を設定すると天気予報・警報・ハザードマップをまとめて確認できる。",
    "tags": ["天気・気象"]
  },
  {
    "title": "気象庁 過去の気象データ検索",
    "url": "https://www.data.jma.go.jp/obd/stats/etrn/",
    "desc": "【天気・気象】全国のアメダス・気象台の過去の観測データ（気温・降水量・風速など）を検索・ダウンロードできる公式サービス。",
    "tags": ["天気・気象", "統計・データ"]
  },
  {
    "title": "AccuWeather（日本語）",
    "url": "https://www.accuweather.com/ja/jp",
    "desc": "【天気・気象】米国大手気象サービスの日本語版。MinuteCast（分単位降水予報）やRealFeel温度など独自指標を提供。",
    "tags": ["天気・気象"]
  },
  {
    "title": "Weather.com（The Weather Channel）",
    "url": "https://weather.com/ja-JP",
    "desc": "【天気・気象】世界的な気象メディアThe Weather Channelの日本語版。時間ごと・10日間予報・レーダーマップを提供。",
    "tags": ["天気・気象"]
  },
  {
    "title": "気象庁 台風情報",
    "url": "https://www.jma.go.jp/bosai/map.html#contents=typhoon",
    "desc": "【天気・気象】台風の現在位置・進路予想・暴風域を地図で確認できる気象庁公式ページ。過去の台風経路データも閲覧可能。",
    "tags": ["天気・気象"]
  },
  {
    "title": "気象庁 地震情報",
    "url": "https://www.jma.go.jp/bosai/map.html#contents=earthquake_map",
    "desc": "【天気・気象】最新の地震情報・震度分布・津波警報などを地図上で確認できる気象庁公式ページ。",
    "tags": ["天気・気象"]
  },
  {
    "title": "earth :: 地球の風",
    "url": "https://earth.nullschool.net/jp/",
    "desc": "【天気・気象】地球全体の風・気温・海流・大気の動きを美しいアニメーションで可視化するサイト。教育目的にも最適。",
    "tags": ["天気・気象"]
  },
  {
    "title": "XRAINリアルタイム雨量",
    "url": "https://www.river.go.jp/kawabou/mb/rd/xrain/",
    "desc": "【天気・気象】国土交通省の高精度レーダー雨量情報。従来より高密度・高頻度の降水観測データをリアルタイムで表示。",
    "tags": ["天気・気象"]
  },
  {
    "title": "川の防災情報",
    "url": "https://www.river.go.jp/",
    "desc": "【天気・気象】国土交通省の河川情報サイト。河川の水位・雨量・ダム放流量・洪水予報をリアルタイムで確認できる。",
    "tags": ["天気・気象"]
  },
  {
    "title": "OpenWeatherMap",
    "url": "https://openweathermap.org/",
    "desc": "【天気・気象】無料の気象APIを提供するサービス。開発者向けに現在の天気・予報・過去データをJSON形式で取得できる。",
    "tags": ["天気・気象", "API・外部サービス"]
  },
  {
    "title": "桜開花予想（ウェザーマップ）",
    "url": "https://sakura.weathermap.jp/",
    "desc": "【天気・気象】気象予報士が作成する桜の開花・満開予想。全国の桜名所ごとの予想日をマップで確認できる。",
    "tags": ["天気・気象"]
  },
  {
    "title": "花粉情報（tenki.jp）",
    "url": "https://tenki.jp/pollen/",
    "desc": "【天気・気象】スギ・ヒノキ花粉の飛散予測。都道府県別の飛散量マップや週間予想で花粉症対策を支援。",
    "tags": ["天気・気象", "健康・医療情報"]
  },
  {
    "title": "紫外線情報（気象庁）",
    "url": "https://www.data.jma.go.jp/gmd/env/uvindex/",
    "desc": "【天気・気象】気象庁のUVインデックス予報。時間帯別の紫外線の強さを地域ごとに確認でき、日焼け対策の参考になる。",
    "tags": ["天気・気象"]
  },
  {
    "title": "熱中症予防情報サイト（環境省）",
    "url": "https://www.wbgt.env.go.jp/",
    "desc": "【天気・気象】環境省の暑さ指数（WBGT）情報サイト。全国の観測地点ごとの熱中症危険度をリアルタイム・予報で表示。",
    "tags": ["天気・気象", "健康・医療情報"]
  },
  {
    "title": "Ventusky",
    "url": "https://www.ventusky.com/",
    "desc": "【天気・気象】気象データをインタラクティブな地図アニメーションで表示するサービス。Windyに似た操作感で風・気温・降水を可視化。",
    "tags": ["天気・気象"]
  },
  {
    "title": "Zoom Earth",
    "url": "https://zoom.earth/",
    "desc": "【天気・気象】衛星画像をほぼリアルタイムで閲覧できるサービス。台風や大規模な気象現象を衛星視点で追跡可能。",
    "tags": ["天気・気象"]
  }
];
export default links;
