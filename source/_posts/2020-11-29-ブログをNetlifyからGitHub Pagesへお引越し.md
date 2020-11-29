---
title: ブログをNetlifyからGitHub Pagesへお引越し
date: 2020-11-29 16:10:31
post_id: fn8isc
categories:
  - 雑記
tags:
---

今までNetlifyでホスティングしていたのをGitHub Pagesへ乗り換えた。作業時間は1～2時間ほど。

<!-- more -->


## 作業のポイント

HexoのブログをGitHub Actionsを使ってGitHub Pagesへ公開する手順は、[Hexoの公式ドキュメント](https://hexo.io/docs/github-pages)に詳しい解説がある。それ以外に気づいた点のメモ。


### タイムゾーン

ドキュメントに書かれているままにやると、記事の日付が-9時間で計算されてしまう。

ページ生成時に使われる時間は実行環境に依存するらしいので、`npm run build`の箇所に環境変数で東京のタイムゾーンを指定すれば回避できる。


```
- name: Build
  run: npm run build
  env:
    TZ: 'Asia/Tokyo'
```


### 404ページ

GitHub PagesではNetlify同様404ページをカスタマイズすることができるが、ファイルの配置がNetlifyとは異なる。

オリジナルの404ページは404というディレクトリの下にindex.htmlを配置するのではなく、ルート直下に404.htmlを置く。

Hexoではsourceフォルダ直下に404.mdを作ればOK。


### CNAMEファイル

レポジトリの設定画面から自分のドメインを設定すると、自動的にCNAMEというファイルがgh-pagesブランチのルートに作成される。

このファイルはそのままだと、ページをGitHub Actionsでページを生成する度に消え去ってしまい、ドメインの設定が解除されてしまう（！）ので、そうならないようHexoのプロジェクトにも含める必要がある。

CNAMEファイルをHexoのsourceフォルダに配置し、_config.ymlからもCNAMEをコピーするように明示する。


```
# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
  - CNAME
exclude:
ignore:
```

## 所感

前から静的サイトなのにページ遷移がやたら重いのが気になっていた。Netlifyはとにかく手軽だという理由で採用したが、GitHub Actionsを使えばNetlifyと同等のことができるので重い腰を上げて引越しした。

結果的にページの速度も大幅に上がったので乗り換えて正解だった。

---

Netlify Formsを使ったメールフォームは使えなくなってしまった。メールフォームだけNetlifyに切り分けようかとも考えたが、そもそも零細個人ブログに連絡なんかそう来ないので、aboutページにしれっとメアドを貼り付けメールフォームは廃止。ついでに断捨離もできた。