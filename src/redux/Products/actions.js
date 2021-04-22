import Axios from 'axios'

import { FETCH, STORE } from './types'

export const fetch = (payload) => async (dispatch,getState) => {

    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    const state = getState()
    dispatch({
        type:"FETCH",
        payload:response.data
    })
    
};

export const store = (payload) => {
    return {
        type: STORE,
        payload
    };
};