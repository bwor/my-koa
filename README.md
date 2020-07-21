# my-koa
### 1.nodemon 开发热加载
### webpack 配置
npm install webpack webpack-cli -D
touch webpack.config.js
npm install -D clean-webpack-plugin webpack-node-externals @babel/core @babel/node @babel/preset-env babel-loader cross-env

调试webpack
npx node --inspect-brk ./node_modules/.bin/webpack --inline --progress

npm-check-updates 检查版本更新 ncu

koa-componse 整合koa的中间件