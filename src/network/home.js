import { request } from './request'

// home页的数据请求
export function getHomeData() {
  return request({
    url: '/home/multidata'
  })
}
// home页的商品
export function getHomeGoods(page,type) {
  return request({
    url: '/home/data',
    params: {
      page,
      type
    }
  })
}