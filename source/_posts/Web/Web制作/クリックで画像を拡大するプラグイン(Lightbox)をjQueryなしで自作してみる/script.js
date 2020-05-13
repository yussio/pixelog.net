function pixelViewer(element){
    const img = document.querySelectorAll(element);

    for(let i=0; i < img.length; i++){
        img[i].addEventListener('click', open);
    }

    function open(){
        const filter = document.createElement('div');
        filter.id = 'pixel-viewer';

        const div_alt = document.createElement('div');
        div_alt.id = 'pixel-viewer__alt';
        div_alt.textContent = this.alt;

        const div_img = document.createElement('img');
        div_img.id = 'pixel-viewer__img';
        div_img.src = this.src;

        document.body.appendChild(filter);
        filter.appendChild(div_alt);
        filter.appendChild(div_img);

        filter.addEventListener('click', close, {once: true});
        window.addEventListener('scroll', close, {once: true}); // スクロールで閉じたくない場合はこの行を削除

        function close(){
            filter.className = 'fadeout';
            filter.addEventListener("animationend",function(){
                filter.remove();
            });
        }
    }
}

pixelViewer('p > img');
