import SvgCaptcha from 'svg-captcha'
class UserController {
    constructor() {

    }
    getCaptcha(ctx) {
        const captcha = SvgCaptcha.create({
            height: 38
        })
        console.log(captcha)
        ctx.body = {
            code: '0000',
            captcha
        }
    }
}
export default new UserController()