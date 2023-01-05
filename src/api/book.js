import request from '@/utils/axios'

export function getBookList(reqData) {
  return request({
    url:'/BookManage/findBookByBookClassId='+reqData,
    method: 'get',
    data: reqData
  })
}
export function getBookbyBookId(reqData) {
  return request({
    url:'/BookManage/findBookById/bookId='+reqData,
    method: 'get',
    data: reqData
  })
}

export function updateBookById(reqData) {
  return request({
    url:'/BookManage/updateBookById'+reqData,
    method: 'get',
    data: reqData
  })
}
