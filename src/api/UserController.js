import User from '../model/user'
class UserController {
  constructor() {}
  async getUserInfo(ctx) {
    const result = await User.find({})
    let info = {}
    if (result.length > 0) {
      info = result[0]
    }
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        info,
      },
    }
  }
}

export default new UserController()
