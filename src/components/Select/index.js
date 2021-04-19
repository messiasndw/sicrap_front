import React from 'react'
import Select from '@material-ui/core/Select';
import useStyles from './styles'
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
const CustomSelect = ({options = [],...props}) => {

    const classes = useStyles()
    return (
        <Select {...props}
            classes={{root:classes.root}}
            input={<Input classes={{
                underline: classes.underline,
            }} />}

            children={
                options.map((option,index) => {
                    return (
                        <MenuItem key={index} value={option.value} >{option.label}</MenuItem>
                    )
                })
            }
        />
    )
}

export default CustomSelect