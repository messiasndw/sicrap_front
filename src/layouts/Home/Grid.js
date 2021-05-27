import React from 'react'
import './index.css'
import Grid from '@material-ui/core/Grid';

const AuthGrid = (props) => {

    return (
            <div class="grid-container-home">

                <div class="topBar">
                    <Grid container justify='center' alignItems='center'>
                        <Grid item>
                            Home
                        </Grid>
                        <Grid item>
                            Register
                        </Grid>
                        <Grid item>
                            Login
                        </Grid>
                    </Grid>
                </div>

                <div class="main" style={{paddingTop:"150px", paddingRight:"35%", paddingLeft:"35%"}}>
                    {props.main || 'MAIN'}
                </div>

            </div>
    )

}

export default AuthGrid