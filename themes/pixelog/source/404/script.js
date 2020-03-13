function displayConsole(elmId) {
    const elm = document.getElementById(elmId);

    const str = elm.innerHTML;
    const strLength = str.length;
    elm.textContent = '';
    let innerStr = '';

    let count = 0;
    const timer = setInterval( () => {
        count++;
        innerStr += str.slice(count-1, count);
        elm.innerHTML = innerStr;

        if(count >= strLength){
            clearInterval(timer);
        }
    }, 70)

}

displayConsole("console");
