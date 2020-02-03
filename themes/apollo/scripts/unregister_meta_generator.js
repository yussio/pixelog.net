// https://github.com/YoshinoriN/hexo-test/commit/88ed3ca318b0352227fa8192ceac66192b373d1f

hexo.extend.filter.unregister('after_render:html', require('../../../node_modules/hexo/lib/plugins/filter/meta_generator'));
