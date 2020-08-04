# my-koa

### 1.nodemon 开发热加载

### 2，webpack 配置

```
npm install webpack webpack-cli -D
touch webpack.config.js
npm install -D clean-webpack-plugin webpack-node-externals @babel/core @babel/node @babel/preset-env babel-loader cross-env
```

### 2.1 调试 webpack

```
npx node --inspect-brk ./node_modules/.bin/webpack --inline --progress
npm-check-updates 检查版本更新 ncu
koa-componse 整合 koa 的中间件
```

# mongodb

使用 docker 安装

1.新建一个文件夹生成 docker.compose.yml 文件

```
version: "3.1"
services:
  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
      - 27017:27017
    volumes:
      - /home/data/mongodb:/data/db
```

2.运行 docker.compose.yml

```
  docker-compose up -d // 运行镜像
  docker ps | grep mongotest //查看镜像运行情况
```

3.放行防火墙端口,服务器添加安全组

```
  firewall-cmd --add-port=27017 --permanent
  firewall-cmd reload
```

4.初始化数据库配置用户

```
  docker exec -it mongotest_mongo_1 mongo //进入容器内部
  show dbs // 此时没有任何集合显示,因为还没有进行登录
  use admin // 切换到管理员数据库
  db.auth('root','example') // 登录,成功返回1
  show dbs // 此时会显示数据库集合
  use testdb // 创建集合
  db.createUser({user:'test',pwd:'123456',roles:[{role:'dbOwner',db:'testdb'}]}) // 创建用户并赋予权限
  db.auth('test','123456') // 登录
  db.users.insertOne({name:'bwor',age:30,email:'1326876531@qq.com'}) // 插入一条数据进行测试
  show collections // 查看集合
  db.users.find({}) // 查找数据
  db.users.updateOne({name:'bwor'},{$set:{email:'test1@qq.com'}}) // 更新数据
  db.users.deleteOne({name:'bwor'}) // 删除数据
```

5.使用 GUI 工具([robo 3T](https://robomongo.org/download))

6.MongoDb 备份&恢复

```
 docker exec -it mongotest_mongo_1 mongodump -h localhost -u root -p example -o /tmp/test // 备份
 docker cp 容器Id:/tmp/test /tmp/test // 复制出来
 docker exec -it mongodbtest_mongo_1 mongorestore -h locahost -u root -p example --dir /tem/test
 -h 端口
 -u 用户名
 -p 密码
 -o 备份目录
 --dir 恢复目录
 -d 备份的数据库
```

7.[mongoose](https://mongoosejs.com/)
| Oracle/Mysql | mongodb | mongoose |
| ---- | ---- | ---- |
| 数据库实例 | mongodb 实例 | mongoose |
| 模式(schema) | 数据库(database) | mongoose |
| 表(table) | 集合(collections) | 模板（Schema）模型(Model) |
| 行(row) | 文档(document) | 实例(instance) |
| primary key | Object(\_id) | Object(\_id) |
| 表字段 column | field | field |

### 7.1 实例查看项目 test/mongoose.js

### 7.2 实际生产上的项目结构

创建 config/index.js 配置参数
生成数据库连接类 DBHelper.js
创建 schema 并且创建操作方法

# redis

> Redis 是完全开源免费的,遵守 BSD 协议,是一个`高性能`的`key-value`数据库，支持数据的`持久化`,多数据结构 list,set,zse,hash 等的存储,支持数据备份`支持事务,数据的原子性(要么不做,全做)`

## Redis 应用场景

- 缓存(读写性能优异)
- 计数&消息系统(高并发,发布、订阅阻塞队列功能)
- 分布式会话 session&分布式锁(秒杀)

## Redis vs Mongo

- 存储方式不一样 key-value vs Document
- 使用方式&可靠性不一样: MongoDB SQL & ACID 支持
- 应用场景不一样 高性能缓存 vs 海量数据分析

## redis 安装

```
version: '3'
services:
  redis-test:
    image: 'redis'
    restart: always
    container_name: 'redis-test'
    ports:
      - 15001:6379
    volumes:
      - /home/redistest:/data
    command: ['redis-server', '--requirepass', '123456']
```

## redis cli

```
 docker exec -it 容器名 /bin/bash
 redis-cli
 auth 密码
```

## redis-cli

```
npm install -S redis
```
