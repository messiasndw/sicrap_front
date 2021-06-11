import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ModalDialog from '../../../components/Dialog'
import Input from '@components/Input/index';
import FormControl from '@material-ui/core/FormControl';
import Switch from '../../../components/Switch'
import { storeProducts } from '@redux-actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '@hooks/useForm'

const New = ({ isOpen, handleClose }) => {

    const dispatch = useDispatch()

    const initialValues = {
        active: 1,
        code: '',
        name: ''
    }

    const onSubmit = (form) => {
        dispatch(storeProducts({ form, handleClose }))
    }

    const {check, form, setForm, handleSubmit, handleInputChange, handleSwitchChange } = useForm({
        initialValues,
        onSubmit
    })

    const storing = useSelector(({ Products }) => Products.storing)

    const onExited = () => {
        setForm({
            active: 1,
            code: '',
            name: ''
        })
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
                        error={!check.name.required.isValid}
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