import React, { Component } from "react";
import PropTypes from "prop-types";
//redux
import { connect } from "react-redux";
import { logOut } from "@AppStore/Actions/User";
import {
  cancleCycleErrorConnected,
  toggleConfirmOpenDialog
} from "@AppStore/Actions/Ui.types";
//material
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
//components
import Navbar from "./Navbar";
import Notification from "../Notifications/Notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import { DialogActions } from "@material-ui/core";

export class NavbarContainer extends Component {
  render() {
    const {
      /* loaders */
      loading_data,
      loading_user,
      success,
      success_mess,
      error,
      error_mess,
      authenticated,
      error_network,
      title,
      userInterface,
      showRegSection,
      user,
      isConnected,
      openConfirmDialog,
      logOut
    } = this.props;
    return (
      <>
        <Navbar
          isConnected={isConnected}
          authenticated={authenticated}
          logOut={logOut}
          title={title}
          userInterface={userInterface}
          showRegSection={showRegSection}
          user={user}
        />
        <div style={{ height: "4px" }}>
          {loading_data ||
            (loading_user && <LinearProgress color="secondary" />)}
        </div>
        {success && Notification(success, success_mess, "green", "success")}
        {error && Notification(error, error_mess, "red", "error")}
        {
          <Dialog open={error_network} style={{ zIndex: 99999 }}>
            <DialogContent>
              <div>Восстановление сети, отправка данных...</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CircularProgress color="secondary" />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.cancleCycleErrorConnected}>
                отмена
              </Button>
            </DialogActions>
          </Dialog>
        }
      </>
    );
  }
}
NavbarContainer.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  success_mess: PropTypes.string,
  error_mess: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  loading_user: PropTypes.bool.isRequired,
  loading_data: PropTypes.bool.isRequired,
  cancleCycleErrorConnected: PropTypes.func.isRequired,
  userInterface: PropTypes.array.isRequired,
  showRegSection: PropTypes.bool.isRequired,
  user: PropTypes.array.isRequired,
  toggleConfirmOpenDialog: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  success: state.UI.success,
  error: state.UI.error,
  success_mess: state.UI.success_mess,
  error_mess: state.UI.error_mess,
  authenticated: state.user.authenticated,
  /* loaders */
  loading_user: state.UI.loading_user,
  loading_data: state.UI.loading_data,
  title: state.UI.title,
  error_network: state.UI.error_network,
  userInterface: state.user.userInterface,
  showRegSection: state.user.showRegSection,
  user: state.user.user,
  isConnected: state.UI.isConnected,
  openConfirmDialog: state.UI.openConfirmDialog
});

export default connect(mapStateToProps, {
  logOut,
  cancleCycleErrorConnected,
  toggleConfirmOpenDialog
})(NavbarContainer);
