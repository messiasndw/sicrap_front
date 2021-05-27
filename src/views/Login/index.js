import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import CardComponent from '../../components/Card'
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import {useSelector, useDispatch} from 'react-redux'
import {login} from '@redux-actions'

const Login = () => {

    const dispatch = useDispatch()

    const isLogging = useSelector(({User}) => User.isLogging)
    console.log(isLogging)

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(form))
    }

    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const genderOptions = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'None', value: 'none' }]

    return (
        <Grid container xs={12} justify="center">
            <CardComponent>
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container justify='center' alignItems='center' spacing={3}>

                        
                        <Grid item xs={12} md={12}>
                            <Input
                                disabled={isLogging}
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
                            <Input required
                                disabled={isLogging}
                                type='password'
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Password"
                                fullWidth
                                value={form.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid container item xs={12} justify="flex-end">
                            <Button disabled={isLogging} type="submit" variant="contained">LOGIN</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardComponent>
        </Grid>
    )
}

export default Login