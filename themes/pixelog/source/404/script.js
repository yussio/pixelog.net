function displayConsole(elmId) {
    const elm = document.getElementById(elmId);

    const str = elm.innerHTML;
    const strLength = str.length;
    elm.textContent = 'ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ';
    let innerStr = '';

    let count = 0;
    const timer = setInterval( () => {
        count++;
        innerStr = str.slice(0, count);
        elm.innerHTML = innerStr + "|";

        if(count >= strLength){
            clearInterval(timer);
            elm.innerHTML = str;
        }
    }, 50)

}

displayConsole("console");



//星を作る関数。n は星の個数。多いほど星が多く振ります。
function starMaker(n) {
    var star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";
    for(var i = 0; i < n; i++) {
        starSet(star);
    }
}

//星のセッティングをする関数。
function starSet(clone) {
    var starClone = clone.cloneNode(true);
    var starStyle = starClone.style;

    //星の位置（left）、アニメーションの遅延時間（animation-delay）、サイズ（font-size）をランダムで指定
    starStyle.left = 100 * Math.random() + "%";
    starStyle.animationDelay = 8 * Math.random() + "s";
    starStyle.fontSize = ~~(50 * Math.random() + 20) + "px";
    document.body.appendChild(starClone);

    //星一つのアニメーションが終わったら新しい星を生成
    starClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        var star = document.createElement("div");
        star.className = "star";
        star.textContent = "★";
        starSet(star);
    }, false)
}

//使用例。星を50個ふらせます。
starMaker(10);


(function() {
    var doc = document;
    var body = doc.body;
    var stalker = doc.createElement("div");
    stalker.id = "stalker";
    stalker.innerHTML = '<img src="/404/icecream.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる
    body.appendChild(stalker);

    body.addEventListener("mousemove", function(e) {
          stalker.style.left = e.clientX - 35 + "px"; //35 は要素の長さの半分
          stalker.style.top = e.clientY - 80 + "px"; //80 は縦の位置 各自調整
    }, false);
})()
