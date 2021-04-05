import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import AuthRoute from './AuthRoute'
import Profile from '../views/Profile'
import TextField from '../components/TextField'

const Routers = (props) => {

    return (
        <Router>
            <Switch>
                <Route exact path="/a">
                    <TextField id="name"
                        name="name"
                        label="Name"
                        fullWidth />
                </Route>
                <Route exact path="/"><h1>HOME</h1></Route>
                <AuthRoute exact path='/profile' component={() => <Profile />} header="Profile" />
                <AuthRoute exact path='/products' component={() => null} header="Products" />
                <AuthRoute exact path='/categories' component={() => null} header="Categories" />
                <Route path="*"><h1>NOT FOUND!</h1></Route>
            </Switch>
        </Router>
    )

}

export default Routers