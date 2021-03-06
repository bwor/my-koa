import Router from 'koa-router'
import SocialController from '../api/SocialController'
const router = new Router()
router.get('/getSocial', SocialController.getSocial)
router.post('/insertSocial', SocialController.insertSocial)
router.post('/modifySocial', SocialController.modifySocial)
router.post('/deleteSocial', SocialController.deleteSocial)
export default router
