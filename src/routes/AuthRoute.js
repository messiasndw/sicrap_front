import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import AuthLayout from '../layouts/Auth/index'
import {useSelector} from 'react-redux'

const AuthRoutes = ({ component: Component, header, ...rest }) => {

    const isAuth = useSelector(({User}) => User.isAuth)
    
    return (
            <Route
                {...rest}
                render={(props) => isAuth || !!localStorage.getItem('accessToken')
                    ? 
                    <AuthLayout main={<Component {...props}/>} header={header} />
                    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
            />
    )
}

export default AuthRoutes