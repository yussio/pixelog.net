hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/<a href="\/post\//g, '<a class="blog-card" href="\/post\/');
  return data;
});
