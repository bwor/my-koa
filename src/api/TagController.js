import Tags from '../model/Tags'

class TagController {
  constructor() {}
  async getTags(ctx) {
    const result = await Tags.find({ status: { $ne: 0 } }).sort({ sort: 1 })
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        tags: result,
      },
    }
  }
}
export default new TagController()
