import axios from 'axios'

export function request(config){
     const instance =axios.create({
         baseURL:'http://152.136.185.210:7878/api/m5/',
         timeout: 5000
     })
    //  axios的拦截器
    //  请求拦截的作用
    //  instance.interceptos.request.use(config =>{
    //      return config
    //  },err =>{
    //     console.log(err);
    //  })
    
    //  2.相应拦截
     instance.interceptos.request.use(res =>{
        return res.data
    },err =>{
       console.log(err);
    })

     return instance(config)
}