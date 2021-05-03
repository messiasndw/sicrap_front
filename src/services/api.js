import Axios from 'axios'

const BASE_URL = {
    DEV: ''
}

const api = Axios.create({
    // baseURL: 'https://some-domain.com/api/',
    timeout: 55000,
});


api.interceptors.request.use(async (config) => {
    // if (
    //     !config.url.endsWith('login') ||
    //     !config.url.endsWith('refresh') ||
    //     !config.url.endsWith('signup')
    // ) {
    //     const userTokenExpiration = new Date(await AsyncStorage.getItem('userTokenExpiration'));
    //     const today = new Date();
    //     if (today > userTokenExpiration) {
    //         // refresh the token here
    //         const userRefreshToken = await AsyncStorage.getItem('userRefreshToken');
    //     } else {
    //         const userToken = await AsyncStorage.getItem('userToken');
    //         config.headers.Authorization = `Bearer ${userToken}`;
    //     }
    // }
    const params = Object.keys(config.params)
    if(!!params.length){
        params.map((param,index) => {
            if(config.params[param] === ''){
                delete config.params[param]
            }
        })
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
        case 400:
            break;
        default:
            break;
    }

    return response.data
}, function (error) {
    return Promise.reject(error);
});

export default api
