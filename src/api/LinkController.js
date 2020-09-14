import Links from '../model/links'
class LinkController {
  constructor() {}
  async getLinks(ctx) {
    const result = await Links.find({ status: { $ne: 0 } }).sort({ sort: 1 })
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        links: result,
      },
    }
  }
}
export default new LinkController()
