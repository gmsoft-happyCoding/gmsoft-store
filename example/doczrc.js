// docz 没有提供模板文件变量替换的, 只好自己生成然后写文件
// 生成模板文件 public/docz.index.html
require('./docz.template');
const webpack = require('webpack');
const externals = require('./config/externals');
const getClientEnvironment = require('./config/env');
const paths = require('./config/paths');

const publicUrl = process.env.REACT_APP_PUBLIC_URL;
const env = getClientEnvironment(publicUrl);
const docPath = 'doc';

function getBase(url) {
  if (!url) return '';
  /**
   * 解析 url 的正则表达式, 匹配第一个出现的[和非'/'相邻的'/']分解url
   * @example:
   * url: "https://gec123.com/demo"
   * result: ["https://gec123.com/demo", "https:/", "/gec123.com/demo"]
   * @example:
   * url: "//gec123.com/demo"
   * result: ["//gec123.com/demo", "/", "/gec123.com/demo"]
   * @example:
   * url:  "/gec123.com/demo"
   * result: ["/gec123.com/demo", "", "/gec123.com/demo"]
   */
  const regx = /(.*?)(\/[^\/].*)/;
  const result = regx.exec(url);
  if (!result) return '';
  return result[1]
    ? `/${result[2]
        .split('/')
        .slice(2)
        .join('/')}`
    : result[2];
}

module.exports = {
  title: 'example',
  base: `${getBase(publicUrl)}/${docPath}`,
  dest: `build/${docPath}`,
  typescript: true,
  codeSandbox: false,
  wrapper: 'src/DocWrapper',
  indexHtml: 'public/index.docz.html',
  modifyBundlerConfig: (config, dev, args) => {
    // 外部依赖
    config.externals = externals();
    // 加入 env/* 下的配置
    config.plugins.push(new webpack.DefinePlugin(env.stringified));
    // 路径别名
    const alias = {
      '@': paths.appSrc,
    };
    config.resolve.alias = { ...config.resolve.alias, ...alias };
    return config;
  },
};
