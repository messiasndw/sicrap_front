import React, { useState } from 'react'
import Table from './Table'
import Grid from '@material-ui/core/Grid';
import HeaderOptions from './HeaderOptions'
import Chip from '../../components/Chip';

const Products = (props) => {

    const [items,setItems] = useState([
        {
            name: "Car",
            quantity: 5,
            created_at: "02-02-2002",
            options: "OPTIONS HERE",
            id: 54,
            user_id: 1,
            active: 1,
            categories:[
                {
                    name:"Food",
                    id:5
                },
                {
                    name:"Sport",
                    id:6
                }
            ]
        },
        {
            name: "Table",
            quantity: 14,
            created_at: "02-02-2011",
            options: "OPTIONS HERE",
            id: 23,
            user_id: 1,
            active: 1
        },
        {
            name: "Fork",
            quantity: 70,
            created_at: "02-02-2003",
            options: "OPTIONS HERE",
            id: 8,
            user_id: 1,
            active: 0
        }
    ])

    setTimeout(function () {
        if(items.length<4){
            setItems((prevState) => (
                [...prevState,{
                    name: "Forkaa",
                    quantity: 703,
                    created_at: "02-02-2003",
                    options: "OPTIONS HERE",
                    id: 83,
                    user_id: 1,
                    active: 0
                }]
            ))
        }
    }, 3000);

    return (
        <Grid item md={12} sm={12} xs={12}>
            <HeaderOptions />
            <Table data={items} loading={false} />
        </Grid>
    )

}

export default Products