import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import {
  selectUrlParamsId,
} from "@AppStore/Selectors/index";
import {
  selectWorkObjectExecutorsColumns,
  selectWorkObjectExecutorsForm,
  selectWorkObjectExecutor,
} from "@AppStore/Selectors/workObjects";
import { selectOrganizations } from '@AppStore/Selectors/organizations';
import { iudWorkObjectExecutor } from "@AppStore/Actions/Derictories/WorkObjects";
//components
//import { TableMasterController } from "./TableMasterController";
import { TableMasterController } from "@Templates/DerictoriesComponents/TableMaster";
import { getOrganizations } from "@AppStore/Actions/Derictories/Organizations";
import { FindFrame } from "@Templates/DerictoriesComponents/Creators";

const ExecutorsContainer = memo(
  ({
    loading_data,
    userInterface,
    columns,
    forms,
    data,
    organizations,
    //funcs
    getOrganizations,
    iudWorkObjectExecutor,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    useEffect(() => {
      getOrganizations();
    }, []);
    const iudData = (flag, body, handleClose) =>
      iudWorkObjectExecutor(flag, body, handleClose);
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={FindFrame(userInterface, "WorkObjectFrame")}
        iudDerictories={iudData}
        subData={{
          organizations,
        }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
      />
    );
  }
);
const mapStateToProps = (state) => ({
  loading_data: state.UI.loading_data,
  userInterface: state.user.userInterface,
  columns: selectWorkObjectExecutorsColumns(state),
  forms: selectWorkObjectExecutorsForm(state),
  data: selectWorkObjectExecutor(state),
  organizations: selectOrganizations(state),
  parentIdUrlParam: selectUrlParamsId(state),
});
const mapDispatchToProps = {
  iudWorkObjectExecutor,
  getOrganizations,
};
export default connect(mapStateToProps, mapDispatchToProps)(ExecutorsContainer);
