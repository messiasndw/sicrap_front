import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import ModalDialog from '../../../components/Dialog'

const Filter = ({isOpen, handleClose}) => {
 
    return (
        <ModalDialog
            // onEnter={onEnter}
            handleClose={handleClose}
            // handleSubmit={handleSubmit}
            isOpen={isOpen}
            cancelTitle={"Cancel"}
            submitTitle={"Apply"}
            title={"Filter Product"}>
            <Grid container spacing={3}>
                
            </Grid>

        </ModalDialog>
    )

}

export default Filter