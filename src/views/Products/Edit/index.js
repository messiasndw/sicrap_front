import React, {useState} from 'react'
import ModalDialog from '../../../components/Dialog'
import Grid from '@material-ui/core/Grid';
import InputLabel from '../../../components/InputLabel';
import TextField from '../../../components/TextField/index';
import FormControl from '@material-ui/core/FormControl';
import Switch from '../../../components/Switch'

const Edit = ({ setModal, isOpen, data }) => {

    const handleClose = () => {
        setModal({ open: null, data: {} })
    }

    const [form,setForm] = useState({})

    const handleInputChange = (e) => {
        const input = e.target
        setForm((prevState) => (
            {...prevState, [input.name]:input.value}
        ))
        console.log(form)
    }

    const handleSwitchChange = (e) => {
        console.log(e.target.checked)
        setForm((prevState) => (
            {...prevState,active:e.target.checked}
        ))
    }

    const onEnter = () => {
        setForm({...data})
    }

    return (
        <ModalDialog onEnter={onEnter} handleClose={handleClose} isOpen={isOpen} cancelTitle={"Cancel"} submitTitle={"Save"} title={"Edit Product"}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <TextField required
                            defaultValue={data.name}
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            onChange={handleInputChange}
                        // autoComplete="cc-name" 
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            // value={data.id || ''}
                            defaultValue={data.id}
                            required
                            id="code"
                            label="Code"
                            name="code"
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </FormControl>
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