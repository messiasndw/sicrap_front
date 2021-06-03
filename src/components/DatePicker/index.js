import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyles from './styles';
import InputLabel from '@material-ui/core/InputLabel';

const DatePicker = (props) => {

    const classes = useStyles()

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            inputProps={{classes:{underline:classes.underline}}}
            maskChar={" "}            
                // InputLabelProps={{ classes: { root: classes.root } }}
                // InputProps={{ classes: { root: classes.root } }}
                // classes={{root:classes.roots}}
                {...props}
                format={"MM/dd/yyyy"}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker