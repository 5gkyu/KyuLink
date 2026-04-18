const links = [
  {
    "title": "Google翻訳",
    "url": "https://translate.google.co.jp/",
    "desc": "【翻訳ツール】Googleが提供する世界最大規模の機械翻訳サービス。テキスト・ドキュメント・ウェブページの翻訳に対応し、100言語以上をサポート。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "DeepL翻訳",
    "url": "https://www.deepl.com/ja/translator",
    "desc": "【翻訳ツール】AIを活用した高精度翻訳サービス。欧州言語の品質が特に高く、ニュアンスや文脈を考慮した自然な訳文を生成する。無料プランあり。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Microsoft翻訳",
    "url": "https://www.bing.com/translator",
    "desc": "【翻訳ツール】MicrosoftのBing翻訳サービス。Edgeブラウザとの連携やOffice製品への組み込みによりWindows環境で使いやすい。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "みんなの自動翻訳@TexTra",
    "url": "https://mt-auto-minhon-mlt.ucri.jgss.go.jp/",
    "desc": "【翻訳ツール】国立研究開発法人情報通信研究機構（NICT）が提供する無料の機械翻訳サービス。日英・日中・日韓などの翻訳品質が高い。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Weblio テキスト翻訳",
    "url": "https://translate.weblio.jp/",
    "desc": "【翻訳ツール】Weblioが提供する翻訳サービス。辞書機能との連携により単語の詳細な意味や用例も同時に確認できる。",
    "tags": ["翻訳ツール", "辞書・国語"]
  },
  {
    "title": "excite翻訳",
    "url": "https://www.excite.co.jp/world/english/",
    "desc": "【翻訳ツール】老舗ポータルサイトExciteの翻訳サービス。英語・中国語・韓国語・フランス語など主要言語の翻訳に対応。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Yahoo!翻訳",
    "url": "https://honyaku.yahoo.co.jp/",
    "desc": "【翻訳ツール】Yahoo! Japanが提供する翻訳サービス。テキスト翻訳のほかウェブページ翻訳にも対応し、国内ユーザーに馴染みやすいUIを持つ。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Papago",
    "url": "https://papago.naver.com/",
    "desc": "【翻訳ツール】NAVERが提供するAI翻訳サービス。韓国語・日本語・中国語間の翻訳品質が特に高く、アジア語に強みを持つ。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Reverso",
    "url": "https://www.reverso.net/text-translation",
    "desc": "【翻訳ツール】翻訳に加えて豊富な例文・コンテキストを表示する多機能翻訳サービス。語学学習者や語彙の使い方を調べたいユーザー向け。",
    "tags": ["翻訳ツール", "語学学習"]
  },
  {
    "title": "Linguee",
    "url": "https://www.linguee.com/",
    "desc": "【翻訳ツール】膨大な実際の翻訳文例データベースから文脈に合った訳語を提示するサービス。文書・論文翻訳で慣用表現を確認する際に便利。",
    "tags": ["翻訳ツール", "語学学習"]
  },
  {
    "title": "Yandex翻訳",
    "url": "https://translate.yandex.com/",
    "desc": "【翻訳ツール】ロシアの大手IT企業Yandexの翻訳サービス。ロシア語・東欧・中央アジア言語の翻訳品質が高い。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Baidu翻訳",
    "url": "https://fanyi.baidu.com/",
    "desc": "【翻訳ツール】中国の大手検索エンジンBaiduが提供する翻訳サービス。日中・英中翻訳に強く、中国語の正確なニュアンスを確認したい場合に有用。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "Immersive Translate",
    "url": "https://immersivetranslate.com/ja/",
    "desc": "【翻訳ツール】ウェブページを原文と訳文を並べてリアルタイム表示するブラウザ拡張機能。複数の翻訳エンジン（DeepL・Google・OpenAI等）を選択可能。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "SYSTRAN Translate",
    "url": "https://translate.systran.net/",
    "desc": "【翻訳ツール】1968年創業の老舗翻訳エンジンメーカーSYSTRANの無料オンライン翻訳。企業・政府機関でも採用実績がある信頼性の高いサービス。",
    "tags": ["翻訳ツール"]
  },
  {
    "title": "DeepL API",
    "url": "https://www.deepl.com/ja/pro-api",
    "desc": "【翻訳ツール】DeepLの翻訳機能をアプリやサービスに組み込めるAPI。無料枠は毎月50万文字まで利用可能で、開発者向けの高精度翻訳エンジンを提供。",
    "tags": ["翻訳ツール", "API・外部サービス"]
  },
  {
    "title": "NIFTY ウェブ翻訳",
    "url": "https://translation.nifty.com/",
    "desc": "【翻訳ツール】NIFTYが提供するウェブページ翻訳サービス。URLを入力するだけでページ全体を翻訳して表示し、海外サイトの閲覧に使いやすい。",
    "tags": ["翻訳ツール"]
  }
];

export default links;
