import mongoose from '../config/DBHelper'
import { Schema } from 'mongoose'

const TechSchema = new Schema({
  desc: { type: String },
  sort: { type: Number },
})

const TechModel = mongoose.model('technology', TechSchema, 'technology')

export default TechModel
