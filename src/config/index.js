const DB_URL = 'mongodb://bwor:123456@47.116.19.218:27017/testdb'
const qiniuAccessKey = 'GYTVgrP2vsiV5UWYdXsc5QsHa-wdXTQC8OW1qxP7'
const qiniuSecretKey = '8FRx0yawG32Gpe2HyzQIPnFvclV9-ssQG0l0IWCN'
const qiniuBucket = 'bwor-images'
const qiniuResourceOption = {
  limit: 10,
  prefix: '',
}
export default {
  DB_URL,
  qiniuBucket,
  qiniuAccessKey,
  qiniuSecretKey,
  qiniuResourceOption,
}
