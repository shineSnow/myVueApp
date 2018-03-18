import axios from 'axios'

// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString().call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

//参数过滤函数
function filterNull(o) {
    for(var key in o) {
        if(o[key] ===null) {
            delete o[key]
        }
        if(toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if(toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if(toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o;
}

function apiAxios(method, url, params,success, failure) {
    if(params) {
        params = filterNull(params)
    }
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        withCredentials: false
    })
    .then(function (res) {
       if(res.data.success === true) {
           if(success) {
               success(res.data)
           }
       } else {
           if(failure) {
               failure(res.data)
               console.log('error:'+ JSON.stringify(res.data))
           } else {
               // window.alert('error:'+ JSON.stringify(res.data))
           }
       }
    })
    .catch(function (err) {
        let res = err.response
        if(err) {
            window.alert('api error, HTTP CODE: ' + res.status)
        }
    })
}

export default {
    get(url, params, success, failure){
        return apiAxios('GET', url, params, success, failure)
    },
    post(url, params, success, failure){
        return apiAxios('POST', url, params, success, failure)
    },
    put(url, params, success, failure){
        return apiAxios('PUT', url, params, success, failure)
    },
    delete(url, params, success, failure){
        return apiAxios('DELETE', url, params, success, failure)
    }
}