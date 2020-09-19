import Social from '../model/Social'
class SocialController {
  constructor() {}
  async getSocial(ctx) {
    const result = await Social.find({})
    console.log('result', result)
    ctx.body = {
      code: 200,
      data: {
        social: result,
      },
    }
  }
  // 新增
  async insertSocial(ctx) {
    // 判断是否有相同的社交信息
    const { body } = ctx.request
    const result = await Social.find({ pic: body.pic })
    if (result.length > 0) {
      ctx.body = {
        code: 500,
        msg: '数据已存在',
        data: '',
      }
    } else {
      const social = new Social(body)
      await social
        .save()
        .then((res) => {
          ctx.body = {
            code: 200,
            msg: '',
            data: res,
          }
        })
        .catch((err) => {
          ctx.body = {
            code: 200,
            msg: err,
            data: {},
          }
        })
    }
  }
  async modifySocial(ctx) {
    const { body } = ctx.request
    // 判断将要修改的文件和数据库中的是否重名
    const result = await Social.find({ pic: body.pic })
    console.log(result)
    if (result.length > 0) {
      // 有重名的,根据id判断是否为同一条数据
      if (result._id !== body._id) {
        ctx.body = {
          code: 500,
          msg: '您修改的数据已存在',
          data: '',
        }
      }
    } else {
      const data = {
        pic: body.pic,
        url: body.url,
      }
      console.log(data)
      await Social.updateOne({ _id: body._id }, data)
      ctx.body = {
        code: 200,
        msg: '',
        data: result,
      }
    }
  }
  async deleteSocial(ctx) {
    const { body } = ctx.request
    const result = await Social.deleteOne({ _id: body._id })
    console.log(result)
    ctx.body = {
      code: 200,
      msg: '',
      data: {},
    }
  }
}
export default new SocialController()
