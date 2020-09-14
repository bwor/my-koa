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
}
export default new SocialController()
