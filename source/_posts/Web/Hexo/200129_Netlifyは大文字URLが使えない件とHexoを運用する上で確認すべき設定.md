---
title: Netlifyは大文字URLが使えない件とHexoを運用する上で確認すべき設定
permalink: x64oif84bo
categories:
  - Web
  - Hexo
tags:
  - Netlify
date: 2020-01-29 10:30:04
---

このブログはNetlifyという静的サイトホスティングサービスを使って運用しているのですが、サイドバーに設置しているカテゴリー一覧の英字カテゴリーをクリックしたときに、毎回301リダイレクトが挟まることに気づきました。

これは、リンクが大文字小文字混合になっているのに対し、ページのURLは小文字に統一されていることから発生していました。


## Netlifyで大文字URLは使えない

ローカルでサーバーを立ち上げて確認するときには、URLは大文字小文字混合になっているので、Netlify側に問題があると思い調べてみると...ほんの僅かに情報がありました。

> However, I found that unfortunately this is not a thing that works with Netlify (which I use to host my site) because it actually makes all filenames lowercase, removing any case sensitivity you had set up.
> This is an underdocumented gotcha that I found on their community forums. This has meant that unfortunately I've had to change the implementation of my random filename generation to not use uppercase characters.
>[Gotcha: Netlify Makes All Your Filenames Case-Insensitive](https://www.jvt.me/posts/2019/11/11/gotcha-netlify-lowercase/)

Netlifyのドキュメントでは書かれていませんが、コミュニティフォーラムで、このことについて言及している投稿が2件ほどあり、どうやらNetlifyでは大文字のファイルをアップロードすることは許可されておらず、管理画面などからも設定を変更することはできない模様です。

リダイレクト処理は、初回は500ミリ秒以上かかることも多く、ページ読み込み速度も大幅に低下するので、このまま使い続けるという選択肢はないと思います。


## Hexo側の設定

Hexoでは元のファイルネームに関わらず、ページを生成したときに大文字、もしくは小文字へ統一する機能が標準で備わっています。\_config.ymlの項目を確認します。

``` yml
#Writing

（中略）

filename_case: 1 # [0]デフォルト [1]小文字へ変換 [2]大文字へ統一
```

この設定でページ内のリンクを一括で小文字へ書き換えられます。このブログでは、カテゴリー名が日本語の場合でもスラングは設定しておらず、アルファベットだけ小文字へ変換していますが、特に問題なく使えています。

HexoとNetlifyの組み合わせで運営しているサイトを数件見て回ると、やはりリダイレクトが挟まっているサイトがたくさん見受けられます。同じ組み合わせで運用しているのなら、一度確認することをおすすめします。
