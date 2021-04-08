import React from 'react'
import Select from '@material-ui/core/Select';
import useStyles from './styles'
import Input from '@material-ui/core/Input';
const CustomSelect = (props) => {

    const classes = useStyles()
    return (
        <Select {...props}
            classes={{root:classes.root}}
            input={<Input classes={{
                underline: classes.underline,
            }} />}
        />
    )
}

export default CustomSelect