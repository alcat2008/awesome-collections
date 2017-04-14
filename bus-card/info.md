* `.editorconfig` 编辑器配置.
* `.eslintignore` 设置 eslint 忽略规则
* `.eslintrc` ESLint 代码规范检测.
* `HISTORY.md` 项目历史版本日志
* `README.md` 项目说明文档
* `examples` 文档文件存放处
* `.gitignore` 设置 git 忽略的文件
* `mobile.config.js` 移动端配置文件
* `package.json`
* `src` 源码目录
* `tests` 测试用例目录，请用 `*-test.js` 或 `*-spec.js`
* `webpack.config.js` atool-build 所需的自定义构建描述，通常用以构建发布至 cdn 所需


一窥 `package.json`

```js
"scripts": {
  "start": "NODE_ENV=development dora -p 8001 --plugins webpack",
  "test": "atool-test",
  "lint": "eslint --ext .js,.jsx src",
  "simulator": "NODE_ENV=development dora -p 8001 --plugins 'webpack,livereload,config-manager?path=./mobile.config.js|simOpts,simulator'",
  "build": "NODE_ENV=productions moggles -o www --config ./webpack.config.js",
},
"entry": {
  "index": "./src/entry/index",
  "menu": "./src/entry/menu"
},
```

* `start` 启动调试服务器，在 chrome 内测
* `test` 运行测试用例
* `lint` 代码规范检测
* `build` 进行静态资源的构建
