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
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    paper: {
        width: "20vw",
        backgroundColor: "rgb(230 230 230)",
        borderRight: "0px"
    },
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
    },
    gridRoot:{
        marginBottom:"25px",
    },
    skeletonRoot: {
        borderRadius:"5px"
    }
});

const LeftbarSkeleton = (props) => {

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

                    <Grid classes={{root:classes.gridRoot}} item xs={12}>
                        <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="50" height="45px" />
                    </Grid>
                    <Grid classes={{root:classes.gridRoot}} item xs={12}>
                    <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="50" height="45px" />
                    </Grid>
                    <Grid classes={{root:classes.gridRoot}} item xs={12}>
                    <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="50" height="45px" />
                    </Grid>
                    <Grid classes={{root:classes.gridRoot}} item xs={12}>
                    <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="50" height="45px" />
                    </Grid>
                </Grid>
            </Drawer>
        </>
    );
}

export default LeftbarSkeleton