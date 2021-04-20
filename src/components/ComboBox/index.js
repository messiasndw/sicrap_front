import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import useStyles from './style'

export default function ComboBox({options= [], onChange, name, placeholder, ...props }) {

    const classes = useStyles()

    return (
        <Autocomplete
        classes={{root:classes.autoCompleteRoot}}
        freeSolo={true}
            {...props}
            options={options}
            onChange={(event,value,reason) => {onChange(event, !!value ? {...value,name:name} : {label:"",value:"",name:name}, reason)}}
            id="combo-box-demo"
            getOptionLabel={(option) => option.label || ''}
            //   style={{ width: 300 }}
            renderInput={(params) => (
                // <FormControl fullWidth variant="outlined">
                <TextField InputProps={{ ...params.InputProps, startAdornment: <InputAdornment position="start">Kg</InputAdornment> }}  {...params} placeholder={placeholder || 'Select'} />
                //   </FormControl>
            )}
        />
    );
}
