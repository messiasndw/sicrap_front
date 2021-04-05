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
                    <Avatar className={classes.large} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                </CardMedia>

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        NADIOW613
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        ROOKIE
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">My Profile</Button> */}
                </CardActions>
            </Card>
        </Box >
    )

}

export default ProfileCard