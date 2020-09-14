import dayjs from 'dayjs'
import Blog from '../model/blog'
class BlogController {
  constructor() {}
  async getBlogList(ctx) {
    let result = await Blog.aggregate()
      .lookup({
        from: 'tags',
        localField: 'tag_id',
        foreignField: '_id',
        as: 'tag',
      })
      .match({ status: { $ne: 0 } })
    // let result = await Blog
    //console.log(result1)
    result = result.map((item) => {
      console.log(item)
      return {
        ...item,
        release_time: dayjs(item.release_time).format('YYYY-MM-DD'),
      }
    })
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        list: result,
      },
    }
  }
}
export default new BlogController()
