function pixelViewer(element){
    const img = document.querySelectorAll(element);
    const body = document.body

    for(i=0; i < img.length; i++){
        const img_url = img[i].getAttribute('src');
        const alt = img[i].getAttribute('alt');

        img[i].addEventListener('click', open);
        function open(){
            const filter = document.createElement('div');
            filter.id = 'pixel-viewer';

            const div_alt = document.createElement('div');
            div_alt.id = 'pixel-viewer__alt';
            div_alt.textContent = alt;

            const div_img = document.createElement('img');
            div_img.id = 'pixel-viewer__img';
            div_img.src = img_url;

            body.appendChild(filter);
            filter.appendChild(div_alt);
            filter.appendChild(div_img);

            filter.addEventListener('click', close, {once: true});
            window.addEventListener('scroll', close, {once: true});
            window.addEventListener('keydown', function(e){
                if(e.key === 'Escape') {
                    close();
                }
            }, {once: true});
            function close(){
                filter.className = 'fadeout';
                filter.addEventListener("animationend",function(){
                    filter.remove();
                });
            }
        }
    }
}

pixelViewer('p > img');