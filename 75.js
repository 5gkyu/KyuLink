const links = [
  {
    "title": "Google マップ",
    "url": "https://www.google.co.jp/maps/",
    "desc": "【地図・ナビ】世界最大級の地図サービス。ストリートビュー・経路検索・交通情報・店舗情報など多機能。リアルタイム渋滞表示にも対応。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "Yahoo!カーナビ",
    "url": "https://carnavi.yahoo.co.jp/",
    "desc": "【地図・ナビ】無料で使える本格カーナビアプリ。VICS渋滞情報対応でリアルタイムなルート案内を提供。",
    "tags": ["地図・ナビ", "交通・乗り換え"]
  },
  {
    "title": "Yahoo! MAP",
    "url": "https://map.yahoo.co.jp/",
    "desc": "【地図・ナビ】Yahoo! JAPANの地図サービス。混雑レーダー・雨雲レーダーの重ね表示など独自機能が充実。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "MapFan",
    "url": "https://mapfan.com/",
    "desc": "【地図・ナビ】インクリメントP提供の地図サイト。住所検索・ルート検索のほか法人向け地図APIも提供。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "国土地理院地図（地理院タイル）",
    "url": "https://maps.gsi.go.jp/",
    "desc": "【地図・ナビ】国土交通省国土地理院の公式地図。標高・地形図・空中写真・災害情報など正確な地理空間情報を提供。",
    "tags": ["地図・ナビ", "統計・データ"]
  },
  {
    "title": "NAVITIME",
    "url": "https://www.navitime.co.jp/",
    "desc": "【地図・ナビ】電車・バス・車・徒歩のマルチモーダルナビゲーション。ドアtoドアのルート検索に強い。",
    "tags": ["地図・ナビ", "交通・乗り換え"]
  },
  {
    "title": "Mapion（マピオン）",
    "url": "https://www.mapion.co.jp/",
    "desc": "【地図・ナビ】住所・駅・施設名から検索できる地図サービス。天気情報や周辺スポット検索も統合。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "いつもNAVI",
    "url": "https://www.its-mo.com/",
    "desc": "【地図・ナビ】ゼンリンの詳細地図データを使った地図サービス。建物の形状や一方通行まで詳細に表示。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "OpenStreetMap",
    "url": "https://www.openstreetmap.org/",
    "desc": "【地図・ナビ】誰でも編集できるオープンソースの世界地図プロジェクト。自由に利用・再配布でき、多くのアプリの基盤に使われている。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "Googleストリートビュー",
    "url": "https://www.google.co.jp/streetview/",
    "desc": "【地図・ナビ】360度パノラマ写真で世界中の街並みを疑似散歩できるサービス。旅行の下見や不動産確認にも便利。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "ゼンリン住宅地図",
    "url": "https://www.zenrin.co.jp/",
    "desc": "【地図・ナビ】日本最大の地図メーカー。建物名・居住者名入りの詳細住宅地図を提供。法人向けサービスが充実。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "今昔マップ on the web",
    "url": "https://ktgis.net/kjmapw/",
    "desc": "【地図・ナビ】明治〜現代の新旧地図を並べて比較できるWebサービス。地形の変遷や都市開発の歴史を視覚的に確認可能。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "Windy.com（地図表示）",
    "url": "https://www.windy.com/",
    "desc": "【地図・ナビ】風・気温・降水量などの気象情報を地図上にビジュアル表示。アウトドアや旅行前の気象確認に便利。",
    "tags": ["地図・ナビ", "天気・気象"]
  },
  {
    "title": "Leaflet",
    "url": "https://leafletjs.com/",
    "desc": "【地図・ナビ】軽量なオープンソースJavaScript地図ライブラリ。開発者向けにインタラクティブ地図の組み込みを簡単にする。",
    "tags": ["地図・ナビ", "パッケージ・ライブラリ"]
  },
  {
    "title": "RESAS（地域経済分析システム）",
    "url": "https://resas.go.jp/",
    "desc": "【地図・ナビ】内閣府の地域経済可視化ツール。人口動態・産業構造・観光データなどを地図ベースで分析できる。",
    "tags": ["地図・ナビ", "統計・データ"]
  },
  {
    "title": "ハザードマップポータルサイト",
    "url": "https://disaportal.gsi.go.jp/",
    "desc": "【地図・ナビ】国土交通省運営。洪水・土砂災害・津波・高潮のハザードマップを地図上で重ね合わせて確認できる防災ツール。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "地図で見る統計（jSTAT MAP）",
    "url": "https://jstatmap.e-stat.go.jp/",
    "desc": "【地図・ナビ】政府統計の総合窓口e-Statの地図版。国勢調査や事業所統計などのデータを地図上に可視化して分析。",
    "tags": ["地図・ナビ", "統計・データ"]
  },
  {
    "title": "Geospatial Information Authority（英語版地理院）",
    "url": "https://www.gsi.go.jp/ENGLISH/",
    "desc": "【地図・ナビ】国土地理院の英語サイト。日本の測量・地図・地理空間情報に関する英語の公式情報を提供。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "Apple マップ（Web版）",
    "url": "https://beta.maps.apple.com/",
    "desc": "【地図・ナビ】AppleのマップサービスWeb版。Look Around（ストリートビュー相当）やガイド機能を搭載。",
    "tags": ["地図・ナビ"]
  },
  {
    "title": "Bing Maps",
    "url": "https://www.bing.com/maps/",
    "desc": "【地図・ナビ】Microsoft提供の地図サービス。道路地図・航空写真・鳥瞰図表示に対応。トラフィック情報もリアルタイム表示。",
    "tags": ["地図・ナビ"]
  }
];
export default links;
