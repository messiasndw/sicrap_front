import React from 'react'
import Avatar from './Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from '../styles'

const ProfileCard = (props) => {

    const classes = useStyles()

    return (
        <Box className={classes.boxRoot} component="div" >
            <Card classes={{ root: classes.cardRoot }}>
                <CardMedia>
                    <Avatar/>
                </CardMedia>

                <CardContent classes={{root:classes.titleContent}}>
                    <Typography classes={{body1:classes.profileTitle}} color="textSecondary" gutterBottom>
                        NADIOW613
                    </Typography>
                    <Typography variant="h5" component="h2">
                    </Typography>
                    <Typography classes={{body1:classes.profileSubTitle}} color="textSecondary">
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