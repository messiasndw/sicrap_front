import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ModalDialog from '../../../components/Dialog'
import Input from '@components/Input/index';
import FormControl from '@material-ui/core/FormControl';
import Switch from '../../../components/Switch'
import { storeProducts } from '@redux-actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '@hooks/useForm'
import {newFormValidation as validation} from '@validations/products'

const New = ({ isOpen, handleClose }) => {

    const dispatch = useDispatch()
    const storing = useSelector(({ Products }) => Products.storing)

    const initialValues = {
        active: 1,
        code: '',
        name: ''
    }

    const onSubmit = (form, validation) => {
        if (validation.isAllValid()) {
            dispatch(storeProducts({ form, handleClose }))
        }
    }

    const { v, form, setForm, handleSubmit, handleInputChange, handleSwitchChange } = useForm({
        initialValues,
        onSubmit,
        validation
    })
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
            // disableSubmit={!v.isAllValid()}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            isOpen={isOpen}
            cancelTitle={"Cancel"}
            submitTitle={"Create"}
            title={"New Product"}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <Input
                        error={!v.isValid('name')}
                        errorMessage={v.getMessage('name')}
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
                        error={!v.isValid('code')}
                        errorMessage={v.getMessage('code')}
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