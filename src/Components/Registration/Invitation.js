import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { sendInvitation } from "@AppStore/Actions/User";
import {
  getUserFields,
  getUserFrames
} from "@AppStore/Actions/UserData/UserData";
//material ui
import TextField from "@material-ui/core/TextField";
//components
import { CustomWrapperDiv, CustomPaper } from "./styledComponents";
import { DefaultButton } from "../../Utils/Buttons";

const Invitation = ({
  sendInvitation,
  getUserFields,
  getUserFrames,
  loading_user
}) => {
  useEffect(() => {
    getUserFields();
    getUserFrames();
  }, []);
  const [email, setEmail] = useState("");
  const onChange = event => setEmail(event.currentTarget.value);
  return (
    <CustomWrapperDiv>
      <h1>Приглашение по почте</h1>
      <CustomPaper>
        <TextField
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          label="Почта"
          value={email}
          onChange={onChange}
        />
        <DefaultButton
          loading={loading_user}
          callback={() => sendInvitation(email)}
          text="Пригласить"
        />
      </CustomPaper>
    </CustomWrapperDiv>
  );
};
const mapStateToProps = state => ({
  loading_user: state.UI.loading_user
});
export default connect(mapStateToProps, {
  sendInvitation,
  getUserFrames,
  getUserFields
})(Invitation);
