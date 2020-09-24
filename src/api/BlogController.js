import dayjs from 'dayjs'
import mongoose from 'mongoose'

import Blog from '../model/blog'
class BlogController {
  constructor() {}
  async getBlogList(ctx) {
    const params = ctx.request.query
    let result = []
    if (params.type) {
      result = await Blog.aggregate().lookup({
        from: 'tags',
        localField: 'tag_id',
        foreignField: '_id',
        as: 'tag',
      })
    } else {
      result = await Blog.aggregate()
        .lookup({
          from: 'tags',
          localField: 'tag_id',
          foreignField: '_id',
          as: 'tag',
        })
        .match({ status: { $ne: 0 } })
    }
    result = result.map((item) => {
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
  async insertBlog(ctx) {
    let { body } = ctx.request
    body.tag_id = mongoose.Types.ObjectId(body.tag_id)
    const blog = new Blog(body)
    await blog
      .save()
      .then((res) => {
        ctx.body = {
          code: 200,
          msg: '',
          data: res,
        }
      })
      .catch((err) => {
        ctx.body = {
          code: 500,
          msg: err,
          data: {},
        }
      })
  }
  async modifyBlog(ctx) {
    const { body } = ctx.request
    body.tag_id = mongoose.Types.ObjectId(body.tag_id)
    const result = await Blog.updateOne({ _id: body._id }, body)
    ctx.body = {
      code: 200,
      msg: '',
      data: result,
    }
  }
  async deleteBlog(ctx) {
    const { body } = ctx.request
    const result = await Blog.deleteOne({ _id: body._id })
    ctx.body = {
      code: 200,
      msg: '',
      data: result,
    }
  }
}
export default new BlogController()
