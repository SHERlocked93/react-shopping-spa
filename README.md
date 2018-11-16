# react-shopping-spa

react-shopping-spa

## 环境

工具栈：Yarn、webpack、Git、React16、React-router、scss

webpack工具：

- HTML处理：[html-webpack-plugin](https://webpack.docschina.org/plugins/html-webpack-plugin/)
- 脚本：babel、babel-preset-react
- 样式：[css-loader](https://webpack.docschina.org/guides/asset-management/#加载-css)、[sass-loader](https://webpack.docschina.org/plugins/extract-text-webpack-plugin/#%E6%8F%90%E5%8F%96-sass-%E6%88%96-less)、[extract-text-webpack-plugin](https://webpack.docschina.org/plugins/extract-text-webpack-plugin/)
- 图片和字体：[url-loader](https://webpack.docschina.org/loaders/url-loader/#%E5%AE%89%E8%A3%85)、[file-loader](https://webpack.docschina.org/guides/asset-management/#%E5%8A%A0%E8%BD%BD%E5%AD%97%E4%BD%93)
- 提出公共模块：[commons-chunk-plugin](https://webpack.docschina.org/plugins/commons-chunk-plugin/)
- 热更新：[webpack-dev-server](https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-server)



注意：安装node-sass的时候报没找到python2的错，这里需要[安装](https://www.python.org/ftp/python/2.7.15/python-2.7.15.amd64.msi)一下py2的msi，同时需要科学上网；

```bash
yarn add webpack@3.10.0 html-webpack-plugin@2.30.1 babel-loader@7.1.2 babel-core@6.26.0 babel-preset-env@1.6.1 babel-preset-react@6.24.1 style-loader@0.19.1 css-loader@0.28.8 node-sass@4.7.2 sass-loader@6.0.6 extract-text-webpack-plugin@3.0.2 file-loader@1.1.6 url-loader@0.6.2 font-awesome webpack-dev-server@2.9.7 --dev
yarn add react@16.2.0 react-dom@16.2.0
```
