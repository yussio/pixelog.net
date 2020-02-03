hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/<img src=\"\/post\/(.*?)\/(.*?)\"/g, '<img src=\"\/post\/$1\/post_$2\"');
  return data;
});
