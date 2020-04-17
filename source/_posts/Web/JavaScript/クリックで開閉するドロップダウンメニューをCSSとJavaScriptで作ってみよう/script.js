(function () {
  const btn2 = document.getElementById('step2');
  if(btn2) {
    btn2.addEventListener('click', function(){
      this.classList.toggle('is-open');
    });
  }

  const btn = document.getElementById('dropdown__btn');
  if(btn) {
    btn.addEventListener('click', function(){
      this.classList.toggle('is-open');
    });
  }
}());
