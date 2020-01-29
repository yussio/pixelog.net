(function() {
  var input = document.querySelectorAll('#kaizuka_calc input');
  var button = document.getElementById('calc');


  for (i=0; i<2; i++) {
    input[i].addEventListener('focus', function() {
      input[0].value = "";
      input[1].value = "";
    });
  }

  button.addEventListener('click', function() {
    var formNodeList = document.kaizuka_calc;
    var yen_value = formNodeList.input_yen.value;
    var kaizuka_value = formNodeList.input_kaizuka.value;
    var kaizuka_factor = formNodeList.factor.value;

    if(yen_value !== ""){
      var calc_result = yen_value * kaizuka_factor;
      formNodeList.input_kaizuka.value = calc_result;
    }
    else if(kaizuka_value !== ""){
      var calc_result = Math.round(kaizuka_value / kaizuka_factor);
      formNodeList.input_yen.value = calc_result;
    }
    else{
      alert('どちらか片方に数字を入力してください。');
    }
  });
}());
