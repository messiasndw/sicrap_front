import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ModalDialog from '../../../components/Dialog'
import Input from '../../../components/Input/index';
import FormControl from '@material-ui/core/FormControl';
import Select from '../../../components/Select'
import InputLabel from '../../../components/InputLabel';
import ComboBox from '../../../components/ComboBox'

const Filter = ({ isOpen, handleClose }) => {

    const [form, setForm] = useState({
        active: '',
        code: '',
        name: ''
    })

    useEffect(() => {
    }, [form])

    const statusOptions = [{ label: "Active", value: 1 }, { label: "Idle", value: 0 }]

    const handleInputChange = (e) => {
        const input = e.target
        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))
    }

    const handleSelectChange = (e, input) => {
        setForm((prevState) => (
            { ...prevState, [input.name]: input.value}
        ))
    }

    const activeOptions = [{ label: "Active", value: 1 }, { label: "Idle", value: 0 }]

    return (
        <ModalDialog
            // onEnter={onEnter}
            handleClose={handleClose}
            // handleSubmit={handleSubmit}
            isOpen={isOpen}
            cancelTitle={"Cancel"}
            submitTitle={"Apply"}
            title={"Filter Product"}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <Input required
                        placeholder="Name"
                        isClearable
                        onClear={() => setForm((prevState) => ({ ...prevState, name: '' }))}
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        value={form.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <InputLabel children="Status" />
                    <FormControl fullWidth variant="outlined">
                        <ComboBox name="active"
                            value={form.value} 
                            onChange={handleSelectChange}
                            options={activeOptions} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input
                        isClearable
                        placeholder="Code"
                        value={form.code}
                        onClear={() => setForm((prevState) => ({ ...prevState, code: '' }))}
                        required
                        id="code"
                        label="Code"
                        name="code"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

        </ModalDialog>
    )

}

export default Filter