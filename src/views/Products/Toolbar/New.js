import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ModalDialog from '../../../components/Dialog'
import Input from '@components/Input/index';
import FormControl from '@material-ui/core/FormControl';
import Switch from '../../../components/Switch'
import {storeProducts} from '@redux-actions'
import {useDispatch, useSelector} from 'react-redux'

const New = ({ isOpen, handleClose }) => {

    const dispatch = useDispatch()
    const storing = useSelector(({Products}) => Products.storing )
    // const {storing} = useSelector(({Products}) => Products)

    const [form, setForm] = useState({
        active: 1,
        name: '',
        code: ''
    })

    const handleInputChange = (e) => {
        const input = e.target
        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))
    }

    const handleSwitchChange = (e) => {
        setForm((prevState) => (
            { ...prevState, active: e.target.checked ? 1 : 0 }
        ))
    }

    const onExited = () => {
        setForm({
            active: 1,
            code: '',
            name: ''
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(storeProducts({form,handleClose}))
    }

    return (
        <ModalDialog
            onExited={onExited}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            isOpen={isOpen}
            cancelTitle={"Cancel"}
            submitTitle={"Create"}
            title={"New Product"}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <Input
                        disabled={storing}
                        placeholder="Name"
                        name="name"
                        label="Name"
                        fullWidth
                        value={form.name || ''}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input
                        placeholder="Code"
                        name="code"
                        label="Code"
                        fullWidth
                        value={form.code || ''}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                        <Grid alignItems="center" container spacing={3}>
                            <Grid item>{form.active == 1 ? 'Active' : 'Idle'}</Grid>
                            <Switch name={'active'} checked={form.active == 1 ? true : false} onChange={handleSwitchChange} label={"Active"} />
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>

        </ModalDialog>
    )

}

export default New