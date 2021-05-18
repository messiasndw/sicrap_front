import Axios from '../../services/api'
import * as types from './types'
import {useDispatch} from 'react-redux'

import { FETCH, STORE } from './types'

export const applyFilterProducts = (payload) => {
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
            {
                name: "STAMP",
                quantity: 70,
                created_at: "02-02-2003",
                options: "OPTIONS HERE",
                id: 70,
                user_id: 1,
                active: 0
            },
            {
                name: "figure",
                quantity: 39,
                created_at: "02-02-2003",
                options: "OPTIONS HERE",
                id: 39,
                user_id: 1,
                active: 0
            },
            
        ],fetching: false}
    })
};

export const storeProducts = (payload) => async (dispatch,getState) => {

    dispatch({
        type:types.STORE,
    })

    console.log(payload.form)

    const response = await Axios.get('https://cat-fact.herokuapp.com/facts',{params:{}})

    //CLOSES DIALOG MODAL AFTER REQUEST STORE IS DONE
    payload.handleClose()

    dispatch({
        type:types.UPDATE_STATE,
        payload: {storing: false}
    })
    console.log("e")
};