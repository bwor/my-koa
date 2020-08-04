import combineRoutes from 'koa-combine-routers'
import UserRouter from './PublicRouter'

export default combineRoutes(
    UserRouter
)