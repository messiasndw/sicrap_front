import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import HomeLayout from '../layouts/Home/index'
import {useSelector} from 'react-redux'

const AuthRoutes = ({ component: Component, header, ...rest }) => {

    const isAuth = useSelector(({User}) => User.isAuth)
    console.log("aqui")
    console.log(localStorage.getItem('accessToken'))
    console.log("aqui")
    return (
            <Route
                {...rest}
                render={(props) => (!isAuth || !!localStorage.getItem('accessToken'))
                    ? 
                    <HomeLayout/>
                    : <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />}
            />
    )
}

export default AuthRoutes