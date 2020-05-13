---
title: Hexoでプラグインを使わずパンくずリストを表示する
categories:
  - Web
  - Hexo
tags:
  - HTML
  - EJS
pid: xzr273
date: 2020-04-25 18:15:25
updated: 2020-05-13 18:30:00
---

このブログはHexoで構築しており、全ページにパンくずリストを設置しています。このパンくずリストを設置するのがなかなか大変だったので、メモを残しておきます。

使用しているテンプレートエンジンはEJSです。

<div class="alert caution">
  複数カテゴリーや<del>タグ別ページ</del>には対応していません。ご了承ください。
</div>

<div class="alert notice">
  (2020.05.13追記) タグ別ページに対応しました。また、アーカイブページにて、年と月が階層構造になるように見直しました。
</div>


## ソース

```html
<nav class="breadcrumbs">
    <ol class="breadcrumbs__list">
        <li class="breadcrumbs__item">
            <a class="breadcrumbs__item-link" href="/">
                ホーム
            </a>
        </li>
        <% if (is_home()) { %>
            <% if(page.current !== 1){ %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="/page/<%= page.current %>/">
                        ページ<%= page.current %>
                    </a>
                </li>
            <% } %>
        <% } else if (is_category()) { %>
            <%
            const category_slug = page.path.replace(config.category_dir + '/', '').replace(/\/page\/.+/,'').replace(/\/index.html/, '').split('/');
            let category_url = '';
            %>
            <% category_slug.forEach(function(item, i){ %>
                <%
                category_url += '/' + item;

                const category_name = Object.keys(config.category_map).filter( (key) => {
                  return config.category_map[key] === item;
                 });
                %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="/<%= config.category_dir %><%= category_url %>/">
                        <% if(category_name.length === 0){ %><%= item %><%}else{%><%= category_name %><%}%>
                    </a>
                </li>
            <% }) %>
            <% if(page.current !== 1){ %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="/<%= config.category_dir %><%= category_url %>/page/<%= page.current %>/">
                        ページ<%= page.current %>
                    </a>
                </li>
            <% } %>
        <% } else if (is_tag()) { %>
            <%
            const tag_slug = page.path.replace(config.tag_dir + '/', '').replace(/\/page\/.+/,'').replace(/\/index.html/, '').split('/');
            let tag_url = '';
            %>
            <% tag_slug.forEach(function(item, i){ %>
                <%
                tag_url += '/' + item;

                const tag_name = Object.keys(config.tag_map).filter( (key) => {
                  return config.tag_map[key] === item;
                 });
                %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="/<%= config.tag_dir %><%= tag_url %>/">
                        #<% if(tag_name.length === 0){ %><%= item %><%}else{%><%= tag_name %><%}%>
                    </a>
                </li>
            <% }) %>
            <% if(page.current !== 1){ %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="/<%= config.tag_dir %><%= tag_url %>/page/<%= page.current %>/">
                        ページ<%= page.current %>
                    </a>
                </li>
            <% } %>
        <% } else if (is_archive()) { %>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__item-link" href="/<%= config.archive_dir %>/<%= page.year %>/">
                    <%= page.year %>年
                </a>
            </li>
            <% if(page.month){ %>
              <li class="breadcrumbs__item">
                  <a class="breadcrumbs__item-link" href="<%- url_for(path) %>">
                      <%= page.month %>月
                  </a>
              </li>
            <% } %>
        <% } else if(is_post()) { %>
            <% page.categories.forEach(function(item){ %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="<%= url_for(item.path) %>">
                        <%= item.name %>
                    </a>
                </li>
            <% }) %>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__item-link" href="<%- url_for(path) %>">
                        <%- page.title %>
                    </a>
                </li>
        <% } else if (is_page()) { %>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__item-link" href="<%- url_for(path) %>">
                    <%- page.title %>
                </a>
            </li>
        <% } %>
    </ol>
</nav>
```

## 仕様

スパゲッティーコードになっているのは申し訳ありません。自分のスキルではこれが限界です😥

問題はカテゴリーページの方にありまして、カテゴリーを階層化している場合で、子カテゴリーのページを表示させているとき、そのカテゴリーが属する親カテゴリー名を出す変数がないんですよ。たぶん。

なのでどうしているかと言いますと、URLからドメインと"categories"(デフォルト)を取り除き、スラッシュでカテゴリー名に切り分け変数に格納、そしてそれを基にURLとカテゴリー名を作りHTMLに出す...みたいなことをやっています。


## カテゴリーのスラッグについて

Hexoでは、カテゴリーやタグの日本語スラッグを_config.yml指定することができます。これで日本語URLを回避できるという訳ですね。

```yml
category_map:
  CSS: css
  ドライブ: drive
  日記: diary
  未分類: uncategorized

tag_map:
  食べ物: food
```

先述の通り、カテゴリーページやタグページでは、URLを元にパンくずリストを作成するので、URLに現れる文字列とカテゴリー名が一致しないということが起こり得ますが、config.yml内でスラッグが指定されている場合はそれらを参照し、元のカテゴリー名を表示できる仕組みになっています。

`filename_case: 1`でのURL小文字統一には対応していないので、これを利用する場合でも、

```yml
category_map:
  CSS: css
  HTML: html
  Hexo: hexo
  JavaScript: javascript
```

のように、逐一category_mapを設定してください。


## 次の記事

[Hexoでパンくずリストの構造化マークアップをする](/post/surt79/)
