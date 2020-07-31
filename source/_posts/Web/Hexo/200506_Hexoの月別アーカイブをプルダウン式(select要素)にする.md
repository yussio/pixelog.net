---
title: Hexoの月別アーカイブをプルダウン式(select要素)にする
date: 2020-05-06 14:53:55
post_id: 3ucz8g
categories:
  - Web
  - Hexo
tags:
  - EJS
  - HTML
---

Hexoでプルダウン式の月別アーカイブをサイドバーに置く方法。

Hexoでサイドバーに月別アーカイブを設置する際は、あらかじめ用意されている[Helper](https://hexo.io/docs/helpers)を使うのが簡単です。

```html
<%- list_archives() %>
```

簡単なのですが、これには問題がありまして、プルダウン式に対応していません。

アーカイブが増えれば増えるほど、サイドバーはどんどん下に長くなってしまうので、プルダウン式で選べるようにしたいところ。なので、無理矢理実装してみよう、というのがこの記事の趣旨です。


## イメージ画像

![プルダウン式の月別アーカイブ](1.png)

このブログのサイドバーに設置してあるものです。(2020年5月時点)

（追記：画像では「月を選択」の文字が選べるようになっていますが、選べないように変更しました）

## 実装方法

テンプレートエンジンはEJSです。

```html
<%
let arr = new Array();
site.posts.each(function(post){
  arr.push(post.date.format('YYYY年MM月'))
})

arr = toCountDict(arr.sort().reverse());

function toCountDict(array){
  let dict = {};
  for(let key of array){
    dict[key] = array.filter(function(x){return x==key}).length;
  }
  return dict;
}
%>

<select class="archive-list" onchange="location.href=this.value;">
    <% if(!page.month){ %><option value="" disabled selected style="display:none">月を選択</option><% } %>
    <% Object.keys(arr).forEach(function(key){ %>
    <%
      let archive_year = key.slice(0,4);
      let archive_month = key.slice(5,7);
    %>
      <option value="/<%= config.archive_dir %>/<%= archive_year %>/<%= archive_month %>/"
        <% if(is_archive()){ %>
          <% if(page.month) {
            page.monthwith0 = page.month.toString().padStart(2, '0');
          } %>
          <% if(archive_year + archive_month === page.year + page.monthwith0){ %>
          selected
          <% } %>
        <% } %>
        ><%= key %> (<%= arr[key]%>)</option>
    <% }); %>
</select>
```

select要素の本体部分のみなので、サイドバーのタイトルなどはデザインに合わせて調整してください。

月別ページではselected属性を用いて、そのページに対応する月が最初から選ばれた状態になります。

また、7行目の`.reverse()`を取り除くと昇順になります。

\_config.ymlから `archive_generator`の設定でmonthlyをtrueにするのをお忘れなく。（どうやらmonthlyをtrueにするにはyearlyをtrueにするのが必須のようです...）

```yml
archive_generator:
  per_page: 0
  yearly: true
  monthly: true
  daily: false
  order_by: -date
```


## やっていること

カテゴリーリストのように、月別のリストが収められている変数が無かったので、`site.posts.data`から全ての記事の日付を取り出し、moment.jsで年と月だけの形に加工し、ダブっているものをカウントしてその数を連想配列におさめ、降順に並べ替え、ループでoptionタグに出す..みたいな泥臭いことをやっています。

月別ページの場合は、もともとHexoに用意されている変数`page.year` `page.month`らと比較し、同じならselected属性を付けます。

もっと賢い方法があるかも...

## 参考記事

<a href="https://www.suzu6.net/posts/96-js-count-element/" class="card-link">JavaScriptの配列で要素のカウントと連想配列にする方法 - suzu6</a>
