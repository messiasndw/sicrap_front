import React, { useState, useEffect } from 'react'
import Table from './Table'
import Grid from '@material-ui/core/Grid';
import HeaderOptions from './HeaderOptions'
import { useSelector, useDispatch } from 'react-redux'
import {fetch} from '@redux-actions'


const Products = (props) => {

    const dispatch = useDispatch()
    const Products = useSelector(({Products}) => Products)

    useEffect(() => {
        dispatch(fetch())
        // fetch()
        return () => {
        }
    },[])

    useEffect(() => {
        dispatch(fetch())
    },[Products.filter])

    
    const [items,setItems] = useState([
        
    ])

    return (
        <Grid item md={12} sm={12} xs={12}>
            <HeaderOptions/>
            <Table/>
        </Grid>
    )

}

export default Products