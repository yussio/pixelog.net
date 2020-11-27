hexo.extend.tag.register('amazon', function(args){
    const id = 'pixelognet-22'
    const asin = args[0];
    const title = args[1];
    return `<p><a href="https://www.amazon.co.jp/dp/${asin}/?tag=${id}"><img src="https://m.media-amazon.com/images/P/${asin}.jpg" alt="${title}" width="400"><br>${title}</a></p>`  
});