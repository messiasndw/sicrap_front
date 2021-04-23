import Axios from '../../services/api'
import * as types from './types'

import { FETCH, STORE } from './types'

export const applyFilter = (payload) => {
    return {
        type: types.APPLY_FILTER,
        payload
    }
}

export const fetch = (payload) => async (dispatch,getState) => {
    const state = getState()
    const response = await Axios.get('https://cat-fact.herokuapp.com/facts',{params:{...state.Products.filter}})
    console.log(response)

    dispatch({
        type:types.FETCH,
        payload:response.data
    })
    
};

export const store = (payload) => {
    return {
        type: types.STORE,
        payload
    };
};