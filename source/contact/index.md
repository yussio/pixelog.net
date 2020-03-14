---
title: ご依頼・お問い合わせ
date: 2020-01-26 12:32:19
css: true
---

当サイトに関するご依頼・お問い合わせにつきましては、以下のメールフォームよりご連絡ください。返信にはお時間をいただく場合がございますのであらかじめご了承ください。

<form class="mailform" name="contact" method="POST" data-netlify="true">
  <p>
    <label>名前<input type="text" name="name" required/></label>
  </p>
  <p>
    <label>メールアドレス <input type="email" name="email" required/></label>
  </p>
  <p>
    <label>件名<input type="text" name="subject" /></label>
  </p>
  <p>
    <label>お問い合わせ内容: <textarea name="message" required></textarea></label>
  </p>
  <p>
    <a href="/privacy/#個人情報について" target="\_blank">プライバシーポリシー</a>をご確認いただき、記載されている内容に関して同意の上、お問い合わせください。
  </p>
  <p>
    <button type="submit">送信</button>
  </p>
</form>

<script>    
    const elm = document.forms.contact;
    window.onbeforeunload = (e) => {
        if(elm.name.value || elm.email.value || elm.subject.value || elm.message.value) {
            e.returnValue = "入力した内容が失われます。よろしいですか？";      
        }
    }
</script>
