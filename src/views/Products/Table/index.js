import React, { useCallback, useState, useRef, useEffect } from 'react'
import Table from '@components/Table'
import Edit from './Edit'
import CategoryIcon from '@material-ui/icons/Category';
import Pagination from '@components/Pagination'
import {useSelector} from 'react-redux'
import {fetchProducts} from '@redux-actions'

const DataTable = ({data,isFetching}) => {

    const pagination = useSelector(({Products}) => Products.pagination)

    const [modal, setModal] = useState({ open: null, data: {} })

    const handleEdit = useCallback(((items) => {
        setModal({ open: 'edit', data: items })
    }),[])

    const handleDelete = useCallback((selectedItem) => {
        console.log(selectedItem)
    },[])

    const toolbarOptions = [
        {icon:<CategoryIcon/>, tooltip:"Edit Categories", multiple:false, onClick: ((numSelected) => {})}
    ]

    const head = [
        { label: "Name", id: 'name', numeric: false, disablePadding: true },
        { label: "Code", id: 'code', numeric: false, disablePadding: false },
        { label: "Created At", id: 'createdAt', numeric: false, disablePadding: false, type: "date" },
        { label: "Status", id: 'active', numeric: false, disablePadding: false, type: "active" },
    ]

    return (
        <>
            <Table head={head} items={data} handleDelete={handleDelete} name={"products"} loading={isFetching} handleEdit={handleEdit} toolbarOptions={toolbarOptions} />
            <Pagination nextPage={fetchProducts} pages={pagination.totalPages} currentPage={pagination.currentPage} />
            <Edit isOpen={modal.open == 'edit'} data={modal.data} setModal={setModal} />
        </>
    )

}

export default React.memo(DataTable)