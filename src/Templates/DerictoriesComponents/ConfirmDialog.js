import React, { memo } from "react";
import { connect } from "react-redux";
//material ui
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from '@material-ui/core/Button';

const ConfirmDialog = memo(
  ({ open, handleClose, confirmFunction, confirmMessage }) => {
    return (
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"} fullWidth>
        <DialogTitle>{confirmMessage ? confirmMessage : " "}</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={confirmFunction}>Подтвердить</Button>
        </DialogActions>
      </Dialog>
    );
  }
);
const mapStateToProps = state => ({
  confirmMessage: state.UI.confirmMessage
});
export default connect(mapStateToProps, {})(ConfirmDialog);
