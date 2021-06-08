import Axios from '../../services/api'
import * as types from '../types'
import { useDispatch } from 'react-redux'


export const applyFilterProducts = (payload) => {
    return {
        type: types.APPLY_FILTER,
        payload
    }
}

export const fetchProducts = (payload) => async (dispatch, getState) => {

    dispatch({
        type: types.APPLY_FILTER,
        payload
    })

    dispatch({
        type: types.PRODUCTS_FETCH,
    })

    const state = getState()
    let updatedState = { isFetching: false }

    try {
        const response = await Axios.get('/products', { params: { ...state.Products.filter } })
        updatedState = { ...updatedState, data: response.data, pagination: response.pagination }
    } catch (error) {

    }

    dispatch({
        type: types.PRODUCTS_UPDATE_STATE,
        payload: updatedState
    })
};

export const storeProducts = (payload) => async (dispatch, getState) => {

    dispatch({
        type: types.PRODUCTS_STORE,
    })


    try {
        const response = await Axios.post('/products', payload.form)
    } catch (error) {

    }

    //CLOSES DIALOG MODAL AFTER REQUEST STORE IS DONE
    payload.handleClose()

    dispatch({
        type: types.PRODUCTS_UPDATE_STATE,
        payload: {storing: false}
    })
};