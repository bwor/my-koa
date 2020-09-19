import Links from '../model/links'
class LinkController {
  constructor() {}
  async getLinks(ctx) {
    const params = ctx.request.query
    let result = []
    if (params.type) {
      result = await Links.find().sort({
        sort: 1,
      })
    } else {
      result = await Links.find({ status: { $ne: 0 } }).sort({
        sort: 1,
      })
    }
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        links: result,
      },
    }
  }
  async insertLink(ctx) {
    console.log('link')
    const { body } = ctx.request
    const link = new Links(body)
    await link
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
  async modifyLink(ctx) {
    const { body } = ctx.request
    const result = await Links.updateOne({ _id: body._id }, body)
    ctx.body = {
      code: 200,
      msg: '',
      data: result,
    }
  }
  async deleteLink(ctx) {
    const { body } = ctx.request
    const result = await Links.deleteOne({ _id: body._id })
    ctx.body = {
      code: 200,
      msg: '',
      data: result,
    }
  }
}
export default new LinkController()
