import svgCaptcha from 'svg-captcha'
import qiniu from 'qiniu'
// import { getValue, setValue } from '../config/RedisConfig'
import config from '../config'
class PublicController {
  constructor() {}
  // 获取图片验证码
  async getCaptcha(ctx) {
    const body = ctx.request.query
    const newCaptca = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
    })
    // 保存图片验证码的数据,设置超时时间 单位s
    // 超时时间为10分钟
    // setValue(body.sid, newCaptca.text, 10 * 60)
    ctx.body = {
      code: 200,
      data: newCaptca.data,
    }
  }
  // 获取图片token
  async uploadToken(ctx) {
    // 生成鉴权对象mac
    const accessKey = config.qiniuAccessKey
    const secretKey = config.qiniuSecretKey
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    // 生成Bucket
    const options = {
      scope: config.qiniuBucket,
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    ctx.body = {
      code: 200,
      msg: '',
      data: { token: uploadToken },
    }
  }
}

export default new PublicController()
