---
title: お問い合わせ
date: 2020-01-26 12:32:19
---

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
    <label>本文: <textarea name="message" required></textarea></label>
  </p>
  <p style="font-size: 14px">
    <a href="/about/#メールフォーム">プライバシーポリシー</a>をご確認いただき、記載されている内容に関して同意の上、お問い合わせください。
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

<style>
.contact {
    margin: 48px 0 0 0;
}

.contact input,
.contact textarea {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 4px;
}

.contact textarea {
    height: 10em;
}

.contact button {
    background: #007bff;
    color: #fff !important;
    padding: 6px 48px;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 #48a9a6;
}
</style>
