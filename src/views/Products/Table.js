import React from 'react'
import Table from '../../components/Table'
import ListIcon from '@material-ui/icons/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


export default function (props) {

    const items = [
        {
            name:"Car",
            quantity:5,
            created_at:"02-02-2002",
            options:"OPTIONS HERE",
            id:54
        },
        {
            name:"Table",
            quantity:14,
            created_at:"02-02-2011",
            options:"OPTIONS HERE",
            id:23
        },
        {
            name:"Fork",
            quantity:70,
            created_at:"02-02-2003",
            options:"OPTIONS HERE",
            id:8
        }
    ]
    
    const handleEdit = () => {

    }

    const handleOrder = () => {

    }

    const options = [
        {label: "EDIT",
        event: handleEdit,
        icon: <ListIcon />
        },
        {label: "ORDER",
        event: handleOrder,
        icon: <AttachMoneyIcon />
        }
    ]

    const head = [
        {label:"Name",id:'name', numeric: false, disablePadding: true, field:"name"},
        {label:"Quantity",id:'quantity', numeric: false, disablePadding: false, field:"quantity"},
        {label:"Created At",id:'created_at', numeric: false, disablePadding: false, field:"created_at"},
        {label:"Options",id:'options', numeric: false, disablePadding: false, field:"options", options: options},
    ]

    return (
        <Table head={head} items={items} handleDelete={() => console.log("deletados")} name={"products"} loading={false} />
    )

}