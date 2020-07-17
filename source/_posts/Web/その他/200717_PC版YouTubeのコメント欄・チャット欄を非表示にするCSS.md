---
title: PC版YouTubeのコメント欄・チャット欄を非表示にするCSS
categories:
  - Web
  - その他
date: 2020-07-17 18:59:57
tags:
permalink: 68ivdi
---

YouTubeには質の高いコンテンツがたくさんありますが、コメント欄の民度は低いですよね。個人的にはコメント欄は全て廃止でいい（過激派）と思っているくらいです。

で、普段どうやってコメント欄を見ないようにしているかというと、Chromeの拡張機能でコメント欄自体が表示されないよう、CSSで削除しています。

スマホ版は、サードパーティー製のアプリを使う以外は消す手立てがないのですが、スマホはそもそもページが長くて、関連動画を下までスクロールし切らないと表示されないので、そこまで気になりません。PC版だけでも削除すればかなり楽になります。


## 準備するもの

Google Chrome（もしくはChromium製のChromeのアドオンが使えるブラウザ）と、独自に定義したCSSをサイトに適用することができる拡張機能を準備してください。おすすめはStylus、もしくはStylishです。

- [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=ja)
- [Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=ja)

使い方はすでに他サイトで丁寧に解説されているのでそちらをご覧ください。



## CSS

以下のCSSをコピペでお使いください。

生放送のチャット欄も表示されないようにしていますが、それを表示したい場合は、1行目終わりのコンマと、2行目の`#chat`は削除してください。


```css
#comments,
#chat {
    display: none;
}
```

### おまけ

こちらは右サイドバーの関連動画を削除するCSSです。ここを封じてしまえば、登録したチャンネル以外の動画に触れる機会が減り時間を浪費しなくなるので、こちらもオススメです。

```css
#related {
    display: none;
}
```


### 適用先

適用先は以下のURLを入力し、「次で始まるURL」もしくは「ドメイン上のURL」を選んでください。

```plaintext
https://www.youtube.com/
```
