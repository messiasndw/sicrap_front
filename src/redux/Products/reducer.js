
import {FETCH,STORE} from './types'

const INIT_STATE = {
    filter:{},
}

export default function(state = INIT_STATE, action){
    switch (action.type) {
        case FETCH:
            return {...state, fetching: true}
        default:
            return state
    }
}