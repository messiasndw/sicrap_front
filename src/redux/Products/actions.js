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

    dispatch({
        type:types.FETCH,
    })

    const state = getState()
    const response = await Axios.get('https://cat-fact.herokuapp.com/facts',{params:{...state.Products.filter}})
    const data = response
    dispatch({
        type:types.UPDATE_STATE,
        payload:{data: [],fetching: false}
    })
};

export const store = (payload) => {
    return {
        type: types.STORE,
        payload
    };
};