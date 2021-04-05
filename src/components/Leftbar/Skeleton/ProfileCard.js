import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/lab/Skeleton';
const useStyles = makeStyles({
    root: {
        margin: "auto",
        marginTop: "100px"
    },
    large: {
        margin: "auto",
        width: "150px",
        height: "150px"
    },
    cardMediaRoot: {

    },
    cardRoot:{
        backgroundColor:"unset",
        boxShadow:"unset"
    }
});

const ProfileCard = (props) => {

    const classes = useStyles()


    return (
        <Box className={classes.root} component="div" >
            <Card classes={{root:classes.cardRoot}}>
                <CardMedia>
                <Skeleton variant="circle" width="150px" height="150px" />
                </CardMedia>

                <CardContent>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Skeleton variant="text" width="100%" height="100%" />
                        </div>
                    <Typography variant="h5" component="h2">
                        {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Skeleton variant="text" width="50%" height="100%" />
                        </div>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">My Profile</Button> */}
                </CardActions>
            </Card>
        </Box >
    )

}

export default ProfileCard