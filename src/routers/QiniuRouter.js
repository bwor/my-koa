import KoaRouter from 'koa-router'
import QiniuController from '../api/QiniuController'
const router = new KoaRouter()

router.prefix('/qiniu')

router.get('/getResources', QiniuController.getResources)
export default router

// import KoaRouter from 'koa-router'
// import QiniuController from '../api/QiniuController'
// const router = new KoaRouter()

// router.prefix('/qiniu')
// router.get('/getResources', QiniuController.getResources)

// export default router
