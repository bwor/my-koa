import mongoose from '../config/DBHelper'
import { Schema } from 'mongoose'

const CompanySchema = new Schema({
  name: { type: String },
  date: { type: String },
  desc: { type: String },
  tags: { type: Array },
})

const CompanyModel = mongoose.model('company', CompanySchema, 'company')
export default CompanyModel
