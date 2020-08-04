const mongoose = require('mongoose')
// 获取连接 格式mongodb://用户名:密码@ip/数据库名称
mongoose.connect('mongodb://bwor:123456@47.116.19.218:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// model主要用来连接数据库 第二个参数是描述集合的结构(schema)
const User = mongoose.model('Users', {
  name: String,
  age: Number,
  email: String,
})
// 创建对象
const user = new User({ name: 'bwor', age: 27, email: '1326876531@qq.com' })
// 写入数据库并触发回调
user.save().then(() => console.log('Save ok'))
