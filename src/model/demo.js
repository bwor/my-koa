import User from './test'

//增
const user = {
  name: 'bwor',
  age: 27,
  email: '',
}
const insertMethod = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log(result)
}
insertMethod()
//删
const deleteMethod = async () => {
  const result = await User.deleteOne({ name: 'bwor' })
  console.log(result)
}
deleteMethod()
//改
const updateMethod = async () => {
  const result = await User.updateOne({
    name: 'bwor',
    email: '1326876531@qq.com',
  })
  console.log(result)
}
updateMethod()
//查
const find = async () => {
  const result = await User.find()
  console.log(result)
}
find()
