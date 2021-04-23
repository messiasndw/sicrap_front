import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import useStyles from './style'
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

export default function ComboBox({ options = [], onChange, name, placeholder, value, ...props }) {

    const classes = useStyles()

    return (
        <Autocomplete
            classes={{ root: classes.autoCompleteRoot }}
            // freeSolo={true}
            {...props}
            value={value}
            options={options}
            onChange={(event, value, reason) => { onChange(event, !!value ? { ...value, name: name } : { label: "", value: "", name: name }, reason) }}
            id="combo-box-demo"
            getOptionLabel={(option) => option.label || ''}
            //   style={{ width: 300 }}
            renderInput={(params) => {
                // <FormControl fullWidth variant="outlined">
                console.log(params.InputProps.endAdornment.props.children)
                return (
                    <TextField {...params} classes={{ root: classes.inputRoot }}
                        InputProps={{
                            ...params.InputProps, classes: { underline: classes.underline, root: classes.inputRoot },
                            endAdornment: [!!value && Object.keys(value).length > 0 && <IconButton key={0} onClick={params.InputProps.endAdornment.props.children[0].props.onClick} classes={{ root: classes.IconButtonRoot }}><CancelRoundedIcon classes={{ root: classes.iconRoot }} /></IconButton>,
                            params.InputProps.endAdornment.props.children[1]],
                        }} placeholder={placeholder || 'Select'} />)
            }}
        />
    );
}
