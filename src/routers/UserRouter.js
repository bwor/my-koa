import Router from 'koa-router'
import UserController from '../api/UserController'
const router = new Router()
router.post('/user', UserController.getUser)
module.exports = router