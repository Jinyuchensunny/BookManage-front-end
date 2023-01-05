import request from '@/utils/axios'

//调用后台服务方法接口
export function getBookClassList(reqData) {
  return request({
    url:'/BookManage/findAllBookClass',
    method: 'get',
    data: reqData
  })
}
