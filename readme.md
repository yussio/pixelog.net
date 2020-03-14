## Netlify デプロイステータス

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ab6c650-4547-4cb9-9f56-c9b98f207370/deploy-status)](https://app.netlify.com/sites/pixelog/deploys)


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


## ブログの更新の仕方

1. 「記事を書く」パッチファイルを起動
2. pid: に乱数を貼り付ける
2. 記事を書く
3. gitでcommit → リモートへpush


## 独自に定義したFront-matter

|Front-matter| 値             | 説明                                   |
|-----------|-----------------|----------------------------------------|
|pid        |小文字英数10文字  |記事のURL                                |
|description|文字列  |記事の要約。metaタグのdescriptionへ                |
|thumbnail  |サムネイル画像のファイル名 |OGPタグのサムネイルへ             |
|css        |真偽     |記事個別のCSSを読み込む（style.cssをフォルダに置く）|
|js         |真偽    |記事個別のJSを読み込む（script.jsをフォルダに置く）  |
|noindex     |真偽    |ページをnoindexにする                             |


## コミットメッセージ

|接頭語                |説明                                     |
|----------------------|----------------------------------------|
|新規投稿：{記事タイトル}|新しい記事を投稿したとき                   |
|投稿編集：{記事タイトル}|記事を編集したとき                         |
|テーマ：{変更内容}      |テーマを編集したとき 変更内容を具体的に書く|
