import Axios from '../../services/api'
import * as types from '../types'
import {useDispatch} from 'react-redux'


export const applyFilterProducts = (payload) => {
    return {
        type: types.APPLY_FILTER,
        payload
    }
}

export const fetchProducts = (payload) => async (dispatch,getState) => {

    dispatch({
        type:types.PRODUCTS_FETCH,
    })

    const state = getState()
    const response = await Axios.get('/products',{params:{...state.Products.filter}})
    dispatch({
        type:types.PRODUCTS_UPDATE_STATE,
        payload:{data: [
           
            
        ],fetching: false}
    })
};

export const storeProducts = (payload) => async (dispatch,getState) => {

    dispatch({
        type:types.PRODUCTS_STORE,
    })

    console.log(payload.form)

    const response = await Axios.get('https://cat-fact.herokuapp.com/facts',{params:{}})

    //CLOSES DIALOG MODAL AFTER REQUEST STORE IS DONE
    payload.handleClose()

    dispatch({
        type:types.PRODUCTS_UPDATE_STATE,
        payload: {storing: false}
    })
    console.log("e")
};