import React, { memo } from "react";
import { connect } from "react-redux";
import { selectUrlParamsId } from "@AppStore/Selectors/index";
import {
  selectWorkObjectHoles,
  selectWorkObjectHolesColumns,
  selectWorkObjectHolesForm,
} from "@AppStore/Selectors/workObjects";
import { iudWorkObjectHole } from "@AppStore/Actions/Derictories/WorkObjects";
//components
//import { TableMasterController } from "./TableMasterController";
import { TableMasterController } from "@Templates/DerictoriesComponents/TableMaster";
import { FindFrame } from "@Templates/DerictoriesComponents/Creators";

const HolesContainer = memo(
  ({
    loading_data,
    userInterface,
    columns,
    forms,
    data,
    //funcs
    iudWorkObjectHole,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    const iudData = (flag, body, handleClose) =>
      iudWorkObjectHole(flag, body, handleClose);
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={FindFrame(userInterface, "WorkObjectFrame")}
        iudDerictories={iudData}
        subData={{}}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
      />
    );
  }
);
const mapStateToProps = (state) => ({
  loading_data: state.UI.loading_data,
  userInterface: state.user.userInterface,
  columns: selectWorkObjectHolesColumns(state),
  forms: selectWorkObjectHolesForm(state),
  data: selectWorkObjectHoles(state),
  parentIdUrlParam: selectUrlParamsId(state),
});
const mapDispatchToProps = {
  iudWorkObjectHole,
};
export default connect(mapStateToProps, mapDispatchToProps)(HolesContainer);
