import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertContext from '../../context/alertContext'

export default function AlertDialog() {

    const alert = useContext(AlertContext)
 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleConfirm = () => {
        alert.setOpen(false)
        alert.actions.onConfirm()
    }

    const handleClose = () => {
        alert.setOpen(false)
        alert.actions.onClose()
    };


    return (
        <div>
            <Dialog
                open={alert.isOpen || false}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{alert.title || 'NO TITLE'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {alert.body || 'NO BODY'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
          </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}