import Tech from '../model/technology'
class TechController {
  constructor() {}
  async getTechnology(ctx) {
    const result = await Tech.find({}).sort({ sort: 1 })
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        list: result,
      },
    }
  }
}

export default new TechController()
