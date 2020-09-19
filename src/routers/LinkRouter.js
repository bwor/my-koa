import KoaRouter from 'koa-router'
import LinkController from '../api/LinkController'
const router = new KoaRouter()

router.prefix('/link')

router.get('/getLinks', LinkController.getLinks)
router.post('/insertLink', LinkController.insertLink)
router.post('/modifyLink', LinkController.modifyLink)
router.post('/deleteLink', LinkController.deleteLink)
export default router
