---
title: Hexoでパンくずリストの構造化マークアップをする
categories:
  - Web
  - Hexo
pid: surt79
date: 2020-04-26 15:24:44
---

前回の記事:
[Hexoでプラグインを使わずパンくずリストを表示する](/post/xzr273/)


前回はページにパンくずリストを表示させましたが、今回は構造化マークアップ編です。これを設置することによって、Googleにページの階層構造をより的確に伝えることができるようになります。

使用しているテンプレートエンジンはEJSです。

<div class="alert caution">複数カテゴリーやタグ別ページには対応していません。ご了承ください。</div>


## ソース

```html
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement":
      [
        {
          "@type": "ListItem",
          "position": 1,
          "item":
          {
            "@id": "/",
            "name": "ホーム"
          }
        }
        <% if (is_home()) { %>
            <% if(page.current !== 1){ %>
                ,{
                  "@type": "ListItem",
                  "position": 2,
                  "item":
                  {
                    "@id": "/page/<%= page.current %>/",
                    "name": "ページ<%= page.current %>"
                  }
                }
            <% } %>
        <% } else if (is_category()) { %>
            <%
            const category_slug = page.path.replace(config.category_dir + '/', '').replace(/\/page\/.+/,'').replace(/\/index.html/, '').split('/');
            let category_url = '';
            %>
            <% category_slug.forEach(function(item, i){ %>
                <%
                i += 2;
                category_url += '/' + item;

                const category_name = Object.keys(config.category_map).filter( (key) => {
                  return config.category_map[key] === item;
                });
                %>
                ,{
                  "@type": "ListItem",
                  "position": <%= i %>,
                  "item":
                  {
                    "@id": "/<%= config.category_dir %><%= category_url %>/",
                    "name": "<% if(category_name.length === 0){ %><%= item %><%}else{%><%= category_name %><%}%>"
                  }
                }
            <% }) %>
            <% if(page.current !== 1){ %>
                ,{
                  "@type": "ListItem",
                  "position": <%= category_slug.length + 2 %>,
                  "item":
                  {
                    "@id": "<%= config.category_dir %><%= category_url %>/page/<%= page.current %>/",
                    "name": "ページ<%= page.current %>"
                  }
                }
            <% } %>
        <% } else if (is_archive()) { %>
            ,{
              "@type": "ListItem",
              "position": 2,
              "item":
              {
                "@id": "/archive/",
                "name": "アーカイブ"
              }
            }
        <% } else if(is_post()) { %>
            <% page.categories.forEach(function(item, i){ %>
                <%
                i += 2;
                %>
                ,{
                  "@type": "ListItem",
                  "position": <%= i %>,
                  "item":
                  {
                    "@id": "<%= url_for(item.path) %>",
                    "name": "<%= item.name %>"
                  }
                }
            <% }) %>
            ,{
              "@type": "ListItem",
              "position": <%= page.categories.length + 2 %>,
              "item":
              {
                "@id": "<%- url_for(path) %>",
                "name": "<%- page.title %>"
              }
            }
        <% } else if (is_page()) { %>
            ,{
              "@type": "ListItem",
              "position": 2,
              "item":
              {
                "@id": "<%- url_for(path) %>",
                "name": "<%- page.title %>"
              }
            }
        <% } %>
      ]
    }
  ]
}
</script>
```

## 解説

前回の記事やっていることはほぼ同じです。カテゴリーページではURLからカテゴリーの階層を取得しています。

構造化マークアップではpositionの値を入れる必要があるので少々面倒です。今回はループの回数や配列の長さなどで指定しています。

config.ymlの`category_map`によるカテゴリー名のスラッグに対応しています。詳しくは前回の記事をご覧ください。

JSONを置く場所は`<head>`間でも`<body>`閉じタグ直前でもどちらでもOKです。


## まとめ

パンくずリストを設置するHexoのプラグインもあるようですが、開発が止まったりしているので、プラグインを使わずに自前で設置してみました。

前回と本記事で紹介した内容は、汎用的に使えるように意識して書いたわけではなく、あくまで自分用に書いたので、他の環境での動作は保証できません。ご了承ください。
