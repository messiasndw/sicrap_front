import Grid from '@material-ui/core/Grid';
import TextField from '../../components/TextField/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/Card'
import Button from '../../components/Button/index';
// import Button from '@material-ui/core/Button';

import Select from '../../components/Select/index';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '../../components/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import DatePicker from '../../components/DatePicker/index'

const Profile = (props) => {

    const [form, setForm] = useState({
        gender:"male"
    })

    useEffect(() => {
        document.title = 'Sicrap | Profile'
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const input = e.target
        setForm((prevState) => ({
            ...prevState,
            [input.name]: input.value
        }))
        console.log(input)
        console.log(form)
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
                                label="Email"
                                name="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth >

                                <InputLabel children="Gender" id="demo-simple-select-outlined-label" />
                                <Select
                                    value={form.gender}
                                    name="gender"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='male'>Male</MenuItem>
                                    <MenuItem value='female'>Female</MenuItem>
                                    <MenuItem value='other'>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth >
                                <DatePicker
                                    // inputVariant="outlined"
                                    disableToolbar
                                    autoOk
                                    variant="inline"
                                    // margin="normal"
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