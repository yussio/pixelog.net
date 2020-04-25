---
title: Hexoでプラグインを使わずパンくずリストを表示する
categories:
  - Web
  - Hexo
pid: xzr273
date: 2020-04-25 18:15:25
---

このブログはHexoで構築しており、全ページにパンくずリストを設置しています。このパンくずリストを設置するのがなかなか大変だったので、メモを残しておきます。

使用しているテンプレートエンジンはEJSです。また、複数カテゴリーやタグ別ページには対応していません。


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
        <% } else if (is_archive()) { %>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__item-link" href="<%- url_for(path) %>">
                    アーカイブ
                </a>
            </li>
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

問題はカテゴリーページの方にありましてですね、カテゴリーを階層化している場合で、子カテゴリーのページを表示させているとき、その親カテゴリー名を出す変数がないんですよ。たぶん。

なのでどうしているかと言いますと、URLからドメインとcategories(デフォルト)を取り除き、スラッシュでカテゴリー名に切り分け変数に格納、そしてそれを基にURLとカテゴリー名を出す、みたいなことをやっています。

そのとき、日本語カテゴリーでスラッグを指定している場合、URLに現れる文字列とカテゴリー名が一致しないということが起こり得ます。なので、config.yml内の`category_map`でスラッグが指定されている場合は、値からキーを参照して 真のカテゴリー名を表示します。

また`filename_case: 1`でのURL小文字統一には対応していないので、これを利用する場合でも、

```yml
category_map:
  CSS: css
  HTML: html
  Hexo: hexo
  JavaScript: javascript
```

のように、逐一category_mapを設定してください。

なんか一生懸命説明してますけど、ただでさえHexoでブログ書いている人いないのに、一体誰に向けて記事書いてるんですかね...。まあそんな感じです。

構造化マークアップ編につづく（記事作成中）
