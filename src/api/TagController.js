import Tags from '../model/Tags'

class TagController {
  constructor() {}
  async getTags(ctx) {
    const params = ctx.request.query
    console.log(params)
    const { type } = params
    let result = []
    if (type) {
      result = await Tags.find().sort({ sort: 1 })
    } else {
      result = await Tags.find({ status: { $ne: 0 } }).sort({ sort: 1 })
    }
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        tags: result,
      },
    }
  }
  async insertTag(ctx) {
    const { body } = ctx.request
    // 查询是否有一样的文件夹
    const regex = new RegExp(`^${body.name}$`, 'i')
    console.log(regex)
    const result = await Tags.find({ name: { $regex: regex } })
    console.log(result)
    if (result.length > 0) {
      ctx.body = {
        code: 500,
        msg: '已存在相同的标签',
        data: {},
      }
    } else {
      // 新增一个tag
      const tags = new Tags(body)
      await tags
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
            code: 500,
            msg: err,
            data: {},
          }
        })
    }
  }
  async modifyTag(ctx) {
    const { body } = ctx.request
    // 判断将要修改的文件和数据库中的是否重名
    const regex = new RegExp(`^${body.name}$`, 'i')
    const result = await Tags.find({ name: { $regex: regex } })
    let isExist = false
    if (result.length > 0) {
      // 有重名的,根据id判断是否为同一条数据
      if (result[0]._id.toString() !== body._id) {
        isExist = true
        ctx.body = {
          code: 500,
          msg: '您修改的数据已存在',
          data: '',
        }
      }
    }
    if (!isExist) {
      const data = {
        name: body.name,
        status: body.status,
      }
      await Tags.updateOne({ _id: body._id }, data)
      ctx.body = {
        code: 200,
        msg: '',
        data: result,
      }
    }
  }
  async deleteTag(ctx) {
    const { body } = ctx.request
    const result = await Tags.deleteOne({ _id: body._id })
    ctx.body = {
      code: 200,
      msg: '',
      data: result,
    }
  }
}
export default new TagController()
