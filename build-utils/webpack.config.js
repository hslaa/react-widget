const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = ({dev}) => {

  const env = dev ? "dev" : "prod";
  const envConfig = require(`./webpack.${env}.js`);
  // merge default configuration with a chosen mode configuration
  return  merge(commonConfig, envConfig);
};