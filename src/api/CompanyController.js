import Company from '../model/company'
class CompanyController {
  constructor() {}
  async getCompanes(ctx) {
    const result = await Company.find({})
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        list: result,
      },
    }
  }
}

export default new CompanyController()
