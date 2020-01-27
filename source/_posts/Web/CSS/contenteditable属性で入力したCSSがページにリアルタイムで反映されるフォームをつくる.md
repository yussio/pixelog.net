---
title: contenteditable属性で入力したCSSがページにリアルタイムで反映されるフォームをつくる
description: contenteditableという属性を<style>タグに付けることで、入力したCSSがページにリアルタイムで反映されるフォームを簡単につくることができます。
pid: ea9x7x56rs
categories:
  - Web
  - CSS
date: 2020-01-27 15:55:50
tags:
---
<style>.stylebox{display: block;margin: 20px 0;height:400px;overflow:auto;padding: 12px;border:1px solid #ddd;resize:both;white-space: pre;font-family: Monaco, monospace;}.stylebox:focus{box-shadow:0 0 5px #ccc inset;}</style>

HTML5で追加された属性に`contenteditable`というものがあります。これを付けることで、あらゆる要素のテキストノードの編集が可能になります。ブラウザ版Twitterのツイート入力フォームもこの属性が使われています。

これを`<style>`タグに追加して、さらにdisplay: blockで可視化すると、入力したCSSがページにリアルタイムで反映されるフォームを簡単につくることができます。

## デモ

body{background: #000} など適当なCSSを入力して遊んでみてください。

<style class="stylebox" contenteditable="true" type="text/css"></style>

styleタグ内にdivなどの余計なタグが生成されるのを防ぐため、改行する際はShiftキーを押しながらEnterキーを押してください。



## デモで使用しているソース

```html
<style class="stylebox" contenteditable="true" type="text/css">
</style>
```
```css
.stylebox{
    display: block;
    height:400px;
    padding: 12px;
    overflow:auto;
    resize:both;
    border:1px solid #ddd;
    white-space: pre;
    font-family: Monaco, monospace;
}

.stylebox:focus{
    box-shadow:0 0 5px #ccc inset;
}
```
