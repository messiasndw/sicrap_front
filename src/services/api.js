import Axios from 'axios'
import { toast } from 'react-toastify'
import { logout } from '@redux-actions'
import store from '../redux/store'

const BASE_URL = {
    DEV: ''
}

const api = Axios.create({
    baseURL: 'http://localhost:8282',
    timeout: 55000,
});


api.interceptors.request.use(async (config) => {
    console.log("logando")
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

    if (!!token) {
        config.headers.Authorization = "Bearer " + token
    }

    return config;

}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {

    switch (response.status) {
        case 200:
            break;
        default:
            break;
    }
    return response.data
}, (error) => {

    if (!error.response) {
        const { dispatch } = store
        toast.error("Something went wrong! Please make you're connected to the internet.")
        dispatch(logout())
    }

    switch (error.response.status) {
        case 401:
            toast.error(error.response.data.msg)
            const { dispatch } = store
            dispatch(logout())
            break;

        case 422:
            const { errors } = error.response.data
            errors.forEach(element => {
                toast.error(element.msg)
            });
            break;

        default:
            console.log("afa")
            break
    }
    return Promise.reject(error);
});

export default api
