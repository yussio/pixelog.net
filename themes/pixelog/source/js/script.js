(function () {
  function lazyLoad(scriptSrc, type) {
    let scrollFirstTime = 1;
    window.addEventListener("scroll", oneTimeFunction, false);

    function oneTimeFunction() {
      if (scrollFirstTime === 1) {
        scrollFirstTime = 0;
        const addScript = document.createElement("script");
        if(type === "src"){
          addScript.src = scriptSrc;
        } else if(type === "inline"){
          addScript.innerHTML = scriptSrc;
        }
        document.body.appendChild(addScript);
        window.removeEventListener("scroll", oneTimeFunction, false);
      }
    }
  }
  lazyLoad("https://www.googletagmanager.com/gtag/js?id=UA-68420269-3", "src");
  lazyLoad("window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'UA-68420269-3\');", "inline");
}());
