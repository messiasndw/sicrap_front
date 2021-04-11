import React from 'react'
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles'

const Options = (props) => {

    const classes = useStyles()

    return (
        <Grid classes={{root:classes.root}} container item xs={12} justify="flex-end">
            <Button classes={{root:classes.rootButton}} variant="contained">
                <FilterListIcon/>
            </Button>
            <Button variant="contained">
                <AddIcon/>
            </Button>
        </Grid>
    )
}

export default Options