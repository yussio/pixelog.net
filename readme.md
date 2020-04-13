## Netlify デプロイステータス

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ab6c650-4547-4cb9-9f56-c9b98f207370/deploy-status)](https://app.netlify.com/sites/pixelog/deploys)


## コミットメッセージ

emoji |  | type
--- | --- | ---
📝 | `:pencil:` | 新規投稿
✏️ | `:pencil2:` | リライト
🎨 | `:art:` | デザイン変更
🌱 | `:seedling:` | ユーザビリティ改善
✨ | `:sparkles:` | 新機能
⚡️ | `:zap:` | リファクタリング
🐛 | `:bug:` | バグ修正
🔥 | `:fire:` | 廃止・削除
🚑 | `:ambulance:` | リバート



## 追加でインストールしたプラグイン

- hexo-auto-category
  - カテゴリーを自動で生成
- hexo-clean-css
  - CSSを圧縮
- hexo-generator-feed
  - Atomフィードを自動生成 /atom.xmlでアクセス
- hexo-generator-seo-friendly-sitemap
  - サイトマップを自動生成 /sitemap.xmlでアクセス
- hexo-html-minifier
  - HTMLを圧縮


## 独自に定義したFront-matter

|Front-matter| 値             | 説明                                   |
|-----------|-----------------|----------------------------------------|
|pid        |小文字英数10文字  |記事のURL                                |
|description|文字列  |記事の要約。metaタグのdescriptionへ                |
|thumbnail  |サムネイル画像のファイル名 |OGPタグのサムネイルへ             |
|css        |true     |記事個別のCSSを読み込む（style.cssをフォルダに置く）|
|js         |true    |記事個別のJSを読み込む（script.jsをフォルダに置く）  |
|sitemap     |false   |ページをnoindexに、sitemapを送信しない       |


## よく使うgitコマンド


直前のcommitの状態にワーキングツリーを戻す
```
git reset --hard HEAD
```

特定のcommitまで取り消す（※ハッシュ値のcommitの状態になる）
```
git reset --hard ハッシュ値
```

--hardなし → ワーキングツリーの変更は残す


直前のcommitを打ち消すcommirを作る
```
git revert HEAD
```
