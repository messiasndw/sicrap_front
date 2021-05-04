import Axios from '../../services/api'
import * as types from './types'
import {useDispatch} from 'react-redux'

import { FETCH, STORE } from './types'

export const applyFilter = (payload) => {
    return {
        type: types.APPLY_FILTER,
        payload
    }
}

export const fetchProducts = (payload) => async (dispatch,getState) => {

    dispatch({
        type:types.FETCH,
    })

    const state = getState()
    const response = await Axios.get('https://cat-fact.herokuapp.com/facts',{params:{...state.Products.filter}})
    const data = response
    dispatch({
        type:types.UPDATE_STATE,
        payload:{data: [
            {
                name: "Toy",
                quantity: 11,
                created_at: "02-02-2003",
                options: "OPTIONS HERE",
                id: 103,
                user_id: 1,
                active: 0
            },
            {
                name: "House",
                quantity: 11,
                created_at: "02-02-2003",
                options: "OPTIONS HERE",
                id: 51,
                user_id: 1,
                active: 0
            },
            
            {
                name: "Table",
                quantity: 14,
                created_at: "02-02-2011",
                options: "OPTIONS HERE",
                id: 23,
                user_id: 1,
                active: 1
            },
            {
                name: "Fork",
                quantity: 70,
                created_at: "02-02-2003",
                options: "OPTIONS HERE",
                id: 8,
                user_id: 1,
                active: 0
            },
            
        ],fetching: false}
    })
};

export const store = (payload) => {
    return {
        type: types.STORE,
        payload
    };
};