import React, { useState, useEffect, useRef } from 'react'
import Table from './Table/index'
import Grid from '@material-ui/core/Grid';
import Toolbar from './Toolbar'
import { useSelector, useDispatch } from 'react-redux'
import {fetchProducts} from '@redux-actions'

const Products = (props) => {
    
    const dispatch = useDispatch()

    const data = useSelector(({Products}) => Products.data);
    const isFetching = useSelector(({Products}) => Products.isFetching);
    useEffect(() => {
        // setTimeout(function(){ dispatch(fetchProducts()); }, 3000);
        dispatch(fetchProducts())
    },[])

    return (
        <Grid item md={12} sm={12} xs={12}>
            <Toolbar/>
            <Table data={data} isFetching={isFetching}/>
        </Grid>
    )

}

export default Products