import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './styles'

export default function FormDialog(props) {

  const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const classes = useStyles()

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

      <Dialog onEnter={props.onEnter} onExited={props.onExited} disableBackdropClick disableEscapeKeyDown classes={{ paperWidthSm: classes.paperWidthSm }} open={props.isOpen} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        
        <DialogTitle classes={{ root: classes.titleRoot }} id="form-dialog-title">{props.title}</DialogTitle>

        <DialogContent classes={{ root: classes.contentRoot }}>
      <form id="dialogForm" onSubmit={props.handleSubmit}>

          {props.children}
        </form>

          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button classes={{ text: classes.button }} onClick={props.handleClose} >
            {props.cancelTitle}
          </Button>
          <Button form="dialogForm" type="submit" classes={{ text: classes.button }} >
            {props.submitTitle}
          </Button>
        </DialogActions>

      </Dialog>

    </div>
  );
}
