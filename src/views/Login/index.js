import React from 'react'
import Grid from '@material-ui/core/Grid';
import Input from '../../components/Input/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardComponent from '../../components/Card'
import Button from '../../components/Button/index';
// import Button from '@material-ui/core/Button';

import Select from '../../components/Select/index';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '../../components/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import DatePicker from '../../components/DatePicker/index'


const Login = (props) => {

    const handleSubmit = () => {

    }

    return (
        <CardComponent>
            <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Input
                            required
                            id="email"
                            label="Email"
                            name="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth variant="outlined">
                            <Input required
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                            // autoComplete="cc-name" 
                            />
                        </FormControl>
                    </Grid>

                    <Grid container item xs={12} justify="flex-end">
                        <Button type="submit" variant="contained">Save</Button>
                    </Grid>
                </Grid>
            </form>
        </CardComponent>

    )
}

export default Login