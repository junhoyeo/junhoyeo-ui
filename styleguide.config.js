const reactDocgenTypescript = require('react-docgen-typescript');

const { env: { DANGEROUSLY_DISABLE_HOST_CHECK } } = process;
const isHostCheckDangerouslyDisabled =
  DANGEROUSLY_DISABLE_HOST_CHECK == 'true';

module.exports = {
  components: 'src/components/**/*.tsx',
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.devServer = {
      disableHostCheck: isHostCheckDangerouslyDisabled,
    };
    return webpackConfig;
  },
  propsParser: reactDocgenTypescript
    .withDefaultConfig()
    .parse,
};
