import Axios from 'axios'
import {toast} from 'react-toastify'
import {logout} from '@redux-actions'
import store from '../redux/store'

const BASE_URL = {
    DEV: ''
}

const api = Axios.create({
    baseURL: 'http://localhost:3030',
    timeout: 55000,
});


api.interceptors.request.use(async (config) => {

    if (config.method == 'get') {
        const params = Object.keys(config.params)
        if (!!params.length) {
            params.map((param, index) => {
                if (config.params[param] === '') {
                    delete config.params[param]
                }
            })
        }
    }

    const token = localStorage.getItem('accessToken')
    
    if(!!token){
        config.headers.Authorization = "Bearer " + token
    }

    return config;

}, (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {

    switch (response.status) {
        case 200:
            break;
        default:
            break;
    }

    return response.data
}, function (error) {

    switch (error.response.status) {
        case 401:
            toast.error(error.response.data.msg)
            const {dispatch} = store
            dispatch(logout())
            console.log("fez logout")
            break;
        
        default:
            break;
    }

    return Promise.reject(error);
});

export default api
