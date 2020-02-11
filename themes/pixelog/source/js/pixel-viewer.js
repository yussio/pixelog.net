function pixelViewer(element){
    const img = document.querySelectorAll(element);
    const body = document.body

    for(i=0; i < img.length; i++){
        const img_url = img[i].getAttribute('src');
        const alt = img[i].getAttribute('alt');

        img[i].addEventListener('click', function(){
            const back_filter = document.createElement('div');
            back_filter.id = 'pixel-viewer';

            const alt_div = document.createElement('div');
            alt_div.id = 'pixel-viewer__alt';
            alt_div.textContent = alt;

            const viewer = document.createElement('img');
            viewer.id = 'pixel-viewer__img';
            viewer.src = img_url;

            body.appendChild(back_filter);
            back_filter.appendChild(alt_div);
            back_filter.appendChild(viewer);

            function close(e){
                const target = e.currentTarget;
                target.removeEventListener('click', arguments.callee, false);
                target.removeEventListener('keydown', arguments.callee, false);
                back_filter.className = 'fadeout';

                back_filter.addEventListener("animationend",function(e){
                    back_filter.remove();
                    viewer.remove();
                });
            }
            back_filter.addEventListener('click', close);
            window.addEventListener('keydown', function(e){
                if(event.key === 'Escape') {
                    close(e);
                }
            });
        });
    }
}

pixelViewer('p > img');
