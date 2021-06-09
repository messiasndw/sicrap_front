import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux'

export default function BasicPagination({ pages = 1, currentPage, nextPage, ...rest }) {

    const dispatch = useDispatch()
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(currentPage || 1)
    }, [currentPage])

    const handleChange = (event, value) => {
        setPage(value)
        dispatch(nextPage({ page: value }))
    };

    return (
        <Fragment>
            <Grid container justify="center" >
                <Pagination {...rest} count={pages} page={page} onChange={handleChange} />
            </Grid>
        </Fragment>

    );
}