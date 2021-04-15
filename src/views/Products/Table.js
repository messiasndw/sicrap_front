import React, { useCallback, useState, useRef, useEffect } from 'react'
import Table from '../../components/Table'
import Edit from './Edit'
import CategoryIcon from '@material-ui/icons/Category';

const DataTable = ({ data, loading }) => {

    const [modal, setModal] = useState({ open: null, data: {} })

    const [stateData, setData] = useState([...data])

    //PASSING DATA PROPS TO THIS PARENT'S STATE IS ESSENTIALY TO MAKE TABLE SELECTION WORK
    useEffect(() => {
        setData(data)
    }, [data])

    const handleEdit = ((items) => {
        setModal({ open: 'edit', data: items })
    })

    const handleDelete = (selectedItem) => {
        setModal({ modal: 'edit', data: selectedItem })
    }

    const toolbarOptions = [
        {icon:<CategoryIcon/>, tooltip:"Edit Categories", multiple:false, onClick: ((numSelected) => {console.log(numSelected)})}
    ]

    const head = [
        { label: "Name", id: 'name', numeric: false, disablePadding: true },
        { label: "Quantity", id: 'quantity', numeric: false, disablePadding: false },
        { label: "Created At", id: 'created_at', numeric: false, disablePadding: false },
        { label: "Code", id: 'id', numeric: false, disablePadding: false },
        { label: "Status", id: 'active', numeric: false, disablePadding: false, type: "active" },
    ]

    return (
        <>
            <Table head={head} items={stateData} handleDelete={handleDelete} name={"products"} loading={loading} handleEdit={handleEdit} toolbarOptions={toolbarOptions} />
            <Edit isOpen={modal.open == 'edit'} data={modal.data} setModal={setModal} />
        </>
    )

}

export default DataTable