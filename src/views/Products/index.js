import React, { useState, useEffect, useRef } from 'react'
import Table from './Table'
import Grid from '@material-ui/core/Grid';
import HeaderOptions from './HeaderOptions'
import { useSelector, useDispatch } from 'react-redux'
import {fetch} from '@redux-actions'


const Products = (props) => {

    const dispatch = useDispatch()
    // const filter = useSelector(({Products}) => Products.filter, (prev,next) => prev === next)
    const filter = useSelector(({Products}) => Products.filter)

    useEffect(() => {
        dispatch(fetch())
    },[])

    // IF FILTER IS DIFFERENT THAN {} THEN FETCH! BASICALLY WHENEVER FILTER CHANGES AFTER FIRST RENDER
    !!Object.keys(filter).length && dispatch(fetch())

    return (
        <Grid item md={12} sm={12} xs={12}>
            <HeaderOptions/>
            <Table/>
        </Grid>
    )

}

export default Products