import Grid from '@material-ui/core/Grid';
import Input from '../../components/Input/index';
import React, { useEffect, useState, useCallback } from 'react'
import CardComponent from '../../components/Card'
import Button from '../../components/Button/index';
import InputLabel from '../../components/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from '../../components/DatePicker/index'
import { useSelector, useDispatch } from 'react-redux'
import ComboBox from '@components/ComboBox'
import { updateProfile } from '@redux-actions'

const Profile = (props) => {

    const dispatch = useDispatch()
    const { name, email, gender, isUpdatingProfile } = useSelector(({ User }) => User)

    const [form, setForm] = useState({
        name,
        email,
        gender
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProfile(form))
    }

    const handleChange = (e) => {
        const input = e.target
        setForm((prevState) => ({
            ...prevState,
            [input.name]: input.value
        }))
    }

    const handleSelectChange = (e, input) => {
        setForm((prevState) => ({
            ...prevState,
            [input.name]: input.value
        }))
    }

    const handleDateChange = (date, value) => {
        setForm((prevState) => ({
            ...prevState,
            birthday: value
        }))
    }

    const genderOptions = [{ label: "Male", value: 'male' }, { label: "Female", value: "female" }, { label: "Other", value: "other" }]

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
                                    disabled={isUpdatingProfile}
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
                                    disabled={isUpdatingProfile}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputLabel children="Gender" />

                                <FormControl fullWidth >

                                    <ComboBox name="gender"
                                        value={genderOptions.filter(option => option.value === form.gender)}
                                        onChange={handleSelectChange}
                                        options={genderOptions}
                                        disabled={isUpdatingProfile}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth >
                                    <DatePicker
                                        label="Birthday"
                                        onChange={handleDateChange}
                                        disabled={isUpdatingProfile}
                                        inputValue={form.birthday}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid container item xs={12} justify="flex-end">
                                <Button disabled={isUpdatingProfile} type="submit" variant="contained">Save</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardComponent>


            </Grid>

        </>
    )
}

export default Profile