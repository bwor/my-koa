import Mongoose from 'mongoose'
import config from './index'
// 创建连接
Mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// 连接成功
Mongoose.connection.on('connected', () => {
  console.log('Mongoose conection open to' + config.DB_URL)
})
// 连接异常
Mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error' + err)
})
// 连接断开
Mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection  disconnected')
})

export default Mongoose
