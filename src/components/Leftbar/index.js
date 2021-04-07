import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ProfileCard from './ProfileCard'
import Menus from './Menus'
import useStyles from './styles'

const Leftbar = (props) => {

    const [menu, setMenu] = useState('profile')

    const classes = useStyles();

    return (
        <>
            <Drawer classes={{ paper: classes.paper }} variant={'permanent'} anchor={"left"} >
                <Grid spacing={2} container>
                    <ProfileCard />
                    <Menus/>
                </Grid>
            </Drawer>
        </>
    );
}

export default Leftbar