import mongoose from '../config/DBHelper'
import { Schema } from 'mongoose'

const ProjectSchema = new Schema({
  name: { type: String },
  pic: { type: String },
  cycle: { type: String },
  tags: { type: Array },
  project_desc: { type: String },
  project_work: { type: String },
  sort: { type: Number },
  status: { type: Number },
  link: { type: Number },
})

const ProjectModel = mongoose.model('project', ProjectSchema, 'project')

export default ProjectModel
