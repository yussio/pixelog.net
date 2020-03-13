hexo.extend.filter.register('after_post_render', function(data) {
    let num = 0;
    const adCode = '<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-9027963984337121" data-ad-slot="7318684953"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
    data.content = data.content.replace(/<h2/g, function(match) {
        num++;
        if (num === 2) {
            return `<div class="content__ad loading">${adCode}</div><h2`;
        } else {
            return match;
        }
    });
    return data;
});
