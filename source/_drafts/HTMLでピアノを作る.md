---
title: HTMLでピアノを作ってみよう
date: 2020-03-04 15:12:50
description:
pid: agm7bh6u7u
categories:
---
<div id="input"></div>
<div id="activekey"></div>



<div id="piano">
<div data-key="C4" class="pianokey"></div>
<div data-key="C#4" class="pianokey sharp"></div>
<div data-key="D4" class="pianokey"></div>
<div data-key="D#4" class="pianokey sharp"></div>
<div data-key="E4" class="pianokey"></div>
<div data-key="F4" class="pianokey"></div>
<div data-key="F#4" class="pianokey sharp"></div>
<div data-key="G4" class="pianokey"></div>
<div data-key="G#4" class="pianokey sharp"></div>
<div data-key="A4" class="pianokey"></div>
<div data-key="A#4" class="pianokey sharp"></div>
<div data-key="B4" class="pianokey"></div>
</div>


<style>
#piano {
    width: 420px;
    height: 210px;
    position: relative;
}
.pianokey {
    display: inline-block;
    width: calc(100% / 7);
    height: 100%;
    border: 1px solid #999;
}
.pianokey:hover {
    background: #f2f2f2;
}
.sharp{
    width: calc(100% / 7 * 0.67 );
    height: calc(100% * 0.6);
    background:  #000;
    position: absolute;
    margin-left: calc(100% / 7 * -0.67 / 2 );
}
</style>

<script src="https://unpkg.com/tone@13.8.25/build/Tone.js"></script>
<script>
// ページ読み込み時シンセ生成
const synth = new Tone.Synth({
    // 発振器の設定
    oscillator:{
        type:"triangle8"
    },
    // エンベロープ(包絡線)の設定
    envelope:{
        attack:0.005,  // 最大音量アタック・レベル(Attack Level)に達する時間
        decay:0.1,     // 一定音量まで減衰(Decay)する時間
        sustain:0.4,   // 一定振幅(Sustain Level)が続く時間
        release:2      // 音が消えるまでの時間
    }
}).toMaster();

// マウスを押した時のイベント処理
window.addEventListener('mousedown', playSound);
window.addEventListener('touchstart', playSound);


function playSound(e) {

  // マウスのdata属性を取得
  const key = e.target.dataset.key;

  // keyがundefinedなら処理を実行しない
  if (typeof key === "undefined") return;  

  // 音名を代入する
  synth.triggerAttackRelease(key, '8n');

}
</script>

<script>
navigator.requestMIDIAccess().then(successCallback,faildCallback);

var midi = null;
var inputs = [];
var outputs = [];

// MIDI接続成功時
function successCallback(m){
  midi = m;
  // 入力MIDIデバイスの記録
  var it = midi.inputs.values();
  for(var o = it.next(); !o.done; o = it.next()){
    inputs.push(o.value);
    document.getElementById('input').append(o.value.name);
  }

  // 入力MIDIデバイスから入力が来たときの処理の登録
 for(var cnt=0;cnt < inputs.length;cnt++){
   inputs[cnt].onmidimessage = onMIDIEvent;
 }
}

// MIDI接続失敗時
function faildCallback(msg){
  console.log("[Error]:"+msg);
}

//入力MIDIデバイスから入力が来たときの処理
function onMIDIEvent(e){
  var str = "";
  for(var i=0, out=[]; i<e.data.length; i++) {
    str = str + e.data[i].toString(16).substr(-2) + " ";
  }
  str = str;
  document.getElementById('activekey').append(str);
}

</script>
