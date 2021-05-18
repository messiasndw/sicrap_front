import React, { useCallback, useState, useRef, useEffect } from 'react'
import Table from '@components/Table'
import Edit from './Edit'
import CategoryIcon from '@material-ui/icons/Category';
import Pagination from '@components/Pagination'

const DataTable = ({data,fetching}) => {

    const [modal, setModal] = useState({ open: null, data: {} })
    console.log('table run')
    //PASSING DATA PROPS TO THIS PARENT'S STATE IS REQUIRED TO MAKE TABLE SELECTION WORK
  

    const handleEdit = useCallback(((items) => {
        setModal({ open: 'edit', data: items })
    }),[])

    const handleDelete = useCallback((selectedItem) => {
        setModal({ modal: 'edit', data: selectedItem })
    },[])

    const toolbarOptions = [
        {icon:<CategoryIcon/>, tooltip:"Edit Categories", multiple:false, onClick: ((numSelected) => {})}
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
            <Table head={head} items={data} handleDelete={handleDelete} name={"products"} loading={fetching} handleEdit={handleEdit} toolbarOptions={toolbarOptions} />
            <Pagination pages={5} />
            <Edit isOpen={modal.open == 'edit'} data={modal.data} setModal={setModal} />
        </>
    )

}

export default React.memo(DataTable)