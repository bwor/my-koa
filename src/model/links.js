import mongoose from '../config/DBHelper'

import { Schema } from 'mongoose'

const LinksSchema = new Schema({
  name: { type: String },
  link: { type: String },
  sort: { type: Number },
  isOffical: { type: Number },
  status: { type: Number },
})

const LinksModel = mongoose.model('links', LinksSchema, 'links')

export default LinksModel
