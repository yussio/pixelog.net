---
title: HexoのショートコードでAmazonアソシエイトリンクを挿入
date: 2020-11-15 15:15:29
post_id: y7cfvk
categories:
  - Web
  - Hexo
tags:
  - JavaScript
---


Hexoでショートコードを使ってAmazonの商品リンクを簡単に挿入する方法のメモ。

<!-- more -->


以前から収益どうこう以前にただAmazonの商品の画像をパク...お借りしたいと思っていて、Amazonアソシエイトプログラムに登録しました。

そこで生成されるタグがあまりにも汚くて吐き気を催したので、タグは自分で考えることに。

将来別のCMSへ移行したくなったときのためにできるだけ独自実装は避けたいと思っていましたが、HugoやWordPressなどでも似たような仕組みがあるのと、記事内はシンプルな方がいいと考えが変わったので、HexoでAmazonの商品リンクを簡単に挿入できるオリジナルショートコードを作りました。



## デモ

ショートコードで商品リンクを貼ったときの表示。

{% amazon B000UVXI7G 'Amazon | debut | 辻井伸行 | 室内楽・器楽曲 | 音楽' %}

余談ですがこのCD、2020年11月時点で新品が285円まで下落していて超オススメです。（上記リンクはAmazonアソシエイトのリンクを使用しています）



### スクリプト

テーマの中のscriptsフォルダの中に下のコードを突っ込みます。トラッキングIDには自分のIDを埋めてください。

```javascript
hexo.extend.tag.register('amazon', function(args){
    const id = 'トラッキングID'
    const asin = args[0];
    const title = args[1];
    return `<p><a href="https://www.amazon.co.jp/dp/${asin}/?tag=${id}"><img src="https://m.media-amazon.com/images/P/${asin}.jpg" alt="${title}" width="400"><br>${title}</a></p>`  
});
```

記事内ではリンクを挿入したい箇所で下のように記述します。

```markdown
{% amazon 10ケタのASIN 'ページのタイトル' %}
```


## ブックマークレット

ショートコードと言えども、そのショートコードを書くのすらめんどくさいと思ってしまったので、それも自動で作るブックマークレットを作りました。

Amazonで貼りたいページを開いてブックマークレットを実行し、記事に貼り付けるだけで終了です。

コピペ用

```javascript
javascript:(function(){var asin = document.getElementById('ASIN').value;var title = document.title;window.prompt('ショートコード', `{% amazon ${asin} '${title}' %}`);})();
```

中身

```javascript
javascript:
(function(){
  var asin = document.getElementById('ASIN').value;
  var title = document.title;
  window.prompt('ショートコード', `{% amazon ${asin} '${title}' %}`);
})();
```


## 自己責任で

アソシエイトツールバーではくっついているアクセスカウント用の1pxの画像を読み込んでなかったりあくまで公式の方法ではないので、ご利用は自己責任でよろしくお願いします。

参考記事

- [【ASINをコピペ】Amazonアソシエイトのテキストリンクの簡単な作り方](https://omocam.net/easy-associate-text-link/)
- [アソシエイト・セントラル - リンクの動作確認ツール](https://affiliate.amazon.co.jp/home/tools/linkchecker)
