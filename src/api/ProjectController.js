import Project from '../model/project'
class ProjectController {
  constructor() {}
  async getProjectes(ctx) {
    const result = await Project.find({ status: { $ne: 0 } }).sort({ sort: 1 })
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        list: result,
      },
    }
  }
}

export default new ProjectController()
