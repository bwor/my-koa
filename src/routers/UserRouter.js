import KoaRouter from 'koa-router'
import UserController from '../api/UserController'
import TechController from '../api/TechController'
import CompanyController from '../api/CompanyController'
import ProjectController from '../api/ProjectController'
const router = new KoaRouter()

router.prefix('/koa/user')
router.get('/getUserInfo', UserController.getUserInfo)
router.get('/getTechnology', TechController.getTechnology)
router.get('/getCompanes', CompanyController.getCompanes)
router.get('/getProjectes', ProjectController.getProjectes)
export default router
