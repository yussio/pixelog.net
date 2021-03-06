---
title: AndroidのMarkdownエディタをいろいろ試してみる
date: 2019-06-02 11:23:08
post_id: 4oo9sh
categories:
  - 雑記
tags:
  - Android
---

## スマホでブログを書きたい

静的サイトジェネレーターだとWordPressのように管理画面がないので、スマホからは更新できないのですが、外出先でたまに記事を書きたいことがあるので、スマホでも記事を書けるように、Androidのテキストエディタを比較してみます。

<!--more-->

ちなみに自分が想定しているスマホでのブログ更新の流れは、

1. スマホでMarkdownで記事を書きDropboxへ保存する
2. （家に帰ってきたら）PCでMarkdownファイルをDropboxからブログのレポジトリに移動させる
3. Atomで微調整してGitでリモートへpushする

のような感じです。なので、Dropboxと同期のとりやすいスマホエディタを探してみます。

## エディタ比較

### Simple Markdown

![Simple Markdownの編集画面](simple_markdown.png)

アプリのアイコンをタップすると、いきなり新規編集画面になります。 この潔さはかなり良いです。Dropboxへの保存は、Android標準の共有機能を使って行います。

ただし、Dropboxから直接ファイルを開けないみたいなので、書きかけのファイルを編集したいときは、Dropboxアプリからスマホへ保存してからエディタで開く、という二度手間になりそうです...。

### neutriNote

![neutriNoteの編集画面](neutrinote.png)

正規表現で検索できたり数式を入力できたり、高機能で、使いこなせばかなり便利そう。

Dropboxへファイルを取り出すのは少し面倒。

### Textie

![Textieの編集画面](textie.png)

UIはかなりシンプルで試した中では一番好きです。Markdownでよく使う記号もキーボードを切り替えずに即入力できるのでとても楽です。

スマホ本体、もしくはTextie専用のアカウントへ保存するので、Dropboxなどのクラウドストレージには保存できない模様。

### JotterPad

![JotterPadの編集画面](jotterpad.png)

スマホエディタの中でも一番人気のアプリです。Markdown以外でもtxtファイルも作成できます。

さらに、Dropboxなどのクラウドストレージと連携すれば、そのまま中身を表示して編集できるので、PCとの同期も楽チンです。フォルダの構成を工夫すれば、Evernote代わりにもなりそうです。

アプリ自体は無料で使えるものの、「アップグレードをしましょう」の文字が頻繁に表示されたり、Markdownのプレビューができなかったり、あまり使い物にならないです。アプリの購入は買い切り型なので、無料版は体験版だと割り切って、有料版を購入すると、快適に使えると思います。


## 結論

JotterPadとDropbox連携がかなりお手軽だったので、しばらくはJotterPadを使ってみたいと思います。

外出先でのちょっとしたスキマ時間に、ブログを書けるようなワークフローがあれば、快適なブログ生活を送れるかもしれません ( ˘ω˘ )

<style>
article img{
  max-width: 400px  
}
</style>
