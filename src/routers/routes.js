import combineRoutes from 'koa-combine-routers'
import PublicRouter from './PublicRouter'
import SocialRouter from './SocialRouter'
import BlogRouter from './BlogRouter'
import LinkRouter from './LinkRouter'
import TagRouter from './TagRouter'
export default combineRoutes(
  PublicRouter,
  SocialRouter,
  BlogRouter,
  LinkRouter,
  TagRouter
)
