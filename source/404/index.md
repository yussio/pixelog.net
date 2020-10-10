---
title: 404 Not Found
sitemap: false
---

<p class="marquee-anim" style="font-size: 1em;font-weight: bold;color: #00ffff;">
  <span style="animation-duration: 60s;">推奨する Browser は Google Chromeなどのモダンブラウザの最新版で、どのデバイスからでも閲覧できます。Home Page を静的サイトジェネレーターの Hexo で作成しました。最新のCSS技術を取り入れている関係で、IE とは相性が悪く 最新Version でも全く受け付けない様です。</span>
</p>

![404 Page Not Found](/404/404.gif)

<p class="marquee-anim" style="line-height: 48px;font-size: 1em;border: 4px ridge #ff0000;background: #3f0000;color: #01ea00;border-radius: 30px;">
  <span style="animation-duration: 10s;">隠しページへようこそ！このページを見つけた人はメールフォームまで報告してください。踏み逃げ禁止！！</span>
</p>

<p class="flash-anim" style="text-align: center;">
  Welcome！心から歓迎！
</p>

<p style="text-align: center">
  <img src="/404/neko.gif" alt="目が光る招き猫">
</p>

<p style="color: #ffff00">
  お探しのページは見つかりませんでした。以下のような「<span class="rotate-anim">原因</span>」が考えられます。
</p>

<ul style="color: #ff0000">
  <li>ページが移動もしくは削除された</li>
  <li>入力したURLが誤っている</li>
</ul>

<p style="color: #03f6fb">
  お手数をおかけいたしますが、<span class="rainbow-anim" style="font-weight:bold;">トップページ</span>や<span class="rainbow-anim" style="font-weight:bold;">カテゴリー・タグページ</span>から記事をお選びください。
</p>

<a href="/"><img class="flash-anim" src="/404/top.gif" alt="トップへ戻る"></a>

<style>
body {
  background: #000;
}

:root{
  --text-color: #fff;
}

.post__content {
  font-family: 'MS PGothic', sans-serif;
}


.marquee-anim {
  overflow: hidden;
}

.marquee-anim span {
  display: inline-block;
  padding-left: 100%;
  white-space: nowrap;
  animation: marquee linear infinite;
}

@keyframes marquee {
  from {
    transform: translate(0);
  }
  to {
    transform: translate(-100%);
  }
}


.rainbow-anim {
  animation: rainbow .4s steps(2) infinite;
}

@keyframes rainbow {
    0%   {color: #ff0000;}
    33%  {color: #00ff00;}
    66%  {color: #ffff00;}
}


.flash-anim {
  animation: flash .2s steps(1) infinite;
}

@keyframes flash {
    0%   {opacity:.5;}
    50%  {opacity: 1;}
}



.rotate-anim {
  display: inline-block;
  animation: rotate 2s steps(4) infinite;
}

@keyframes rotate {
    0%   {transform: rotate(0);}
    100% {transform: rotate(360deg);}
}
</style>
