---
title: お問い合わせ
date: 2020-01-26 12:32:19
css: true
---

当サイトに関するご依頼・お問い合わせにつきましては、以下のメールフォームよりご連絡ください。返信にはお時間をいただく場合がございますのであらかじめご了承ください。

<form class="contact" name="contact" method="POST" data-netlify="true" action="/contact/completed/">
  <p>
    <label>お名前 (必須)<input type="text" name="name" required/></label>
  </p>
  <p>
    <label>メールアドレス (必須) <input type="email" name="email" required/></label>
  </p>
  <p>
    <label>件名<input type="text" name="subject" /></label>
  </p>
  <p>
    <label>お問い合わせ内容: <textarea name="message" required></textarea></label>
  </p>
  <p style="font-size: 14px">
    <a href="/privacy/#個人情報について" target="\_blank">プライバシーポリシー</a>をご確認いただき、記載されている内容に関して同意の上、お問い合わせください。
  </p>
  <p>
    <button id="submit" type="submit">送信</button>
  </p>
</form>

<script>    
    const btn = document.getElementById('submit');
    const elm = document.forms.contact;

    window.addEventListener('beforeunload', checkTransition);

    btn.addEventListener('click', ()=> {
        window.removeEventListener('beforeunload', checkTransition);
    });

    function checkTransition(e) {
        if(elm.name.value || elm.email.value || elm.subject.value || elm.message.value) {
            e.returnValue = "入力した内容が失われます。よろしいですか？";      
        }      
    }
</script>
