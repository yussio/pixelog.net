---
title: CSSをJavaScriptで動的にセットする方法2種 (styleタグ、style属性)
categories:
  - Web
  - JavaScript
pid: o3tidc
date: 2020-05-07 19:26:43
---

CSSを動的にセットしたいときに便利なJavaScriptの関数の雛形です。

動的にセットしたいという場合は、`<style>`タグの中に書いた生CSSをhead間に差し込みたいという場合と、要素のstyle属性にCSSを書く場合の2つの場面が想定されるので両方紹介します。



## styleタグ版

```JavaScript
const css = e => {
  const t = document.createElement('style');
  t.textContent = e;
  document.head.appendChild(t);  
}
```
```JavaScript
css(`.post__title{font-size:32px;}`);
```

あらかじめ関数をページのどこかに読み込ませておいて、あとは引数にCSSを書いて実行してやると、`<style></style>`で囲まれたCSSがhead間に挿入されます。


また、バッククォートを使っているので改行して書くことも可能です。

```JavaScript
css(`
.post__title{
  font-size:32px;
}
`);
```


## style属性版

要素にstyle属性を追加して、そこにCSSを差し込むバージョンです。JavaScriptで追加する前にもともとstyle属性が存在する場合は、上書きされてしまうので注意してください。

### ID専用

要素にIDが振られているならば、理論上はこっちの方が速いです。（体感では全く分からないので、使い分ける必要があるのかは謎ですが）

```javascript
const style = (e,t) => {
  document.addEventListener("DOMContentLoaded",() => {
    document.getElementById(e).setAttribute("style",t)
  })
};
```
```javascript
style('toggle-dark','color:#ff0000;font-size:36px;'); // #は省略して書く
style('toggle-light','color:#888;font-size:12px;');
```


### なんでもOK

こちらはclass、ID、属性セレクタ...何でもOKです。

```javascript
const css = (e,t) => {
  document.addEventListener("DOMContentLoaded",() => {
    document.querySelectorAll(e).forEach(e =>e.setAttribute("style",t))
  })
};
```
```javascript
style('.category-list-link','color:#ff0000;font-size:36px;');
style('a[href="/post/o3tidc/"]','display:none;');
```
