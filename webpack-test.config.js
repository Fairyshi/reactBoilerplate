module.exports = function(webpackConfig) {
  webpackConfig.output.library = 'Foo';
  webpackConfig.output.libraryTarget = 'umd';
  webpackConfig.output.umdNamedDefine = true;
  webpackConfig.entry = [ './tests/unit/toolbar/*-spec.js' ]; // 测试用例入口

  return webpackConfig;
};
