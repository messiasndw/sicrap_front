import React, { useState, useEffect, useRef } from 'react'
import Table from './Table/index'
import Grid from '@material-ui/core/Grid';
import Toolbar from './Toolbar'
import { useSelector, useDispatch } from 'react-redux'
import {fetchProducts} from '@redux-actions'

const Products = (props) => {
    
    const dispatch = useDispatch()

    const data = useSelector(({Products}) => Products.data);
    const fetching = useSelector(({Products}) => Products.fetching);

    useEffect(() => {
        setTimeout(function(){ dispatch(fetchProducts()); }, 3000);
        
    },[])

    return (
        <Grid item md={12} sm={12} xs={12}>
            <Toolbar/>
            <Table data={data} fetching={fetching}/>
        </Grid>
    )

}

export default Products