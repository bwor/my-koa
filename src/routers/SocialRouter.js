import Router from 'koa-router'
import SocialController from '../api/SocialController'
const router = new Router()
router.get('/getSocial', SocialController.getSocial)
module.exports = router
