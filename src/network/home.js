import { request } from './request'

// home页的数据请求
export function getHomeData() {
  return request({
    url: '/home/multidata'
  })
}