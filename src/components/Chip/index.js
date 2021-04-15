import React from 'react'
import { makeStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

export default React.memo(function ({ type, ...rest }) {

    const useStyles = makeStyles(theme => ({
        color: {
            backgroundColor: type == 'danger' ? '#9c2a2a' : type == 'success' ? '#1e580e' : type == 'info' ? 'blue' : 'blue',
            color:'white',
            height:"fit-content"
        }
    }))

    const classes = useStyles()
    console.log(classes)
    return (
        <Chip {...rest} classes={{root:classes.color}} />
    )
})