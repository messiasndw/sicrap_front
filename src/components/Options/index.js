import React from 'react'
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles'

const Options = (props) => {

    const classes = useStyles()
    return (
        <Grid classes={{ root: classes.root }} container item xs={12} justify="flex-end">
            {props.buttons.map((button, index) => (
                <Button onClick={button.onClick} key={index} classes={{root: index == 0 && props.buttons>1 ? classes.rootButton : null}}>
                    {
                        button.icon
                    }

                </Button>
            ))}
        </Grid>
    )
}

export default Options