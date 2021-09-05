import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "flex",
    fontFamily: 'Open Sans',
  },
  btnSave: {
    display: "flex",
    alignItems: "center",
    left: "-75px",
    marginLeft: "auto",
    marginTop: "-10px",
    marginBottom: "-5px",
    borderRadius: "10px",
    fontFamily: 'Open Sans',
    backgroundColor: "#FCB877",
    color: "#fff",
    fontWeight: '500',
    textTransform: 'none',
    outline: 'none !important',
    minWidth: "60px",
    maxWidth: "60px",
    justifyContent: "space-evenly",
    top: "0rem",
    "&:hover": {
      borderBottom: "none",
      outline: 'none !important',
      color: "#008968",
      backgroundColor: "transparent"
    }
  },
  dialogContent: {
    fontFamily: 'Open Sans',
    marginTop: "-1.5rem"
  },
}));

export default function TelHandle() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EditIcon style={{color:'gray'}} variant="outlined" color="primary" onClick={handleClickOpen}>
        
        </EditIcon>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle disableTypography style={{fontFamily: 'Open Sans', fontSize:'20px', fontWeight:'bold'}} id="form-dialog-title">Modify Telegram handle</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Telegram handle"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btnSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
