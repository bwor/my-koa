import combineRoutes from 'koa-combine-routers'
import PublicRouter from './PublicRouter'
import SocialRouter from './SocialRouter'
import UserRouter from './UserRouter'
import BlogRouter from './BlogRouter'
import LinkRouter from './LinkRouter'
import TagRouter from './TagRouter'
import QiniuRouter from './QiniuRouter'
export default combineRoutes(
  PublicRouter,
  SocialRouter,
  BlogRouter,
  UserRouter,
  LinkRouter,
  TagRouter,
  QiniuRouter
)
