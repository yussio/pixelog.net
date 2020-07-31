## Netlify デプロイステータス

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ab6c650-4547-4cb9-9f56-c9b98f207370/deploy-status)](https://app.netlify.com/sites/pixelog/deploys)


## コミットメッセージ

emoji | code | type
--- | --- | ---
📝 | `:pencil:` | 新規投稿
✏️ | `:pencil2:` | リライト
✨ | `:sparkles:` | 追加
🎨 | `:art:` | デザイン変更
🔥 | `:fire:` | 廃止・削除
🌱 | `:seedling:` | ユーザビリティ改善
⚡️ | `:zap:` | リファクタリング
🐛 | `:bug:` | バグ修正
🚑 | `:ambulance:` | 誤爆リバート
🔧|`:wrench:`| config、ファイル周りの整理


## 追加でインストールしたプラグイン

- hexo-clean-css
  - CSSを圧縮
- hexo-generator-feed
  - Atomフィードを自動生成 /atom.xmlでアクセス
- hexo-generator-sitemap
  - サイトマップを自動生成 /sitemap.xmlでアクセス
- hexo-html-minifier
  - HTMLを圧縮


## 独自に定義したFront-matter

|Front-matter| 値             | 説明                                   |
|-----------|-----------------|----------------------------------------|
|post_id     |英数6文字   |パーマリンクに使用       |
|sitemap     |false   |ページをnoindexに、sitemapを送信しない       |
