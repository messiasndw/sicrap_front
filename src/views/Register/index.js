import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import CardComponent from '../../components/Card'
import Button from '../../components/Button/index';
import Select from '../../components/Select/index';
import InputLabel from '../../components/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from '../../components/DatePicker/index'
import Input from '../../components/Input/index';
import ComboBox from '@components/ComboBox'

const Register = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        gender: '',
        birthday: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const handleSelectChange = (e, input, reason) => {
        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))
    }

    const genderOptions = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'None', value: 'none' }]

    return (
        <Grid container xs={12} justify="center">
            <CardComponent>
                <form noValidate>
                    <Grid container justify='center' alignItems='center' spacing={3}>

                        <Grid item xs={12} md={12}>
                            <Input required
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                                value={form.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Input
                                placeholder='Email'
                                required
                                id="email"
                                label="Email"
                                name="email"
                                fullWidth
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel children="Gender" />
                            <FormControl fullWidth >
                                <ComboBox name="gender"
                                    value={genderOptions.filter(option => option.value === form.gender)}
                                    onChange={handleSelectChange}
                                    options={genderOptions} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
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
    )
}

export default Register