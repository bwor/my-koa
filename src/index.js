// const Koa = require('koa')
import Koa from 'koa'
import KoaBody from 'koa-body' // 协议解析
import cors from '@koa/cors' // 跨域请求
import helmet from 'koa-helmet' // header 安全处理
import statics from 'koa-static' // 静态资源处理
import compose from 'koa-compose' // 整合中间件
import compress from 'koa-compress' // 压缩
import router from './routers/routes'
const path = require('path')
const app = new Koa()
const isDevMode = process.env.NODE_ENV === 'production' ? false : true
/**
 * 使用koa-compose 打包中间件
 */
const middleWare = compose([
    helmet(),
    KoaBody(),
    cors(),
    statics(path.join(__dirname, '../public'))
])
if (!isDevMode) {
    app.use(compress())
}
app.use(middleWare)
app.use(router())

app.listen(3000)