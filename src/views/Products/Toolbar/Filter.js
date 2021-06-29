import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ModalDialog from '@components/Dialog'
import Input from '@components/Input/index';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@components/InputLabel';
import ComboBox from '@components/ComboBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@redux-actions'
import { useForm } from '@hooks/useForm'

const Filter = ({ isOpen, handleClose }) => {

    const dispatch = useDispatch()
    const filter = useSelector(({ Products }) => Products.filter)

    const { form, setForm, handleSubmit, handleInputChange, handleSelectChange } = useForm({
        initialValues: { ...filter },
        onSubmit
    })

    function onSubmit(form) {
        dispatch(fetchProducts({ ...form, page: '' }))
        handleClose()
    }
    
    const onEnter = () => {
        setForm({ ...filter })
    }

    const activeOptions = [{ label: "Active", value: 1 }, { label: "Idle", value: 0 }]
    const perPageOptions = [{ label: "5", value: 5 }, { label: "10", value: 10 }, { label: "15", value: 15 }, { label: "20", value: 20 }]

    return (
        <ModalDialog
            onEnter={onEnter}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            isOpen={isOpen}
            cancelTitle={"Cancel"}
            submitTitle={"Apply"}
            title={"Filter Product"}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <Input
                        placeholder="Name"
                        isClearable
                        onClear={() => setForm((prevState) => ({ ...prevState, name: '' }))}
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        value={form.name || ''}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Input
                        isClearable
                        placeholder="Code"
                        value={form.code || ''}
                        onClear={() => setForm((prevState) => ({ ...prevState, code: '' }))}
                        id="code"
                        label="Code"
                        name="code"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputLabel children="Status" />
                    <FormControl fullWidth variant="outlined">
                        <ComboBox name="active"
                            isClearable
                            value={activeOptions.filter(option => option.value === form.active)}
                            onChange={handleSelectChange}
                            options={activeOptions} />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputLabel children="Per Page" />
                    <FormControl fullWidth variant="outlined">
                        <ComboBox name="perPage"
                            value={perPageOptions.filter(option => option.value === form.perPage)}
                            onChange={handleSelectChange}
                            options={perPageOptions} />
                    </FormControl>
                </Grid>

            </Grid>
        </ModalDialog>
    )

}

export default Filter