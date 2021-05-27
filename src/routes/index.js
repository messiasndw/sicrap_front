import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import Route from './Route'
import React from "react";
import AuthRoute from './AuthRoute'
import HomeRoute from './HomeRoute'
import Login from '../views/Login'
import Profile from '../views/Profile'
import Products from '../views/Products'
import Register from '../views/Register'

const Routers = (props) => {

    return (
        <Router>
            <Switch>
                
                <Route exact path="/" component={() => <h1>aa</h1>} />
                <Route exact path="/register" component={() => <Register/>} />
                <Route exact path="/login" component={() => <Login/>} />
                <AuthRoute exact path='/profile' component={() => <Profile />} header="Profile" />
                <AuthRoute exact path='/products' component={() => <Products/>} header="Products" />
                <AuthRoute exact path='/categories' component={() => null} header="Categories" />
                <Route path="*"><h1>NOT FOUND!</h1></Route>
            </Switch>
        </Router>
    )

}

export default Routers