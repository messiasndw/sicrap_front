import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ProfileCard from './ProfileCard/index'
import Menus from './Menus'
import useStyles from './styles'

const Leftbar = (props) => {

    const [menu, setMenu] = useState('profile')

    const classes = useStyles();

    return (
        <>
            <Drawer classes={{ paper: classes.drawer }} variant={'permanent'} anchor={"left"} >
                <Grid >
                    <ProfileCard />
                    <Menus/>
                </Grid>
            </Drawer>
        </>
    );
}

export default Leftbar