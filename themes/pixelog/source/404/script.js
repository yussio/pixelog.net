function displayConsole(elmId) {
    const elm = document.getElementById(elmId);

    const str = elm.innerHTML;
    const strLength = str.length;
    elm.textContent = '';
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
