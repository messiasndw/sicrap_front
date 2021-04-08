import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import useStyles from '../styles'

const UserAvatar = (props) => {

    const classes = useStyles()

    return (
        <Avatar className={classes.large} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
    )
}

export default UserAvatar