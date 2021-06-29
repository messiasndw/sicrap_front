import React, { useState } from 'react'
import ModalDialog from '../../../components/Dialog'
import Grid from '@material-ui/core/Grid';
import InputLabel from '../../../components/InputLabel';
import Input from '../../../components/Input/index';
import FormControl from '@material-ui/core/FormControl';
import Switch from '../../../components/Switch'
import { updateProduct } from '@redux-actions'
import { useForm } from '@hooks/useForm'
import { useSelector, useDispatch } from 'react-redux';
import {updateFormValidation as validation} from '@validations/products'

const Edit = ({ setModal, isOpen, data}) => {

    const isUpdating = useSelector(({ Products }) => Products.isUpdating)
    const dispatch = useDispatch()

    const onSubmit = (form, validation) => {
        if (validation.isAllValid()) {
            dispatch(updateProduct({form}))
        }
    }

    const { v, form, setForm, handleInputChange, handleSwitchChange, handleSubmit } = useForm({
        initialValues: {...data},
        onSubmit,
        validation
    })

    const handleClose = () => {
        setModal({ open: null, data: {} })
    }

    const onEnter = () => {
        setForm({ ...data })
    }

    return (
        <ModalDialog
            onEnter={onEnter}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            isOpen={isOpen}
            cancelTitle={"Cancel"}
            submitTitle={"Save"}
            title={"Edit Product"}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <Input required
                        error={!v.isValid('name')}
                        errorMessage={v.getMessage('name')}
                        defaultValue={data.name}
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input
                        error={!v.isValid('code')}
                        errorMessage={v.getMessage('code')}
                        defaultValue={data.code}
                        required
                        id="code"
                        label="Code"
                        name="code"
                        fullWidth
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

export default Edit