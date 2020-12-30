import koaRouter from 'koa-router'
import BlogController from '../api/BlogController'
const router = new koaRouter()

router.prefix('/koa/blog')
router.get('/getBlogList', BlogController.getBlogList)
router.get('/getBlogContent', BlogController.getBlogContent)
router.post('/insertBlog', BlogController.insertBlog)
router.post('/modifyBlog', BlogController.modifyBlog)
router.post('/deleteBlog', BlogController.deleteBlog)
export default router
