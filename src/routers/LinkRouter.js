import KoaRouter from 'koa-router'
import LinkController from '../api/LinkController'
const router = new KoaRouter()

router.prefix('/link')

router.get('/getLinks', LinkController.getLinks)

export default router
