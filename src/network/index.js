import axios from 'axios'

//封装axios
export function request(config) {
    //1.创建实例
    const intance =axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000
    })
    //2. 拦截器
    //2.1请求拦截
    intance.interceptors.request.use( config =>{
        //1.比如服务器返回的数据不符合要求  2.发送请求时 ，希望界面中有请求图标  3. 某些请求需要特殊的的信息 例如 token
        return config;
    },err =>{
        // 请求失败  网络或者接口有问题
        console.log(err);
        return err;
    })
    // 响应拦截
    intance.interceptors.response.use( res =>{

        return res.data
    },err =>{
        console.log(err);
    })
    //3.请求成功
    return intance(config)
}
