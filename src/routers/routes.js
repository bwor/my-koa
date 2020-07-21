import combineRoutes from 'koa-combine-routers'
import UserRouter from './UserRouter'

export default combineRoutes(
    UserRouter
)