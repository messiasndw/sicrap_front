import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import ProfileCard from './ProfileCard'

import Skeleton from '@material-ui/lab/Skeleton';

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

    const buttonStyle = menu == 'profile' ? { ...classes.rootActiveButton, ...classes.rootButton } : { ...classes.rootButton }

    return (
        <>
            <Drawer classes={{ paper: classes.paper }} variant={'permanent'} anchor={"left"} >
                <Grid container>
                    
                    <ProfileCard />

                    <Grid container justify='center' alignItems='center' classes={{root:classes.gridRoot}} item xs={12}>
                        <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="80%" height="45px" />
                    </Grid>
                    <Grid container justify='center' alignItems='center' classes={{root:classes.gridRoot}} item xs={12}>
                        <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="80%" height="45px" />
                    </Grid>
                    <Grid container justify='center' alignItems='center' classes={{root:classes.gridRoot}} item xs={12}>
                        <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="80%" height="45px" />
                    </Grid>
                    <Grid container justify='center' alignItems='center' classes={{root:classes.gridRoot}} item xs={12}>
                        <Skeleton classes={{root:classes.skeletonRoot}} variant="rect" width="80%" height="45px" />
                    </Grid>
                </Grid>
            </Drawer>
        </>
    );
}

export default LeftbarSkeleton