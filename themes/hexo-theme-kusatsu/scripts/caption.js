hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/<img(.*)title="(.*)">/g, '<img$1title="$2"><span class="caption">$2</span>');
  return data;
});
