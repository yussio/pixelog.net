hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace('<hr class="footnotes-sep">', '').replace('<section class="footnotes">', '').replace('</li></ol></section>', '</li></ol>');
  return data;
});
