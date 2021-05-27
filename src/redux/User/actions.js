import { is } from 'date-fns/locale'
import Axios from '../../services/api'
import * as types from '../types'
// import { useHistory } from "react-router-dom";



export const register = (payload) => (dispatch, getState) => {

    return {
        type: types.USER_REGISTER,
        payload: payload
    }

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

    const response = await Axios.post('/me')
    updatedState = { ...updatedState, isAuth: true }

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