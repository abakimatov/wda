import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import {
  selectContractsDetails,
  selectContractsDetailsForm,
  selectContractsDetailsColumns,
} from '@AppStore/Selectors/contracts'
import { iudContractDetail } from '@AppStore/Actions/Derictories/Contracts'
//components
//import { TableMasterController } from "./TableMasterController";
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { FindFrame } from '@Templates/DerictoriesComponents/Creators'
import { selectUrlParamsId } from '@AppStore/Selectors'
import { getWorkKinds } from '@AppStore/Actions/Derictories/WorkKinds'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'
import { selectWorkKinds } from '@AppStore/Selectors/workKinds'

const DetailsContainer = memo(
  ({
    loading_data,
    data,
    workKinds,
    workObjects,
    userInterface,
    columns,
    forms,
    //funcs
    getWorkKinds,
    getWorkObjects,
    iudContractDetail,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    useEffect(() => {
      refreshData()
    }, [])
    const refreshData = () => {
      getWorkKinds()
      getWorkObjects()
    }
    const iudData = (flag, body, handleClose) =>
      iudContractDetail(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={FindFrame(userInterface, 'PlansFrame')}
        iudDerictories={iudData}
        subData={{
          workKinds,
          workObjects,
        }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state) => ({
  loading_data: state.UI.loading_data,
  userInterface: state.user.userInterface,
  columns: selectContractsDetailsColumns(state),
  forms: selectContractsDetailsForm(state),
  data: selectContractsDetails(state),
  parentIdUrlParam: selectUrlParamsId(state),
  workObjects: selectWorkObjects(state),
  workKinds: selectWorkKinds(state),
})
const mapDispatchToProps = {
  iudContractDetail,
  getWorkKinds,
  getWorkObjects,
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
