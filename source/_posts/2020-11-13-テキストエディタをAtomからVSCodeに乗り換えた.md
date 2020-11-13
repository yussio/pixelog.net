---
title: テキストエディタをAtomからVSCodeに乗り換えた
date: 2020-11-13 18:42:44
post_id: h9x6ki
categories:
  - 雑記
tags:
---

今までテキストエディタにはAtomを使っていたけれどVSCodeに乗り換えたので感想など。

<!-- more -->

## 乗り換えた理由

プログラマでもエンジニアでもないので正直何でもいいけれど、ネット上でVSCodeはAtomより軽いと言われていて前から気になっていた。PCは特段高スペックなものでもないので動作は少しでも軽い方がいい。

半年ほど前にもVSCodeを触りソースツリーの見た目が気にならないという理由でアンインストールしてしまったが、それはカスタマイズできることに気づいた。


## いいところ

- 動作が軽い。起動時間はAtomが2.8秒でVSCodeは1.8秒ほど。AtomはGitタブがときどき表示されないときがあってうっとうしかった
- エディタ内でターミナルを開く機能が標準で備わっていて安定している。Atomは拡張機能があったが不安定で結局使わなかった
- 画面上部にある階層リンクが使いやすい
- Gitの変更を破棄するボタンが便利
- npmスクリプトの一覧が表示されるのがすごい
- Markdownのハイライトが賢い
- 設定や拡張機能のインストール画面にアクセスしやすいUIでテンション上がる



## 設定

### テーマ

```
Dark (Visual Studio)
```

あれこれ試した結果デフォルトに入っているものが最強だった。


### Font Size

```
16
```

### Font Family

Markdownの日本語が絶望的だったのでNoto Sansに変えた。文字が太めで読みやすい。

```css
Consolas, 'Noto Sans CJK JP Regular'
```

### 拡張機能

- .ejs
- Japanese Language Pack for Visual Studio Code
- language-stylus
- Markdown All in One
- vscode-hexo-utils
- vscode-icons

vscode-hexo-utilsはHexoのサイドバーを表示する拡張機能。記事をカテゴリー別、タグ別に一覧できる。vscode-iconsはフォルダのアイコンが三角なのが馴染めなかったので導入。カラフルで見やすい。