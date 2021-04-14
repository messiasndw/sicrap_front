import React, { useCallback, useState } from 'react'
import Table from '../../components/Table'
import Edit from './Edit'

export default function ({ data, loading }) {

    const [modal, setModal] = useState({ open: null, data: {} })

    const handleEdit = useCallback((items) => {
        setModal({ open: 'edit', data: items })
    }, [])

    const handleDelete = (selectedItem) => {
        setModal({ modal: 'edit', data: selectedItem })
    }


    // const options = [
    //     {label: "EDIT",
    //     event: handleEdit,
    //     icon: <ListIcon />
    //     },
    //     {label: "ORDER",
    //     event: handleOrder,
    //     icon: <AttachMoneyIcon />
    //     }
    // ]

    const head = [
        { label: "Name", id: 'name', numeric: false, disablePadding: true, field: "name" },
        { label: "Quantity", id: 'quantity', numeric: false, disablePadding: false, field: "quantity" },
        { label: "Created At", id: 'created_at', numeric: false, disablePadding: false, field: "created_at" },
        { label: "Code", id: 'id', numeric: false, disablePadding: false, field: "id" },
        { label: "Status", id: 'active', numeric: false, disablePadding: false, field: "active" },
        // {label:"Options",id:'options', numeric: false, disablePadding: false, field:"options", },
    ]

    return (
        <>
            <Table head={head} items={data} handleDelete={handleDelete} name={"products"} loading={loading} handleEdit={handleEdit} />
            <Edit isOpen={modal.open == 'edit'} data={modal.data} setModal={setModal} />
        </>
    )

}