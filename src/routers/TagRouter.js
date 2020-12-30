import KoaRouter from 'koa-router'
import TagController from '../api/TagController'
const router = new KoaRouter()

router.prefix('/koa/tag')
router.get('/tags', TagController.getTags)
router.post('/insertTag', TagController.insertTag)
router.post('/modifyTag', TagController.modifyTag)
router.post('/deleteTag', TagController.deleteTag)
export default router
