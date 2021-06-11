import React, { useCallback, useState, useRef, useEffect } from 'react'
import Table from '@components/Table'
import Edit from './Edit'
import CategoryIcon from '@material-ui/icons/Category';
import Pagination from '@components/Pagination'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts, deleteProducts} from '@redux-actions'
import {useAlertDialog} from '../../../hooks/useAlert'

const DataTable = ({data,isFetching}) => {

    const alert = useAlertDialog()
    const dispatch = useDispatch()

    const pagination = useSelector(({Products}) => Products.pagination)
    const [modal, setModal] = useState({ open: null, data: {} })

    const handleEdit = ((items) => {
        setModal({ open: 'edit', data: items })
    })

    const handleDelete = useCallback((selectedItem) => {
        const itens = selectedItem.map(item => ' '+item.name)
        const productsIds = selectedItem.map(item => item._id)
        const word = itens.length > 1 ? 'products' : 'product'
        alert({
            title: "Are you sure?",
            body: `Do you want to delete the ${word}: ${itens} ?`,
            onConfirm: () => {dispatch(deleteProducts(productsIds))},
            onClose: () => {}
        })
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