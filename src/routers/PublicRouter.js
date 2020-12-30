import Router from 'koa-router'
import PublicController from '../api/PublicController'
const router = new Router()
router.prefix('/koa/public')
router.post('/getCaptcha', PublicController.getCaptcha)
router.post('/uploadToken', PublicController.uploadToken)
export default router
