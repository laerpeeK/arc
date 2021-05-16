import axios from 'axios'
export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000
    })

    // instance.interceptors.request.use(function(config){
    //     if(config.method === 'post') {
    //         config.data = qs.stringify({
    //             ...config.data
    //         })
    //     }
    //     return config
    // }, function(err){
    //     console.log(err)
    // })

    return instance(config)
}

