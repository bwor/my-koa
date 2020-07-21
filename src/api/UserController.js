class UserController {
    constructor() {

    }
    getUser(ctx) {
        const { header } = ctx.request
        const params = ctx.request.query
        const { role } = header
        const { name, email } = params
        console.log(role)
        console.log(name)
        console.log(email)
        if (!role || role !== 'admin') {
            console.log('401')
            ctx.body = {
                code: '401',
                msg: 'unauthorized post'
            }
        }
        else if (!name || !email) {
            ctx.body = {
                code: '404',
                msg: 'name与email不得为空'
            }
        } else {
            ctx.body = {
                code: '200',
                data: { ...params },
                msg: '上传成功'
            }
        }
    }
}
export default new UserController()