
import * as types from './types'

const INIT_STATE = {
    filter:{},
}

export default function(state = INIT_STATE, action){
    switch (action.type) {
        case types.APPLY_FILTER:
            return {...state, filter:{...action.payload}}
        case types.FETCH:
            return {...state, fetching: true}
        default:
            return state
    }
}