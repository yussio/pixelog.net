(function () {
  const toggle_switch = document.getElementById('toggle-dark');
  const isDark = window.matchMedia('(prefers-color-scheme: dark)');
  const htmlElement = document.documentElement;
  const keyLocalStorage = 'theme';
  const localTheme = sessionStorage.getItem(keyLocalStorage);

  if(localTheme) {
    changeMode(localTheme);
  } else if(isDark.matches) {
    changeMode('dark');
  }

  toggle_switch.addEventListener('change', () => {
    if(toggle_switch.checked){
      changeMode('dark', 'set');
    } else {
      changeMode('light', 'set');
    }
  });
  isDark.addListener(e => {
    if (e.matches) {
      changeMode('dark', 'remove');
    } else {
      changeMode('light', 'remove');
    }
  });

  function changeMode(mode, storage){
    if(mode === 'dark') {
      htmlElement.dataset.mode = mode;
      toggle_switch.checked = true;

    } else if(mode === 'light') {
      delete htmlElement.dataset.mode;
      toggle_switch.checked = false;
    }
    if(storage === 'set'){
      sessionStorage.setItem(keyLocalStorage, mode);
    } else if(storage === 'remove') {
      sessionStorage.removeItem(keyLocalStorage);
    }
  }
}());

(function () {
  function lazyLoad(scriptSrc, type) {
    let scrollFirstTime = 1;
    window.addEventListener("scroll", oneTimeFunction, false);
    window.addEventListener("mousemove", oneTimeFunction, false);
    window.addEventListener("touchstart", oneTimeFunction, false);

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
        window.removeEventListener("mousemove", oneTimeFunction, false);
        window.removeEventListener("touchstart", oneTimeFunction, false);
      }
    }
  }
  lazyLoad("https://www.googletagmanager.com/gtag/js?id=UA-68420269-3", "src");
  lazyLoad("window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'UA-68420269-3\');", "inline");
}());
