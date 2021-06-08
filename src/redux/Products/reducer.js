
import * as types from '../types'

const INIT_STATE = {
    pagination:{
        totalPages: null
    },
    filter: {
        perPage: 15
    },
    isFetching: false,
    storing: false,
    data: []
}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case types.APPLY_FILTER:
            return { ...state, filter: { ...state.filter, ...action.payload } }
        case types.PRODUCTS_FETCH:
            return { ...state, isFetching: true }
        case types.PRODUCTS_STORE:
            return { ...state, storing: true }
        case types.PRODUCTS_UPDATE_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}