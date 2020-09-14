import KoaRouter from 'koa-router'
import TagController from '../api/TagController'
const router = new KoaRouter()

router.prefix('/tag')
router.get('/tags', TagController.getTags)

export default router
