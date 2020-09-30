import qiniu from 'qiniu'
import config from '../config'

class QiniuController {
  constructor() {}
  async getResources(ctx) {
    let items = []
    // 生成鉴权对象mac
    const accessKey = config.qiniuAccessKey
    const secretKey = config.qiniuSecretKey
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    let qiniuConfig = new qiniu.conf.Config()
    //config.useHttpsDomain = true;
    qiniuConfig.zone = qiniu.zone.Zone_z0
    const bucketManager = new qiniu.rs.BucketManager(mac, qiniuConfig)
    // 获取文件名前缀
    const params = ctx.request.query
    const buckerPromise = new Promise((resolve, reject) => {
      bucketManager.listPrefix(
        config.qiniuBucket,
        params,
        (err, respBody, respInfo) => {
          if (err) {
            reject()
            throw err
          }
          if (respInfo.statusCode == 200) {
            //如果这个nextMarker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
            //指定options里面的marker为这个值
            var nextMarker = respBody.marker
            var commonPrefixes = respBody.commonPrefixes
            items = respBody.items
            resolve({ list: items, nextMarker })
          } else {
            resolve()
          }
        }
      )
    })
    const result = await buckerPromise
    ctx.body = {
      code: 200,
      msg: '',
      data: result,
    }
  }
}

export default new QiniuController()
