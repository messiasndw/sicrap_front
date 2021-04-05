import Grid from '@material-ui/core/Grid';
import TextField from '../../components/TextField/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useEffect } from 'react'
import CardComponent from '../../components/Card'

const Profile = (props) => {

    useEffect(() => {
        document.title = 'Sicrap | Profile'
    }, [])

    return (
        <>
            <CardComponent>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                        // autoComplete="cc-name" 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="email"
                            label="E-Mail"
                            name="email"
                            fullWidth
                        // autoComplete="cc-number"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                </Grid>
            </CardComponent>

        </>
    )
}

export default Profile