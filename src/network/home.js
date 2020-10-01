import {request} from './index'
export function gethomeMultiata() {

    return request({
        url:"/home/multidata"
    })
}