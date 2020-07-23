import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import {
  selectExFlags,
  selectExFlagsItems,
  selectUrlParamsId,
} from '@AppStore/Selectors/index'
import {
  selectPlanDetails,
  selectPlanDetailsColumns,
  selectPlansDetailsForm,
} from '@AppStore/Selectors/plan'
import { getWorkPerformers } from '../../../../../AppStore/Actions/Derictories/Performers'
import { selectPerformens } from '../../../../../AppStore/Selectors/performents'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { selectDrillingRigs } from '@AppStore/Selectors/drillingRigs'
import { selectWorkKinds } from '@AppStore/Selectors/workKinds'
import { iudPlanDetail, getExFlags } from '@AppStore/Actions/Derictories/Plans'
//components
//import { TableMasterController } from "./TableMasterController";
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { getDrillingRigs } from '@AppStore/Actions/Derictories/DrillingRigs'
import { getWorkKinds } from '@AppStore/Actions/Derictories/WorkKinds'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { FindFrame } from '@Templates/DerictoriesComponents/Creators'

const DetailsContainer = memo(
  ({
    loading_data,
    data,
    exflags,
    organizations,
    drillingRigs,
    performens,
    exFlagsItems,
    workKinds,
    userInterface,
    columns,
    forms,
    //funcs
    getDrillingRigs,
    getWorkKinds,
    getOrganizations,
    getWorkPerformers,
    getExFlags,
    iudPlanDetail,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    useEffect(() => {
      getDrillingRigs()
      getWorkKinds()
      getOrganizations()
      getExFlags()
      getWorkPerformers()
    }, [])
    useEffect(() => {}, [])
    useEffect(() => {}, [])
    const iudData = (flag, body, handleClose) =>
      iudPlanDetail(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={FindFrame(userInterface, 'PlansFrame')}
        iudDerictories={iudData}
        subData={{
          exflags,
          organizations,
          drillingRigs,
          workKinds,
          exFlagsItems,
          performens,
        }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
      />
    )
  }
)
const mapStateToProps = (state) => ({
  loading_data: state.UI.loading_data,
  userInterface: state.user.userInterface,
  columns: selectPlanDetailsColumns(state),
  forms: selectPlansDetailsForm(state),
  data: selectPlanDetails(state),
  exflags: selectExFlags(state),
  organizations: selectOrganizations(state),
  drillingRigs: selectDrillingRigs(state),
  workKinds: selectWorkKinds(state),
  exFlagsItems: selectExFlagsItems(state),
  parentIdUrlParam: selectUrlParamsId(state),
  performens: selectPerformens(state),
})
const mapDispatchToProps = {
  getDrillingRigs,
  getWorkKinds,
  getOrganizations,
  iudPlanDetail,
  getExFlags,
  getWorkPerformers,
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
