function lightbox(element){
    const img = document.querySelectorAll(element);
    const body = document.body

    for(i=0; i < img.length; i++){
        const img_url = img[i].getAttribute('src');

        img[i].addEventListener('click', function(){

            const back_filter = document.createElement('div');
            back_filter.id = 'backfilter';
            const viewer = document.createElement('img');
            viewer.id = 'viewer';
            viewer.src = img_url;
            body.appendChild(back_filter);
            back_filter.appendChild(viewer);

            back_filter.addEventListener('click', function(e){
                const target = e.currentTarget;
                target.removeEventListener('click', arguments.callee, false);
                back_filter.className = 'fadeout';
                setTimeout(function(){
                    back_filter.remove();
                    viewer.remove();
                  }
                ,200);
            });
        });
    }
}

lightbox('.content > p > img');
