import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

const DefaultRoute = ({ component: Component, header, ...rest }) => {
    console.log("aaaaaaaa")
    return (
            <Route
                {...rest}
                render={(props) => false == true
                    ? 
                    <Component {...props}/>
                    : <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />}
            />
    )
}

export default DefaultRoute