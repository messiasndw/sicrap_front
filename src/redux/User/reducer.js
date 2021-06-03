
import * as types from '../types'

const INIT_STATE = {
    isLogging: false,
    isAuthenticating: false,
    isAuth: false,

}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case types.USER_REGISTER:
            return { ...state, isSigningUp: true }
        case types.USER_LOGIN:
            return { ...state, isLogging: true }
        case types.USER_ME:
            return { ...state, isAuthenticating: true}
        case types.USER_UPDATE_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}