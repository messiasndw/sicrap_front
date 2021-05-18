import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

export default function BasicPagination({pages = 1,...rest}) {

    const [page, setPage] = useState(1);
    
    const handleChange = (event, value) => {
        setPage(value);
    };

    console.log(page)

    return (
        <Grid container justify="center" >
            <Pagination {...rest} count={pages} page={page} onChange={handleChange} />
        </Grid>
    );
}