import mongoose from '../config/DBHelper'
import { Schema } from 'mongoose'

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String },
  pic: { type: String },
  reg_time: { type: Date },
  school: { type: String },
  major: { type: String },
  profession: { type: String },
})

const UserModel = mongoose.model('user', UserSchema, 'user')

export default UserModel
