---
title: Hexoのmarkdon-itが脚注で出力するHTMLを整える
date: 2020-04-29 09:00:00
post_id: byfq2m
categories:
  - Web
  - Hexo
tags:
  - HTML
  - Node.js
---

Hexoのプラグイン、hexo-renderer-markdown-itでMarkdownをレンダリングした際、脚注の部分に下のようなHTMLがはき出されます。

```html
<hr class="footnotes-sep">
<section class="footnotes">
  <ol class="footnotes-list">
    <li id="fn1" class="footnote-item">
      <p>ここに脚注の文章 <a href="#fnref1" class="footnote-backref">↩︎</a></p>
    </li>
  </ol>
</section>
```

このHTMLを見てどう思うかは人それぞれだと思うのですが、個人的にはあまり好きくないです。

`<hr>`はマークアップとデザインを分離するというのが当たり前な現代においては使い所が難しいような。廃止要素にはなってないですが。[^1] しかもこの要素は、線の色を変えるにはデフォルトのborderを0にして、backgroundで線を再現しないといけない、という曲者です。

`<section>`においては、中に見出しタグが1つ以上含まれているのがよいとされています。そのおかげでW3Cのバリデーションで警告が出ます。

当ブログは別にバリデーションには拘ってないのですが、脚注を使ってしまうとinvalidになるというのはやはり残念なので、吹き飛んでいただくことにしました。（結局拘っている）


## 対処法

Hexoのプラグインでない本家のmarkdown-itのドキュメントを読んでみると、HTMLのカスタマイズも出来るみたいですが、メンテナンス性が落ちそうだったので、Hexoのfilterで簡潔に置換えてしまうことにしました。

テーマフォルダのscriptsディレクトリに以下のようなJSを置きます。


```javascript
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace('<hr class="footnotes-sep">', '').replace('<section class="footnotes">', '').replace('</li></ol></section>', '</li></ol>');
  return data;
});
```

記事内で`<section>`を使っていないことも手伝って、正規表現を使うまでもなく排除できました。

これで記事フッター部分には以下のようなHTMLが出力されるようになります。

```html
<ol class="footnotes-list">
  <li id="fn1" class="footnote-item">
    <p>ここに脚注の文章 <a href="#fnref1" class="footnote-backref">↩︎</a></p>
  </li>
</ol>
```

`<ol>`タグのみになってかなりシンプルになりました。おしまい。

[^1]: HTML5では話題の区切りを示すという意味付けがなされているようです。
