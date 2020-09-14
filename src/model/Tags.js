import mongoose from '../config/DBHelper'
import { Schema } from 'mongoose'

const TagsSchema = new Schema({
  name: { type: String },
  sort: { type: Number },
  status: { type: Number },
})

const TagsModel = mongoose.model('tags', TagsSchema, 'tags')

export default TagsModel
