import Axios from '../../services/api'
import * as types from '../types'
import { toast } from 'react-toastify'


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
        toast.success(response.msg)
        dispatch(fetchProducts())
    } catch (error) {

    }

    //CLOSES DIALOG MODAL AFTER REQUEST STORE IS DONE
    payload.handleClose()

    dispatch({
        type: types.PRODUCTS_UPDATE_STATE,
        payload: {storing: false}
    })
};

export const deleteProducts = (ids) => async (dispatch, getState) => {

    dispatch({
        type: types.PRODUCTS_DELETE,
    })

    try {
        const response = await Axios.delete('/products',{data:{ids}})
        toast.success(response.msg)
        const ids_quant = ids.length
        const {Products} = getState()
        if((ids_quant >= Products.filter.perPage && Products.pagination.currentPage != 1) || (ids_quant >= Products.data.length && Products.pagination.currentPage != 1) ){
            dispatch(fetchProducts({page: Products.pagination.currentPage-1}))
        }
        console.log(Products.filter.perPage > ids_quant)
        console.log(Products.data.length)
        // console.log([ids_quant, state.filter.perPage])
        dispatch(fetchProducts())
    } catch (error) {

    }

    dispatch({
        type: types.PRODUCTS_UPDATE_STATE,
        payload: {isDeleting: false}
    })
};