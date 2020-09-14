import koaRouter from 'koa-router'
import BlogController from '../api/BlogController'
const router = new koaRouter()

router.prefix('/blog')
router.get('/getBlogList', BlogController.getBlogList)
export default router
