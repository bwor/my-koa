import mongoose from '../config/DBHelper'

import { Schema } from 'mongoose'

const SocialSchema = new Schema({
  pic: { type: String },
  url: { type: String },
})

const SocialModel = mongoose.model('social', SocialSchema, 'social')
export default SocialModel
