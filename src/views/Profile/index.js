import Grid from '@material-ui/core/Grid';
import Input from '../../components/Input/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/Card'
import Button from '../../components/Button/index';
// import Button from '@material-ui/core/Button';
import Select from '../../components/Select/index';
import InputLabel from '../../components/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from '../../components/DatePicker/index'


const Profile = (props) => {

    const [form, setForm] = useState({
        gender: "male",
        name:"",
        email:"",
    })

    useEffect(() => {
        document.title = 'Sicrap | Profile'
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(()=>{
    },[form])

    const handleChange = (e) => {
        const input = e.target
        setForm((prevState) => ({
            ...prevState,
            [input.name]: input.value
        }))
    }

    const onClear = (e) => {
        const input = e.target
        setForm((prevState) => ({
            ...prevState,
            [input.name]: ""
        }))
    }

    const genderOptions = [{label:"Male", value:'male'}, {label: "Female", value:"female"},{label:"Other",value:"other"}]

    return (
        <>
            <Grid item md={12}>
                <CardComponent>
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={6}>
                                    <Input required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        value={form.name}
                                        onChange={handleChange}
                                    // autoComplete="cc-name" 
                                    />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Input
                                    required
                                    id="email"
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth >

                                    <InputLabel children="Gender" />
                                    <Select
                                        value={form.gender}
                                        name="gender"
                                        onChange={handleChange}
                                        options={genderOptions}
                                    />
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


            </Grid>

        </>
    )
}

export default Profile