import React from 'react'
import Table from './Table'
import Grid from '@material-ui/core/Grid';
import Options from '../../components/Options'

const Products = (props) => {

    return (
        <Grid item md={12} sm={12} xs={12}>
            <Options />
            <Table />
        </Grid>
    )

}

export default Products