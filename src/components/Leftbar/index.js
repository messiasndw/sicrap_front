import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileCard from './ProfileCard'
import Box from '@material-ui/core/Box';

import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CategoryIcon from '@material-ui/icons/Category';

import {
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    paper: {
        // top: "65px",
        width: "20vw",
        backgroundColor: "#BBC4C2",
        // backgroundImage: "linear-gradient(to bottom right, #189AB4, #05445E)",
        // "&:hover": {
        //     backgroundColor: "blue"
        // },
        borderRight: "0px"
    },
    // root:{
    //     backgroundColor:"#ffc107"
    // },
    list: {
        width: "100%",
    },
    fullList: {
        width: 'auto',
    },
    rootButton: {
        width: "100%",
        marginTop: "20px",
        fontSize: "1.1rem",
        transition: "0.3s",
        "&:hover": {
            // backgroundColor: "none",
            fontSize: "1.5rem"
        },

        "&:focus": {
            backgroundColor: "none",
            fontSize: "1.5rem"
        },
    },
    rootIcon: {
        marginRight: "10px"
    },
    rootActiveButton: {
        backgroundColor: "red"
    }
});

const Leftbar = (props) => {

    const [menu, setMenu] = useState('profile')

    const classes = useStyles();

    const menus = props.menusSidebar.map((menu, key) => {
        return (<ListItem button key={key}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.name} />
        </ListItem>)
    })

    const buttonStyle = menu == 'profile' ? { ...classes.rootActiveButton, ...classes.rootButton } : { ...classes.rootButton }

    return (
        <>
            <Drawer classes={{ paper: classes.paper }} variant={'permanent'} anchor={"left"} open={props.isOpen} >
                <Grid spacing={12} container>
                    <ProfileCard />

                    <Grid item xs={12}>
                        <Link to="/profile">

                            <Button
                                classes={{ root: classes.rootButton }}
                            >
                                <AccountCircleIcon classes={{ root: classes.rootIcon }} />PROFILE</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/products">

                            <Button classes={{ root: classes.rootButton }} ><LibraryBooksIcon classes={{ root: classes.rootIcon }} />PRODUCTS</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                    <Link to="/categories">
                        <Button classes={{ root: classes.rootButton }} ><CategoryIcon classes={{ root: classes.rootIcon }} />CATEGORIES</Button>
                    </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/orders">

                            <Button
                                classes={{ root: classes.rootButton }}
                            >
                                <AccountCircleIcon classes={{ root: classes.rootIcon }} />ORDERS</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Drawer>
        </>
    );
}

export default Leftbar