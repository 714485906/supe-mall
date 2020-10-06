import {request} from './index'

export function gethomeMultiata() {
    return request({
        url:"/home/multidata"
    })
}

export function gethomeData(type,page) {
    return request({
        url:"/home/data",
        params:{
            type,
            page
        }
    })
}