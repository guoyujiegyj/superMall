import axios from 'axios'

// 第一个服务器。
export function request(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })
  // instance.interceptor.request.use(config=>{
  //   return config
  // },err=>{
  
  // })
  // instance.interceptor.response.use(res=>{
  //   return res.data
  // },err=>{
  //   console.log(err)
  // })
  return instance(config)
}


