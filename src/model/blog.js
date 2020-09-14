import mongoose from '../config/DBHelper'
import { Schema } from 'mongoose'

const BlogSchema = new Schema({
  pic: { type: String },
  title: { type: String },
  desc: { type: String },
  release_time: { type: Date },
  hot: { type: Number },
  comments: { type: Number },
  tag_id: { type: String },
  status: { type: Number },
  content: { type: String },
})

const BlogModel = mongoose.model('blog', BlogSchema, 'blog')

export default BlogModel
