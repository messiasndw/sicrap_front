import Axios from '../../services/api'
import * as types from '../types'
import {toast} from 'react-toastify'

export const register = (payload) => async (dispatch, getState) => {

    dispatch({
        type: types.USER_REGISTER,
    })

    let updatedState = { isSigningUp: false }

    try {
        const response = await Axios.post('/register', { ...payload })
        localStorage.setItem('accessToken', response.token)
        updatedState = { ...updatedState, isAuth: true }
        console.log(response)
    } catch (error) {

    }

    dispatch({
        type: types.USER_UPDATE_STATE,
        payload: { ...updatedState, isSigningUp: false }
    })

}

export const login = (payload) => async (dispatch, getState) => {

    dispatch({
        type: types.USER_LOGIN
    })

    let updatedState = { isLogging: false }

    try {
        const response = await Axios.post('/login', { ...payload })
        localStorage.setItem('accessToken', response.token)
        updatedState = { isAuth: true, isLogging: false }
        // const history = useHistory()
        // history.push('/profile')
    } catch (error) {
        console.log("deu erro login")
    }

    console.log(payload)

    dispatch({
        type: types.USER_UPDATE_STATE,
        payload: updatedState
    })

}

export const me = (payload) => async (dispatch, getState) => {

    dispatch({
        type: types.USER_ME
    })

    let updatedState = { isAuthenticating: false }

    try {
        const response = await Axios.post('/me')
        updatedState = {...updatedState, ...response.me, isAuth: true}
    } catch (error) {
        
    }

    dispatch({
        type: types.USER_UPDATE_STATE,
        payload: { ...updatedState }
    })

}


export const logout = (payload) => {

    localStorage.removeItem('accessToken')
    return {
        type: types.USER_UPDATE_STATE,
        payload: { isAuth: null }
    }

}

export const updateProfile = (payload) => async (dispatch, getState) => {

    dispatch({
        type: types.USER_UPDATE_PROFILE
    })

    let updatedState = { isUpdatingProfile: false }

    try {
        const response = await Axios.post('/profile', payload)
        updatedState = {...updatedState, name: response.user.name}
        toast.success(response.msg)
    } catch (error) {

    }

    dispatch({
        type: types.USER_UPDATE_STATE,
        payload: { ...updatedState }
    })

}