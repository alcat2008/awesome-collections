## 使用说明

### 1. 安装 node， Node.js 要求版本 4.x ，请根据不同的系统环境选择对应的安装包，已经安装过 node 请直接从第二步开始

[Mac](https://npm.taobao.org/mirrors/node/v4.4.6/node-v4.4.6.pkg)

[win-x86](https://nodejs.org/dist/v4.4.6/node-v4.4.6-x86.msi)

[win-x64](https://nodejs.org/dist/v4.4.6/node-v4.4.6-x64.msi)

>  mac 下安装完 node 后，建议执行 `sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share} ` 让 node 的一些安装目录具备普通用户权限，后续可以避免很多权限问题。


### 2. 安装项目依赖

```bash
$ npm i
```

### 3. 本地启动服务进行浏览器调试

```bash
$ npm start
```

### 4. 项目结构说明

```
.
├── common
│   ├── getData.js => 发起异步请求的 $.ajax
├── component => 组件目录
├── entry => 这里的每个 js 表示一个页面，需要将 entry 下面的 js 文件配置到 `package.json` 里的 `entry` 字段里
│   ├── index.ejs   => 生成 html 的模板文件，具体可以参考 `webpack.config.js` 里面 `HtmlWebpackPlugin` 的处理
```
