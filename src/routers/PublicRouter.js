import Router from 'koa-router'
import PublicController from '../api/PublicController'
const router = new Router()
router.prefix('/public')
router.post('/getCaptcha', PublicController.getCaptcha)
module.exports = router
