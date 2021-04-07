import Grid from '@material-ui/core/Grid';
import TextField from '../../components/TextField/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect } from 'react'
import CardComponent from '../../components/Card'
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import DatePicker from '../../components/DatePicker/index'

const Profile = (props) => {

    useEffect(() => {
        document.title = 'Sicrap | Profile'
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
    }

    return (
        <>
            <CardComponent>
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth variant="outlined">
                                <TextField required
                                    id="name"
                                    name="name"
                                    label="Name"
                                    fullWidth
                                // autoComplete="cc-name" 
                                />
                            </FormControl>
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
                            <FormControl fullWidth >

                                <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={10}
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth >
                                <DatePicker
                                    inputVariant="outlined"
                                    disableToolbar
                                    autoOk
                                    variant="inline"
                                    format="dd/mm/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Birthday" />
                            </FormControl>
                        </Grid>

                        <Grid container item xs={12} justify="flex-end">
                            <Button type="submit" variant="contained">Save</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardComponent>

        </>
    )
}

export default Profile