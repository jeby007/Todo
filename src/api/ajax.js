import axios from "axios";
import {message} from "antd";
const service = axios.create()
service.get = function (url,params){
  return new Promise((resolve, reject) => {
    axios.get(url,{params}).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      reject(err.data || err)
      message.error(err.data || err)
    })
  })
}
service.post = function (url,params) {
  return new Promise((resolve, reject) => {
    axios.post(url,params).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      reject(err.data || err)
    })
  })
}
export default service