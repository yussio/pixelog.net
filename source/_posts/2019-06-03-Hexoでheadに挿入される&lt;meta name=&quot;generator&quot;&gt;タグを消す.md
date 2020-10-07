---
title: Hexoでheadに挿入される&lt;meta name=&quot;generator&quot;&gt;タグを消す
date: 2019-06-03 22:12:12
updated: 2020-04-13 17:40:00
post_id: om9he4
categories:
  - Web
  - Hexo
tags:
  - HTML
  - Node.js
---

Hexoではデフォルトで、&lt;head&gt;間に下のようなmetaタグが自動で挿入されます。

<!--more-->

```html
<meta name="generator" content="Hexo 3.8.0">
```


## タグの役目

> meta要素で、文書の作成に使用したソフトウェア名を示すことができます。  
> [HTMLタグ/ページ全般タグ/アプリケーション情報を示す - TAG index](https://www.tagindex.com/html_tag/page/meta_generator.html)


どうやら、このサイトは〇〇〇で作ったぞ！！とアピールするための物のようです。このタグの存在によって、SEO的に有利になるということは無いでしょう。

さらには、WordPressのような動的サイトだと攻撃の対象にされて、セキュリティ的にリスクを抱える結果になりそうです。

Hexoのような静的サイトだと特段問題はありませんが、そもそも不要なので削除します。


## タグの消去

meta_generatorjsをフィルターでオフにします。下のjsを書き込んだファイルを、テーマフォルダの中のscriptsフォルダに配置してください。

Hexoは、scriptsフォルダの中に置いたjsファイルは自動で全て読み込みます。

```javascript
hexo.extend.filter.unregister('after_render:html', require('../../../node_modules/hexo/lib/plugins/filter/meta_generator'));
```

## （2019/04/13追記）Hexo 4.0.0より

[Hexo 4.0.0](https://hexo.io/news/2019/10/14/hexo-4-released/#Feature)よりconfig.ymlのオプションで簡単に消せるようになりました！

`meta_generator`がない場合は、以下のオプションをconfig.ymlに追記してください。

```yml
meta_generator: false
```
