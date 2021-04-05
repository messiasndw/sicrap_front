import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import AuthLayout from '../layouts/Auth/index'

const AuthRoutes = ({ component: Component, header, ...rest }) => {
    return (
            <Route
                {...rest}
                render={(props) => true === true
                    ? 
                    <AuthLayout main={<Component {...props}/>} header={header} />
                    : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
            />
    )
}

export default AuthRoutes